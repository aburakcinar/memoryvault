FROM microsoft/dotnet:2.1-sdk as build
WORKDIR /src

COPY *.sln .
COPY MemoryVault.Common.Types/*.csproj	./MemoryVault.Common.Types/
COPY MemoryVault.Common.Utils/*.csproj	./MemoryVault.Common.Utils/
COPY MemoryVault.Queue.RabbitMQ/*.csproj	./MemoryVault.Queue.RabbitMQ/
COPY MemoryVault.Manager.UI/*.csproj	./MemoryVault.Manager.UI/
COPY MemoryVault.Manager.SI/*.csproj	./MemoryVault.Manager.SI/
COPY MemoryVault.Worker.SI/*.csproj ./MemoryVault.Worker.SI/
RUN dotnet restore

COPY MemoryVault.Common.Types/.	./MemoryVault.Common.Types/
COPY MemoryVault.Common.Utils/.	./MemoryVault.Common.Utils/
COPY MemoryVault.Queue.RabbitMQ/.	./MemoryVault.Queue.RabbitMQ/
COPY MemoryVault.Manager.UI/.	./MemoryVault.Manager.UI/
COPY MemoryVault.Manager.SI/.	./MemoryVault.Manager.SI/
COPY MemoryVault.Worker.SI/.	./MemoryVault.Worker.SI/

FROM build AS publish
WORKDIR /src/MemoryVault.Worker.SI
RUN dotnet publish -c Release -o out

FROM microsoft/dotnet:2.1-aspnetcore-runtime AS runtime
WORKDIR /app
COPY --from=publish /src/MemoryVault.Worker.SI/out ./
ENTRYPOINT ["dotnet", "MemoryVault.Worker.SI.dll"]
