@setlocal

pushd %1
@set ExePath=%~fd0\..\tools\jsonNewlineByArr.cpp.exe
@set DataRoot=docs\data

@for /R %%p in (%DataRoot%\Map*.json) do %ExePath% "%%p" 

%ExePath% %DataRoot%\Actors.json 
%ExePath% %DataRoot%\Animations.json 1 2 
%ExePath% %DataRoot%\Armors.json 
%ExePath% %DataRoot%\Classes.json 1 2 
%ExePath% %DataRoot%\CommonEvents.json 1 2 
%ExePath% %DataRoot%\Enemies.json 
%ExePath% %DataRoot%\Items.json 
%ExePath% %DataRoot%\MapInfos.json 
%ExePath% %DataRoot%\Skills.json 
%ExePath% %DataRoot%\States.json 
%ExePath% %DataRoot%\System.json 
%ExePath% %DataRoot%\Tilesets.json 1 
%ExePath% %DataRoot%\Troops.json 1 2 3 
%ExePath% %DataRoot%\Weapons.json 

