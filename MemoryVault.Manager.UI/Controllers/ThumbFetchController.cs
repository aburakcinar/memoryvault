using MemoryVault.Common.Types.Enums;
using MemoryVault.Common.Types.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace MemoryVault.Manager.UI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ThumbFetchController : ControllerBase
  {
    private IVaultDataRepository _repo;

    public ThumbFetchController(IVaultDataRepository repo)
    {
      _repo = repo;
    }

    [HttpGet("{id}/{size}")]
    public async Task<IActionResult> Fetch(string id, ThumbnailSizes size)
    {
      var data = await _repo.GetThumbDataAsync(id, size);

      return File(data,"image/png");
    }
  }
}
