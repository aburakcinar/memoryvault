using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemoryVault.Common.Types.Enums;
using MemoryVault.Logger.SI.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using MemoryVault.Logger.SI.Utils;
using MongoDB.Bson;

namespace MemoryVault.Logger.SI.Controllers
{
    [Route("api/log/v1/[action]")]
    [Produces("application/json")]
    public class LoggerController : Controller
    {
        private ILogRepository _repository;

        public LoggerController(ILogRepository repository)
        {
            _repository = repository;
        }


        [HttpPost(), ActionName("info")]
        public IActionResult Info()
        {
            _repository.Info(Request.GetRawBodyString());

            return Ok();
        }

        //[HttpPost(), ActionName("trace")]
        //public IActionResult Trace([FromBody]JRaw message)
        //{
        //    _repository.Trace(message);

        //    return Ok();
        //}

        //[HttpPost(), ActionName("warning")]
        //public IActionResult Warning([FromBody]JRaw message)
        //{
        //    _repository.Warning(message);

        //    return Ok();
        //}

        //[HttpPost(), ActionName("error")]
        //public IActionResult Error([FromBody]JRaw message)
        //{
        //    _repository.Error(message);

        //    return Ok();
        //}


        //[HttpPost()]
        //[Route("api/log/v1/list")]
        //public IActionResult ListLast10()
        //{
        //    using (var ctx = new LogContext(_configuration.GetConnectionString("MongoDbConnection")))
        //    {
        //        var lst = ctx.Logs
        //            .Find<LogModel>(p => true)
        //            .Sort(Builders<LogModel>.Sort.Descending(s => s.CreateTime))
        //            .Limit(10)
        //            .ToList();

        //        return Ok(lst);
        //    }
        //}

        [HttpGet("{count:int}"), ActionName("list")]
        public string ListLast(int count)
        {
            var res = _repository.ListLast(count);

            return res.ToJson(new MongoDB.Bson.IO.JsonWriterSettings
            {
                Indent = true           
            });
        }

    }
}
