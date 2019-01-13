using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemoryVault.Common.Types.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MemoryVault.Manager.UI.Controllers
{
    [Route("api/v2/gallery/[action]")]
    [ApiController]
    public class GalleryV2Controller : ControllerBase
    {
        private readonly int _defaultSkip = 0;
        private readonly int _defaultTake = 50;
        private IVaultListRepository _repo;

        public GalleryV2Controller(IVaultListRepository repo)
        {
            _repo = repo;
        }

        [ActionName("test")]
        [HttpGet]
        public IActionResult GetTest()
        {
            return Ok("Test => OK");
        }

        [ActionName("approved")]
        [HttpGet()]
        public async Task<IActionResult> ListApproved(int? skip, int? take)
        {
            return Ok(await _repo.ListApproved(
                skip ?? _defaultSkip, take ?? _defaultTake));
        }


        [ActionName("pending")]
        [HttpGet()]
        public async Task<IActionResult> ListPending(int? skip, int? take)
        {
            return Ok(await _repo.ListApprovePending(
                skip ?? _defaultSkip, take ?? _defaultTake));
        }
    }
}
