using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemoryVault.Common.Types.Models.Config;
using MemoryVault.Logger.SI.Interfaces;
using MemoryVault.Logger.SI.Utils;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace MemoryVault.Logger.SI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.Configure<MongoDbConfig>(opts =>
            {
                opts.ConnectionString = Configuration.GetSection("MongoConnection:ConnectionString").Value;
                opts.LogDatabaseName = Configuration.GetSection("MongoConnection:Databases:LogDb").Value;
                opts.VaultDatabaseName = Configuration.GetSection("MongoConnection:Databases:VaultDb").Value;
            });

            //services.AddRouting(opts =>
            //{
            //    opts.
            //});

            services.AddScoped<ILogRepository, MongoDbLogRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
