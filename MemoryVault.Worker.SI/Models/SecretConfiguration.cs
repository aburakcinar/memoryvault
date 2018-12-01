using MemoryVault.Common.Types.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MemoryVault.Worker.SI.Models
{
    public class SecretConfiguration : ISecretConfigurations
    {
        public MongoConfiguration Mongo { get; set; }
    }

}
