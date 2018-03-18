using System;
using System.Collections.Generic;
using System.Text;
using MemoryVault.Common.Types.Enums;
using Newtonsoft.Json.Linq;

namespace MemoryVault.Common.Types.Models.Logs
{
    public class LogModel
    {
        public Guid Id { get; set; }

        public LogLevels Level { get; set; }

        public DateTime CreateTime { get; set; }

        public object Message { get; set; }
    }
}
