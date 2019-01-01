using System;
using System.Collections.Generic;
using System.Text;
using MemoryVault.Common.Types.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MemoryVault.Common.Utils.Data.Mongo
{
    public abstract class BaseMongoRepository : IDisposable, IRepository
    {
        #region Fields

        private MongoClient _client;

        #endregion

        #region Properties

        protected string ConnectionString { get; set; }

        public abstract string DatabaseName { get; }


        #endregion

        #region CTOR

        public BaseMongoRepository()
        {

        }

        public BaseMongoRepository(string connectionString)
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

        public bool IsAlive()
        {
            try
            {
                var db = GetDatabase();
                return true;
            }
            catch(Exception exc)
            {
                return false;
            }
        }

        #endregion

        #region IDisposable

        public virtual void Dispose()
        {
        }

        #endregion

    }
}
