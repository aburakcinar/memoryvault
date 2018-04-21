#FROM microsoft/aspnetcore:2.0
#FROM microsoft/aspnetcore-build:2.0
#ENV MongoConnection:ConnectionString mongodb://mongodb_log:27017
#ARG source
#WORKDIR /app
#EXPOSE 80
#COPY ${source:-obj/Docker/publish} .
#ENTRYPOINT ["dotnet", "memoryvault.logger.si.dll"]
FROM microsoft/aspnetcore-build:2.0 AS build-env
WORKDIR /src

COPY . .

WORKDIR /src/MemoryVault.Logger.SI
RUN dotnet restore
RUN dotnet build -c Release -o /app

# Build runtime image
FROM microsoft/aspnetcore:2.0
WORKDIR /app
COPY --from=build-env . .
ENTRYPOINT ["dotnet", "memoryvault.logger.si.dll"]
