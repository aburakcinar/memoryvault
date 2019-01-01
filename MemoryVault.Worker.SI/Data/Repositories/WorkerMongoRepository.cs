using MemoryVault.Common.Utils.Data.Mongo;
using MemoryVault.Worker.SI.Models;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MemoryVault.Worker.SI.Data.Repositories
{
    public class WorkerMongoRepository : BaseMongoRepository
    {
        private IOptions<SecretConfiguration> _options;

        public override string DatabaseName => "memoryvault_test";

        public WorkerMongoRepository(IOptions<SecretConfiguration> options) : base(options.Value.Mongo.MainConnectionString)
        {
            _options = options;
        }
    }
}
