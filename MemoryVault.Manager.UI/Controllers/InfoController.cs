using MemoryVault.Common.Types.Enums;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;

namespace MemoryVault.Manager.UI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class InfoController : ControllerBase
  {
    IHostingEnvironment _env;

    public InfoController(IHostingEnvironment env)
    {
      _env = env;
    }

    [HttpGet]
    public IActionResult Index()
    {
      var data = new
      {
        Environment = _env.EnvironmentName,
        MainConnectionString = Environment.GetEnvironmentVariable(EnvironmentEnums.MAIN_CONNECTION_STRING),
        IsDocker = Environment.GetEnvironmentVariable(EnvironmentEnums.DOCKER)
      };

      return Ok(data);
    }
  }
}
