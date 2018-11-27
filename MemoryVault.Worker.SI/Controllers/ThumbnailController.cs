using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using MemoryVault.Common.Types.Enums;
using MemoryVault.Common.Types.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.GridFS;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;

namespace MemoryVault.Worker.SI.Controllers
{
	[Route("api/v1/thumb/[action]")]
	public class ThumbnailController : ControllerBase
	{
		[HttpGet, ActionName("test")]
		public async Task<IActionResult> TestGenerate()
		{
			return await Generate("5baf49d47f2e830a58a65b2a");
		}

		[HttpPost, ActionName("generate")]
		public async Task<IActionResult> Generate([FromBody] string memoryId)
		{
			var objId = ObjectId.Parse(memoryId);

			return await Generate(objId);
		}
		
		public async Task<IActionResult> Generate(ObjectId memoryId)
		{
			var client = new MongoDB.Driver.MongoClient("mongodb://root:ASD123qwe.@localhost/?safe=true");
			var db = client.GetDatabase("memoryvault");

			var coll = db.GetCollection<MemoryItemModel>("memories");
			
			var founds = coll.Find(p => p.Id == memoryId).FirstOrDefault();

			if (founds == null)
			{
				return NotFound("File not found.");
			}

			GridFSBucketOptions opts = new GridFSBucketOptions();
			opts.BucketName = "memoryfiles";

			var bucket = new GridFSBucket(db, opts);

			bool isChanged = false;
			List<ThumbnailItemModel> lstThumbs = new List<ThumbnailItemModel>();

			foreach (ThumbnailSizes size in Enum.GetValues(typeof(ThumbnailSizes)))
			{
				using (var stream = bucket.OpenDownloadStream(founds.ItemId))
				{
					var dimension = GetDimension(size);

					using (Image<Rgba32> bg = new Image<Rgba32>(dimension, dimension))
					{
						try
						{
							using (Image<Rgba32> image = Image.Load(stream)) //open the file and detect the file type and decode it
							{
								int iWidth;
								int iHeight;
								int margin = 3;

								float ratio = (float)image.Width / (float)image.Height;

								if (ratio > 1)
								{
									iWidth = dimension - 2 * margin;
									iHeight = (int)(iWidth / ratio);
								}
								else
								{
									iHeight = dimension - 2 * margin;
									iWidth = (int)(iHeight * ratio);
								}
								// image is now in a file format agnostic structure in memory as a series of Rgba32 pixels
								image.Mutate(ctx => ctx.Resize(iWidth, iHeight)); // resize the image in place and return it for chaining

								bg.Mutate(ctx => ctx.Fill(Rgba32.Black));

								int pX = (int)((dimension - iWidth) / 2);
								int pY = (int)((dimension - iHeight) / 2);

								bg.Mutate(ctx => ctx.DrawImage(image, PixelBlenderMode.Normal, 1, new SixLabors.Primitives.Point(pX, pY)));

								//var thPath = $"c:/temp/thumbs/th.{memoryId}.{DateTime.Now.ToString("MMDD_HHmmsss")}.{(ThumbnailSizes)size}.png";

								//using (var fs = new System.IO.FileStream(thPath, FileMode.CreateNew))
								//{
								//	bg.SaveAsPng(fs); // based on the file extension pick an encoder then encode and write the data to disk
								//	await fs.FlushAsync();
								//	fs.Close();
								//}

								using (var ms = new MemoryStream())
								{

									bg.SaveAsPng(ms);

									lstThumbs.Add(new ThumbnailItemModel
									{
										CreateTime = DateTime.Now,
										Size = size,
										Data = ms.ToArray()
									});

									isChanged = true;
								}
							}
						}
						catch (Exception exc)
						{
							Debug.WriteLine(exc.Message);
						}
					}
				}
			}

			if (isChanged)
			{
				await coll.UpdateOneAsync(
					p => p.Id == memoryId
					, Builders<MemoryItemModel>.Update.AddToSetEach(s => s.Thumbnails, lstThumbs)
					);
			}

			return Ok();
		}

		private int GetDimension(ThumbnailSizes size)
		{
			switch (size)
			{
				case ThumbnailSizes.S:
					return 150;
				case ThumbnailSizes.M:
					return 200;
				case ThumbnailSizes.L:
					return 250;
				case ThumbnailSizes.XL:
					return 300;
				case ThumbnailSizes.XXL:
					return 450;

				default: return 200;
			}
		}
	}
}