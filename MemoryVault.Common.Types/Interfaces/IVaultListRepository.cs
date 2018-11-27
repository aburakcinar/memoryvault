﻿using MemoryVault.Common.Types.Models.Vault.List;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MemoryVault.Common.Types.Interfaces
{
	public interface IVaultListRepository
	{
		Task<List<MemoryVaultListModel>> ListLast(int count);
	}
}
