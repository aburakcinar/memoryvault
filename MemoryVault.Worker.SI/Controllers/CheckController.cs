using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemoryVault.Common.Types.Models.Config;
using MemoryVault.Worker.SI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace MemoryVault.Worker.SI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckController : ControllerBase
    {
        private SecretConfiguration _keys;

        public CheckController(IOptions<SecretConfiguration> options)
        {
            _keys = options.Value;
        }

        [HttpGet]
        public IActionResult Check()
        {
            string retval = _keys.Mongo.MainConnectionString;

            return Ok($"Hit : {retval}");
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