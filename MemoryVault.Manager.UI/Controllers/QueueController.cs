using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemoryVault.Common.Types.Models;
using MemoryVault.Manager.UI.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace MemoryVault.Manager.UI.Controllers
{
    [Route("api/v1/queue/[action]")]
    [Produces("application/json")]
    public class QueueController : ControllerBase
    {
        [HttpGet, ActionName("test")]
        public IActionResult Test()
        {
            //new QueueRepository().Enqueue<MemoryItemModel>(new MemoryItemModel
            //{
            //  CreateTime = DateTime.Now,
            //  Id = ObjectId.GenerateNewId(),
            //  ItemId = ObjectId.GenerateNewId()
            //});

            return Ok();
        }

        [HttpGet, ActionName("test10")]
        public IActionResult Test10()
        {

            //for (int i = 0; i < 10; i++)
            //{
            //  new QueueRepository().Enqueue(new { Id = i });
            //}

            return Ok();
        }
    }
}
