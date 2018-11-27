using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MemoryVault.Common.Utils.Data.Mongo
{
    public abstract class BaseMongoContext : IDisposable
    {
        #region Fields

        private MongoClient _client;

        #endregion

        #region Properties

        protected string ConnectionString { get; set; }

        public abstract string DatabaseName { get; }


        #endregion

        #region CTOR

        public BaseMongoContext()
        {

        }

        public BaseMongoContext(string connectionString)
        {
            ConnectionString = connectionString;
        }

        #endregion

        #region Methods

        protected IMongoClient GetClient()
        {
            if (_client == null)
                _client = new MongoClient(ConnectionString);

            return _client;
        }

        protected IMongoDatabase GetDatabase()
        {
            var db = GetClient().GetDatabase(DatabaseName, new MongoDatabaseSettings { GuidRepresentation = MongoDB.Bson.GuidRepresentation.Standard });

            db.RunCommandAsync((Command<BsonDocument>)"{ping:1}").Wait();

            return db;
        }

        protected IMongoCollection<TModel> GetCollection<TModel>(string collName)
        {
            return GetDatabase().GetCollection<TModel>(collName);
        }

        #endregion

        #region IDisposable

        public virtual void Dispose()
        {
        }

        #endregion

    }
}
