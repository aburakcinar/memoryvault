using System;
using System.Collections.Generic;
using System.Text;

namespace MemoryVault.Common.Types.Enums
{
	public class MemoryVaultCollections
	{
		public const string Memories = "memories";
		public const string MemoryFiles = "memoryfiles";
	}

    public class MemoryVaultConstants
    {
		public const string QUEUE_NAME = "MEMORY_VAULT_QUEUE";
    }

	public enum ThumbnailSizes
	{
		S = 0,
		M,
		L,
		XL,
		XXL
	}

	public enum VaultItemState
	{
		PendingApprove = 1,
		Approved = 2
	}
}
