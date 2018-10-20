using System;
using System.Collections.Generic;
using System.Text;

namespace MemoryVault.Common.Types.Commands
{
    public interface IQueueCommand
    {
		Guid CorrelationId { get; set; }


	}
}
