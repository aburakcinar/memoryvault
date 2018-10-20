using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Text;

namespace MemoryVault.Common.Types.Commands
{
	public class CreateThumbnailCommand : IQueueCommand
	{
		#region IQueueCommand

		public Guid CorrelationId { get; set; }

		#endregion

		#region Properties

		public string MemoryId { get; set; }

		#endregion
	}
}
