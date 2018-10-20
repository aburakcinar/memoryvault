using MemoryVault.Common.Types.Enums;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Text;

namespace MemoryVault.Common.Types.Models
{
    public class ThumbnailRequestModel
    {
		public ObjectId Id { get; set; }

		public ThumbnailSizes Size { get; set; }
	}
}
