"use strict";

(()=>{ let k,r,t;

const a=window._special_Dice=({
});

{ const a=class Sprite_DiceRoll extends Sprite{
};
new cfc(a.prototype).
addBase('getSize',function f(){
	return this._wnd.currentFontSize();
}).
addBase('setSize',function f(sz){
	return this._wnd.changeFontSize(sz);
}).
addWithBaseIfNotOwn('initialize',function f(){
	const rtv=f.ori.apply(this,arguments);
	this.init_dice.apply(this,arguments);
	return rtv;
}).
addBase('_getBgBmp',function f(){
	let rtv=f.tbl[0]; if(!rtv){
		rtv=new Bitmap(1,1);
		rtv.fillAll(f.tbl[1]);
	}
	return rtv;
},[
undefined, // 0: bmp
'rgba(0,0,0,0.25)', // 1: bg color
]).
addBase('init_dice',function f(bmp,info){ // choices,framesRange,x,y,sz,rollDur,holdDur,callbackStr){
	this._dbg_args=arguments;
	this._info=info;
	if(!('frameTarget' in info)){
		info.frameTarget=Math.max(info.framesRange[0]-0||0,1);
		info.frameTargetEnd=Math.max(info.framesRange[1]-0||0,1);
	}
	if(!('frameCurr' in info)){
		info.frameCurr=info.frameTarget; // update at first frame
	}
	info.rollDur=info.rollDur;
	info.holdDur=info.holdDur;
	info.callbackStr=info.callbackStr;
	this.ac(this._bgSp=new Sprite(this._getBgBmp())).ac(this._shellSp=new Sprite().ac(this._wnd=new Window_Text()));
	this._bgSp.anchor.set(0.5);
	
	this._isFirstDraw=true; // workaround calcTextHeight bug
}).
addBase('getChoices',function f(){
	return this._info&&this._info.choices||f.tbl[0];
},[
['⚀','⚁','⚂','⚃','⚄','⚅'],
]).
addWithBaseIfNotOwn('update',function f(){
	const rtv=f.ori.apply(this,arguments);
	this.update_dice();
	return rtv;
}).
addBase('drawChoice',function f(choiceIdx){
	const info=this._info;
	const sz=info.size-0;
	const prefix=('\\TXTDPOS:"[0,'+(sz/8.0)+']"')+('\\TXTFONTSIZE:"'+sz+'"'); // +('\\TXTDPOS:"[0,'+(sz/8.0)+']"');
	const choices=this.getChoices();
	const text=prefix+choices[choiceIdx];
	let cacheInfo=f.tbl[0].get(text);
	if(!cacheInfo){
		this._wnd.setText(text);
		if(this._isFirstDraw){
			this._isFirstDraw=false;
			this._wnd.setText(text+"\\;");
		}
			this._wnd.setText(text+"\\;");
		f.tbl[0].set(text,cacheInfo=[
			this._wnd.contents,
			this._wnd.x,this._wnd.y,
			this._wnd.width,this._wnd.height,
		]);
	}else{
		const h=this._wnd.height=cacheInfo[4];
		const w=this._wnd.width=cacheInfo[3];
		this._wnd.contents=cacheInfo[0];
		this._wnd.position.set(cacheInfo[1],cacheInfo[2]);
	}
	this._shellSp.position.set(0,this._wnd.height>>1);
	this._bgSp.scale.set(Math.max(this._wnd.width,this._wnd.height));
},[
new Map(), // 0: bmp cache
]).
addBase('update_dice',function f(){
	const info=this._info;
	this.position.set(info.x-0||0,info.y-0||0);
	if(!(info.rollDur>0)){
		if(info.callbackStr){
			EVAL.call(this,info.callbackStr);
			info.callbackStr=undefined;
		}
		if(!(info.holdDur-->0)){
			this.parent&&this.parent.removeChild(this);
		}else{
		}
	}else{
		if(++info.frameCurr>=info.frameTarget){
			info.frameCurr-=info.frameTarget;
			const choiceIdx=this._lastChoice=~~(Math.random()*this.getChoices().length);
			this.drawChoice(choiceIdx);
		}
		info.frameTarget-=(info.frameTarget-info.frameTargetEnd)/info.rollDur;
		--info.rollDur;
	}
}).
getP;
window[a.name]=a;
}

new cfc(Game_Temp.prototype).
addBase('_相鄰同R複製事件',(src)=>{ let r=src.regionId(),evtid=src.eventId(); // 商人馬車
let opened=new Set(),q=new Queue(); q.push(src.getPosKey()); opened.add(q[0]);
for(let tbl=[1,0,-1,0,1];q.length;){ let c=q[0],xy=$gameMap.posKeyToXy(c); q.pop(); for(let i=0;i<4;++i){
 let x=xy.x+tbl[i],y=xy.y+tbl[i+1],k=$gameMap.getPosKey(x,y); if(opened.has(k)||$gameMap.regionId(x,y)!==r) continue;
 q.push(k); opened.add(k); let nxt=$gameMap.event($gameMap.cpevt(evtid,x,y)); nxt.turnTowardCharacter(src); src=nxt;
} }
}).
addBase('_dice_main',function f(){
	if(this._dice_main_condOk()) this._dice_main_do();
}).
addBase('_dice_main_condOk',function f(){
	return true;
}).
addBase('_dice_playerMakeDiceCooldown',function f(infos,plyr){
	return Math.max(16*2**(0|-$gamePlayer._halfMakeDiceCooldown),5);
}).
addBase('_dice_main_getIdleDiceEvt',function f(infos){
	const dice0=infos.templates.dice;
	const pool=infos.idleDiceEvtsPool;
	if(pool&&pool.length) return pool.pop();
	return $gameMap.event($gameMap.cpevt(dice0.eventId(),0,0));
}).
addBase('_dice_main_makeDice',function f(infos,owner,to,size,callbackStr){
	const evt=this._dice_main_getIdleDiceEvt(infos);
	evt.locate(owner.x,owner.y);
	evt.setOpacity(255);
	evt.jumpTo(to.x,to.y);
	evt.getSprite()._rsp=undefined;
	evt._owner=owner;
	const pool=infos.activeDiceEvtsPool=infos.activeDiceEvtsPool||[];
	pool.uniquePush(evt);
	const holdDur=64;
	const rollInfo=evt._rollInfo={
		rollDur:evt._jumpCount-1,
		holdDur:holdDur,
		holdDurMax:holdDur,
		size:size||f.tbl[0],
		callbackStr:callbackStr||f.tbl[1],
		framesRange:f.tbl[2],
	};
	return evt;
},[
64,
"$gameTemp._dice_main_diceRollCallback(this)", // 0: callback str
[1,4], // 1: framesRange
]).
addBase('_dice_main_ensureDiceRollSprite',function f(evt){
	const sp=evt.getSprite();
	if(!sp._rsp){
		const rsp=new Sprite_DiceRoll(undefined,evt._rollInfo);
		sp.addChild(sp._rsp=rsp);
		rsp._dice=evt;
	}
}).
addBase('_dice_main_updateFadingDices',function f(infos,plyr){
	const pool=infos.fadingDiceEvtsPool; if(!pool) return;
	const idles=infos.idleDiceEvtsPool=infos.idleDiceEvtsPool||[];
	pool.slice().forEach(evt=>{
		this._dice_main_ensureDiceRollSprite(evt);
		if(evt._rollInfo.holdDur) return;
		pool.uniquePop(evt);
		const i=evt.eventId();
		evt.locate(-i,-i);
		idles.push(evt);
	});
}).
addBase('_dice_main_updateActiveDices',function f(infos,plyr){
	const pool=infos.activeDiceEvtsPool; if(!pool) return;
	const fadings=infos.fadingDiceEvtsPool=infos.fadingDiceEvtsPool||[];
	pool.slice().forEach(evt=>{
		this._dice_main_ensureDiceRollSprite(evt);
		if(evt.isJumping()) return;
		pool.uniquePop(evt);
		evt._rollInfo.rollDur=0;
		evt.setOpacity(0,evt._rollInfo.holdDurMax);
		fadings.uniquePush(evt);
	});
}).
addBase('_dice_main_diceRollCallback_getHitAniId',function f(diceRollSprite,targetEvt){
	return 1;
}).
addBase('_dice_main_diceRollCallback_final',function f(diceRollSprite){
	diceRollSprite._dice.setOpacity(255);
	diceRollSprite._dice._rollInfo.holdDur=Infinity;
	$gameTemp._dice_finalDone={
		evt:diceRollSprite._dice,
		choice:diceRollSprite._lastChoice,
	};
}).
addBase('_dice_main_diceRollCallback',function f(diceRollSprite){
	const infos=$gameMap.event(1)._gameInfos; if(!infos) return;
	const dice=diceRollSprite._dice;
	const owner=dice._owner;
	if(owner===$gamePlayer){
		const arr=[];
		for(let y=Math.floor(dice.y),y1=Math.ceil(dice.y);y<=y1;++y){
			for(let x=Math.floor(dice.x),x1=Math.ceil(dice.x);x<=x1;++x){
				arr.concat_inplace($gameMap.eventsXy(x,y).filter(f.tbl[0]).map(evt=>[evt,{x:x,y:y},]));
			}
		}
		let ch=arr[0];
		if(ch){
			let d=xyDist2(dice,ch[1]);
			for(let x=1,xs=arr.length;x<xs;++x){
				const t=xyDist2(dice,arr[x][1]);
				if(t<d){
					d=t;
					ch=arr[x];
				}
			}
			if(d<0.5){
				ch[0]._hp-=diceRollSprite._lastChoice+1;
				ch[0].requestAnimation(this._dice_main_diceRollCallback_getHitAniId(diceRollSprite,ch[0]));
			}
		}
	}
},[
evt=>{
	const meta=evt&&evt.getMeta();
	return meta&&meta.hitable;
}, // 0: filter
]).
addBase('_dice_main_getDefaultAtkR',function f(infos,plyr){
	return 0.25;
}).
addBase('_dice_main_getDefaultAtkVal',function f(infos,plyr){
	return Math.max(16*2**(0|-$gamePlayer._halfIncomingAtk),1);
}).
addBase('_dice_main_getDefaultStep',function f(infos,plyr){
	return 16;
}).
addBase('_dice_main_bossAct_updateState_cooldown',function f(infos,plyr){
	const boss=infos.boss;
	return boss._overwriteStateCooldown||300;
}).
addBase('_dice_main_bossAct_updateState_playerNotMoveTimeout',function f(infos,plyr){
	return 600;
}).
addBase('_dice_main_bossAct_updateState_playerTooFarNorm2Th',function f(infos,plyr){
	return 400;
}).
addBase('_dice_main_bossAct_updateState_playerTooCloseNorm2Th',function f(infos,plyr){
	return 150;
}).
addBase('_dice_main_bossAct_updateState',function f(infos,plyr){
	const boss=infos.boss;
	++boss._statTime;
	if(boss._lastStatUpdate+this._dice_main_bossAct_updateState_cooldown(infos,plyr)>=plyr._playTime) return;
	boss._lastStatUpdate=plyr._playTime;
	const arr=[];
	if(!boss._lastPlyrPos) boss._lastPlyrPos={};
	if(!$gamePlayer.pos(boss._lastPlyrPos.x,boss._lastPlyrPos.y)){
		boss._lastPlyrPos.x=plyr._x;
		boss._lastPlyrPos.y=plyr._y;
		boss._lastPlyrPos.t=plyr._playTime;
	}
	else if(boss._stat!=null&&boss._lastPlyrPos.t+this._dice_main_bossAct_updateState_playerNotMoveTimeout(infos,plyr)<plyr._playTime){
		arr.push('playerNotMoveLongTime');
	}
	if(xyDist2(plyr,boss)<this._dice_main_bossAct_updateState_playerTooCloseNorm2Th(infos,plyr)){
		arr.push('playerTooClose');
	}
	if(xyDist2(plyr,boss)>this._dice_main_bossAct_updateState_playerTooFarNorm2Th(infos,plyr)){
		arr.push('playerTooFar');
	}
	if(boss._stat!=null&&Math.random()*8<1) arr.push('big');
	boss._stat=arr.filter(x=>x!==boss._stat).rnd1()||'';
	boss._statTime=0;
}).
addBase('_dice_main_bossAct_isLowHp',function f(infos,plyr){
	const boss=infos.boss;
	return (boss._hp<<2)<boss._maxHp;
}).
addBase('_dice_main_bossAct_default_cooldown',function f(infos,plyr){
	return this._dice_main_bossAct_isLowHp(infos,plyr)?16:32;
}).
addBase('_dice_main_bossAct_hyperDefault_cooldown',function f(infos,plyr){
	return this._dice_main_bossAct_isLowHp(infos,plyr)?64:256;
}).
addBase('_dice_main_bossAct_default',function f(infos,plyr){
	const boss=infos.boss;
	if(boss._lastActTime_default+this._dice_main_bossAct_default_cooldown(infos,plyr)>=plyr._playTime) return;
	boss._lastActTime_default=plyr._playTime;
	const opt={
		x:plyr.x-boss.x,
		y:plyr.y-boss.y,
	};
	const r=Math.sqrt(xyDist2(f.tbl[0],opt))*this._dice_main_getDefaultStep(infos,plyr);
	opt.x/=r;
	opt.y/=r;
	opt.r=this._dice_main_getDefaultAtkR(infos,plyr);
	opt.d=this._dice_main_getDefaultAtkVal(infos,plyr);
	opt.hitAniId=1;
	if(!(boss._lastActTime_hyperDefault+this._dice_main_bossAct_hyperDefault_cooldown(infos,plyr)>=plyr._playTime)){
		boss._lastActTime_hyperDefault=plyr._playTime;
		opt.through=1;
		opt.x/=2;
		opt.y/=2;
	}
	this._dice_main_bossAct_makeAttacks(infos,boss,opt);
},t=[
{x:0,y:0,}, // 0: (0,0)
]).
addBase('_dice_main_bossAct_big_overwriteStateCooldown',function f(infos,plyr){
	const boss=infos.boss;
	boss._overwriteStateCooldown=168;
}).
addBase('_dice_main_bossAct_big_cooldown',function f(infos,plyr){
	return 3;
}).
addBase('_dice_main_bossAct_big',function f(infos,plyr){
	const boss=infos.boss;
	//this._dice_main_bossAct_big_overwriteStateCooldown(infos,plyr);
	if(boss._lastActTime_big+this._dice_main_bossAct_big_cooldown(infos,plyr)>=plyr._playTime) return;
	boss._lastActTime_big=plyr._playTime;
	const rate=1.5;
	if(boss._statTime*rate<this._dice_main_bossAct_updateState_cooldown(infos,plyr)){
		const isLowHp=this._dice_main_bossAct_isLowHp(infos,plyr);
		const angleRange=isLowHp?[Math.PI/2,Math.PI/6,]:[Math.PI/3,Math.PI/4,];
		const amount=isLowHp?4:2;
		const a=this._dice_main_bossAct_updateState_cooldown(infos,plyr)/rate;
		const maxAngle=angleRange[0]+(angleRange[1]-angleRange[0])*boss._statTime/a;
		let dx0=plyr.x-boss.x,dy0=plyr.y-boss.y;
		const r=Math.sqrt(xyDist2(f.tbl[0],{x:dx0,y:dy0,}))*this._dice_main_getDefaultStep(infos,plyr)/2;
		dx0/=r;
		dy0/=r;
		for(let _=amount|1,x=amount>>1;_--;--x){
			if(!x) continue;
			const rad=maxAngle*x/amount;
			const s=Math.sin(rad);
			const c=Math.cos(rad);
			const opt={
				x:dx0*c-dy0*s,
				y:dx0*s+dy0*c,
			};
			opt.r=this._dice_main_getDefaultAtkR(infos,plyr);
			opt.d=this._dice_main_getDefaultAtkVal(infos,plyr);
			opt.hitAniId=1;
			this._dice_main_bossAct_makeAttacks(infos,boss,opt);
		}
	}else{
		const opt={
			x:plyr.x-boss.x,
			y:plyr.y-boss.y,
		};
		const r=Math.sqrt(xyDist2(f.tbl[0],opt))*this._dice_main_getDefaultStep(infos,plyr)/4;
		opt.x/=r;
		opt.y/=r;
		opt.r=this._dice_main_getDefaultAtkR(infos,plyr);
		opt.d=this._dice_main_getDefaultAtkVal(infos,plyr);
		opt.hitAniId=1;
		opt.through=1;
		this._dice_main_bossAct_makeAttacks(infos,boss,opt);
	}
},t).
addBase('_dice_main_bossAct_playerTooClose',function f(infos,plyr){
	const boss=infos.boss;
	const opt={
		x:plyr.x-boss.x,
		y:plyr.y-boss.y,
	};
	const r=Math.sqrt(xyDist2(f.tbl[0],opt))*this._dice_main_getDefaultStep(infos,plyr);
	opt.x/=r;
	opt.y/=r;
	opt.r=this._dice_main_getDefaultAtkR(infos,plyr);
	opt.d=this._dice_main_getDefaultAtkVal(infos,plyr);
	opt.hitAniId=1;
	opt.ux=8;
	this._dice_main_bossAct_makeAttacks(infos,boss,opt);
},t).
addBase('_dice_main_bossAct_playerTooFar_cooldown',function f(infos,plyr){
	return this._dice_main_bossAct_isLowHp(infos,plyr)?32:64;
}).
addBase('_dice_main_bossAct_playerTooFar',function f(infos,plyr){
	const boss=infos.boss;
	if(boss._lastActTime_playerTooFar+this._dice_main_bossAct_playerTooFar_cooldown(infos,plyr)>=plyr._playTime) return;
	boss._lastActTime_playerTooFar=plyr._playTime;
	const isLowHp=this._dice_main_bossAct_isLowHp(infos,plyr);
	const amount=isLowHp?64:11;
	const stepIR=isLowHp?8:1;
	const maxAngle=isLowHp?Math.PI/3:Math.PI/4;
	let dx0=plyr.x-boss.x;
	let dy0=plyr.y-boss.y;
	const r=Math.sqrt(xyDist2(f.tbl[0],{x:dx0,y:dy0,}))*this._dice_main_getDefaultStep(infos,plyr)/stepIR;
	dx0/=r;
	dy0/=r;
	for(let _=amount|1,x=amount>>1;_--;--x){
		const rad=maxAngle*x/amount;
		const s=Math.sin(rad);
		const c=Math.cos(rad);
		const opt={
			x:dx0*c-dy0*s,
			y:dx0*s+dy0*c,
		};
		opt.r=this._dice_main_getDefaultAtkR(infos,plyr);
		opt.d=this._dice_main_getDefaultAtkVal(infos,plyr);
		opt.hitAniId=1;
		this._dice_main_bossAct_makeAttacks(infos,boss,opt);
	}
},t).
addBase('_dice_main_bossAct_playerNotMoveLongTime_cooldown',function f(infos,plyr){
	return 2;
}).
addBase('_dice_main_bossAct_playerNotMoveLongTime',function f(infos,plyr){
	const boss=infos.boss;
	if(boss._lastActTime_playerNotMoveLongTime+this._dice_main_bossAct_playerNotMoveLongTime_cooldown(infos,plyr)>=plyr._playTime) return;
	boss._lastActTime_playerNotMoveLongTime=plyr._playTime;
	const opt={
		x:plyr.x-boss.x,
		y:plyr.y-boss.y,
	};
	const r=Math.sqrt(xyDist2(f.tbl[0],opt))*this._dice_main_getDefaultStep(infos,plyr)/4;
	opt.x/=r;
	opt.y/=r;
	opt.r=this._dice_main_getDefaultAtkR(infos,plyr);
	opt.d=this._dice_main_getDefaultAtkVal(infos,plyr);
	opt.hitAniId=1;
	opt.through=1;
	this._dice_main_bossAct_makeAttacks(infos,boss,opt);
},t).
addBase('_dice_main_bossAct',function f(infos,plyr){
	const boss=infos.boss;
	boss.turnTowardCharacter(plyr);
	this._dice_main_bossAct_updateState(infos,plyr);
	const stat=window._dbg_dice_bossStat||boss._stat;
	switch(stat){
	default:{
		this._dice_main_bossAct_default(infos,plyr);
	}break;
	case 'big':{
		this._dice_main_bossAct_big(infos,plyr);
	}break;
	case 'playerTooClose':{
		this._dice_main_bossAct_playerTooClose(infos,plyr);
	}break;
	case 'playerTooFar':{
		this._dice_main_bossAct_playerTooFar(infos,plyr);
	}break;
	case 'playerNotMoveLongTime':{
		this._dice_main_bossAct_playerNotMoveLongTime(infos,plyr);
	}break;
	}
}).
addBase('_dice_main_bossAct_getAttack',function f(infos){
	const attack0=infos.templates.attack;
	const pool=infos.idleAttackEvtsPool;
	let rtv;
	if(pool&&pool.length) rtv=pool.pop();
	else rtv=$gameMap.event($gameMap.cpevt(attack0.eventId(),0,0));
	rtv.setChrIdxName(attack0.characterIndex(),attack0.characterName());
	return rtv;
}).
addBase('_dice_main_bossAct_makeAttacks',function f(infos,owner,opt){
	const evt=this._dice_main_bossAct_getAttack(infos);
	evt.locate(owner.x,owner.y);
	evt.setOpacity(255);
	evt._owner=owner;
	const pool=infos.activeAttackEvtsPool=infos.activeAttackEvtsPool||[];
	pool.uniquePush(evt);
	if(opt.through){
		const atk2=infos.templates.attack2;
		evt.setChrIdxName(atk2.characterIndex(),atk2.characterName());
	}
	evt._v=opt;
}).
addBase('_dice_main_updateAttacksCollision',function f(infos,plyr,evt){
	const boss=infos.boss;
	const opt=evt._v;
	const actr=$gameParty.actor(0);
	if(evt._owner!==plyr){
		if(xyDist2(evt,plyr)<opt.r){
			actr._hp-=opt.d;
			plyr.requestAnimation(opt.hitAniId);
			return !opt.through;
		}
	}else{
	}
}).
addBase('_dice_main_bossAct_updateAttacks',function f(infos,plyr){
	const boss=infos.boss;
	const pool=infos.activeAttackEvtsPool; if(!pool) return;
	const idles=infos.idleAttackEvtsPool=infos.idleAttackEvtsPool||[];
	pool.slice().forEach(evt=>{
		if($gameMap.isOutOfMap(evt)){
			pool.uniquePop(evt);
			const i=evt.eventId();
			evt.locate(-i,-i);
			idles.push(evt);
			return;
		}
		const v=evt._v;
		let i=v.ux;
		do{
			evt.setPosition(evt._x+v.x,evt._y+v.y);
			if(this._dice_main_updateAttacksCollision(infos,plyr,evt)){
				pool.uniquePop(evt);
				const i=evt.eventId();
				evt.locate(-i,-i);
				idles.push(evt);
				return;
			}
		}while(--i>0);
	});
}).
addBase('_dice_main_ensureUi_bossHp',function f(infos,plyr){
	const boss=infos.boss;
	const sp=boss.getSprite(); if(!sp) return;
	if(!sp._barRoot){
		sp.addChild(sp._barRoot=new Sprite());
		sp._barRoot.scale.set(1/sp.scale.x,1/sp.scale.y);
	}
	if(!sp._barRoot._dummy) sp._barRoot.addChild(sp._barRoot._dummy=new Sprite());
	let bar=SceneManager.get類比條(f.tbl[0]);
	if(!bar||bar._scene!==SceneManager._scene){
		SceneManager.add類比條(f.tbl[0],sp._barRoot._dummy,0,0,f.tbl[2][0],f.tbl[2][1],()=>boss._hp/boss._maxHp,f.tbl[1]);
		bar=SceneManager.get類比條(f.tbl[0]);
		bar._scene=SceneManager._scene;
	}
	let hptxt=sp._barRoot._hpTxt;
	if(!hptxt){
		const sh=new Sprite();
		sp._barRoot.addChild(sh.ac(hptxt=sp._barRoot._hpTxt=new Window_Text()));
	}
	hptxt.setText(boss._hp+' / '+boss._maxHp);
	hptxt.parent.position.y=hptxt.height>>1;
},[
'bossHp', // 0: id
[
'rgba(128,64,0,0.75)',
'rgba(255,127,0,0.75)',
'rgba(0,0,0,0.25)',
], // 1: color01
[256,32], // 2: size
]).
addBase('_dice_main_ensureUi_playerHp',function f(infos,plyr){
	const sp=plyr.getSprite(); if(!sp) return;
	if(!sp._barRoot){
		sp.addChild(sp._barRoot=new Sprite());
		sp._barRoot.scale.set(1/sp.scale.x,1/sp.scale.y);
	}
	if(!sp._barRoot._dummy) sp._barRoot.addChild(sp._barRoot._dummy=new Sprite());
	let bar=SceneManager.get類比條(f.tbl[0]);
	const actr=$gameParty.actor(0);
	if(!bar||bar._scene!==SceneManager._scene){
		SceneManager.add類比條(f.tbl[0],sp._barRoot._dummy,0,0,f.tbl[2][0],f.tbl[2][1],()=>actr.hp/actr.mhp,f.tbl[1]);
		bar=SceneManager.get類比條(f.tbl[0]);
		bar._scene=SceneManager._scene;
	}
	let hptxt=sp._barRoot._hpTxt;
	if(!hptxt){
		const sh=new Sprite();
		sp._barRoot.addChild(sh.ac(hptxt=sp._barRoot._hpTxt=new Window_Text()));
	}
	hptxt.setText(actr.hp+' / '+actr.mhp);
	hptxt.parent.position.y=hptxt.height>>1;
},[
'playerHp', // 0: id
[
'rgba(128,64,0,0.75)',
'rgba(255,127,0,0.75)',
'rgba(0,0,0,0.25)',
], // 1: color01
[256,32], // 2: size
]).
addBase('_dice_main_ensureUi',function f(infos,plyr){
	this._dice_main_ensureUi_bossHp(infos,plyr);
	this._dice_main_ensureUi_playerHp(infos,plyr);
}).
addBase('_dice_main_doLose',function f(infos,plyr){
	//const plyr=$gamePlayer;
	//this._dice_main_makeDice(infos,plyr,plyr);
	this._dice_main_updateActiveDices(infos,plyr);
	this._dice_main_updateFadingDices(infos,plyr);
}).
addBase('_dice_main_do',function f(){
	const evt1=$gameMap.event(1); if(!evt1._initDone) return;
	const infos=evt1._gameInfos; if(!infos) return;
	
	const plyr=$gamePlayer;
	this._dice_main_ensureUi(infos,plyr);
	if(!(0<$gameParty.actor(0).hp)) return this._dice_main_doLose(infos,plyr);
	if(infos.boss&&!(0<infos.boss._hp)) return; // win
	
	plyr._playTime=plyr._playTime-0||0; ++plyr._playTime;
	const ctrlMove_left=Input.isPressed('left');
	const ctrlMove_down=Input.isPressed('down');
	const ctrlMove_up=Input.isPressed('up');
	const ctrlMove_right=Input.isPressed('right');
	const dist=plyr.distancePerFrame();
	const ndx=(ctrlMove_left-ctrlMove_right)*dist;
	const ndy=(ctrlMove_up-ctrlMove_down)*dist;
	let fx=plyr._x;
	let fy=plyr._y;
	const xy0={x:fx,y:fy,};
	const x0=fx+0.5;
	const y0=fy+0.5;
	const x1=x0-ndx;
	const y1=y0-ndy;
	const x0f=Math.floor(x0);
	const y0f=Math.floor(y0);
	const ntdx=Math.floor(x1)-x0f;
	const ntdy=Math.floor(y1)-y0f;
	let d=5;
	if(ntdx) d-=((ntdx<0)<<1)-1;
	else{
		fx-=ndx;
		if(Math.floor(fx+0.5)!==x0f) fx=xy0.x;
	}
	const dh=d;
	if(ntdy) d-=(((0<ntdy)<<1)-1)*3;
	else{
		fy-=ndy;
		if(Math.floor(fy+0.5)!==y0f) fy=xy0.y;
	}
	if(d!==5){
		if(d&1&&plyr.canPass(x0f,y0f,d)){
			fx-=ndx;
			fy-=ndy;
		}else if(plyr.canPass(x0f,y0f,dh)){
			fx-=ndx;
		}else if(plyr.canPass(x0f,y0f,(d-dh)+5)){
			fy-=ndy;
		}
	}
	plyr._stepAnime=xy0.x!==fx||xy0.y!==fy;
	plyr.setPosition(fx,fy);
	$gamePlayer.centerChr(plyr);
	
	const touchMapRealXy=TouchInput.toMapXyReal();
	touchMapRealXy.x-=0.5;
	touchMapRealXy.y-=0.5;
	plyr.turnTowardCharacter(touchMapRealXy);
	
	if(TouchInput.isPressed()&&!(plyr._lastMakeDiceTime+this._dice_playerMakeDiceCooldown()>=plyr._playTime)){
		plyr._lastMakeDiceTime=plyr._playTime;
		this._dice_main_makeDice(infos,plyr,touchMapRealXy);
		if($gamePlayer._dice3){
			const xy=infos.boss;
			this._dice_main_makeDice(infos,plyr,{x:xy.x+Math.random()-0.5,y:xy.y+Math.random()-0.5,});
			this._dice_main_makeDice(infos,plyr,{x:xy.x+Math.random()-0.5,y:xy.y+Math.random()-0.5,});
		}
	}
	
	
	this._dice_main_bossAct(infos,plyr);
	
	
	this._dice_main_updateActiveDices(infos,plyr);
	this._dice_main_updateFadingDices(infos,plyr);
	
	this._dice_main_bossAct_updateAttacks(infos,plyr);
	
	
	this._dice_main_ensureUi(infos,plyr);
},[
]).
getP;

})();

