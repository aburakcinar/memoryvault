using MemoryVault.Common.Types.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace MemoryVault.Manager.UI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GalleryController : ControllerBase
    {
        private IVaultListRepository _repo;

        public GalleryController(IVaultListRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{count}")]
        public async Task<IActionResult> Last(int count)
        {
            return Ok(await _repo.ListLast(count));
        }
    }
}
