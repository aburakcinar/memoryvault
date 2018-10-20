using MemoryVault.Common.Types.Commands;
using System;
using System.Collections.Generic;
using System.Text;

namespace MemoryVault.Common.Types.Interfaces
{
    public interface IQueueRepository
    {
		void Enqueue<TCommand>(TCommand command) where TCommand : IQueueCommand;
    }
}
