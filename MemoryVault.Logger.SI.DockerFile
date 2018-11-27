FROM microsoft/aspnetcore-build as build
WORKDIR /src

# copy csproj and restore as distinct layers
COPY *.sln .
COPY MemoryVault.Logger.SI/*.csproj ./MemoryVault.Logger.SI/
COPY MemoryVault.Common.Types/*.csproj ./MemoryVault.Common.Types/
COPY MemoryVault.Common.Utils/*.csproj ./MemoryVault.Common.Utils/
RUN dotnet restore

COPY MemoryVault.Logger.SI/.	./MemoryVault.Logger.SI/
COPY MemoryVault.Common.Types/. ./MemoryVault.Common.Types/
COPY MemoryVault.Common.Utils/. ./MemoryVault.Common.Utils/

FROM build AS publish
WORKDIR /src/MemoryVault.Logger.SI
RUN dotnet publish -c Release -o out

FROM microsoft/dotnet:2.0-runtime AS runtime
WORKDIR /app
COPY --from=publish /src/MemoryVault.Logger.SI/out ./
ENTRYPOINT ["dotnet", "dotnetapp.dll"]
