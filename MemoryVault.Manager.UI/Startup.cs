using MemoryVault.Common.Types.Interfaces;
using MemoryVault.Common.Utils.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace MemoryVault.Manager.UI
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddCors();

            services.Configure<FormOptions>(x =>
            {
                x.ValueLengthLimit = int.MaxValue;
                x.MultipartBodyLengthLimit = int.MaxValue; // In case of multipart
            });

            services.AddSingleton<IVaultDataRepository, VaultMongoRepository>();
            services.AddSingleton<IVaultListRepository, VaultMongoRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.Run(async (context) =>
            //{
            //  await context.Response.WriteAsync("Hello World!");
            //});

            app.UseCors(builder =>
            {
                builder
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowAnyOrigin();
            });


            app.UseMvc();
            app.UseDefaultFiles();
            app.UseStaticFiles();

        }
    }
}
