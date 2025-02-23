// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"agold404_lib","status":true,"description":"","parameters":{}},
{"name":"agold404_base","status":true,"description":"","parameters":{}},
{"name":"Community_Basic","status":false,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"agold404_AllocateAbility","status":true,"description":"能力分配，掛JS屬性到被配點的角色身上","parameters":{"AllocatingCostPointRoot":"","AllocatingCostPointName":"\"point name\"","AllocatingCostPointProperty":"_allocPointProperty","AllocatingCostPointCondFunc":"lv>=0&&a._allocPointProperty>=0","AllocatingCostPointLevelUpGain":"a.name().length","AllocatingAbilitiesRoot":"","AllocatingAbilities":"[\"\\\"\\\\\\\"a item 1 \\\\\\\"+Date.now()\\\\n_exampleAbilityProperty\\\\ntrue\\\\n(itemLv,actor)=>itemLv\\\"\"]","AllocatingAbilityPrevLevelWidth":"64","AllocatingAbilityNextArrowWidth":"32","AllocatingAbilityLevelWidth":"64","AllocatingAbilityWindowWidth":"512","ShowingResultsRoot":"","ShowingResults":"[\"\\\"\\\\\\\"atk\\\\\\\"\\\\na.atk\\\\nthis is an example item\\\"\",\"\\\"\\\\\\\"def\\\\\\\"\\\\nactor.def\\\\nthis is an example item\\\"\",\"\\\"\\\\\\\"example\\\\\\\"\\\\nactor._exampleAbilityProperty\\\\nthe corresponding example property\\\"\"]","ResultPrevNumberWidth":"64","ResultNextArrowWidth":"32","ResultNumberWidth":"64\r"}},
{"name":"agold404_AnalogBar","status":true,"description":"類比條","parameters":{}},
{"name":"agold404_AnywhereText","status":true,"description":"text anywhere api","parameters":{}},
{"name":"agold404_AutoUpdatePlugins","status":false,"description":"auto update agold404_* plugins","parameters":{"Js_Plugins_js_Path":"https://raw.githubusercontent.com/aaaaagold/MyLightBalls/refs/heads/main/docs/js/plugins.js\r"}},
{"name":"agold404_BlackHoles","status":true,"description":"black holes visual effect api","parameters":{}},
{"name":"agold404_BlackholesV2","status":true,"description":"黑洞v2","parameters":{}},
{"name":"agold404_BouncingMaterial","status":true,"description":"make a Sprite with a single bitmap bouncing","parameters":{}},
{"name":"agold404_CanPassInRegions","status":true,"description":"let player or events can in ONLY some regions","parameters":{}},
{"name":"agold404_ChangeTile","status":true,"description":"online change tile","parameters":{}},
{"name":"agold404_CharacterPatternRect","status":true,"description":"sprite_chr可設定切掉周圍一些","parameters":{}},
{"name":"agold404_ConcatChoices","status":true,"description":"concatenate several choices (event) command (Show Choices)","parameters":{}},
{"name":"agold404_CopyEvent","status":true,"description":"複製事件","parameters":{"TemplateMapPath":"data/Map004.json","TemplateMapIds":"[\"4\",\"2\"]"}},
{"name":"agold404_CustomItemCostCond","status":true,"description":"use eval to specify 'canUse' condition and item/skill cost","parameters":{}},
{"name":"agold404_DefaultOn_alwaysDash","status":true,"description":"Make default of \"Always Dash\" be on","parameters":{}},
{"name":"agold404_DefaultOn_commandRemember","status":true,"description":"Make default of \"Command Remember\" be on","parameters":{}},
{"name":"agold404_Depository","status":true,"description":"depository where one can put thing inside.\r\n\r\n$gameParty.depository_open(depositoryId) // id can only be basic immutable type which can be converted to string type.\r\n\r\n$gameParty.depository_add(depositoryId,itemData,count) // return itemInfo\r\n$gameParty.depository_del(depositoryId,itemData,count) // return -1 if fail\r\n\r\n$gameParty.depository_transIn(depositoryId,itemData,count) // return -1 if fail\r\n$gameParty.depository_transOut(depositoryId,itemData,count) // return -1 if fail\r\n\r\nwrite <disableDepository> for disabling an item being put into depository\r\nuse $gameParty.depository_setItemCanUse(depositoryId,itemData)\r\n\r\nThis plugin can be renamed as you want.","parameters":{}},
{"name":"agold404_EvalToStr","status":true,"description":"eval a piece of js code to string in Window_Base.drawTextEx","parameters":{}},
{"name":"agold404_EventLongDistDetection","status":true,"description":"<longDistDetection> makes event movable from player locating in the map everywhere","parameters":{}},
{"name":"agold404_EventText","status":true,"description":"display texts on events","parameters":{}},
{"name":"agold404_EventTriggerHere","status":true,"description":"get event can be triggered when overlapped with player","parameters":{}},
{"name":"agold404_EventTriggersEvents","status":true,"description":"let an event can be triggered by another event.","parameters":{}},
{"name":"agold404_ExpandEventRange","status":true,"description":"expand event trigger / collide range","parameters":{}},
{"name":"agold404_ExternalAnimationSetting","status":true,"description":"動畫接動畫 ; 動畫帶圖 ; 動畫帶音效","parameters":{}},
{"name":"agold404_F5NotExitFullScreen","status":true,"description":"prevent player exiting full-screen mode when pressing F5","parameters":{}},
{"name":"agold404_FastForward","status":true,"description":"fast forward","parameters":{"DefaultFastForwardRate":"8\r"}},
{"name":"agold404_FlashbackText","status":true,"description":"劇情對話文字回顧 flashbackText","parameters":{}},
{"name":"agold404_FullBfsFindPath","status":true,"description":"走到底的 BFS 尋路。","parameters":{}},
{"name":"agold404_Gathering","status":true,"description":"SceneManager.gathering_gen / SceneManager.集氣_gen","parameters":{}},
{"name":"agold404_ImageQueryString","status":true,"description":"runtime 調整圖片","parameters":{}},
{"name":"agold404_InChrVision","status":true,"description":"set what to do when an event sees player","parameters":{}},
{"name":"agold404_InNoteTraits_ElementRate","status":true,"description":"setting element rate in note ; thus can be a wierd value","parameters":{}},
{"name":"agold404_ManualScreenOffset","status":true,"description":"manually set screen offset","parameters":{}},
{"name":"agold404_MaxStack","status":true,"description":"set max stack for each item/weapon/armor","parameters":{"DefaultMaxStack":"32767"}},
{"name":"agold404_MenuCommandAccess","status":true,"description":"api to switch accessibility of menu commands\r\n\r\n$gameSystem.menuCommand_setOptionsExists(options,isEnabled)\r\n$gameSystem.menuCommand_setOptionsEnabled(options,isEnabled)\r\n\r\noptions: an array of some cases in Window_MenuCommand.prototype.needsCommand\r\nisEnabled: true, false, undefined(=not using this record)\r\n\r\n\r\nThis plugin can be renamed as you want.","parameters":{}},
{"name":"agold404_MessageWithPictureBehind","status":true,"description":"立繪","parameters":{}},
{"name":"agold404_MsgAutoPad","status":true,"description":"auto padding for Game_Message.prototype.allText","parameters":{}},
{"name":"agold404_NameField","status":true,"description":"name field","parameters":{}},
{"name":"agold404_NullEventTrigger","status":true,"description":"can make event not to be triggered: set event data page's 'trigger' to null","parameters":{}},
{"name":"agold404_NumBoard","status":true,"description":"數字板","parameters":{}},
{"name":"agold404_PasteCommonEvent","status":true,"description":"paste commands in specified common events in a event page","parameters":{}},
{"name":"agold404_PopupMsg","status":true,"description":"popup msg","parameters":{}},
{"name":"agold404_PreloadOnMapload","status":true,"description":"preload images on map load","parameters":{}},
{"name":"agold404_PressPToPause","status":true,"description":"press P to pause","parameters":{}},
{"name":"agold404_SaveManager","status":true,"description":"edit save name ; load from file ; export a save to a file","parameters":{"DisplayedTexts":"","renameSaveTag":"Rename Save's Tag","loadSaveFromFile":"Load Save from File","exportSaveToFile":"Export Save to File","locales":"[\"\\\"zh-TW\\\\n修改存檔標記\\\\n讀取檔案\\\\n匯出存檔\\\"\"]\r"}},
{"name":"agold404_ScanlineSwitchBmp","status":true,"description":"掃描線換圖","parameters":{}},
{"name":"agold404_Se","status":true,"description":"overwrite AudioManager.playSe, stopSe, StaticSe","parameters":{}},
{"name":"agold404_ShakeScreenY","status":true,"description":"上下搖","parameters":{}},
{"name":"agold404_SkillTree","status":true,"description":"技能樹","parameters":{"ShowSkillPoint":"true","SkillPointEvalText":"\"SP: \"+a.skillTreePoint_get()","SkillPointTextX":"168","SkillPointTextY":"100","SkillPointTotalWidth":"128\r"}},
{"name":"agold404_SplitSpriteset","status":true,"description":"Splitting Spriteset","parameters":{}},
{"name":"agold404_StartupEval","status":true,"description":"set eval() script on game startup","parameters":{"OnLoad":"\"getTopFrameWindow().document.title=\\\"OwO\\\";\"","OnBootStart":"\"\"","OnBootTerminate":"\"{ const entry=getUrlParamVal('entry'),dst=getTopFrameWindow().document;\\nconst useㄉㄉㄉ=()=>{ const terms=$dataSystem.terms;\\n const cmds=terms.commands;\\n cmds[9]=\\\"儲存ㄉㄉㄉ\\\";\\n cmds[10]=\\\"結束ㄉㄉㄉ\\\";\\n cmds[18]=\\\"開始ㄉㄉㄉ\\\";\\n cmds[19]=\\\"繼續ㄉㄉㄉ\\\";\\n cmds[21]=\\\"停止ㄉㄉㄉ\\\";\\n};\\nif(DataManager.getLocale()==='zh-TW'){\\ndst.title=\\\"我ㄉ光球ㄉㄉㄉ\\\";\\nif(entry==='CrossTheStreet') dst.title=\\\"過街\\\";\\n//if(entry==='MyLightBalls') dst.title=\\\"我ㄉ光球ㄉㄉㄉ\\\"; // default value\\nif(entry==='MyLightArtillery') dst.title=\\\"我ㄉ砲台ㄉㄉㄉ\\\";\\nif(entry==='GoAway') dst.title=\\\"啊！走開！\\\";\\nif(dst.title.indexOf(\\\"ㄉ\\\")>=0) useㄉㄉㄉ();\\n}else{\\ndst.title=\\\"My Light Balls\\\";\\nif(entry==='CrossTheStreet') dst.title=\\\"Cross the Street\\\";\\n//if(entry==='MyLightBalls') dst.title=\\\"My Light Balls\\\"; // default value\\nif(entry==='MyLightArtillery') dst.title=\\\"My Light Artillery\\\";\\nif(entry==='GoAway') dst.title=\\\"AH! GO AWAY!\\\";\\n}\\nif(entry==='dev') dst.title+=\\\" (dev)\\\";\\nif(entry==='ALL') dst.title+=\\\" (ALL)\\\";\\nScene_Title.prototype.drawGameTitle_getTitle.tbl[0]=dst.title;\\n}\""}},
{"name":"agold404_TermsExt","status":true,"description":"extends $dataSystem.terms with locale.","parameters":{"TermsCommands":"[\"\\\"0\\\\nFight\\\\n\\\\nzh-TW\\\\n戰鬥\\\"\",\"\\\"1\\\\nEscape\\\\n\\\\nzh-TW\\\\n逃走\\\"\",\"\\\"2\\\\nAttack\\\\n\\\\nzh-TW\\\\n攻擊\\\"\",\"\\\"3\\\\nGuard\\\\n\\\\nzh-TW\\\\n防禦\\\"\",\"\\\"4\\\\nItem\\\\n\\\\nzh-TW\\\\n道具\\\"\",\"\\\"5\\\\nSkill\\\\n\\\\nzh-TW\\\\n技能\\\"\",\"\\\"6\\\\nEquip\\\\n\\\\nzh-TW\\\\n裝備\\\"\",\"\\\"7\\\\nStatus\\\\n\\\\nzh-TW\\\\n狀態\\\"\",\"\\\"8\\\\nFormation\\\\n\\\\nzh-TW\\\\n調整隊員順序\\\"\",\"\\\"9\\\\nSave\\\\n\\\\nzh-TW\\\\n儲存\\\"\",\"\\\"10\\\\nTo Title\\\\n\\\\nzh-TW\\\\n回標題\\\"\",\"\\\"11\\\\nOptions\\\\n\\\\nzh-TW\\\\n選項\\\"\",\"\\\"12\\\\nWeapon\\\\n\\\\nzh-TW\\\\n武器\\\"\",\"\\\"13\\\\nArmor\\\\n\\\\nzh-TW\\\\n防具\\\"\",\"\\\"14\\\\nKey Item\\\\n\\\\nzh-TW\\\\n重要道具\\\"\",\"\\\"15\\\\nEquip\\\\n\\\\nzh-TW\\\\n穿上\\\"\",\"\\\"16\\\\nOptimize\\\\n\\\\nzh-TW\\\\n最佳化\\\"\",\"\\\"17\\\\nClear\\\\n\\\\nzh-TW\\\\n全部清空\\\"\",\"\\\"18\\\\nNew Game\\\\n\\\\nzh-TW\\\\n新遊戲\\\"\",\"\\\"19\\\\nLoad saves\\\\n\\\\nzh-TW\\\\n讀檔\\\"\",\"\\\"21\\\\nYes, back to title.\\\\n\\\\nzh-TW\\\\n是，回到標題\\\"\",\"\\\"22\\\\nCancel\\\\n\\\\nzh-TW\\\\n取消\\\"\",\"\\\"24\\\\nBuy\\\\n\\\\nzh-TW\\\\n買\\\"\",\"\\\"25\\\\nSell\\\\n\\\\nzh-TW\\\\n賣\\\"\",\"\\\"quit\\\\nQuit\\\\n\\\\nzh-TW\\\\n退出\\\"\",\"\\\"quitWithoutSaving\\\\nQuit w/o save\\\\n\\\\nzh-TW\\\\n不儲存退出\\\"\",\"\\\"adjust\\\\nAdjust\\\\n\\\\nzh-TW\\\\n調整\\\"\",\"\\\"confirm\\\\nConfirm\\\\n\\\\nzh-TW\\\\n確定\\\"\",\"\\\"depository\\\\nDepository\\\\n\\\\nzh-TW\\\\n倉庫\\\"\",\"\\\"skillTree\\\\nSkill Tree\\\\n\\\\nzh-TW\\\\n技能樹\\\"\",\"\\\"changeLocale\\\\nChange Locale\\\\n\\\\nzh-TW\\\\n換語系\\\"\",\"\\\"allocAbility\\\\nAllocate Abilities\\\\n\\\\nzh-TW\\\\n配點\\\"\"]","TermsMessages":"[\"\\\"exampleMessage\\\\nExample default message text\\\\n\\\\nen-US\\\\nExample en-US message text\\\"\"]","TermsParams":"[\"\\\"exampleParam\\\\nExample default param text\\\\n\\\\nen-US\\\\nExample en-US param text\\\"\"]","TermsBasic":"[\"\\\"exampleBasic\\\\nExample default basic text\\\\n\\\\nen-US\\\\nExample en-US basic text\\\"\"]\r","TermsEvals":"[\"\\\"exampleEvals\\\\n\\\\\\\"Example default eval text\\\\\\\"\\\\n\\\\nen-US\\\\n\\\\\\\"Example en-US eval text\\\\\\\"\\\"\",\"\\\"skillTree\\\\n\\\\\\\"Skill\\\\\\\\n Tree\\\\\\\"\\\\n\\\\nzh-TW\\\\n\\\\\\\"技能樹\\\\\\\"\\\"\",\"\\\"allocAbility\\\\n\\\\\\\"Allocate\\\\\\\\nAbilities\\\\\\\"\\\\n\\\\nzh-TW\\\\n\\\\\\\"配點\\\\\\\"\\\"\",\"\\\"plugins\\\\n\\\\\\\"plugins\\\\\\\"\\\\n\\\\nzh-TW\\\\n\\\\\\\"插件\\\\\\\"\\\"\"]"}},
{"name":"agold404_TextPosition","status":true,"description":"text position","parameters":{}},
{"name":"agold404_ThroughEventsOnly","status":true,"description":"讓事件可以只穿透事件而不穿透玩家、可在note區設定一事件是否不因離畫面太遠而不行動","parameters":{}},
{"name":"agold404_Timer","status":true,"description":"Much more useful timer","parameters":{}},
{"name":"agold404_TotalPlayTime","status":true,"description":"recording total play time automatically.","parameters":{"AutoUpdateInterval":"4\r"}},
{"name":"agold404_TraitPerFrameEval","status":true,"description":"a trait for eval() per frame","parameters":{}},
{"name":"agold404_TroopEval","status":true,"description":"run an event page of a troop BEFORE entering battle scene","parameters":{}},
{"name":"agold404_UnionCount","status":true,"description":"set a group of items to count together when determine hasMaxItem","parameters":{}},
{"name":"agold404_UnorederedSprite","status":true,"description":"a sprite whose .children will not keep the order.","parameters":{}},
{"name":"agold404_WindowOptions_volumeOffset","status":true,"description":"adjust steps of setting volumes","parameters":{"steps_normal":"5","steps_shift":"25"}}
];
