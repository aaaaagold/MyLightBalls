// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"agold404_lib","status":true,"description":"","parameters":{}},
{"name":"agold404_base","status":true,"description":"","parameters":{}},
{"name":"Community_Basic","status":false,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"agold404_AnalogBar","status":true,"description":"類比條","parameters":{}},
{"name":"agold404_BlackHoles","status":true,"description":"black holes visual effect api","parameters":{}},
{"name":"agold404_BlackholesV2","status":true,"description":"黑洞v2","parameters":{}},
{"name":"agold404_CanPassInRegions","status":true,"description":"let player or events can in ONLY some regions","parameters":{}},
{"name":"agold404_ChangeTile","status":true,"description":"online change tile","parameters":{}},
{"name":"agold404_CopyEvent","status":true,"description":"複製事件","parameters":{}},
{"name":"agold404_Depository","status":true,"description":"depository where one can put thing inside.\r\n\r\n$gameParty.depository_open(depositoryId) // id can only be basic immutable type which can be converted to string type.\r\n\r\n$gameParty.depository_add(depositoryId,itemData,count) // return itemInfo\r\n$gameParty.depository_del(depositoryId,itemData,count) // return -1 if fail\r\n\r\n$gameParty.depository_transIn(depositoryId,itemData,count) // return -1 if fail\r\n$gameParty.depository_transOut(depositoryId,itemData,count) // return -1 if fail\r\n\r\nwrite <disableDepository> for disabling an item being put into depository\r\nuse $gameParty.depository_setItemCanUse(depositoryId,itemData)\r\n\r\nThis plugin can be renamed as you want.","parameters":{}},
{"name":"agold404_EvalToStr","status":true,"description":"eval a piece of js code to string in Window_Base.drawTextEx","parameters":{}},
{"name":"agold404_EventLongDistDetection","status":true,"description":"<longDistDetection> makes event movable from player locating in the map everywhere","parameters":{}},
{"name":"agold404_EventText","status":true,"description":"display texts on events","parameters":{}},
{"name":"agold404_EventTriggerHere","status":true,"description":"get event can be triggered when overlapped with player","parameters":{}},
{"name":"agold404_ExpandEventRange","status":true,"description":"expand event trigger / collide range","parameters":{}},
{"name":"agold404_ExternalAnimationSetting","status":true,"description":"動畫接動畫 ; 動畫帶圖 ; 動畫帶音效","parameters":{}},
{"name":"agold404_F5NotExitFullScreen","status":true,"description":"prevent player exiting full-screen mode when pressing F5","parameters":{}},
{"name":"agold404_FlashbackText","status":true,"description":"劇情對話文字回顧 flashbackText","parameters":{}},
{"name":"agold404_FullBfsFindPath","status":true,"description":"走到底的 BFS 尋路。","parameters":{}},
{"name":"agold404_Gathering","status":true,"description":"SceneManager.gathering_gen / SceneManager.集氣_gen","parameters":{}},
{"name":"agold404_ImageQueryString","status":true,"description":"runtime 調整圖片","parameters":{}},
{"name":"agold404_InNoteTraits_ElementRate","status":true,"description":"setting element rate in note ; thus can be a wierd value","parameters":{}},
{"name":"agold404_MaxStack","status":true,"description":"set max stack for each item/weapon/armor","parameters":{"DefaultMaxStack":"32767"}},
{"name":"agold404_MenuCommandAccess","status":true,"description":"api to switch accessibility of menu commands\r\n\r\n$gameSystem.menuCommand_setOptionsExists(options,isEnabled)\r\n$gameSystem.menuCommand_setOptionsEnabled(options,isEnabled)\r\n\r\noptions: an array of some cases in Window_MenuCommand.prototype.needsCommand\r\nisEnabled: true, false, undefined(=not using this record)\r\n\r\n\r\nThis plugin can be renamed as you want.","parameters":{}},
{"name":"agold404_NullEventTrigger","status":true,"description":"can make event not to be triggered: set event data page's 'trigger' to null","parameters":{}},
{"name":"agold404_NumBoard","status":true,"description":"數字板","parameters":{}},
{"name":"agold404_PopupMsg","status":true,"description":"popup msg","parameters":{}},
{"name":"agold404_PreloadOnMapload","status":true,"description":"preload images on map load","parameters":{}},
{"name":"agold404_PressPToPause","status":true,"description":"press P to pause","parameters":{}},
{"name":"agold404_SaveManager","status":true,"description":"edit save name ; load from file ; export a save to a file","parameters":{"DisplayedTexts":"","renameSaveTag":"Rename Save's Tag","loadSaveFromFile":"Load Save from File","exportSaveToFile":"Export Save to File","locales":"[\"[\\\"zh-TW\\\\n修改存檔標記\\\\n讀取檔案\\\\n匯出存檔\\\"]\"]\r"}},
{"name":"agold404_Se","status":true,"description":"overwrite AudioManager.playSe, stopSe, StaticSe","parameters":{}},
{"name":"agold404_ShakeScreenY","status":true,"description":"上下搖","parameters":{}},
{"name":"agold404_SkillTree","status":true,"description":"技能樹","parameters":{}},
{"name":"agold404_SplitSpriteset","status":true,"description":"Splitting Spriteset","parameters":{}},
{"name":"agold404_ThroughEventsOnly","status":true,"description":"讓事件可以只穿透事件而不穿透玩家、可在note區設定一事件是否不因離畫面太遠而不行動","parameters":{}},
{"name":"agold404_Timer","status":true,"description":"Much more useful timer","parameters":{}},
{"name":"agold404_UnionCount","status":true,"description":"set a group of items to count together when determine hasMaxItem","parameters":{}},
{"name":"agold404_UnorederedSprite","status":true,"description":"a sprite whose .children will not keep the order.","parameters":{}},
{"name":"agold404_WindowOptions_volumeOffset","status":true,"description":"adjust steps of setting volumes","parameters":{"steps_normal":"5","steps_shift":"25"}}
];
