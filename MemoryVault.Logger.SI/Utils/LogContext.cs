using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemoryVault.Common.Types.Models.Config;
using MemoryVault.Common.Types.Models.Logs;
using MemoryVault.Common.Utils.Data.Mongo;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MemoryVault.Logger.SI.Utils
{
    public class LogContext : BaseMongoContext
    {
        #region Fields

        IOptions<MongoDbConfig> _options;

        #endregion

        #region Properties

        public override string DatabaseName => _options.Value.LogDatabaseName;

        #endregion

        #region CTOR

        public LogContext(IOptions<MongoDbConfig> options) : base(options.Value.ConnectionString)
        {
            _options = options;
        }

        #endregion

        #region Methods

        public void AddLog(LogModel item)
        {
            var coll = GetCollection<LogModel>("logs");

            coll.InsertOne(item);
        }

        public async Task AddLogAsync(LogModel item)
        {
            var coll = GetCollection<LogModel>("logs");

            await coll.InsertOneAsync(item);
        }

        public List<BsonDocument> ListLast(int count)
        {
            var coll = GetCollection<BsonDocument>("logs");

            return coll
                   .Find<BsonDocument>(p => true)
                   //.Sort(Builders<BsonDocument>.Sort.Descending(s => s.CreateTime))
                   .Limit(count)
                   .ToList();            
        }

        #endregion
    }
}
