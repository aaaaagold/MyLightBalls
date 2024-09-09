"use strict";
/*:
 * @plugindesc 讓事件可以只穿透事件而不穿透玩家、可在note區設定一事件是否不因離畫面太遠而不行動
 * @author agold404
 *
 * @help this plugin let you set events through only events but not player (nor followers), or also players and followers
 * 
 * syntax: write <throughEvents> in note of a event
 * this will let the event can be through all events
 * 
 * syntax: write <throughEventsOnly:A_USER_DEFINED_STRING> in note of a event
 * this will let the event can be through all events having same 'meta.throughEventsOnly' (leaving it empty can be a classification) in notes only
 * <throughPlayers> can go through player
 * 
 * remember to uncheck "through"
 *
 *
 * This plugin can be renamed as you want.
 * 
 * TODO: setting by pages 
 */

(()=>{ let k,r,t;

new cfc(Game_Event.prototype).add('isCollidedWithPlayerCharacters',function f(x,y){
	return this.isCollidedWith_isThroughPlayers()?false:f.ori.apply(this,arguments);
}).add('isCollidedWith_isThroughPlayers',function f(){
	// TODO
	return this.event().meta[f.tbl[0]];
},[
'throughPlayers',
]).add('isCollidedWith_throughEvents',function f(meta){
	// TODO
	return (meta||this.event().meta)[f.tbl[0]];
},[
'throughEvents',
]).add('isCollidedWith_throughEventsOnly',function f(meta){
	// TODO
	return (meta||this.event().meta)[f.tbl[0]];
},[
'throughEventsOnly',
]).add('isCollidedWithEvents',function f(x,y){
	const meta=this.event().meta;
	if(this.isCollidedWith_throughEvents(meta)) return false;
	if(this.isCollidedWith_throughEventsOnly(meta)!==undefined) return $gameMap.eventsXyNt(x,y).some(f.tbl[2],meta);
	return $gameMap.eventsXyNt(x,y).length;
},[
'throughEvents', // 0: 
'throughEventsOnly', // 1: 
function f(evt){
	return evt.isCollidedWith_throughEventsOnly(this)!==evt.isCollidedWith_throughEventsOnly(evt.event().meta);
}, // 2: 
]);

const p=Game_Player.prototype;
new cfc(p).add('isCollidedWithEvents',p.isCollidedWithEvents===Game_Character.prototype.isCollidedWithEvents?function f(x,y){
	const res=Game_Character.prototype.isCollidedWithEvents.apply(this,arguments);
	return res && $gameMap.eventsXyNtNp(x,y).some(f.tbl[0]);
}:function f(x,y){
	const res=f.ori.apply(this,arguments);
	return res && $gameMap.eventsXyNtNp(x,y).some(f.tbl[0]);
},[
evt=>!evt.isCollidedWith_isThroughPlayers(),
]);

})();
