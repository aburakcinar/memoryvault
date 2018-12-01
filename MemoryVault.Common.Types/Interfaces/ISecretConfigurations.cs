using System;
using System.Collections.Generic;
using System.Text;

namespace MemoryVault.Common.Types.Interfaces
{
    public interface ISecretConfigurations
    {
        MongoConfiguration Mongo { get; set; }
    }

    public class MongoConfiguration
    {
        public string MainConnectionString { get; set; }
    }
}
