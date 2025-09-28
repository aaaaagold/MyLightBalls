"use strict";

(()=>{ let k,r,t;

const a=window._special_MyLightBalls=({
});

const sceneTitleEffect_toggleTexts={
'zh-TW':["\\N[1]，下班囉","\\N[1]，上班囉",],
_default:["Hide","Show",],
};
const sceneTitleEffect_getCurrentToggleText=()=>{
	const sc=SceneManager._scene;
	const infos=sceneTitleEffect_toggleTexts;
	const info=infos[DataManager.getLocale()]||infos._default;
	return info[!(sc&&sc._trgt_root&&sc._trgt_root.visible)-0];
};

new cfc(window._special_MyLightBalls).

addBase('isIt',function f(){
	const entry=getUrlParamVal('entry');
	return !entry||entry==='ALL'||entry==='MyLightBalls';
}).

addBase('addSceneTitleEffect',function(){
const bulletBmpX=48*6,bulletBmpY=48*7,bulletBmpW=48,bulletBmpH=48;
const bulletBmpPath='!Flame';
let bulletBmp; ImageManager.loadCharacter(bulletBmpPath).addLoadListener(bmp=>(bulletBmp=bmp));
const dd=0.125*($gameMap?Math.max($gameMap.tileWidth(),$gameMap.tileHeight(),):48);
const patternW=48;
const patternH=48;
const d9=[
	[-1,-1],[0,-1],[1,-1],
	[-1,0],[0,0],[1,0],
	[-1,1],[0,1],[1,1],
];
const patternWaitMax=~~(($gamePlayer?$gamePlayer.animationWait():15)/1.5);
let patternWaitCtr=0;
let patternIdx4=1;
const floatingAmplitude=3;
let floatingCtr32=0;
const changeMoveWaitMax=4;
let changeMoveWaitCtr=0;
let x,y,bw_2,bh_2,lastDIdx,currDIdx;
const framesPerEmitMax=5;
let framesPerEmitCtr=0;
// 
const bulletSpritesOngoing=[];
const bulletSpritesEnded=[];
const bulletDd=dd,bulletMinY=-bulletBmpH;
let aniState='preparingToWork';
if(this.canAddSceneTitleEffect_more_1()){
SceneManager.additionalUpdate_updateScene_add(()=>{

// consts
const sc=SceneManager._scene; if(!(sc instanceof Scene_Title)) return true;
const chrIdx=$dataActors[1].characterIndex;

// sprites
let root=sc._trgt_root;
let sp=sc._trgt_mainChr;
if(!root){
	const idx=Math.max(0,sc.getChildIndex(sc._backSprite1),sc.getChildIndex(sc._backSprite2),);
	sc.addChildAt(root=sc._trgt_root=new Sprite(),idx);
	const bmp=ImageManager.loadCharacter($dataActors[1].characterName);
	sp=sc._trgt_mainChr=new Sprite(bmp);
	bmp.addLoadListener(bmp=>{
		sp.anchor.set(0.5);
		sp.setFrame(patternW*((chrIdx&3)*3+1),patternH*((chrIdx>>2)*4+3),patternW,patternH);
		x=bw_2=Graphics.boxWidth>>1;
		y=bh_2=Graphics.boxHeight>>1;
	});
	{ const cmdw=SceneManager._scene._commandWindow; if(cmdw){
		if(cmdw._list&&cmdw._toggleIdx<cmdw._list.length){
			cmdw.setHandler(cmdw._list[cmdw._toggleIdx].symbol,()=>{
				const sc=SceneManager._scene;
				if((sc._trgt_mainChr.visible=!sc._trgt_mainChr.visible)){
					aniState='preparingToWork';
				}else{
					aniState='offwork';
				}
				const cmdw=sc._commandWindow;
				cmdw.redrawItem(cmdw._toggleIdx);
				cmdw.activate();
			});
			cmdw.redrawItem(cmdw._toggleIdx);
		}
	} }
	sp.visible=false;
	root.addChild(sp);
	root.addChild(sc._trgt_aniRoot=new Sprite_UnorderedChildren());
	sc._trgt_aniRoot.addChild(sp._aniSp=new Sprite_Base());
}
if(!root.visible) return; // abort
if(!bulletBmp||isNaN(x)) return; // not yet
if(!sc._effectStarted){
	sc._effectStarted=true;
	sp.visible=true;
}

// bmp
if(++patternWaitCtr>=patternWaitMax){
	patternWaitCtr=0;
	patternIdx4=(patternIdx4+1)&3;
}
const patternIdx=patternIdx4<3?patternIdx4:1;
sp.setFrame(patternW*((chrIdx&3)*3+patternIdx),patternH*((chrIdx>>2)*4+3),patternW,patternH);

// move bullets
{
let i=0;
for(let j=0,sz=bulletSpritesOngoing.length;j<sz;++j){
	const sp=bulletSpritesOngoing[j];
	if((sp.y-=bulletDd)>=bulletMinY){
		bulletSpritesOngoing[i++]=bulletSpritesOngoing[j];
		continue;
	}
	sp.visible=false;
	bulletSpritesEnded.push(sp);
}
bulletSpritesOngoing.length=i;
}

switch(aniState){
	case 'none':{
	}break;
	case 'offwork':{
		sp._aniSp.startAnimation($dataAnimations[107]);
		aniState='none';
	}break;
	case 'preparingToWork':{
		aniState='preparingToWork-waitAnimation';
		sp._aniSp.startAnimation($dataAnimations[41]);
	}break;
	case 'preparingToWork-waitAnimation':{
		if(!sp._aniSp.isAnimationPlaying()){
			aniState='isWorking';
		}
	}break;
	case 'isWorking': if(sp.visible){
		// new position
		floatingCtr32=(floatingCtr32+1)&31;
		if(!changeMoveWaitCtr){
		changeMoveWaitCtr=(Math.random()*changeMoveWaitMax)>>1;
		if(!d9[0][2]){
			for(let i=d9.length;i--;){
				d9[i][0]*=dd;
				d9[i][1]*=dd;
				d9[i][2]=({x:bw_2*(i%3),y:bh_2*~~(i/3),});
			}
		}
		const weights=[]; for(let i=d9.length;i--;) weights[i]=window.xyDist2(d9[i][2],sp);
		weights[4]=0; // [0,0]
		weights[lastDIdx]*=2;
		for(let i=1,sz=weights.length;i<sz;++i) weights[i]+=weights[i-1];
		currDIdx=weights.lower_bound(Math.random()*weights.back);
		} // changeMoveWaitCtr
		changeMoveWaitCtr=(changeMoveWaitCtr+1)%changeMoveWaitMax;
		const d=d9[currDIdx];
		x+=d[0];
		y+=d[1];
		
		// new bullets
		if(!framesPerEmitCtr){
		const sp=bulletSpritesEnded.pop()||new Sprite(bulletBmp);
		if(!sp._frmIsSet){
			sp.anchor.set(0.5);
			sp.setFrame(bulletBmpX,bulletBmpY,bulletBmpW,bulletBmpH);
			root.addChild(sp);
			sp._frmIsSet=true;
		}
		sp.position.set(sc._trgt_mainChr.x,sc._trgt_mainChr.y);
		sp.visible=true;
		AudioManager.playSe(({
			name:'Cursor2',
			volume:12.5,
			pitch:100,
			pan:((sp.x-bw_2)/bw_2).clamp(-1,1)*100, // 0 is center ; 100 is RMMV API scale
		}),);
		bulletSpritesOngoing.push(sp);
		} // framesPerEmitCtr
		framesPerEmitCtr=(framesPerEmitCtr+1)%framesPerEmitMax;
	}break; // sp.visible
}
{
const px=x;
const py=y+Math.sin(floatingCtr32/16*Math.PI)*floatingAmplitude;
sp.position.set(px,py);
sp._aniSp.position.set(px,py);
}

// END of additional update
},true);
}

if(true){
const selBreathMax=89;
let selBreathCtr=0;
SceneManager.additionalUpdate_updateScene_add(()=>{
	// consts
	const sc=SceneManager._scene; if(!(sc instanceof Scene_Title)) return true;
	if(!bulletBmp||!sc._commandWindow) return;
	const cmdw=sc._commandWindow;
	let selBall=cmdw._selBall;
	if(!selBall){
		cmdw.addChild(selBall=cmdw._selBall=new Sprite(bulletBmp));
		selBall.anchor.set(0.5);
		selBall.setFrame(bulletBmpX,bulletBmpY,bulletBmpW,bulletBmpH);
		selBreathCtr=0;
	}
	const ref=cmdw._windowCursorSprite;
	if(selBall.position) selBall.position.set(ref.x-(cmdw.padding>>1),ref.y+(ref.height>>1));
	selBreathCtr=(selBreathCtr+1)%selBreathMax;
	selBall.scale.set(Math.sin(Math.PI*2*selBreathCtr/selBreathMax)/4+1);
// END of additional update - choices
},true);
}

// END of addSceneTitleEffect
}).

addBase('addSceneTitleEffect_addCmds',function f(cmdw){
	if(!(ConfigManager.others && ConfigManager.others.hyper)) return;
	if(!cmdw._toggleTextInfo) cmdw._toggleTextInfo=f.tbl[0][DataManager.getLocale()]||f.tbl[0]._default;
	cmdw._toggleIdx=cmdw._list.length;
	if(PluginManager._parameters.agold404_MakeStyledText&&PluginManager._parameters.agold404_MakeStyledText._thePrefix){
		cmdw.addCommand(PluginManager._parameters.agold404_MakeStyledText._thePrefix+"\\EVALTOSTR:\"this._toggleTextInfo[!(SceneManager._scene&&SceneManager._scene._trgt_mainChr&&SceneManager._scene._trgt_mainChr.visible)-0]\"",f.tbl[1]);
	}else cmdw.addCommand("Hide/Show",f.tbl[1]);
},[
{
'zh-TW':["\\N[1]，下班囉","\\N[1]，上班囉",],
_default:["Hide","Show",],
}, // 0: toggle texts
"sceneTitleEffectToggle", // 1: cmd symbol
]).

addBase('canAddSceneTitleEffect_basic',function f(){
	return this.isIt();
// END of canAddSceneTitleEffect
}).

addBase('canAddSceneTitleEffect_more_1',function f(){
	return ConfigManager.others && ConfigManager.others.hyper && this.canAddSceneTitleEffect_basic();
// END of canAddSceneTitleEffect
}).

getP;


new cfc(Scene_Title.prototype).
add('start',function f(){
	const rtv=f.ori.apply(this,arguments);
	if(window._special_MyLightBalls.canAddSceneTitleEffect_basic()) window._special_MyLightBalls.addSceneTitleEffect();
	return rtv;
}).
getP;

new cfc(Window_TitleCommand.prototype).
add('initialize',function f(){
	const rtv=f.ori.apply(this,arguments);
	if(window._special_MyLightBalls.isIt()) this.setBackgroundType(1);
	return rtv;
}).
addRoof('standardPadding',function f(){
	const rtv=window._special_MyLightBalls.isIt()?f.tbl[0]:f.ori.apply(this,arguments);
	return rtv;
},[
32, // 0: standard padding
]).
add('windowWidth',function f(){
	return Math.max(f.ori.apply(this,arguments),window._special_MyLightBalls.canAddSceneTitleEffect_more_1()?f.tbl[0]:0);
},[
311, // 0: min width
]).
add('makeCommandList',function f(){
	const rtv=f.ori.apply(this,arguments);
	if(window._special_MyLightBalls.canAddSceneTitleEffect_more_1()) window._special_MyLightBalls.addSceneTitleEffect_addCmds(this);
	return rtv;
}).
getP;


})();

