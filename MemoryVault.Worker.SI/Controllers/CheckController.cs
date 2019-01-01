using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemoryVault.Common.Types.Interfaces;
using MemoryVault.Common.Types.Models.Config;
using MemoryVault.Worker.SI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using NLog;

namespace MemoryVault.Worker.SI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CheckController : ControllerBase
    {
        private static ILogger _logger = LogManager.GetCurrentClassLogger();

        private SecretConfiguration _keys;
        private IRepository _repo;

        public CheckController(IOptions<SecretConfiguration> options, IRepository repo)
        {
            _keys = options.Value;
            _repo = repo;
        }

        [HttpGet,ActionName("config")]
        public IActionResult Check()
        {
            _logger.Info("check/config will be executed.");

            string retval = _keys.Mongo.MainConnectionString;

            return Ok($"Hit : {retval}");
        }

        [HttpGet,ActionName("mongo")]
        public IActionResult CheckMongo()
        {
            _logger.Info("check/mongo will be executed.");

            return Ok($"Mongo connection state : {_repo.IsAlive()}");
        }


        //[HttpGet]
        //[Route("/mongo")]
        //public IActionResult CheckMongoConn()
        //{
        //    string retval = _keys.MongoDbConnectionKey;

        //    return Ok($"mongo connection is successful : {retval}");
        //}
    }
}