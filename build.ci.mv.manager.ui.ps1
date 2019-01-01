

function IsVersionString {
    param (
        [string]$versionString
    )

    [Version]$version = $null

    if( [System.Version]::TryParse($versionString,[ref] $version) ){
        $TRUE
    }
    else{
        $FALSE
    }
}

Clear-Host

#Write-Host "--- Building and push to registry memoryvault.manager.ui ---" -ForegroundColor Green

$buildversionfile = ".\build-versions.json"

if ( Test-Path $buildversionfile ){
    $json = Get-Content $buildversionfile | Out-String | ConvertFrom-Json
    $json.CurrentVersion.Build = $json.CurrentVersion.Build + 1
}
else{
    $json = @{ CurrentVersion = @{ Major = 1; Minor = 0; Build = 0 } }
}

$json | ConvertTo-Json | Out-File $buildversionfile

"--- Current version : $($json.CurrentVersion.Major).$($json.CurrentVersion.Minor).$($json.CurrentVersion.Build) ---" | Write-Host 

Write-Host "Will build docker image ..."

$version = "$($json.CurrentVersion.Major).$($json.CurrentVersion.Minor).$($json.CurrentVersion.Build)"

$exp = "docker image build --tag narayan/memoryvault.manager.ui:latest --force-rm --rm -f MemoryVault.Manager.UI.DockerFile ."

Invoke-Expression $exp -OutVariable out -Verbose | Tee-Object -Variable out | Out-Null

$imageId = ""

foreach($ls in $out.split("`n")){
    if( $ls -like '*Successfully built*' ){
        $parts = $ls.split(" ")
        if( $parts.length -eq 3){
            $imageId = $parts[2]
        }
    }
}

$inspect = "docker image inspect "+ $imageId +" --format '{{json .RepoTags}}'" 

#Write-Host "Inspect :"
#Write-Host $inspect

$tags = Invoke-Expression $inspect | ConvertFrom-Json

foreach($tag in $tags){
    $tag_replaced = $tag.Replace("narayan/memoryvault.manager.ui:",  [String]::Empty)

    $isVer = IsVersionString($tag_replaced)
    $str = "Tag : {0}, IsVersion:{1}" -f $tag_replaced, $isVer
    Write-Host $str
}

#Write-Output $tags

#$jsonRepresentation | ConvertTo-Json -depth 100 | Out-File "D:\dummy_path\file.json"
