using MemoryVault.Common.Types.Enums;
using MemoryVault.Common.Utils.CoreServices;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MemoryVault.Manager.SI.Utils
{
    public class MirrorWorkerHostedService : HostedService
	{
		protected override async Task ExecuteAsync(CancellationToken cancellationToken)
		{
			Debug.WriteLine("ExecuteAsync");

			await Task.Factory.StartNew(() =>
			{
				Thread.Sleep(3000);

				var factory = new ConnectionFactory() { HostName = "localhost" };
				using (var connection = factory.CreateConnection())
				{
					using (var channel = connection.CreateModel())
					{
						channel.QueueDeclare(queue: MemoryVaultConstants.QUEUE_NAME,
											 durable: false,
											 exclusive: false,
											 autoDelete: false,
											 arguments: null);

						var consumer = new EventingBasicConsumer(channel);
						consumer.Received += (model, ea) =>
						{
							var body = ea.Body;
							var message = Encoding.UTF8.GetString(body);
						};

						channel.BasicConsume(queue: MemoryVaultConstants.QUEUE_NAME,
											 autoAck: true,
											 consumer: consumer);

						while (!cancellationToken.IsCancellationRequested)
						{
							Thread.Sleep(500);
						}
					}
				}

			});
		}
	}
}
