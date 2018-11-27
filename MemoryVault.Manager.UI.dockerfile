FROM microsoft/dotnet:2.1-sdk as build
WORKDIR /src

COPY *.sln .
COPY MemoryVault.Manager.UI/*.csproj ./MemoryVault.Manager.UI/
RUN dotnet restore

COPY MemoryVault.Manager.UI/.	./MemoryVault.Manager.UI/

FROM build AS publish
WORKDIR /src/MemoryVault.Manager.UI
RUN dotnet publish -c Release -o out

FROM microsoft/dotnet:2.1-aspnetcore-runtime AS runtime
WORKDIR /app
COPY --from=publish /src/MemoryVault.Manager.UI/out ./
ENTRYPOINT ["dotnet", "MemoryVault.Manager.UI.dll"]
