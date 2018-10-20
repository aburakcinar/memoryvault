using MemoryVault.Common.Types.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace MemoryVault.Common.Types.Models
{
    public class ThumbnailItemModel
    {
		public ThumbnailSizes Size { get; set; }

		public byte[] Data { get; set; }

		public DateTime CreateTime { get; set; }
    }
}
