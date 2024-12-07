"use strict";
/*:
 * @plugindesc name field
 * @author agold404
 * 
 * @help showing name field near by message window
 * \
 * 
 * 
 * This plugin can be renamed as you want.
 */

(()=>{ let k,r,t;
const pluginName=getPluginNameViaSrc(document.currentScript.getAttribute('src'))||"agold404_StartupEval";
const params=PluginManager.parameters(pluginName);

t=[
undefined,
params, // 1: plugin params
/\\NAMEFIELD_(INIT|SHOW)((\["((\\\\)*\\"|[^"\\]|\\[^"])*"\])?):("((\\\\)*\\"|[^"\\]|\\[^"])*")/g,
];

new cfc(Game_Message.prototype).add('add',function f(){
	const rtv=f.ori.apply(this,arguments);
	this.startupEval_start();
	return rtv;
}).add('terminate_after',function f(){
	this.startupEval_terminate();
	return f.ori.apply(this,arguments);
}).addBase('startupEval_start',function f(){
	const s=f.tbl[1]._onbootStart;
	{ let k,r,t,f; { return eval(s); } }
},t).addBase('startupEval_terminate',function f(){
	const s=f.tbl[1]._onbootTerminate;
	{ let k,r,t,f; { return eval(s); } }
},t);

{ const s=params._onload;
{ let k,r,t,f; { return eval(s); } }
}

})();
