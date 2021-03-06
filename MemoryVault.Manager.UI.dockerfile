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
WORKDIR /src/MemoryVault.Manager.UI
RUN dotnet publish -c Release -o out

FROM node:8.11-alpine as build_ng
# install angular-cli as node user
RUN chown -R node:node /usr/local/lib/node_modules \
    && chown -R node:node /usr/local/bin
USER node
RUN npm install -g @angular/cli

WORKDIR /app
COPY --from=publish /src/MemoryVault.Manager.UI ./

# set npm as default package manager for root
USER root
RUN ng set --global packageManager=npm
RUN ng build --aot --prod

FROM microsoft/dotnet:2.1-aspnetcore-runtime AS runtime
WORKDIR /app
COPY --from=build_ng /app/out ./
ENTRYPOINT ["dotnet", "MemoryVault.Manager.UI.dll"]
