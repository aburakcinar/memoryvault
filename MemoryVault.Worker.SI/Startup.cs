using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemoryVault.Common.Types.Interfaces;
using MemoryVault.Common.Types.Models.Config;
using MemoryVault.Worker.SI.Data.Repositories;
using MemoryVault.Worker.SI.Models;
using MemoryVault.Worker.SI.Utils;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace MemoryVault.Worker.SI
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(Microsoft.AspNetCore.Hosting.IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                    .SetBasePath(env.ContentRootPath)
                    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                    .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                    .AddEnvironmentVariables();

            if (env.IsDevelopment())
            {
                builder.AddUserSecrets<Startup>();
            }
            else
            {
                builder.AddDockerSecrets();
            }

            Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<SecretConfiguration>(Configuration.GetSection("SecretConfiguration"));

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

			services.AddSingleton<IHostedService, WorkerHostedService>();
            services.AddTransient<IRepository, WorkerMongoRepository>();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, Microsoft.AspNetCore.Hosting.IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
