/*! 作者:阿伟 */
/*! git:https://github.com/328080339/JsLibs.git */
/*! 推荐sealoader模块加载器:https://www.npmjs.com/package/sealoader */
/*! 最后修改于 2016-04-06 15:39:04 */
define(function(require,exports,module){exports["int"]=function(a){var b=50,c=document.createElement("switchButton");c.style.cssText="display:block;height:"+b+"px;background-color:white;";var d=document.createElement("switchButton");d.style.cssText="font-size:16px;color:#333;margin-left:15px;line-height:"+b+"px;",d.innerHTML=a.name,c.appendChild(d);var e=document.createElement("switchButton"),f=b/1.5,g=75*f/44;e.style.cssText="background-color:white;float:right;border-radius:23px;position:relative;transition:background-color 0.2s ease-in 0s;height:"+f+"px;width:"+g+"px;margin:"+(b-f)/2+"px 15px 0px 0px;";var h=document.createElement("switchButton");h.style.cssText="background-color:white;border-radius:50%;transition:left 0.2s ease-in 0s;position:absolute;left:0px;border:1px solid #e1e1e1;",e.appendChild(h);var i=["0px",g-f+2+"px","white","#79d787",a.onChange,"1px solid #e1e1e1","none"],j=a.isOn,k=function(){j=!j,h.style.left=i[j/1],e.style.backgroundColor=i[j/1+2],h.style.height=f-2*j+"px",h.style.width=f-2*j+"px",e.style.border=i[j/1+5]};e.onmousedown=function(){k();var a=i[4];a&&a(j)},c.appendChild(e),a.parentNode.appendChild(c),j=!j,k()},exports.newInstance=function(fuc){return function(){return fuc+="",-1==fuc.indexOf("\nexports=this;")&&(fuc=("0,("+fuc+")").replace("{","{\nexports=this;")),new(eval(fuc))(require,exports,module)}}(arguments.callee)});