using System;
using System.Collections.Generic;
using System.Text;

namespace MemoryVault.Common.Types.Models.Config
{
    public class MongoDbConfig
    {
        public string ConnectionString { get; set; }

        public string LogDatabaseName { get; set; }

        public string VaultDatabaseName { get; set; }

    }
}
