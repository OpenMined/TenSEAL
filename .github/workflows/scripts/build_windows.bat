echo on

 git submodule init && git submodule update
 
 msbuild .\third_party\SEAL\native\src\SEAL.vcxproj /p:configuration=Release /p:platform=x64 /p:SolutionDir=.. \..\

 pip install .

