using MemoryVault.Common.Types.Commands;
using MemoryVault.Common.Types.Enums;
using Newtonsoft.Json;
using RabbitMQ.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryVault.Manager.UI.Utils
{
  public static class QueueRepository
  {
    public static void Enqueue<TMsg>(TMsg model) where TMsg : IQueueCommand
    {
      var factory = new ConnectionFactory() { HostName = "localhost" };
      using (var connection = factory.CreateConnection())
      {
        using (var channel = connection.CreateModel())
        {
          channel.QueueDeclare( queue: MemoryVaultConstants.QUEUE_NAME,
                                durable: false,
                                exclusive: false,
                                autoDelete: false,
                                arguments: null);

          string message = JsonConvert.SerializeObject(model);
          var body = Encoding.UTF8.GetBytes(message);

          channel.BasicPublish(exchange: "",
                               routingKey: MemoryVaultConstants.QUEUE_NAME,
                               basicProperties: null,
                               body: body);
        }
      }
    }
  }
}
