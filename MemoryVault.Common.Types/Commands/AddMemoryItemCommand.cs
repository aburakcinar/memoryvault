using System;
using System.Collections.Generic;
using System.Text;

namespace MemoryVault.Common.Types.Commands
{
	public class AddMemoryItemCommand : IQueueCommand
	{
		public Guid CorrelationId { get; set; }
	}
}
