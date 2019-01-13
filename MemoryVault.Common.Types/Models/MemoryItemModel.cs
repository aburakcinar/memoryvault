using MemoryVault.Common.Types.Enums;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace MemoryVault.Common.Types.Models
{
	public class MemoryItemModel
	{
		[BsonId]
		public ObjectId Id { get; set; }

		public ObjectId ItemId { get; set; }

		public DateTime CreateTime { get; set; }

		public List<ThumbnailItemModel> Thumbnails { get; set; }

		public string FileName { get; set; }

		public string FileExtension { get; set; }

		public VaultItemState? ApproveState { get; set; } = VaultItemState.PendingApprove;

		public MemoryItemModel()
		{
			Thumbnails = new List<ThumbnailItemModel>();
		}
	}
}
