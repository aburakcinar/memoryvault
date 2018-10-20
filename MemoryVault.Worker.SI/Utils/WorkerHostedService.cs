using MemoryVault.Common.Types.Commands;
using MemoryVault.Common.Types.Enums;
using MemoryVault.Common.Utils.CoreServices;
using MemoryVault.Worker.SI.Controllers;
using MongoDB.Bson;
using Newtonsoft.Json;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Threading.Tasks.Dataflow;

namespace MemoryVault.Worker.SI.Utils
{
	public class WorkerHostedService : HostedService
	{
		private ActionBlock<string> _ab;

		protected async override Task ExecuteAsync(CancellationToken cancellationToken)
		{
			await Task.Factory.StartNew(() =>
			{
				_ab = new ActionBlock<string>(OnMessage
					, new ExecutionDataflowBlockOptions
					{
						MaxDegreeOfParallelism = 2,
						BoundedCapacity = 2
					});

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
						consumer.Received += async (model, ea) =>
						{
							try
							{
								var body = ea.Body;
								var message = Encoding.UTF8.GetString(body);

								await _ab.SendAsync(message);
							}
							catch (Exception exc)
							{
								Debug.WriteLine($"Error on Received => {exc.Message},[{exc.GetType()}]");
							}
						};

						channel.BasicConsume(queue: MemoryVaultConstants.QUEUE_NAME,
											 autoAck: true,
											 consumer: consumer);

						while (!cancellationToken.IsCancellationRequested)
						{
							Thread.Sleep(500);
						}

						_ab.Complete();
					}
				}
			});
		}

		private async Task OnMessage(string message)
		{
			try
			{
				var cmd = JsonConvert.DeserializeObject<CreateThumbnailCommand>(message);

				await new ThumbnailController().Generate(ObjectId.Parse(cmd.MemoryId));
			}
			catch (Exception exc)
			{
				Debug.WriteLine($"Error on OnMessage => {exc.Message},[{exc.GetType()}]");
			}
		}
	}
}
