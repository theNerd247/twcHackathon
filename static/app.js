/*
 AngularJS v1.3.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(T,V,s){'use strict';function F(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.16/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Sa(b){if(null==b||Ta(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===ma&&a?!0:O(b)||w(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d,e;if(b)if(E(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(w(b)||Sa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==q)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Jd(b,a,c){for(var d=Object.keys(b).sort(),
e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function pc(b){return function(a,c){b(c,a)}}function Kd(){return++rb}function qc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function x(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}qc(b,a);return b}function aa(b){return parseInt(b,10)}function Pb(b,a){return x(Object.create(b),a)}function A(){}function na(b){return b}function ca(b){return function(){return b}}
function C(b){return"undefined"===typeof b}function y(b){return"undefined"!==typeof b}function I(b){return null!==b&&"object"===typeof b}function O(b){return"string"===typeof b}function Q(b){return"number"===typeof b}function ea(b){return"[object Date]"===Aa.call(b)}function E(b){return"function"===typeof b}function Ua(b){return"[object RegExp]"===Aa.call(b)}function Ta(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function rc(b){return!(!b||
!(b.nodeName||b.prop&&b.attr&&b.find))}function Ld(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function sa(b){return L(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ba(b,a,c,d){if(Ta(b)||Va(b))throw Ja("cpws");if(a){if(b===a)throw Ja("cpi");c=c||[];d=d||[];if(I(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(w(b))for(var f=a.length=0;f<b.length;f++)e=Ba(b[f],null,c,d),I(b[f])&&(c.push(b[f]),
d.push(e)),a.push(e);else{var g=a.$$hashKey;w(a)?a.length=0:q(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ba(b[f],null,c,d),I(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);qc(a,g)}}else if(a=b)w(b)?a=Ba(b,[],c,d):ea(b)?a=new Date(b.getTime()):Ua(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):I(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ba(b,e,c,d));return a}function oa(b,a){if(w(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(I(b))for(c in a=
a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function fa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(w(b)){if(!w(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!fa(b[d],a[d]))return!1;return!0}}else{if(ea(b))return ea(a)?fa(b.getTime(),a.getTime()):!1;if(Ua(b))return Ua(a)?b.toString()==a.toString():!1;if(Va(b)||Va(a)||Ta(b)||Ta(a)||w(a)||ea(a)||Ua(a))return!1;c={};for(d in b)if("$"!==
d.charAt(0)&&!E(b[d])){if(!fa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!E(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function sc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!E(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Md(b,a){var c=a;"string"===typeof b&&
"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Ta(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":Va(a)&&(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return s;Q(a)||(a=a?2:null);return JSON.stringify(b,Md,a)}function tc(b){return O(b)?JSON.parse(b):b}function ta(b){b=z(b).clone();try{b.empty()}catch(a){}var c=z("<div>").append(b).html();try{return b[0].nodeType===ab?L(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+L(b)})}catch(d){return L(c)}}function uc(b){try{return decodeURIComponent(b)}catch(a){}}
function vc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=uc(c[0]),y(d)&&(b=y(c[1])?uc(c[1]):!0,wc.call(a,d)?w(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Qb(b){var a=[];q(b,function(b,d){w(b)?q(b,function(b){a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))}):a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))});return a.length?a.join("&"):""}function sb(b){return Ca(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ca(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Nd(b,a){var c,d,e=tb.length;b=z(b);for(d=0;d<e;++d)if(c=tb[d]+a,O(c=b.attr(c)))return c;return null}function Od(b,a){var c,d,e={};q(tb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});q(tb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Nd(c,"strict-di"),
a(c,d?[d]:[],e))}function xc(b,a,c){I(c)||(c={});c=x({strictDi:!1},c);var d=function(){b=z(b);if(b.injector()){var d=b[0]===V?"document":ta(b);throw Ja("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=bb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;T&&e.test(T.name)&&(c.debugInfoEnabled=!0,T.name=T.name.replace(e,""));if(T&&!f.test(T.name))return d();T.name=T.name.replace(f,"");ba.resumeBootstrap=function(b){q(b,function(b){a.push(b)});return d()};E(ba.resumeDeferredBootstrap)&&ba.resumeDeferredBootstrap()}function Pd(){T.name="NG_ENABLE_DEBUG_INFO!"+T.name;T.location.reload()}function Qd(b){b=ba.element(b).injector();if(!b)throw Ja("test");return b.get("$$testability")}
function yc(b,a){a=a||"_";return b.replace(Rd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Sd(){var b;zc||((pa=T.jQuery)&&pa.fn.on?(z=pa,x(pa.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=pa.cleanData,pa.cleanData=function(a){var c;if(Rb)Rb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=pa._data(e,"events"))&&c.$destroy&&pa(e).triggerHandler("$destroy");b(a)}):z=R,ba.element=z,zc=!0)}function Sb(b,a,c){if(!b)throw Ja("areq",
a||"?",c||"required");return b}function La(b,a,c){c&&w(b)&&(b=b[b.length-1]);Sb(E(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ma(b,a){if("hasOwnProperty"===b)throw Ja("badname",a);}function Ac(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&E(b)?sc(e,b):b}function ub(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return z(c)}function ga(){return Object.create(null)}
function Td(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=F("$injector"),d=F("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||F;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],n=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:n,run:function(a){e.push(a);return this}};h&&n(h);return u})}})}function Ud(b){x(b,{bootstrap:xc,copy:Ba,extend:x,equals:fa,
element:z,forEach:q,injector:bb,noop:A,bind:sc,toJson:$a,fromJson:tc,identity:na,isUndefined:C,isDefined:y,isString:O,isFunction:E,isObject:I,isNumber:Q,isElement:rc,isArray:w,version:Vd,isDate:ea,lowercase:L,uppercase:vb,callbacks:{counter:0},getTestability:Qd,$$minErr:F,$$csp:cb,reloadWithDebugInfo:Pd});db=Td(T);try{db("ngLocale")}catch(a){db("ngLocale",[]).provider("$locale",Wd)}db("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Xd});a.provider("$compile",Bc).directive({a:Yd,
input:Cc,textarea:Cc,form:Zd,script:$d,select:ae,style:be,option:ce,ngBind:de,ngBindHtml:ee,ngBindTemplate:fe,ngClass:ge,ngClassEven:he,ngClassOdd:ie,ngCloak:je,ngController:ke,ngForm:le,ngHide:me,ngIf:ne,ngInclude:oe,ngInit:pe,ngNonBindable:qe,ngPluralize:re,ngRepeat:se,ngShow:te,ngStyle:ue,ngSwitch:ve,ngSwitchWhen:we,ngSwitchDefault:xe,ngOptions:ye,ngTransclude:ze,ngModel:Ae,ngList:Be,ngChange:Ce,pattern:Dc,ngPattern:Dc,required:Ec,ngRequired:Ec,minlength:Fc,ngMinlength:Fc,maxlength:Gc,ngMaxlength:Gc,
ngValue:De,ngModelOptions:Ee}).directive({ngInclude:Fe}).directive(wb).directive(Hc);a.provider({$anchorScroll:Ge,$animate:He,$browser:Ie,$cacheFactory:Je,$controller:Ke,$document:Le,$exceptionHandler:Me,$filter:Ic,$interpolate:Ne,$interval:Oe,$http:Pe,$httpBackend:Qe,$location:Re,$log:Se,$parse:Te,$rootScope:Ue,$q:Ve,$$q:We,$sce:Xe,$sceDelegate:Ye,$sniffer:Ze,$templateCache:$e,$templateRequest:af,$$testability:bf,$timeout:cf,$window:df,$$rAF:ef,$$asyncCallback:ff,$$jqLite:gf})}])}function eb(b){return b.replace(hf,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(jf,"Moz$1")}function Jc(b){b=b.nodeType;return b===ma||!b||9===b}function Kc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Tb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(kf.exec(b)||["",""])[1].toLowerCase();d=ha[d]||ha._default;c.innerHTML=d[1]+b.replace(lf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});
return e}function R(b){if(b instanceof R)return b;var a;O(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Ub("nosel");return new R(b)}if(a){a=V;var c;b=(c=mf.exec(b))?[a.createElement(c[1])]:(c=Kc(b,a))?c.childNodes:[]}Lc(this,b)}function Vb(b){return b.cloneNode(!0)}function xb(b,a){a||yb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)yb(c[d])}function Mc(b,a,c,d){if(y(d))throw Ub("offargs");var e=(d=zb(b))&&d.events,f=d&&d.handle;if(f)if(a)q(a.split(" "),
function(a){if(y(c)){var d=e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function yb(b,a){var c=b.ng339,d=c&&Ab[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Mc(b)),delete Ab[c],b.ng339=s))}function zb(b,a){var c=b.ng339,c=c&&Ab[c];a&&!c&&(b.ng339=c=++nf,c=Ab[c]={events:{},data:{},handle:s});return c}function Wb(b,a,c){if(Jc(b)){var d=y(c),e=!d&&a&&!I(a),
f=!a;b=(b=zb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];x(b,a)}}}function Bb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Cb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function Db(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
q(a.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Lc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Nc(b,a){return Eb(b,"$"+(a||"ngController")+"Controller")}function Eb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=w(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=z.data(b,a[d]))!==s)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Oc(b){for(xb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Pc(b,a){a||xb(b);var c=b.parentNode;c&&c.removeChild(b)}function of(b,a){a=a||T;if("complete"===a.document.readyState)a.setTimeout(b);else z(a).on("load",b)}function Qc(b,a){var c=Fb[a.toLowerCase()];return c&&Rc[sa(b)]&&c}function pf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Sc[a]}function qf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(C(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=oa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function gf(){this.$get=function(){return x(R,{hasClass:function(b,a){b.attr&&(b=b[0]);
return Bb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return Db(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Cb(b,a)}})}}function Na(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Kd)():c+":"+b}function fb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}q(b,this.put,this)}function rf(b){return(b=b.toString().replace(Tc,"").match(Uc))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
" ")+")":"fn"}function bb(b,a){function c(a){return function(b,c){if(I(b))q(b,pc(a));else return a(b,c)}}function d(a,b){Ma(a,"service");if(E(b)||w(b))b=n.instantiate(b);if(!b.$get)throw Da("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(C(c))throw Da("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,
e[2])}}if(!m.get(a)){m.put(a,!0);try{O(a)?(c=db(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(n.invoke(a)):w(a)?b.push(n.invoke(a)):La(a,"module")}catch(e){throw w(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Da("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Da("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),
b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],l=bb.$$annotate(b,a,g),h,n,m;n=0;for(h=l.length;n<h;n++){m=l[n];if("string"!==typeof m)throw Da("itkn",m);k.push(f&&f.hasOwnProperty(m)?f[m]:d(m,g))}w(b)&&(b=b[h]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((w(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return I(a)||E(a)?a:d},get:d,annotate:bb.$$annotate,has:function(a){return r.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new fb([],!0),r={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ca(b),!1)}),constant:c(function(a,b){Ma(a,"constant");r[a]=b;u[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},n=r.$injector=h(r,function(a,b){ba.isString(b)&&k.push(b);
throw Da("unpr",k.join(" <- "));}),u={},v=u.$injector=h(u,function(a,b){var c=n.get(a+"Provider",b);return v.invoke(c.$get,c,s,a)});q(g(b),function(a){v.invoke(a||A)});return v}function Ge(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===sa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():rc(c)?(c=c[0],c="fixed"!==
a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||of(function(){d.$evalAsync(g)})});return g}]}function ff(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function sf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(p--,0===p)for(;H.length;)try{H.pop()()}catch(b){c.error(b)}}}function f(a,b){(function Xb(){q(J,function(a){a()});B=b(Xb,a)})()}function g(){h();l()}function h(){a:{try{M=u.state;break a}catch(a){}M=void 0}M=C(M)?null:M;fa(M,S)&&(M=S);S=M}function l(){if(G!==m.url()||D!==M)G=m.url(),D=M,q($,function(a){a(m.url(),M)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}
var m=this,r=a[0],n=b.location,u=b.history,v=b.setTimeout,P=b.clearTimeout,t={};m.isMock=!1;var p=0,H=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){p++};m.notifyWhenNoOutstandingRequests=function(a){q(J,function(a){a()});0===p?a():H.push(a)};var J=[],B;m.addPollFn=function(a){C(B)&&f(100,v);J.push(a);return a};var M,D,G=n.href,N=a.find("base"),Y=null;h();D=M;m.url=function(a,c,e){C(e)&&(e=null);n!==b.location&&(n=b.location);u!==b.history&&(u=b.history);if(a){var f=
D===e;if(G===a&&(!d.history||f))return m;var g=G&&Ea(G)===Ea(a);G=a;D=e;!d.history||g&&f?(g||(Y=a),c?n.replace(a):g?(c=n,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):n.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),D=M);return m}return Y||n.href.replace(/%27/g,"'")};m.state=function(){return M};var $=[],W=!1,S=null;m.onUrlChange=function(a){if(!W){if(d.history)z(b).on("popstate",g);z(b).on("hashchange",g);W=!0}$.push(a);return a};m.$$checkUrlChange=l;m.baseHref=function(){var a=N.attr("href");
return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var Fa={},y="",hb=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===s?r.cookie=encodeURIComponent(a)+"=;path="+hb+";expires=Thu, 01 Jan 1970 00:00:00 GMT":O(b)&&(d=(r.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+hb).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(r.cookie!==y)for(y=r.cookie,d=y.split("; "),Fa={},f=0;f<d.length;f++)e=d[f],g=
e.indexOf("="),0<g&&(a=k(e.substring(0,g)),Fa[a]===s&&(Fa[a]=k(e.substring(g+1))));return Fa}};m.defer=function(a,b){var c;p++;c=v(function(){delete t[c];e(a)},b||0);t[c]=!0;return c};m.defer.cancel=function(a){return t[a]?(delete t[a],P(a),e(A),!0):!1}}function Ie(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new sf(b,d,a,c)}]}function Je(){this.$get=function(){function b(b,d){function e(a){a!=r&&(n?n==a&&(n=a.n):n=a,f(a.n,a.p),f(a,r),r=a,r.n=null)}function f(a,b){a!=
b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw F("$cacheFactory")("iid",b);var g=0,h=x({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},r=null,n=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!C(b))return a in l||g++,l[a]=b,g>k&&this.remove(n.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==r&&(r=b.p);b==n&&(n=b.n);f(b.n,b.p);delete m[a]}delete l[a];
g--},removeAll:function(){l={};g=0;m={};r=n=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return x({},h,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function $e(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Bc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};q(a,function(a,e){var f=a.match(c);if(!f)throw da("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===
f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}function d(a){var b=a.charAt(0);if(!b||b!==L(b))throw da("baddir",a);return a}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Ld("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function n(a,f){Ma(a,"directive");O(a)?(d(a),Sb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];
q(e[a],function(e,g){try{var h=b.invoke(e);E(h)?h={compile:ca(h)}:!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";I(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){d(l)}});return f}])),e[a].push(f)):q(a,pc(n));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return y(a)?(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,t,p,H,J,B,M,D){function G(a,b){try{a.addClass(b)}catch(c){}}function N(a,b,c,d,e){a instanceof z||(a=z(a));q(a,function(b,c){b.nodeType==ab&&b.nodeValue.match(/\S+/)&&
(a[c]=z(b).wrap("<span></span>").parent()[0])});var f=Y(a,b,a,c,d,e);N.$$addScopeClass(a);var g=null;return function(b,c,d){Sb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==sa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?z(T(g,z("<div>").append(a).html())):c?Ka.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);N.$$addScopeInfo(d,
b);c&&c(d,b);f&&f(b,d,d,e);return d}}function Y(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,n,m,v,u;if(p)for(u=Array(c.length),n=0;n<h.length;n+=3)f=h[n],u[f]=c[f];else u=c;n=0;for(m=h.length;n<m;)l=u[h[n++]],c=h[n++],f=h[n++],c?(c.scope?(k=a.$new(),N.$$addScopeInfo(z(l),k)):k=a,v=c.transcludeOnThisElement?$(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?$(a,b):null,c(f,k,l,d,v)):f&&f(a,l.childNodes,s,e)}for(var h=[],l,k,n,m,p,v=0;v<a.length;v++){l=new $b;k=
W(a[v],[],l,0===v?d:s,e);(f=k.length?y(k,a[v],l,b,c,null,[],[],f):null)&&f.scope&&N.$$addScopeClass(l.$$element);l=f&&f.terminal||!(n=a[v].childNodes)||!n.length?null:Y(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(v,f,l),m=!0,p=p||f;f=null}return m?g:null}function $(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(a,b,c,d,e){var h=
c.$attr,l;switch(a.nodeType){case ma:C(b,va(sa(a)),"E",d,e);for(var k,n,m,p=a.attributes,v=0,u=p&&p.length;v<u;v++){var B=!1,P=!1;k=p[v];l=k.name;n=U(k.value);k=va(l);if(m=ac.test(k))l=l.replace(Wc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var M=k.replace(/(Start|End)$/,"");F(M)&&k===M+"Start"&&(B=l,P=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=va(l.toLowerCase());h[k]=l;if(m||!c.hasOwnProperty(k))c[k]=n,Qc(a,k)&&(c[k]=!0);R(a,b,n,k,m);C(b,k,"A",d,e,B,P)}a=
a.className;I(a)&&(a=a.animVal);if(O(a)&&""!==a)for(;l=g.exec(a);)k=va(l[2]),C(b,k,"C",d,e)&&(c[k]=U(l[3])),a=a.substr(l.index+l[0].length);break;case ab:ia(b,a.nodeValue);break;case 8:try{if(l=f.exec(a.nodeValue))k=va(l[1]),C(b,k,"M",d,e)&&(c[k]=U(l[2]))}catch(t){}}b.sort(xa);return b}function S(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw da("uterdir",b,c);a.nodeType==ma&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);
return z(d)}function Fa(a,b,c){return function(d,e,f,g,h){e=S(e[0],b,c);return a(d,e,f,g,h)}}function y(a,d,e,f,g,h,k,n,m){function B(a,b,c,d){if(a){c&&(a=Fa(a,c,d));a.require=K.require;a.directiveName=ia;if(J===K||K.$$isolateScope)a=X(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=Fa(b,c,d));b.require=K.require;b.directiveName=ia;if(J===K||K.$$isolateScope)b=X(b,{isolateScope:!0});n.push(b)}}function P(a,b,c,d){var e,f="data",g=!1,h=c,k;if(O(b)){k=b.match(l);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=
null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",h=c.parent());"?"===k[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||h[f]("$"+b+"Controller");if(!e&&!g)throw da("ctreq",b,a);return e||null}w(b)&&(e=[],q(b,function(b){e.push(P(a,b,c,d))}));return e}function M(a,c,f,g,h){function l(a,b,c){var d;Va(a)||(c=b,b=a,a=s);A&&(d=G);c||(c=A?S.parent():S);return h(a,b,d,c,Zb)}var m,v,B,D,G,ib,S,W;d===f?(W=e,S=e.$$element):(S=z(f),W=new $b(S,e));J&&(D=c.$new(!0));h&&
(ib=l,ib.$$boundTransclude=h);H&&($={},G={},q(H,function(a){var b={$scope:a===J||a.$$isolateScope?D:c,$element:S,$attrs:W,$transclude:ib};B=a.controller;"@"==B&&(B=W[a.name]);b=p(B,b,!0,a.controllerAs);G[a.name]=b;A||S.data("$"+a.name+"Controller",b.instance);$[a.name]=b}));if(J){N.$$addScopeInfo(S,D,!0,!(Y&&(Y===J||Y===J.$$originalDirective)));N.$$addScopeClass(S,!0);g=$&&$[J.name];var ua=D;g&&g.identifier&&!0===J.bindToController&&(ua=g.instance);q(D.$$isolateBindings=J.$$isolateBindings,function(a,
d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":W.$observe(e,function(a){ua[d]=a});W.$$observers[e].$$scope=c;W[e]&&(ua[d]=b(W[e])(c));break;case "=":if(f&&!W[e])break;h=t(W[e]);l=h.literal?fa:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=ua[d]=h(c);throw da("nonassign",W[e],J.name);};g=ua[d]=h(c);f=function(a){l(a,ua[d])||(l(a,g)?k(c,a=ua[d]):ua[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(W[e],f):c.$watch(t(W[e],f),null,h.literal);D.$on("$destroy",
f);break;case "&":h=t(W[e]),ua[d]=function(a){return h(c,a)}}})}$&&(q($,function(a){a()}),$=null);g=0;for(m=k.length;g<m;g++)v=k[g],Xc(v,v.isolateScope?D:c,S,W,v.require&&P(v.directiveName,v.require,S,G),ib);var Zb=c;J&&(J.template||null===J.templateUrl)&&(Zb=D);a&&a(Zb,f.childNodes,s,h);for(g=n.length-1;0<=g;g--)v=n[g],Xc(v,v.isolateScope?D:c,S,W,v.require&&P(v.directiveName,v.require,S,G),ib)}m=m||{};for(var D=-Number.MAX_VALUE,G,H=m.controllerDirectives,$,J=m.newIsolateScopeDirective,Y=m.templateDirective,
Ga=m.nonTlbTranscludeDirective,C=!1,Yb=!1,A=m.hasElementTranscludeDirective,x=e.$$element=z(d),K,ia,F,gb=f,xa,qa=0,L=a.length;qa<L;qa++){K=a[qa];var R=K.$$start,jb=K.$$end;R&&(x=S(d,R,jb));F=s;if(D>K.priority)break;if(F=K.scope)K.templateUrl||(I(F)?(Oa("new/isolated scope",J||G,K,x),J=K):Oa("new/isolated scope",J,K,x)),G=G||K;ia=K.name;!K.templateUrl&&K.controller&&(F=K.controller,H=H||{},Oa("'"+ia+"' controller",H[ia],K,x),H[ia]=K);if(F=K.transclude)C=!0,K.$$tlb||(Oa("transclusion",Ga,K,x),Ga=K),
"element"==F?(A=!0,D=K.priority,F=x,x=e.$$element=z(V.createComment(" "+ia+": "+e[ia]+" ")),d=x[0],Q(g,Za.call(F,0),d),gb=N(F,f,D,h&&h.name,{nonTlbTranscludeDirective:Ga})):(F=z(Vb(d)).contents(),x.empty(),gb=N(F,f));if(K.template)if(Yb=!0,Oa("template",Y,K,x),Y=K,F=E(K.template)?K.template(x,e):K.template,F=Yc(F),K.replace){h=K;F=Tb.test(F)?Zc(T(K.templateNamespace,U(F))):[];d=F[0];if(1!=F.length||d.nodeType!==ma)throw da("tplrt",ia,"");Q(g,x,d);L={$attr:{}};F=W(d,[],L);var tf=a.splice(qa+1,a.length-
(qa+1));J&&hb(F);a=a.concat(F).concat(tf);Vc(e,L);L=a.length}else x.html(F);if(K.templateUrl)Yb=!0,Oa("template",Y,K,x),Y=K,K.replace&&(h=K),M=Xb(a.splice(qa,a.length-qa),x,e,g,C&&gb,k,n,{controllerDirectives:H,newIsolateScopeDirective:J,templateDirective:Y,nonTlbTranscludeDirective:Ga}),L=a.length;else if(K.compile)try{xa=K.compile(x,e,gb),E(xa)?B(null,xa,R,jb):xa&&B(xa.pre,xa.post,R,jb)}catch(ac){c(ac,ta(x))}K.terminal&&(M.terminal=!0,D=Math.max(D,K.priority))}M.scope=G&&!0===G.scope;M.transcludeOnThisElement=
C;M.elementTranscludeOnThisElement=A;M.templateOnThisElement=Yb;M.transclude=gb;m.hasElementTranscludeDirective=A;return M}function hb(a){for(var b=0,c=a.length;b<c;b++)a[b]=Pb(a[b],{$$isolateScope:!0})}function C(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,B=d.length;p<B;p++)try{m=d[p],(g===s||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Pb(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(u){c(u)}}return h}function F(b){if(e.hasOwnProperty(b))for(var c=
a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function Vc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(G(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Xb(a,b,c,e,f,g,
h,k){var l=[],n,m,p=b[0],v=a.shift(),u=Pb(v,{templateUrl:null,transclude:null,replace:null,$$originalDirective:v}),M=E(v.templateUrl)?v.templateUrl(b,c):v.templateUrl,D=v.templateNamespace;b.empty();d(B.getTrustedResourceUrl(M)).then(function(d){var B,P;d=Yc(d);if(v.replace){d=Tb.test(d)?Zc(T(D,U(d))):[];B=d[0];if(1!=d.length||B.nodeType!==ma)throw da("tplrt",v.name,M);d={$attr:{}};Q(e,b,B);var t=W(B,[],d);I(v.scope)&&hb(t);a=t.concat(a);Vc(c,d)}else B=p,b.html(d);a.unshift(u);n=y(a,B,c,f,b,v,g,h,
k);q(e,function(a,c){a==B&&(e[c]=b[0])});for(m=Y(b[0].childNodes,f);l.length;){d=l.shift();P=l.shift();var H=l.shift(),N=l.shift(),t=b[0];if(!d.$$destroyed){if(P!==p){var J=P.className;k.hasElementTranscludeDirective&&v.replace||(t=Vb(B));Q(H,z(P),t);G(z(t),J)}P=n.transcludeOnThisElement?$(d,n.transclude,N):N;n(m,d,t,e,P)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(n.transcludeOnThisElement&&(a=$(b,n.transclude,e)),n(m,b,c,d,a)))}}function xa(a,b){var c=b.priority-
a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Oa(a,b,c,d){if(b)throw da("multidir",b.name,c.name,a,ta(d));}function ia(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&N.$$addBindingClass(a);return function(a,c){var e=c.parent();b||N.$$addBindingClass(e);N.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function T(a,b){a=L(a||"html");switch(a){case "svg":case "math":var c=V.createElement("div");
c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function jb(a,b){if("srcdoc"==b)return B.HTML;var c=sa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return B.RESOURCE_URL}function R(a,c,d,e,f){var g=jb(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===sa(a))throw da("selmulti",ta(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw da("nodomevents");
var n=h[e];n!==d&&(l=n&&b(n,!0,g,f),d=n);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function Q(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=V.createDocumentFragment();a.appendChild(d);
z(c).data(z(d).data());pa?(Rb=!0,pa.cleanData([d])):delete z.cache[d[z.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],z(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function X(a,b){return x(function(){return a.apply(null,arguments)},a,b)}function Xc(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ta(d))}}var $b=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};$b.prototype={$normalize:va,$addClass:function(a){a&&
0<a.length&&M.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&M.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=$c(a,b);c&&c.length&&M.addClass(this.$$element,c);(c=$c(b,a))&&c.length&&M.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Qc(f,a),h=pf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=yc(a,"-"));g=sa(this.$$element);if("a"===g&&"href"===a||"img"===
g&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var n=2*k,g=g+D(U(h[n]),!0),g=g+(" "+U(h[n+1]));h=U(h[2*k]).split(/\s/);g+=D(U(h[0]),!0);2===h.length&&(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||b===s?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&q(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,
b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);H.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Xa(e,b)}}};var Ga=b.startSymbol(),qa=b.endSymbol(),Yc="{{"==Ga||"}}"==qa?na:function(a){return a.replace(/\{\{/g,Ga).replace(/}}/g,qa)},ac=/^ngAttr[A-Z]/;N.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];w(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;N.$$addBindingClass=m?function(a){G(a,"ng-binding")}:A;N.$$addScopeInfo=
m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;N.$$addScopeClass=m?function(a,b){G(a,b?"ng-isolate-scope":"ng-scope")}:A;return N}]}function va(b){return eb(b.replace(Wc,""))}function $c(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Zc(b){b=z(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&uf.call(b,a,1);return b}function Ke(){var b=
{},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ma(a,"controller");I(a)?x(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!I(a.$scope))throw F("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var m,r,n;l=!0===l;k&&O(k)&&(n=k);if(O(g)){k=g.match(c);if(!k)throw vf("ctrlfmt",g);r=k[1];n=n||k[3];g=b.hasOwnProperty(r)?b[r]:Ac(h.$scope,r,!0)||(a?Ac(e,r,!0):s);La(g,r,!0)}if(l)return l=(w(g)?g[g.length-
1]:g).prototype,m=Object.create(l||null),n&&f(h,n,m,r||g.name),x(function(){d.invoke(g,m,h,r);return m},{instance:m,identifier:n});m=d.instantiate(g,h,r);n&&f(h,n,m,r||g.name);return m}}]}function Le(){this.$get=["$window",function(b){return z(b.document)}]}function Me(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function bc(b,a){if(O(b)){var c=b.replace(wf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(ad))||(d=(d=c.match(xf))&&yf[d[0]].test(c));
d&&(b=tc(c))}}return b}function bd(b){var a=ga(),c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=L(U(b.substr(0,e)));d=U(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function cd(b){var a=I(b)?b:s;return function(c){a||(a=bd(b));return c?(c=a[L(c)],void 0===c&&(c=null),c):a}}function dd(b,a,c,d){if(E(d))return d(b,a,c);q(d,function(d){b=d(b,a,c)});return b}function Pe(){var b=this.defaults={transformResponse:[bc],transformRequest:[function(a){return I(a)&&"[object File]"!==
Aa.call(a)&&"[object Blob]"!==Aa.call(a)&&"[object FormData]"!==Aa.call(a)?$a(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:oa(cc),put:oa(cc),patch:oa(cc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=x({},a);b.data=a.data?dd(a.data,
a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};q(a,function(a,d){E(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ba.isObject(a))throw F("$http")("badreq",a);var e=x({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=x({},a.headers),f,g,c=x({},c.common,c[L(a.method)]);a:for(f in c){a=L(f);for(g in e)if(L(g)===a)continue a;e[f]=c[f]}return d(e)}(a);
e.method=vb(e.method);var f=[function(a){var d=a.headers,e=dd(a.data,cd(d),s,a.transformRequest);C(e)&&q(d,function(a,b){"content-type"===L(b)&&delete d[b]});C(a.withCredentials)&&!C(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},s],g=h.when(e);for(q(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){La(a,
"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){La(a,"fn");g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}D&&(200<=b&&300>b?D.put(q,[b,c,bd(d),e]):D.remove(q));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?B.resolve:B.reject)({data:a,status:b,headers:cd(d),config:c,statusText:e})}function u(a){m(a.data,a.status,oa(a.headers()),
a.statusText)}function J(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var B=h.defer(),M=B.promise,D,G,N=c.headers,q=r(c.url,c.params);k.pendingRequests.push(c);M.then(J,J);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(D=I(c.cache)?c.cache:I(b.cache)?b.cache:n);D&&(G=D.get(q),y(G)?G&&E(G.then)?G.then(u,u):w(G)?m(G[1],G[0],oa(G[2]),G[3]):m(G,200,{},"OK"):D.put(q,M));C(G)&&((G=ed(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:s)&&(N[c.xsrfHeaderName||
b.xsrfHeaderName]=G),d(c.method,q,f,l,N,c.timeout,c.withCredentials,c.responseType));return M}function r(a,b){if(!b)return a;var c=[];Jd(b,function(a,b){null===a||C(a)||(w(a)||(a=[a]),q(a,function(a){I(a)&&(a=ea(a)?a.toISOString():$a(a));c.push(Ca(b)+"="+Ca(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var n=f("$http"),u=[];q(c,function(a){u.unshift(O(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){q(arguments,function(a){k[a]=function(b,c){return k(x(c||
{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){k[a]=function(b,c,d){return k(x(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function zf(){return new T.XMLHttpRequest}function Qe(){this.$get=["$browser","$window","$document",function(b,a,c){return Af(b,zf,b.defer,a.angular.callbacks,c[0])}]}function Af(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;
m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,r,n,u){function v(){p&&p();H&&H.abort()}function P(a,d,e,f,g){B!==s&&c.cancel(B);p=H=null;a(d,e,f,g);b.$$completeOutstandingRequest(A)}b.$$incOutstandingRequestCount();
h=h||b.url();if("jsonp"==L(e)){var t="_"+(d.counter++).toString(36);d[t]=function(a){d[t].data=a;d[t].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+t),t,function(a,b){P(k,a,d[t].data,"",b);d[t]=A})}else{var H=a();H.open(e,h,!0);q(m,function(a,b){y(a)&&H.setRequestHeader(b,a)});H.onload=function(){var a=H.statusText||"",b="response"in H?H.response:H.responseText,c=1223===H.status?204:H.status;0===c&&(c=b?200:"file"==ya(h).protocol?404:0);P(k,c,b,H.getAllResponseHeaders(),a)};e=
function(){P(k,-1,null,null,"")};H.onerror=e;H.onabort=e;n&&(H.withCredentials=!0);if(u)try{H.responseType=u}catch(J){if("json"!==u)throw J;}H.send(l||null)}if(0<r)var B=c(v,r);else r&&E(r.then)&&r.then(v)}}function Ne(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,v){function P(c){return c.replace(k,b).replace(m,
a)}function t(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(v&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=dc("interr",f,g.toString()),d(c)}}v=!!v;for(var p,H,q=0,B=[],M=[],D=f.length,G=[],N=[];q<D;)if(-1!=(p=f.indexOf(b,q))&&-1!=(H=f.indexOf(a,p+h)))q!==p&&G.push(P(f.substring(q,p))),q=f.substring(p+h,H),B.push(q),M.push(c(q,t)),q=H+l,N.push(G.length),G.push("");else{q!==D&&G.push(P(f.substring(q)));
break}if(u&&1<G.length)throw dc("noconcat",f);if(!g||B.length){var Y=function(a){for(var b=0,c=B.length;b<c;b++){if(v&&C(a[b]))return;G[N[b]]=a[b]}return G.join("")};return x(function(a){var b=0,c=B.length,e=Array(c);try{for(;b<c;b++)e[b]=M[b](a);return Y(e)}catch(g){a=dc("interr",f,g.toString()),d(a)}},{exp:f,expressions:B,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(M,function(c,e){var f=Y(c);E(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,
f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Oe(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=a.setInterval,r=a.clearInterval,n=0,u=y(k)&&!k,v=(u?d:c).defer(),P=v.promise;l=y(l)?l:0;P.then(null,null,e);P.$$intervalId=m(function(){v.notify(n++);0<l&&n>=l&&(v.resolve(n),r(P.$$intervalId),delete f[P.$$intervalId]);u||b.$apply()},h);f[P.$$intervalId]=v;return P}var f={};
e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Wd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}
function ec(b){b=b.split("/");for(var a=b.length;a--;)b[a]=sb(b[a]);return b.join("/")}function fd(b,a){var c=ya(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||Bf[c.protocol]||null}function gd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=ya(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=vc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function wa(b,a){if(0===
a.indexOf(b))return a.substr(b.length)}function Ea(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Gb(b){return b.replace(/(#.+)|#$/,"$1")}function fc(b){return b.substr(0,Ea(b).lastIndexOf("/")+1)}function gc(b,a){this.$$html5=!0;a=a||"";var c=fc(b);fd(b,this);this.$$parse=function(a){var b=wa(c,a);if(!O(b))throw Hb("ipthprfx",a,c);gd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),b=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=
ec(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=wa(b,d))!==s?(g=f,g=(f=wa(a,f))!==s?c+(wa("/",f)||f):b+g):(f=wa(c,d))!==s?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function hc(b,a){var c=fc(b);fd(b,this);this.$$parse=function(d){d=wa(b,d)||wa(c,d);var e;"#"===d.charAt(0)?(e=wa(a,d),C(e)&&(e=d)):e=this.$$html5?d:"";gd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&
(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=ec(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ea(b)==Ea(a)?(this.$$parse(a),!0):!1}}function hd(b,a){this.$$html5=!0;hc.apply(this,arguments);var c=fc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,
g;b==Ea(d)?f=d:(g=wa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=ec(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Ib(b){return function(){return this[b]}}function id(b,a){return function(c){if(C(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Re(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?
(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):I(b)?(Wa(b.enabled)&&(a.enabled=b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),
a,k.$$state,b)}var k,m;m=d.baseHref();var r=d.url(),n;if(a.enabled){if(!m&&a.requireBase)throw Hb("nobase");n=r.substring(0,r.indexOf("/",r.indexOf("//")+2))+(m||"/");m=e.history?gc:hd}else n=Ea(r),m=hc;k=new m(n,"#"+b);k.$$parseLinkUrl(r,r);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=z(b.target);"a"!==sa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),
l=e.attr("href")||e.attr("xlink:href");I(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=ya(h.animVal).href);u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Gb(k.absUrl())!=Gb(r)&&d.url(k.absUrl(),!0);var v=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;
k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(v=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Gb(d.url()),b=Gb(k.absUrl()),f=d.state(),g=k.$$replace,n=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(v||n)v=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(n&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Se(){var b=!0,a=this;
this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),
info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ra(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ja("isecfld",a);return b}function ka(b,a){if(b){if(b.constructor===b)throw ja("isecfn",a);if(b.window===b)throw ja("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ja("isecdom",a);if(b===Object)throw ja("isecobj",
a);}return b}function ic(b){return b.constant}function kb(b,a,c,d,e){ka(b,e);ka(a,e);c=c.split(".");for(var f,g=0;1<c.length;g++){f=ra(c.shift(),e);var h=0===g&&a&&a[f]||b[f];h||(h={},b[f]=h);b=ka(h,e)}f=ra(c.shift(),e);ka(b[f],e);return b[f]=d}function Pa(b){return"constructor"==b}function jd(b,a,c,d,e,f,g){ra(b,f);ra(a,f);ra(c,f);ra(d,f);ra(e,f);var h=function(a){return ka(a,f)},l=g||Pa(b)?h:na,k=g||Pa(a)?h:na,m=g||Pa(c)?h:na,r=g||Pa(d)?h:na,n=g||Pa(e)?h:na;return function(f,g){var h=g&&g.hasOwnProperty(b)?
g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return s;h=k(h[a]);if(!c)return h;if(null==h)return s;h=m(h[c]);if(!d)return h;if(null==h)return s;h=r(h[d]);return e?null==h?s:h=n(h[e]):h}}function Cf(b,a){return function(c,d){return b(c,d,ka,a)}}function Df(b,a,c){var d=a.expensiveChecks,e=d?Ef:Ff,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?jd(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=jd(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=s,a=f;while(e<
h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;q(g,function(a,b){ra(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Pa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=ca(l);k&&(a=Cf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c,d){return kb(a,d,b,c,b)};return e[b]=f}function jc(b){return E(b.valueOf)?b.valueOf():Gf.call(b)}function Te(){var b=ga(),
a=ga();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=jc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,
[])),h;if(1===e.length){var l=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,l)||(h=d(a),l=b&&jc(b));return h},b,c)}for(var k=[],n=0,m=e.length;n<m;n++)k[n]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var l=e[c](a);if(b||(b=!g(l,k[c])))k[c]=l&&jc(l)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=
!0;q(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){E(b)&&b.apply(this,arguments);e()},c)}function r(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==
h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var n={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var p,q,s;switch(typeof d){case "string":s=d=d.trim();var B=g?a:b;p=B[s];p||(":"===d.charAt(0)&&":"===d.charAt(1)&&(q=!0,d=d.substring(2)),g=g?u:n,p=new kc(g),p=(new lb(p,c,g)).parse(d),p.constant?p.$$watchDelegate=m:q?(p=e(p),p.$$watchDelegate=p.literal?k:l):p.inputs&&(p.$$watchDelegate=h),B[s]=p);return r(p,f);
case "function":return r(d,f);default:return r(A,f)}}}]}function Ve(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return kd(function(a){b.$evalAsync(a)},a)}]}function We(){this.$get=["$browser","$exceptionHandler",function(b,a){return kd(function(a){b.defer(a)},a)}]}function kd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=s;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{E(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=F("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(I(b)||E(b))d=b&&b.then;E(d)?(this.promise.$$state.status=
-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(E(b)?
b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return l(e,!1)}return d&&E(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function u(a){if(!E(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=m;r.all=function(a){var b=new g,c=0,d=w(a)?[]:{};q(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function ef(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=0;a<m.length;a++){var b=m[a];b&&(m[a]=null,b())}k=m.length=0}function d(a){var b=
m.length;k++;m.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=m[b]=null,0===--k&&l&&(l(),l=null,m.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,m=[];return d}]}function Ue(){function b(a){function b(){this.$$watchers=this.$$nextSibling=
this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++rb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=F("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function m(){this.$id=++rb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function r(a){if(t.$$phase)throw c("inprog",t.$$phase);t.$$phase=a}function n(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function u(){}function v(){for(;J.length;)try{J.shift()()}catch(a){g(a)}e=null}function s(){null===e&&(e=l.defer(function(){t.$apply(v)}))}m.prototype={constructor:m,$new:function(a,c){var d;c=c||this;a?
(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c){var e=h(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,c,e);var f=this.$$watchers,g={fn:b,last:u,get:e,exp:a,eq:!!c};d=null;E(b)||(g.fn=A);f||(f=this.$$watchers=[]);f.unshift(g);return function(){Xa(f,
g);d=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=
a;var b,d,g,h;if(!C(e)){if(I(e))if(Sa(e))for(f!==n&&(f=n,u=f.length=0,k++),a=e.length,u!==a&&(k++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==r&&(f=r={},u=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(u++,f[b]=g,k++));if(u>a)for(b in k++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<b.length,k=0,m=h(a,c),n=[],r={},p=!0,u=0;return this.$watch(m,
function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(l)if(I(e))if(Sa(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)wc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,m,n,q=a,s,S=[],P,J;r("$digest");l.$$checkUrlChange();this===t&&null!==e&&(l.defer.cancel(e),v());d=null;do{n=!1;for(s=this;p.length;){try{J=p.shift(),J.scope.$eval(J.expression,J.locals)}catch(y){g(y)}d=null}a:do{if(k=s.$$watchers)for(m=k.length;m--;)try{if(b=k[m])if((f=b.get(s))!==(h=b.last)&&
!(b.eq?fa(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))n=!0,d=b,b.last=b.eq?Ba(f,null):f,b.fn(f,h===u?f:h,s),5>q&&(P=4-q,S[P]||(S[P]=[]),S[P].push({msg:E(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){n=!1;break a}}catch(F){g(F)}if(!(k=s.$$childHead||s!==this&&s.$$nextSibling))for(;s!==this&&!(k=s.$$nextSibling);)s=s.$parent}while(s=k);if((n||p.length)&&!q--)throw t.$$phase=null,c("infdig",a,S);}while(n||p.length);for(t.$$phase=null;H.length;)try{H.shift()()}catch(x){g(x)}},
$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==t){for(var b in this.$$listenerCount)n(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=
this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){t.$$phase||p.length||l.defer(function(){p.length&&t.$digest()});p.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){H.push(a)},$apply:function(a){try{return r("$apply"),this.$eval(a)}catch(b){g(b)}finally{t.$$phase=
null;try{t.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&J.push(b);s()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,n(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=
!0},defaultPrevented:!1},l=Ya([h],arguments,1),k,m;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(n){g(n)}else d.splice(k,1),k--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Ya([e],arguments,1),h,l;c=d;){e.currentScope=
c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var t=new m,p=t.$$asyncQueue=[],H=t.$$postDigestQueue=[],J=t.$$applyAsyncQueue=[];return t}]}function Xd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=
function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=ya(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Hf(b){if("self"===b)return b;if(O(b)){if(-1<b.indexOf("***"))throw za("iwcard",b);b=ld(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Ua(b))return new RegExp("^"+b.source+"$");throw za("imatcher");}function md(b){var a=[];y(b)&&q(b,function(b){a.push(Hf(b))});
return a}function Ye(){this.SCE_CONTEXTS=la;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=md(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=md(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?ed(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw za("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw za("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw za("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===s||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(c===la.RESOURCE_URL){var g=ya(e.toString()),r,n,u=!1;r=0;for(n=b.length;r<n;r++)if(d(b[r],g)){u=!0;break}if(u)for(r=0,n=a.length;r<n;r++)if(d(a[r],g)){u=!1;break}if(u)return e;throw za("insecurl",e.toString());}if(c===la.HTML)return f(e);throw za("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Xe(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
8>Qa)throw za("iequirks");var d=oa(la);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=na);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;q(la,function(a,b){var c=L(b);d[eb("parse_as_"+c)]=function(b){return e(a,b)};d[eb("get_trusted_"+c)]=function(b){return f(a,b)};d[eb("trust_as_"+
c)]=function(b){return g(a,b)}});return d}]}function Ze(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(L((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var r in l)if(k=h.exec(r)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in
l);!d||k&&m||(k=O(f.body.style.webkitTransition),m=O(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Qa)return!1;if(C(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:cb(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function af(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;w(g)?g=g.filter(function(a){return a!==
bc}):g===bc&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){return a.data},function(a){if(!f)throw da("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function bf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var d=ba.element(a).data("$binding");d&&q(d,function(d){c?(new RegExp("(^|\\s)"+
ld(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function cf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",
function(b,a,c,d,e){function f(f,l,k){var m=y(k)&&!k,r=(m?d:c).defer(),n=r.promise;l=a.defer(function(){try{r.resolve(f())}catch(a){r.reject(a),e(a)}finally{delete g[n.$$timeoutId]}m||b.$apply()},l);n.$$timeoutId=l;g[l]=r;return n}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function ya(b){Qa&&(X.setAttribute("href",b),b=X.href);X.setAttribute("href",b);return{href:X.href,protocol:X.protocol?
X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function ed(b){b=O(b)?ya(b):b;return b.protocol===nd.protocol&&b.host===nd.host}function df(){this.$get=ca(T)}function Ic(b){function a(c,d){if(I(c)){var e={};q(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
"Filter")}}];a("currency",od);a("date",pd);a("filter",If);a("json",Jf);a("limitTo",Kf);a("lowercase",Lf);a("number",qd);a("orderBy",rd);a("uppercase",Mf)}function If(){return function(b,a,c){if(!w(b))return b;var d;switch(null!==a?typeof a:"null"){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=Nf(a,c,d);break;default:return b}return b.filter(a)}}function Nf(b,a,c){var d=I(b)&&"$"in b;!0===a?a=fa:E(a)||(a=function(a,b){if(C(a))return!1;if(null===a||
null===b)return a===b;if(I(a)||I(b))return!1;a=L(""+a);b=L(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!I(e)?Ha(e,b.$,a,!1):Ha(e,b,a,c)}}function Ha(b,a,c,d,e){var f=null!==b?typeof b:"null",g=null!==a?typeof a:"null";if("string"===g&&"!"===a.charAt(0))return!Ha(b,a.substring(1),c,d);if(w(b))return b.some(function(b){return Ha(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ha(b[h],a,c,!0))return!0;return e?!1:Ha(b,a,c,!1)}if("object"===g){for(h in a)if(e=
a[h],!E(e)&&!C(e)&&(f="$"===h,!Ha(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function od(b){var a=b.NUMBER_FORMATS;return function(b,d,e){C(d)&&(d=a.CURRENCY_SYM);C(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:sd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function qd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:sd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function sd(b,a,c,d,e){if(!isFinite(b)||
I(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(td)[1]||"").length;C(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(td),k=g[0],g=g[1]||"",r=0,n=a.lgSize,u=a.gSize;if(k.length>=n+u)for(r=k.length-n,m=0;m<r;m++)0===(r-m)%u&&0!==m&&(h+=c),h+=k.charAt(m);
for(m=r;m<k.length;m++)0===(k.length-m)%n&&0!==m&&(h+=c),h+=k.charAt(m);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Jb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Jb(e,a,d)}}function Kb(b,a){return function(c,d){var e=c["get"+b](),
f=vb(a?"SHORT"+b:b);return d[f][e]}}function ud(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function vd(b){return function(a){var c=ud(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Jb(a,b)}}function lc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function pd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;
b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;O(c)&&(c=Of.test(c)?aa(c):a(c));Q(c)&&(c=new Date(c));if(!ea(c))return c;for(;e;)(k=Pf.exec(e))?(h=Ya(h,k,1),
e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));q(h,function(a){l=Qf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Jf(){return function(b,a){C(a)&&(a=2);return $a(b,a)}}function Kf(){return function(b,a){Q(b)&&(b=b.toString());return w(b)||O(b)?(a=Infinity===Math.abs(Number(a))?Number(a):aa(a))?0<a?b.slice(0,a):b.slice(a):O(b)?"":[]:b}}function rd(b){return function(a,c,d){function e(a,
b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=w(c)?c:[c];0===
c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||na;if(O(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){E(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function wd(b,a,c,
d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Lb;f.$error={};f.$$success={};f.$pending=s;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ma(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;
f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});Xa(g,a)};xd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,
Ra);d.addClass(b,Mb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Ra,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function mc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function mb(b,a,c,d,e,f){var g=L(a[0].type);if(!e.android){var h=
!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=U(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=
b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Nb(b,a){return function(c,d){var e,f;if(ea(c))return c;if(O(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Rf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/
1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function nb(b,a,c,d){return function(e,f,g,h,l,k,m){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return y(a)?ea(a)?a:c(a):s}yd(e,f,g,h);mb(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,v;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,v),"UTC"===u&&b.setMinutes(b.getMinutes()-
b.getTimezoneOffset()),b):s});h.$formatters.push(function(a){if(a&&!ea(a))throw Ob("datefmt",a);if(r(a)){if((v=a)&&"UTC"===u){var b=6E4*v.getTimezoneOffset();v=new Date(v.getTime()+b)}return m("date")(a,d,u)}v=null;return""});if(y(g.min)||g.ngMin){var q;h.$validators.min=function(a){return!r(a)||C(q)||c(a)>=q};g.$observe("min",function(a){q=n(a);h.$validate()})}if(y(g.max)||g.ngMax){var t;h.$validators.max=function(a){return!r(a)||C(t)||c(a)<=t};g.$observe("max",function(a){t=n(a);h.$validate()})}}}
function yd(b,a,c,d){(d.$$hasNativeValidators=I(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?s:b})}function zd(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw F("ngModel")("constexpr",c,d);return b(a)}return e}function nc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!w(a)){if(O(a))return a.split(" ");
if(I(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var u=l(k,1);h.$addClass(u)}else if(!fa(b,m)){var q=e(m),u=d(k,q),k=d(q,k),u=l(u,1),k=l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,
k)}}m=oa(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function xd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+yc(b,"-"):"";a(ob+b,!0===c);a(Ad+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Ad]=
!(f[ob]=e.hasClass(ob));d.$setValidity=function(b,e,f){e===s?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Bd(d.$pending)&&(d.$pending=s));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Cd,!0),d.$valid=d.$invalid=s,c("",null)):(a(Cd,!1),d.$valid=Bd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?s:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,
e,d)}}function Bd(b){if(b)for(var a in b)return!1;return!0}var Sf=/^\/(.+)\/([a-z]*)$/,L=function(b){return O(b)?b.toLowerCase():b},wc=Object.prototype.hasOwnProperty,vb=function(b){return O(b)?b.toUpperCase():b},Qa,z,pa,Za=[].slice,uf=[].splice,Tf=[].push,Aa=Object.prototype.toString,Ja=F("ng"),ba=T.angular||(T.angular={}),db,rb=0;Qa=V.documentMode;A.$inject=[];na.$inject=[];var w=Array.isArray,U=function(b){return O(b)?b.trim():b},ld=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},cb=function(){if(y(cb.isActive_))return cb.isActive_;var b=!(!V.querySelector("[ng-csp]")&&!V.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return cb.isActive_=b},tb=["ng-","data-ng-","ng:","x-ng-"],Rd=/[A-Z]/g,zc=!1,Rb,ma=1,ab=3,Vd={full:"1.3.16",major:1,minor:3,dot:16,codeName:"cookie-oatmealification"};R.expando="ng339";var Ab=R.cache={},nf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var hf=/([\:\-\_]+(.))/g,jf=/^moz([A-Z])/,
Uf={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=F("jqLite"),mf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,kf=/<([\w:]+)/,lf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=
ha.caption=ha.thead;ha.th=ha.td;var Ka=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===V.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(T).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?z(this[b]):z(this[this.length+b])},length:0,push:Tf,sort:[].sort,splice:[].splice},Fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){Fb[L(b)]=b});
var Rc={};q("input select option textarea button form details".split(" "),function(b){Rc[b]=!0});var Sc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Wb,removeData:yb},function(b,a){R[a]=b});q({data:Wb,inheritedData:Eb,scope:function(b){return z.data(b,"$scope")||Eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return z.data(b,"$isolateScope")||z.data(b,"$isolateScopeNoTemplate")},controller:Nc,injector:function(b){return Eb(b,
"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Bb,css:function(b,a,c){a=eb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==ab&&2!==d&&8!==d)if(d=L(a),Fb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||A).specified?d:s;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},
text:function(){function b(a,b){if(C(b)){var d=a.nodeType;return d===ma||d===ab?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(C(a)){if(b.multiple&&"select"===sa(b)){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(C(a))return b.innerHTML;xb(b,!0);b.innerHTML=a},empty:Oc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Oc&&(2==b.length&&b!==Bb&&b!==Nc?
a:d)===s){if(I(a)){for(e=0;e<g;e++)if(b===Wb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});q({removeData:yb,on:function a(c,d,e,f){if(y(f))throw Ub("onargs");if(Jc(c)){var g=zb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=qf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===
d?a(c,Uf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Mc,one:function(a,c,d){a=z(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;xb(a);q(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){a.nodeType===ma&&c.push(a)});return c},contents:function(a){return a.contentDocument||
a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===ma||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===ma){var d=a.firstChild;q(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=z(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Pc,detach:function(a){Pc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,
d.nextSibling);d=h}},addClass:Db,removeClass:Cb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=d;C(f)&&(f=!Bb(a,c));(f?Db:Cb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Vb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=zb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===
this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:g,target:a},c.type&&(e=x(e,c)),c=oa(h),f=d?[e].concat(d):[e],q(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)C(g)?(g=a(this[h],c,e,f),y(g)&&(g=z(g))):Lc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=
R.prototype.on;R.prototype.unbind=R.prototype.off});fb.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var Uc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Vf=/,/,Wf=/^\s*(_?)(\S+?)\1\s*$/,Tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Da=F("$injector");bb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw O(d)&&d||(d=a.name||
rf(a)),Da("strictdi",d);c=a.toString().replace(Tc,"");c=c.match(Uc);q(c[1].split(Vf),function(a){a.replace(Wf,function(a,c,d){e.push(d)})})}a.$inject=e}}else w(a)?(c=a.length-1,La(a[c],"fn"),e=a.slice(0,c)):La(a,"fn",!0);return e};var Xf=F("$animate"),He=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Xf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ga();q((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});q(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,
c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function k(a,c){if(ba.isObject(c)){var d=x(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){k(a,c);a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,
c,d){a=z(a);c=O(c)?c:w(c)?c.join(" "):"";q(a,function(a){Db(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=z(a);c=O(c)?c:w(c)?c.join(" "):"";q(a,function(a){Cb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=z(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ba.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=w(c)?c:c.split(" ");d=w(d)?d:d.split(" ");h(e,c,!0);
h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:A,cancel:A}}]}],da=F("$compile");Bc.$inject=["$provide","$$sanitizeUriProvider"];var Wc=/^((?:x|data)[\:\-_])/i,vf=F("$controller"),
ad="application/json",cc={"Content-Type":ad+";charset=utf-8"},xf=/^\[|^\{(?!\{)/,yf={"[":/]$/,"{":/}$/},wf=/^\)\]\}',?\n/,dc=F("$interpolate"),Yf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Bf={http:80,https:443,ftp:21},Hb=F("$location"),Zf={$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(C(a))return this.$$url;var c=Yf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Ib("$$protocol"),host:Ib("$$host"),
port:Ib("$$port"),path:id("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(O(a)||Q(a))a=a.toString(),this.$$search=vc(a);else if(I(a))a=Ba(a,{}),q(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Hb("isrcharg");break;default:C(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:id("$$hash",function(a){return null!==a?a.toString():
""}),replace:function(){this.$$replace=!0;return this}};q([hd,hc,gc],function(a){a.prototype=Object.create(Zf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Hb("nostate");this.$$state=C(c)?null:c;return this}});var ja=F("$parse"),$f=Function.prototype.call,ag=Function.prototype.apply,bg=Function.prototype.bind,pb=ga();q({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,
c){a.constant=a.literal=a.sharedGetter=!0;pb[c]=a});pb["this"]=function(a){return a};pb["this"].sharedGetter=!0;var qb=x(ga(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,
c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),cg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},kc=function(a){this.options=a};kc.prototype={constructor:kc,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=qb[c],f=qb[d];qb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,
text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===
a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ja("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-
1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;
for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=cg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var lb=function(a,c,d){this.lexer=
a;this.$filter=c;this.options=d};lb.ZERO=x(function(){return 0},{sharedGetter:!0,constant:!0});lb.prototype={constructor:lb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&
this.peek().text in pb?a=pb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ja("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===
this.tokens.length)throw ja("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw ja("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+
"]",this.peek());return c},unaryFn:function(a,c){var d=qb[a];return x(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=qb[c];return x(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return Df(a,this.options,this.text)},constant:function(){var a=this.consume().value;
return x(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());
var f=[a].concat(d||[]);return x(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(s,e)}return c(l)},{constant:!c.$stateful&&f.every(ic),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),x(function(d,f){return a.assign(d,c(d,f),f)},
{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return x(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);
return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=
this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(lb.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.identifier();return x(function(d,e,f){d=f||a(d,e);return null==d?s:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");
return x(function(e,f){var g=a(e,f),h=d(e,f);ra(h,c);return g?ka(g[h],c):s},{assign:function(e,f,g){var h=ra(d(e,g),c),l=ka(a(e,g),c);l||a.assign(e,l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?s:g,k=a(g,h,l)||A;if(f)for(var m=d.length;m--;)f[m]=ka(d[m](g,h),e);ka(l,e);if(k){if(k.constructor===k)throw ja("isecfn",
e);if(k===$f||k===ag||k===bg)throw ja("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);f&&(f.length=0);return ka(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return x(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ic),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return x(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ic),inputs:c})}};var Ff=ga(),Ef=ga(),Gf=Object.prototype.valueOf,za=F("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},da=F("$compile"),X=V.createElement("a"),
nd=ya(T.location.href);Ic.$inject=["$provide"];od.$inject=["$locale"];qd.$inject=["$locale"];var td=".",Qf={yyyy:Z("FullYear",4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:Kb("Month"),MMM:Kb("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:Kb("Day"),EEE:Kb("Day",!0),a:function(a,c){return 12>a.getHours()?
c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Jb(Math[0<a?"floor":"ceil"](a/60),2)+Jb(Math.abs(a%60),2))},ww:vd(2),w:vd(1),G:lc,GG:lc,GGG:lc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},Pf=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Of=/^\-?\d+$/;pd.$inject=["$locale"];var Lf=ca(L),Mf=ca(vb);rd.$inject=["$parse"];var Yd=ca({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&
!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Aa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),wb={};q(Fb,function(a,c){if("multiple"!=a){var d=va("ng-"+c);wb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});q(Sc,function(a,c){wb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&
(e=f.ngPattern.match(Sf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});q(["src","srcset","href"],function(a){var c=va("ng-"+a);wb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Aa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Qa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,
c){a.$name=c},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};wd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Dd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:wd,compile:function(d,e){d.addClass(Ra).addClass(ob);var f=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,k){if(!("action"in e)){var m=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};
d[0].addEventListener("submit",m,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",m,!1)},0,!1)})}var r=k.$$parentForm;f&&(kb(a,null,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(kb(a,null,k.$name,s,k.$name),r.$$renameControl(k,c),kb(a,null,k.$name,k,k.$name))}));d.on("$destroy",function(){r.$removeControl(k);f&&kb(a,null,e[f],s,k.$name);x(k,Lb)})}}}}}]},Zd=Dd(),le=Dd(!0),Rf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,dg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
eg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,fg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Ed=/^(\d{4})-(\d{2})-(\d{2})$/,Fd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,oc=/^(\d{4})-W(\d\d)$/,Gd=/^(\d{4})-(\d\d)$/,Hd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Id={text:function(a,c,d,e,f,g){mb(a,c,d,e,f,g);mc(e)},date:nb("date",Ed,Nb(Ed,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":nb("datetimelocal",Fd,Nb(Fd,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:nb("time",Hd,Nb(Hd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:nb("week",oc,function(a,c){if(ea(a))return a;if(O(a)){oc.lastIndex=0;var d=oc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=ud(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:nb("month",Gd,Nb(Gd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){yd(a,c,d,e);mb(a,c,d,e,f,g);e.$$parserName=
"number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:fg.test(a)?parseFloat(a):s});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Q(a))throw Ob("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||C(h)||a>=h};d.$observe("min",function(a){y(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:s;e.$validate()})}if(y(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||C(l)||a<=l};d.$observe("max",function(a){y(a)&&
!Q(a)&&(a=parseFloat(a,10));l=Q(a)&&!isNaN(a)?a:s;e.$validate()})}},url:function(a,c,d,e,f,g){mb(a,c,d,e,f,g);mc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||dg.test(d)}},email:function(a,c,d,e,f,g){mb(a,c,d,e,f,g);mc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||eg.test(d)}},radio:function(a,c,d,e){C(d.name)&&c.attr("name",++rb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=
function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=zd(l,a,"ngTrueValue",d.ngTrueValue,!0),m=zd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return fa(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:A,button:A,submit:A,reset:A,file:A},Cc=["$browser",
"$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Id[L(h.type)]||Id.text)(f,g,h,l[0],c,a,d,e)}}}}],gg=/^(true|false|\d+)$/,De=function(){return{restrict:"A",priority:100,compile:function(a,c){return gg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},de=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);
return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===s?"":a})}}}}],fe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===s?"":a})}}}}],ee=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),
h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Ce=ca({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ge=nc("",!0),ie=nc("Odd",0),he=nc("Even",1),je=Ia({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),ke=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Hc={},hg={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=va("ng-"+a);Hc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};hg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ne=["$animate",function(a){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=V.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=ub(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],oe=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:ba.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,n,q,v){var s=0,t,p,H,J=function(){p&&(p.remove(),p=null);t&&(t.$destroy(),t=null);H&&(d.leave(H).then(function(){p=null}),p=H,H=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(k)||k&&!f.$eval(k)||c()},n=++s;e?(a(e,!0).then(function(a){if(n===s){var c=f.$new();q.template=a;a=v(c,function(a){J();d.enter(a,null,g).then(h)});t=c;H=a;t.$emit("$includeContentLoaded",
e);f.$eval(l)}},function(){n===s&&(J(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(J(),q.template=null)})}}}}],Fe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Kc(f.template,V).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],pe=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
Be=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?U(f):f;e.$parsers.push(function(a){if(!C(a)){var c=[];a&&q(a.split(h),function(a){a&&c.push(g?U(a):a)});return c}});e.$formatters.push(function(a){return w(a)?a.join(f):s});e.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Ad="ng-invalid",Ra="ng-pristine",Mb="ng-dirty",Cd="ng-pending",Ob=new F("ngModel"),ig=["$scope","$exceptionHandler","$attrs",
"$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=s;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=s;this.$name=m(d.name||"",!1)(a);var r=f(d.ngModel),n=r.assign,u=r,v=n,
P=null,t,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=r(a);E(d)&&(d=c(a));return d};v=function(a,c){E(r(a))?g(a,{$$$p:p.$modelValue}):n(a,p.$modelValue)}}else if(!r.assign)throw Ob("nonassign",d.ngModel,ta(e));};this.$render=A;this.$isEmpty=function(a){return C(a)||""===a||null===a||a!==a};var H=e.inheritedData("$formController")||Lb,J=0;xd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,
c){delete a[c]},parentForm:H,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Mb);g.addClass(e,Ra)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Ra);g.addClass(e,Mb);H.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(P);p.$viewValue=
p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!Q(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:s,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;q(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(q(p.$asyncValidators,function(a,
c){g(c,null)}),!1)}function f(){var d=[],e=!0;q(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!E(k.then))throw Ob("$asyncValidators",k);g(h,s);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},A):h(!0)}function g(a,c){l===J&&p.$setValidity(a,c)}function h(a){l===J&&d(a)}J++;var l=J;(function(){var a=p.$$parserName||"parse";if(t===s)g(a,null);else return t||(q(p.$validators,function(a,c){g(c,null)}),q(p.$asyncValidators,function(a,c){g(c,
null)})),g(a,t),t;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(P);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(t=C(c)?s:!0)for(var d=0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),C(c)){t=!1;break}Q(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=u(a));var e=p.$modelValue,
f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:s,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){v(a,p.$modelValue);q(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=
function(c){var d=0,e=p.$options;e&&y(e.debounce)&&(e=e.debounce,Q(e)?d=e:Q(e[c])?d=e[c]:Q(e["default"])&&(d=e["default"]));h.cancel(P);d?P=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=u(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=p.$$rawModelValue=c;t=s;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),
p.$$runValidators(c,f,A))}return c})}],Ae=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:ig,priority:1,compile:function(c){c.addClass(Ra).addClass("ng-untouched").addClass(ob);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Lb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&
h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],jg=/(\s+|^)default(\s+|$)/,Ee=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(jg,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},qe=Ia({terminal:!0,priority:1E3}),re=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,m=h.$attr.when&&g.attr(h.$attr.when),r=h.offset||0,n=f.$eval(m)||{},u={},m=c.startSymbol(),s=c.endSymbol(),y=m+k+"-"+r+s,t=ba.noop,p;q(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+L(d[2]),n[d]=g.attr(h.$attr[c]))});q(n,function(a,e){u[e]=c(a.replace(d,
y))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in n||(c=a.pluralCat(c-r));c===p||d&&isNaN(p)||(t(),t=f.$watch(u[c],l),p=c)})}}}],se=["$parse","$animate",function(a,c){var d=F("ngRepeat"),e=function(a,c,d,e,k,m,q){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===q-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=V.createComment(" end ngRepeat: "+
h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var m=k[1],r=k[2],n=k[3],u=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var v=k[3]||k[1],y=k[2];if(n&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(n)))throw d("badident",n);var t,p,H,F,B={$id:Na};u?t=a(u):(H=function(a,c){return Na(c)},
F=function(a){return a});return function(a,f,g,k,m){t&&(p=function(c,d,e){y&&(B[y]=c);B[v]=d;B.$index=e;return t(a,B)});var u=ga();a.$watchCollection(r,function(g){var k,r,t=f[0],G,B=ga(),x,C,A,N,E,w,I;n&&(a[n]=g);if(Sa(g))E=g,r=p||H;else{r=p||F;E=[];for(I in g)g.hasOwnProperty(I)&&"$"!=I.charAt(0)&&E.push(I);E.sort()}x=E.length;I=Array(x);for(k=0;k<x;k++)if(C=g===E?k:E[k],A=g[C],N=r(C,A,k),u[N])w=u[N],delete u[N],B[N]=w,I[k]=w;else{if(B[N])throw q(I,function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",
h,N,A);I[k]={id:N,scope:s,clone:s};B[N]=!0}for(G in u){w=u[G];N=ub(w.clone);c.leave(N);if(N[0].parentNode)for(k=0,r=N.length;k<r;k++)N[k].$$NG_REMOVED=!0;w.scope.$destroy()}for(k=0;k<x;k++)if(C=g===E?k:E[k],A=g[C],w=I[k],w.scope){G=t;do G=G.nextSibling;while(G&&G.$$NG_REMOVED);w.clone[0]!=G&&c.move(ub(w.clone),null,z(t));t=w.clone[w.clone.length-1];e(w.scope,k,v,A,y,C,x)}else m(function(a,d){w.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,z(t));t=f;w.clone=a;B[w.id]=w;e(w.scope,k,v,
A,y,C,x)});u=B})}}}}],te=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],me=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ue=Ia(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,
"")});a&&c.css(a)},!0)}),ve=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=ub(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,
e){k.push(e);var f=c.element;d[d.length++]=V.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],we=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),xe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,
element:c})}}),ze=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw F("ngTransclude")("orphan",ta(c));f(function(a){c.empty();c.append(a)})}}),$d=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],kg=F("ngOptions"),ye=ca({restrict:"A",terminal:!0}),ae=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:A};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,q;l.databound=d.ngModel;l.init=function(a,c,d){m=a;q=d};l.addOption=function(c,d){Ma(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),q.parent()&&q.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c=
"? "+Na(c)+" ?";q.val(c);a.prepend(q);a.val(c);q.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=A})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(B.parent()&&B.remove(),c.val(a),""===a&&t.prop("selected",!0)):null==a&&t?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){B.parent()&&B.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;
d.$render=function(){var a=new fb(d.$viewValue);q(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){fa(e,d.$viewValue)||(e=oa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function r(e,f,g){function h(a,c,d){U[A]=d;I&&(U[I]=c);return a(e,U)}function k(a){var c;if(u)if(L&&w(a)){c=new fb([]);for(var d=0;d<a.length;d++)c.put(h(L,null,a[d]),!0)}else c=
new fb(a);else L&&(a=h(L,null,a));return function(d,e){var f;f=L?L:z?z:D;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){p||(e.$$postDigest(r),p=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function r(){p=!1;var a={"":[]},c=[""],d,l,s,t,v;s=g.$viewValue;t=O(e)||[];var A=I?Object.keys(t).sort():t,w,z,E,D,S={};v=k(s);var Q=!1,V,X;R={};for(D=0;E=A.length,D<E;D++){w=D;if(I&&(w=A[D],"$"===w.charAt(0)))continue;z=t[w];d=h(M,w,z)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=v(w,z);Q=Q||d;z=h(B,w,z);
z=y(z)?z:"";X=L?L(e,U):I?A[D]:D;L&&(R[X]=w);l.push({id:X,label:z,selected:d})}u||(x||null===s?a[""].unshift({id:"",label:"",selected:!Q}):Q||a[""].unshift({id:"?",label:"",selected:!0}));w=0;for(A=c.length;w<A;w++){d=c[w];l=a[d];T.length<=w?(s={element:F.clone().attr("label",d),label:l.label},t=[s],T.push(t),f.append(s.element)):(t=T[w],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));Q=null;D=0;for(E=l.length;D<E;D++)d=l[D],(v=t[D+1])?(Q=v.element,v.label!==d.label&&(m(S,v.label,!1),m(S,d.label,
!0),Q.text(v.label=d.label),Q.prop("label",v.label)),v.id!==d.id&&Q.val(v.id=d.id),Q[0].selected!==d.selected&&(Q.prop("selected",v.selected=d.selected),Qa&&Q.prop("selected",v.selected))):(""===d.id&&x?V=x:(V=C.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),t.push(v={element:V,label:d.label,id:d.id,selected:d.selected}),m(S,d.label,!0),Q?Q.after(V):s.element.append(V),Q=V);for(D++;t.length>D;)d=t.pop(),m(S,d.label,!1),d.element.remove()}for(;T.length>
w;){l=T.pop();for(D=1;D<l.length;++D)m(S,l[D].label,!1);l[0].element.remove()}q(S,function(a,c){0<a?n.addOption(c):0>a&&n.removeOption(c)})}var t;if(!(t=v.match(d)))throw kg("iexp",v,ta(f));var B=c(t[2]||t[1]),A=t[4]||t[6],E=/ as /.test(t[0])&&t[1],z=E?c(E):null,I=t[5],M=c(t[3]||""),D=c(t[2]?t[1]:A),O=c(t[7]),L=t[8]?c(t[8]):null,R={},T=[[{element:f,label:""}]],U={};x&&(a(x)(e),x.removeClass("ng-scope"),x.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=O(e)||[],c;if(u)c=[],q(f.val(),
function(d){d=L?R[d]:d;c.push("?"===d?s:""===d?null:h(z?z:D,d,a[d]))});else{var d=L?R[f.val()]:f.val();c="?"===d?s:""===d?null:h(z?z:D,d,a[d])}g.$setViewValue(c);r()})});g.$render=r;e.$watchCollection(O,l);e.$watchCollection(function(){var a=O(e),c;if(a&&w(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(B,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(B,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var n=l[0];l=l[1];var u=h.multiple,
v=h.ngOptions,x=!1,t,p=!1,C=z(V.createElement("option")),F=z(V.createElement("optgroup")),B=C.clone();h=0;for(var A=g.children(),E=A.length;h<E;h++)if(""===A[h].value){t=x=A.eq(h);break}n.init(l,x,B);u&&(l.$isEmpty=function(a){return!a||0===a.length});v?r(e,g,l):u?m(e,g,l):k(e,g,l,n)}}}}],ce=["$interpolate",function(a){var c={addOption:A,removeOption:A};return{restrict:"E",priority:100,compile:function(d,e){if(C(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=
d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],be=ca({restrict:"E",terminal:!1}),Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
Dc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){O(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw F("ngPattern")("noregexp",g,a,ta(c));f=a||s;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||C(f)||f.test(a)}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};T.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Sd(),Ud(ba),z(V).ready(function(){Od(V,xc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * @license AngularJS v1.3.15
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider),
    $routeMinErr = angular.$$minErr('ngRoute');

/**
 * @ngdoc provider
 * @name $routeProvider
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider() {
  function inherit(parent, extra) {
    return angular.extend(Object.create(parent), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` â€“ `{(string|function()=}` â€“ Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` â€“ `{string=}` â€“ A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` â€“ `{string=|function()=}` â€“ html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` â€“ `{string=|function()=}` â€“ path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
   *      is:
   *
   *      - `key` â€“ `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `redirectTo` â€“ {(string|function())=} â€“ value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    //copy original route object to preserve params inherited from proto chain
    var routeCopy = angular.copy(route);
    if (angular.isUndefined(routeCopy.reloadOnSearch)) {
      routeCopy.reloadOnSearch = true;
    }
    if (angular.isUndefined(routeCopy.caseInsensitiveMatch)) {
      routeCopy.caseInsensitiveMatch = this.caseInsensitiveMatch;
    }
    routes[path] = angular.extend(
      routeCopy,
      path && pathRegExp(path, routeCopy)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length - 1] == '/')
            ? path.substr(0, path.length - 1)
            : path + '/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, routeCopy)
      );
    }

    return this;
  };

  /**
   * @ngdoc property
   * @name $routeProvider#caseInsensitiveMatch
   * @description
   *
   * A boolean property indicating if routes defined
   * using this provider should be matched using a case insensitive
   * algorithm. Defaults to `false`.
   */
  this.caseInsensitiveMatch = false;

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option) {
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object|string} params Mapping information to be assigned to `$route.current`.
   * If called with a string, the value maps to `redirectTo`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    if (typeof params === 'string') {
      params = {redirectTo: params};
    }
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$templateRequest',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $templateRequest, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * The route change (and the `$location` change that triggered it) can be prevented
     * by calling `preventDefault` method of the event. See {@link ng.$rootScope.Scope#$on}
     * for more details about event object.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     *
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     */

    var forceReload = false,
        preparedRoute,
        preparedRouteIsUpdateOnly,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope and reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(function() {
              // Don't support cancellation of a reload for now...
              prepareRoute();
              commitRoute();
            });
          },

          /**
           * @ngdoc method
           * @name $route#updateParams
           *
           * @description
           * Causes `$route` service to update the current URL, replacing
           * current route parameters with those specified in `newParams`.
           * Provided property names that match the route's path segment
           * definitions will be interpolated into the location's path, while
           * remaining properties will be treated as query params.
           *
           * @param {!Object<string, string>} newParams mapping of URL parameter names to values
           */
          updateParams: function(newParams) {
            if (this.current && this.current.$$route) {
              newParams = angular.extend({}, this.current.params, newParams);
              $location.path(interpolate(this.current.$$route.originalPath, newParams));
              // interpolate modifies newParams, only query params are left
              $location.search(newParams);
            } else {
              throw $routeMinErr('norout', 'Tried updating route when with no current route');
            }
          }
        };

    $rootScope.$on('$locationChangeStart', prepareRoute);
    $rootScope.$on('$locationChangeSuccess', commitRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function prepareRoute($locationEvent) {
      var lastRoute = $route.current;

      preparedRoute = parseRoute();
      preparedRouteIsUpdateOnly = preparedRoute && lastRoute && preparedRoute.$$route === lastRoute.$$route
          && angular.equals(preparedRoute.pathParams, lastRoute.pathParams)
          && !preparedRoute.reloadOnSearch && !forceReload;

      if (!preparedRouteIsUpdateOnly && (lastRoute || preparedRoute)) {
        if ($rootScope.$broadcast('$routeChangeStart', preparedRoute, lastRoute).defaultPrevented) {
          if ($locationEvent) {
            $locationEvent.preventDefault();
          }
        }
      }
    }

    function commitRoute() {
      var lastRoute = $route.current;
      var nextRoute = preparedRoute;

      if (preparedRouteIsUpdateOnly) {
        lastRoute.params = nextRoute.params;
        angular.copy(lastRoute.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', lastRoute);
      } else if (nextRoute || lastRoute) {
        forceReload = false;
        $route.current = nextRoute;
        if (nextRoute) {
          if (nextRoute.redirectTo) {
            if (angular.isString(nextRoute.redirectTo)) {
              $location.path(interpolate(nextRoute.redirectTo, nextRoute.params)).search(nextRoute.params)
                       .replace();
            } else {
              $location.url(nextRoute.redirectTo(nextRoute.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(nextRoute).
          then(function() {
            if (nextRoute) {
              var locals = angular.extend({}, nextRoute.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value, null, null, key);
              });

              if (angular.isDefined(template = nextRoute.template)) {
                if (angular.isFunction(template)) {
                  template = template(nextRoute.params);
                }
              } else if (angular.isDefined(templateUrl = nextRoute.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(nextRoute.params);
                }
                templateUrl = $sce.getTrustedResourceUrl(templateUrl);
                if (angular.isDefined(templateUrl)) {
                  nextRoute.loadedTemplateUrl = templateUrl;
                  template = $templateRequest(templateUrl);
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          // after route change
          then(function(locals) {
            if (nextRoute == $route.current) {
              if (nextRoute) {
                nextRoute.locals = locals;
                angular.copy(nextRoute.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', nextRoute, lastRoute);
            }
          }, function(error) {
            if (nextRoute == $route.current) {
              $rootScope.$broadcast('$routeChangeError', nextRoute, lastRoute, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string || '').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory($route, $anchorScroll, $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousLeaveAnimation,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if (previousLeaveAnimation) {
            $animate.cancel(previousLeaveAnimation);
            previousLeaveAnimation = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if (currentElement) {
            previousLeaveAnimation = $animate.leave(currentElement);
            previousLeaveAnimation.then(function() {
              previousLeaveAnimation = null;
            });
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element).then(function onNgViewEnter() {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }

      link(scope);
    }
  };
}


})(window, window.angular);
// 'use strict';

angular.module('AngularFlask', ['angularFlaskServices', 'ngRoute'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
		$routeProvider
		// .when('/', {
		// 	templateUrl: 'static/partials/index.html',
		// 	controller: 'snip'
			
		// })
		.when('ap/part', {
			templateUrl: 'static/partials/part.html',
			//controller: 'snip'
		})
		// .when('/post', {
		// 	templateUrl: 'static/partials/post-list.html',
		// 	controller: PostListController
		// })
		// .when('/post/:postId', {
		// 	templateUrl: '/static/partials/post-detail.html',
		// 	controller: PostDetailController
		// })
		// /* Create a "/blog" route that takes the user to the same place as "/post" */
		// .when('/blog', {
		// 	templateUrl: 'static/partials/post-list.html',
		// 	controller: PostListController
		// })
		.otherwise({
			redirectTo: '/'
		})
		;

		//$locationProvider.html5Mode(true);
	}])
;
// 'use strict';

/* Controllers */
var app = angular.module('AngularFlask').controller('snip', ['$scope', '$http', function($scope, $http){
	$scope.adddd = "asdfasdfasdfasdf12345";
	$scope.note_list = ["asdf", "note", "title"];
	$scope.titles = null;
	$http.get('/notes').success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.titles = data;
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

  $scope.getNote = function(argument) {
  	alert(argument);  };
}]);

// function IndexController($scope) {
// 	$scope.list = ["asdf", "note", "title"];
// 	var s = this;
// 	s.asdf = "asdfasdf";
// }

// function AboutController($scope) {
	
// }

// function PostListController($scope, Post) {
// 	var postsQuery = Post.get({}, function(posts) {
// 		$scope.posts = posts.objects;
// 	});
// }

// function PostDetailController($scope, $routeParams, Post) {
// 	var postQuery = Post.get({ postId: $routeParams.postId }, function(post) {
// 		$scope.post = post;
// 	});
// }
// 'use strict';

/* Directives */

// 'use strict';

/* Filters */

angular.module('angularFlaskFilters', []).filter('uppercase', function() {
	return function(input) {
		return input.toUpperCase();
	}
});
// 'use strict';

angular.module('angularFlaskServices', ['ngResource'])
	.factory('Post', ["$resource", function($resource) {
		return $resource('/api/post/:postId', {}, {
			query: {
				method: 'GET',
				params: { postId: '' },
				isArray: true
			}
		});
	}])
;


/*
 AngularJS v1.3.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,d,B){'use strict';function D(f,q){q=q||{};d.forEach(q,function(d,h){delete q[h]});for(var h in f)!f.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(q[h]=f[h]);return q}var w=d.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var f=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(q,h){function t(d,g){this.template=d;this.defaults=s({},f.defaults,g);this.urlParams={}}function v(x,g,l,m){function c(b,k){var c={};k=s({},g,k);r(k,function(a,k){u(a)&&(a=a());var d;if(a&&a.charAt&&"@"==a.charAt(0)){d=b;var e=a.substr(1);if(null==e||""===e||"hasOwnProperty"===e||!C.test("."+e))throw w("badmember",e);for(var e=e.split("."),n=0,g=e.length;n<g&&d!==B;n++){var h=e[n];d=null!==d?d[h]:B}}else d=a;c[k]=d});return c}function F(b){return b.resource}function e(b){D(b||
{},this)}var G=new t(x,m);l=s({},f.defaults.actions,l);e.prototype.toJSON=function(){var b=s({},this);delete b.$promise;delete b.$resolved;return b};r(l,function(b,k){var g=/^(POST|PUT|PATCH)$/i.test(b.method);e[k]=function(a,y,m,x){var n={},f,l,z;switch(arguments.length){case 4:z=x,l=m;case 3:case 2:if(u(y)){if(u(a)){l=a;z=y;break}l=y;z=m}else{n=a;f=y;l=m;break}case 1:u(a)?l=a:g?f=a:n=a;break;case 0:break;default:throw w("badargs",arguments.length);}var t=this instanceof e,p=t?f:b.isArray?[]:new e(f),
A={},v=b.interceptor&&b.interceptor.response||F,C=b.interceptor&&b.interceptor.responseError||B;r(b,function(b,a){"params"!=a&&"isArray"!=a&&"interceptor"!=a&&(A[a]=H(b))});g&&(A.data=f);G.setUrlParams(A,s({},c(f,b.params||{}),n),b.url);n=q(A).then(function(a){var c=a.data,g=p.$promise;if(c){if(d.isArray(c)!==!!b.isArray)throw w("badcfg",k,b.isArray?"array":"object",d.isArray(c)?"array":"object");b.isArray?(p.length=0,r(c,function(a){"object"===typeof a?p.push(new e(a)):p.push(a)})):(D(c,p),p.$promise=
g)}p.$resolved=!0;a.resource=p;return a},function(a){p.$resolved=!0;(z||E)(a);return h.reject(a)});n=n.then(function(a){var b=v(a);(l||E)(b,a.headers);return b},C);return t?n:(p.$promise=n,p.$resolved=!1,p)};e.prototype["$"+k]=function(a,b,c){u(a)&&(c=b,b=a,a={});a=e[k].call(this,a,this,b,c);return a.$promise||a}});e.bind=function(b){return v(x,s({},g,b),l)};return e}var E=d.noop,r=d.forEach,s=d.extend,H=d.copy,u=d.isFunction;t.prototype={setUrlParams:function(f,g,l){var m=this,c=l||m.template,h,
e,q=m.urlParams={};r(c.split(/\W/),function(b){if("hasOwnProperty"===b)throw w("badname");!/^\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\]):"+b+"(\\W|$)")).test(c)&&(q[b]=!0)});c=c.replace(/\\:/g,":");g=g||{};r(m.urlParams,function(b,k){h=g.hasOwnProperty(k)?g[k]:m.defaults[k];d.isDefined(h)&&null!==h?(e=encodeURIComponent(h).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+
k+"(\\W|$)","g"),function(b,a){return e+a})):c=c.replace(new RegExp("(/?):"+k+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");f.url=c.replace(/\/\\\./,"/.");r(g,function(b,c){m.urlParams[c]||(f.params=f.params||{},f.params[c]=b)})}};return v}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map
