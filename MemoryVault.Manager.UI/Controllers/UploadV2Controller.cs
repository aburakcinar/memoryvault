using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using MemoryVault.Common.Types.Commands;
using MemoryVault.Common.Types.Models;
using MemoryVault.Manager.UI.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.GridFS;

namespace MemoryVault.Manager.UI.Controllers
{
  [Route("api/v2/upload")]
  [ApiController]
  public class UploadV2Controller : ControllerBase
  {

    [HttpGet]
    public IActionResult Info()
    {
      return Ok("Upload V2 Controller");
    }

    [HttpPost]
    [DisableRequestSizeLimit]
    public async Task<IActionResult> Upload()
    {
      if (!MultipartRequestHelper.IsMultipartContentType(Request.ContentType))
      {
        return BadRequest();
      }

      try
      {
        if (!Request.Form.Files.Any())
        {
          return BadRequest("There is no file.");
        }

        var client = new MongoDB.Driver.MongoClient("mongodb://root:ASD123qwe.@localhost/?safe=true");
        var db = client.GetDatabase("memoryvault");

        var coll = db.GetCollection<MemoryItemModel>("memories");

        foreach (var fileReq in Request.Form.Files)
        {
          GridFSBucketOptions opts = new GridFSBucketOptions();
          opts.BucketName = "memoryfiles";

          var bucket = new GridFSBucket(db, opts);

          ObjectId res;

          using (var stream = fileReq.OpenReadStream())
          {
            res = await bucket.UploadFromStreamAsync(fileReq.FileName, stream);
          }

          var ext = System.IO.Path.GetExtension(fileReq.FileName);

          var memory = new MemoryItemModel
          {
            CreateTime = DateTime.Now,
            ItemId = res,
            FileName = fileReq.FileName,
            FileExtension = ext
          };

          await coll.InsertOneAsync(memory);

          QueueRepository.Enqueue(new CreateThumbnailCommand { MemoryId = memory.Id.ToString() });
        }
      }
      catch(MongoWriteException exc)
      {
        if(((MongoBulkWriteException)exc.InnerException).WriteErrors.Any(p=> p.Category == ServerErrorCategory.DuplicateKey))
        {
          return Ok();
        }

        return Ok(exc.Message);
      }
      catch (Exception exc)
      {
        return Ok(exc.Message);
      }

      return Ok();
    }
  }
}
