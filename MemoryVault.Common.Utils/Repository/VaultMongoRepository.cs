using MemoryVault.Common.Types.Enums;
using MemoryVault.Common.Types.Interfaces;
using MemoryVault.Common.Types.Models;
using MemoryVault.Common.Types.Models.Vault.List;
using MemoryVault.Common.Utils.Data.Mongo;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.GridFS;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MemoryVault.Common.Utils.Repository
{
	public class VaultMongoRepository : BaseMongoRepository, IVaultDataRepository, IVaultListRepository
	{
		#region Fields

		public override string DatabaseName => "memoryvault";

		#endregion

		#region CTOR

		public VaultMongoRepository() 
		{
			ConnectionString = Environment.GetEnvironmentVariable(EnvironmentEnums.MAIN_CONNECTION_STRING);
		}

		#endregion

		#region IVaultDataRepository

		public async Task<byte[]> GetDataAsync(string id)
		{
			var coll = GetCollection<MemoryItemModel>(MemoryVaultCollections.Memories);

			var filter = Builders<MemoryItemModel>.Filter.Eq(p => p.Id, ObjectId.Parse(id));
			var project = Builders<MemoryItemModel>.Projection.Expression(e => e.ItemId);
			var proj = new FindOptions<MemoryItemModel, ObjectId>
			{
				Projection = project
			};

			var found = await coll.FindAsync(filter, proj);
			var fileId = await found.FirstOrDefaultAsync();
			if (fileId != null)
			{
				GridFSBucketOptions opts = new GridFSBucketOptions();
				opts.BucketName = MemoryVaultCollections.MemoryFiles;

				var bucket = new GridFSBucket(GetDatabase(), opts);

				return await bucket.DownloadAsBytesAsync(fileId);
			}

			return null;
		}

		public async Task<byte[]> GetThumbDataAsync(string id, ThumbnailSizes size)
		{
			var coll = GetCollection<MemoryItemModel>(MemoryVaultCollections.Memories);

			var filter = Builders<MemoryItemModel>.Filter.Eq(f => f.Id, ObjectId.Parse(id));
			var project = Builders<MemoryItemModel>.Projection.Expression(e => e.Thumbnails.Find(t => t.Size == size).Data);

			// p => p.Id == ObjectId.Parse(id)
			// proj => proj.Thumbnails.Any(q => q.Size == size)

			//var data = await coll.FindAsync<byte[]>(
			//	filter, project);

			var data = await coll
				.Aggregate()
				.Match(filter)
				.Project(project)
				.FirstOrDefaultAsync();

			return data;
		}

		#endregion

		#region IVaultListRepository

		public async Task<List<MemoryVaultListModel>> ListLast(int count)
		{
			var coll = GetCollection<MemoryItemModel>(MemoryVaultCollections.Memories);

			var result = await coll
				.Find(f => true)
				.SortByDescending(s => s.CreateTime)
				.Limit(count)
				.Project(p => new MemoryVaultListModel { CreateTime = p.CreateTime, FileName = p.FileName, Id = p.Id.ToString() })
				.ToListAsync();

			return result;
		}

		public async Task<List<MemoryVaultListModel>> ListApproved(int skip, int take)
		{
			var coll = GetCollection<MemoryItemModel>(MemoryVaultCollections.Memories);

			var result = await coll
				.Find(f => f.ApproveState.GetValueOrDefault() == VaultItemState.Approved)
				.SortByDescending(s => s.CreateTime)
				.Skip(skip)
				.Limit(take)
				.Project(p => new MemoryVaultListModel { CreateTime = p.CreateTime, FileName = p.FileName, Id = p.Id.ToString() })
				.ToListAsync();

			return result;
		}

		public async Task<List<MemoryVaultListModel>> ListApprovePending(int skip, int take)
		{
			var coll = GetCollection<MemoryItemModel>(MemoryVaultCollections.Memories);

			var result = await coll
				.Find(f => !f.ApproveState.HasValue || f.ApproveState == VaultItemState.PendingApprove)
				.SortByDescending(s => s.CreateTime)
				.Skip(skip)
				.Limit(take)
				.Project(p => new MemoryVaultListModel { CreateTime = p.CreateTime, FileName = p.FileName, Id = p.Id.ToString() })
				.ToListAsync();

			return result;
		}

		#endregion
	}
}
