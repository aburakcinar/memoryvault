using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemoryVault.Common.Types.Enums;
using MemoryVault.Common.Types.Models.Config;
using MemoryVault.Common.Types.Models.Logs;
using MemoryVault.Logger.SI.Interfaces;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using Newtonsoft.Json.Linq;

namespace MemoryVault.Logger.SI.Utils
{
    public class MongoDbLogRepository : ILogRepository
    {
        LogContext _context;

        public MongoDbLogRepository(IOptions<MongoDbConfig> options)
        {
            _context = new LogContext(options);
        }

        public void Error(string message)
        {
            InnerWrite(LogLevels.Error,message);
        }

        //public void Error(JRaw message)
        //{
        //    _context.AddLog(new LogModel
        //    {
        //        Id = Guid.NewGuid(),
        //        CreateTime = DateTime.Now,
        //        Level = Common.Types.Enums.LogLevels.Error,
        //        Message = message
        //    });
        //}

        public void Info(string message)
        {
            InnerWrite(LogLevels.Info,message);
        }

        //public void Info(JRaw message)
        //{
        //    _context.AddLog(new LogModel
        //    {
        //        Id = Guid.NewGuid(),
        //        CreateTime = DateTime.Now,
        //        Level = Common.Types.Enums.LogLevels.Info,
        //        Message = message
        //    });
        //}

        public void Trace(string message)
        {
            InnerWrite(LogLevels.Trace,message);
        }

        //public void Trace(JRaw message)
        //{
        //    _context.AddLog(new LogModel
        //    {
        //        Id = Guid.NewGuid(),
        //        CreateTime = DateTime.Now,
        //        Level = Common.Types.Enums.LogLevels.Trace,
        //        Message = message
        //    });
        //}

        public void Warning(string message)
        {
            InnerWrite(LogLevels.Warning,message);
        }

        //public void Warning(JRaw message)
        //{
        //    _context.AddLog(new LogModel
        //    {
        //        Id = Guid.NewGuid(),
        //        CreateTime = DateTime.Now,
        //        Level = Common.Types.Enums.LogLevels.Warning,
        //        Message = message
        //    });
        //}

        private void InnerWrite(LogLevels level, string message)
        {
            _context.AddLog(new LogModel
            {
                Id = Guid.NewGuid(),
                CreateTime = DateTime.Now,
                Level = level,
                Message = message
            });
        }


        public List<BsonDocument> ListLast(int count)
        {
            return _context.ListLast(count);
        }

    }
}
