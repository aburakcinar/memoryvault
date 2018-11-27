using MemoryVault.Common.Types.Enums;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace MemoryVault.Common.Types.Interfaces
{
	public interface IVaultDataRepository
	{
		Task<byte[]> GetDataAsync(string id);

		Task<byte[]> GetThumbDataAsync(string id, ThumbnailSizes size);
	}
}
