using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemoryVault.Common.Types.Models.Logs;
using MongoDB.Bson;
using Newtonsoft.Json.Linq;

namespace MemoryVault.Logger.SI.Interfaces
{
    public interface ILogRepository
    {
        void Info(string message);

        void Trace(string message);

        void Warning(string message);

        void Error(string message);

        //void Info(JRaw message);

        //void Trace(JRaw message);

        //void Warning(JRaw message);

        //void Error(JRaw message);

        List<BsonDocument> ListLast(int count);
    }
}
