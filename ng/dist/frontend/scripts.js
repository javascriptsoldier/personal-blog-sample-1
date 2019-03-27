/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);
}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return this;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b];
},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return(!c||c.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb={},sb={},tb="*/".concat("*"),ub=d.createElement("a");ub.href=ib.href;function vb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:"GET",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+"").replace(lb,"").replace(qb,ib.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+"//"+ub.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,"$1_="+jb++):f+(kb.test(f)?"&":"?")+"_="+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tb+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\[\]$/,Cb=/\r?\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Fb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join("&").replace(Ab,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,"\r\n")}}):{name:b.name,value:c.replace(Cb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&"withCredentials"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ib.pop()||n.expando+"_"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),d.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});

;/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
;!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&u(i,n.prototype),i}).apply(null,arguments)}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var t="SweetAlert2:",f=function(e){return Array.prototype.slice.call(e)},R=function(e){console.warn("".concat(t," ").concat(e))},I=function(e){console.error("".concat(t," ").concat(e))},n=[],m=function(e){-1===n.indexOf(e)&&(n.push(e),R(e))},H=function(e){return"function"==typeof e?e():e},D=function(e){return e&&Promise.resolve(e)===e},e=Object.freeze({cancel:"cancel",backdrop:"overlay",close:"close",esc:"esc",timer:"timer"}),h=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},_=h(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","icon-text","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl"]),g=h(["success","warning","info","question","error"]),b={previousBodyPadding:null},v=function(e,t){return e.classList.contains(t)},N=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},y=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},z=function(e,t){y(e,t,!0)},W=function(e,t){y(e,t,!1)},U=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(v(e.childNodes[n],t))return e.childNodes[n]},K=function(e){e.style.opacity="",e.style.display=e.id===_.content?"block":"flex"},F=function(e){e.style.opacity="",e.style.display="none"},Z=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w=function(){return document.body.querySelector("."+_.container)},C=function(e){var t=w();return t?t.querySelector("."+e):null},k=function(){return C(_.popup)},x=function(){var e=k();return f(e.querySelectorAll("."+_.icon))},A=function(){return C(_.title)},B=function(){return C(_.content)},S=function(){return C(_.image)},P=function(){return C(_.progresssteps)},E=function(){return C(_["validation-message"])},L=function(){return C(_.confirm)},O=function(){return C(_.cancel)},Q=function(){return C(_.actions)},Y=function(){return C(_.footer)},$=function(){return C(_.close)},J=function(){var e=f(k().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),(t=parseInt(t.getAttribute("tabindex")))<e?1:e<t?-1:0}),t=f(k().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(e){return"-1"!==e.getAttribute("tabindex")});return function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t)).filter(function(e){return Z(e)})},T=function(){return!M()&&!document.body.classList.contains(_["no-backdrop"])},M=function(){return document.body.classList.contains(_["toast-shown"])},j=function(){return"undefined"==typeof window||"undefined"==typeof document},V='\n <div aria-labelledby="'.concat(_.title,'" aria-describedby="').concat(_.content,'" class="').concat(_.popup,'" tabindex="-1">\n   <div class="').concat(_.header,'">\n     <ul class="').concat(_.progresssteps,'"></ul>\n     <div class="').concat(_.icon," ").concat(g.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(_.icon," ").concat(g.question,'">\n       <span class="').concat(_["icon-text"],'">?</span>\n      </div>\n     <div class="').concat(_.icon," ").concat(g.warning,'">\n       <span class="').concat(_["icon-text"],'">!</span>\n      </div>\n     <div class="').concat(_.icon," ").concat(g.info,'">\n       <span class="').concat(_["icon-text"],'">i</span>\n      </div>\n     <div class="').concat(_.icon," ").concat(g.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(_.image,'" />\n     <h2 class="').concat(_.title,'" id="').concat(_.title,'"></h2>\n     <button type="button" class="').concat(_.close,'">×</button>\n   </div>\n   <div class="').concat(_.content,'">\n     <div id="').concat(_.content,'"></div>\n     <input class="').concat(_.input,'" />\n     <input type="file" class="').concat(_.file,'" />\n     <div class="').concat(_.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(_.select,'"></select>\n     <div class="').concat(_.radio,'"></div>\n     <label for="').concat(_.checkbox,'" class="').concat(_.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(_.label,'"></span>\n     </label>\n     <textarea class="').concat(_.textarea,'"></textarea>\n     <div class="').concat(_["validation-message"],'" id="').concat(_["validation-message"],'"></div>\n   </div>\n   <div class="').concat(_.actions,'">\n     <button type="button" class="').concat(_.confirm,'">OK</button>\n     <button type="button" class="').concat(_.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(_.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),X=function(e){var t=w();if(t&&(t.parentNode.removeChild(t),W([document.documentElement,document.body],[_["no-backdrop"],_["toast-shown"],_["has-column"]])),!j()){var n=document.createElement("div");n.className=_.container,n.innerHTML=V;var o="string"==typeof e.target?document.querySelector(e.target):e.target;o.appendChild(n);var i,r=k(),a=B(),s=U(a,_.input),c=U(a,_.file),u=a.querySelector(".".concat(_.range," input")),l=a.querySelector(".".concat(_.range," output")),d=U(a,_.select),p=a.querySelector(".".concat(_.checkbox," input")),f=U(a,_.textarea);r.setAttribute("role",e.toast?"alert":"dialog"),r.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||r.setAttribute("aria-modal","true"),"rtl"===window.getComputedStyle(o).direction&&z(w(),_.rtl);var m=function(e){De.isVisible()&&i!==e.target.value&&De.resetValidationMessage(),i=e.target.value};return s.oninput=m,c.onchange=m,d.onchange=m,p.onchange=m,f.oninput=m,u.oninput=function(e){m(e),l.value=u.value},u.onchange=function(e){m(e),u.nextSibling.value=u.value},r}I("SweetAlert2 requires document to initialize")},G=function(e,t){if(!e)return F(t);if(e instanceof HTMLElement)t.appendChild(e);else if("object"===q(e))if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0));else e&&(t.innerHTML=e);K(t)},ee=function(){if(j())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),te=function(e){var t=Q(),n=L(),o=O();if(e.showConfirmButton||e.showCancelButton?K(t):F(t),e.showCancelButton?o.style.display="inline-block":F(o),e.showConfirmButton?n.style.removeProperty("display"):F(n),n.innerHTML=e.confirmButtonText,o.innerHTML=e.cancelButtonText,n.setAttribute("aria-label",e.confirmButtonAriaLabel),o.setAttribute("aria-label",e.cancelButtonAriaLabel),n.className=_.confirm,z(n,e.confirmButtonClass),o.className=_.cancel,z(o,e.cancelButtonClass),e.buttonsStyling){z([n,o],_.styled),e.confirmButtonColor&&(n.style.backgroundColor=e.confirmButtonColor),e.cancelButtonColor&&(o.style.backgroundColor=e.cancelButtonColor);var i=window.getComputedStyle(n).getPropertyValue("background-color");n.style.borderLeftColor=i,n.style.borderRightColor=i}else W([n,o],_.styled),n.style.backgroundColor=n.style.borderLeftColor=n.style.borderRightColor="",o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor=""},ne=function(e){var t=B().querySelector("#"+_.content);e.html?G(e.html,t):e.text?(t.textContent=e.text,K(t)):F(t)},oe=function(e){for(var t=x(),n=0;n<t.length;n++)F(t[n]);if(e.type)if(-1!==Object.keys(g).indexOf(e.type)){var o=De.getPopup().querySelector(".".concat(_.icon,".").concat(g[e.type]));K(o),e.animation&&z(o,"swal2-animate-".concat(e.type,"-icon"))}else I('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))},ie=function(e){var t=S();e.imageUrl?(t.setAttribute("src",e.imageUrl),t.setAttribute("alt",e.imageAlt),K(t),e.imageWidth?t.setAttribute("width",e.imageWidth):t.removeAttribute("width"),e.imageHeight?t.setAttribute("height",e.imageHeight):t.removeAttribute("height"),t.className=_.image,e.imageClass&&z(t,e.imageClass)):F(t)},re=function(i){var r=P(),a=parseInt(null===i.currentProgressStep?De.getQueueStep():i.currentProgressStep,10);i.progressSteps&&i.progressSteps.length?(K(r),r.innerHTML="",a>=i.progressSteps.length&&R("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(e,t){var n=document.createElement("li");if(z(n,_.progresscircle),n.innerHTML=e,t===a&&z(n,_.activeprogressstep),r.appendChild(n),t!==i.progressSteps.length-1){var o=document.createElement("li");z(o,_.progressline),i.progressStepsDistance&&(o.style.width=i.progressStepsDistance),r.appendChild(o)}})):F(r)},ae=function(e){var t=A();e.titleText?t.innerText=e.titleText:e.title&&("string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),G(e.title,t))},se=function(){null===b.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(b.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=b.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px")},ce=function(){return!!window.MSInputMethodContext&&!!document.documentMode},ue=function(){var e=w(),t=k();e.style.removeProperty("align-items"),t.offsetTop<0&&(e.style.alignItems="flex-start")},le={},de=function(e,t){var n=w(),o=k();if(o){null!==e&&"function"==typeof e&&e(o),W(o,_.show),z(o,_.hide);var i=function(){M()?pe(t):(new Promise(function(e){var t=window.scrollX,n=window.scrollY;le.restoreFocusTimeout=setTimeout(function(){le.previousActiveElement&&le.previousActiveElement.focus?(le.previousActiveElement.focus(),le.previousActiveElement=null):document.body&&document.body.focus(),e()},100),void 0!==t&&void 0!==n&&window.scrollTo(t,n)}).then(function(){return pe(t)}),le.keydownTarget.removeEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!1),n.parentNode&&n.parentNode.removeChild(n),W([document.documentElement,document.body],[_.shown,_["height-auto"],_["no-backdrop"],_["toast-shown"],_["toast-column"]]),T()&&(null!==b.previousBodyPadding&&(document.body.style.paddingRight=b.previousBodyPadding,b.previousBodyPadding=null),function(){if(v(document.body,_.iosfix)){var e=parseInt(document.body.style.top,10);W(document.body,_.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}(),"undefined"!=typeof window&&ce()&&window.removeEventListener("resize",ue),f(document.body.children).forEach(function(e){e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))};ee&&!v(o,_.noanimation)?o.addEventListener(ee,function e(){o.removeEventListener(ee,e),v(o,_.hide)&&i()}):i()}},pe=function(e){null!==e&&"function"==typeof e&&setTimeout(function(){e()})};function fe(e){var t=function e(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];if(!(this instanceof e))return l(e,n);Object.getPrototypeOf(e).apply(this,n)};return t.prototype=r(Object.create(e.prototype),{constructor:t}),"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}var me={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",customContainerClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},he=["useRejections","expectRejections","extraParams"],ge=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],be=function(e){return me.hasOwnProperty(e)||"extraParams"===e},ve=function(e){return-1!==he.indexOf(e)},ye=function(e){for(var t in e)be(t)||R('Unknown parameter "'.concat(t,'"')),e.toast&&-1!==ge.indexOf(t)&&R('The parameter "'.concat(t,'" is incompatible with toasts')),ve(t)&&m('The parameter "'.concat(t,'" is deprecated and will be removed in the next major release.'))},we='"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',Ce={};var ke=[],xe=function(){var e=k();e||De(""),e=k();var t=Q(),n=L(),o=O();K(t),K(n),z([e,t],_.loading),n.disabled=!0,o.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Ae=Object.freeze({isValidParameter:be,isDeprecatedParameter:ve,argsToParams:function(n){var o={};switch(q(n[0])){case"object":r(o,n[0]);break;default:["title","html","type"].forEach(function(e,t){switch(q(n[t])){case"string":o[e]=n[t];break;case"undefined":break;default:I("Unexpected type of ".concat(e,'! Expected "string", got ').concat(q(n[t])))}})}return o},adaptInputValidator:function(n){return function(e,t){return n.call(this,e,t).then(function(){},function(e){return e})}},close:de,closePopup:de,closeModal:de,closeToast:de,isVisible:function(){return!!k()},clickConfirm:function(){return L().click()},clickCancel:function(){return O().click()},getContainer:w,getPopup:k,getTitle:A,getContent:B,getImage:S,getIcons:x,getCloseButton:$,getButtonsWrapper:function(){return m("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"),C(_.actions)},getActions:Q,getConfirmButton:L,getCancelButton:O,getFooter:Y,getFocusableElements:J,getValidationMessage:E,isLoading:function(){return k().hasAttribute("data-loading")},fire:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l(this,t)},mixin:function(n){return fe(function(e){function t(){return a(this,t),d(this,c(t).apply(this,arguments))}return s(t,e),i(t,[{key:"_main",value:function(e){return p(c(t.prototype),"_main",this).call(this,r({},n,e))}}]),t}(this))},queue:function(e){var r=this;ke=e;var a=function(){ke=[],document.body.removeAttribute("data-swal2-queue-step")},s=[];return new Promise(function(i){!function t(n,o){n<ke.length?(document.body.setAttribute("data-swal2-queue-step",n),r(ke[n]).then(function(e){void 0!==e.value?(s.push(e.value),t(n+1,o)):(a(),i({dismiss:e.dismiss}))})):(a(),i({value:s}))}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(e,t){return t&&t<ke.length?ke.splice(t,0,e):ke.push(e)},deleteQueueStep:function(e){void 0!==ke[e]&&ke.splice(e,1)},showLoading:xe,enableLoading:xe,getTimerLeft:function(){return le.timeout&&le.timeout.getTimerLeft()},stopTimer:function(){return le.timeout&&le.timeout.stop()},resumeTimer:function(){return le.timeout&&le.timeout.start()},toggleTimer:function(){var e=le.timeout;return e&&(e.running?e.stop():e.start())},increaseTimer:function(e){return le.timeout&&le.timeout.increase(e)},isTimerRunning:function(){return le.timeout&&le.timeout.isRunning()}}),Be="function"==typeof Symbol?Symbol:function(){var t=0;function e(e){return"__"+e+"_"+Math.floor(1e9*Math.random())+"_"+ ++t+"__"}return e.iterator=e("Symbol.iterator"),e}(),Se="function"==typeof WeakMap?WeakMap:function(n,o,t){function e(){o(this,n,{value:Be("WeakMap")})}return e.prototype={delete:function(e){delete e[this[n]]},get:function(e){return e[this[n]]},has:function(e){return t.call(e,this[n])},set:function(e,t){o(e,this[n],{configurable:!0,value:t})}},e}(Be("WeakMap"),Object.defineProperty,{}.hasOwnProperty),Pe={promise:new Se,innerParams:new Se,domCache:new Se};function Ee(){var e=Pe.innerParams.get(this),t=Pe.domCache.get(this);e.showConfirmButton||(F(t.confirmButton),e.showCancelButton||F(t.actions)),W([t.popup,t.actions],_.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1}function Le(e){var t=Pe.domCache.get(this);t.validationMessage.innerHTML=e;var n=window.getComputedStyle(t.popup);t.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),t.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),K(t.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",_["validation-message"]),N(o),z(o,_.inputerror))}function Oe(){var e=Pe.domCache.get(this);e.validationMessage&&F(e.validationMessage);var t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),W(t,_.inputerror))}var Te=function e(t,n){a(this,e);var o,i,r=n;this.running=!1,this.start=function(){return this.running||(this.running=!0,i=new Date,o=setTimeout(t,r)),r},this.stop=function(){return this.running&&(this.running=!1,clearTimeout(o),r-=new Date-i),r},this.increase=function(e){var t=this.running;return t&&this.stop(),r+=e,t&&this.start(),r},this.getTimerLeft=function(){return this.running&&(this.stop(),this.start()),r},this.isRunning=function(){return this.running},this.start()},Me={email:function(e,t){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid email address")},url:function(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid URL")}};var je=function(e){var t=w(),n=k();null!==e.onBeforeOpen&&"function"==typeof e.onBeforeOpen&&e.onBeforeOpen(n),e.animation?(z(n,_.show),z(t,_.fade),W(n,_.hide)):W(n,_.fade),K(n),t.style.overflowY="hidden",ee&&!v(n,_.noanimation)?n.addEventListener(ee,function e(){n.removeEventListener(ee,e),t.style.overflowY="auto"}):t.style.overflowY="auto",z([document.documentElement,document.body,t],_.shown),e.heightAuto&&e.backdrop&&!e.toast&&z([document.documentElement,document.body],_["height-auto"]),T()&&(se(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!v(document.body,_.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",z(document.body,_.iosfix)}}(),"undefined"!=typeof window&&ce()&&(ue(),window.addEventListener("resize",ue)),f(document.body.children).forEach(function(e){e===w()||function(e,t){if("function"==typeof e.contains)return e.contains(t)}(e,w())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}),setTimeout(function(){t.scrollTop=0})),M()||le.previousActiveElement||(le.previousActiveElement=document.activeElement),null!==e.onOpen&&"function"==typeof e.onOpen&&setTimeout(function(){e.onOpen(n)})};var Ve,qe=Object.freeze({hideLoading:Ee,disableLoading:Ee,getInput:function(e){var t=Pe.innerParams.get(this),n=Pe.domCache.get(this);if(!(e=e||t.input))return null;switch(e){case"select":case"textarea":case"file":return U(n.content,_[e]);case"checkbox":return n.popup.querySelector(".".concat(_.checkbox," input"));case"radio":return n.popup.querySelector(".".concat(_.radio," input:checked"))||n.popup.querySelector(".".concat(_.radio," input:first-child"));case"range":return n.popup.querySelector(".".concat(_.range," input"));default:return U(n.content,_.input)}},enableButtons:function(){var e=Pe.domCache.get(this);e.confirmButton.disabled=!1,e.cancelButton.disabled=!1},disableButtons:function(){var e=Pe.domCache.get(this);e.confirmButton.disabled=!0,e.cancelButton.disabled=!0},enableConfirmButton:function(){Pe.domCache.get(this).confirmButton.disabled=!1},disableConfirmButton:function(){Pe.domCache.get(this).confirmButton.disabled=!0},enableInput:function(){var e=this.getInput();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},disableInput:function(){var e=this.getInput();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},showValidationMessage:Le,resetValidationMessage:Oe,resetValidationError:function(){m("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead"),Oe.bind(this)()},showValidationError:function(e){m("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead"),Le.bind(this)(e)},getProgressSteps:function(){return Pe.innerParams.get(this).progressSteps},setProgressSteps:function(e){var t=r({},Pe.innerParams.get(this),{progressSteps:e});Pe.innerParams.set(this,t),re(t)},showProgressSteps:function(){var e=Pe.domCache.get(this);K(e.progressSteps)},hideProgressSteps:function(){var e=Pe.domCache.get(this);F(e.progressSteps)},_main:function(e){var T=this;ye(e);var M=r({},me,e);!function(t){var e;t.inputValidator||Object.keys(Me).forEach(function(e){t.input===e&&(t.inputValidator=t.expectRejections?Me[e]:De.adaptInputValidator(Me[e]))}),t.validationMessage&&("object"!==q(t.extraParams)&&(t.extraParams={}),t.extraParams.validationMessage=t.validationMessage),(!t.target||"string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(R('Target parameter is not valid, defaulting to "body"'),t.target="body"),"function"==typeof t.animation&&(t.animation=t.animation.call());var n=k(),o="string"==typeof t.target?document.querySelector(t.target):t.target;e=n&&o&&n.parentNode!==o.parentNode?X(t):n||X(t),t.width&&(e.style.width="number"==typeof t.width?t.width+"px":t.width),t.padding&&(e.style.padding="number"==typeof t.padding?t.padding+"px":t.padding),t.background&&(e.style.background=t.background);for(var i=window.getComputedStyle(e).getPropertyValue("background-color"),r=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),a=0;a<r.length;a++)r[a].style.backgroundColor=i;var s=w(),c=$(),u=Y();if(ae(t),ne(t),"string"==typeof t.backdrop?w().style.background=t.backdrop:t.backdrop||z([document.documentElement,document.body],_["no-backdrop"]),!t.backdrop&&t.allowOutsideClick&&R('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.position in _?z(s,_[t.position]):(R('The "position" parameter is not valid, defaulting to "center"'),z(s,_.center)),t.grow&&"string"==typeof t.grow){var l="grow-"+t.grow;l in _&&z(s,_[l])}t.showCloseButton?(c.setAttribute("aria-label",t.closeButtonAriaLabel),K(c)):F(c),e.className=_.popup,t.toast?(z([document.documentElement,document.body],_["toast-shown"]),z(e,_.toast)):z(e,_.modal),t.customClass&&z(e,t.customClass),t.customContainerClass&&z(s,t.customContainerClass),re(t),oe(t),ie(t),te(t),G(t.footer,u),!0===t.animation?W(e,_.noanimation):z(e,_.noanimation),t.showLoaderOnConfirm&&!t.preConfirm&&R("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")}(M),Object.freeze(M),Pe.innerParams.set(this,M),le.timeout&&(le.timeout.stop(),delete le.timeout),clearTimeout(le.restoreFocusTimeout);var j={popup:k(),container:w(),content:B(),actions:Q(),confirmButton:L(),cancelButton:O(),closeButton:$(),validationMessage:E(),progressSteps:P()};Pe.domCache.set(this,j);var V=this.constructor;return new Promise(function(t,n){var o=function(e){V.closePopup(M.onClose,M.onAfterClose),M.useRejections?t(e):t({value:e})},c=function(e){V.closePopup(M.onClose,M.onAfterClose),M.useRejections?n(e):t({dismiss:e})},u=function(e){V.closePopup(M.onClose,M.onAfterClose),n(e)};M.timer&&(le.timeout=new Te(function(){c("timer"),delete le.timeout},M.timer)),M.input&&setTimeout(function(){var e=T.getInput();e&&N(e)},0);for(var l=function(t){if(M.showLoaderOnConfirm&&V.showLoading(),M.preConfirm){T.resetValidationMessage();var e=Promise.resolve().then(function(){return M.preConfirm(t,M.extraParams)});M.expectRejections?e.then(function(e){return o(e||t)},function(e){T.hideLoading(),e&&T.showValidationMessage(e)}):e.then(function(e){Z(j.validationMessage)||!1===e?T.hideLoading():o(e||t)},function(e){return u(e)})}else o(t)},e=function(e){var t=e.target,n=j.confirmButton,o=j.cancelButton,i=n&&(n===t||n.contains(t)),r=o&&(o===t||o.contains(t));switch(e.type){case"click":if(i&&V.isVisible())if(T.disableButtons(),M.input){var a=function(){var e=T.getInput();if(!e)return null;switch(M.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return M.inputAutoTrim?e.value.trim():e.value}}();if(M.inputValidator){T.disableInput();var s=Promise.resolve().then(function(){return M.inputValidator(a,M.extraParams)});M.expectRejections?s.then(function(){T.enableButtons(),T.enableInput(),l(a)},function(e){T.enableButtons(),T.enableInput(),e&&T.showValidationMessage(e)}):s.then(function(e){T.enableButtons(),T.enableInput(),e?T.showValidationMessage(e):l(a)},function(e){return u(e)})}else T.getInput().checkValidity()?l(a):(T.enableButtons(),T.showValidationMessage(M.validationMessage))}else l(!0);else r&&V.isVisible()&&(T.disableButtons(),c(V.DismissReason.cancel))}},i=j.popup.querySelectorAll("button"),r=0;r<i.length;r++)i[r].onclick=e,i[r].onmouseover=e,i[r].onmouseout=e,i[r].onmousedown=e;if(j.closeButton.onclick=function(){c(V.DismissReason.close)},M.toast)j.popup.onclick=function(){M.showConfirmButton||M.showCancelButton||M.showCloseButton||M.input||c(V.DismissReason.close)};else{var a=!1;j.popup.onmousedown=function(){j.container.onmouseup=function(e){j.container.onmouseup=void 0,e.target===j.container&&(a=!0)}},j.container.onmousedown=function(){j.popup.onmouseup=function(e){j.popup.onmouseup=void 0,(e.target===j.popup||j.popup.contains(e.target))&&(a=!0)}},j.container.onclick=function(e){a?a=!1:e.target===j.container&&H(M.allowOutsideClick)&&c(V.DismissReason.backdrop)}}M.reverseButtons?j.confirmButton.parentNode.insertBefore(j.cancelButton,j.confirmButton):j.confirmButton.parentNode.insertBefore(j.confirmButton,j.cancelButton);var s=function(e,t){for(var n=J(M.focusCancel),o=0;o<n.length;o++)return(e+=t)===n.length?e=0:-1===e&&(e=n.length-1),n[e].focus();j.popup.focus()};le.keydownHandlerAdded&&(le.keydownTarget.removeEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!1),M.toast||(le.keydownHandler=function(e){return function(e,t){if(t.stopKeydownPropagation&&e.stopPropagation(),"Enter"!==e.key||e.isComposing)if("Tab"===e.key){for(var n=e.target,o=J(t.focusCancel),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}e.shiftKey?s(i,-1):s(i,1),e.stopPropagation(),e.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(e.key)?document.activeElement===j.confirmButton&&Z(j.cancelButton)?j.cancelButton.focus():document.activeElement===j.cancelButton&&Z(j.confirmButton)&&j.confirmButton.focus():"Escape"!==e.key&&"Esc"!==e.key||!0!==H(t.allowEscapeKey)||(e.preventDefault(),c(V.DismissReason.esc));else if(e.target&&T.getInput()&&e.target.outerHTML===T.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(t.input))return;V.clickConfirm(),e.preventDefault()}}(e,M)},le.keydownTarget=M.keydownListenerCapture?window:j.popup,le.keydownListenerCapture=M.keydownListenerCapture,le.keydownTarget.addEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!0),T.enableButtons(),T.hideLoading(),T.resetValidationMessage(),M.toast&&(M.input||M.footer||M.showCloseButton)?z(document.body,_["toast-column"]):W(document.body,_["toast-column"]);for(var d,p,f=["input","file","range","select","radio","checkbox","textarea"],m=function(e){e.placeholder&&!M.inputPlaceholder||(e.placeholder=M.inputPlaceholder)},h=0;h<f.length;h++){var g=_[f[h]],b=U(j.content,g);if(d=T.getInput(f[h])){for(var v in d.attributes)if(d.attributes.hasOwnProperty(v)){var y=d.attributes[v].name;"type"!==y&&"value"!==y&&d.removeAttribute(y)}for(var w in M.inputAttributes)"range"===f[h]&&"placeholder"===w||d.setAttribute(w,M.inputAttributes[w])}b.className=g,M.inputClass&&z(b,M.inputClass),F(b)}switch(M.input){case"text":case"email":case"password":case"number":case"tel":case"url":d=U(j.content,_.input),"string"==typeof M.inputValue||"number"==typeof M.inputValue?d.value=M.inputValue:D(M.inputValue)||R('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(q(M.inputValue),'"')),m(d),d.type=M.input,K(d);break;case"file":m(d=U(j.content,_.file)),d.type=M.input,K(d);break;case"range":var C=U(j.content,_.range),k=C.querySelector("input"),x=C.querySelector("output");k.value=M.inputValue,k.type=M.input,x.value=M.inputValue,K(C);break;case"select":var A=U(j.content,_.select);if(A.innerHTML="",M.inputPlaceholder){var B=document.createElement("option");B.innerHTML=M.inputPlaceholder,B.value="",B.disabled=!0,B.selected=!0,A.appendChild(B)}p=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("option");o.value=t,o.innerHTML=n,M.inputValue.toString()===t.toString()&&(o.selected=!0),A.appendChild(o)}),K(A),A.focus()};break;case"radio":var S=U(j.content,_.radio);S.innerHTML="",p=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=_.radio,o.value=t,M.inputValue.toString()===t.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=_.label,i.appendChild(o),i.appendChild(r),S.appendChild(i)}),K(S);var t=S.querySelectorAll("input");t.length&&t[0].focus()};break;case"checkbox":var P=U(j.content,_.checkbox),E=T.getInput("checkbox");E.type="checkbox",E.value=1,E.id=_.checkbox,E.checked=Boolean(M.inputValue),P.querySelector("span").innerHTML=M.inputPlaceholder,K(P);break;case"textarea":var L=U(j.content,_.textarea);L.value=M.inputValue,m(L),K(L);break;case null:break;default:I('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(M.input,'"'))}if("select"===M.input||"radio"===M.input){var O=function(e){return p((t=e,n=[],"undefined"!=typeof Map&&t instanceof Map?t.forEach(function(e,t){n.push([t,e])}):Object.keys(t).forEach(function(e){n.push([e,t[e]])}),n));var t,n};D(M.inputOptions)?(V.showLoading(),M.inputOptions.then(function(e){T.hideLoading(),O(e)})):"object"===q(M.inputOptions)?O(M.inputOptions):I("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(q(M.inputOptions)))}else-1!==["text","email","number","tel","textarea"].indexOf(M.input)&&D(M.inputValue)&&(V.showLoading(),F(d),M.inputValue.then(function(e){d.value="number"===M.input?parseFloat(e)||0:e+"",K(d),d.focus(),T.hideLoading()}).catch(function(e){I("Error in inputValue promise: "+e),d.value="",K(d),d.focus(),T.hideLoading()}));je(M),M.toast||(H(M.allowEnterKey)?M.focusCancel&&Z(j.cancelButton)?j.cancelButton.focus():M.focusConfirm&&Z(j.confirmButton)?j.confirmButton.focus():s(-1,1):document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()),j.container.scrollTop=0})}});function Re(){if("undefined"!=typeof window){"undefined"==typeof Promise&&I("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),Ve=this;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0}});var i=this._main(this.params);Pe.promise.set(this,i)}}Re.prototype.then=function(e,t){return Pe.promise.get(this).then(e,t)},Re.prototype.catch=function(e){return Pe.promise.get(this).catch(e)},Re.prototype.finally=function(e){return Pe.promise.get(this).finally(e)},r(Re.prototype,qe),r(Re,Ae),Object.keys(qe).forEach(function(t){Re[t]=function(){var e;if(Ve)return(e=Ve)[t].apply(e,arguments)}}),Re.DismissReason=e,Re.noop=function(){};var Ie,He,De=fe((Ie=Re,He=function(e){function t(){return a(this,t),d(this,c(t).apply(this,arguments))}return s(t,Ie),i(t,[{key:"_main",value:function(e){return p(c(t.prototype),"_main",this).call(this,r({},Ce,e))}}],[{key:"setDefaults",value:function(t){if(m(we),!t||"object"!==q(t))throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");ye(t),Object.keys(t).forEach(function(e){Ie.isValidParameter(e)&&(Ce[e]=t[e])})}},{key:"resetDefaults",value:function(){m(we),Ce={}}}]),t}(),"undefined"!=typeof window&&"object"===q(window._swalDefaults)&&He.setDefaults(window._swalDefaults),He));return De.default=De}),"undefined"!=typeof window&&window.Sweetalert2&&(window.Sweetalert2.version="7.33.1",window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
;/*!
 * Quill Editor v1.3.6
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Quill"] = factory();
	else
		root["Quill"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 109);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(17);
var format_1 = __webpack_require__(18);
var leaf_1 = __webpack_require__(19);
var scroll_1 = __webpack_require__(45);
var inline_1 = __webpack_require__(46);
var block_1 = __webpack_require__(47);
var embed_1 = __webpack_require__(48);
var text_1 = __webpack_require__(49);
var attributor_1 = __webpack_require__(12);
var class_1 = __webpack_require__(32);
var style_1 = __webpack_require__(33);
var store_1 = __webpack_require__(31);
var Registry = __webpack_require__(1);
var Parchment = {
    Scope: Registry.Scope,
    create: Registry.create,
    find: Registry.find,
    query: Registry.query,
    register: Registry.register,
    Container: container_1.default,
    Format: format_1.default,
    Leaf: leaf_1.default,
    Embed: embed_1.default,
    Scroll: scroll_1.default,
    Block: block_1.default,
    Inline: inline_1.default,
    Text: text_1.default,
    Attributor: {
        Attribute: attributor_1.default,
        Class: class_1.default,
        Style: style_1.default,
        Store: store_1.default,
    },
};
exports.default = Parchment;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ParchmentError = /** @class */ (function (_super) {
    __extends(ParchmentError, _super);
    function ParchmentError(message) {
        var _this = this;
        message = '[Parchment] ' + message;
        _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _this.constructor.name;
        return _this;
    }
    return ParchmentError;
}(Error));
exports.ParchmentError = ParchmentError;
var attributes = {};
var classes = {};
var tags = {};
var types = {};
exports.DATA_KEY = '__blot';
var Scope;
(function (Scope) {
    Scope[Scope["TYPE"] = 3] = "TYPE";
    Scope[Scope["LEVEL"] = 12] = "LEVEL";
    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
    Scope[Scope["BLOT"] = 14] = "BLOT";
    Scope[Scope["INLINE"] = 7] = "INLINE";
    Scope[Scope["BLOCK"] = 11] = "BLOCK";
    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
    Scope[Scope["ANY"] = 15] = "ANY";
})(Scope = exports.Scope || (exports.Scope = {}));
function create(input, value) {
    var match = query(input);
    if (match == null) {
        throw new ParchmentError("Unable to create " + input + " blot");
    }
    var BlotClass = match;
    var node = 
    // @ts-ignore
    input instanceof Node || input['nodeType'] === Node.TEXT_NODE ? input : BlotClass.create(value);
    return new BlotClass(node, value);
}
exports.create = create;
function find(node, bubble) {
    if (bubble === void 0) { bubble = false; }
    if (node == null)
        return null;
    // @ts-ignore
    if (node[exports.DATA_KEY] != null)
        return node[exports.DATA_KEY].blot;
    if (bubble)
        return find(node.parentNode, bubble);
    return null;
}
exports.find = find;
function query(query, scope) {
    if (scope === void 0) { scope = Scope.ANY; }
    var match;
    if (typeof query === 'string') {
        match = types[query] || attributes[query];
        // @ts-ignore
    }
    else if (query instanceof Text || query['nodeType'] === Node.TEXT_NODE) {
        match = types['text'];
    }
    else if (typeof query === 'number') {
        if (query & Scope.LEVEL & Scope.BLOCK) {
            match = types['block'];
        }
        else if (query & Scope.LEVEL & Scope.INLINE) {
            match = types['inline'];
        }
    }
    else if (query instanceof HTMLElement) {
        var names = (query.getAttribute('class') || '').split(/\s+/);
        for (var i in names) {
            match = classes[names[i]];
            if (match)
                break;
        }
        match = match || tags[query.tagName];
    }
    if (match == null)
        return null;
    // @ts-ignore
    if (scope & Scope.LEVEL & match.scope && scope & Scope.TYPE & match.scope)
        return match;
    return null;
}
exports.query = query;
function register() {
    var Definitions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Definitions[_i] = arguments[_i];
    }
    if (Definitions.length > 1) {
        return Definitions.map(function (d) {
            return register(d);
        });
    }
    var Definition = Definitions[0];
    if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
        throw new ParchmentError('Invalid definition');
    }
    else if (Definition.blotName === 'abstract') {
        throw new ParchmentError('Cannot register abstract class');
    }
    types[Definition.blotName || Definition.attrName] = Definition;
    if (typeof Definition.keyName === 'string') {
        attributes[Definition.keyName] = Definition;
    }
    else {
        if (Definition.className != null) {
            classes[Definition.className] = Definition;
        }
        if (Definition.tagName != null) {
            if (Array.isArray(Definition.tagName)) {
                Definition.tagName = Definition.tagName.map(function (tagName) {
                    return tagName.toUpperCase();
                });
            }
            else {
                Definition.tagName = Definition.tagName.toUpperCase();
            }
            var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
            tagNames.forEach(function (tag) {
                if (tags[tag] == null || Definition.className == null) {
                    tags[tag] = Definition;
                }
            });
        }
    }
    return Definition;
}
exports.register = register;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var diff = __webpack_require__(51);
var equal = __webpack_require__(11);
var extend = __webpack_require__(3);
var op = __webpack_require__(20);


var NULL_CHARACTER = String.fromCharCode(0);  // Placeholder char for embed in diff()


var Delta = function (ops) {
  // Assume we are given a well formed ops
  if (Array.isArray(ops)) {
    this.ops = ops;
  } else if (ops != null && Array.isArray(ops.ops)) {
    this.ops = ops.ops;
  } else {
    this.ops = [];
  }
};


Delta.prototype.insert = function (text, attributes) {
  var newOp = {};
  if (text.length === 0) return this;
  newOp.insert = text;
  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }
  return this.push(newOp);
};

Delta.prototype['delete'] = function (length) {
  if (length <= 0) return this;
  return this.push({ 'delete': length });
};

Delta.prototype.retain = function (length, attributes) {
  if (length <= 0) return this;
  var newOp = { retain: length };
  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }
  return this.push(newOp);
};

Delta.prototype.push = function (newOp) {
  var index = this.ops.length;
  var lastOp = this.ops[index - 1];
  newOp = extend(true, {}, newOp);
  if (typeof lastOp === 'object') {
    if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
      this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
      return this;
    }
    // Since it does not matter if we insert before or after deleting at the same index,
    // always prefer to insert first
    if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
      index -= 1;
      lastOp = this.ops[index - 1];
      if (typeof lastOp !== 'object') {
        this.ops.unshift(newOp);
        return this;
      }
    }
    if (equal(newOp.attributes, lastOp.attributes)) {
      if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
        this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
        return this;
      } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
        this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
        return this;
      }
    }
  }
  if (index === this.ops.length) {
    this.ops.push(newOp);
  } else {
    this.ops.splice(index, 0, newOp);
  }
  return this;
};

Delta.prototype.chop = function () {
  var lastOp = this.ops[this.ops.length - 1];
  if (lastOp && lastOp.retain && !lastOp.attributes) {
    this.ops.pop();
  }
  return this;
};

Delta.prototype.filter = function (predicate) {
  return this.ops.filter(predicate);
};

Delta.prototype.forEach = function (predicate) {
  this.ops.forEach(predicate);
};

Delta.prototype.map = function (predicate) {
  return this.ops.map(predicate);
};

Delta.prototype.partition = function (predicate) {
  var passed = [], failed = [];
  this.forEach(function(op) {
    var target = predicate(op) ? passed : failed;
    target.push(op);
  });
  return [passed, failed];
};

Delta.prototype.reduce = function (predicate, initial) {
  return this.ops.reduce(predicate, initial);
};

Delta.prototype.changeLength = function () {
  return this.reduce(function (length, elem) {
    if (elem.insert) {
      return length + op.length(elem);
    } else if (elem.delete) {
      return length - elem.delete;
    }
    return length;
  }, 0);
};

Delta.prototype.length = function () {
  return this.reduce(function (length, elem) {
    return length + op.length(elem);
  }, 0);
};

Delta.prototype.slice = function (start, end) {
  start = start || 0;
  if (typeof end !== 'number') end = Infinity;
  var ops = [];
  var iter = op.iterator(this.ops);
  var index = 0;
  while (index < end && iter.hasNext()) {
    var nextOp;
    if (index < start) {
      nextOp = iter.next(start - index);
    } else {
      nextOp = iter.next(end - index);
      ops.push(nextOp);
    }
    index += op.length(nextOp);
  }
  return new Delta(ops);
};


Delta.prototype.compose = function (other) {
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var delta = new Delta();
  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else if (thisIter.peekType() === 'delete') {
      delta.push(thisIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);
      if (typeof otherOp.retain === 'number') {
        var newOp = {};
        if (typeof thisOp.retain === 'number') {
          newOp.retain = length;
        } else {
          newOp.insert = thisOp.insert;
        }
        // Preserve null when composing with a retain, otherwise remove it for inserts
        var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
        if (attributes) newOp.attributes = attributes;
        delta.push(newOp);
      // Other op should be delete, we could be an insert or retain
      // Insert + delete cancels out
      } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
        delta.push(otherOp);
      }
    }
  }
  return delta.chop();
};

Delta.prototype.concat = function (other) {
  var delta = new Delta(this.ops.slice());
  if (other.ops.length > 0) {
    delta.push(other.ops[0]);
    delta.ops = delta.ops.concat(other.ops.slice(1));
  }
  return delta;
};

Delta.prototype.diff = function (other, index) {
  if (this.ops === other.ops) {
    return new Delta();
  }
  var strings = [this, other].map(function (delta) {
    return delta.map(function (op) {
      if (op.insert != null) {
        return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
      }
      var prep = (delta === other) ? 'on' : 'with';
      throw new Error('diff() called ' + prep + ' non-document');
    }).join('');
  });
  var delta = new Delta();
  var diffResult = diff(strings[0], strings[1], index);
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  diffResult.forEach(function (component) {
    var length = component[1].length;
    while (length > 0) {
      var opLength = 0;
      switch (component[0]) {
        case diff.INSERT:
          opLength = Math.min(otherIter.peekLength(), length);
          delta.push(otherIter.next(opLength));
          break;
        case diff.DELETE:
          opLength = Math.min(length, thisIter.peekLength());
          thisIter.next(opLength);
          delta['delete'](opLength);
          break;
        case diff.EQUAL:
          opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
          var thisOp = thisIter.next(opLength);
          var otherOp = otherIter.next(opLength);
          if (equal(thisOp.insert, otherOp.insert)) {
            delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
          } else {
            delta.push(otherOp)['delete'](opLength);
          }
          break;
      }
      length -= opLength;
    }
  });
  return delta.chop();
};

Delta.prototype.eachLine = function (predicate, newline) {
  newline = newline || '\n';
  var iter = op.iterator(this.ops);
  var line = new Delta();
  var i = 0;
  while (iter.hasNext()) {
    if (iter.peekType() !== 'insert') return;
    var thisOp = iter.peek();
    var start = op.length(thisOp) - iter.peekLength();
    var index = typeof thisOp.insert === 'string' ?
      thisOp.insert.indexOf(newline, start) - start : -1;
    if (index < 0) {
      line.push(iter.next());
    } else if (index > 0) {
      line.push(iter.next(index));
    } else {
      if (predicate(line, iter.next(1).attributes || {}, i) === false) {
        return;
      }
      i += 1;
      line = new Delta();
    }
  }
  if (line.length() > 0) {
    predicate(line, {}, i);
  }
};

Delta.prototype.transform = function (other, priority) {
  priority = !!priority;
  if (typeof other === 'number') {
    return this.transformPosition(other, priority);
  }
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var delta = new Delta();
  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
      delta.retain(op.length(thisIter.next()));
    } else if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);
      if (thisOp['delete']) {
        // Our delete either makes their delete redundant or removes their retain
        continue;
      } else if (otherOp['delete']) {
        delta.push(otherOp);
      } else {
        // We retain either their retain or insert
        delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
      }
    }
  }
  return delta.chop();
};

Delta.prototype.transformPosition = function (index, priority) {
  priority = !!priority;
  var thisIter = op.iterator(this.ops);
  var offset = 0;
  while (thisIter.hasNext() && offset <= index) {
    var length = thisIter.peekLength();
    var nextType = thisIter.peekType();
    thisIter.next();
    if (nextType === 'delete') {
      index -= Math.min(length, index - offset);
      continue;
    } else if (nextType === 'insert' && (offset < index || !priority)) {
      index += length;
    }
    offset += length;
  }
  return index;
};


module.exports = Delta;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NEWLINE_LENGTH = 1;

var BlockEmbed = function (_Parchment$Embed) {
  _inherits(BlockEmbed, _Parchment$Embed);

  function BlockEmbed() {
    _classCallCheck(this, BlockEmbed);

    return _possibleConstructorReturn(this, (BlockEmbed.__proto__ || Object.getPrototypeOf(BlockEmbed)).apply(this, arguments));
  }

  _createClass(BlockEmbed, [{
    key: 'attach',
    value: function attach() {
      _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'attach', this).call(this);
      this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
    }
  }, {
    key: 'delta',
    value: function delta() {
      return new _quillDelta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);
      if (attribute != null) {
        this.attributes.attribute(attribute, value);
      }
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      this.format(name, value);
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (typeof value === 'string' && value.endsWith('\n')) {
        var block = _parchment2.default.create(Block.blotName);
        this.parent.insertBefore(block, index === 0 ? this : this.next);
        block.insertAt(0, value.slice(0, -1));
      } else {
        _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'insertAt', this).call(this, index, value, def);
      }
    }
  }]);

  return BlockEmbed;
}(_parchment2.default.Embed);

BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
// It is important for cursor behavior BlockEmbeds use tags that are block level elements


var Block = function (_Parchment$Block) {
  _inherits(Block, _Parchment$Block);

  function Block(domNode) {
    _classCallCheck(this, Block);

    var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, domNode));

    _this2.cache = {};
    return _this2;
  }

  _createClass(Block, [{
    key: 'delta',
    value: function delta() {
      if (this.cache.delta == null) {
        this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
          if (leaf.length() === 0) {
            return delta;
          } else {
            return delta.insert(leaf.value(), bubbleFormats(leaf));
          }
        }, new _quillDelta2.default()).insert('\n', bubbleFormats(this));
      }
      return this.cache.delta;
    }
  }, {
    key: 'deleteAt',
    value: function deleteAt(index, length) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'deleteAt', this).call(this, index, length);
      this.cache = {};
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (length <= 0) return;
      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
        if (index + length === this.length()) {
          this.format(name, value);
        }
      } else {
        _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
      }
      this.cache = {};
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null) return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
      if (value.length === 0) return;
      var lines = value.split('\n');
      var text = lines.shift();
      if (text.length > 0) {
        if (index < this.length() - 1 || this.children.tail == null) {
          _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, Math.min(index, this.length() - 1), text);
        } else {
          this.children.tail.insertAt(this.children.tail.length(), text);
        }
        this.cache = {};
      }
      var block = this;
      lines.reduce(function (index, line) {
        block = block.split(index, true);
        block.insertAt(0, line);
        return line.length;
      }, index + text.length);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      var head = this.children.head;
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);
      if (head instanceof _break2.default) {
        head.remove();
      }
      this.cache = {};
    }
  }, {
    key: 'length',
    value: function length() {
      if (this.cache.length == null) {
        this.cache.length = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
      }
      return this.cache.length;
    }
  }, {
    key: 'moveChildren',
    value: function moveChildren(target, ref) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'moveChildren', this).call(this, target, ref);
      this.cache = {};
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'optimize', this).call(this, context);
      this.cache = {};
    }
  }, {
    key: 'path',
    value: function path(index) {
      return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'removeChild', this).call(this, child);
      this.cache = {};
    }
  }, {
    key: 'split',
    value: function split(index) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
        var clone = this.clone();
        if (index === 0) {
          this.parent.insertBefore(clone, this);
          return this;
        } else {
          this.parent.insertBefore(clone, this.next);
          return clone;
        }
      } else {
        var next = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);
        this.cache = {};
        return next;
      }
    }
  }]);

  return Block;
}(_parchment2.default.Block);

Block.blotName = 'block';
Block.tagName = 'P';
Block.defaultChild = 'break';
Block.allowedChildren = [_inline2.default, _parchment2.default.Embed, _text2.default];

function bubbleFormats(blot) {
  var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (blot == null) return formats;
  if (typeof blot.formats === 'function') {
    formats = (0, _extend2.default)(formats, blot.formats());
  }
  if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
    return formats;
  }
  return bubbleFormats(blot.parent, formats);
}

exports.bubbleFormats = bubbleFormats;
exports.BlockEmbed = BlockEmbed;
exports.default = Block;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.overload = exports.expandConfig = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(50);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _editor = __webpack_require__(14);

var _editor2 = _interopRequireDefault(_editor);

var _emitter3 = __webpack_require__(8);

var _emitter4 = _interopRequireDefault(_emitter3);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _selection = __webpack_require__(15);

var _selection2 = _interopRequireDefault(_selection);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _theme = __webpack_require__(34);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _logger2.default)('quill');

var Quill = function () {
  _createClass(Quill, null, [{
    key: 'debug',
    value: function debug(limit) {
      if (limit === true) {
        limit = 'log';
      }
      _logger2.default.level(limit);
    }
  }, {
    key: 'find',
    value: function find(node) {
      return node.__quill || _parchment2.default.find(node);
    }
  }, {
    key: 'import',
    value: function _import(name) {
      if (this.imports[name] == null) {
        debug.error('Cannot import ' + name + '. Are you sure it was registered?');
      }
      return this.imports[name];
    }
  }, {
    key: 'register',
    value: function register(path, target) {
      var _this = this;

      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (typeof path !== 'string') {
        var name = path.attrName || path.blotName;
        if (typeof name === 'string') {
          // register(Blot | Attributor, overwrite)
          this.register('formats/' + name, path, target);
        } else {
          Object.keys(path).forEach(function (key) {
            _this.register(key, path[key], target);
          });
        }
      } else {
        if (this.imports[path] != null && !overwrite) {
          debug.warn('Overwriting ' + path + ' with', target);
        }
        this.imports[path] = target;
        if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
          _parchment2.default.register(target);
        } else if (path.startsWith('modules') && typeof target.register === 'function') {
          target.register();
        }
      }
    }
  }]);

  function Quill(container) {
    var _this2 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Quill);

    this.options = expandConfig(container, options);
    this.container = this.options.container;
    if (this.container == null) {
      return debug.error('Invalid Quill container', container);
    }
    if (this.options.debug) {
      Quill.debug(this.options.debug);
    }
    var html = this.container.innerHTML.trim();
    this.container.classList.add('ql-container');
    this.container.innerHTML = '';
    this.container.__quill = this;
    this.root = this.addContainer('ql-editor');
    this.root.classList.add('ql-blank');
    this.root.setAttribute('data-gramm', false);
    this.scrollingContainer = this.options.scrollingContainer || this.root;
    this.emitter = new _emitter4.default();
    this.scroll = _parchment2.default.create(this.root, {
      emitter: this.emitter,
      whitelist: this.options.formats
    });
    this.editor = new _editor2.default(this.scroll);
    this.selection = new _selection2.default(this.scroll, this.emitter);
    this.theme = new this.options.theme(this, this.options);
    this.keyboard = this.theme.addModule('keyboard');
    this.clipboard = this.theme.addModule('clipboard');
    this.history = this.theme.addModule('history');
    this.theme.init();
    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type) {
      if (type === _emitter4.default.events.TEXT_CHANGE) {
        _this2.root.classList.toggle('ql-blank', _this2.editor.isBlank());
      }
    });
    this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, function (source, mutations) {
      var range = _this2.selection.lastRange;
      var index = range && range.length === 0 ? range.index : undefined;
      modify.call(_this2, function () {
        return _this2.editor.update(null, mutations, index);
      }, source);
    });
    var contents = this.clipboard.convert('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
    this.setContents(contents);
    this.history.clear();
    if (this.options.placeholder) {
      this.root.setAttribute('data-placeholder', this.options.placeholder);
    }
    if (this.options.readOnly) {
      this.disable();
    }
  }

  _createClass(Quill, [{
    key: 'addContainer',
    value: function addContainer(container) {
      var refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (typeof container === 'string') {
        var className = container;
        container = document.createElement('div');
        container.classList.add(className);
      }
      this.container.insertBefore(container, refNode);
      return container;
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.selection.setRange(null);
    }
  }, {
    key: 'deleteText',
    value: function deleteText(index, length, source) {
      var _this3 = this;

      var _overload = overload(index, length, source);

      var _overload2 = _slicedToArray(_overload, 4);

      index = _overload2[0];
      length = _overload2[1];
      source = _overload2[3];

      return modify.call(this, function () {
        return _this3.editor.deleteText(index, length);
      }, source, index, -1 * length);
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.enable(false);
    }
  }, {
    key: 'enable',
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.scroll.enable(enabled);
      this.container.classList.toggle('ql-disabled', !enabled);
    }
  }, {
    key: 'focus',
    value: function focus() {
      var scrollTop = this.scrollingContainer.scrollTop;
      this.selection.focus();
      this.scrollingContainer.scrollTop = scrollTop;
      this.scrollIntoView();
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      var _this4 = this;

      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        var range = _this4.getSelection(true);
        var change = new _quillDelta2.default();
        if (range == null) {
          return change;
        } else if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
          change = _this4.editor.formatLine(range.index, range.length, _defineProperty({}, name, value));
        } else if (range.length === 0) {
          _this4.selection.format(name, value);
          return change;
        } else {
          change = _this4.editor.formatText(range.index, range.length, _defineProperty({}, name, value));
        }
        _this4.setSelection(range, _emitter4.default.sources.SILENT);
        return change;
      }, source);
    }
  }, {
    key: 'formatLine',
    value: function formatLine(index, length, name, value, source) {
      var _this5 = this;

      var formats = void 0;

      var _overload3 = overload(index, length, name, value, source);

      var _overload4 = _slicedToArray(_overload3, 4);

      index = _overload4[0];
      length = _overload4[1];
      formats = _overload4[2];
      source = _overload4[3];

      return modify.call(this, function () {
        return _this5.editor.formatLine(index, length, formats);
      }, source, index, 0);
    }
  }, {
    key: 'formatText',
    value: function formatText(index, length, name, value, source) {
      var _this6 = this;

      var formats = void 0;

      var _overload5 = overload(index, length, name, value, source);

      var _overload6 = _slicedToArray(_overload5, 4);

      index = _overload6[0];
      length = _overload6[1];
      formats = _overload6[2];
      source = _overload6[3];

      return modify.call(this, function () {
        return _this6.editor.formatText(index, length, formats);
      }, source, index, 0);
    }
  }, {
    key: 'getBounds',
    value: function getBounds(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var bounds = void 0;
      if (typeof index === 'number') {
        bounds = this.selection.getBounds(index, length);
      } else {
        bounds = this.selection.getBounds(index.index, index.length);
      }
      var containerBounds = this.container.getBoundingClientRect();
      return {
        bottom: bounds.bottom - containerBounds.top,
        height: bounds.height,
        left: bounds.left - containerBounds.left,
        right: bounds.right - containerBounds.left,
        top: bounds.top - containerBounds.top,
        width: bounds.width
      };
    }
  }, {
    key: 'getContents',
    value: function getContents() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

      var _overload7 = overload(index, length);

      var _overload8 = _slicedToArray(_overload7, 2);

      index = _overload8[0];
      length = _overload8[1];

      return this.editor.getContents(index, length);
    }
  }, {
    key: 'getFormat',
    value: function getFormat() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection(true);
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (typeof index === 'number') {
        return this.editor.getFormat(index, length);
      } else {
        return this.editor.getFormat(index.index, index.length);
      }
    }
  }, {
    key: 'getIndex',
    value: function getIndex(blot) {
      return blot.offset(this.scroll);
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.scroll.length();
    }
  }, {
    key: 'getLeaf',
    value: function getLeaf(index) {
      return this.scroll.leaf(index);
    }
  }, {
    key: 'getLine',
    value: function getLine(index) {
      return this.scroll.line(index);
    }
  }, {
    key: 'getLines',
    value: function getLines() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      if (typeof index !== 'number') {
        return this.scroll.lines(index.index, index.length);
      } else {
        return this.scroll.lines(index, length);
      }
    }
  }, {
    key: 'getModule',
    value: function getModule(name) {
      return this.theme.modules[name];
    }
  }, {
    key: 'getSelection',
    value: function getSelection() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (focus) this.focus();
      this.update(); // Make sure we access getRange with editor in consistent state
      return this.selection.getRange()[0];
    }
  }, {
    key: 'getText',
    value: function getText() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

      var _overload9 = overload(index, length);

      var _overload10 = _slicedToArray(_overload9, 2);

      index = _overload10[0];
      length = _overload10[1];

      return this.editor.getText(index, length);
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      return this.selection.hasFocus();
    }
  }, {
    key: 'insertEmbed',
    value: function insertEmbed(index, embed, value) {
      var _this7 = this;

      var source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;

      return modify.call(this, function () {
        return _this7.editor.insertEmbed(index, embed, value);
      }, source, index);
    }
  }, {
    key: 'insertText',
    value: function insertText(index, text, name, value, source) {
      var _this8 = this;

      var formats = void 0;

      var _overload11 = overload(index, 0, name, value, source);

      var _overload12 = _slicedToArray(_overload11, 4);

      index = _overload12[0];
      formats = _overload12[2];
      source = _overload12[3];

      return modify.call(this, function () {
        return _this8.editor.insertText(index, text, formats);
      }, source, index, text.length);
    }
  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      return !this.container.classList.contains('ql-disabled');
    }
  }, {
    key: 'off',
    value: function off() {
      return this.emitter.off.apply(this.emitter, arguments);
    }
  }, {
    key: 'on',
    value: function on() {
      return this.emitter.on.apply(this.emitter, arguments);
    }
  }, {
    key: 'once',
    value: function once() {
      return this.emitter.once.apply(this.emitter, arguments);
    }
  }, {
    key: 'pasteHTML',
    value: function pasteHTML(index, html, source) {
      this.clipboard.dangerouslyPasteHTML(index, html, source);
    }
  }, {
    key: 'removeFormat',
    value: function removeFormat(index, length, source) {
      var _this9 = this;

      var _overload13 = overload(index, length, source);

      var _overload14 = _slicedToArray(_overload13, 4);

      index = _overload14[0];
      length = _overload14[1];
      source = _overload14[3];

      return modify.call(this, function () {
        return _this9.editor.removeFormat(index, length);
      }, source, index);
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView() {
      this.selection.scrollIntoView(this.scrollingContainer);
    }
  }, {
    key: 'setContents',
    value: function setContents(delta) {
      var _this10 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        delta = new _quillDelta2.default(delta);
        var length = _this10.getLength();
        var deleted = _this10.editor.deleteText(0, length);
        var applied = _this10.editor.applyDelta(delta);
        var lastOp = applied.ops[applied.ops.length - 1];
        if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\n') {
          _this10.editor.deleteText(_this10.getLength() - 1, 1);
          applied.delete(1);
        }
        var ret = deleted.compose(applied);
        return ret;
      }, source);
    }
  }, {
    key: 'setSelection',
    value: function setSelection(index, length, source) {
      if (index == null) {
        this.selection.setRange(null, length || Quill.sources.API);
      } else {
        var _overload15 = overload(index, length, source);

        var _overload16 = _slicedToArray(_overload15, 4);

        index = _overload16[0];
        length = _overload16[1];
        source = _overload16[3];

        this.selection.setRange(new _selection.Range(index, length), source);
        if (source !== _emitter4.default.sources.SILENT) {
          this.selection.scrollIntoView(this.scrollingContainer);
        }
      }
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      var delta = new _quillDelta2.default().insert(text);
      return this.setContents(delta, source);
    }
  }, {
    key: 'update',
    value: function update() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

      var change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
      this.selection.update(source);
      return change;
    }
  }, {
    key: 'updateContents',
    value: function updateContents(delta) {
      var _this11 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        delta = new _quillDelta2.default(delta);
        return _this11.editor.applyDelta(delta, source);
      }, source, true);
    }
  }]);

  return Quill;
}();

Quill.DEFAULTS = {
  bounds: null,
  formats: null,
  modules: {},
  placeholder: '',
  readOnly: false,
  scrollingContainer: null,
  strict: true,
  theme: 'default'
};
Quill.events = _emitter4.default.events;
Quill.sources = _emitter4.default.sources;
// eslint-disable-next-line no-undef
Quill.version =  false ? 'dev' : "1.3.6";

Quill.imports = {
  'delta': _quillDelta2.default,
  'parchment': _parchment2.default,
  'core/module': _module2.default,
  'core/theme': _theme2.default
};

function expandConfig(container, userConfig) {
  userConfig = (0, _extend2.default)(true, {
    container: container,
    modules: {
      clipboard: true,
      keyboard: true,
      history: true
    }
  }, userConfig);
  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
    userConfig.theme = _theme2.default;
  } else {
    userConfig.theme = Quill.import('themes/' + userConfig.theme);
    if (userConfig.theme == null) {
      throw new Error('Invalid theme ' + userConfig.theme + '. Did you register it?');
    }
  }
  var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
  [themeConfig, userConfig].forEach(function (config) {
    config.modules = config.modules || {};
    Object.keys(config.modules).forEach(function (module) {
      if (config.modules[module] === true) {
        config.modules[module] = {};
      }
    });
  });
  var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
  var moduleConfig = moduleNames.reduce(function (config, name) {
    var moduleClass = Quill.import('modules/' + name);
    if (moduleClass == null) {
      debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
    } else {
      config[name] = moduleClass.DEFAULTS || {};
    }
    return config;
  }, {});
  // Special case toolbar shorthand
  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
    userConfig.modules.toolbar = {
      container: userConfig.modules.toolbar
    };
  }
  userConfig = (0, _extend2.default)(true, {}, Quill.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);
  ['bounds', 'container', 'scrollingContainer'].forEach(function (key) {
    if (typeof userConfig[key] === 'string') {
      userConfig[key] = document.querySelector(userConfig[key]);
    }
  });
  userConfig.modules = Object.keys(userConfig.modules).reduce(function (config, name) {
    if (userConfig.modules[name]) {
      config[name] = userConfig.modules[name];
    }
    return config;
  }, {});
  return userConfig;
}

// Handle selection preservation and TEXT_CHANGE emission
// common to modification APIs
function modify(modifier, source, index, shift) {
  if (this.options.strict && !this.isEnabled() && source === _emitter4.default.sources.USER) {
    return new _quillDelta2.default();
  }
  var range = index == null ? null : this.getSelection();
  var oldDelta = this.editor.delta;
  var change = modifier();
  if (range != null) {
    if (index === true) index = range.index;
    if (shift == null) {
      range = shiftRange(range, change, source);
    } else if (shift !== 0) {
      range = shiftRange(range, index, shift, source);
    }
    this.setSelection(range, _emitter4.default.sources.SILENT);
  }
  if (change.length() > 0) {
    var _emitter;

    var args = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source];
    (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
    if (source !== _emitter4.default.sources.SILENT) {
      var _emitter2;

      (_emitter2 = this.emitter).emit.apply(_emitter2, args);
    }
  }
  return change;
}

function overload(index, length, name, value, source) {
  var formats = {};
  if (typeof index.index === 'number' && typeof index.length === 'number') {
    // Allow for throwaway end (used by insertText/insertEmbed)
    if (typeof length !== 'number') {
      source = value, value = name, name = length, length = index.length, index = index.index;
    } else {
      length = index.length, index = index.index;
    }
  } else if (typeof length !== 'number') {
    source = value, value = name, name = length, length = 0;
  }
  // Handle format being object, two format name/value strings or excluded
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    formats = name;
    source = value;
  } else if (typeof name === 'string') {
    if (value != null) {
      formats[name] = value;
    } else {
      source = name;
    }
  }
  // Handle optional source
  source = source || _emitter4.default.sources.API;
  return [index, length, formats, source];
}

function shiftRange(range, index, length, source) {
  if (range == null) return null;
  var start = void 0,
      end = void 0;
  if (index instanceof _quillDelta2.default) {
    var _map = [range.index, range.index + range.length].map(function (pos) {
      return index.transformPosition(pos, source !== _emitter4.default.sources.USER);
    });

    var _map2 = _slicedToArray(_map, 2);

    start = _map2[0];
    end = _map2[1];
  } else {
    var _map3 = [range.index, range.index + range.length].map(function (pos) {
      if (pos < index || pos === index && source === _emitter4.default.sources.USER) return pos;
      if (length >= 0) {
        return pos + length;
      } else {
        return Math.max(index, pos + length);
      }
    });

    var _map4 = _slicedToArray(_map3, 2);

    start = _map4[0];
    end = _map4[1];
  }
  return new _selection.Range(start, end - start);
}

exports.expandConfig = expandConfig;
exports.overload = overload;
exports.default = Quill;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = function (_Parchment$Inline) {
  _inherits(Inline, _Parchment$Inline);

  function Inline() {
    _classCallCheck(this, Inline);

    return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
  }

  _createClass(Inline, [{
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
        var blot = this.isolate(index, length);
        if (value) {
          blot.wrap(name, value);
        }
      } else {
        _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'optimize', this).call(this, context);
      if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
        var parent = this.parent.isolate(this.offset(), this.length());
        this.moveChildren(parent);
        parent.wrap(this);
      }
    }
  }], [{
    key: 'compare',
    value: function compare(self, other) {
      var selfIndex = Inline.order.indexOf(self);
      var otherIndex = Inline.order.indexOf(other);
      if (selfIndex >= 0 || otherIndex >= 0) {
        return selfIndex - otherIndex;
      } else if (self === other) {
        return 0;
      } else if (self < other) {
        return -1;
      } else {
        return 1;
      }
    }
  }]);

  return Inline;
}(_parchment2.default.Inline);

Inline.allowedChildren = [Inline, _parchment2.default.Embed, _text2.default];
// Lower index means deeper in the DOM tree, since not found (-1) is for embeds
Inline.order = ['cursor', 'inline', // Must be lower
'underline', 'strike', 'italic', 'bold', 'script', 'link', 'code' // Must be higher
];

exports.default = Inline;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextBlot = function (_Parchment$Text) {
  _inherits(TextBlot, _Parchment$Text);

  function TextBlot() {
    _classCallCheck(this, TextBlot);

    return _possibleConstructorReturn(this, (TextBlot.__proto__ || Object.getPrototypeOf(TextBlot)).apply(this, arguments));
  }

  return TextBlot;
}(_parchment2.default.Text);

exports.default = TextBlot;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _eventemitter = __webpack_require__(54);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:events');

var EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];

EVENTS.forEach(function (eventName) {
  document.addEventListener(eventName, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    [].slice.call(document.querySelectorAll('.ql-container')).forEach(function (node) {
      // TODO use WeakMap
      if (node.__quill && node.__quill.emitter) {
        var _node$__quill$emitter;

        (_node$__quill$emitter = node.__quill.emitter).handleDOM.apply(_node$__quill$emitter, args);
      }
    });
  });
});

var Emitter = function (_EventEmitter) {
  _inherits(Emitter, _EventEmitter);

  function Emitter() {
    _classCallCheck(this, Emitter);

    var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

    _this.listeners = {};
    _this.on('error', debug.error);
    return _this;
  }

  _createClass(Emitter, [{
    key: 'emit',
    value: function emit() {
      debug.log.apply(debug, arguments);
      _get(Emitter.prototype.__proto__ || Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
    }
  }, {
    key: 'handleDOM',
    value: function handleDOM(event) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (this.listeners[event.type] || []).forEach(function (_ref) {
        var node = _ref.node,
            handler = _ref.handler;

        if (event.target === node || node.contains(event.target)) {
          handler.apply(undefined, [event].concat(args));
        }
      });
    }
  }, {
    key: 'listenDOM',
    value: function listenDOM(eventName, node, handler) {
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = [];
      }
      this.listeners[eventName].push({ node: node, handler: handler });
    }
  }]);

  return Emitter;
}(_eventemitter2.default);

Emitter.events = {
  EDITOR_CHANGE: 'editor-change',
  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
  SCROLL_OPTIMIZE: 'scroll-optimize',
  SCROLL_UPDATE: 'scroll-update',
  SELECTION_CHANGE: 'selection-change',
  TEXT_CHANGE: 'text-change'
};
Emitter.sources = {
  API: 'api',
  SILENT: 'silent',
  USER: 'user'
};

exports.default = Emitter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function Module(quill) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Module);

  this.quill = quill;
  this.options = options;
};

Module.DEFAULTS = {};

exports.default = Module;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var levels = ['error', 'warn', 'log', 'info'];
var level = 'warn';

function debug(method) {
  if (levels.indexOf(method) <= levels.indexOf(level)) {
    var _console;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_console = console)[method].apply(_console, args); // eslint-disable-line no-console
  }
}

function namespace(ns) {
  return levels.reduce(function (logger, method) {
    logger[method] = debug.bind(console, method, ns);
    return logger;
  }, {});
}

debug.level = namespace.level = function (newLevel) {
  level = newLevel;
};

exports.default = namespace;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(52);
var isArguments = __webpack_require__(53);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __webpack_require__(1);
var Attributor = /** @class */ (function () {
    function Attributor(attrName, keyName, options) {
        if (options === void 0) { options = {}; }
        this.attrName = attrName;
        this.keyName = keyName;
        var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
        if (options.scope != null) {
            // Ignore type bits, force attribute bit
            this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
        }
        else {
            this.scope = Registry.Scope.ATTRIBUTE;
        }
        if (options.whitelist != null)
            this.whitelist = options.whitelist;
    }
    Attributor.keys = function (node) {
        return [].map.call(node.attributes, function (item) {
            return item.name;
        });
    };
    Attributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        node.setAttribute(this.keyName, value);
        return true;
    };
    Attributor.prototype.canAdd = function (node, value) {
        var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
        if (match == null)
            return false;
        if (this.whitelist == null)
            return true;
        if (typeof value === 'string') {
            return this.whitelist.indexOf(value.replace(/["']/g, '')) > -1;
        }
        else {
            return this.whitelist.indexOf(value) > -1;
        }
    };
    Attributor.prototype.remove = function (node) {
        node.removeAttribute(this.keyName);
    };
    Attributor.prototype.value = function (node) {
        var value = node.getAttribute(this.keyName);
        if (this.canAdd(node, value) && value) {
            return value;
        }
        return '';
    };
    return Attributor;
}());
exports.default = Attributor;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Code = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = function (_Inline) {
  _inherits(Code, _Inline);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  return Code;
}(_inline2.default);

Code.blotName = 'code';
Code.tagName = 'CODE';

var CodeBlock = function (_Block) {
  _inherits(CodeBlock, _Block);

  function CodeBlock() {
    _classCallCheck(this, CodeBlock);

    return _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).apply(this, arguments));
  }

  _createClass(CodeBlock, [{
    key: 'delta',
    value: function delta() {
      var _this3 = this;

      var text = this.domNode.textContent;
      if (text.endsWith('\n')) {
        // Should always be true
        text = text.slice(0, -1);
      }
      return text.split('\n').reduce(function (delta, frag) {
        return delta.insert(frag).insert('\n', _this3.formats());
      }, new _quillDelta2.default());
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (name === this.statics.blotName && value) return;

      var _descendant = this.descendant(_text2.default, this.length() - 1),
          _descendant2 = _slicedToArray(_descendant, 1),
          text = _descendant2[0];

      if (text != null) {
        text.deleteAt(text.length() - 1, 1);
      }
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'format', this).call(this, name, value);
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (length === 0) return;
      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
        return;
      }
      var nextNewline = this.newlineIndex(index);
      if (nextNewline < 0 || nextNewline >= index + length) return;
      var prevNewline = this.newlineIndex(index, true) + 1;
      var isolateLength = nextNewline - prevNewline + 1;
      var blot = this.isolate(prevNewline, isolateLength);
      var next = blot.next;
      blot.format(name, value);
      if (next instanceof CodeBlock) {
        next.formatAt(0, index - prevNewline + length - isolateLength, name, value);
      }
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null) return;

      var _descendant3 = this.descendant(_text2.default, index),
          _descendant4 = _slicedToArray(_descendant3, 2),
          text = _descendant4[0],
          offset = _descendant4[1];

      text.insertAt(offset, value);
    }
  }, {
    key: 'length',
    value: function length() {
      var length = this.domNode.textContent.length;
      if (!this.domNode.textContent.endsWith('\n')) {
        return length + 1;
      }
      return length;
    }
  }, {
    key: 'newlineIndex',
    value: function newlineIndex(searchIndex) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!reverse) {
        var offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
        return offset > -1 ? searchIndex + offset : -1;
      } else {
        return this.domNode.textContent.slice(0, searchIndex).lastIndexOf('\n');
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      if (!this.domNode.textContent.endsWith('\n')) {
        this.appendChild(_parchment2.default.create('text', '\n'));
      }
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'optimize', this).call(this, context);
      var next = this.next;
      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
        next.optimize(context);
        next.moveChildren(this);
        next.remove();
      }
    }
  }, {
    key: 'replace',
    value: function replace(target) {
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'replace', this).call(this, target);
      [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
        var blot = _parchment2.default.find(node);
        if (blot == null) {
          node.parentNode.removeChild(node);
        } else if (blot instanceof _parchment2.default.Embed) {
          blot.remove();
        } else {
          blot.unwrap();
        }
      });
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var domNode = _get(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock), 'create', this).call(this, value);
      domNode.setAttribute('spellcheck', false);
      return domNode;
    }
  }, {
    key: 'formats',
    value: function formats() {
      return true;
    }
  }]);

  return CodeBlock;
}(_block2.default);

CodeBlock.blotName = 'code-block';
CodeBlock.tagName = 'PRE';
CodeBlock.TAB = '  ';

exports.Code = Code;
exports.default = CodeBlock;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _op = __webpack_require__(20);

var _op2 = _interopRequireDefault(_op);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _cursor = __webpack_require__(24);

var _cursor2 = _interopRequireDefault(_cursor);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ASCII = /^[ -~]*$/;

var Editor = function () {
  function Editor(scroll) {
    _classCallCheck(this, Editor);

    this.scroll = scroll;
    this.delta = this.getDelta();
  }

  _createClass(Editor, [{
    key: 'applyDelta',
    value: function applyDelta(delta) {
      var _this = this;

      var consumeNextNewline = false;
      this.scroll.update();
      var scrollLength = this.scroll.length();
      this.scroll.batchStart();
      delta = normalizeDelta(delta);
      delta.reduce(function (index, op) {
        var length = op.retain || op.delete || op.insert.length || 1;
        var attributes = op.attributes || {};
        if (op.insert != null) {
          if (typeof op.insert === 'string') {
            var text = op.insert;
            if (text.endsWith('\n') && consumeNextNewline) {
              consumeNextNewline = false;
              text = text.slice(0, -1);
            }
            if (index >= scrollLength && !text.endsWith('\n')) {
              consumeNextNewline = true;
            }
            _this.scroll.insertAt(index, text);

            var _scroll$line = _this.scroll.line(index),
                _scroll$line2 = _slicedToArray(_scroll$line, 2),
                line = _scroll$line2[0],
                offset = _scroll$line2[1];

            var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
            if (line instanceof _block2.default) {
              var _line$descendant = line.descendant(_parchment2.default.Leaf, offset),
                  _line$descendant2 = _slicedToArray(_line$descendant, 1),
                  leaf = _line$descendant2[0];

              formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
            }
            attributes = _op2.default.attributes.diff(formats, attributes) || {};
          } else if (_typeof(op.insert) === 'object') {
            var key = Object.keys(op.insert)[0]; // There should only be one key
            if (key == null) return index;
            _this.scroll.insertAt(index, key, op.insert[key]);
          }
          scrollLength += length;
        }
        Object.keys(attributes).forEach(function (name) {
          _this.scroll.formatAt(index, length, name, attributes[name]);
        });
        return index + length;
      }, 0);
      delta.reduce(function (index, op) {
        if (typeof op.delete === 'number') {
          _this.scroll.deleteAt(index, op.delete);
          return index;
        }
        return index + (op.retain || op.insert.length || 1);
      }, 0);
      this.scroll.batchEnd();
      return this.update(delta);
    }
  }, {
    key: 'deleteText',
    value: function deleteText(index, length) {
      this.scroll.deleteAt(index, length);
      return this.update(new _quillDelta2.default().retain(index).delete(length));
    }
  }, {
    key: 'formatLine',
    value: function formatLine(index, length) {
      var _this2 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.scroll.update();
      Object.keys(formats).forEach(function (format) {
        if (_this2.scroll.whitelist != null && !_this2.scroll.whitelist[format]) return;
        var lines = _this2.scroll.lines(index, Math.max(length, 1));
        var lengthRemaining = length;
        lines.forEach(function (line) {
          var lineLength = line.length();
          if (!(line instanceof _code2.default)) {
            line.format(format, formats[format]);
          } else {
            var codeIndex = index - line.offset(_this2.scroll);
            var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
            line.formatAt(codeIndex, codeLength, format, formats[format]);
          }
          lengthRemaining -= lineLength;
        });
      });
      this.scroll.optimize();
      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'formatText',
    value: function formatText(index, length) {
      var _this3 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      Object.keys(formats).forEach(function (format) {
        _this3.scroll.formatAt(index, length, format, formats[format]);
      });
      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'getContents',
    value: function getContents(index, length) {
      return this.delta.slice(index, index + length);
    }
  }, {
    key: 'getDelta',
    value: function getDelta() {
      return this.scroll.lines().reduce(function (delta, line) {
        return delta.concat(line.delta());
      }, new _quillDelta2.default());
    }
  }, {
    key: 'getFormat',
    value: function getFormat(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var lines = [],
          leaves = [];
      if (length === 0) {
        this.scroll.path(index).forEach(function (path) {
          var _path = _slicedToArray(path, 1),
              blot = _path[0];

          if (blot instanceof _block2.default) {
            lines.push(blot);
          } else if (blot instanceof _parchment2.default.Leaf) {
            leaves.push(blot);
          }
        });
      } else {
        lines = this.scroll.lines(index, length);
        leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
      }
      var formatsArr = [lines, leaves].map(function (blots) {
        if (blots.length === 0) return {};
        var formats = (0, _block.bubbleFormats)(blots.shift());
        while (Object.keys(formats).length > 0) {
          var blot = blots.shift();
          if (blot == null) return formats;
          formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
        }
        return formats;
      });
      return _extend2.default.apply(_extend2.default, formatsArr);
    }
  }, {
    key: 'getText',
    value: function getText(index, length) {
      return this.getContents(index, length).filter(function (op) {
        return typeof op.insert === 'string';
      }).map(function (op) {
        return op.insert;
      }).join('');
    }
  }, {
    key: 'insertEmbed',
    value: function insertEmbed(index, embed, value) {
      this.scroll.insertAt(index, embed, value);
      return this.update(new _quillDelta2.default().retain(index).insert(_defineProperty({}, embed, value)));
    }
  }, {
    key: 'insertText',
    value: function insertText(index, text) {
      var _this4 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      this.scroll.insertAt(index, text);
      Object.keys(formats).forEach(function (format) {
        _this4.scroll.formatAt(index, text.length, format, formats[format]);
      });
      return this.update(new _quillDelta2.default().retain(index).insert(text, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'isBlank',
    value: function isBlank() {
      if (this.scroll.children.length == 0) return true;
      if (this.scroll.children.length > 1) return false;
      var block = this.scroll.children.head;
      if (block.statics.blotName !== _block2.default.blotName) return false;
      if (block.children.length > 1) return false;
      return block.children.head instanceof _break2.default;
    }
  }, {
    key: 'removeFormat',
    value: function removeFormat(index, length) {
      var text = this.getText(index, length);

      var _scroll$line3 = this.scroll.line(index + length),
          _scroll$line4 = _slicedToArray(_scroll$line3, 2),
          line = _scroll$line4[0],
          offset = _scroll$line4[1];

      var suffixLength = 0,
          suffix = new _quillDelta2.default();
      if (line != null) {
        if (!(line instanceof _code2.default)) {
          suffixLength = line.length() - offset;
        } else {
          suffixLength = line.newlineIndex(offset) - offset + 1;
        }
        suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
      }
      var contents = this.getContents(index, length + suffixLength);
      var diff = contents.diff(new _quillDelta2.default().insert(text).concat(suffix));
      var delta = new _quillDelta2.default().retain(index).concat(diff);
      return this.applyDelta(delta);
    }
  }, {
    key: 'update',
    value: function update(change) {
      var mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var cursorIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      var oldDelta = this.delta;
      if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && _parchment2.default.find(mutations[0].target)) {
        // Optimization for character changes
        var textBlot = _parchment2.default.find(mutations[0].target);
        var formats = (0, _block.bubbleFormats)(textBlot);
        var index = textBlot.offset(this.scroll);
        var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, '');
        var oldText = new _quillDelta2.default().insert(oldValue);
        var newText = new _quillDelta2.default().insert(textBlot.value());
        var diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newText, cursorIndex));
        change = diffDelta.reduce(function (delta, op) {
          if (op.insert) {
            return delta.insert(op.insert, formats);
          } else {
            return delta.push(op);
          }
        }, new _quillDelta2.default());
        this.delta = oldDelta.compose(change);
      } else {
        this.delta = this.getDelta();
        if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
          change = oldDelta.diff(this.delta, cursorIndex);
        }
      }
      return change;
    }
  }]);

  return Editor;
}();

function combineFormats(formats, combined) {
  return Object.keys(combined).reduce(function (merged, name) {
    if (formats[name] == null) return merged;
    if (combined[name] === formats[name]) {
      merged[name] = combined[name];
    } else if (Array.isArray(combined[name])) {
      if (combined[name].indexOf(formats[name]) < 0) {
        merged[name] = combined[name].concat([formats[name]]);
      }
    } else {
      merged[name] = [combined[name], formats[name]];
    }
    return merged;
  }, {});
}

function normalizeDelta(delta) {
  return delta.reduce(function (delta, op) {
    if (op.insert === 1) {
      var attributes = (0, _clone2.default)(op.attributes);
      delete attributes['image'];
      return delta.insert({ image: op.attributes.image }, attributes);
    }
    if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
      op = (0, _clone2.default)(op);
      if (op.attributes.list) {
        op.attributes.list = 'ordered';
      } else {
        op.attributes.list = 'bullet';
        delete op.attributes.bullet;
      }
    }
    if (typeof op.insert === 'string') {
      var text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      return delta.insert(text, op.attributes);
    }
    return delta.push(op);
  }, new _quillDelta2.default());
}

exports.default = Editor;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Range = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _emitter3 = __webpack_require__(8);

var _emitter4 = _interopRequireDefault(_emitter3);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _logger2.default)('quill:selection');

var Range = function Range(index) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  _classCallCheck(this, Range);

  this.index = index;
  this.length = length;
};

var Selection = function () {
  function Selection(scroll, emitter) {
    var _this = this;

    _classCallCheck(this, Selection);

    this.emitter = emitter;
    this.scroll = scroll;
    this.composing = false;
    this.mouseDown = false;
    this.root = this.scroll.domNode;
    this.cursor = _parchment2.default.create('cursor', this);
    // savedRange is last non-null range
    this.lastRange = this.savedRange = new Range(0, 0);
    this.handleComposition();
    this.handleDragging();
    this.emitter.listenDOM('selectionchange', document, function () {
      if (!_this.mouseDown) {
        setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 1);
      }
    });
    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type, delta) {
      if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
        _this.update(_emitter4.default.sources.SILENT);
      }
    });
    this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function () {
      if (!_this.hasFocus()) return;
      var native = _this.getNativeRange();
      if (native == null) return;
      if (native.start.node === _this.cursor.textNode) return; // cursor.restore() will handle
      // TODO unclear if this has negative side effects
      _this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function () {
        try {
          _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
        } catch (ignored) {}
      });
    });
    this.emitter.on(_emitter4.default.events.SCROLL_OPTIMIZE, function (mutations, context) {
      if (context.range) {
        var _context$range = context.range,
            startNode = _context$range.startNode,
            startOffset = _context$range.startOffset,
            endNode = _context$range.endNode,
            endOffset = _context$range.endOffset;

        _this.setNativeRange(startNode, startOffset, endNode, endOffset);
      }
    });
    this.update(_emitter4.default.sources.SILENT);
  }

  _createClass(Selection, [{
    key: 'handleComposition',
    value: function handleComposition() {
      var _this2 = this;

      this.root.addEventListener('compositionstart', function () {
        _this2.composing = true;
      });
      this.root.addEventListener('compositionend', function () {
        _this2.composing = false;
        if (_this2.cursor.parent) {
          var range = _this2.cursor.restore();
          if (!range) return;
          setTimeout(function () {
            _this2.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
          }, 1);
        }
      });
    }
  }, {
    key: 'handleDragging',
    value: function handleDragging() {
      var _this3 = this;

      this.emitter.listenDOM('mousedown', document.body, function () {
        _this3.mouseDown = true;
      });
      this.emitter.listenDOM('mouseup', document.body, function () {
        _this3.mouseDown = false;
        _this3.update(_emitter4.default.sources.USER);
      });
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.hasFocus()) return;
      this.root.focus();
      this.setRange(this.savedRange);
    }
  }, {
    key: 'format',
    value: function format(_format, value) {
      if (this.scroll.whitelist != null && !this.scroll.whitelist[_format]) return;
      this.scroll.update();
      var nativeRange = this.getNativeRange();
      if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
      if (nativeRange.start.node !== this.cursor.textNode) {
        var blot = _parchment2.default.find(nativeRange.start.node, false);
        if (blot == null) return;
        // TODO Give blot ability to not split
        if (blot instanceof _parchment2.default.Leaf) {
          var after = blot.split(nativeRange.start.offset);
          blot.parent.insertBefore(this.cursor, after);
        } else {
          blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
        }
        this.cursor.attach();
      }
      this.cursor.format(_format, value);
      this.scroll.optimize();
      this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
      this.update();
    }
  }, {
    key: 'getBounds',
    value: function getBounds(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var scrollLength = this.scroll.length();
      index = Math.min(index, scrollLength - 1);
      length = Math.min(index + length, scrollLength - 1) - index;
      var node = void 0,
          _scroll$leaf = this.scroll.leaf(index),
          _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2),
          leaf = _scroll$leaf2[0],
          offset = _scroll$leaf2[1];
      if (leaf == null) return null;

      var _leaf$position = leaf.position(offset, true);

      var _leaf$position2 = _slicedToArray(_leaf$position, 2);

      node = _leaf$position2[0];
      offset = _leaf$position2[1];

      var range = document.createRange();
      if (length > 0) {
        range.setStart(node, offset);

        var _scroll$leaf3 = this.scroll.leaf(index + length);

        var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);

        leaf = _scroll$leaf4[0];
        offset = _scroll$leaf4[1];

        if (leaf == null) return null;

        var _leaf$position3 = leaf.position(offset, true);

        var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

        node = _leaf$position4[0];
        offset = _leaf$position4[1];

        range.setEnd(node, offset);
        return range.getBoundingClientRect();
      } else {
        var side = 'left';
        var rect = void 0;
        if (node instanceof Text) {
          if (offset < node.data.length) {
            range.setStart(node, offset);
            range.setEnd(node, offset + 1);
          } else {
            range.setStart(node, offset - 1);
            range.setEnd(node, offset);
            side = 'right';
          }
          rect = range.getBoundingClientRect();
        } else {
          rect = leaf.domNode.getBoundingClientRect();
          if (offset > 0) side = 'right';
        }
        return {
          bottom: rect.top + rect.height,
          height: rect.height,
          left: rect[side],
          right: rect[side],
          top: rect.top,
          width: 0
        };
      }
    }
  }, {
    key: 'getNativeRange',
    value: function getNativeRange() {
      var selection = document.getSelection();
      if (selection == null || selection.rangeCount <= 0) return null;
      var nativeRange = selection.getRangeAt(0);
      if (nativeRange == null) return null;
      var range = this.normalizeNative(nativeRange);
      debug.info('getNativeRange', range);
      return range;
    }
  }, {
    key: 'getRange',
    value: function getRange() {
      var normalized = this.getNativeRange();
      if (normalized == null) return [null, null];
      var range = this.normalizedToRange(normalized);
      return [range, normalized];
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      return document.activeElement === this.root;
    }
  }, {
    key: 'normalizedToRange',
    value: function normalizedToRange(range) {
      var _this4 = this;

      var positions = [[range.start.node, range.start.offset]];
      if (!range.native.collapsed) {
        positions.push([range.end.node, range.end.offset]);
      }
      var indexes = positions.map(function (position) {
        var _position = _slicedToArray(position, 2),
            node = _position[0],
            offset = _position[1];

        var blot = _parchment2.default.find(node, true);
        var index = blot.offset(_this4.scroll);
        if (offset === 0) {
          return index;
        } else if (blot instanceof _parchment2.default.Container) {
          return index + blot.length();
        } else {
          return index + blot.index(node, offset);
        }
      });
      var end = Math.min(Math.max.apply(Math, _toConsumableArray(indexes)), this.scroll.length() - 1);
      var start = Math.min.apply(Math, [end].concat(_toConsumableArray(indexes)));
      return new Range(start, end - start);
    }
  }, {
    key: 'normalizeNative',
    value: function normalizeNative(nativeRange) {
      if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
        return null;
      }
      var range = {
        start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
        end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
        native: nativeRange
      };
      [range.start, range.end].forEach(function (position) {
        var node = position.node,
            offset = position.offset;
        while (!(node instanceof Text) && node.childNodes.length > 0) {
          if (node.childNodes.length > offset) {
            node = node.childNodes[offset];
            offset = 0;
          } else if (node.childNodes.length === offset) {
            node = node.lastChild;
            offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
          } else {
            break;
          }
        }
        position.node = node, position.offset = offset;
      });
      return range;
    }
  }, {
    key: 'rangeToNative',
    value: function rangeToNative(range) {
      var _this5 = this;

      var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
      var args = [];
      var scrollLength = this.scroll.length();
      indexes.forEach(function (index, i) {
        index = Math.min(scrollLength - 1, index);
        var node = void 0,
            _scroll$leaf5 = _this5.scroll.leaf(index),
            _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2),
            leaf = _scroll$leaf6[0],
            offset = _scroll$leaf6[1];
        var _leaf$position5 = leaf.position(offset, i !== 0);

        var _leaf$position6 = _slicedToArray(_leaf$position5, 2);

        node = _leaf$position6[0];
        offset = _leaf$position6[1];

        args.push(node, offset);
      });
      if (args.length < 2) {
        args = args.concat(args);
      }
      return args;
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView(scrollingContainer) {
      var range = this.lastRange;
      if (range == null) return;
      var bounds = this.getBounds(range.index, range.length);
      if (bounds == null) return;
      var limit = this.scroll.length() - 1;

      var _scroll$line = this.scroll.line(Math.min(range.index, limit)),
          _scroll$line2 = _slicedToArray(_scroll$line, 1),
          first = _scroll$line2[0];

      var last = first;
      if (range.length > 0) {
        var _scroll$line3 = this.scroll.line(Math.min(range.index + range.length, limit));

        var _scroll$line4 = _slicedToArray(_scroll$line3, 1);

        last = _scroll$line4[0];
      }
      if (first == null || last == null) return;
      var scrollBounds = scrollingContainer.getBoundingClientRect();
      if (bounds.top < scrollBounds.top) {
        scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
      } else if (bounds.bottom > scrollBounds.bottom) {
        scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
      }
    }
  }, {
    key: 'setNativeRange',
    value: function setNativeRange(startNode, startOffset) {
      var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
      var endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
      var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
      if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
        return;
      }
      var selection = document.getSelection();
      if (selection == null) return;
      if (startNode != null) {
        if (!this.hasFocus()) this.root.focus();
        var native = (this.getNativeRange() || {}).native;
        if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {

          if (startNode.tagName == "BR") {
            startOffset = [].indexOf.call(startNode.parentNode.childNodes, startNode);
            startNode = startNode.parentNode;
          }
          if (endNode.tagName == "BR") {
            endOffset = [].indexOf.call(endNode.parentNode.childNodes, endNode);
            endNode = endNode.parentNode;
          }
          var range = document.createRange();
          range.setStart(startNode, startOffset);
          range.setEnd(endNode, endOffset);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } else {
        selection.removeAllRanges();
        this.root.blur();
        document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
      }
    }
  }, {
    key: 'setRange',
    value: function setRange(range) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

      if (typeof force === 'string') {
        source = force;
        force = false;
      }
      debug.info('setRange', range);
      if (range != null) {
        var args = this.rangeToNative(range);
        this.setNativeRange.apply(this, _toConsumableArray(args).concat([force]));
      } else {
        this.setNativeRange(null);
      }
      this.update(source);
    }
  }, {
    key: 'update',
    value: function update() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

      var oldRange = this.lastRange;

      var _getRange = this.getRange(),
          _getRange2 = _slicedToArray(_getRange, 2),
          lastRange = _getRange2[0],
          nativeRange = _getRange2[1];

      this.lastRange = lastRange;
      if (this.lastRange != null) {
        this.savedRange = this.lastRange;
      }
      if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
        var _emitter;

        if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
          this.cursor.restore();
        }
        var args = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];
        (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
        if (source !== _emitter4.default.sources.SILENT) {
          var _emitter2;

          (_emitter2 = this.emitter).emit.apply(_emitter2, args);
        }
      }
    }
  }]);

  return Selection;
}();

function contains(parent, descendant) {
  try {
    // Firefox inserts inaccessible nodes around video elements
    descendant.parentNode;
  } catch (e) {
    return false;
  }
  // IE11 has bug with Text nodes
  // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect
  if (descendant instanceof Text) {
    descendant = descendant.parentNode;
  }
  return parent.contains(descendant);
}

exports.Range = Range;
exports.default = Selection;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Break = function (_Parchment$Embed) {
  _inherits(Break, _Parchment$Embed);

  function Break() {
    _classCallCheck(this, Break);

    return _possibleConstructorReturn(this, (Break.__proto__ || Object.getPrototypeOf(Break)).apply(this, arguments));
  }

  _createClass(Break, [{
    key: 'insertInto',
    value: function insertInto(parent, ref) {
      if (parent.children.length === 0) {
        _get(Break.prototype.__proto__ || Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
      } else {
        this.remove();
      }
    }
  }, {
    key: 'length',
    value: function length() {
      return 0;
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }], [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  return Break;
}(_parchment2.default.Embed);

Break.blotName = 'break';
Break.tagName = 'BR';

exports.default = Break;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = __webpack_require__(44);
var shadow_1 = __webpack_require__(30);
var Registry = __webpack_require__(1);
var ContainerBlot = /** @class */ (function (_super) {
    __extends(ContainerBlot, _super);
    function ContainerBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.build();
        return _this;
    }
    ContainerBlot.prototype.appendChild = function (other) {
        this.insertBefore(other);
    };
    ContainerBlot.prototype.attach = function () {
        _super.prototype.attach.call(this);
        this.children.forEach(function (child) {
            child.attach();
        });
    };
    ContainerBlot.prototype.build = function () {
        var _this = this;
        this.children = new linked_list_1.default();
        // Need to be reversed for if DOM nodes already in order
        [].slice
            .call(this.domNode.childNodes)
            .reverse()
            .forEach(function (node) {
            try {
                var child = makeBlot(node);
                _this.insertBefore(child, _this.children.head || undefined);
            }
            catch (err) {
                if (err instanceof Registry.ParchmentError)
                    return;
                else
                    throw err;
            }
        });
    };
    ContainerBlot.prototype.deleteAt = function (index, length) {
        if (index === 0 && length === this.length()) {
            return this.remove();
        }
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.deleteAt(offset, length);
        });
    };
    ContainerBlot.prototype.descendant = function (criteria, index) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if ((criteria.blotName == null && criteria(child)) ||
            (criteria.blotName != null && child instanceof criteria)) {
            return [child, offset];
        }
        else if (child instanceof ContainerBlot) {
            return child.descendant(criteria, offset);
        }
        else {
            return [null, -1];
        }
    };
    ContainerBlot.prototype.descendants = function (criteria, index, length) {
        if (index === void 0) { index = 0; }
        if (length === void 0) { length = Number.MAX_VALUE; }
        var descendants = [];
        var lengthLeft = length;
        this.children.forEachAt(index, length, function (child, index, length) {
            if ((criteria.blotName == null && criteria(child)) ||
                (criteria.blotName != null && child instanceof criteria)) {
                descendants.push(child);
            }
            if (child instanceof ContainerBlot) {
                descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
            }
            lengthLeft -= length;
        });
        return descendants;
    };
    ContainerBlot.prototype.detach = function () {
        this.children.forEach(function (child) {
            child.detach();
        });
        _super.prototype.detach.call(this);
    };
    ContainerBlot.prototype.formatAt = function (index, length, name, value) {
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.formatAt(offset, length, name, value);
        });
    };
    ContainerBlot.prototype.insertAt = function (index, value, def) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if (child) {
            child.insertAt(offset, value, def);
        }
        else {
            var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
            this.appendChild(blot);
        }
    };
    ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
        if (this.statics.allowedChildren != null &&
            !this.statics.allowedChildren.some(function (child) {
                return childBlot instanceof child;
            })) {
            throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
        }
        childBlot.insertInto(this, refBlot);
    };
    ContainerBlot.prototype.length = function () {
        return this.children.reduce(function (memo, child) {
            return memo + child.length();
        }, 0);
    };
    ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
        this.children.forEach(function (child) {
            targetParent.insertBefore(child, refNode);
        });
    };
    ContainerBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        if (this.children.length === 0) {
            if (this.statics.defaultChild != null) {
                var child = Registry.create(this.statics.defaultChild);
                this.appendChild(child);
                child.optimize(context);
            }
            else {
                this.remove();
            }
        }
    };
    ContainerBlot.prototype.path = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
        var position = [[this, index]];
        if (child instanceof ContainerBlot) {
            return position.concat(child.path(offset, inclusive));
        }
        else if (child != null) {
            position.push([child, offset]);
        }
        return position;
    };
    ContainerBlot.prototype.removeChild = function (child) {
        this.children.remove(child);
    };
    ContainerBlot.prototype.replace = function (target) {
        if (target instanceof ContainerBlot) {
            target.moveChildren(this);
        }
        _super.prototype.replace.call(this, target);
    };
    ContainerBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = this.clone();
        this.parent.insertBefore(after, this.next);
        this.children.forEachAt(index, this.length(), function (child, offset, length) {
            child = child.split(offset, force);
            after.appendChild(child);
        });
        return after;
    };
    ContainerBlot.prototype.unwrap = function () {
        this.moveChildren(this.parent, this.next);
        this.remove();
    };
    ContainerBlot.prototype.update = function (mutations, context) {
        var _this = this;
        var addedNodes = [];
        var removedNodes = [];
        mutations.forEach(function (mutation) {
            if (mutation.target === _this.domNode && mutation.type === 'childList') {
                addedNodes.push.apply(addedNodes, mutation.addedNodes);
                removedNodes.push.apply(removedNodes, mutation.removedNodes);
            }
        });
        removedNodes.forEach(function (node) {
            // Check node has actually been removed
            // One exception is Chrome does not immediately remove IFRAMEs
            // from DOM but MutationRecord is correct in its reported removal
            if (node.parentNode != null &&
                // @ts-ignore
                node.tagName !== 'IFRAME' &&
                document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                return;
            }
            var blot = Registry.find(node);
            if (blot == null)
                return;
            if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
                blot.detach();
            }
        });
        addedNodes
            .filter(function (node) {
            return node.parentNode == _this.domNode;
        })
            .sort(function (a, b) {
            if (a === b)
                return 0;
            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                return 1;
            }
            return -1;
        })
            .forEach(function (node) {
            var refBlot = null;
            if (node.nextSibling != null) {
                refBlot = Registry.find(node.nextSibling);
            }
            var blot = makeBlot(node);
            if (blot.next != refBlot || blot.next == null) {
                if (blot.parent != null) {
                    blot.parent.removeChild(_this);
                }
                _this.insertBefore(blot, refBlot || undefined);
            }
        });
    };
    return ContainerBlot;
}(shadow_1.default));
function makeBlot(node) {
    var blot = Registry.find(node);
    if (blot == null) {
        try {
            blot = Registry.create(node);
        }
        catch (e) {
            blot = Registry.create(Registry.Scope.INLINE);
            [].slice.call(node.childNodes).forEach(function (child) {
                // @ts-ignore
                blot.domNode.appendChild(child);
            });
            if (node.parentNode) {
                node.parentNode.replaceChild(blot.domNode, node);
            }
            blot.attach();
        }
    }
    return blot;
}
exports.default = ContainerBlot;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
var store_1 = __webpack_require__(31);
var container_1 = __webpack_require__(17);
var Registry = __webpack_require__(1);
var FormatBlot = /** @class */ (function (_super) {
    __extends(FormatBlot, _super);
    function FormatBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.attributes = new store_1.default(_this.domNode);
        return _this;
    }
    FormatBlot.formats = function (domNode) {
        if (typeof this.tagName === 'string') {
            return true;
        }
        else if (Array.isArray(this.tagName)) {
            return domNode.tagName.toLowerCase();
        }
        return undefined;
    };
    FormatBlot.prototype.format = function (name, value) {
        var format = Registry.query(name);
        if (format instanceof attributor_1.default) {
            this.attributes.attribute(format, value);
        }
        else if (value) {
            if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
                this.replaceWith(name, value);
            }
        }
    };
    FormatBlot.prototype.formats = function () {
        var formats = this.attributes.values();
        var format = this.statics.formats(this.domNode);
        if (format != null) {
            formats[this.statics.blotName] = format;
        }
        return formats;
    };
    FormatBlot.prototype.replaceWith = function (name, value) {
        var replacement = _super.prototype.replaceWith.call(this, name, value);
        this.attributes.copy(replacement);
        return replacement;
    };
    FormatBlot.prototype.update = function (mutations, context) {
        var _this = this;
        _super.prototype.update.call(this, mutations, context);
        if (mutations.some(function (mutation) {
            return mutation.target === _this.domNode && mutation.type === 'attributes';
        })) {
            this.attributes.build();
        }
    };
    FormatBlot.prototype.wrap = function (name, value) {
        var wrapper = _super.prototype.wrap.call(this, name, value);
        if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
            this.attributes.move(wrapper);
        }
        return wrapper;
    };
    return FormatBlot;
}(container_1.default));
exports.default = FormatBlot;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shadow_1 = __webpack_require__(30);
var Registry = __webpack_require__(1);
var LeafBlot = /** @class */ (function (_super) {
    __extends(LeafBlot, _super);
    function LeafBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeafBlot.value = function (domNode) {
        return true;
    };
    LeafBlot.prototype.index = function (node, offset) {
        if (this.domNode === node ||
            this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            return Math.min(offset, 1);
        }
        return -1;
    };
    LeafBlot.prototype.position = function (index, inclusive) {
        var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
        if (index > 0)
            offset += 1;
        return [this.parent.domNode, offset];
    };
    LeafBlot.prototype.value = function () {
        return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
        var _a;
    };
    LeafBlot.scope = Registry.Scope.INLINE_BLOT;
    return LeafBlot;
}(shadow_1.default));
exports.default = LeafBlot;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var equal = __webpack_require__(11);
var extend = __webpack_require__(3);


var lib = {
  attributes: {
    compose: function (a, b, keepNull) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = extend(true, {}, b);
      if (!keepNull) {
        attributes = Object.keys(attributes).reduce(function (copy, key) {
          if (attributes[key] != null) {
            copy[key] = attributes[key];
          }
          return copy;
        }, {});
      }
      for (var key in a) {
        if (a[key] !== undefined && b[key] === undefined) {
          attributes[key] = a[key];
        }
      }
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },

    diff: function(a, b) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
        if (!equal(a[key], b[key])) {
          attributes[key] = b[key] === undefined ? null : b[key];
        }
        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },

    transform: function (a, b, priority) {
      if (typeof a !== 'object') return b;
      if (typeof b !== 'object') return undefined;
      if (!priority) return b;  // b simply overwrites us without priority
      var attributes = Object.keys(b).reduce(function (attributes, key) {
        if (a[key] === undefined) attributes[key] = b[key];  // null is a valid value
        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
  },

  iterator: function (ops) {
    return new Iterator(ops);
  },

  length: function (op) {
    if (typeof op['delete'] === 'number') {
      return op['delete'];
    } else if (typeof op.retain === 'number') {
      return op.retain;
    } else {
      return typeof op.insert === 'string' ? op.insert.length : 1;
    }
  }
};


function Iterator(ops) {
  this.ops = ops;
  this.index = 0;
  this.offset = 0;
};

Iterator.prototype.hasNext = function () {
  return this.peekLength() < Infinity;
};

Iterator.prototype.next = function (length) {
  if (!length) length = Infinity;
  var nextOp = this.ops[this.index];
  if (nextOp) {
    var offset = this.offset;
    var opLength = lib.length(nextOp)
    if (length >= opLength - offset) {
      length = opLength - offset;
      this.index += 1;
      this.offset = 0;
    } else {
      this.offset += length;
    }
    if (typeof nextOp['delete'] === 'number') {
      return { 'delete': length };
    } else {
      var retOp = {};
      if (nextOp.attributes) {
        retOp.attributes = nextOp.attributes;
      }
      if (typeof nextOp.retain === 'number') {
        retOp.retain = length;
      } else if (typeof nextOp.insert === 'string') {
        retOp.insert = nextOp.insert.substr(offset, length);
      } else {
        // offset should === 0, length should === 1
        retOp.insert = nextOp.insert;
      }
      return retOp;
    }
  } else {
    return { retain: Infinity };
  }
};

Iterator.prototype.peek = function () {
  return this.ops[this.index];
};

Iterator.prototype.peekLength = function () {
  if (this.ops[this.index]) {
    // Should never return 0 if our index is being managed correctly
    return lib.length(this.ops[this.index]) - this.offset;
  } else {
    return Infinity;
  }
};

Iterator.prototype.peekType = function () {
  if (this.ops[this.index]) {
    if (typeof this.ops[this.index]['delete'] === 'number') {
      return 'delete';
    } else if (typeof this.ops[this.index].retain === 'number') {
      return 'retain';
    } else {
      return 'insert';
    }
  }
  return 'retain';
};


module.exports = lib;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isLine(blot) {
  return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
}

var Scroll = function (_Parchment$Scroll) {
  _inherits(Scroll, _Parchment$Scroll);

  function Scroll(domNode, config) {
    _classCallCheck(this, Scroll);

    var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, domNode));

    _this.emitter = config.emitter;
    if (Array.isArray(config.whitelist)) {
      _this.whitelist = config.whitelist.reduce(function (whitelist, format) {
        whitelist[format] = true;
        return whitelist;
      }, {});
    }
    // Some reason fixes composition issues with character languages in Windows/Chrome, Safari
    _this.domNode.addEventListener('DOMNodeInserted', function () {});
    _this.optimize();
    _this.enable();
    return _this;
  }

  _createClass(Scroll, [{
    key: 'batchStart',
    value: function batchStart() {
      this.batch = true;
    }
  }, {
    key: 'batchEnd',
    value: function batchEnd() {
      this.batch = false;
      this.optimize();
    }
  }, {
    key: 'deleteAt',
    value: function deleteAt(index, length) {
      var _line = this.line(index),
          _line2 = _slicedToArray(_line, 2),
          first = _line2[0],
          offset = _line2[1];

      var _line3 = this.line(index + length),
          _line4 = _slicedToArray(_line3, 1),
          last = _line4[0];

      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);
      if (last != null && first !== last && offset > 0) {
        if (first instanceof _block.BlockEmbed || last instanceof _block.BlockEmbed) {
          this.optimize();
          return;
        }
        if (first instanceof _code2.default) {
          var newlineIndex = first.newlineIndex(first.length(), true);
          if (newlineIndex > -1) {
            first = first.split(newlineIndex + 1);
            if (first === last) {
              this.optimize();
              return;
            }
          }
        } else if (last instanceof _code2.default) {
          var _newlineIndex = last.newlineIndex(0);
          if (_newlineIndex > -1) {
            last.split(_newlineIndex + 1);
          }
        }
        var ref = last.children.head instanceof _break2.default ? null : last.children.head;
        first.moveChildren(last, ref);
        first.remove();
      }
      this.optimize();
    }
  }, {
    key: 'enable',
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.domNode.setAttribute('contenteditable', enabled);
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, format, value) {
      if (this.whitelist != null && !this.whitelist[format]) return;
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'formatAt', this).call(this, index, length, format, value);
      this.optimize();
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null && this.whitelist != null && !this.whitelist[value]) return;
      if (index >= this.length()) {
        if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
          var blot = _parchment2.default.create(this.statics.defaultChild);
          this.appendChild(blot);
          if (def == null && value.endsWith('\n')) {
            value = value.slice(0, -1);
          }
          blot.insertAt(0, value, def);
        } else {
          var embed = _parchment2.default.create(value, def);
          this.appendChild(embed);
        }
      } else {
        _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertAt', this).call(this, index, value, def);
      }
      this.optimize();
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
        var wrapper = _parchment2.default.create(this.statics.defaultChild);
        wrapper.appendChild(blot);
        blot = wrapper;
      }
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, blot, ref);
    }
  }, {
    key: 'leaf',
    value: function leaf(index) {
      return this.path(index).pop() || [null, -1];
    }
  }, {
    key: 'line',
    value: function line(index) {
      if (index === this.length()) {
        return this.line(index - 1);
      }
      return this.descendant(isLine, index);
    }
  }, {
    key: 'lines',
    value: function lines() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      var getLines = function getLines(blot, index, length) {
        var lines = [],
            lengthLeft = length;
        blot.children.forEachAt(index, length, function (child, index, length) {
          if (isLine(child)) {
            lines.push(child);
          } else if (child instanceof _parchment2.default.Container) {
            lines = lines.concat(getLines(child, index, lengthLeft));
          }
          lengthLeft -= length;
        });
        return lines;
      };
      return getLines(this, index, length);
    }
  }, {
    key: 'optimize',
    value: function optimize() {
      var mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.batch === true) return;
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations, context);
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations, context);
      }
    }
  }, {
    key: 'path',
    value: function path(index) {
      return _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
    }
  }, {
    key: 'update',
    value: function update(mutations) {
      if (this.batch === true) return;
      var source = _emitter2.default.sources.USER;
      if (typeof mutations === 'string') {
        source = mutations;
      }
      if (!Array.isArray(mutations)) {
        mutations = this.observer.takeRecords();
      }
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
      }
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations.concat([])); // pass copy
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
      }
    }
  }]);

  return Scroll;
}(_parchment2.default.Scroll);

Scroll.blotName = 'scroll';
Scroll.className = 'ql-editor';
Scroll.tagName = 'DIV';
Scroll.defaultChild = 'block';
Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];

exports.default = Scroll;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHORTKEY = exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = __webpack_require__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _op = __webpack_require__(20);

var _op2 = _interopRequireDefault(_op);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:keyboard');

var SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

var Keyboard = function (_Module) {
  _inherits(Keyboard, _Module);

  _createClass(Keyboard, null, [{
    key: 'match',
    value: function match(evt, binding) {
      binding = normalize(binding);
      if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (key) {
        return !!binding[key] !== evt[key] && binding[key] !== null;
      })) {
        return false;
      }
      return binding.key === (evt.which || evt.keyCode);
    }
  }]);

  function Keyboard(quill, options) {
    _classCallCheck(this, Keyboard);

    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, quill, options));

    _this.bindings = {};
    Object.keys(_this.options.bindings).forEach(function (name) {
      if (name === 'list autofill' && quill.scroll.whitelist != null && !quill.scroll.whitelist['list']) {
        return;
      }
      if (_this.options.bindings[name]) {
        _this.addBinding(_this.options.bindings[name]);
      }
    });
    _this.addBinding({ key: Keyboard.keys.ENTER, shiftKey: null }, handleEnter);
    _this.addBinding({ key: Keyboard.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () {});
    if (/Firefox/i.test(navigator.userAgent)) {
      // Need to handle delete and backspace for Firefox in the general case #1171
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true }, handleBackspace);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true }, handleDelete);
    } else {
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, handleBackspace);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, handleDelete);
    }
    _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: false }, handleDeleteRange);
    _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: false }, handleDeleteRange);
    _this.addBinding({ key: Keyboard.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, handleBackspace);
    _this.listen();
    return _this;
  }

  _createClass(Keyboard, [{
    key: 'addBinding',
    value: function addBinding(key) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var binding = normalize(key);
      if (binding == null || binding.key == null) {
        return debug.warn('Attempted to add invalid keyboard binding', binding);
      }
      if (typeof context === 'function') {
        context = { handler: context };
      }
      if (typeof handler === 'function') {
        handler = { handler: handler };
      }
      binding = (0, _extend2.default)(binding, context, handler);
      this.bindings[binding.key] = this.bindings[binding.key] || [];
      this.bindings[binding.key].push(binding);
    }
  }, {
    key: 'listen',
    value: function listen() {
      var _this2 = this;

      this.quill.root.addEventListener('keydown', function (evt) {
        if (evt.defaultPrevented) return;
        var which = evt.which || evt.keyCode;
        var bindings = (_this2.bindings[which] || []).filter(function (binding) {
          return Keyboard.match(evt, binding);
        });
        if (bindings.length === 0) return;
        var range = _this2.quill.getSelection();
        if (range == null || !_this2.quill.hasFocus()) return;

        var _quill$getLine = _this2.quill.getLine(range.index),
            _quill$getLine2 = _slicedToArray(_quill$getLine, 2),
            line = _quill$getLine2[0],
            offset = _quill$getLine2[1];

        var _quill$getLeaf = _this2.quill.getLeaf(range.index),
            _quill$getLeaf2 = _slicedToArray(_quill$getLeaf, 2),
            leafStart = _quill$getLeaf2[0],
            offsetStart = _quill$getLeaf2[1];

        var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.getLeaf(range.index + range.length),
            _ref2 = _slicedToArray(_ref, 2),
            leafEnd = _ref2[0],
            offsetEnd = _ref2[1];

        var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : '';
        var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
        var curContext = {
          collapsed: range.length === 0,
          empty: range.length === 0 && line.length() <= 1,
          format: _this2.quill.getFormat(range),
          offset: offset,
          prefix: prefixText,
          suffix: suffixText
        };
        var prevented = bindings.some(function (binding) {
          if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
          if (binding.empty != null && binding.empty !== curContext.empty) return false;
          if (binding.offset != null && binding.offset !== curContext.offset) return false;
          if (Array.isArray(binding.format)) {
            // any format is present
            if (binding.format.every(function (name) {
              return curContext.format[name] == null;
            })) {
              return false;
            }
          } else if (_typeof(binding.format) === 'object') {
            // all formats must match
            if (!Object.keys(binding.format).every(function (name) {
              if (binding.format[name] === true) return curContext.format[name] != null;
              if (binding.format[name] === false) return curContext.format[name] == null;
              return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
            })) {
              return false;
            }
          }
          if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
          if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
          return binding.handler.call(_this2, range, curContext) !== true;
        });
        if (prevented) {
          evt.preventDefault();
        }
      });
    }
  }]);

  return Keyboard;
}(_module2.default);

Keyboard.keys = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};

Keyboard.DEFAULTS = {
  bindings: {
    'bold': makeFormatHandler('bold'),
    'italic': makeFormatHandler('italic'),
    'underline': makeFormatHandler('underline'),
    'indent': {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: Keyboard.keys.TAB,
      format: ['blockquote', 'indent', 'list'],
      handler: function handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '+1', _quill2.default.sources.USER);
      }
    },
    'outdent': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      format: ['blockquote', 'indent', 'list'],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler: function handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '-1', _quill2.default.sources.USER);
      }
    },
    'outdent backspace': {
      key: Keyboard.keys.BACKSPACE,
      collapsed: true,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ['indent', 'list'],
      offset: 0,
      handler: function handler(range, context) {
        if (context.format.indent != null) {
          this.quill.format('indent', '-1', _quill2.default.sources.USER);
        } else if (context.format.list != null) {
          this.quill.format('list', false, _quill2.default.sources.USER);
        }
      }
    },
    'indent code-block': makeCodeBlockHandler(true),
    'outdent code-block': makeCodeBlockHandler(false),
    'remove tab': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      collapsed: true,
      prefix: /\t$/,
      handler: function handler(range) {
        this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
      }
    },
    'tab': {
      key: Keyboard.keys.TAB,
      handler: function handler(range) {
        this.quill.history.cutoff();
        var delta = new _quillDelta2.default().retain(range.index).delete(range.length).insert('\t');
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
      }
    },
    'list empty enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['list'],
      empty: true,
      handler: function handler(range, context) {
        this.quill.format('list', false, _quill2.default.sources.USER);
        if (context.format.indent) {
          this.quill.format('indent', false, _quill2.default.sources.USER);
        }
      }
    },
    'checklist enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: { list: 'checked' },
      handler: function handler(range) {
        var _quill$getLine3 = this.quill.getLine(range.index),
            _quill$getLine4 = _slicedToArray(_quill$getLine3, 2),
            line = _quill$getLine4[0],
            offset = _quill$getLine4[1];

        var formats = (0, _extend2.default)({}, line.formats(), { list: 'checked' });
        var delta = new _quillDelta2.default().retain(range.index).insert('\n', formats).retain(line.length() - offset - 1).retain(1, { list: 'unchecked' });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'header enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['header'],
      suffix: /^$/,
      handler: function handler(range, context) {
        var _quill$getLine5 = this.quill.getLine(range.index),
            _quill$getLine6 = _slicedToArray(_quill$getLine5, 2),
            line = _quill$getLine6[0],
            offset = _quill$getLine6[1];

        var delta = new _quillDelta2.default().retain(range.index).insert('\n', context.format).retain(line.length() - offset - 1).retain(1, { header: null });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'list autofill': {
      key: ' ',
      collapsed: true,
      format: { list: false },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler: function handler(range, context) {
        var length = context.prefix.length;

        var _quill$getLine7 = this.quill.getLine(range.index),
            _quill$getLine8 = _slicedToArray(_quill$getLine7, 2),
            line = _quill$getLine8[0],
            offset = _quill$getLine8[1];

        if (offset > length) return true;
        var value = void 0;
        switch (context.prefix.trim()) {
          case '[]':case '[ ]':
            value = 'unchecked';
            break;
          case '[x]':
            value = 'checked';
            break;
          case '-':case '*':
            value = 'bullet';
            break;
          default:
            value = 'ordered';
        }
        this.quill.insertText(range.index, ' ', _quill2.default.sources.USER);
        this.quill.history.cutoff();
        var delta = new _quillDelta2.default().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, { list: value });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
      }
    },
    'code exit': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['code-block'],
      prefix: /\n\n$/,
      suffix: /^\s+$/,
      handler: function handler(range) {
        var _quill$getLine9 = this.quill.getLine(range.index),
            _quill$getLine10 = _slicedToArray(_quill$getLine9, 2),
            line = _quill$getLine10[0],
            offset = _quill$getLine10[1];

        var delta = new _quillDelta2.default().retain(range.index + line.length() - offset - 2).retain(1, { 'code-block': null }).delete(1);
        this.quill.updateContents(delta, _quill2.default.sources.USER);
      }
    },
    'embed left': makeEmbedArrowHandler(Keyboard.keys.LEFT, false),
    'embed left shift': makeEmbedArrowHandler(Keyboard.keys.LEFT, true),
    'embed right': makeEmbedArrowHandler(Keyboard.keys.RIGHT, false),
    'embed right shift': makeEmbedArrowHandler(Keyboard.keys.RIGHT, true)
  }
};

function makeEmbedArrowHandler(key, shiftKey) {
  var _ref3;

  var where = key === Keyboard.keys.LEFT ? 'prefix' : 'suffix';
  return _ref3 = {
    key: key,
    shiftKey: shiftKey,
    altKey: null
  }, _defineProperty(_ref3, where, /^$/), _defineProperty(_ref3, 'handler', function handler(range) {
    var index = range.index;
    if (key === Keyboard.keys.RIGHT) {
      index += range.length + 1;
    }

    var _quill$getLeaf3 = this.quill.getLeaf(index),
        _quill$getLeaf4 = _slicedToArray(_quill$getLeaf3, 1),
        leaf = _quill$getLeaf4[0];

    if (!(leaf instanceof _parchment2.default.Embed)) return true;
    if (key === Keyboard.keys.LEFT) {
      if (shiftKey) {
        this.quill.setSelection(range.index - 1, range.length + 1, _quill2.default.sources.USER);
      } else {
        this.quill.setSelection(range.index - 1, _quill2.default.sources.USER);
      }
    } else {
      if (shiftKey) {
        this.quill.setSelection(range.index, range.length + 1, _quill2.default.sources.USER);
      } else {
        this.quill.setSelection(range.index + range.length + 1, _quill2.default.sources.USER);
      }
    }
    return false;
  }), _ref3;
}

function handleBackspace(range, context) {
  if (range.index === 0 || this.quill.getLength() <= 1) return;

  var _quill$getLine11 = this.quill.getLine(range.index),
      _quill$getLine12 = _slicedToArray(_quill$getLine11, 1),
      line = _quill$getLine12[0];

  var formats = {};
  if (context.offset === 0) {
    var _quill$getLine13 = this.quill.getLine(range.index - 1),
        _quill$getLine14 = _slicedToArray(_quill$getLine13, 1),
        prev = _quill$getLine14[0];

    if (prev != null && prev.length() > 1) {
      var curFormats = line.formats();
      var prevFormats = this.quill.getFormat(range.index - 1, 1);
      formats = _op2.default.attributes.diff(curFormats, prevFormats) || {};
    }
  }
  // Check for astral symbols
  var length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
  this.quill.deleteText(range.index - length, length, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index - length, length, formats, _quill2.default.sources.USER);
  }
  this.quill.focus();
}

function handleDelete(range, context) {
  // Check for astral symbols
  var length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
  if (range.index >= this.quill.getLength() - length) return;
  var formats = {},
      nextLength = 0;

  var _quill$getLine15 = this.quill.getLine(range.index),
      _quill$getLine16 = _slicedToArray(_quill$getLine15, 1),
      line = _quill$getLine16[0];

  if (context.offset >= line.length() - 1) {
    var _quill$getLine17 = this.quill.getLine(range.index + 1),
        _quill$getLine18 = _slicedToArray(_quill$getLine17, 1),
        next = _quill$getLine18[0];

    if (next) {
      var curFormats = line.formats();
      var nextFormats = this.quill.getFormat(range.index, 1);
      formats = _op2.default.attributes.diff(curFormats, nextFormats) || {};
      nextLength = next.length();
    }
  }
  this.quill.deleteText(range.index, length, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index + nextLength - 1, length, formats, _quill2.default.sources.USER);
  }
}

function handleDeleteRange(range) {
  var lines = this.quill.getLines(range);
  var formats = {};
  if (lines.length > 1) {
    var firstFormats = lines[0].formats();
    var lastFormats = lines[lines.length - 1].formats();
    formats = _op2.default.attributes.diff(lastFormats, firstFormats) || {};
  }
  this.quill.deleteText(range, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index, 1, formats, _quill2.default.sources.USER);
  }
  this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
  this.quill.focus();
}

function handleEnter(range, context) {
  var _this3 = this;

  if (range.length > 0) {
    this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
  }
  var lineFormats = Object.keys(context.format).reduce(function (lineFormats, format) {
    if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
      lineFormats[format] = context.format[format];
    }
    return lineFormats;
  }, {});
  this.quill.insertText(range.index, '\n', lineFormats, _quill2.default.sources.USER);
  // Earlier scroll.deleteAt might have messed up our selection,
  // so insertText's built in selection preservation is not reliable
  this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
  this.quill.focus();
  Object.keys(context.format).forEach(function (name) {
    if (lineFormats[name] != null) return;
    if (Array.isArray(context.format[name])) return;
    if (name === 'link') return;
    _this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
  });
}

function makeCodeBlockHandler(indent) {
  return {
    key: Keyboard.keys.TAB,
    shiftKey: !indent,
    format: { 'code-block': true },
    handler: function handler(range) {
      var CodeBlock = _parchment2.default.query('code-block');
      var index = range.index,
          length = range.length;

      var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index),
          _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
          block = _quill$scroll$descend2[0],
          offset = _quill$scroll$descend2[1];

      if (block == null) return;
      var scrollIndex = this.quill.getIndex(block);
      var start = block.newlineIndex(offset, true) + 1;
      var end = block.newlineIndex(scrollIndex + offset + length);
      var lines = block.domNode.textContent.slice(start, end).split('\n');
      offset = 0;
      lines.forEach(function (line, i) {
        if (indent) {
          block.insertAt(start + offset, CodeBlock.TAB);
          offset += CodeBlock.TAB.length;
          if (i === 0) {
            index += CodeBlock.TAB.length;
          } else {
            length += CodeBlock.TAB.length;
          }
        } else if (line.startsWith(CodeBlock.TAB)) {
          block.deleteAt(start + offset, CodeBlock.TAB.length);
          offset -= CodeBlock.TAB.length;
          if (i === 0) {
            index -= CodeBlock.TAB.length;
          } else {
            length -= CodeBlock.TAB.length;
          }
        }
        offset += line.length + 1;
      });
      this.quill.update(_quill2.default.sources.USER);
      this.quill.setSelection(index, length, _quill2.default.sources.SILENT);
    }
  };
}

function makeFormatHandler(format) {
  return {
    key: format[0].toUpperCase(),
    shortKey: true,
    handler: function handler(range, context) {
      this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
    }
  };
}

function normalize(binding) {
  if (typeof binding === 'string' || typeof binding === 'number') {
    return normalize({ key: binding });
  }
  if ((typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) === 'object') {
    binding = (0, _clone2.default)(binding, false);
  }
  if (typeof binding.key === 'string') {
    if (Keyboard.keys[binding.key.toUpperCase()] != null) {
      binding.key = Keyboard.keys[binding.key.toUpperCase()];
    } else if (binding.key.length === 1) {
      binding.key = binding.key.toUpperCase().charCodeAt(0);
    } else {
      return null;
    }
  }
  if (binding.shortKey) {
    binding[SHORTKEY] = binding.shortKey;
    delete binding.shortKey;
  }
  return binding;
}

exports.default = Keyboard;
exports.SHORTKEY = SHORTKEY;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cursor = function (_Parchment$Embed) {
  _inherits(Cursor, _Parchment$Embed);

  _createClass(Cursor, null, [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  function Cursor(domNode, selection) {
    _classCallCheck(this, Cursor);

    var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, domNode));

    _this.selection = selection;
    _this.textNode = document.createTextNode(Cursor.CONTENTS);
    _this.domNode.appendChild(_this.textNode);
    _this._length = 0;
    return _this;
  }

  _createClass(Cursor, [{
    key: 'detach',
    value: function detach() {
      // super.detach() will also clear domNode.__blot
      if (this.parent != null) this.parent.removeChild(this);
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (this._length !== 0) {
        return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
      }
      var target = this,
          index = 0;
      while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
        index += target.offset(target.parent);
        target = target.parent;
      }
      if (target != null) {
        this._length = Cursor.CONTENTS.length;
        target.optimize();
        target.formatAt(index, Cursor.CONTENTS.length, name, value);
        this._length = 0;
      }
    }
  }, {
    key: 'index',
    value: function index(node, offset) {
      if (node === this.textNode) return 0;
      return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'length',
    value: function length() {
      return this._length;
    }
  }, {
    key: 'position',
    value: function position() {
      return [this.textNode, this.textNode.data.length];
    }
  }, {
    key: 'remove',
    value: function remove() {
      _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);
      this.parent = null;
    }
  }, {
    key: 'restore',
    value: function restore() {
      if (this.selection.composing || this.parent == null) return;
      var textNode = this.textNode;
      var range = this.selection.getNativeRange();
      var restoreText = void 0,
          start = void 0,
          end = void 0;
      if (range != null && range.start.node === textNode && range.end.node === textNode) {
        var _ref = [textNode, range.start.offset, range.end.offset];
        restoreText = _ref[0];
        start = _ref[1];
        end = _ref[2];
      }
      // Link format will insert text outside of anchor tag
      while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
        this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
      }
      if (this.textNode.data !== Cursor.CONTENTS) {
        var text = this.textNode.data.split(Cursor.CONTENTS).join('');
        if (this.next instanceof _text2.default) {
          restoreText = this.next.domNode;
          this.next.insertAt(0, text);
          this.textNode.data = Cursor.CONTENTS;
        } else {
          this.textNode.data = text;
          this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
          this.textNode = document.createTextNode(Cursor.CONTENTS);
          this.domNode.appendChild(this.textNode);
        }
      }
      this.remove();
      if (start != null) {
        var _map = [start, end].map(function (offset) {
          return Math.max(0, Math.min(restoreText.data.length, offset - 1));
        });

        var _map2 = _slicedToArray(_map, 2);

        start = _map2[0];
        end = _map2[1];

        return {
          startNode: restoreText,
          startOffset: start,
          endNode: restoreText,
          endOffset: end
        };
      }
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      if (mutations.some(function (mutation) {
        return mutation.type === 'characterData' && mutation.target === _this2.textNode;
      })) {
        var range = this.restore();
        if (range) context.range = range;
      }
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }]);

  return Cursor;
}(_parchment2.default.Embed);

Cursor.blotName = 'cursor';
Cursor.className = 'ql-cursor';
Cursor.tagName = 'span';
Cursor.CONTENTS = '\uFEFF'; // Zero width no break space


exports.default = Cursor;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Parchment$Container) {
  _inherits(Container, _Parchment$Container);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  return Container;
}(_parchment2.default.Container);

Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];

exports.default = Container;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorAttributor = function (_Parchment$Attributor) {
  _inherits(ColorAttributor, _Parchment$Attributor);

  function ColorAttributor() {
    _classCallCheck(this, ColorAttributor);

    return _possibleConstructorReturn(this, (ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(this, arguments));
  }

  _createClass(ColorAttributor, [{
    key: 'value',
    value: function value(domNode) {
      var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);
      if (!value.startsWith('rgb(')) return value;
      value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
      return '#' + value.split(',').map(function (component) {
        return ('00' + parseInt(component).toString(16)).slice(-2);
      }).join('');
    }
  }]);

  return ColorAttributor;
}(_parchment2.default.Attributor.Style);

var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
  scope: _parchment2.default.Scope.INLINE
});
var ColorStyle = new ColorAttributor('color', 'color', {
  scope: _parchment2.default.Scope.INLINE
});

exports.ColorAttributor = ColorAttributor;
exports.ColorClass = ColorClass;
exports.ColorStyle = ColorStyle;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitize = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_Inline) {
  _inherits(Link, _Inline);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'format',
    value: function format(name, value) {
      if (name !== this.statics.blotName || !value) return _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'format', this).call(this, name, value);
      value = this.constructor.sanitize(value);
      this.domNode.setAttribute('href', value);
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Link.__proto__ || Object.getPrototypeOf(Link), 'create', this).call(this, value);
      value = this.sanitize(value);
      node.setAttribute('href', value);
      node.setAttribute('target', '_blank');
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return domNode.getAttribute('href');
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return _sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
    }
  }]);

  return Link;
}(_inline2.default);

Link.blotName = 'link';
Link.tagName = 'A';
Link.SANITIZED_URL = 'about:blank';
Link.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];

function _sanitize(url, protocols) {
  var anchor = document.createElement('a');
  anchor.href = url;
  var protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}

exports.default = Link;
exports.sanitize = _sanitize;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _dropdown = __webpack_require__(107);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var optionsCounter = 0;

function toggleAriaAttribute(element, attribute) {
  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));
}

var Picker = function () {
  function Picker(select) {
    var _this = this;

    _classCallCheck(this, Picker);

    this.select = select;
    this.container = document.createElement('span');
    this.buildPicker();
    this.select.style.display = 'none';
    this.select.parentNode.insertBefore(this.container, this.select);

    this.label.addEventListener('mousedown', function () {
      _this.togglePicker();
    });
    this.label.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        // Allows the "Enter" key to open the picker
        case _keyboard2.default.keys.ENTER:
          _this.togglePicker();
          break;

        // Allows the "Escape" key to close the picker
        case _keyboard2.default.keys.ESCAPE:
          _this.escape();
          event.preventDefault();
          break;
        default:
      }
    });
    this.select.addEventListener('change', this.update.bind(this));
  }

  _createClass(Picker, [{
    key: 'togglePicker',
    value: function togglePicker() {
      this.container.classList.toggle('ql-expanded');
      // Toggle aria-expanded and aria-hidden to make the picker accessible
      toggleAriaAttribute(this.label, 'aria-expanded');
      toggleAriaAttribute(this.options, 'aria-hidden');
    }
  }, {
    key: 'buildItem',
    value: function buildItem(option) {
      var _this2 = this;

      var item = document.createElement('span');
      item.tabIndex = '0';
      item.setAttribute('role', 'button');

      item.classList.add('ql-picker-item');
      if (option.hasAttribute('value')) {
        item.setAttribute('data-value', option.getAttribute('value'));
      }
      if (option.textContent) {
        item.setAttribute('data-label', option.textContent);
      }
      item.addEventListener('click', function () {
        _this2.selectItem(item, true);
      });
      item.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
          // Allows the "Enter" key to select an item
          case _keyboard2.default.keys.ENTER:
            _this2.selectItem(item, true);
            event.preventDefault();
            break;

          // Allows the "Escape" key to close the picker
          case _keyboard2.default.keys.ESCAPE:
            _this2.escape();
            event.preventDefault();
            break;
          default:
        }
      });

      return item;
    }
  }, {
    key: 'buildLabel',
    value: function buildLabel() {
      var label = document.createElement('span');
      label.classList.add('ql-picker-label');
      label.innerHTML = _dropdown2.default;
      label.tabIndex = '0';
      label.setAttribute('role', 'button');
      label.setAttribute('aria-expanded', 'false');
      this.container.appendChild(label);
      return label;
    }
  }, {
    key: 'buildOptions',
    value: function buildOptions() {
      var _this3 = this;

      var options = document.createElement('span');
      options.classList.add('ql-picker-options');

      // Don't want screen readers to read this until options are visible
      options.setAttribute('aria-hidden', 'true');
      options.tabIndex = '-1';

      // Need a unique id for aria-controls
      options.id = 'ql-picker-options-' + optionsCounter;
      optionsCounter += 1;
      this.label.setAttribute('aria-controls', options.id);

      this.options = options;

      [].slice.call(this.select.options).forEach(function (option) {
        var item = _this3.buildItem(option);
        options.appendChild(item);
        if (option.selected === true) {
          _this3.selectItem(item);
        }
      });
      this.container.appendChild(options);
    }
  }, {
    key: 'buildPicker',
    value: function buildPicker() {
      var _this4 = this;

      [].slice.call(this.select.attributes).forEach(function (item) {
        _this4.container.setAttribute(item.name, item.value);
      });
      this.container.classList.add('ql-picker');
      this.label = this.buildLabel();
      this.buildOptions();
    }
  }, {
    key: 'escape',
    value: function escape() {
      var _this5 = this;

      // Close menu and return focus to trigger label
      this.close();
      // Need setTimeout for accessibility to ensure that the browser executes
      // focus on the next process thread and after any DOM content changes
      setTimeout(function () {
        return _this5.label.focus();
      }, 1);
    }
  }, {
    key: 'close',
    value: function close() {
      this.container.classList.remove('ql-expanded');
      this.label.setAttribute('aria-expanded', 'false');
      this.options.setAttribute('aria-hidden', 'true');
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item) {
      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var selected = this.container.querySelector('.ql-selected');
      if (item === selected) return;
      if (selected != null) {
        selected.classList.remove('ql-selected');
      }
      if (item == null) return;
      item.classList.add('ql-selected');
      this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);
      if (item.hasAttribute('data-value')) {
        this.label.setAttribute('data-value', item.getAttribute('data-value'));
      } else {
        this.label.removeAttribute('data-value');
      }
      if (item.hasAttribute('data-label')) {
        this.label.setAttribute('data-label', item.getAttribute('data-label'));
      } else {
        this.label.removeAttribute('data-label');
      }
      if (trigger) {
        if (typeof Event === 'function') {
          this.select.dispatchEvent(new Event('change'));
        } else if ((typeof Event === 'undefined' ? 'undefined' : _typeof(Event)) === 'object') {
          // IE11
          var event = document.createEvent('Event');
          event.initEvent('change', true, true);
          this.select.dispatchEvent(event);
        }
        this.close();
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var option = void 0;
      if (this.select.selectedIndex > -1) {
        var item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
        option = this.select.options[this.select.selectedIndex];
        this.selectItem(item);
      } else {
        this.selectItem(null);
      }
      var isActive = option != null && option !== this.select.querySelector('option[selected]');
      this.label.classList.toggle('ql-active', isActive);
    }
  }]);

  return Picker;
}();

exports.default = Picker;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(16);

var _break2 = _interopRequireDefault(_break);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

var _cursor = __webpack_require__(24);

var _cursor2 = _interopRequireDefault(_cursor);

var _embed = __webpack_require__(35);

var _embed2 = _interopRequireDefault(_embed);

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

var _scroll = __webpack_require__(22);

var _scroll2 = _interopRequireDefault(_scroll);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

var _clipboard = __webpack_require__(55);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _history = __webpack_require__(42);

var _history2 = _interopRequireDefault(_history);

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_quill2.default.register({
  'blots/block': _block2.default,
  'blots/block/embed': _block.BlockEmbed,
  'blots/break': _break2.default,
  'blots/container': _container2.default,
  'blots/cursor': _cursor2.default,
  'blots/embed': _embed2.default,
  'blots/inline': _inline2.default,
  'blots/scroll': _scroll2.default,
  'blots/text': _text2.default,

  'modules/clipboard': _clipboard2.default,
  'modules/history': _history2.default,
  'modules/keyboard': _keyboard2.default
});

_parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);

exports.default = _quill2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __webpack_require__(1);
var ShadowBlot = /** @class */ (function () {
    function ShadowBlot(domNode) {
        this.domNode = domNode;
        // @ts-ignore
        this.domNode[Registry.DATA_KEY] = { blot: this };
    }
    Object.defineProperty(ShadowBlot.prototype, "statics", {
        // Hack for accessing inherited static methods
        get: function () {
            return this.constructor;
        },
        enumerable: true,
        configurable: true
    });
    ShadowBlot.create = function (value) {
        if (this.tagName == null) {
            throw new Registry.ParchmentError('Blot definition missing tagName');
        }
        var node;
        if (Array.isArray(this.tagName)) {
            if (typeof value === 'string') {
                value = value.toUpperCase();
                if (parseInt(value).toString() === value) {
                    value = parseInt(value);
                }
            }
            if (typeof value === 'number') {
                node = document.createElement(this.tagName[value - 1]);
            }
            else if (this.tagName.indexOf(value) > -1) {
                node = document.createElement(value);
            }
            else {
                node = document.createElement(this.tagName[0]);
            }
        }
        else {
            node = document.createElement(this.tagName);
        }
        if (this.className) {
            node.classList.add(this.className);
        }
        return node;
    };
    ShadowBlot.prototype.attach = function () {
        if (this.parent != null) {
            this.scroll = this.parent.scroll;
        }
    };
    ShadowBlot.prototype.clone = function () {
        var domNode = this.domNode.cloneNode(false);
        return Registry.create(domNode);
    };
    ShadowBlot.prototype.detach = function () {
        if (this.parent != null)
            this.parent.removeChild(this);
        // @ts-ignore
        delete this.domNode[Registry.DATA_KEY];
    };
    ShadowBlot.prototype.deleteAt = function (index, length) {
        var blot = this.isolate(index, length);
        blot.remove();
    };
    ShadowBlot.prototype.formatAt = function (index, length, name, value) {
        var blot = this.isolate(index, length);
        if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
            blot.wrap(name, value);
        }
        else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
            var parent = Registry.create(this.statics.scope);
            blot.wrap(parent);
            parent.format(name, value);
        }
    };
    ShadowBlot.prototype.insertAt = function (index, value, def) {
        var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
        var ref = this.split(index);
        this.parent.insertBefore(blot, ref);
    };
    ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
        if (refBlot === void 0) { refBlot = null; }
        if (this.parent != null) {
            this.parent.children.remove(this);
        }
        var refDomNode = null;
        parentBlot.children.insertBefore(this, refBlot);
        if (refBlot != null) {
            refDomNode = refBlot.domNode;
        }
        if (this.domNode.parentNode != parentBlot.domNode ||
            this.domNode.nextSibling != refDomNode) {
            parentBlot.domNode.insertBefore(this.domNode, refDomNode);
        }
        this.parent = parentBlot;
        this.attach();
    };
    ShadowBlot.prototype.isolate = function (index, length) {
        var target = this.split(index);
        target.split(length);
        return target;
    };
    ShadowBlot.prototype.length = function () {
        return 1;
    };
    ShadowBlot.prototype.offset = function (root) {
        if (root === void 0) { root = this.parent; }
        if (this.parent == null || this == root)
            return 0;
        return this.parent.children.offset(this) + this.parent.offset(root);
    };
    ShadowBlot.prototype.optimize = function (context) {
        // TODO clean up once we use WeakMap
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY] != null) {
            // @ts-ignore
            delete this.domNode[Registry.DATA_KEY].mutations;
        }
    };
    ShadowBlot.prototype.remove = function () {
        if (this.domNode.parentNode != null) {
            this.domNode.parentNode.removeChild(this.domNode);
        }
        this.detach();
    };
    ShadowBlot.prototype.replace = function (target) {
        if (target.parent == null)
            return;
        target.parent.insertBefore(this, target.next);
        target.remove();
    };
    ShadowBlot.prototype.replaceWith = function (name, value) {
        var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
        replacement.replace(this);
        return replacement;
    };
    ShadowBlot.prototype.split = function (index, force) {
        return index === 0 ? this : this.next;
    };
    ShadowBlot.prototype.update = function (mutations, context) {
        // Nothing to do by default
    };
    ShadowBlot.prototype.wrap = function (name, value) {
        var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
        if (this.parent != null) {
            this.parent.insertBefore(wrapper, this.next);
        }
        wrapper.appendChild(this);
        return wrapper;
    };
    ShadowBlot.blotName = 'abstract';
    return ShadowBlot;
}());
exports.default = ShadowBlot;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
var class_1 = __webpack_require__(32);
var style_1 = __webpack_require__(33);
var Registry = __webpack_require__(1);
var AttributorStore = /** @class */ (function () {
    function AttributorStore(domNode) {
        this.attributes = {};
        this.domNode = domNode;
        this.build();
    }
    AttributorStore.prototype.attribute = function (attribute, value) {
        // verb
        if (value) {
            if (attribute.add(this.domNode, value)) {
                if (attribute.value(this.domNode) != null) {
                    this.attributes[attribute.attrName] = attribute;
                }
                else {
                    delete this.attributes[attribute.attrName];
                }
            }
        }
        else {
            attribute.remove(this.domNode);
            delete this.attributes[attribute.attrName];
        }
    };
    AttributorStore.prototype.build = function () {
        var _this = this;
        this.attributes = {};
        var attributes = attributor_1.default.keys(this.domNode);
        var classes = class_1.default.keys(this.domNode);
        var styles = style_1.default.keys(this.domNode);
        attributes
            .concat(classes)
            .concat(styles)
            .forEach(function (name) {
            var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
            if (attr instanceof attributor_1.default) {
                _this.attributes[attr.attrName] = attr;
            }
        });
    };
    AttributorStore.prototype.copy = function (target) {
        var _this = this;
        Object.keys(this.attributes).forEach(function (key) {
            var value = _this.attributes[key].value(_this.domNode);
            target.format(key, value);
        });
    };
    AttributorStore.prototype.move = function (target) {
        var _this = this;
        this.copy(target);
        Object.keys(this.attributes).forEach(function (key) {
            _this.attributes[key].remove(_this.domNode);
        });
        this.attributes = {};
    };
    AttributorStore.prototype.values = function () {
        var _this = this;
        return Object.keys(this.attributes).reduce(function (attributes, name) {
            attributes[name] = _this.attributes[name].value(_this.domNode);
            return attributes;
        }, {});
    };
    return AttributorStore;
}());
exports.default = AttributorStore;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
function match(node, prefix) {
    var className = node.getAttribute('class') || '';
    return className.split(/\s+/).filter(function (name) {
        return name.indexOf(prefix + "-") === 0;
    });
}
var ClassAttributor = /** @class */ (function (_super) {
    __extends(ClassAttributor, _super);
    function ClassAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassAttributor.keys = function (node) {
        return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
            return name
                .split('-')
                .slice(0, -1)
                .join('-');
        });
    };
    ClassAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        this.remove(node);
        node.classList.add(this.keyName + "-" + value);
        return true;
    };
    ClassAttributor.prototype.remove = function (node) {
        var matches = match(node, this.keyName);
        matches.forEach(function (name) {
            node.classList.remove(name);
        });
        if (node.classList.length === 0) {
            node.removeAttribute('class');
        }
    };
    ClassAttributor.prototype.value = function (node) {
        var result = match(node, this.keyName)[0] || '';
        var value = result.slice(this.keyName.length + 1); // +1 for hyphen
        return this.canAdd(node, value) ? value : '';
    };
    return ClassAttributor;
}(attributor_1.default));
exports.default = ClassAttributor;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(12);
function camelize(name) {
    var parts = name.split('-');
    var rest = parts
        .slice(1)
        .map(function (part) {
        return part[0].toUpperCase() + part.slice(1);
    })
        .join('');
    return parts[0] + rest;
}
var StyleAttributor = /** @class */ (function (_super) {
    __extends(StyleAttributor, _super);
    function StyleAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyleAttributor.keys = function (node) {
        return (node.getAttribute('style') || '').split(';').map(function (value) {
            var arr = value.split(':');
            return arr[0].trim();
        });
    };
    StyleAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        // @ts-ignore
        node.style[camelize(this.keyName)] = value;
        return true;
    };
    StyleAttributor.prototype.remove = function (node) {
        // @ts-ignore
        node.style[camelize(this.keyName)] = '';
        if (!node.getAttribute('style')) {
            node.removeAttribute('style');
        }
    };
    StyleAttributor.prototype.value = function (node) {
        // @ts-ignore
        var value = node.style[camelize(this.keyName)];
        return this.canAdd(node, value) ? value : '';
    };
    return StyleAttributor;
}(attributor_1.default));
exports.default = StyleAttributor;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
  function Theme(quill, options) {
    _classCallCheck(this, Theme);

    this.quill = quill;
    this.options = options;
    this.modules = {};
  }

  _createClass(Theme, [{
    key: 'init',
    value: function init() {
      var _this = this;

      Object.keys(this.options.modules).forEach(function (name) {
        if (_this.modules[name] == null) {
          _this.addModule(name);
        }
      });
    }
  }, {
    key: 'addModule',
    value: function addModule(name) {
      var moduleClass = this.quill.constructor.import('modules/' + name);
      this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
      return this.modules[name];
    }
  }]);

  return Theme;
}();

Theme.DEFAULTS = {
  modules: {}
};
Theme.themes = {
  'default': Theme
};

exports.default = Theme;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GUARD_TEXT = '\uFEFF';

var Embed = function (_Parchment$Embed) {
  _inherits(Embed, _Parchment$Embed);

  function Embed(node) {
    _classCallCheck(this, Embed);

    var _this = _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).call(this, node));

    _this.contentNode = document.createElement('span');
    _this.contentNode.setAttribute('contenteditable', false);
    [].slice.call(_this.domNode.childNodes).forEach(function (childNode) {
      _this.contentNode.appendChild(childNode);
    });
    _this.leftGuard = document.createTextNode(GUARD_TEXT);
    _this.rightGuard = document.createTextNode(GUARD_TEXT);
    _this.domNode.appendChild(_this.leftGuard);
    _this.domNode.appendChild(_this.contentNode);
    _this.domNode.appendChild(_this.rightGuard);
    return _this;
  }

  _createClass(Embed, [{
    key: 'index',
    value: function index(node, offset) {
      if (node === this.leftGuard) return 0;
      if (node === this.rightGuard) return 1;
      return _get(Embed.prototype.__proto__ || Object.getPrototypeOf(Embed.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'restore',
    value: function restore(node) {
      var range = void 0,
          textNode = void 0;
      var text = node.data.split(GUARD_TEXT).join('');
      if (node === this.leftGuard) {
        if (this.prev instanceof _text2.default) {
          var prevLength = this.prev.length();
          this.prev.insertAt(prevLength, text);
          range = {
            startNode: this.prev.domNode,
            startOffset: prevLength + text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(_parchment2.default.create(textNode), this);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      } else if (node === this.rightGuard) {
        if (this.next instanceof _text2.default) {
          this.next.insertAt(0, text);
          range = {
            startNode: this.next.domNode,
            startOffset: text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(_parchment2.default.create(textNode), this.next);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      }
      node.data = GUARD_TEXT;
      return range;
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      mutations.forEach(function (mutation) {
        if (mutation.type === 'characterData' && (mutation.target === _this2.leftGuard || mutation.target === _this2.rightGuard)) {
          var range = _this2.restore(mutation.target);
          if (range) context.range = range;
        }
      });
    }
  }]);

  return Embed;
}(_parchment2.default.Embed);

exports.default = Embed;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignStyle = exports.AlignClass = exports.AlignAttribute = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: ['right', 'center', 'justify']
};

var AlignAttribute = new _parchment2.default.Attributor.Attribute('align', 'align', config);
var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);

exports.AlignAttribute = AlignAttribute;
exports.AlignClass = AlignClass;
exports.AlignStyle = AlignStyle;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundStyle = exports.BackgroundClass = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _color = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
  scope: _parchment2.default.Scope.INLINE
});
var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
  scope: _parchment2.default.Scope.INLINE
});

exports.BackgroundClass = BackgroundClass;
exports.BackgroundStyle = BackgroundStyle;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: ['rtl']
};

var DirectionAttribute = new _parchment2.default.Attributor.Attribute('direction', 'dir', config);
var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);

exports.DirectionAttribute = DirectionAttribute;
exports.DirectionClass = DirectionClass;
exports.DirectionStyle = DirectionStyle;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontClass = exports.FontStyle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['serif', 'monospace']
};

var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);

var FontStyleAttributor = function (_Parchment$Attributor) {
  _inherits(FontStyleAttributor, _Parchment$Attributor);

  function FontStyleAttributor() {
    _classCallCheck(this, FontStyleAttributor);

    return _possibleConstructorReturn(this, (FontStyleAttributor.__proto__ || Object.getPrototypeOf(FontStyleAttributor)).apply(this, arguments));
  }

  _createClass(FontStyleAttributor, [{
    key: 'value',
    value: function value(node) {
      return _get(FontStyleAttributor.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor.prototype), 'value', this).call(this, node).replace(/["']/g, '');
    }
  }]);

  return FontStyleAttributor;
}(_parchment2.default.Attributor.Style);

var FontStyle = new FontStyleAttributor('font', 'font-family', config);

exports.FontStyle = FontStyle;
exports.FontClass = FontClass;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizeStyle = exports.SizeClass = undefined;

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['small', 'large', 'huge']
});
var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['10px', '18px', '32px']
});

exports.SizeClass = SizeClass;
exports.SizeStyle = SizeStyle;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'align': {
    '': __webpack_require__(76),
    'center': __webpack_require__(77),
    'right': __webpack_require__(78),
    'justify': __webpack_require__(79)
  },
  'background': __webpack_require__(80),
  'blockquote': __webpack_require__(81),
  'bold': __webpack_require__(82),
  'clean': __webpack_require__(83),
  'code': __webpack_require__(58),
  'code-block': __webpack_require__(58),
  'color': __webpack_require__(84),
  'direction': {
    '': __webpack_require__(85),
    'rtl': __webpack_require__(86)
  },
  'float': {
    'center': __webpack_require__(87),
    'full': __webpack_require__(88),
    'left': __webpack_require__(89),
    'right': __webpack_require__(90)
  },
  'formula': __webpack_require__(91),
  'header': {
    '1': __webpack_require__(92),
    '2': __webpack_require__(93)
  },
  'italic': __webpack_require__(94),
  'image': __webpack_require__(95),
  'indent': {
    '+1': __webpack_require__(96),
    '-1': __webpack_require__(97)
  },
  'link': __webpack_require__(98),
  'list': {
    'ordered': __webpack_require__(99),
    'bullet': __webpack_require__(100),
    'check': __webpack_require__(101)
  },
  'script': {
    'sub': __webpack_require__(102),
    'super': __webpack_require__(103)
  },
  'strike': __webpack_require__(104),
  'underline': __webpack_require__(105),
  'video': __webpack_require__(106)
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastChangeIndex = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_Module) {
  _inherits(History, _Module);

  function History(quill, options) {
    _classCallCheck(this, History);

    var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, quill, options));

    _this.lastRecorded = 0;
    _this.ignoreChange = false;
    _this.clear();
    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (eventName, delta, oldDelta, source) {
      if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;
      if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
        _this.record(delta, oldDelta);
      } else {
        _this.transform(delta);
      }
    });
    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true }, _this.undo.bind(_this));
    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true, shiftKey: true }, _this.redo.bind(_this));
    if (/Win/i.test(navigator.platform)) {
      _this.quill.keyboard.addBinding({ key: 'Y', shortKey: true }, _this.redo.bind(_this));
    }
    return _this;
  }

  _createClass(History, [{
    key: 'change',
    value: function change(source, dest) {
      if (this.stack[source].length === 0) return;
      var delta = this.stack[source].pop();
      this.stack[dest].push(delta);
      this.lastRecorded = 0;
      this.ignoreChange = true;
      this.quill.updateContents(delta[source], _quill2.default.sources.USER);
      this.ignoreChange = false;
      var index = getLastChangeIndex(delta[source]);
      this.quill.setSelection(index);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.stack = { undo: [], redo: [] };
    }
  }, {
    key: 'cutoff',
    value: function cutoff() {
      this.lastRecorded = 0;
    }
  }, {
    key: 'record',
    value: function record(changeDelta, oldDelta) {
      if (changeDelta.ops.length === 0) return;
      this.stack.redo = [];
      var undoDelta = this.quill.getContents().diff(oldDelta);
      var timestamp = Date.now();
      if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
        var delta = this.stack.undo.pop();
        undoDelta = undoDelta.compose(delta.undo);
        changeDelta = delta.redo.compose(changeDelta);
      } else {
        this.lastRecorded = timestamp;
      }
      this.stack.undo.push({
        redo: changeDelta,
        undo: undoDelta
      });
      if (this.stack.undo.length > this.options.maxStack) {
        this.stack.undo.shift();
      }
    }
  }, {
    key: 'redo',
    value: function redo() {
      this.change('redo', 'undo');
    }
  }, {
    key: 'transform',
    value: function transform(delta) {
      this.stack.undo.forEach(function (change) {
        change.undo = delta.transform(change.undo, true);
        change.redo = delta.transform(change.redo, true);
      });
      this.stack.redo.forEach(function (change) {
        change.undo = delta.transform(change.undo, true);
        change.redo = delta.transform(change.redo, true);
      });
    }
  }, {
    key: 'undo',
    value: function undo() {
      this.change('undo', 'redo');
    }
  }]);

  return History;
}(_module2.default);

History.DEFAULTS = {
  delay: 1000,
  maxStack: 100,
  userOnly: false
};

function endsWithNewlineChange(delta) {
  var lastOp = delta.ops[delta.ops.length - 1];
  if (lastOp == null) return false;
  if (lastOp.insert != null) {
    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
  }
  if (lastOp.attributes != null) {
    return Object.keys(lastOp.attributes).some(function (attr) {
      return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
    });
  }
  return false;
}

function getLastChangeIndex(delta) {
  var deleteLength = delta.reduce(function (length, op) {
    length += op.delete || 0;
    return length;
  }, 0);
  var changeIndex = delta.length() - deleteLength;
  if (endsWithNewlineChange(delta)) {
    changeIndex -= 1;
  }
  return changeIndex;
}

exports.default = History;
exports.getLastChangeIndex = getLastChangeIndex;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseTooltip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _keyboard = __webpack_require__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _theme = __webpack_require__(34);

var _theme2 = _interopRequireDefault(_theme);

var _colorPicker = __webpack_require__(59);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _iconPicker = __webpack_require__(60);

var _iconPicker2 = _interopRequireDefault(_iconPicker);

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

var _tooltip = __webpack_require__(61);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ALIGNS = [false, 'center', 'right', 'justify'];

var COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];

var FONTS = [false, 'serif', 'monospace'];

var HEADERS = ['1', '2', '3', false];

var SIZES = ['small', false, 'large', 'huge'];

var BaseTheme = function (_Theme) {
  _inherits(BaseTheme, _Theme);

  function BaseTheme(quill, options) {
    _classCallCheck(this, BaseTheme);

    var _this = _possibleConstructorReturn(this, (BaseTheme.__proto__ || Object.getPrototypeOf(BaseTheme)).call(this, quill, options));

    var listener = function listener(e) {
      if (!document.body.contains(quill.root)) {
        return document.body.removeEventListener('click', listener);
      }
      if (_this.tooltip != null && !_this.tooltip.root.contains(e.target) && document.activeElement !== _this.tooltip.textbox && !_this.quill.hasFocus()) {
        _this.tooltip.hide();
      }
      if (_this.pickers != null) {
        _this.pickers.forEach(function (picker) {
          if (!picker.container.contains(e.target)) {
            picker.close();
          }
        });
      }
    };
    quill.emitter.listenDOM('click', document.body, listener);
    return _this;
  }

  _createClass(BaseTheme, [{
    key: 'addModule',
    value: function addModule(name) {
      var module = _get(BaseTheme.prototype.__proto__ || Object.getPrototypeOf(BaseTheme.prototype), 'addModule', this).call(this, name);
      if (name === 'toolbar') {
        this.extendToolbar(module);
      }
      return module;
    }
  }, {
    key: 'buildButtons',
    value: function buildButtons(buttons, icons) {
      buttons.forEach(function (button) {
        var className = button.getAttribute('class') || '';
        className.split(/\s+/).forEach(function (name) {
          if (!name.startsWith('ql-')) return;
          name = name.slice('ql-'.length);
          if (icons[name] == null) return;
          if (name === 'direction') {
            button.innerHTML = icons[name][''] + icons[name]['rtl'];
          } else if (typeof icons[name] === 'string') {
            button.innerHTML = icons[name];
          } else {
            var value = button.value || '';
            if (value != null && icons[name][value]) {
              button.innerHTML = icons[name][value];
            }
          }
        });
      });
    }
  }, {
    key: 'buildPickers',
    value: function buildPickers(selects, icons) {
      var _this2 = this;

      this.pickers = selects.map(function (select) {
        if (select.classList.contains('ql-align')) {
          if (select.querySelector('option') == null) {
            fillSelect(select, ALIGNS);
          }
          return new _iconPicker2.default(select, icons.align);
        } else if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
          var format = select.classList.contains('ql-background') ? 'background' : 'color';
          if (select.querySelector('option') == null) {
            fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
          }
          return new _colorPicker2.default(select, icons[format]);
        } else {
          if (select.querySelector('option') == null) {
            if (select.classList.contains('ql-font')) {
              fillSelect(select, FONTS);
            } else if (select.classList.contains('ql-header')) {
              fillSelect(select, HEADERS);
            } else if (select.classList.contains('ql-size')) {
              fillSelect(select, SIZES);
            }
          }
          return new _picker2.default(select);
        }
      });
      var update = function update() {
        _this2.pickers.forEach(function (picker) {
          picker.update();
        });
      };
      this.quill.on(_emitter2.default.events.EDITOR_CHANGE, update);
    }
  }]);

  return BaseTheme;
}(_theme2.default);

BaseTheme.DEFAULTS = (0, _extend2.default)(true, {}, _theme2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula: function formula() {
          this.quill.theme.tooltip.edit('formula');
        },
        image: function image() {
          var _this3 = this;

          var fileInput = this.container.querySelector('input.ql-image[type=file]');
          if (fileInput == null) {
            fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
            fileInput.classList.add('ql-image');
            fileInput.addEventListener('change', function () {
              if (fileInput.files != null && fileInput.files[0] != null) {
                var reader = new FileReader();
                reader.onload = function (e) {
                  var range = _this3.quill.getSelection(true);
                  _this3.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert({ image: e.target.result }), _emitter2.default.sources.USER);
                  _this3.quill.setSelection(range.index + 1, _emitter2.default.sources.SILENT);
                  fileInput.value = "";
                };
                reader.readAsDataURL(fileInput.files[0]);
              }
            });
            this.container.appendChild(fileInput);
          }
          fileInput.click();
        },
        video: function video() {
          this.quill.theme.tooltip.edit('video');
        }
      }
    }
  }
});

var BaseTooltip = function (_Tooltip) {
  _inherits(BaseTooltip, _Tooltip);

  function BaseTooltip(quill, boundsContainer) {
    _classCallCheck(this, BaseTooltip);

    var _this4 = _possibleConstructorReturn(this, (BaseTooltip.__proto__ || Object.getPrototypeOf(BaseTooltip)).call(this, quill, boundsContainer));

    _this4.textbox = _this4.root.querySelector('input[type="text"]');
    _this4.listen();
    return _this4;
  }

  _createClass(BaseTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this5 = this;

      this.textbox.addEventListener('keydown', function (event) {
        if (_keyboard2.default.match(event, 'enter')) {
          _this5.save();
          event.preventDefault();
        } else if (_keyboard2.default.match(event, 'escape')) {
          _this5.cancel();
          event.preventDefault();
        }
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.hide();
    }
  }, {
    key: 'edit',
    value: function edit() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';
      var preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.root.classList.remove('ql-hidden');
      this.root.classList.add('ql-editing');
      if (preview != null) {
        this.textbox.value = preview;
      } else if (mode !== this.root.getAttribute('data-mode')) {
        this.textbox.value = '';
      }
      this.position(this.quill.getBounds(this.quill.selection.savedRange));
      this.textbox.select();
      this.textbox.setAttribute('placeholder', this.textbox.getAttribute('data-' + mode) || '');
      this.root.setAttribute('data-mode', mode);
    }
  }, {
    key: 'restoreFocus',
    value: function restoreFocus() {
      var scrollTop = this.quill.scrollingContainer.scrollTop;
      this.quill.focus();
      this.quill.scrollingContainer.scrollTop = scrollTop;
    }
  }, {
    key: 'save',
    value: function save() {
      var value = this.textbox.value;
      switch (this.root.getAttribute('data-mode')) {
        case 'link':
          {
            var scrollTop = this.quill.root.scrollTop;
            if (this.linkRange) {
              this.quill.formatText(this.linkRange, 'link', value, _emitter2.default.sources.USER);
              delete this.linkRange;
            } else {
              this.restoreFocus();
              this.quill.format('link', value, _emitter2.default.sources.USER);
            }
            this.quill.root.scrollTop = scrollTop;
            break;
          }
        case 'video':
          {
            value = extractVideoUrl(value);
          } // eslint-disable-next-line no-fallthrough
        case 'formula':
          {
            if (!value) break;
            var range = this.quill.getSelection(true);
            if (range != null) {
              var index = range.index + range.length;
              this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _emitter2.default.sources.USER);
              if (this.root.getAttribute('data-mode') === 'formula') {
                this.quill.insertText(index + 1, ' ', _emitter2.default.sources.USER);
              }
              this.quill.setSelection(index + 2, _emitter2.default.sources.USER);
            }
            break;
          }
        default:
      }
      this.textbox.value = '';
      this.hide();
    }
  }]);

  return BaseTooltip;
}(_tooltip2.default);

function extractVideoUrl(url) {
  var match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return (match[1] || 'https') + '://www.youtube.com/embed/' + match[2] + '?showinfo=0';
  }
  if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
    // eslint-disable-line no-cond-assign
    return (match[1] || 'https') + '://player.vimeo.com/video/' + match[2] + '/';
  }
  return url;
}

function fillSelect(select, values) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  values.forEach(function (value) {
    var option = document.createElement('option');
    if (value === defaultValue) {
      option.setAttribute('selected', 'selected');
    } else {
      option.setAttribute('value', value);
    }
    select.appendChild(option);
  });
}

exports.BaseTooltip = BaseTooltip;
exports.default = BaseTheme;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = this.tail = null;
        this.length = 0;
    }
    LinkedList.prototype.append = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        this.insertBefore(nodes[0], null);
        if (nodes.length > 1) {
            this.append.apply(this, nodes.slice(1));
        }
    };
    LinkedList.prototype.contains = function (node) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            if (cur === node)
                return true;
        }
        return false;
    };
    LinkedList.prototype.insertBefore = function (node, refNode) {
        if (!node)
            return;
        node.next = refNode;
        if (refNode != null) {
            node.prev = refNode.prev;
            if (refNode.prev != null) {
                refNode.prev.next = node;
            }
            refNode.prev = node;
            if (refNode === this.head) {
                this.head = node;
            }
        }
        else if (this.tail != null) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        else {
            node.prev = null;
            this.head = this.tail = node;
        }
        this.length += 1;
    };
    LinkedList.prototype.offset = function (target) {
        var index = 0, cur = this.head;
        while (cur != null) {
            if (cur === target)
                return index;
            index += cur.length();
            cur = cur.next;
        }
        return -1;
    };
    LinkedList.prototype.remove = function (node) {
        if (!this.contains(node))
            return;
        if (node.prev != null)
            node.prev.next = node.next;
        if (node.next != null)
            node.next.prev = node.prev;
        if (node === this.head)
            this.head = node.next;
        if (node === this.tail)
            this.tail = node.prev;
        this.length -= 1;
    };
    LinkedList.prototype.iterator = function (curNode) {
        if (curNode === void 0) { curNode = this.head; }
        // TODO use yield when we can
        return function () {
            var ret = curNode;
            if (curNode != null)
                curNode = curNode.next;
            return ret;
        };
    };
    LinkedList.prototype.find = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var cur, next = this.iterator();
        while ((cur = next())) {
            var length = cur.length();
            if (index < length ||
                (inclusive && index === length && (cur.next == null || cur.next.length() !== 0))) {
                return [cur, index];
            }
            index -= length;
        }
        return [null, 0];
    };
    LinkedList.prototype.forEach = function (callback) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            callback(cur);
        }
    };
    LinkedList.prototype.forEachAt = function (index, length, callback) {
        if (length <= 0)
            return;
        var _a = this.find(index), startNode = _a[0], offset = _a[1];
        var cur, curIndex = index - offset, next = this.iterator(startNode);
        while ((cur = next()) && curIndex < index + length) {
            var curLength = cur.length();
            if (index > curIndex) {
                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
            }
            else {
                callback(cur, 0, Math.min(curLength, index + length - curIndex));
            }
            curIndex += curLength;
        }
    };
    LinkedList.prototype.map = function (callback) {
        return this.reduce(function (memo, cur) {
            memo.push(callback(cur));
            return memo;
        }, []);
    };
    LinkedList.prototype.reduce = function (callback, memo) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            memo = callback(memo, cur);
        }
        return memo;
    };
    return LinkedList;
}());
exports.default = LinkedList;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(17);
var Registry = __webpack_require__(1);
var OBSERVER_CONFIG = {
    attributes: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true,
};
var MAX_OPTIMIZE_ITERATIONS = 100;
var ScrollBlot = /** @class */ (function (_super) {
    __extends(ScrollBlot, _super);
    function ScrollBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.scroll = _this;
        _this.observer = new MutationObserver(function (mutations) {
            _this.update(mutations);
        });
        _this.observer.observe(_this.domNode, OBSERVER_CONFIG);
        _this.attach();
        return _this;
    }
    ScrollBlot.prototype.detach = function () {
        _super.prototype.detach.call(this);
        this.observer.disconnect();
    };
    ScrollBlot.prototype.deleteAt = function (index, length) {
        this.update();
        if (index === 0 && length === this.length()) {
            this.children.forEach(function (child) {
                child.remove();
            });
        }
        else {
            _super.prototype.deleteAt.call(this, index, length);
        }
    };
    ScrollBlot.prototype.formatAt = function (index, length, name, value) {
        this.update();
        _super.prototype.formatAt.call(this, index, length, name, value);
    };
    ScrollBlot.prototype.insertAt = function (index, value, def) {
        this.update();
        _super.prototype.insertAt.call(this, index, value, def);
    };
    ScrollBlot.prototype.optimize = function (mutations, context) {
        var _this = this;
        if (mutations === void 0) { mutations = []; }
        if (context === void 0) { context = {}; }
        _super.prototype.optimize.call(this, context);
        // We must modify mutations directly, cannot make copy and then modify
        var records = [].slice.call(this.observer.takeRecords());
        // Array.push currently seems to be implemented by a non-tail recursive function
        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());
        while (records.length > 0)
            mutations.push(records.pop());
        // TODO use WeakMap
        var mark = function (blot, markParent) {
            if (markParent === void 0) { markParent = true; }
            if (blot == null || blot === _this)
                return;
            if (blot.domNode.parentNode == null)
                return;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [];
            }
            if (markParent)
                mark(blot.parent);
        };
        var optimize = function (blot) {
            // Post-order traversal
            if (
            // @ts-ignore
            blot.domNode[Registry.DATA_KEY] == null ||
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations == null) {
                return;
            }
            if (blot instanceof container_1.default) {
                blot.children.forEach(optimize);
            }
            blot.optimize(context);
        };
        var remaining = mutations;
        for (var i = 0; remaining.length > 0; i += 1) {
            if (i >= MAX_OPTIMIZE_ITERATIONS) {
                throw new Error('[Parchment] Maximum optimize iterations reached');
            }
            remaining.forEach(function (mutation) {
                var blot = Registry.find(mutation.target, true);
                if (blot == null)
                    return;
                if (blot.domNode === mutation.target) {
                    if (mutation.type === 'childList') {
                        mark(Registry.find(mutation.previousSibling, false));
                        [].forEach.call(mutation.addedNodes, function (node) {
                            var child = Registry.find(node, false);
                            mark(child, false);
                            if (child instanceof container_1.default) {
                                child.children.forEach(function (grandChild) {
                                    mark(grandChild, false);
                                });
                            }
                        });
                    }
                    else if (mutation.type === 'attributes') {
                        mark(blot.prev);
                    }
                }
                mark(blot);
            });
            this.children.forEach(optimize);
            remaining = [].slice.call(this.observer.takeRecords());
            records = remaining.slice();
            while (records.length > 0)
                mutations.push(records.pop());
        }
    };
    ScrollBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (context === void 0) { context = {}; }
        mutations = mutations || this.observer.takeRecords();
        // TODO use WeakMap
        mutations
            .map(function (mutation) {
            var blot = Registry.find(mutation.target, true);
            if (blot == null)
                return null;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
                return blot;
            }
            else {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
                return null;
            }
        })
            .forEach(function (blot) {
            if (blot == null ||
                blot === _this ||
                //@ts-ignore
                blot.domNode[Registry.DATA_KEY] == null)
                return;
            // @ts-ignore
            blot.update(blot.domNode[Registry.DATA_KEY].mutations || [], context);
        });
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY].mutations != null) {
            // @ts-ignore
            _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations, context);
        }
        this.optimize(mutations, context);
    };
    ScrollBlot.blotName = 'scroll';
    ScrollBlot.defaultChild = 'block';
    ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
    ScrollBlot.tagName = 'DIV';
    return ScrollBlot;
}(container_1.default));
exports.default = ScrollBlot;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(18);
var Registry = __webpack_require__(1);
// Shallow object comparison
function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
    // @ts-ignore
    for (var prop in obj1) {
        // @ts-ignore
        if (obj1[prop] !== obj2[prop])
            return false;
    }
    return true;
}
var InlineBlot = /** @class */ (function (_super) {
    __extends(InlineBlot, _super);
    function InlineBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineBlot.formats = function (domNode) {
        if (domNode.tagName === InlineBlot.tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    InlineBlot.prototype.format = function (name, value) {
        var _this = this;
        if (name === this.statics.blotName && !value) {
            this.children.forEach(function (child) {
                if (!(child instanceof format_1.default)) {
                    child = child.wrap(InlineBlot.blotName, true);
                }
                _this.attributes.copy(child);
            });
            this.unwrap();
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    InlineBlot.prototype.formatAt = function (index, length, name, value) {
        if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
            var blot = this.isolate(index, length);
            blot.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    InlineBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        var formats = this.formats();
        if (Object.keys(formats).length === 0) {
            return this.unwrap(); // unformatted span
        }
        var next = this.next;
        if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
            next.moveChildren(this);
            next.remove();
        }
    };
    InlineBlot.blotName = 'inline';
    InlineBlot.scope = Registry.Scope.INLINE_BLOT;
    InlineBlot.tagName = 'SPAN';
    return InlineBlot;
}(format_1.default));
exports.default = InlineBlot;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(18);
var Registry = __webpack_require__(1);
var BlockBlot = /** @class */ (function (_super) {
    __extends(BlockBlot, _super);
    function BlockBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockBlot.formats = function (domNode) {
        var tagName = Registry.query(BlockBlot.blotName).tagName;
        if (domNode.tagName === tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    BlockBlot.prototype.format = function (name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) == null) {
            return;
        }
        else if (name === this.statics.blotName && !value) {
            this.replaceWith(BlockBlot.blotName);
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    BlockBlot.prototype.formatAt = function (index, length, name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) != null) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    BlockBlot.prototype.insertAt = function (index, value, def) {
        if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
            // Insert text or inline
            _super.prototype.insertAt.call(this, index, value, def);
        }
        else {
            var after = this.split(index);
            var blot = Registry.create(value, def);
            after.parent.insertBefore(blot, after);
        }
    };
    BlockBlot.prototype.update = function (mutations, context) {
        if (navigator.userAgent.match(/Trident/)) {
            this.build();
        }
        else {
            _super.prototype.update.call(this, mutations, context);
        }
    };
    BlockBlot.blotName = 'block';
    BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
    BlockBlot.tagName = 'P';
    return BlockBlot;
}(format_1.default));
exports.default = BlockBlot;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __webpack_require__(19);
var EmbedBlot = /** @class */ (function (_super) {
    __extends(EmbedBlot, _super);
    function EmbedBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmbedBlot.formats = function (domNode) {
        return undefined;
    };
    EmbedBlot.prototype.format = function (name, value) {
        // super.formatAt wraps, which is what we want in general,
        // but this allows subclasses to overwrite for formats
        // that just apply to particular embeds
        _super.prototype.formatAt.call(this, 0, this.length(), name, value);
    };
    EmbedBlot.prototype.formatAt = function (index, length, name, value) {
        if (index === 0 && length === this.length()) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    EmbedBlot.prototype.formats = function () {
        return this.statics.formats(this.domNode);
    };
    return EmbedBlot;
}(leaf_1.default));
exports.default = EmbedBlot;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __webpack_require__(19);
var Registry = __webpack_require__(1);
var TextBlot = /** @class */ (function (_super) {
    __extends(TextBlot, _super);
    function TextBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.text = _this.statics.value(_this.domNode);
        return _this;
    }
    TextBlot.create = function (value) {
        return document.createTextNode(value);
    };
    TextBlot.value = function (domNode) {
        var text = domNode.data;
        // @ts-ignore
        if (text['normalize'])
            text = text['normalize']();
        return text;
    };
    TextBlot.prototype.deleteAt = function (index, length) {
        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
    };
    TextBlot.prototype.index = function (node, offset) {
        if (this.domNode === node) {
            return offset;
        }
        return -1;
    };
    TextBlot.prototype.insertAt = function (index, value, def) {
        if (def == null) {
            this.text = this.text.slice(0, index) + value + this.text.slice(index);
            this.domNode.data = this.text;
        }
        else {
            _super.prototype.insertAt.call(this, index, value, def);
        }
    };
    TextBlot.prototype.length = function () {
        return this.text.length;
    };
    TextBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        this.text = this.statics.value(this.domNode);
        if (this.text.length === 0) {
            this.remove();
        }
        else if (this.next instanceof TextBlot && this.next.prev === this) {
            this.insertAt(this.length(), this.next.value());
            this.next.remove();
        }
    };
    TextBlot.prototype.position = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        return [this.domNode, index];
    };
    TextBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = Registry.create(this.domNode.splitText(index));
        this.parent.insertBefore(after, this.next);
        this.text = this.statics.value(this.domNode);
        return after;
    };
    TextBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (mutations.some(function (mutation) {
            return mutation.type === 'characterData' && mutation.target === _this.domNode;
        })) {
            this.text = this.statics.value(this.domNode);
        }
    };
    TextBlot.prototype.value = function () {
        return this.text;
    };
    TextBlot.blotName = 'text';
    TextBlot.scope = Registry.Scope.INLINE_BLOT;
    return TextBlot;
}(leaf_1.default));
exports.default = TextBlot;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elem = document.createElement('div');
elem.classList.toggle('test-class', false);
if (elem.classList.contains('test-class')) {
  var _toggle = DOMTokenList.prototype.toggle;
  DOMTokenList.prototype.toggle = function (token, force) {
    if (arguments.length > 1 && !this.contains(token) === !force) {
      return force;
    } else {
      return _toggle.call(this, token);
    }
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function value(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Disable resizing in Firefox
  document.execCommand("enableObjectResizing", false, false);
  // Disable automatic linkifying in IE11
  document.execCommand("autoUrlDetect", false, false);
});

/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * This library modifies the diff-patch-match library by Neil Fraser
 * by removing the patch and match functionality and certain advanced
 * options in the diff function. The original license is as follows:
 *
 * ===
 *
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;


/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {Int} cursor_pos Expected edit position in text1 (optional)
 * @return {Array} Array of diff tuples.
 */
function diff_main(text1, text2, cursor_pos) {
  // Check for equality (speedup).
  if (text1 == text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }

  // Check cursor_pos within bounds
  if (cursor_pos < 0 || text1.length < cursor_pos) {
    cursor_pos = null;
  }

  // Trim off common prefix (speedup).
  var commonlength = diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = diff_compute_(text1, text2);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  diff_cleanupMerge(diffs);
  if (cursor_pos != null) {
    diffs = fix_cursor(diffs, cursor_pos);
  }
  diffs = fix_emoji(diffs);
  return diffs;
};


/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 */
function diff_compute_(text1, text2) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i != -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
             [DIFF_EQUAL, shorttext],
             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length == 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }

  // Check to see if the problem can be split in two.
  var hm = diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = diff_main(text1_a, text2_a);
    var diffs_b = diff_main(text1_b, text2_b);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  return diff_bisect_(text1, text2);
};


/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 * @private
 */
function diff_bisect_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (delta % 2 != 0);
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length &&
             text1.charAt(x1) == text2.charAt(y1)) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length &&
             text1.charAt(text1_length - x2 - 1) ==
             text2.charAt(text2_length - y2 - 1)) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
};


/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @return {Array} Array of diff tuples.
 */
function diff_bisectSplit_(text1, text2, x, y) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = diff_main(text1a, text2a);
  var diffsb = diff_main(text1b, text2b);

  return diffs.concat(diffsb);
};


/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
function diff_commonPrefix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) ==
        text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
function diff_commonSuffix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 ||
      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 */
function diff_halfMatch_(text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;  // Pointless.
  }

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
      var prefixLength = diff_commonPrefix(longtext.substring(i),
                                           shorttext.substring(j));
      var suffixLength = diff_commonSuffix(longtext.substring(0, i),
                                           shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) +
            shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [best_longtext_a, best_longtext_b,
              best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};


/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Array} diffs Array of diff tuples.
 */
function diff_cleanupMerge(diffs) {
  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if ((pointer - count_delete - count_insert) > 0 &&
                  diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] +=
                    text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL,
                                    text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length -
                  commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length -
                  commonlength);
              text_delete = text_delete.substring(0, text_delete.length -
                  commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          if (count_delete === 0) {
            diffs.splice(pointer - count_insert,
                count_delete + count_insert, [DIFF_INSERT, text_insert]);
          } else if (count_insert === 0) {
            diffs.splice(pointer - count_delete,
                count_delete + count_insert, [DIFF_DELETE, text_delete]);
          } else {
            diffs.splice(pointer - count_delete - count_insert,
                count_delete + count_insert, [DIFF_DELETE, text_delete],
                [DIFF_INSERT, text_insert]);
          }
          pointer = pointer - count_delete - count_insert +
                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
            diffs[pointer][1].substring(0, diffs[pointer][1].length -
                                        diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
          diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
            diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    diff_cleanupMerge(diffs);
  }
};


var diff = diff_main;
diff.INSERT = DIFF_INSERT;
diff.DELETE = DIFF_DELETE;
diff.EQUAL = DIFF_EQUAL;

module.exports = diff;

/*
 * Modify a diff such that the cursor position points to the start of a change:
 * E.g.
 *   cursor_normalize_diff([[DIFF_EQUAL, 'abc']], 1)
 *     => [1, [[DIFF_EQUAL, 'a'], [DIFF_EQUAL, 'bc']]]
 *   cursor_normalize_diff([[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xyz']], 2)
 *     => [2, [[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xy'], [DIFF_DELETE, 'z']]]
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} A tuple [cursor location in the modified diff, modified diff]
 */
function cursor_normalize_diff (diffs, cursor_pos) {
  if (cursor_pos === 0) {
    return [DIFF_EQUAL, diffs];
  }
  for (var current_pos = 0, i = 0; i < diffs.length; i++) {
    var d = diffs[i];
    if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
      var next_pos = current_pos + d[1].length;
      if (cursor_pos === next_pos) {
        return [i + 1, diffs];
      } else if (cursor_pos < next_pos) {
        // copy to prevent side effects
        diffs = diffs.slice();
        // split d into two diff changes
        var split_pos = cursor_pos - current_pos;
        var d_left = [d[0], d[1].slice(0, split_pos)];
        var d_right = [d[0], d[1].slice(split_pos)];
        diffs.splice(i, 1, d_left, d_right);
        return [i + 1, diffs];
      } else {
        current_pos = next_pos;
      }
    }
  }
  throw new Error('cursor_pos is out of bounds!')
}

/*
 * Modify a diff such that the edit position is "shifted" to the proposed edit location (cursor_position).
 *
 * Case 1)
 *   Check if a naive shift is possible:
 *     [0, X], [ 1, Y] -> [ 1, Y], [0, X]    (if X + Y === Y + X)
 *     [0, X], [-1, Y] -> [-1, Y], [0, X]    (if X + Y === Y + X) - holds same result
 * Case 2)
 *   Check if the following shifts are possible:
 *     [0, 'pre'], [ 1, 'prefix'] -> [ 1, 'pre'], [0, 'pre'], [ 1, 'fix']
 *     [0, 'pre'], [-1, 'prefix'] -> [-1, 'pre'], [0, 'pre'], [-1, 'fix']
 *         ^            ^
 *         d          d_next
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} Array of diff tuples
 */
function fix_cursor (diffs, cursor_pos) {
  var norm = cursor_normalize_diff(diffs, cursor_pos);
  var ndiffs = norm[1];
  var cursor_pointer = norm[0];
  var d = ndiffs[cursor_pointer];
  var d_next = ndiffs[cursor_pointer + 1];

  if (d == null) {
    // Text was deleted from end of original string,
    // cursor is now out of bounds in new string
    return diffs;
  } else if (d[0] !== DIFF_EQUAL) {
    // A modification happened at the cursor location.
    // This is the expected outcome, so we can return the original diff.
    return diffs;
  } else {
    if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
      // Case 1)
      // It is possible to perform a naive shift
      ndiffs.splice(cursor_pointer, 2, d_next, d)
      return merge_tuples(ndiffs, cursor_pointer, 2)
    } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
      // Case 2)
      // d[1] is a prefix of d_next[1]
      // We can assume that d_next[0] !== 0, since d[0] === 0
      // Shift edit locations..
      ndiffs.splice(cursor_pointer, 2, [d_next[0], d[1]], [0, d[1]]);
      var suffix = d_next[1].slice(d[1].length);
      if (suffix.length > 0) {
        ndiffs.splice(cursor_pointer + 2, 0, [d_next[0], suffix]);
      }
      return merge_tuples(ndiffs, cursor_pointer, 3)
    } else {
      // Not possible to perform any modification
      return diffs;
    }
  }
}

/*
 * Check diff did not split surrogate pairs.
 * Ex. [0, '\uD83D'], [-1, '\uDC36'], [1, '\uDC2F'] -> [-1, '\uD83D\uDC36'], [1, '\uD83D\uDC2F']
 *     '\uD83D\uDC36' === '🐶', '\uD83D\uDC2F' === '🐯'
 *
 * @param {Array} diffs Array of diff tuples
 * @return {Array} Array of diff tuples
 */
function fix_emoji (diffs) {
  var compact = false;
  var starts_with_pair_end = function(str) {
    return str.charCodeAt(0) >= 0xDC00 && str.charCodeAt(0) <= 0xDFFF;
  }
  var ends_with_pair_start = function(str) {
    return str.charCodeAt(str.length-1) >= 0xD800 && str.charCodeAt(str.length-1) <= 0xDBFF;
  }
  for (var i = 2; i < diffs.length; i += 1) {
    if (diffs[i-2][0] === DIFF_EQUAL && ends_with_pair_start(diffs[i-2][1]) &&
        diffs[i-1][0] === DIFF_DELETE && starts_with_pair_end(diffs[i-1][1]) &&
        diffs[i][0] === DIFF_INSERT && starts_with_pair_end(diffs[i][1])) {
      compact = true;

      diffs[i-1][1] = diffs[i-2][1].slice(-1) + diffs[i-1][1];
      diffs[i][1] = diffs[i-2][1].slice(-1) + diffs[i][1];

      diffs[i-2][1] = diffs[i-2][1].slice(0, -1);
    }
  }
  if (!compact) {
    return diffs;
  }
  var fixed_diffs = [];
  for (var i = 0; i < diffs.length; i += 1) {
    if (diffs[i][1].length > 0) {
      fixed_diffs.push(diffs[i]);
    }
  }
  return fixed_diffs;
}

/*
 * Try to merge tuples with their neigbors in a given range.
 * E.g. [0, 'a'], [0, 'b'] -> [0, 'ab']
 *
 * @param {Array} diffs Array of diff tuples.
 * @param {Int} start Position of the first element to merge (diffs[start] is also merged with diffs[start - 1]).
 * @param {Int} length Number of consecutive elements to check.
 * @return {Array} Array of merged diff tuples.
 */
function merge_tuples (diffs, start, length) {
  // Check from (start-1) to (start+length).
  for (var i = start + length - 1; i >= 0 && i >= start - 1; i--) {
    if (i + 1 < diffs.length) {
      var left_d = diffs[i];
      var right_d = diffs[i+1];
      if (left_d[0] === right_d[1]) {
        diffs.splice(i, 2, [left_d[0], left_d[1] + right_d[1]]);
      }
    }
  }
  return diffs;
}


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend2 = __webpack_require__(3);

var _extend3 = _interopRequireDefault(_extend2);

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _align = __webpack_require__(36);

var _background = __webpack_require__(37);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _color = __webpack_require__(26);

var _direction = __webpack_require__(38);

var _font = __webpack_require__(39);

var _size = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:clipboard');

var DOM_KEY = '__ql-matcher';

var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['style', matchIgnore]];

var ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

var Clipboard = function (_Module) {
  _inherits(Clipboard, _Module);

  function Clipboard(quill, options) {
    _classCallCheck(this, Clipboard);

    var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this, quill, options));

    _this.quill.root.addEventListener('paste', _this.onPaste.bind(_this));
    _this.container = _this.quill.addContainer('ql-clipboard');
    _this.container.setAttribute('contenteditable', true);
    _this.container.setAttribute('tabindex', -1);
    _this.matchers = [];
    CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          selector = _ref2[0],
          matcher = _ref2[1];

      if (!options.matchVisual && matcher === matchSpacing) return;
      _this.addMatcher(selector, matcher);
    });
    return _this;
  }

  _createClass(Clipboard, [{
    key: 'addMatcher',
    value: function addMatcher(selector, matcher) {
      this.matchers.push([selector, matcher]);
    }
  }, {
    key: 'convert',
    value: function convert(html) {
      if (typeof html === 'string') {
        this.container.innerHTML = html.replace(/\>\r?\n +\</g, '><'); // Remove spaces between tags
        return this.convert();
      }
      var formats = this.quill.getFormat(this.quill.selection.savedRange.index);
      if (formats[_code2.default.blotName]) {
        var text = this.container.innerText;
        this.container.innerHTML = '';
        return new _quillDelta2.default().insert(text, _defineProperty({}, _code2.default.blotName, formats[_code2.default.blotName]));
      }

      var _prepareMatching = this.prepareMatching(),
          _prepareMatching2 = _slicedToArray(_prepareMatching, 2),
          elementMatchers = _prepareMatching2[0],
          textMatchers = _prepareMatching2[1];

      var delta = traverse(this.container, elementMatchers, textMatchers);
      // Remove trailing newline
      if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
        delta = delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));
      }
      debug.log('convert', this.container.innerHTML, delta);
      this.container.innerHTML = '';
      return delta;
    }
  }, {
    key: 'dangerouslyPasteHTML',
    value: function dangerouslyPasteHTML(index, html) {
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _quill2.default.sources.API;

      if (typeof index === 'string') {
        this.quill.setContents(this.convert(index), html);
        this.quill.setSelection(0, _quill2.default.sources.SILENT);
      } else {
        var paste = this.convert(html);
        this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste), source);
        this.quill.setSelection(index + paste.length(), _quill2.default.sources.SILENT);
      }
    }
  }, {
    key: 'onPaste',
    value: function onPaste(e) {
      var _this2 = this;

      if (e.defaultPrevented || !this.quill.isEnabled()) return;
      var range = this.quill.getSelection();
      var delta = new _quillDelta2.default().retain(range.index);
      var scrollTop = this.quill.scrollingContainer.scrollTop;
      this.container.focus();
      this.quill.selection.update(_quill2.default.sources.SILENT);
      setTimeout(function () {
        delta = delta.concat(_this2.convert()).delete(range.length);
        _this2.quill.updateContents(delta, _quill2.default.sources.USER);
        // range.length contributes to delta.length()
        _this2.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
        _this2.quill.scrollingContainer.scrollTop = scrollTop;
        _this2.quill.focus();
      }, 1);
    }
  }, {
    key: 'prepareMatching',
    value: function prepareMatching() {
      var _this3 = this;

      var elementMatchers = [],
          textMatchers = [];
      this.matchers.forEach(function (pair) {
        var _pair = _slicedToArray(pair, 2),
            selector = _pair[0],
            matcher = _pair[1];

        switch (selector) {
          case Node.TEXT_NODE:
            textMatchers.push(matcher);
            break;
          case Node.ELEMENT_NODE:
            elementMatchers.push(matcher);
            break;
          default:
            [].forEach.call(_this3.container.querySelectorAll(selector), function (node) {
              // TODO use weakmap
              node[DOM_KEY] = node[DOM_KEY] || [];
              node[DOM_KEY].push(matcher);
            });
            break;
        }
      });
      return [elementMatchers, textMatchers];
    }
  }]);

  return Clipboard;
}(_module2.default);

Clipboard.DEFAULTS = {
  matchers: [],
  matchVisual: true
};

function applyFormat(delta, format, value) {
  if ((typeof format === 'undefined' ? 'undefined' : _typeof(format)) === 'object') {
    return Object.keys(format).reduce(function (delta, key) {
      return applyFormat(delta, key, format[key]);
    }, delta);
  } else {
    return delta.reduce(function (delta, op) {
      if (op.attributes && op.attributes[format]) {
        return delta.push(op);
      } else {
        return delta.insert(op.insert, (0, _extend3.default)({}, _defineProperty({}, format, value), op.attributes));
      }
    }, new _quillDelta2.default());
  }
}

function computeStyle(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return {};
  var DOM_KEY = '__ql-computed-style';
  return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
}

function deltaEndsWith(delta, text) {
  var endText = "";
  for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
    var op = delta.ops[i];
    if (typeof op.insert !== 'string') break;
    endText = op.insert + endText;
  }
  return endText.slice(-1 * text.length) === text;
}

function isLine(node) {
  if (node.childNodes.length === 0) return false; // Exclude embed blocks
  var style = computeStyle(node);
  return ['block', 'list-item'].indexOf(style.display) > -1;
}

function traverse(node, elementMatchers, textMatchers) {
  // Post-order
  if (node.nodeType === node.TEXT_NODE) {
    return textMatchers.reduce(function (delta, matcher) {
      return matcher(node, delta);
    }, new _quillDelta2.default());
  } else if (node.nodeType === node.ELEMENT_NODE) {
    return [].reduce.call(node.childNodes || [], function (delta, childNode) {
      var childrenDelta = traverse(childNode, elementMatchers, textMatchers);
      if (childNode.nodeType === node.ELEMENT_NODE) {
        childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
        childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
      }
      return delta.concat(childrenDelta);
    }, new _quillDelta2.default());
  } else {
    return new _quillDelta2.default();
  }
}

function matchAlias(format, node, delta) {
  return applyFormat(delta, format, true);
}

function matchAttributor(node, delta) {
  var attributes = _parchment2.default.Attributor.Attribute.keys(node);
  var classes = _parchment2.default.Attributor.Class.keys(node);
  var styles = _parchment2.default.Attributor.Style.keys(node);
  var formats = {};
  attributes.concat(classes).concat(styles).forEach(function (name) {
    var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
    if (attr != null) {
      formats[attr.attrName] = attr.value(node);
      if (formats[attr.attrName]) return;
    }
    attr = ATTRIBUTE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      formats[attr.attrName] = attr.value(node) || undefined;
    }
    attr = STYLE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      attr = STYLE_ATTRIBUTORS[name];
      formats[attr.attrName] = attr.value(node) || undefined;
    }
  });
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  return delta;
}

function matchBlot(node, delta) {
  var match = _parchment2.default.query(node);
  if (match == null) return delta;
  if (match.prototype instanceof _parchment2.default.Embed) {
    var embed = {};
    var value = match.value(node);
    if (value != null) {
      embed[match.blotName] = value;
      delta = new _quillDelta2.default().insert(embed, match.formats(node));
    }
  } else if (typeof match.formats === 'function') {
    delta = applyFormat(delta, match.blotName, match.formats(node));
  }
  return delta;
}

function matchBreak(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    delta.insert('\n');
  }
  return delta;
}

function matchIgnore() {
  return new _quillDelta2.default();
}

function matchIndent(node, delta) {
  var match = _parchment2.default.query(node);
  if (match == null || match.blotName !== 'list-item' || !deltaEndsWith(delta, '\n')) {
    return delta;
  }
  var indent = -1,
      parent = node.parentNode;
  while (!parent.classList.contains('ql-clipboard')) {
    if ((_parchment2.default.query(parent) || {}).blotName === 'list') {
      indent += 1;
    }
    parent = parent.parentNode;
  }
  if (indent <= 0) return delta;
  return delta.compose(new _quillDelta2.default().retain(delta.length() - 1).retain(1, { indent: indent }));
}

function matchNewline(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    if (isLine(node) || delta.length() > 0 && node.nextSibling && isLine(node.nextSibling)) {
      delta.insert('\n');
    }
  }
  return delta;
}

function matchSpacing(node, delta) {
  if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, '\n\n')) {
    var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
    if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
      delta.insert('\n');
    }
  }
  return delta;
}

function matchStyles(node, delta) {
  var formats = {};
  var style = node.style || {};
  if (style.fontStyle && computeStyle(node).fontStyle === 'italic') {
    formats.italic = true;
  }
  if (style.fontWeight && (computeStyle(node).fontWeight.startsWith('bold') || parseInt(computeStyle(node).fontWeight) >= 700)) {
    formats.bold = true;
  }
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  if (parseFloat(style.textIndent || 0) > 0) {
    // Could be 0.5in
    delta = new _quillDelta2.default().insert('\t').concat(delta);
  }
  return delta;
}

function matchText(node, delta) {
  var text = node.data;
  // Word represents empty line with <o:p>&nbsp;</o:p>
  if (node.parentNode.tagName === 'O:P') {
    return delta.insert(text.trim());
  }
  if (text.trim().length === 0 && node.parentNode.classList.contains('ql-clipboard')) {
    return delta;
  }
  if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
    // eslint-disable-next-line func-style
    var replacer = function replacer(collapse, match) {
      match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;
      return match.length < 1 && collapse ? ' ' : match;
    };
    text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
    text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace
    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
      text = text.replace(/^\s+/, replacer.bind(replacer, false));
    }
    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
      text = text.replace(/\s+$/, replacer.bind(replacer, false));
    }
  }
  return delta.insert(text);
}

exports.default = Clipboard;
exports.matchAttributor = matchAttributor;
exports.matchBlot = matchBlot;
exports.matchNewline = matchNewline;
exports.matchSpacing = matchSpacing;
exports.matchText = matchText;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bold = function (_Inline) {
  _inherits(Bold, _Inline);

  function Bold() {
    _classCallCheck(this, Bold);

    return _possibleConstructorReturn(this, (Bold.__proto__ || Object.getPrototypeOf(Bold)).apply(this, arguments));
  }

  _createClass(Bold, [{
    key: 'optimize',
    value: function optimize(context) {
      _get(Bold.prototype.__proto__ || Object.getPrototypeOf(Bold.prototype), 'optimize', this).call(this, context);
      if (this.domNode.tagName !== this.statics.tagName[0]) {
        this.replaceWith(this.statics.blotName);
      }
    }
  }], [{
    key: 'create',
    value: function create() {
      return _get(Bold.__proto__ || Object.getPrototypeOf(Bold), 'create', this).call(this);
    }
  }, {
    key: 'formats',
    value: function formats() {
      return true;
    }
  }]);

  return Bold;
}(_inline2.default);

Bold.blotName = 'bold';
Bold.tagName = ['STRONG', 'B'];

exports.default = Bold;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addControls = exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quillDelta = __webpack_require__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:toolbar');

var Toolbar = function (_Module) {
  _inherits(Toolbar, _Module);

  function Toolbar(quill, options) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, quill, options));

    if (Array.isArray(_this.options.container)) {
      var container = document.createElement('div');
      addControls(container, _this.options.container);
      quill.container.parentNode.insertBefore(container, quill.container);
      _this.container = container;
    } else if (typeof _this.options.container === 'string') {
      _this.container = document.querySelector(_this.options.container);
    } else {
      _this.container = _this.options.container;
    }
    if (!(_this.container instanceof HTMLElement)) {
      var _ret;

      return _ret = debug.error('Container required for toolbar', _this.options), _possibleConstructorReturn(_this, _ret);
    }
    _this.container.classList.add('ql-toolbar');
    _this.controls = [];
    _this.handlers = {};
    Object.keys(_this.options.handlers).forEach(function (format) {
      _this.addHandler(format, _this.options.handlers[format]);
    });
    [].forEach.call(_this.container.querySelectorAll('button, select'), function (input) {
      _this.attach(input);
    });
    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (type, range) {
      if (type === _quill2.default.events.SELECTION_CHANGE) {
        _this.update(range);
      }
    });
    _this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
      var _this$quill$selection = _this.quill.selection.getRange(),
          _this$quill$selection2 = _slicedToArray(_this$quill$selection, 1),
          range = _this$quill$selection2[0]; // quill.getSelection triggers update


      _this.update(range);
    });
    return _this;
  }

  _createClass(Toolbar, [{
    key: 'addHandler',
    value: function addHandler(format, handler) {
      this.handlers[format] = handler;
    }
  }, {
    key: 'attach',
    value: function attach(input) {
      var _this2 = this;

      var format = [].find.call(input.classList, function (className) {
        return className.indexOf('ql-') === 0;
      });
      if (!format) return;
      format = format.slice('ql-'.length);
      if (input.tagName === 'BUTTON') {
        input.setAttribute('type', 'button');
      }
      if (this.handlers[format] == null) {
        if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
          debug.warn('ignoring attaching to disabled format', format, input);
          return;
        }
        if (_parchment2.default.query(format) == null) {
          debug.warn('ignoring attaching to nonexistent format', format, input);
          return;
        }
      }
      var eventName = input.tagName === 'SELECT' ? 'change' : 'click';
      input.addEventListener(eventName, function (e) {
        var value = void 0;
        if (input.tagName === 'SELECT') {
          if (input.selectedIndex < 0) return;
          var selected = input.options[input.selectedIndex];
          if (selected.hasAttribute('selected')) {
            value = false;
          } else {
            value = selected.value || false;
          }
        } else {
          if (input.classList.contains('ql-active')) {
            value = false;
          } else {
            value = input.value || !input.hasAttribute('value');
          }
          e.preventDefault();
        }
        _this2.quill.focus();

        var _quill$selection$getR = _this2.quill.selection.getRange(),
            _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1),
            range = _quill$selection$getR2[0];

        if (_this2.handlers[format] != null) {
          _this2.handlers[format].call(_this2, value);
        } else if (_parchment2.default.query(format).prototype instanceof _parchment2.default.Embed) {
          value = prompt('Enter ' + format);
          if (!value) return;
          _this2.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert(_defineProperty({}, format, value)), _quill2.default.sources.USER);
        } else {
          _this2.quill.format(format, value, _quill2.default.sources.USER);
        }
        _this2.update(range);
      });
      // TODO use weakmap
      this.controls.push([format, input]);
    }
  }, {
    key: 'update',
    value: function update(range) {
      var formats = range == null ? {} : this.quill.getFormat(range);
      this.controls.forEach(function (pair) {
        var _pair = _slicedToArray(pair, 2),
            format = _pair[0],
            input = _pair[1];

        if (input.tagName === 'SELECT') {
          var option = void 0;
          if (range == null) {
            option = null;
          } else if (formats[format] == null) {
            option = input.querySelector('option[selected]');
          } else if (!Array.isArray(formats[format])) {
            var value = formats[format];
            if (typeof value === 'string') {
              value = value.replace(/\"/g, '\\"');
            }
            option = input.querySelector('option[value="' + value + '"]');
          }
          if (option == null) {
            input.value = ''; // TODO make configurable?
            input.selectedIndex = -1;
          } else {
            option.selected = true;
          }
        } else {
          if (range == null) {
            input.classList.remove('ql-active');
          } else if (input.hasAttribute('value')) {
            // both being null should match (default values)
            // '1' should match with 1 (headers)
            var isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');
            input.classList.toggle('ql-active', isActive);
          } else {
            input.classList.toggle('ql-active', formats[format] != null);
          }
        }
      });
    }
  }]);

  return Toolbar;
}(_module2.default);

Toolbar.DEFAULTS = {};

function addButton(container, format, value) {
  var input = document.createElement('button');
  input.setAttribute('type', 'button');
  input.classList.add('ql-' + format);
  if (value != null) {
    input.value = value;
  }
  container.appendChild(input);
}

function addControls(container, groups) {
  if (!Array.isArray(groups[0])) {
    groups = [groups];
  }
  groups.forEach(function (controls) {
    var group = document.createElement('span');
    group.classList.add('ql-formats');
    controls.forEach(function (control) {
      if (typeof control === 'string') {
        addButton(group, control);
      } else {
        var format = Object.keys(control)[0];
        var value = control[format];
        if (Array.isArray(value)) {
          addSelect(group, format, value);
        } else {
          addButton(group, format, value);
        }
      }
    });
    container.appendChild(group);
  });
}

function addSelect(container, format, values) {
  var input = document.createElement('select');
  input.classList.add('ql-' + format);
  values.forEach(function (value) {
    var option = document.createElement('option');
    if (value !== false) {
      option.setAttribute('value', value);
    } else {
      option.setAttribute('selected', 'selected');
    }
    input.appendChild(option);
  });
  container.appendChild(input);
}

Toolbar.DEFAULTS = {
  container: null,
  handlers: {
    clean: function clean() {
      var _this3 = this;

      var range = this.quill.getSelection();
      if (range == null) return;
      if (range.length == 0) {
        var formats = this.quill.getFormat();
        Object.keys(formats).forEach(function (name) {
          // Clean functionality in existing apps only clean inline formats
          if (_parchment2.default.query(name, _parchment2.default.Scope.INLINE) != null) {
            _this3.quill.format(name, false);
          }
        });
      } else {
        this.quill.removeFormat(range, _quill2.default.sources.USER);
      }
    },
    direction: function direction(value) {
      var align = this.quill.getFormat()['align'];
      if (value === 'rtl' && align == null) {
        this.quill.format('align', 'right', _quill2.default.sources.USER);
      } else if (!value && align === 'right') {
        this.quill.format('align', false, _quill2.default.sources.USER);
      }
      this.quill.format('direction', value, _quill2.default.sources.USER);
    },
    indent: function indent(value) {
      var range = this.quill.getSelection();
      var formats = this.quill.getFormat(range);
      var indent = parseInt(formats.indent || 0);
      if (value === '+1' || value === '-1') {
        var modifier = value === '+1' ? 1 : -1;
        if (formats.direction === 'rtl') modifier *= -1;
        this.quill.format('indent', indent + modifier, _quill2.default.sources.USER);
      }
    },
    link: function link(value) {
      if (value === true) {
        value = prompt('Enter link URL:');
      }
      this.quill.format('link', value, _quill2.default.sources.USER);
    },
    list: function list(value) {
      var range = this.quill.getSelection();
      var formats = this.quill.getFormat(range);
      if (value === 'check') {
        if (formats['list'] === 'checked' || formats['list'] === 'unchecked') {
          this.quill.format('list', false, _quill2.default.sources.USER);
        } else {
          this.quill.format('list', 'unchecked', _quill2.default.sources.USER);
        }
      } else {
        this.quill.format('list', value, _quill2.default.sources.USER);
      }
    }
  }
};

exports.default = Toolbar;
exports.addControls = addControls;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"></polyline> <polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_Picker) {
  _inherits(ColorPicker, _Picker);

  function ColorPicker(select, label) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, select));

    _this.label.innerHTML = label;
    _this.container.classList.add('ql-color-picker');
    [].slice.call(_this.container.querySelectorAll('.ql-picker-item'), 0, 7).forEach(function (item) {
      item.classList.add('ql-primary');
    });
    return _this;
  }

  _createClass(ColorPicker, [{
    key: 'buildItem',
    value: function buildItem(option) {
      var item = _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'buildItem', this).call(this, option);
      item.style.backgroundColor = option.getAttribute('value') || '';
      return item;
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item, trigger) {
      _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'selectItem', this).call(this, item, trigger);
      var colorLabel = this.label.querySelector('.ql-color-label');
      var value = item ? item.getAttribute('data-value') || '' : '';
      if (colorLabel) {
        if (colorLabel.tagName === 'line') {
          colorLabel.style.stroke = value;
        } else {
          colorLabel.style.fill = value;
        }
      }
    }
  }]);

  return ColorPicker;
}(_picker2.default);

exports.default = ColorPicker;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconPicker = function (_Picker) {
  _inherits(IconPicker, _Picker);

  function IconPicker(select, icons) {
    _classCallCheck(this, IconPicker);

    var _this = _possibleConstructorReturn(this, (IconPicker.__proto__ || Object.getPrototypeOf(IconPicker)).call(this, select));

    _this.container.classList.add('ql-icon-picker');
    [].forEach.call(_this.container.querySelectorAll('.ql-picker-item'), function (item) {
      item.innerHTML = icons[item.getAttribute('data-value') || ''];
    });
    _this.defaultItem = _this.container.querySelector('.ql-selected');
    _this.selectItem(_this.defaultItem);
    return _this;
  }

  _createClass(IconPicker, [{
    key: 'selectItem',
    value: function selectItem(item, trigger) {
      _get(IconPicker.prototype.__proto__ || Object.getPrototypeOf(IconPicker.prototype), 'selectItem', this).call(this, item, trigger);
      item = item || this.defaultItem;
      this.label.innerHTML = item.innerHTML;
    }
  }]);

  return IconPicker;
}(_picker2.default);

exports.default = IconPicker;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tooltip = function () {
  function Tooltip(quill, boundsContainer) {
    var _this = this;

    _classCallCheck(this, Tooltip);

    this.quill = quill;
    this.boundsContainer = boundsContainer || document.body;
    this.root = quill.addContainer('ql-tooltip');
    this.root.innerHTML = this.constructor.TEMPLATE;
    if (this.quill.root === this.quill.scrollingContainer) {
      this.quill.root.addEventListener('scroll', function () {
        _this.root.style.marginTop = -1 * _this.quill.root.scrollTop + 'px';
      });
    }
    this.hide();
  }

  _createClass(Tooltip, [{
    key: 'hide',
    value: function hide() {
      this.root.classList.add('ql-hidden');
    }
  }, {
    key: 'position',
    value: function position(reference) {
      var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
      // root.scrollTop should be 0 if scrollContainer !== root
      var top = reference.bottom + this.quill.root.scrollTop;
      this.root.style.left = left + 'px';
      this.root.style.top = top + 'px';
      this.root.classList.remove('ql-flip');
      var containerBounds = this.boundsContainer.getBoundingClientRect();
      var rootBounds = this.root.getBoundingClientRect();
      var shift = 0;
      if (rootBounds.right > containerBounds.right) {
        shift = containerBounds.right - rootBounds.right;
        this.root.style.left = left + shift + 'px';
      }
      if (rootBounds.left < containerBounds.left) {
        shift = containerBounds.left - rootBounds.left;
        this.root.style.left = left + shift + 'px';
      }
      if (rootBounds.bottom > containerBounds.bottom) {
        var height = rootBounds.bottom - rootBounds.top;
        var verticalShift = reference.bottom - reference.top + height;
        this.root.style.top = top - verticalShift + 'px';
        this.root.classList.add('ql-flip');
      }
      return shift;
    }
  }, {
    key: 'show',
    value: function show() {
      this.root.classList.remove('ql-editing');
      this.root.classList.remove('ql-hidden');
    }
  }]);

  return Tooltip;
}();

exports.default = Tooltip;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _base = __webpack_require__(43);

var _base2 = _interopRequireDefault(_base);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

var _selection = __webpack_require__(15);

var _icons = __webpack_require__(41);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLBAR_CONFIG = [[{ header: ['1', '2', '3', false] }], ['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']];

var SnowTheme = function (_BaseTheme) {
  _inherits(SnowTheme, _BaseTheme);

  function SnowTheme(quill, options) {
    _classCallCheck(this, SnowTheme);

    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    var _this = _possibleConstructorReturn(this, (SnowTheme.__proto__ || Object.getPrototypeOf(SnowTheme)).call(this, quill, options));

    _this.quill.container.classList.add('ql-snow');
    return _this;
  }

  _createClass(SnowTheme, [{
    key: 'extendToolbar',
    value: function extendToolbar(toolbar) {
      toolbar.container.classList.add('ql-snow');
      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
      this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
      if (toolbar.container.querySelector('.ql-link')) {
        this.quill.keyboard.addBinding({ key: 'K', shortKey: true }, function (range, context) {
          toolbar.handlers['link'].call(toolbar, !context.format.link);
        });
      }
    }
  }]);

  return SnowTheme;
}(_base2.default);

SnowTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link: function link(value) {
          if (value) {
            var range = this.quill.getSelection();
            if (range == null || range.length == 0) return;
            var preview = this.quill.getText(range);
            if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
              preview = 'mailto:' + preview;
            }
            var tooltip = this.quill.theme.tooltip;
            tooltip.edit('link', preview);
          } else {
            this.quill.format('link', false);
          }
        }
      }
    }
  }
});

var SnowTooltip = function (_BaseTooltip) {
  _inherits(SnowTooltip, _BaseTooltip);

  function SnowTooltip(quill, bounds) {
    _classCallCheck(this, SnowTooltip);

    var _this2 = _possibleConstructorReturn(this, (SnowTooltip.__proto__ || Object.getPrototypeOf(SnowTooltip)).call(this, quill, bounds));

    _this2.preview = _this2.root.querySelector('a.ql-preview');
    return _this2;
  }

  _createClass(SnowTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this3 = this;

      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'listen', this).call(this);
      this.root.querySelector('a.ql-action').addEventListener('click', function (event) {
        if (_this3.root.classList.contains('ql-editing')) {
          _this3.save();
        } else {
          _this3.edit('link', _this3.preview.textContent);
        }
        event.preventDefault();
      });
      this.root.querySelector('a.ql-remove').addEventListener('click', function (event) {
        if (_this3.linkRange != null) {
          var range = _this3.linkRange;
          _this3.restoreFocus();
          _this3.quill.formatText(range, 'link', false, _emitter2.default.sources.USER);
          delete _this3.linkRange;
        }
        event.preventDefault();
        _this3.hide();
      });
      this.quill.on(_emitter2.default.events.SELECTION_CHANGE, function (range, oldRange, source) {
        if (range == null) return;
        if (range.length === 0 && source === _emitter2.default.sources.USER) {
          var _quill$scroll$descend = _this3.quill.scroll.descendant(_link2.default, range.index),
              _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
              link = _quill$scroll$descend2[0],
              offset = _quill$scroll$descend2[1];

          if (link != null) {
            _this3.linkRange = new _selection.Range(range.index - offset, link.length());
            var preview = _link2.default.formats(link.domNode);
            _this3.preview.textContent = preview;
            _this3.preview.setAttribute('href', preview);
            _this3.show();
            _this3.position(_this3.quill.getBounds(_this3.linkRange));
            return;
          }
        } else {
          delete _this3.linkRange;
        }
        _this3.hide();
      });
    }
  }, {
    key: 'show',
    value: function show() {
      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'show', this).call(this);
      this.root.removeAttribute('data-mode');
    }
  }]);

  return SnowTooltip;
}(_base.BaseTooltip);

SnowTooltip.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');

exports.default = SnowTheme;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(29);

var _core2 = _interopRequireDefault(_core);

var _align = __webpack_require__(36);

var _direction = __webpack_require__(38);

var _indent = __webpack_require__(64);

var _blockquote = __webpack_require__(65);

var _blockquote2 = _interopRequireDefault(_blockquote);

var _header = __webpack_require__(66);

var _header2 = _interopRequireDefault(_header);

var _list = __webpack_require__(67);

var _list2 = _interopRequireDefault(_list);

var _background = __webpack_require__(37);

var _color = __webpack_require__(26);

var _font = __webpack_require__(39);

var _size = __webpack_require__(40);

var _bold = __webpack_require__(56);

var _bold2 = _interopRequireDefault(_bold);

var _italic = __webpack_require__(68);

var _italic2 = _interopRequireDefault(_italic);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

var _script = __webpack_require__(69);

var _script2 = _interopRequireDefault(_script);

var _strike = __webpack_require__(70);

var _strike2 = _interopRequireDefault(_strike);

var _underline = __webpack_require__(71);

var _underline2 = _interopRequireDefault(_underline);

var _image = __webpack_require__(72);

var _image2 = _interopRequireDefault(_image);

var _video = __webpack_require__(73);

var _video2 = _interopRequireDefault(_video);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

var _formula = __webpack_require__(74);

var _formula2 = _interopRequireDefault(_formula);

var _syntax = __webpack_require__(75);

var _syntax2 = _interopRequireDefault(_syntax);

var _toolbar = __webpack_require__(57);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _icons = __webpack_require__(41);

var _icons2 = _interopRequireDefault(_icons);

var _picker = __webpack_require__(28);

var _picker2 = _interopRequireDefault(_picker);

var _colorPicker = __webpack_require__(59);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _iconPicker = __webpack_require__(60);

var _iconPicker2 = _interopRequireDefault(_iconPicker);

var _tooltip = __webpack_require__(61);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _bubble = __webpack_require__(108);

var _bubble2 = _interopRequireDefault(_bubble);

var _snow = __webpack_require__(62);

var _snow2 = _interopRequireDefault(_snow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core2.default.register({
  'attributors/attribute/direction': _direction.DirectionAttribute,

  'attributors/class/align': _align.AlignClass,
  'attributors/class/background': _background.BackgroundClass,
  'attributors/class/color': _color.ColorClass,
  'attributors/class/direction': _direction.DirectionClass,
  'attributors/class/font': _font.FontClass,
  'attributors/class/size': _size.SizeClass,

  'attributors/style/align': _align.AlignStyle,
  'attributors/style/background': _background.BackgroundStyle,
  'attributors/style/color': _color.ColorStyle,
  'attributors/style/direction': _direction.DirectionStyle,
  'attributors/style/font': _font.FontStyle,
  'attributors/style/size': _size.SizeStyle
}, true);

_core2.default.register({
  'formats/align': _align.AlignClass,
  'formats/direction': _direction.DirectionClass,
  'formats/indent': _indent.IndentClass,

  'formats/background': _background.BackgroundStyle,
  'formats/color': _color.ColorStyle,
  'formats/font': _font.FontClass,
  'formats/size': _size.SizeClass,

  'formats/blockquote': _blockquote2.default,
  'formats/code-block': _code2.default,
  'formats/header': _header2.default,
  'formats/list': _list2.default,

  'formats/bold': _bold2.default,
  'formats/code': _code.Code,
  'formats/italic': _italic2.default,
  'formats/link': _link2.default,
  'formats/script': _script2.default,
  'formats/strike': _strike2.default,
  'formats/underline': _underline2.default,

  'formats/image': _image2.default,
  'formats/video': _video2.default,

  'formats/list/item': _list.ListItem,

  'modules/formula': _formula2.default,
  'modules/syntax': _syntax2.default,
  'modules/toolbar': _toolbar2.default,

  'themes/bubble': _bubble2.default,
  'themes/snow': _snow2.default,

  'ui/icons': _icons2.default,
  'ui/picker': _picker2.default,
  'ui/icon-picker': _iconPicker2.default,
  'ui/color-picker': _colorPicker2.default,
  'ui/tooltip': _tooltip2.default
}, true);

exports.default = _core2.default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IdentAttributor = function (_Parchment$Attributor) {
  _inherits(IdentAttributor, _Parchment$Attributor);

  function IdentAttributor() {
    _classCallCheck(this, IdentAttributor);

    return _possibleConstructorReturn(this, (IdentAttributor.__proto__ || Object.getPrototypeOf(IdentAttributor)).apply(this, arguments));
  }

  _createClass(IdentAttributor, [{
    key: 'add',
    value: function add(node, value) {
      if (value === '+1' || value === '-1') {
        var indent = this.value(node) || 0;
        value = value === '+1' ? indent + 1 : indent - 1;
      }
      if (value === 0) {
        this.remove(node);
        return true;
      } else {
        return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'add', this).call(this, node, value);
      }
    }
  }, {
    key: 'canAdd',
    value: function canAdd(node, value) {
      return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, value) || _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, parseInt(value));
    }
  }, {
    key: 'value',
    value: function value(node) {
      return parseInt(_get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'value', this).call(this, node)) || undefined; // Don't return NaN
    }
  }]);

  return IdentAttributor;
}(_parchment2.default.Attributor.Class);

var IndentClass = new IdentAttributor('indent', 'ql-indent', {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});

exports.IndentClass = IndentClass;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blockquote = function (_Block) {
  _inherits(Blockquote, _Block);

  function Blockquote() {
    _classCallCheck(this, Blockquote);

    return _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(this, arguments));
  }

  return Blockquote;
}(_block2.default);

Blockquote.blotName = 'blockquote';
Blockquote.tagName = 'blockquote';

exports.default = Blockquote;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Block) {
  _inherits(Header, _Block);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, null, [{
    key: 'formats',
    value: function formats(domNode) {
      return this.tagName.indexOf(domNode.tagName) + 1;
    }
  }]);

  return Header;
}(_block2.default);

Header.blotName = 'header';
Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

exports.default = Header;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_Block) {
  _inherits(ListItem, _Block);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'format',
    value: function format(name, value) {
      if (name === List.blotName && !value) {
        this.replaceWith(_parchment2.default.create(this.statics.scope));
      } else {
        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'format', this).call(this, name, value);
      }
    }
  }, {
    key: 'remove',
    value: function remove() {
      if (this.prev == null && this.next == null) {
        this.parent.remove();
      } else {
        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'remove', this).call(this);
      }
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(name, value) {
      this.parent.isolate(this.offset(this.parent), this.length());
      if (name === this.parent.statics.blotName) {
        this.parent.replaceWith(name, value);
        return this;
      } else {
        this.parent.unwrap();
        return _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'replaceWith', this).call(this, name, value);
      }
    }
  }], [{
    key: 'formats',
    value: function formats(domNode) {
      return domNode.tagName === this.tagName ? undefined : _get(ListItem.__proto__ || Object.getPrototypeOf(ListItem), 'formats', this).call(this, domNode);
    }
  }]);

  return ListItem;
}(_block2.default);

ListItem.blotName = 'list-item';
ListItem.tagName = 'LI';

var List = function (_Container) {
  _inherits(List, _Container);

  _createClass(List, null, [{
    key: 'create',
    value: function create(value) {
      var tagName = value === 'ordered' ? 'OL' : 'UL';
      var node = _get(List.__proto__ || Object.getPrototypeOf(List), 'create', this).call(this, tagName);
      if (value === 'checked' || value === 'unchecked') {
        node.setAttribute('data-checked', value === 'checked');
      }
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      if (domNode.tagName === 'OL') return 'ordered';
      if (domNode.tagName === 'UL') {
        if (domNode.hasAttribute('data-checked')) {
          return domNode.getAttribute('data-checked') === 'true' ? 'checked' : 'unchecked';
        } else {
          return 'bullet';
        }
      }
      return undefined;
    }
  }]);

  function List(domNode) {
    _classCallCheck(this, List);

    var _this2 = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, domNode));

    var listEventHandler = function listEventHandler(e) {
      if (e.target.parentNode !== domNode) return;
      var format = _this2.statics.formats(domNode);
      var blot = _parchment2.default.find(e.target);
      if (format === 'checked') {
        blot.format('list', 'unchecked');
      } else if (format === 'unchecked') {
        blot.format('list', 'checked');
      }
    };

    domNode.addEventListener('touchstart', listEventHandler);
    domNode.addEventListener('mousedown', listEventHandler);
    return _this2;
  }

  _createClass(List, [{
    key: 'format',
    value: function format(name, value) {
      if (this.children.length > 0) {
        this.children.tail.format(name, value);
      }
    }
  }, {
    key: 'formats',
    value: function formats() {
      // We don't inherit from FormatBlot
      return _defineProperty({}, this.statics.blotName, this.statics.formats(this.domNode));
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      if (blot instanceof ListItem) {
        _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'insertBefore', this).call(this, blot, ref);
      } else {
        var index = ref == null ? this.length() : ref.offset(this);
        var after = this.split(index);
        after.parent.insertBefore(blot, after);
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'optimize', this).call(this, context);
      var next = this.next;
      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName && next.domNode.getAttribute('data-checked') === this.domNode.getAttribute('data-checked')) {
        next.moveChildren(this);
        next.remove();
      }
    }
  }, {
    key: 'replace',
    value: function replace(target) {
      if (target.statics.blotName !== this.statics.blotName) {
        var item = _parchment2.default.create(this.statics.defaultChild);
        target.moveChildren(item);
        this.appendChild(item);
      }
      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'replace', this).call(this, target);
    }
  }]);

  return List;
}(_container2.default);

List.blotName = 'list';
List.scope = _parchment2.default.Scope.BLOCK_BLOT;
List.tagName = ['OL', 'UL'];
List.defaultChild = 'list-item';
List.allowedChildren = [ListItem];

exports.ListItem = ListItem;
exports.default = List;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bold = __webpack_require__(56);

var _bold2 = _interopRequireDefault(_bold);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Italic = function (_Bold) {
  _inherits(Italic, _Bold);

  function Italic() {
    _classCallCheck(this, Italic);

    return _possibleConstructorReturn(this, (Italic.__proto__ || Object.getPrototypeOf(Italic)).apply(this, arguments));
  }

  return Italic;
}(_bold2.default);

Italic.blotName = 'italic';
Italic.tagName = ['EM', 'I'];

exports.default = Italic;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Script = function (_Inline) {
  _inherits(Script, _Inline);

  function Script() {
    _classCallCheck(this, Script);

    return _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).apply(this, arguments));
  }

  _createClass(Script, null, [{
    key: 'create',
    value: function create(value) {
      if (value === 'super') {
        return document.createElement('sup');
      } else if (value === 'sub') {
        return document.createElement('sub');
      } else {
        return _get(Script.__proto__ || Object.getPrototypeOf(Script), 'create', this).call(this, value);
      }
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      if (domNode.tagName === 'SUB') return 'sub';
      if (domNode.tagName === 'SUP') return 'super';
      return undefined;
    }
  }]);

  return Script;
}(_inline2.default);

Script.blotName = 'script';
Script.tagName = ['SUB', 'SUP'];

exports.default = Script;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Strike = function (_Inline) {
  _inherits(Strike, _Inline);

  function Strike() {
    _classCallCheck(this, Strike);

    return _possibleConstructorReturn(this, (Strike.__proto__ || Object.getPrototypeOf(Strike)).apply(this, arguments));
  }

  return Strike;
}(_inline2.default);

Strike.blotName = 'strike';
Strike.tagName = 'S';

exports.default = Strike;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inline = __webpack_require__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Underline = function (_Inline) {
  _inherits(Underline, _Inline);

  function Underline() {
    _classCallCheck(this, Underline);

    return _possibleConstructorReturn(this, (Underline.__proto__ || Object.getPrototypeOf(Underline)).apply(this, arguments));
  }

  return Underline;
}(_inline2.default);

Underline.blotName = 'underline';
Underline.tagName = 'U';

exports.default = Underline;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _link = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ATTRIBUTES = ['alt', 'height', 'width'];

var Image = function (_Parchment$Embed) {
  _inherits(Image, _Parchment$Embed);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'format',
    value: function format(name, value) {
      if (ATTRIBUTES.indexOf(name) > -1) {
        if (value) {
          this.domNode.setAttribute(name, value);
        } else {
          this.domNode.removeAttribute(name);
        }
      } else {
        _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), 'format', this).call(this, name, value);
      }
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Image.__proto__ || Object.getPrototypeOf(Image), 'create', this).call(this, value);
      if (typeof value === 'string') {
        node.setAttribute('src', this.sanitize(value));
      }
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return ATTRIBUTES.reduce(function (formats, attribute) {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute);
        }
        return formats;
      }, {});
    }
  }, {
    key: 'match',
    value: function match(url) {
      return (/\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url)
      );
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return (0, _link.sanitize)(url, ['http', 'https', 'data']) ? url : '//:0';
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('src');
    }
  }]);

  return Image;
}(_parchment2.default.Embed);

Image.blotName = 'image';
Image.tagName = 'IMG';

exports.default = Image;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _block = __webpack_require__(4);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ATTRIBUTES = ['height', 'width'];

var Video = function (_BlockEmbed) {
  _inherits(Video, _BlockEmbed);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  _createClass(Video, [{
    key: 'format',
    value: function format(name, value) {
      if (ATTRIBUTES.indexOf(name) > -1) {
        if (value) {
          this.domNode.setAttribute(name, value);
        } else {
          this.domNode.removeAttribute(name);
        }
      } else {
        _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), 'format', this).call(this, name, value);
      }
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Video.__proto__ || Object.getPrototypeOf(Video), 'create', this).call(this, value);
      node.setAttribute('frameborder', '0');
      node.setAttribute('allowfullscreen', true);
      node.setAttribute('src', this.sanitize(value));
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return ATTRIBUTES.reduce(function (formats, attribute) {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute);
        }
        return formats;
      }, {});
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return _link2.default.sanitize(url);
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('src');
    }
  }]);

  return Video;
}(_block.BlockEmbed);

Video.blotName = 'video';
Video.className = 'ql-video';
Video.tagName = 'IFRAME';

exports.default = Video;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormulaBlot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _embed = __webpack_require__(35);

var _embed2 = _interopRequireDefault(_embed);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormulaBlot = function (_Embed) {
  _inherits(FormulaBlot, _Embed);

  function FormulaBlot() {
    _classCallCheck(this, FormulaBlot);

    return _possibleConstructorReturn(this, (FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot)).apply(this, arguments));
  }

  _createClass(FormulaBlot, null, [{
    key: 'create',
    value: function create(value) {
      var node = _get(FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot), 'create', this).call(this, value);
      if (typeof value === 'string') {
        window.katex.render(value, node, {
          throwOnError: false,
          errorColor: '#f00'
        });
        node.setAttribute('data-value', value);
      }
      return node;
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('data-value');
    }
  }]);

  return FormulaBlot;
}(_embed2.default);

FormulaBlot.blotName = 'formula';
FormulaBlot.className = 'ql-formula';
FormulaBlot.tagName = 'SPAN';

var Formula = function (_Module) {
  _inherits(Formula, _Module);

  _createClass(Formula, null, [{
    key: 'register',
    value: function register() {
      _quill2.default.register(FormulaBlot, true);
    }
  }]);

  function Formula() {
    _classCallCheck(this, Formula);

    var _this2 = _possibleConstructorReturn(this, (Formula.__proto__ || Object.getPrototypeOf(Formula)).call(this));

    if (window.katex == null) {
      throw new Error('Formula module requires KaTeX.');
    }
    return _this2;
  }

  return Formula;
}(_module2.default);

exports.FormulaBlot = FormulaBlot;
exports.default = Formula;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CodeToken = exports.CodeBlock = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __webpack_require__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(9);

var _module2 = _interopRequireDefault(_module);

var _code = __webpack_require__(13);

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SyntaxCodeBlock = function (_CodeBlock) {
  _inherits(SyntaxCodeBlock, _CodeBlock);

  function SyntaxCodeBlock() {
    _classCallCheck(this, SyntaxCodeBlock);

    return _possibleConstructorReturn(this, (SyntaxCodeBlock.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock)).apply(this, arguments));
  }

  _createClass(SyntaxCodeBlock, [{
    key: 'replaceWith',
    value: function replaceWith(block) {
      this.domNode.textContent = this.domNode.textContent;
      this.attach();
      _get(SyntaxCodeBlock.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock.prototype), 'replaceWith', this).call(this, block);
    }
  }, {
    key: 'highlight',
    value: function highlight(_highlight) {
      var text = this.domNode.textContent;
      if (this.cachedText !== text) {
        if (text.trim().length > 0 || this.cachedText == null) {
          this.domNode.innerHTML = _highlight(text);
          this.domNode.normalize();
          this.attach();
        }
        this.cachedText = text;
      }
    }
  }]);

  return SyntaxCodeBlock;
}(_code2.default);

SyntaxCodeBlock.className = 'ql-syntax';

var CodeToken = new _parchment2.default.Attributor.Class('token', 'hljs', {
  scope: _parchment2.default.Scope.INLINE
});

var Syntax = function (_Module) {
  _inherits(Syntax, _Module);

  _createClass(Syntax, null, [{
    key: 'register',
    value: function register() {
      _quill2.default.register(CodeToken, true);
      _quill2.default.register(SyntaxCodeBlock, true);
    }
  }]);

  function Syntax(quill, options) {
    _classCallCheck(this, Syntax);

    var _this2 = _possibleConstructorReturn(this, (Syntax.__proto__ || Object.getPrototypeOf(Syntax)).call(this, quill, options));

    if (typeof _this2.options.highlight !== 'function') {
      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
    }
    var timer = null;
    _this2.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        _this2.highlight();
        timer = null;
      }, _this2.options.interval);
    });
    _this2.highlight();
    return _this2;
  }

  _createClass(Syntax, [{
    key: 'highlight',
    value: function highlight() {
      var _this3 = this;

      if (this.quill.selection.composing) return;
      this.quill.update(_quill2.default.sources.USER);
      var range = this.quill.getSelection();
      this.quill.scroll.descendants(SyntaxCodeBlock).forEach(function (code) {
        code.highlight(_this3.options.highlight);
      });
      this.quill.update(_quill2.default.sources.SILENT);
      if (range != null) {
        this.quill.setSelection(range, _quill2.default.sources.SILENT);
      }
    }
  }]);

  return Syntax;
}(_module2.default);

Syntax.DEFAULTS = {
  highlight: function () {
    if (window.hljs == null) return null;
    return function (text) {
      var result = window.hljs.highlightAuto(text);
      return result.value;
    };
  }(),
  interval: 1000
};

exports.CodeBlock = SyntaxCodeBlock;
exports.CodeToken = CodeToken;
exports.default = Syntax;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=4 y=5></rect> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=11 y=5></rect> <path class=\"ql-even ql-fill ql-stroke\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\"ql-even ql-fill ql-stroke\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"></polygon> <line class=\"ql-stroke ql-fill\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>";

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"></polygon> <line class=\"ql-stroke ql-fill\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>";

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform=\"translate(24 18) rotate(-180)\"/> </svg>";

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>";

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>";

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>";

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg>";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"></polyline> </svg>";

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"5 7 5 11 3 9 5 7\"></polyline> </svg>";

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\"ql-even ql-stroke\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\"ql-even ql-stroke\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\"ql-stroke ql-thin\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\"ql-stroke ql-thin\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\"ql-stroke ql-thin\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\"3 4 4 5 6 3\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\"3 14 4 15 6 13\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"3 9 4 10 6 8\"></polyline> </svg>";

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>";

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>";

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>";

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=ql-stroke points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=ql-stroke points=\"7 7 9 5 11 7 7 7\"></polygon> </svg>";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BubbleTooltip = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _emitter = __webpack_require__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _base = __webpack_require__(43);

var _base2 = _interopRequireDefault(_base);

var _selection = __webpack_require__(15);

var _icons = __webpack_require__(41);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{ header: 1 }, { header: 2 }, 'blockquote']];

var BubbleTheme = function (_BaseTheme) {
  _inherits(BubbleTheme, _BaseTheme);

  function BubbleTheme(quill, options) {
    _classCallCheck(this, BubbleTheme);

    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    var _this = _possibleConstructorReturn(this, (BubbleTheme.__proto__ || Object.getPrototypeOf(BubbleTheme)).call(this, quill, options));

    _this.quill.container.classList.add('ql-bubble');
    return _this;
  }

  _createClass(BubbleTheme, [{
    key: 'extendToolbar',
    value: function extendToolbar(toolbar) {
      this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
      this.tooltip.root.appendChild(toolbar.container);
      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
    }
  }]);

  return BubbleTheme;
}(_base2.default);

BubbleTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link: function link(value) {
          if (!value) {
            this.quill.format('link', false);
          } else {
            this.quill.theme.tooltip.edit();
          }
        }
      }
    }
  }
});

var BubbleTooltip = function (_BaseTooltip) {
  _inherits(BubbleTooltip, _BaseTooltip);

  function BubbleTooltip(quill, bounds) {
    _classCallCheck(this, BubbleTooltip);

    var _this2 = _possibleConstructorReturn(this, (BubbleTooltip.__proto__ || Object.getPrototypeOf(BubbleTooltip)).call(this, quill, bounds));

    _this2.quill.on(_emitter2.default.events.EDITOR_CHANGE, function (type, range, oldRange, source) {
      if (type !== _emitter2.default.events.SELECTION_CHANGE) return;
      if (range != null && range.length > 0 && source === _emitter2.default.sources.USER) {
        _this2.show();
        // Lock our width so we will expand beyond our offsetParent boundaries
        _this2.root.style.left = '0px';
        _this2.root.style.width = '';
        _this2.root.style.width = _this2.root.offsetWidth + 'px';
        var lines = _this2.quill.getLines(range.index, range.length);
        if (lines.length === 1) {
          _this2.position(_this2.quill.getBounds(range));
        } else {
          var lastLine = lines[lines.length - 1];
          var index = _this2.quill.getIndex(lastLine);
          var length = Math.min(lastLine.length() - 1, range.index + range.length - index);
          var _bounds = _this2.quill.getBounds(new _selection.Range(index, length));
          _this2.position(_bounds);
        }
      } else if (document.activeElement !== _this2.textbox && _this2.quill.hasFocus()) {
        _this2.hide();
      }
    });
    return _this2;
  }

  _createClass(BubbleTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this3 = this;

      _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'listen', this).call(this);
      this.root.querySelector('.ql-close').addEventListener('click', function () {
        _this3.root.classList.remove('ql-editing');
      });
      this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZE, function () {
        // Let selection be restored by toolbar handlers before repositioning
        setTimeout(function () {
          if (_this3.root.classList.contains('ql-hidden')) return;
          var range = _this3.quill.getSelection();
          if (range != null) {
            _this3.position(_this3.quill.getBounds(range));
          }
        }, 1);
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.show();
    }
  }, {
    key: 'position',
    value: function position(reference) {
      var shift = _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'position', this).call(this, reference);
      var arrow = this.root.querySelector('.ql-tooltip-arrow');
      arrow.style.marginLeft = '';
      if (shift === 0) return shift;
      arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + 'px';
    }
  }]);

  return BubbleTooltip;
}(_base.BaseTooltip);

BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');

exports.BubbleTooltip = BubbleTooltip;
exports.default = BubbleTheme;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ })
/******/ ])["default"];
});
;/*! AdminLTE app.js
* ================
* Main JS application file for AdminLTE v2. This file
* should be included in all pages. It controls some layout
* options and implements exclusive AdminLTE plugins.
*
* @Author  Almsaeed Studio
* @Support <https://www.almsaeedstudio.com>
* @Email   <abdullah@almsaeedstudio.com>
* @version 2.4.2
* @repository git://github.com/almasaeed2010/AdminLTE.git
* @license MIT <http://opensource.org/licenses/MIT>
*/
if ("undefined" == typeof jQuery) throw new Error("AdminLTE requires jQuery"); +function (a) { "use strict"; function b(b) { return this.each(function () { var e = a(this), g = e.data(c); if (!g) { var h = a.extend({}, d, e.data(), "object" == typeof b && b); e.data(c, g = new f(e, h)) } if ("string" == typeof g) { if (void 0 === g[b]) throw new Error("No method named " + b); g[b]() } }) } var c = "lte.boxrefresh", d = { source: "", params: {}, trigger: ".refresh-btn", content: ".box-body", loadInContent: !0, responseType: "", overlayTemplate: '<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>', onLoadStart: function () { }, onLoadDone: function (a) { return a } }, e = { data: '[data-widget="box-refresh"]' }, f = function (b, c) { if (this.element = b, this.options = c, this.$overlay = a(c.overlay), "" === c.source) throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option."); this._setUpListeners(), this.load() }; f.prototype.load = function () { this._addOverlay(), this.options.onLoadStart.call(a(this)), a.get(this.options.source, this.options.params, function (b) { this.options.loadInContent && a(this.options.content).html(b), this.options.onLoadDone.call(a(this), b), this._removeOverlay() }.bind(this), "" !== this.options.responseType && this.options.responseType) }, f.prototype._setUpListeners = function () { a(this.element).on("click", e.trigger, function (a) { a && a.preventDefault(), this.load() }.bind(this)) }, f.prototype._addOverlay = function () { a(this.element).append(this.$overlay) }, f.prototype._removeOverlay = function () { a(this.element).remove(this.$overlay) }; var g = a.fn.boxRefresh; a.fn.boxRefresh = b, a.fn.boxRefresh.Constructor = f, a.fn.boxRefresh.noConflict = function () { return a.fn.boxRefresh = g, this }, a(window).on("load", function () { a(e.data).each(function () { b.call(a(this)) }) }) }(jQuery), function (a) { "use strict"; function b(b) { return this.each(function () { var e = a(this), f = e.data(c); if (!f) { var g = a.extend({}, d, e.data(), "object" == typeof b && b); e.data(c, f = new h(e, g)) } if ("string" == typeof b) { if (void 0 === f[b]) throw new Error("No method named " + b); f[b]() } }) } var c = "lte.boxwidget", d = { animationSpeed: 500, collapseTrigger: '[data-widget="collapse"]', removeTrigger: '[data-widget="remove"]', collapseIcon: "fa-minus", expandIcon: "fa-plus", removeIcon: "fa-times" }, e = { data: ".box", collapsed: ".collapsed-box", header: ".box-header", body: ".box-body", footer: ".box-footer", tools: ".box-tools" }, f = { collapsed: "collapsed-box" }, g = { collapsed: "collapsed.boxwidget", expanded: "expanded.boxwidget", removed: "removed.boxwidget" }, h = function (a, b) { this.element = a, this.options = b, this._setUpListeners() }; h.prototype.toggle = function () { a(this.element).is(e.collapsed) ? this.expand() : this.collapse() }, h.prototype.expand = function () { var b = a.Event(g.expanded), c = this.options.collapseIcon, d = this.options.expandIcon; a(this.element).removeClass(f.collapsed), a(this.element).children(e.header + ", " + e.body + ", " + e.footer).children(e.tools).find("." + d).removeClass(d).addClass(c), a(this.element).children(e.body + ", " + e.footer).slideDown(this.options.animationSpeed, function () { a(this.element).trigger(b) }.bind(this)) }, h.prototype.collapse = function () { var b = a.Event(g.collapsed), c = this.options.collapseIcon, d = this.options.expandIcon; a(this.element).children(e.header + ", " + e.body + ", " + e.footer).children(e.tools).find("." + c).removeClass(c).addClass(d), a(this.element).children(e.body + ", " + e.footer).slideUp(this.options.animationSpeed, function () { a(this.element).addClass(f.collapsed), a(this.element).trigger(b) }.bind(this)) }, h.prototype.remove = function () { var b = a.Event(g.removed); a(this.element).slideUp(this.options.animationSpeed, function () { a(this.element).trigger(b), a(this.element).remove() }.bind(this)) }, h.prototype._setUpListeners = function () { var b = this; a(this.element).on("click", this.options.collapseTrigger, function (c) { return c && c.preventDefault(), b.toggle(a(this)), !1 }), a(this.element).on("click", this.options.removeTrigger, function (c) { return c && c.preventDefault(), b.remove(a(this)), !1 }) }; var i = a.fn.boxWidget; a.fn.boxWidget = b, a.fn.boxWidget.Constructor = h, a.fn.boxWidget.noConflict = function () { return a.fn.boxWidget = i, this }, a(window).on("load", function () { a(e.data).each(function () { b.call(a(this)) }) }) }(jQuery), function (a) { "use strict"; function b(b) { return this.each(function () { var e = a(this), f = e.data(c); if (!f) { var g = a.extend({}, d, e.data(), "object" == typeof b && b); e.data(c, f = new h(e, g)) } "string" == typeof b && f.toggle() }) } var c = "lte.controlsidebar", d = { slide: !0 }, e = { sidebar: ".control-sidebar", data: '[data-toggle="control-sidebar"]', open: ".control-sidebar-open", bg: ".control-sidebar-bg", wrapper: ".wrapper", content: ".content-wrapper", boxed: ".layout-boxed" }, f = { open: "control-sidebar-open", fixed: "fixed" }, g = { collapsed: "collapsed.controlsidebar", expanded: "expanded.controlsidebar" }, h = function (a, b) { this.element = a, this.options = b, this.hasBindedResize = !1, this.init() }; h.prototype.init = function () { a(this.element).is(e.data) || a(this).on("click", this.toggle), this.fix(), a(window).resize(function () { this.fix() }.bind(this)) }, h.prototype.toggle = function (b) { b && b.preventDefault(), this.fix(), a(e.sidebar).is(e.open) || a("body").is(e.open) ? this.collapse() : this.expand() }, h.prototype.expand = function () { this.options.slide ? a(e.sidebar).addClass(f.open) : a("body").addClass(f.open), a(this.element).trigger(a.Event(g.expanded)) }, h.prototype.collapse = function () { a("body, " + e.sidebar).removeClass(f.open), a(this.element).trigger(a.Event(g.collapsed)) }, h.prototype.fix = function () { a("body").is(e.boxed) && this._fixForBoxed(a(e.bg)) }, h.prototype._fixForBoxed = function (b) { b.css({ position: "absolute", height: a(e.wrapper).height() }) }; var i = a.fn.controlSidebar; a.fn.controlSidebar = b, a.fn.controlSidebar.Constructor = h, a.fn.controlSidebar.noConflict = function () { return a.fn.controlSidebar = i, this }, a(document).on("click", e.data, function (c) { c && c.preventDefault(), b.call(a(this), "toggle") }) }(jQuery), function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data(c); e || d.data(c, e = new f(d)), "string" == typeof b && e.toggle(d) }) } var c = "lte.directchat", d = { data: '[data-widget="chat-pane-toggle"]', box: ".direct-chat" }, e = { open: "direct-chat-contacts-open" }, f = function (a) { this.element = a }; f.prototype.toggle = function (a) { a.parents(d.box).first().toggleClass(e.open) }; var g = a.fn.directChat; a.fn.directChat = b, a.fn.directChat.Constructor = f, a.fn.directChat.noConflict = function () { return a.fn.directChat = g, this }, a(document).on("click", d.data, function (c) { c && c.preventDefault(), b.call(a(this), "toggle") }) }(jQuery), function (a) { "use strict"; function b(b) { return this.each(function () { var e = a(this), f = e.data(c); if (!f) { var h = a.extend({}, d, e.data(), "object" == typeof b && b); e.data(c, f = new g(h)) } if ("string" == typeof b) { if (void 0 === f[b]) throw new Error("No method named " + b); f[b]() } }) } var c = "lte.layout", d = { slimscroll: !0, resetHeight: !0 }, e = { wrapper: ".wrapper", contentWrapper: ".content-wrapper", layoutBoxed: ".layout-boxed", mainFooter: ".main-footer", mainHeader: ".main-header", sidebar: ".sidebar", controlSidebar: ".control-sidebar", fixed: ".fixed", sidebarMenu: ".sidebar-menu", logo: ".main-header .logo" }, f = { fixed: "fixed", holdTransition: "hold-transition" }, g = function (a) { this.options = a, this.bindedResize = !1, this.activate() }; g.prototype.activate = function () { this.fix(), this.fixSidebar(), a("body").removeClass(f.holdTransition), this.options.resetHeight && a("body, html, " + e.wrapper).css({ height: "auto", "min-height": "100%" }), this.bindedResize || (a(window).resize(function () { this.fix(), this.fixSidebar(), a(e.logo + ", " + e.sidebar).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () { this.fix(), this.fixSidebar() }.bind(this)) }.bind(this)), this.bindedResize = !0), a(e.sidebarMenu).on("expanded.tree", function () { this.fix(), this.fixSidebar() }.bind(this)), a(e.sidebarMenu).on("collapsed.tree", function () { this.fix(), this.fixSidebar() }.bind(this)) }, g.prototype.fix = function () { a(e.layoutBoxed + " > " + e.wrapper).css("overflow", "hidden"); var b = a(e.mainFooter).outerHeight() || 0, c = a(e.mainHeader).outerHeight() + b, d = a(window).height(), g = a(e.sidebar).height() || 0; if (a("body").hasClass(f.fixed)) a(e.contentWrapper).css("min-height", d - b); else { var h; d >= g ? (a(e.contentWrapper).css("min-height", d - c), h = d - c) : (a(e.contentWrapper).css("min-height", g), h = g); var i = a(e.controlSidebar); void 0 !== i && i.height() > h && a(e.contentWrapper).css("min-height", i.height()) } }, g.prototype.fixSidebar = function () { if (!a("body").hasClass(f.fixed)) return void (void 0 !== a.fn.slimScroll && a(e.sidebar).slimScroll({ destroy: !0 }).height("auto")); this.options.slimscroll && void 0 !== a.fn.slimScroll && a(e.sidebar).slimScroll({ height: a(window).height() - a(e.mainHeader).height() + "px" }) }; var h = a.fn.layout; a.fn.layout = b, a.fn.layout.Constuctor = g, a.fn.layout.noConflict = function () { return a.fn.layout = h, this }, a(window).on("load", function () { b.call(a("body")) }) }(jQuery), function (a) { "use strict"; function b(b) { return this.each(function () { var e = a(this), f = e.data(c); if (!f) { var g = a.extend({}, d, e.data(), "object" == typeof b && b); e.data(c, f = new h(g)) } "toggle" === b && f.toggle() }) } var c = "lte.pushmenu", d = { collapseScreenSize: 767, expandOnHover: !1, expandTransitionDelay: 200 }, e = { collapsed: ".sidebar-collapse", open: ".sidebar-open", mainSidebar: ".main-sidebar", contentWrapper: ".content-wrapper", searchInput: ".sidebar-form .form-control", button: '[data-toggle="push-menu"]', mini: ".sidebar-mini", expanded: ".sidebar-expanded-on-hover", layoutFixed: ".fixed" }, f = { collapsed: "sidebar-collapse", open: "sidebar-open", mini: "sidebar-mini", expanded: "sidebar-expanded-on-hover", expandFeature: "sidebar-mini-expand-feature", layoutFixed: "fixed" }, g = { expanded: "expanded.pushMenu", collapsed: "collapsed.pushMenu" }, h = function (a) { this.options = a, this.init() }; h.prototype.init = function () { (this.options.expandOnHover || a("body").is(e.mini + e.layoutFixed)) && (this.expandOnHover(), a("body").addClass(f.expandFeature)), a(e.contentWrapper).click(function () { a(window).width() <= this.options.collapseScreenSize && a("body").hasClass(f.open) && this.close() }.bind(this)), a(e.searchInput).click(function (a) { a.stopPropagation() }) }, h.prototype.toggle = function () { var b = a(window).width(), c = !a("body").hasClass(f.collapsed); b <= this.options.collapseScreenSize && (c = a("body").hasClass(f.open)), c ? this.close() : this.open() }, h.prototype.open = function () { a(window).width() > this.options.collapseScreenSize ? a("body").removeClass(f.collapsed).trigger(a.Event(g.expanded)) : a("body").addClass(f.open).trigger(a.Event(g.expanded)) }, h.prototype.close = function () { a(window).width() > this.options.collapseScreenSize ? a("body").addClass(f.collapsed).trigger(a.Event(g.collapsed)) : a("body").removeClass(f.open + " " + f.collapsed).trigger(a.Event(g.collapsed)) }, h.prototype.expandOnHover = function () { a(e.mainSidebar).hover(function () { a("body").is(e.mini + e.collapsed) && a(window).width() > this.options.collapseScreenSize && this.expand() }.bind(this), function () { a("body").is(e.expanded) && this.collapse() }.bind(this)) }, h.prototype.expand = function () { setTimeout(function () { a("body").removeClass(f.collapsed).addClass(f.expanded) }, this.options.expandTransitionDelay) }, h.prototype.collapse = function () { setTimeout(function () { a("body").removeClass(f.expanded).addClass(f.collapsed) }, this.options.expandTransitionDelay) }; var i = a.fn.pushMenu; a.fn.pushMenu = b, a.fn.pushMenu.Constructor = h, a.fn.pushMenu.noConflict = function () { return a.fn.pushMenu = i, this }, a(document).on("click", e.button, function (c) { c.preventDefault(), b.call(a(this), "toggle") }), a(window).on("load", function () { b.call(a(e.button)) }) }(jQuery), function (a) { "use strict"; function b(b) { return this.each(function () { var e = a(this), f = e.data(c); if (!f) { var h = a.extend({}, d, e.data(), "object" == typeof b && b); e.data(c, f = new g(e, h)) } if ("string" == typeof f) { if (void 0 === f[b]) throw new Error("No method named " + b); f[b]() } }) } var c = "lte.todolist", d = { onCheck: function (a) { return a }, onUnCheck: function (a) { return a } }, e = { data: '[data-widget="todo-list"]' }, f = { done: "done" }, g = function (a, b) { this.element = a, this.options = b, this._setUpListeners() }; g.prototype.toggle = function (a) { if (a.parents(e.li).first().toggleClass(f.done), !a.prop("checked")) return void this.unCheck(a); this.check(a) }, g.prototype.check = function (a) { this.options.onCheck.call(a) }, g.prototype.unCheck = function (a) { this.options.onUnCheck.call(a) }, g.prototype._setUpListeners = function () { var b = this; a(this.element).on("change ifChanged", "input:checkbox", function () { b.toggle(a(this)) }) }; var h = a.fn.todoList; a.fn.todoList = b, a.fn.todoList.Constructor = g, a.fn.todoList.noConflict = function () { return a.fn.todoList = h, this }, a(window).on("load", function () { a(e.data).each(function () { b.call(a(this)) }) }) }(jQuery), function (a) { "use strict"; function b(b) { return this.each(function () { var e = a(this); if (!e.data(c)) { var f = a.extend({}, d, e.data(), "object" == typeof b && b); e.data(c, new h(e, f)) } }) } var c = "lte.tree", d = { animationSpeed: 500, accordion: !0, followLink: !1, trigger: ".treeview a" }, e = { tree: ".tree", treeview: ".treeview", treeviewMenu: ".treeview-menu", open: ".menu-open, .active", li: "li", data: '[data-widget="tree"]', active: ".active" }, f = { open: "menu-open", tree: "tree" }, g = { collapsed: "collapsed.tree", expanded: "expanded.tree" }, h = function (b, c) { this.element = b, this.options = c, a(this.element).addClass(f.tree), a(e.treeview + e.active, this.element).addClass(f.open), this._setUpListeners() }; h.prototype.toggle = function (a, b) { var c = a.next(e.treeviewMenu), d = a.parent(), g = d.hasClass(f.open); d.is(e.treeview) && (this.options.followLink && "#" !== a.attr("href") || b.preventDefault(), g ? this.collapse(c, d) : this.expand(c, d)) }, h.prototype.expand = function (b, c) { var d = a.Event(g.expanded); if (this.options.accordion) { var h = c.siblings(e.open), i = h.children(e.treeviewMenu); this.collapse(i, h) } c.addClass(f.open), b.slideDown(this.options.animationSpeed, function () { a(this.element).trigger(d) }.bind(this)) }, h.prototype.collapse = function (b, c) { var d = a.Event(g.collapsed); b.find(e.open).removeClass(f.open), c.removeClass(f.open), b.slideUp(this.options.animationSpeed, function () { b.find(e.open + " > " + e.treeview).slideUp(), a(this.element).trigger(d) }.bind(this)) }, h.prototype._setUpListeners = function () { var b = this; a(this.element).on("click", this.options.trigger, function (c) { b.toggle(a(this), c) }) }; var i = a.fn.tree; a.fn.tree = b, a.fn.tree.Constructor = h, a.fn.tree.noConflict = function () { return a.fn.tree = i, this }, a(window).on("load", function () { a(e.data).each(function () { b.call(a(this)) }) }) }(jQuery);
;/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()});b.$results.find(".select2-results__option[aria-selected]").each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):h-g<0&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");if("true"===c.attr("aria-selected"))return void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{}));d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2");a(".select2.select2-container--open").each(function(){var b=a(this);this!=d[0]&&b.data("element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===e.$search.val()){var b=e.$searchContainer.prev(".select2-selection__choice");if(b.length>0){var d=b.data("data");e.searchRemoveChoice(d),a.preventDefault()}}});var f=document.documentMode,g=f&&f<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(g)return void e.$selection.off("input.search input.searchcheck");e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),void 0!==a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(null!=(b=c.data(a[0],"data")))return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("select2/compat/utils",["jquery"],function(a){function b(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&null!=(f=d(this))&&g.push(f)})),b.attr("class",g.join(" "))}return{syncCssClasses:b}}),b.define("select2/compat/containerCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("containerCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptContainerCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("containerCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/dropdownCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("dropdownCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptDropdownCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("dropdownCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/initSelection",["jquery"],function(a){function b(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=c.get("initSelection"),this._isInitialized=!1,a.call(this,b,c)}return b.prototype.current=function(b,c){var d=this;if(this._isInitialized)return void b.call(this,c);this.initSelection.call(null,this.$element,function(b){d._isInitialized=!0,a.isArray(b)||(b=[b]),c(b)})},b}),b.define("select2/compat/inputData",["jquery"],function(a){function b(a,b,c){this._currentData=[],this._valueSeparator=c.get("valueSeparator")||",","hidden"===b.prop("type")&&c.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),a.call(this,b,c)}return b.prototype.current=function(b,c){function d(b,c){var e=[];return b.selected||-1!==a.inArray(b.id,c)?(b.selected=!0,e.push(b)):b.selected=!1,b.children&&e.push.apply(e,d(b.children,c)),e}for(var e=[],f=0;f<this._currentData.length;f++){var g=this._currentData[f];e.push.apply(e,d(g,this.$element.val().split(this._valueSeparator)))}c(e)},b.prototype.select=function(b,c){if(this.options.get("multiple")){var d=this.$element.val();d+=this._valueSeparator+c.id,this.$element.val(d),this.$element.trigger("change")}else this.current(function(b){a.map(b,function(a){a.selected=!1})}),this.$element.val(c.id),this.$element.trigger("change")},b.prototype.unselect=function(a,b){var c=this;b.selected=!1,this.current(function(a){for(var d=[],e=0;e<a.length;e++){var f=a[e];b.id!=f.id&&d.push(f.id)}c.$element.val(d.join(c._valueSeparator)),c.$element.trigger("change")})},b.prototype.query=function(a,b,c){for(var d=[],e=0;e<this._currentData.length;e++){var f=this._currentData[e],g=this.matches(b,f);null!==g&&d.push(g)}c({results:d})},b.prototype.addOptions=function(b,c){var d=a.map(c,function(b){return a.data(b[0],"data")});this._currentData.push.apply(this._currentData,d)},b}),b.define("select2/compat/matcher",["jquery"],function(a){function b(b){function c(c,d){var e=a.extend(!0,{},d);if(null==c.term||""===a.trim(c.term))return e;if(d.children){for(var f=d.children.length-1;f>=0;f--){var g=d.children[f];b(c.term,g.text,g)||e.children.splice(f,1)}if(e.children.length>0)return e}return b(c.term,d.text,d)?e:null}return c}return b}),b.define("select2/compat/query",[],function(){function a(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),a.call(this,b,c)}return a.prototype.query=function(a,b,c){b.callback=c,this.options.get("query").call(null,b)},a}),b.define("select2/dropdown/attachContainer",[],function(){function a(a,b,c){a.call(this,b,c)}return a.prototype.position=function(a,b,c){c.find(".dropdown-wrapper").append(b),b.addClass("select2-dropdown--below"),c.addClass("select2-container--below")},a}),b.define("select2/dropdown/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$dropdown.on(d.join(" "),function(a){a.stopPropagation()})},a}),b.define("select2/selection/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$selection.on(d.join(" "),function(a){a.stopPropagation()})},a}),function(c){"function"==typeof b.define&&b.define.amd?b.define("jquery-mousewheel",["jquery"],c):"object"==typeof exports?module.exports=c:c(a)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||n<f)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120==0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
;/**
* @license Input Mask plugin for jquery
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2014 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 0.0.0
*/

(function ($) {
    if ($.fn.inputmask === undefined) {
        //helper functions    
        function isInputEventSupported(eventName) {
            var el = document.createElement('input'),
            eventName = 'on' + eventName,
            isSupported = (eventName in el);
            if (!isSupported) {
                el.setAttribute(eventName, 'return;');
                isSupported = typeof el[eventName] == 'function';
            }
            el = null;
            return isSupported;
        }
        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = opts.aliases[aliasStr];
            if (aliasDefinition) {
                if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts); //alias is another alias
                $.extend(true, opts, aliasDefinition);  //merge alias definition in the options
                $.extend(true, opts, options);  //reapply extra given options
                return true;
            }
            return false;
        }
        function generateMaskSets(opts) {
            var ms = [];
            var genmasks = []; //used to keep track of the masks that where processed, to avoid duplicates
            function getMaskTemplate(mask) {
                if (opts.numericInput) {
                    mask = mask.split('').reverse().join('');
                }
                var escaped = false, outCount = 0, greedy = opts.greedy, repeat = opts.repeat;
                if (repeat == "*") greedy = false;
                //if (greedy == true && opts.placeholder == "") opts.placeholder = " ";
                if (mask.length == 1 && greedy == false && repeat != 0) { opts.placeholder = ""; } //hide placeholder with single non-greedy mask
                var singleMask = $.map(mask.split(""), function (element, index) {
                    var outElem = [];
                    if (element == opts.escapeChar) {
                        escaped = true;
                    }
                    else if ((element != opts.optionalmarker.start && element != opts.optionalmarker.end) || escaped) {
                        var maskdef = opts.definitions[element];
                        if (maskdef && !escaped) {
                            for (var i = 0; i < maskdef.cardinality; i++) {
                                outElem.push(opts.placeholder.charAt((outCount + i) % opts.placeholder.length));
                            }
                        } else {
                            outElem.push(element);
                            escaped = false;
                        }
                        outCount += outElem.length;
                        return outElem;
                    }
                });

                //allocate repetitions
                var repeatedMask = singleMask.slice();
                for (var i = 1; i < repeat && greedy; i++) {
                    repeatedMask = repeatedMask.concat(singleMask.slice());
                }

                return { "mask": repeatedMask, "repeat": repeat, "greedy": greedy };
            }
            //test definition => {fn: RegExp/function, cardinality: int, optionality: bool, newBlockMarker: bool, offset: int, casing: null/upper/lower, def: definitionSymbol}
            function getTestingChain(mask) {
                if (opts.numericInput) {
                    mask = mask.split('').reverse().join('');
                }
                var isOptional = false, escaped = false;
                var newBlockMarker = false; //indicates wheter the begin/ending of a block should be indicated

                return $.map(mask.split(""), function (element, index) {
                    var outElem = [];

                    if (element == opts.escapeChar) {
                        escaped = true;
                    } else if (element == opts.optionalmarker.start && !escaped) {
                        isOptional = true;
                        newBlockMarker = true;
                    }
                    else if (element == opts.optionalmarker.end && !escaped) {
                        isOptional = false;
                        newBlockMarker = true;
                    }
                    else {
                        var maskdef = opts.definitions[element];
                        if (maskdef && !escaped) {
                            var prevalidators = maskdef["prevalidator"], prevalidatorsL = prevalidators ? prevalidators.length : 0;
                            for (var i = 1; i < maskdef.cardinality; i++) {
                                var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [], validator = prevalidator["validator"], cardinality = prevalidator["cardinality"];
                                outElem.push({ fn: validator ? typeof validator == 'string' ? new RegExp(validator) : new function () { this.test = validator; } : new RegExp("."), cardinality: cardinality ? cardinality : 1, optionality: isOptional, newBlockMarker: isOptional == true ? newBlockMarker : false, offset: 0, casing: maskdef["casing"], def: maskdef["definitionSymbol"] || element });
                                if (isOptional == true) //reset newBlockMarker
                                    newBlockMarker = false;
                            }
                            outElem.push({ fn: maskdef.validator ? typeof maskdef.validator == 'string' ? new RegExp(maskdef.validator) : new function () { this.test = maskdef.validator; } : new RegExp("."), cardinality: maskdef.cardinality, optionality: isOptional, newBlockMarker: newBlockMarker, offset: 0, casing: maskdef["casing"], def: maskdef["definitionSymbol"] || element });
                        } else {
                            outElem.push({ fn: null, cardinality: 0, optionality: isOptional, newBlockMarker: newBlockMarker, offset: 0, casing: null, def: element });
                            escaped = false;
                        }
                        //reset newBlockMarker
                        newBlockMarker = false;
                        return outElem;
                    }
                });
            }
            function markOptional(maskPart) { //needed for the clearOptionalTail functionality
                return opts.optionalmarker.start + maskPart + opts.optionalmarker.end;
            }
            function splitFirstOptionalEndPart(maskPart) {
                var optionalStartMarkers = 0, optionalEndMarkers = 0, mpl = maskPart.length;
                for (var i = 0; i < mpl; i++) {
                    if (maskPart.charAt(i) == opts.optionalmarker.start) {
                        optionalStartMarkers++;
                    }
                    if (maskPart.charAt(i) == opts.optionalmarker.end) {
                        optionalEndMarkers++;
                    }
                    if (optionalStartMarkers > 0 && optionalStartMarkers == optionalEndMarkers)
                        break;
                }
                var maskParts = [maskPart.substring(0, i)];
                if (i < mpl) {
                    maskParts.push(maskPart.substring(i + 1, mpl));
                }
                return maskParts;
            }
            function splitFirstOptionalStartPart(maskPart) {
                var mpl = maskPart.length;
                for (var i = 0; i < mpl; i++) {
                    if (maskPart.charAt(i) == opts.optionalmarker.start) {
                        break;
                    }
                }
                var maskParts = [maskPart.substring(0, i)];
                if (i < mpl) {
                    maskParts.push(maskPart.substring(i + 1, mpl));
                }
                return maskParts;
            }
            function generateMask(maskPrefix, maskPart, metadata) {
                var maskParts = splitFirstOptionalEndPart(maskPart);
                var newMask, maskTemplate;

                var masks = splitFirstOptionalStartPart(maskParts[0]);
                if (masks.length > 1) {
                    newMask = maskPrefix + masks[0] + markOptional(masks[1]) + (maskParts.length > 1 ? maskParts[1] : "");
                    if ($.inArray(newMask, genmasks) == -1 && newMask != "") {
                        genmasks.push(newMask);
                        maskTemplate = getMaskTemplate(newMask);
                        ms.push({
                            "mask": newMask,
                            "_buffer": maskTemplate["mask"],
                            "buffer": maskTemplate["mask"].slice(),
                            "tests": getTestingChain(newMask),
                            "lastValidPosition": -1,
                            "greedy": maskTemplate["greedy"],
                            "repeat": maskTemplate["repeat"],
                            "metadata": metadata
                        });
                    }
                    newMask = maskPrefix + masks[0] + (maskParts.length > 1 ? maskParts[1] : "");
                    if ($.inArray(newMask, genmasks) == -1 && newMask != "") {
                        genmasks.push(newMask);
                        maskTemplate = getMaskTemplate(newMask);
                        ms.push({
                            "mask": newMask,
                            "_buffer": maskTemplate["mask"],
                            "buffer": maskTemplate["mask"].slice(),
                            "tests": getTestingChain(newMask),
                            "lastValidPosition": -1,
                            "greedy": maskTemplate["greedy"],
                            "repeat": maskTemplate["repeat"],
                            "metadata": metadata
                        });
                    }
                    if (splitFirstOptionalStartPart(masks[1]).length > 1) { //optional contains another optional
                        generateMask(maskPrefix + masks[0], masks[1] + maskParts[1], metadata);
                    }
                    if (maskParts.length > 1 && splitFirstOptionalStartPart(maskParts[1]).length > 1) {
                        generateMask(maskPrefix + masks[0] + markOptional(masks[1]), maskParts[1], metadata);
                        generateMask(maskPrefix + masks[0], maskParts[1], metadata);
                    }
                }
                else {
                    newMask = maskPrefix + maskParts;
                    if ($.inArray(newMask, genmasks) == -1 && newMask != "") {
                        genmasks.push(newMask);
                        maskTemplate = getMaskTemplate(newMask);
                        ms.push({
                            "mask": newMask,
                            "_buffer": maskTemplate["mask"],
                            "buffer": maskTemplate["mask"].slice(),
                            "tests": getTestingChain(newMask),
                            "lastValidPosition": -1,
                            "greedy": maskTemplate["greedy"],
                            "repeat": maskTemplate["repeat"],
                            "metadata": metadata
                        });
                    }
                }

            }

            if ($.isFunction(opts.mask)) { //allow mask to be a preprocessing fn - should return a valid mask
                opts.mask = opts.mask.call(this, opts);
            }
            if ($.isArray(opts.mask)) {
                $.each(opts.mask, function (ndx, msk) {
                    if (msk["mask"] != undefined) {
                        generateMask("", msk["mask"].toString(), msk);
                    } else
                        generateMask("", msk.toString());
                });
            } else generateMask("", opts.mask.toString());

            return opts.greedy ? ms : ms.sort(function (a, b) { return a["mask"].length - b["mask"].length; });
        }

        var msie10 = navigator.userAgent.match(new RegExp("msie 10", "i")) !== null,
            iphone = navigator.userAgent.match(new RegExp("iphone", "i")) !== null,
            android = navigator.userAgent.match(new RegExp("android.*safari.*", "i")) !== null,
            androidchrome = navigator.userAgent.match(new RegExp("android.*chrome.*", "i")) !== null,
            pasteEvent = isInputEventSupported('paste') ? 'paste' : isInputEventSupported('input') ? 'input' : "propertychange";


        //masking scope
        //actionObj definition see below
        function maskScope(masksets, activeMasksetIndex, opts, actionObj) {
            var isRTL = false,
                valueOnFocus = getActiveBuffer().join(''),
                $el, chromeValueOnInput,
                skipKeyPressEvent = false, //Safari 5.1.x - modal dialog fires keypress twice workaround
                skipInputEvent = false, //skip when triggered from within inputmask
                ignorable = false;


            //maskset helperfunctions

            function getActiveMaskSet() {
                return masksets[activeMasksetIndex];
            }

            function getActiveTests() {
                return getActiveMaskSet()['tests'];
            }

            function getActiveBufferTemplate() {
                return getActiveMaskSet()['_buffer'];
            }

            function getActiveBuffer() {
                return getActiveMaskSet()['buffer'];
            }

            function isValid(pos, c, strict) { //strict true ~ no correction or autofill
                strict = strict === true; //always set a value to strict to prevent possible strange behavior in the extensions 

                function _isValid(position, activeMaskset, c, strict) {
                    var testPos = determineTestPosition(position), loopend = c ? 1 : 0, chrs = '', buffer = activeMaskset["buffer"];
                    for (var i = activeMaskset['tests'][testPos].cardinality; i > loopend; i--) {
                        chrs += getBufferElement(buffer, testPos - (i - 1));
                    }

                    if (c) {
                        chrs += c;
                    }

                    //return is false or a json object => { pos: ??, c: ??} or true
                    return activeMaskset['tests'][testPos].fn != null ?
                        activeMaskset['tests'][testPos].fn.test(chrs, buffer, position, strict, opts)
                        : (c == getBufferElement(activeMaskset['_buffer'], position, true) || c == opts.skipOptionalPartCharacter) ?
                            { "refresh": true, c: getBufferElement(activeMaskset['_buffer'], position, true), pos: position }
                            : false;
                }

                function PostProcessResults(maskForwards, results) {
                    var hasValidActual = false;
                    $.each(results, function (ndx, rslt) {
                        hasValidActual = $.inArray(rslt["activeMasksetIndex"], maskForwards) == -1 && rslt["result"] !== false;
                        if (hasValidActual) return false;
                    });
                    if (hasValidActual) { //strip maskforwards
                        results = $.map(results, function (rslt, ndx) {
                            if ($.inArray(rslt["activeMasksetIndex"], maskForwards) == -1) {
                                return rslt;
                            } else {
                                masksets[rslt["activeMasksetIndex"]]["lastValidPosition"] = actualLVP;
                            }
                        });
                    } else { //keep maskforwards with the least forward
                        var lowestPos = -1, lowestIndex = -1, rsltValid;
                        $.each(results, function (ndx, rslt) {
                            if ($.inArray(rslt["activeMasksetIndex"], maskForwards) != -1 && rslt["result"] !== false & (lowestPos == -1 || lowestPos > rslt["result"]["pos"])) {
                                lowestPos = rslt["result"]["pos"];
                                lowestIndex = rslt["activeMasksetIndex"];
                            }
                        });
                        results = $.map(results, function (rslt, ndx) {
                            if ($.inArray(rslt["activeMasksetIndex"], maskForwards) != -1) {
                                if (rslt["result"]["pos"] == lowestPos) {
                                    return rslt;
                                } else if (rslt["result"] !== false) {
                                    for (var i = pos; i < lowestPos; i++) {
                                        rsltValid = _isValid(i, masksets[rslt["activeMasksetIndex"]], masksets[lowestIndex]["buffer"][i], true);
                                        if (rsltValid === false) {
                                            masksets[rslt["activeMasksetIndex"]]["lastValidPosition"] = lowestPos - 1;
                                            break;
                                        } else {
                                            setBufferElement(masksets[rslt["activeMasksetIndex"]]["buffer"], i, masksets[lowestIndex]["buffer"][i], true);
                                            masksets[rslt["activeMasksetIndex"]]["lastValidPosition"] = i;
                                        }
                                    }
                                    //also check check for the lowestpos with the new input
                                    rsltValid = _isValid(lowestPos, masksets[rslt["activeMasksetIndex"]], c, true);
                                    if (rsltValid !== false) {
                                        setBufferElement(masksets[rslt["activeMasksetIndex"]]["buffer"], lowestPos, c, true);
                                        masksets[rslt["activeMasksetIndex"]]["lastValidPosition"] = lowestPos;
                                    }
                                    //console.log("ndx " + rslt["activeMasksetIndex"] + " validate " + masksets[rslt["activeMasksetIndex"]]["buffer"].join('') + " lv " + masksets[rslt["activeMasksetIndex"]]['lastValidPosition']);
                                    return rslt;
                                }
                            }
                        });
                    }
                    return results;
                }

                if (strict) {
                    var result = _isValid(pos, getActiveMaskSet(), c, strict); //only check validity in current mask when validating strict
                    if (result === true) {
                        result = { "pos": pos }; //always take a possible corrected maskposition into account
                    }
                    return result;
                }

                var results = [], result = false, currentActiveMasksetIndex = activeMasksetIndex,
                    actualBuffer = getActiveBuffer().slice(), actualLVP = getActiveMaskSet()["lastValidPosition"],
                    actualPrevious = seekPrevious(pos),
                    maskForwards = [];
                $.each(masksets, function (index, value) {
                    if (typeof (value) == "object") {
                        activeMasksetIndex = index;

                        var maskPos = pos;
                        var lvp = getActiveMaskSet()['lastValidPosition'],
                            rsltValid;
                        if (lvp == actualLVP) {
                            if ((maskPos - actualLVP) > 1) {
                                for (var i = lvp == -1 ? 0 : lvp; i < maskPos; i++) {
                                    rsltValid = _isValid(i, getActiveMaskSet(), actualBuffer[i], true);
                                    if (rsltValid === false) {
                                        break;
                                    } else {
                                        setBufferElement(getActiveBuffer(), i, actualBuffer[i], true);
                                        if (rsltValid === true) {
                                            rsltValid = { "pos": i }; //always take a possible corrected maskposition into account
                                        }
                                        var newValidPosition = rsltValid.pos || i;
                                        if (getActiveMaskSet()['lastValidPosition'] < newValidPosition)
                                            getActiveMaskSet()['lastValidPosition'] = newValidPosition; //set new position from isValid
                                    }
                                }
                            }
                            //does the input match on a further position?
                            if (!isMask(maskPos) && !_isValid(maskPos, getActiveMaskSet(), c, strict)) {
                                var maxForward = seekNext(maskPos) - maskPos;
                                for (var fw = 0; fw < maxForward; fw++) {
                                    if (_isValid(++maskPos, getActiveMaskSet(), c, strict) !== false)
                                        break;
                                }
                                maskForwards.push(activeMasksetIndex);
                                //console.log('maskforward ' + activeMasksetIndex + " pos " + pos + " maskPos " + maskPos);
                            }
                        }

                        if (getActiveMaskSet()['lastValidPosition'] >= actualLVP || activeMasksetIndex == currentActiveMasksetIndex) {
                            if (maskPos >= 0 && maskPos < getMaskLength()) {
                                result = _isValid(maskPos, getActiveMaskSet(), c, strict);
                                if (result !== false) {
                                    if (result === true) {
                                        result = { "pos": maskPos }; //always take a possible corrected maskposition into account
                                    }
                                    var newValidPosition = result.pos || maskPos;
                                    if (getActiveMaskSet()['lastValidPosition'] < newValidPosition)
                                        getActiveMaskSet()['lastValidPosition'] = newValidPosition; //set new position from isValid
                                }
                                //console.log("pos " + pos + " ndx " + activeMasksetIndex + " validate " + getActiveBuffer().join('') + " lv " + getActiveMaskSet()['lastValidPosition']);
                                results.push({ "activeMasksetIndex": index, "result": result });
                            }
                        }
                    }
                });
                activeMasksetIndex = currentActiveMasksetIndex; //reset activeMasksetIndex

                return PostProcessResults(maskForwards, results); //return results of the multiple mask validations
            }

            function determineActiveMasksetIndex() {
                var currentMasksetIndex = activeMasksetIndex,
                    highestValid = { "activeMasksetIndex": 0, "lastValidPosition": -1, "next": -1 };
                $.each(masksets, function (index, value) {
                    if (typeof (value) == "object") {
                        activeMasksetIndex = index;
                        if (getActiveMaskSet()['lastValidPosition'] > highestValid['lastValidPosition']) {
                            highestValid["activeMasksetIndex"] = index;
                            highestValid["lastValidPosition"] = getActiveMaskSet()['lastValidPosition'];
                            highestValid["next"] = seekNext(getActiveMaskSet()['lastValidPosition']);
                        } else if (getActiveMaskSet()['lastValidPosition'] == highestValid['lastValidPosition'] &&
                            (highestValid['next'] == -1 || highestValid['next'] > seekNext(getActiveMaskSet()['lastValidPosition']))) {
                            highestValid["activeMasksetIndex"] = index;
                            highestValid["lastValidPosition"] = getActiveMaskSet()['lastValidPosition'];
                            highestValid["next"] = seekNext(getActiveMaskSet()['lastValidPosition']);
                        }
                    }
                });

                activeMasksetIndex = highestValid["lastValidPosition"] != -1 && masksets[currentMasksetIndex]["lastValidPosition"] == highestValid["lastValidPosition"] ? currentMasksetIndex : highestValid["activeMasksetIndex"];
                if (currentMasksetIndex != activeMasksetIndex) {
                    clearBuffer(getActiveBuffer(), seekNext(highestValid["lastValidPosition"]), getMaskLength());
                    getActiveMaskSet()["writeOutBuffer"] = true;
                }
                $el.data('_inputmask')['activeMasksetIndex'] = activeMasksetIndex; //store the activeMasksetIndex
            }

            function isMask(pos) {
                var testPos = determineTestPosition(pos);
                var test = getActiveTests()[testPos];

                return test != undefined ? test.fn : false;
            }

            function determineTestPosition(pos) {
                return pos % getActiveTests().length;
            }

            function getMaskLength() {
                return opts.getMaskLength(getActiveBufferTemplate(), getActiveMaskSet()['greedy'], getActiveMaskSet()['repeat'], getActiveBuffer(), opts);
            }

            //pos: from position

            function seekNext(pos) {
                var maskL = getMaskLength();
                if (pos >= maskL) return maskL;
                var position = pos;
                while (++position < maskL && !isMask(position)) {
                }
                return position;
            }

            //pos: from position

            function seekPrevious(pos) {
                var position = pos;
                if (position <= 0) return 0;

                while (--position > 0 && !isMask(position)) {
                }
                return position;
            }

            function setBufferElement(buffer, position, element, autoPrepare) {
                if (autoPrepare) position = prepareBuffer(buffer, position);

                var test = getActiveTests()[determineTestPosition(position)];
                var elem = element;
                if (elem != undefined && test != undefined) {
                    switch (test.casing) {
                        case "upper":
                            elem = element.toUpperCase();
                            break;
                        case "lower":
                            elem = element.toLowerCase();
                            break;
                    }
                }

                buffer[position] = elem;
            }

            function getBufferElement(buffer, position, autoPrepare) {
                if (autoPrepare) position = prepareBuffer(buffer, position);
                return buffer[position];
            }

            //needed to handle the non-greedy mask repetitions

            function prepareBuffer(buffer, position) {
                var j;
                while (buffer[position] == undefined && buffer.length < getMaskLength()) {
                    j = 0;
                    while (getActiveBufferTemplate()[j] !== undefined) { //add a new buffer
                        buffer.push(getActiveBufferTemplate()[j++]);
                    }
                }

                return position;
            }

            function writeBuffer(input, buffer, caretPos) {
                input._valueSet(buffer.join(''));
                if (caretPos != undefined) {
                    caret(input, caretPos);
                }
            }

            function clearBuffer(buffer, start, end, stripNomasks) {
                for (var i = start, maskL = getMaskLength() ; i < end && i < maskL; i++) {
                    if (stripNomasks === true) {
                        if (!isMask(i))
                            setBufferElement(buffer, i, "");
                    } else
                        setBufferElement(buffer, i, getBufferElement(getActiveBufferTemplate().slice(), i, true));
                }
            }

            function setReTargetPlaceHolder(buffer, pos) {
                var testPos = determineTestPosition(pos);
                setBufferElement(buffer, pos, getBufferElement(getActiveBufferTemplate(), testPos));
            }

            function getPlaceHolder(pos) {
                return opts.placeholder.charAt(pos % opts.placeholder.length);
            }

            function checkVal(input, writeOut, strict, nptvl, intelliCheck) {
                var inputValue = nptvl != undefined ? nptvl.slice() : truncateInput(input._valueGet()).split('');

                $.each(masksets, function (ndx, ms) {
                    if (typeof (ms) == "object") {
                        ms["buffer"] = ms["_buffer"].slice();
                        ms["lastValidPosition"] = -1;
                        ms["p"] = -1;
                    }
                });
                if (strict !== true) activeMasksetIndex = 0;
                if (writeOut) input._valueSet(""); //initial clear
                var ml = getMaskLength();
                $.each(inputValue, function (ndx, charCode) {
                    if (intelliCheck === true) {
                        var p = getActiveMaskSet()["p"], lvp = p == -1 ? p : seekPrevious(p),
                            pos = lvp == -1 ? ndx : seekNext(lvp);
                        if ($.inArray(charCode, getActiveBufferTemplate().slice(lvp + 1, pos)) == -1) {
                            keypressEvent.call(input, undefined, true, charCode.charCodeAt(0), writeOut, strict, ndx);
                        }
                    } else {
                        keypressEvent.call(input, undefined, true, charCode.charCodeAt(0), writeOut, strict, ndx);
                    }
                });

                if (strict === true && getActiveMaskSet()["p"] != -1) {
                    getActiveMaskSet()["lastValidPosition"] = seekPrevious(getActiveMaskSet()["p"]);
                }
            }

            function escapeRegex(str) {
                return $.inputmask.escapeRegex.call(this, str);
            }

            function truncateInput(inputValue) {
                return inputValue.replace(new RegExp("(" + escapeRegex(getActiveBufferTemplate().join('')) + ")*$"), "");
            }

            function clearOptionalTail(input) {
                var buffer = getActiveBuffer(), tmpBuffer = buffer.slice(), testPos, pos;
                for (var pos = tmpBuffer.length - 1; pos >= 0; pos--) {
                    var testPos = determineTestPosition(pos);
                    if (getActiveTests()[testPos].optionality) {
                        if (!isMask(pos) || !isValid(pos, buffer[pos], true))
                            tmpBuffer.pop();
                        else break;
                    } else break;
                }
                writeBuffer(input, tmpBuffer);
            }

            function unmaskedvalue($input, skipDatepickerCheck) {
                if (getActiveTests() && (skipDatepickerCheck === true || !$input.hasClass('hasDatepicker'))) {
                    //checkVal(input, false, true);
                    var umValue = $.map(getActiveBuffer(), function (element, index) {
                        return isMask(index) && isValid(index, element, true) ? element : null;
                    });
                    var unmaskedValue = (isRTL ? umValue.reverse() : umValue).join('');
                    return opts.onUnMask != undefined ? opts.onUnMask.call(this, getActiveBuffer().join(''), unmaskedValue) : unmaskedValue;
                } else {
                    return $input[0]._valueGet();
                }
            }

            function TranslatePosition(pos) {
                if (isRTL && typeof pos == 'number' && (!opts.greedy || opts.placeholder != "")) {
                    var bffrLght = getActiveBuffer().length;
                    pos = bffrLght - pos;
                }
                return pos;
            }

            function caret(input, begin, end) {
                var npt = input.jquery && input.length > 0 ? input[0] : input, range;
                if (typeof begin == 'number') {
                    begin = TranslatePosition(begin);
                    end = TranslatePosition(end);
                    if (!$(input).is(':visible')) {
                        return;
                    }
                    end = (typeof end == 'number') ? end : begin;
                    npt.scrollLeft = npt.scrollWidth;
                    if (opts.insertMode == false && begin == end) end++; //set visualization for insert/overwrite mode
                    if (npt.setSelectionRange) {
                        npt.selectionStart = begin;
                        npt.selectionEnd = android ? begin : end;

                    } else if (npt.createTextRange) {
                        range = npt.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', end);
                        range.moveStart('character', begin);
                        range.select();
                    }
                } else {
                    if (!$(input).is(':visible')) {
                        return { "begin": 0, "end": 0 };
                    }
                    if (npt.setSelectionRange) {
                        begin = npt.selectionStart;
                        end = npt.selectionEnd;
                    } else if (document.selection && document.selection.createRange) {
                        range = document.selection.createRange();
                        begin = 0 - range.duplicate().moveStart('character', -100000);
                        end = begin + range.text.length;
                    }
                    begin = TranslatePosition(begin);
                    end = TranslatePosition(end);
                    return { "begin": begin, "end": end };
                }
            }

            function isComplete(buffer) { //return true / false / undefined (repeat *)
                if (opts.repeat == "*") return undefined;
                var complete = false, highestValidPosition = 0, currentActiveMasksetIndex = activeMasksetIndex;
                $.each(masksets, function (ndx, ms) {
                    if (typeof (ms) == "object") {
                        activeMasksetIndex = ndx;
                        var aml = seekPrevious(getMaskLength());
                        if (ms["lastValidPosition"] >= highestValidPosition && ms["lastValidPosition"] == aml) {
                            var msComplete = true;
                            for (var i = 0; i <= aml; i++) {
                                var mask = isMask(i), testPos = determineTestPosition(i);
                                if ((mask && (buffer[i] == undefined || buffer[i] == getPlaceHolder(i))) || (!mask && buffer[i] != getActiveBufferTemplate()[testPos])) {
                                    msComplete = false;
                                    break;
                                }
                            }
                            complete = complete || msComplete;
                            if (complete) //break loop
                                return false;
                        }
                        highestValidPosition = ms["lastValidPosition"];
                    }
                });
                activeMasksetIndex = currentActiveMasksetIndex; //reset activeMaskset
                return complete;
            }

            function isSelection(begin, end) {
                return isRTL ? (begin - end) > 1 || ((begin - end) == 1 && opts.insertMode) :
                    (end - begin) > 1 || ((end - begin) == 1 && opts.insertMode);
            }


            //private functions
            function installEventRuler(npt) {
                var events = $._data(npt).events;

                $.each(events, function (eventType, eventHandlers) {
                    $.each(eventHandlers, function (ndx, eventHandler) {
                        if (eventHandler.namespace == "inputmask") {
                            if (eventHandler.type != "setvalue") {
                                var handler = eventHandler.handler;
                                eventHandler.handler = function (e) {
                                    if (this.readOnly || this.disabled)
                                        e.preventDefault;
                                    else
                                        return handler.apply(this, arguments);
                                };
                            }
                        }
                    });
                });
            }

            function patchValueProperty(npt) {
                var valueProperty;
                if (Object.getOwnPropertyDescriptor)
                    valueProperty = Object.getOwnPropertyDescriptor(npt, "value");
                if (valueProperty && valueProperty.get) {
                    if (!npt._valueGet) {
                        var valueGet = valueProperty.get;
                        var valueSet = valueProperty.set;
                        npt._valueGet = function () {
                            return isRTL ? valueGet.call(this).split('').reverse().join('') : valueGet.call(this);
                        };
                        npt._valueSet = function (value) {
                            valueSet.call(this, isRTL ? value.split('').reverse().join('') : value);
                        };

                        Object.defineProperty(npt, "value", {
                            get: function () {
                                var $self = $(this), inputData = $(this).data('_inputmask'), masksets = inputData['masksets'],
                                    activeMasksetIndex = inputData['activeMasksetIndex'];
                                return inputData && inputData['opts'].autoUnmask ? $self.inputmask('unmaskedvalue') : valueGet.call(this) != masksets[activeMasksetIndex]['_buffer'].join('') ? valueGet.call(this) : '';
                            },
                            set: function (value) {
                                valueSet.call(this, value);
                                $(this).triggerHandler('setvalue.inputmask');
                            }
                        });
                    }
                } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                    if (!npt._valueGet) {
                        var valueGet = npt.__lookupGetter__("value");
                        var valueSet = npt.__lookupSetter__("value");
                        npt._valueGet = function () {
                            return isRTL ? valueGet.call(this).split('').reverse().join('') : valueGet.call(this);
                        };
                        npt._valueSet = function (value) {
                            valueSet.call(this, isRTL ? value.split('').reverse().join('') : value);
                        };

                        npt.__defineGetter__("value", function () {
                            var $self = $(this), inputData = $(this).data('_inputmask'), masksets = inputData['masksets'],
                                activeMasksetIndex = inputData['activeMasksetIndex'];
                            return inputData && inputData['opts'].autoUnmask ? $self.inputmask('unmaskedvalue') : valueGet.call(this) != masksets[activeMasksetIndex]['_buffer'].join('') ? valueGet.call(this) : '';
                        });
                        npt.__defineSetter__("value", function (value) {
                            valueSet.call(this, value);
                            $(this).triggerHandler('setvalue.inputmask');
                        });
                    }
                } else {
                    if (!npt._valueGet) {
                        npt._valueGet = function () { return isRTL ? this.value.split('').reverse().join('') : this.value; };
                        npt._valueSet = function (value) { this.value = isRTL ? value.split('').reverse().join('') : value; };
                    }
                    if ($.valHooks.text == undefined || $.valHooks.text.inputmaskpatch != true) {
                        var valueGet = $.valHooks.text && $.valHooks.text.get ? $.valHooks.text.get : function (elem) { return elem.value; };
                        var valueSet = $.valHooks.text && $.valHooks.text.set ? $.valHooks.text.set : function (elem, value) {
                            elem.value = value;
                            return elem;
                        };

                        jQuery.extend($.valHooks, {
                            text: {
                                get: function (elem) {
                                    var $elem = $(elem);
                                    if ($elem.data('_inputmask')) {
                                        if ($elem.data('_inputmask')['opts'].autoUnmask)
                                            return $elem.inputmask('unmaskedvalue');
                                        else {
                                            var result = valueGet(elem),
                                                inputData = $elem.data('_inputmask'), masksets = inputData['masksets'],
                                                activeMasksetIndex = inputData['activeMasksetIndex'];
                                            return result != masksets[activeMasksetIndex]['_buffer'].join('') ? result : '';
                                        }
                                    } else return valueGet(elem);
                                },
                                set: function (elem, value) {
                                    var $elem = $(elem);
                                    var result = valueSet(elem, value);
                                    if ($elem.data('_inputmask')) $elem.triggerHandler('setvalue.inputmask');
                                    return result;
                                },
                                inputmaskpatch: true
                            }
                        });
                    }
                }
            }

            //shift chars to left from start to end and put c at end position if defined

            function shiftL(start, end, c, maskJumps) {
                var buffer = getActiveBuffer();
                if (maskJumps !== false) //jumping over nonmask position
                    while (!isMask(start) && start - 1 >= 0) start--;
                for (var i = start; i < end && i < getMaskLength() ; i++) {
                    if (isMask(i)) {
                        setReTargetPlaceHolder(buffer, i);
                        var j = seekNext(i);
                        var p = getBufferElement(buffer, j);
                        if (p != getPlaceHolder(j)) {
                            if (j < getMaskLength() && isValid(i, p, true) !== false && getActiveTests()[determineTestPosition(i)].def == getActiveTests()[determineTestPosition(j)].def) {
                                setBufferElement(buffer, i, p, true);
                            } else {
                                if (isMask(i))
                                    break;
                            }
                        }
                    } else {
                        setReTargetPlaceHolder(buffer, i);
                    }
                }
                if (c != undefined)
                    setBufferElement(buffer, seekPrevious(end), c);

                if (getActiveMaskSet()["greedy"] == false) {
                    var trbuffer = truncateInput(buffer.join('')).split('');
                    buffer.length = trbuffer.length;
                    for (var i = 0, bl = buffer.length; i < bl; i++) {
                        buffer[i] = trbuffer[i];
                    }
                    if (buffer.length == 0) getActiveMaskSet()["buffer"] = getActiveBufferTemplate().slice();
                }
                return start; //return the used start position
            }

            function shiftR(start, end, c) {
                var buffer = getActiveBuffer();
                if (getBufferElement(buffer, start, true) != getPlaceHolder(start)) {
                    for (var i = seekPrevious(end) ; i > start && i >= 0; i--) {
                        if (isMask(i)) {
                            var j = seekPrevious(i);
                            var t = getBufferElement(buffer, j);
                            if (t != getPlaceHolder(j)) {
                                if (isValid(j, t, true) !== false && getActiveTests()[determineTestPosition(i)].def == getActiveTests()[determineTestPosition(j)].def) {
                                    setBufferElement(buffer, i, t, true);
                                    setReTargetPlaceHolder(buffer, j);
                                } //else break;
                            }
                        } else
                            setReTargetPlaceHolder(buffer, i);
                    }
                }
                if (c != undefined && getBufferElement(buffer, start) == getPlaceHolder(start))
                    setBufferElement(buffer, start, c);
                var lengthBefore = buffer.length;
                if (getActiveMaskSet()["greedy"] == false) {
                    var trbuffer = truncateInput(buffer.join('')).split('');
                    buffer.length = trbuffer.length;
                    for (var i = 0, bl = buffer.length; i < bl; i++) {
                        buffer[i] = trbuffer[i];
                    }
                    if (buffer.length == 0) getActiveMaskSet()["buffer"] = getActiveBufferTemplate().slice();
                }
                return end - (lengthBefore - buffer.length); //return new start position
            }

            function HandleRemove(input, k, pos) {
                if (opts.numericInput || isRTL) {
                    switch (k) {
                        case opts.keyCode.BACKSPACE:
                            k = opts.keyCode.DELETE;
                            break;
                        case opts.keyCode.DELETE:
                            k = opts.keyCode.BACKSPACE;
                            break;
                    }
                    if (isRTL) {
                        var pend = pos.end;
                        pos.end = pos.begin;
                        pos.begin = pend;
                    }
                }

                var isSelection = true;
                if (pos.begin == pos.end) {
                    var posBegin = k == opts.keyCode.BACKSPACE ? pos.begin - 1 : pos.begin;
                    if (opts.isNumeric && opts.radixPoint != "" && getActiveBuffer()[posBegin] == opts.radixPoint) {
                        pos.begin = (getActiveBuffer().length - 1 == posBegin) /* radixPoint is latest? delete it */ ? pos.begin : k == opts.keyCode.BACKSPACE ? posBegin : seekNext(posBegin);
                        pos.end = pos.begin;
                    }
                    isSelection = false;
                    if (k == opts.keyCode.BACKSPACE)
                        pos.begin--;
                    else if (k == opts.keyCode.DELETE)
                        pos.end++;
                } else if (pos.end - pos.begin == 1 && !opts.insertMode) {
                    isSelection = false;
                    if (k == opts.keyCode.BACKSPACE)
                        pos.begin--;
                }

                clearBuffer(getActiveBuffer(), pos.begin, pos.end);

                var ml = getMaskLength();
                if (opts.greedy == false) {
                    shiftL(pos.begin, ml, undefined, !isRTL && (k == opts.keyCode.BACKSPACE && !isSelection));
                } else {
                    var newpos = pos.begin;
                    for (var i = pos.begin; i < pos.end; i++) { //seeknext to skip placeholders at start in selection
                        if (isMask(i) || !isSelection)
                            newpos = shiftL(pos.begin, ml, undefined, !isRTL && (k == opts.keyCode.BACKSPACE && !isSelection));
                    }
                    if (!isSelection) pos.begin = newpos;
                }
                var firstMaskPos = seekNext(-1);
                clearBuffer(getActiveBuffer(), pos.begin, pos.end, true);
                checkVal(input, false, masksets[1] == undefined || firstMaskPos >= pos.end, getActiveBuffer());
                if (getActiveMaskSet()['lastValidPosition'] < firstMaskPos) {
                    getActiveMaskSet()["lastValidPosition"] = -1;
                    getActiveMaskSet()["p"] = firstMaskPos;
                } else {
                    getActiveMaskSet()["p"] = pos.begin;
                }
            }

            function keydownEvent(e) {
                //Safari 5.1.x - modal dialog fires keypress twice workaround
                skipKeyPressEvent = false;
                var input = this, $input = $(input), k = e.keyCode, pos = caret(input);

                //backspace, delete, and escape get special treatment
                if (k == opts.keyCode.BACKSPACE || k == opts.keyCode.DELETE || (iphone && k == 127) || e.ctrlKey && k == 88) { //backspace/delete
                    e.preventDefault(); //stop default action but allow propagation
                    if (k == 88) valueOnFocus = getActiveBuffer().join('');
                    HandleRemove(input, k, pos);
                    determineActiveMasksetIndex();
                    writeBuffer(input, getActiveBuffer(), getActiveMaskSet()["p"]);
                    if (input._valueGet() == getActiveBufferTemplate().join(''))
                        $input.trigger('cleared');

                    if (opts.showTooltip) { //update tooltip
                        $input.prop("title", getActiveMaskSet()["mask"]);
                    }
                } else if (k == opts.keyCode.END || k == opts.keyCode.PAGE_DOWN) { //when END or PAGE_DOWN pressed set position at lastmatch
                    setTimeout(function () {
                        var caretPos = seekNext(getActiveMaskSet()["lastValidPosition"]);
                        if (!opts.insertMode && caretPos == getMaskLength() && !e.shiftKey) caretPos--;
                        caret(input, e.shiftKey ? pos.begin : caretPos, caretPos);
                    }, 0);
                } else if ((k == opts.keyCode.HOME && !e.shiftKey) || k == opts.keyCode.PAGE_UP) { //Home or page_up
                    caret(input, 0, e.shiftKey ? pos.begin : 0);
                } else if (k == opts.keyCode.ESCAPE || (k == 90 && e.ctrlKey)) { //escape && undo
                    checkVal(input, true, false, valueOnFocus.split(''));
                    $input.click();
                } else if (k == opts.keyCode.INSERT && !(e.shiftKey || e.ctrlKey)) { //insert
                    opts.insertMode = !opts.insertMode;
                    caret(input, !opts.insertMode && pos.begin == getMaskLength() ? pos.begin - 1 : pos.begin);
                } else if (opts.insertMode == false && !e.shiftKey) {
                    if (k == opts.keyCode.RIGHT) {
                        setTimeout(function () {
                            var caretPos = caret(input);
                            caret(input, caretPos.begin);
                        }, 0);
                    } else if (k == opts.keyCode.LEFT) {
                        setTimeout(function () {
                            var caretPos = caret(input);
                            caret(input, caretPos.begin - 1);
                        }, 0);
                    }
                }

                var currentCaretPos = caret(input);
                if (opts.onKeyDown.call(this, e, getActiveBuffer(), opts) === true) //extra stuff to execute on keydown
                    caret(input, currentCaretPos.begin, currentCaretPos.end);
                ignorable = $.inArray(k, opts.ignorables) != -1;
            }


            function keypressEvent(e, checkval, k, writeOut, strict, ndx) {
                //Safari 5.1.x - modal dialog fires keypress twice workaround
                if (k == undefined && skipKeyPressEvent) return false;
                skipKeyPressEvent = true;

                var input = this, $input = $(input);

                e = e || window.event;
                var k = checkval ? k : (e.which || e.charCode || e.keyCode);

                if (checkval !== true && (!(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable))) {
                    return true;
                } else {
                    if (k) {
                        //special treat the decimal separator
                        if (checkval !== true && k == 46 && e.shiftKey == false && opts.radixPoint == ",") k = 44;

                        var pos, results, result, c = String.fromCharCode(k);
                        if (checkval) {
                            var pcaret = strict ? ndx : getActiveMaskSet()["lastValidPosition"] + 1;
                            pos = { begin: pcaret, end: pcaret };
                        } else {
                            pos = caret(input);
                        }

                        //should we clear a possible selection??
                        var isSlctn = isSelection(pos.begin, pos.end), redetermineLVP = false,
                            initialIndex = activeMasksetIndex;
                        if (isSlctn) {
                            activeMasksetIndex = initialIndex;
                            $.each(masksets, function (ndx, lmnt) { //init undobuffer for recovery when not valid
                                if (typeof (lmnt) == "object") {
                                    activeMasksetIndex = ndx;
                                    getActiveMaskSet()["undoBuffer"] = getActiveBuffer().join('');
                                }
                            });
                            HandleRemove(input, opts.keyCode.DELETE, pos);
                            if (!opts.insertMode) { //preserve some space
                                $.each(masksets, function (ndx, lmnt) {
                                    if (typeof (lmnt) == "object") {
                                        activeMasksetIndex = ndx;
                                        shiftR(pos.begin, getMaskLength());
                                        getActiveMaskSet()["lastValidPosition"] = seekNext(getActiveMaskSet()["lastValidPosition"]);
                                    }
                                });
                            }
                            activeMasksetIndex = initialIndex; //restore index
                        }

                        var radixPosition = getActiveBuffer().join('').indexOf(opts.radixPoint);
                        if (opts.isNumeric && checkval !== true && radixPosition != -1) {
                            if (opts.greedy && pos.begin <= radixPosition) {
                                pos.begin = seekPrevious(pos.begin);
                                pos.end = pos.begin;
                            } else if (c == opts.radixPoint) {
                                pos.begin = radixPosition;
                                pos.end = pos.begin;
                            }
                        }


                        var p = pos.begin;
                        results = isValid(p, c, strict);
                        if (strict === true) results = [{ "activeMasksetIndex": activeMasksetIndex, "result": results }];
                        var minimalForwardPosition = -1;
                        $.each(results, function (index, result) {
                            activeMasksetIndex = result["activeMasksetIndex"];
                            getActiveMaskSet()["writeOutBuffer"] = true;
                            var np = result["result"];
                            if (np !== false) {
                                var refresh = false, buffer = getActiveBuffer();
                                if (np !== true) {
                                    refresh = np["refresh"]; //only rewrite buffer from isValid
                                    p = np.pos != undefined ? np.pos : p; //set new position from isValid
                                    c = np.c != undefined ? np.c : c; //set new char from isValid
                                }
                                if (refresh !== true) {
                                    if (opts.insertMode == true) {
                                        var lastUnmaskedPosition = getMaskLength();
                                        var bfrClone = buffer.slice();
                                        while (getBufferElement(bfrClone, lastUnmaskedPosition, true) != getPlaceHolder(lastUnmaskedPosition) && lastUnmaskedPosition >= p) {
                                            lastUnmaskedPosition = lastUnmaskedPosition == 0 ? -1 : seekPrevious(lastUnmaskedPosition);
                                        }
                                        if (lastUnmaskedPosition >= p) {
                                            shiftR(p, getMaskLength(), c);
                                            //shift the lvp if needed
                                            var lvp = getActiveMaskSet()["lastValidPosition"], nlvp = seekNext(lvp);
                                            if (nlvp != getMaskLength() && lvp >= p && (getBufferElement(getActiveBuffer(), nlvp, true) != getPlaceHolder(nlvp))) {
                                                getActiveMaskSet()["lastValidPosition"] = nlvp;
                                            }
                                        } else getActiveMaskSet()["writeOutBuffer"] = false;
                                    } else setBufferElement(buffer, p, c, true);
                                    if (minimalForwardPosition == -1 || minimalForwardPosition > seekNext(p)) {
                                        minimalForwardPosition = seekNext(p);
                                    }
                                } else if (!strict) {
                                    var nextPos = p < getMaskLength() ? p + 1 : p;
                                    if (minimalForwardPosition == -1 || minimalForwardPosition > nextPos) {
                                        minimalForwardPosition = nextPos;
                                    }
                                }
                                if (minimalForwardPosition > getActiveMaskSet()["p"])
                                    getActiveMaskSet()["p"] = minimalForwardPosition; //needed for checkval strict 
                            }
                        });

                        if (strict !== true) {
                            activeMasksetIndex = initialIndex;
                            determineActiveMasksetIndex();
                        }
                        if (writeOut !== false) {
                            $.each(results, function (ndx, rslt) {
                                if (rslt["activeMasksetIndex"] == activeMasksetIndex) {
                                    result = rslt;
                                    return false;
                                }
                            });
                            if (result != undefined) {
                                var self = this;
                                setTimeout(function () { opts.onKeyValidation.call(self, result["result"], opts); }, 0);
                                if (getActiveMaskSet()["writeOutBuffer"] && result["result"] !== false) {
                                    var buffer = getActiveBuffer();

                                    var newCaretPosition;
                                    if (checkval) {
                                        newCaretPosition = undefined;
                                    } else if (opts.numericInput) {
                                        if (p > radixPosition) {
                                            newCaretPosition = seekPrevious(minimalForwardPosition);
                                        } else if (c == opts.radixPoint) {
                                            newCaretPosition = minimalForwardPosition - 1;
                                        } else newCaretPosition = seekPrevious(minimalForwardPosition - 1);
                                    } else {
                                        newCaretPosition = minimalForwardPosition;
                                    }

                                    writeBuffer(input, buffer, newCaretPosition);
                                    if (checkval !== true) {
                                        setTimeout(function () { //timeout needed for IE
                                            if (isComplete(buffer) === true)
                                                $input.trigger("complete");
                                            skipInputEvent = true;
                                            $input.trigger("input");
                                        }, 0);
                                    }
                                } else if (isSlctn) {
                                    getActiveMaskSet()["buffer"] = getActiveMaskSet()["undoBuffer"].split('');
                                }
                            }
                        }

                        if (opts.showTooltip) { //update tooltip
                            $input.prop("title", getActiveMaskSet()["mask"]);
                        }

                        //needed for IE8 and below
                        if (e) e.preventDefault ? e.preventDefault() : e.returnValue = false;
                    }
                }
            }

            function keyupEvent(e) {
                var $input = $(this), input = this, k = e.keyCode, buffer = getActiveBuffer();

                if (androidchrome && k == opts.keyCode.BACKSPACE) {
                    if (chromeValueOnInput == input._valueGet())
                        keydownEvent.call(this, e);
                }

                opts.onKeyUp.call(this, e, buffer, opts); //extra stuff to execute on keyup
                if (k == opts.keyCode.TAB && opts.showMaskOnFocus) {
                    if ($input.hasClass('focus.inputmask') && input._valueGet().length == 0) {
                        buffer = getActiveBufferTemplate().slice();
                        writeBuffer(input, buffer);
                        caret(input, 0);
                        valueOnFocus = getActiveBuffer().join('');
                    } else {
                        writeBuffer(input, buffer);
                        if (buffer.join('') == getActiveBufferTemplate().join('') && $.inArray(opts.radixPoint, buffer) != -1) {
                            caret(input, TranslatePosition(0));
                            $input.click();
                        } else
                            caret(input, TranslatePosition(0), TranslatePosition(getMaskLength()));
                    }
                }
            }

            function inputEvent(e) {
                if (skipInputEvent === true) {
                    skipInputEvent = false;
                    return true;
                }
                var input = this, $input = $(input);

                chromeValueOnInput = getActiveBuffer().join('');
                checkVal(input, false, false);
                writeBuffer(input, getActiveBuffer());
                if (isComplete(getActiveBuffer()) === true)
                    $input.trigger("complete");
                $input.click();
            }

            function mask(el) {
                $el = $(el);
                if ($el.is(":input")) {
                    //store tests & original buffer in the input element - used to get the unmasked value
                    $el.data('_inputmask', {
                        'masksets': masksets,
                        'activeMasksetIndex': activeMasksetIndex,
                        'opts': opts,
                        'isRTL': false
                    });

                    //show tooltip
                    if (opts.showTooltip) {
                        $el.prop("title", getActiveMaskSet()["mask"]);
                    }

                    //correct greedy setting if needed
                    getActiveMaskSet()['greedy'] = getActiveMaskSet()['greedy'] ? getActiveMaskSet()['greedy'] : getActiveMaskSet()['repeat'] == 0;

                    //handle maxlength attribute
                    if ($el.attr("maxLength") != null) //only when the attribute is set
                    {
                        var maxLength = $el.prop('maxLength');
                        if (maxLength > -1) { //handle *-repeat
                            $.each(masksets, function (ndx, ms) {
                                if (typeof (ms) == "object") {
                                    if (ms["repeat"] == "*") {
                                        ms["repeat"] = maxLength;
                                    }
                                }
                            });
                        }
                        if (getMaskLength() >= maxLength && maxLength > -1) { //FF sets no defined max length to -1 
                            if (maxLength < getActiveBufferTemplate().length) getActiveBufferTemplate().length = maxLength;
                            if (getActiveMaskSet()['greedy'] == false) {
                                getActiveMaskSet()['repeat'] = Math.round(maxLength / getActiveBufferTemplate().length);
                            }
                            $el.prop('maxLength', getMaskLength() * 2);
                        }
                    }

                    patchValueProperty(el);

                    if (opts.numericInput) opts.isNumeric = opts.numericInput;
                    if (el.dir == "rtl" || (opts.numericInput && opts.rightAlignNumerics) || (opts.isNumeric && opts.rightAlignNumerics))
                        $el.css("text-align", "right");

                    if (el.dir == "rtl" || opts.numericInput) {
                        el.dir = "ltr";
                        $el.removeAttr("dir");
                        var inputData = $el.data('_inputmask');
                        inputData['isRTL'] = true;
                        $el.data('_inputmask', inputData);
                        isRTL = true;
                    }

                    //unbind all events - to make sure that no other mask will interfere when re-masking
                    $el.unbind(".inputmask");
                    $el.removeClass('focus.inputmask');
                    //bind events
                    $el.closest('form').bind("submit", function () { //trigger change on submit if any
                        if (valueOnFocus != getActiveBuffer().join('')) {
                            $el.change();
                        }
                    }).bind('reset', function () {
                        setTimeout(function () {
                            $el.trigger("setvalue");
                        }, 0);
                    });
                    $el.bind("mouseenter.inputmask", function () {
                        var $input = $(this), input = this;
                        if (!$input.hasClass('focus.inputmask') && opts.showMaskOnHover) {
                            if (input._valueGet() != getActiveBuffer().join('')) {
                                writeBuffer(input, getActiveBuffer());
                            }
                        }
                    }).bind("blur.inputmask", function () {
                        var $input = $(this), input = this, nptValue = input._valueGet(), buffer = getActiveBuffer();
                        $input.removeClass('focus.inputmask');
                        if (valueOnFocus != getActiveBuffer().join('')) {
                            $input.change();
                        }
                        if (opts.clearMaskOnLostFocus && nptValue != '') {
                            if (nptValue == getActiveBufferTemplate().join(''))
                                input._valueSet('');
                            else { //clearout optional tail of the mask
                                clearOptionalTail(input);
                            }
                        }
                        if (isComplete(buffer) === false) {
                            $input.trigger("incomplete");
                            if (opts.clearIncomplete) {
                                $.each(masksets, function (ndx, ms) {
                                    if (typeof (ms) == "object") {
                                        ms["buffer"] = ms["_buffer"].slice();
                                        ms["lastValidPosition"] = -1;
                                    }
                                });
                                activeMasksetIndex = 0;
                                if (opts.clearMaskOnLostFocus)
                                    input._valueSet('');
                                else {
                                    buffer = getActiveBufferTemplate().slice();
                                    writeBuffer(input, buffer);
                                }
                            }
                        }
                    }).bind("focus.inputmask", function () {
                        var $input = $(this), input = this, nptValue = input._valueGet();
                        if (opts.showMaskOnFocus && !$input.hasClass('focus.inputmask') && (!opts.showMaskOnHover || (opts.showMaskOnHover && nptValue == ''))) {
                            if (input._valueGet() != getActiveBuffer().join('')) {
                                writeBuffer(input, getActiveBuffer(), seekNext(getActiveMaskSet()["lastValidPosition"]));
                            }
                        }
                        $input.addClass('focus.inputmask');
                        valueOnFocus = getActiveBuffer().join('');
                    }).bind("mouseleave.inputmask", function () {
                        var $input = $(this), input = this;
                        if (opts.clearMaskOnLostFocus) {
                            if (!$input.hasClass('focus.inputmask') && input._valueGet() != $input.attr("placeholder")) {
                                if (input._valueGet() == getActiveBufferTemplate().join('') || input._valueGet() == '')
                                    input._valueSet('');
                                else { //clearout optional tail of the mask
                                    clearOptionalTail(input);
                                }
                            }
                        }
                    }).bind("click.inputmask", function () {
                        var input = this;
                        setTimeout(function () {
                            var selectedCaret = caret(input), buffer = getActiveBuffer();
                            if (selectedCaret.begin == selectedCaret.end) {
                                var clickPosition = isRTL ? TranslatePosition(selectedCaret.begin) : selectedCaret.begin,
                                    lvp = getActiveMaskSet()["lastValidPosition"],
                                    lastPosition;
                                if (opts.isNumeric) {
                                    lastPosition = opts.skipRadixDance === false && opts.radixPoint != "" && $.inArray(opts.radixPoint, buffer) != -1 ?
                                        (opts.numericInput ? seekNext($.inArray(opts.radixPoint, buffer)) : $.inArray(opts.radixPoint, buffer)) :
                                        seekNext(lvp);
                                } else {
                                    lastPosition = seekNext(lvp);
                                }
                                if (clickPosition < lastPosition) {
                                    if (isMask(clickPosition))
                                        caret(input, clickPosition);
                                    else caret(input, seekNext(clickPosition));
                                } else
                                    caret(input, lastPosition);
                            }
                        }, 0);
                    }).bind('dblclick.inputmask', function () {
                        var input = this;
                        setTimeout(function () {
                            caret(input, 0, seekNext(getActiveMaskSet()["lastValidPosition"]));
                        }, 0);
                    }).bind(pasteEvent + ".inputmask dragdrop.inputmask drop.inputmask", function (e) {
                        if (skipInputEvent === true) {
                            skipInputEvent = false;
                            return true;
                        }
                        var input = this, $input = $(input);

                        //paste event for IE8 and lower I guess ;-)
                        if (e.type == "propertychange" && input._valueGet().length <= getMaskLength()) {
                            return true;
                        }
                        setTimeout(function () {
                            var pasteValue = opts.onBeforePaste != undefined ? opts.onBeforePaste.call(this, input._valueGet()) : input._valueGet();
                            checkVal(input, true, false, pasteValue.split(''), true);
                            if (isComplete(getActiveBuffer()) === true)
                                $input.trigger("complete");
                            $input.click();
                        }, 0);
                    }).bind('setvalue.inputmask', function () {
                        var input = this;
                        checkVal(input, true);
                        valueOnFocus = getActiveBuffer().join('');
                        if (input._valueGet() == getActiveBufferTemplate().join(''))
                            input._valueSet('');
                    }).bind('complete.inputmask', opts.oncomplete
                    ).bind('incomplete.inputmask', opts.onincomplete
                    ).bind('cleared.inputmask', opts.oncleared
                    ).bind("keyup.inputmask", keyupEvent);

                    if (androidchrome) {
                        $el.bind("input.inputmask", inputEvent);
                    } else {
                        $el.bind("keydown.inputmask", keydownEvent
                        ).bind("keypress.inputmask", keypressEvent);
                    }

                    if (msie10)
                        $el.bind("input.inputmask", inputEvent);

                    //apply mask
                    checkVal(el, true, false);
                    valueOnFocus = getActiveBuffer().join('');
                    // Wrap document.activeElement in a try/catch block since IE9 throw "Unspecified error" if document.activeElement is undefined when we are in an IFrame.
                    var activeElement;
                    try {
                        activeElement = document.activeElement;
                    } catch (e) {
                    }
                    if (activeElement === el) { //position the caret when in focus
                        $el.addClass('focus.inputmask');
                        caret(el, seekNext(getActiveMaskSet()["lastValidPosition"]));
                    } else if (opts.clearMaskOnLostFocus) {
                        if (getActiveBuffer().join('') == getActiveBufferTemplate().join('')) {
                            el._valueSet('');
                        } else {
                            clearOptionalTail(el);
                        }
                    } else {
                        writeBuffer(el, getActiveBuffer());
                    }

                    installEventRuler(el);
                }
            }

            //action object
            if (actionObj != undefined) {
                switch (actionObj["action"]) {
                    case "isComplete":
                        return isComplete(actionObj["buffer"]);
                    case "unmaskedvalue":
                        isRTL = actionObj["$input"].data('_inputmask')['isRTL'];
                        return unmaskedvalue(actionObj["$input"], actionObj["skipDatepickerCheck"]);
                    case "mask":
                        mask(actionObj["el"]);
                        break;
                    case "format":
                        $el = $({});
                        $el.data('_inputmask', {
                            'masksets': masksets,
                            'activeMasksetIndex': activeMasksetIndex,
                            'opts': opts,
                            'isRTL': opts.numericInput
                        });
                        if (opts.numericInput) {
                            opts.isNumeric = opts.numericInput;
                            isRTL = true;
                        }

                        checkVal($el, false, false, actionObj["value"].split(''), true);
                        return getActiveBuffer().join('');
                }
            }
        }
        $.inputmask = {
            //options default
            defaults: {
                placeholder: "_",
                optionalmarker: { start: "[", end: "]" },
                quantifiermarker: { start: "{", end: "}" },
                groupmarker: { start: "(", end: ")" },
                escapeChar: "\\",
                mask: null,
                oncomplete: $.noop, //executes when the mask is complete
                onincomplete: $.noop, //executes when the mask is incomplete and focus is lost
                oncleared: $.noop, //executes when the mask is cleared
                repeat: 0, //repetitions of the mask: * ~ forever, otherwise specify an integer
                greedy: true, //true: allocated buffer for the mask and repetitions - false: allocate only if needed
                autoUnmask: false, //automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
                clearMaskOnLostFocus: true,
                insertMode: true, //insert the input or overwrite the input
                clearIncomplete: false, //clear the incomplete input on blur
                aliases: {}, //aliases definitions => see jquery.inputmask.extensions.js
                onKeyUp: $.noop, //override to implement autocomplete on certain keys for example
                onKeyDown: $.noop, //override to implement autocomplete on certain keys for example
                onBeforePaste: undefined, //executes before masking the pasted value to allow preprocessing of the pasted value.  args => pastedValue => return processedValue
                onUnMask: undefined, //executes after unmasking to allow postprocessing of the unmaskedvalue.  args => maskedValue, unmaskedValue
                showMaskOnFocus: true, //show the mask-placeholder when the input has focus
                showMaskOnHover: true, //show the mask-placeholder when hovering the empty input
                onKeyValidation: $.noop, //executes on every key-press with the result of isValid. Params: result, opts
                skipOptionalPartCharacter: " ", //a character which can be used to skip an optional part of a mask
                showTooltip: false, //show the activemask as tooltip
                numericInput: false, //numericInput input direction style (input shifts to the left while holding the caret position)
                //numeric basic properties
                isNumeric: false, //enable numeric features
                radixPoint: "", //".", // | ","
                skipRadixDance: false, //disable radixpoint caret positioning
                rightAlignNumerics: true, //align numerics to the right
                //numeric basic properties
                definitions: {
                    '9': {
                        validator: "[0-9]",
                        cardinality: 1
                    },
                    'a': {
                        validator: "[A-Za-z\u0410-\u044F\u0401\u0451]",
                        cardinality: 1
                    },
                    '*': {
                        validator: "[A-Za-z\u0410-\u044F\u0401\u04510-9]",
                        cardinality: 1
                    }
                },
                keyCode: {
                    ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108,
                    NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91
                },
                //specify keycodes which should not be considered in the keypress event, otherwise the preventDefault will stop their default behavior especially in FF
                ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
                getMaskLength: function (buffer, greedy, repeat, currentBuffer, opts) {
                    var calculatedLength = buffer.length;
                    if (!greedy) {
                        if (repeat == "*") {
                            calculatedLength = currentBuffer.length + 1;
                        } else if (repeat > 1) {
                            calculatedLength += (buffer.length * (repeat - 1));
                        }
                    }
                    return calculatedLength;
                }
            },
            escapeRegex: function (str) {
                var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
                return str.replace(new RegExp('(\\' + specials.join('|\\') + ')', 'gim'), '\\$1');
            },
            format: function (value, options) {
                var opts = $.extend(true, {}, $.inputmask.defaults, options);
                resolveAlias(opts.alias, options, opts);
                return maskScope(generateMaskSets(opts), 0, opts, { "action": "format", "value": value });
            }
        };

        $.fn.inputmask = function (fn, options) {
            var opts = $.extend(true, {}, $.inputmask.defaults, options),
                masksets,
                activeMasksetIndex = 0;

            if (typeof fn === "string") {
                switch (fn) {
                    case "mask":
                        //resolve possible aliases given by options
                        resolveAlias(opts.alias, options, opts);
                        masksets = generateMaskSets(opts);
                        if (masksets.length == 0) { return this; }

                        return this.each(function () {
                            maskScope($.extend(true, {}, masksets), 0, opts, { "action": "mask", "el": this });
                        });
                    case "unmaskedvalue":
                        var $input = $(this), input = this;
                        if ($input.data('_inputmask')) {
                            masksets = $input.data('_inputmask')['masksets'];
                            activeMasksetIndex = $input.data('_inputmask')['activeMasksetIndex'];
                            opts = $input.data('_inputmask')['opts'];
                            return maskScope(masksets, activeMasksetIndex, opts, { "action": "unmaskedvalue", "$input": $input });
                        } else return $input.val();
                    case "remove":
                        return this.each(function () {
                            var $input = $(this), input = this;
                            if ($input.data('_inputmask')) {
                                masksets = $input.data('_inputmask')['masksets'];
                                activeMasksetIndex = $input.data('_inputmask')['activeMasksetIndex'];
                                opts = $input.data('_inputmask')['opts'];
                                //writeout the unmaskedvalue
                                input._valueSet(maskScope(masksets, activeMasksetIndex, opts, { "action": "unmaskedvalue", "$input": $input, "skipDatepickerCheck": true }));
                                //clear data
                                $input.removeData('_inputmask');
                                //unbind all events
                                $input.unbind(".inputmask");
                                $input.removeClass('focus.inputmask');
                                //restore the value property
                                var valueProperty;
                                if (Object.getOwnPropertyDescriptor)
                                    valueProperty = Object.getOwnPropertyDescriptor(input, "value");
                                if (valueProperty && valueProperty.get) {
                                    if (input._valueGet) {
                                        Object.defineProperty(input, "value", {
                                            get: input._valueGet,
                                            set: input._valueSet
                                        });
                                    }
                                } else if (document.__lookupGetter__ && input.__lookupGetter__("value")) {
                                    if (input._valueGet) {
                                        input.__defineGetter__("value", input._valueGet);
                                        input.__defineSetter__("value", input._valueSet);
                                    }
                                }
                                try { //try catch needed for IE7 as it does not supports deleting fns
                                    delete input._valueGet;
                                    delete input._valueSet;
                                } catch (e) {
                                    input._valueGet = undefined;
                                    input._valueSet = undefined;

                                }
                            }
                        });
                        break;
                    case "getemptymask": //return the default (empty) mask value, usefull for setting the default value in validation
                        if (this.data('_inputmask')) {
                            masksets = this.data('_inputmask')['masksets'];
                            activeMasksetIndex = this.data('_inputmask')['activeMasksetIndex'];
                            return masksets[activeMasksetIndex]['_buffer'].join('');
                        }
                        else return "";
                    case "hasMaskedValue": //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value 
                        return this.data('_inputmask') ? !this.data('_inputmask')['opts'].autoUnmask : false;
                    case "isComplete":
                        masksets = this.data('_inputmask')['masksets'];
                        activeMasksetIndex = this.data('_inputmask')['activeMasksetIndex'];
                        opts = this.data('_inputmask')['opts'];
                        return maskScope(masksets, activeMasksetIndex, opts, { "action": "isComplete", "buffer": this[0]._valueGet().split('') });
                    case "getmetadata": //return mask metadata if exists
                        if (this.data('_inputmask')) {
                            masksets = this.data('_inputmask')['masksets'];
                            activeMasksetIndex = this.data('_inputmask')['activeMasksetIndex'];
                            return masksets[activeMasksetIndex]['metadata'];
                        }
                        else return undefined;
                    default:
                        //check if the fn is an alias
                        if (!resolveAlias(fn, options, opts)) {
                            //maybe fn is a mask so we try
                            //set mask
                            opts.mask = fn;
                        }
                        masksets = generateMaskSets(opts);
                        if (masksets.length == 0) { return this; }
                        return this.each(function () {
                            maskScope($.extend(true, {}, masksets), activeMasksetIndex, opts, { "action": "mask", "el": this });
                        });

                        break;
                }
            } else if (typeof fn == "object") {
                opts = $.extend(true, {}, $.inputmask.defaults, fn);

                resolveAlias(opts.alias, fn, opts); //resolve aliases
                masksets = generateMaskSets(opts);
                if (masksets.length == 0) { return this; }
                return this.each(function () {
                    maskScope($.extend(true, {}, masksets), activeMasksetIndex, opts, { "action": "mask", "el": this });
                });
            } else if (fn == undefined) {
                //look for data-inputmask atribute - the attribute should only contain optipns
                return this.each(function () {
                    var attrOptions = $(this).attr("data-inputmask");
                    if (attrOptions && attrOptions != "") {
                        try {
                            attrOptions = attrOptions.replace(new RegExp("'", "g"), '"');
                            var dataoptions = $.parseJSON("{" + attrOptions + "}");
                            $.extend(true, dataoptions, options);
                            opts = $.extend(true, {}, $.inputmask.defaults, dataoptions);
                            resolveAlias(opts.alias, dataoptions, opts);
                            opts.alias = undefined;
                            $(this).inputmask(opts);
                        } catch (ex) { } //need a more relax parseJSON
                    }
                });
            }
        };
    }
})(jQuery);

;/*
Input Mask plugin extensions
http://github.com/RobinHerbots/jquery.inputmask
Copyright (c) 2010 - 2014 Robin Herbots
Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
Version: 0.0.0

Optional extensions on the jquery.inputmask base
*/
(function ($) {
    //date & time aliases
    $.extend($.inputmask.defaults.definitions, {
        'h': { //hours
            validator: "[01][0-9]|2[0-3]",
            cardinality: 2,
            prevalidator: [{ validator: "[0-2]", cardinality: 1 }]
        },
        's': { //seconds || minutes
            validator: "[0-5][0-9]",
            cardinality: 2,
            prevalidator: [{ validator: "[0-5]", cardinality: 1 }]
        },
        'd': { //basic day
            validator: "0[1-9]|[12][0-9]|3[01]",
            cardinality: 2,
            prevalidator: [{ validator: "[0-3]", cardinality: 1 }]
        },
        'm': { //basic month
            validator: "0[1-9]|1[012]",
            cardinality: 2,
            prevalidator: [{ validator: "[01]", cardinality: 1 }]
        },
        'y': { //basic year
            validator: "(19|20)\\d{2}",
            cardinality: 4,
            prevalidator: [
                        { validator: "[12]", cardinality: 1 },
                        { validator: "(19|20)", cardinality: 2 },
                        { validator: "(19|20)\\d", cardinality: 3 }
            ]
        }
    });
    $.extend($.inputmask.defaults.aliases, {
        'dd/mm/yyyy': {
            mask: "1/2/y",
            placeholder: "dd/mm/yyyy",
            regex: {
                val1pre: new RegExp("[0-3]"), //daypre
                val1: new RegExp("0[1-9]|[12][0-9]|3[01]"), //day
                val2pre: function (separator) { var escapedSeparator = $.inputmask.escapeRegex.call(this, separator); return new RegExp("((0[1-9]|[12][0-9]|3[01])" + escapedSeparator + "[01])"); }, //monthpre
                val2: function (separator) { var escapedSeparator = $.inputmask.escapeRegex.call(this, separator); return new RegExp("((0[1-9]|[12][0-9])" + escapedSeparator + "(0[1-9]|1[012]))|(30" + escapedSeparator + "(0[13-9]|1[012]))|(31" + escapedSeparator + "(0[13578]|1[02]))"); }//month
            },
            leapday: "29/02/",
            separator: '/',
            yearrange: { minyear: 1900, maxyear: 2099 },
            isInYearRange: function (chrs, minyear, maxyear) {
                var enteredyear = parseInt(chrs.concat(minyear.toString().slice(chrs.length)));
                var enteredyear2 = parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));
                return (enteredyear != NaN ? minyear <= enteredyear && enteredyear <= maxyear : false) ||
            		   (enteredyear2 != NaN ? minyear <= enteredyear2 && enteredyear2 <= maxyear : false);
            },
            determinebaseyear: function (minyear, maxyear, hint) {
                var currentyear = (new Date()).getFullYear();
                if (minyear > currentyear) return minyear;
                if (maxyear < currentyear) {
                    var maxYearPrefix = maxyear.toString().slice(0, 2);
                    var maxYearPostfix = maxyear.toString().slice(2, 4);
                    while (maxyear < maxYearPrefix + hint) {
                        maxYearPrefix--;
                    }
                    var maxxYear = maxYearPrefix + maxYearPostfix;
                    return minyear > maxxYear ? minyear : maxxYear;
                }

                return currentyear;
            },
            onKeyUp: function (e, buffer, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode == opts.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString());
                }
            },
            definitions: {
                '1': { //val1 ~ day or month
                    validator: function (chrs, buffer, pos, strict, opts) {
                        var isValid = opts.regex.val1.test(chrs);
                        if (!strict && !isValid) {
                            if (chrs.charAt(1) == opts.separator || "-./".indexOf(chrs.charAt(1)) != -1) {
                                isValid = opts.regex.val1.test("0" + chrs.charAt(0));
                                if (isValid) {
                                    buffer[pos - 1] = "0";
                                    return { "pos": pos, "c": chrs.charAt(0) };
                                }
                            }
                        }
                        return isValid;
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (chrs, buffer, pos, strict, opts) {
                            var isValid = opts.regex.val1pre.test(chrs);
                            if (!strict && !isValid) {
                                isValid = opts.regex.val1.test("0" + chrs);
                                if (isValid) {
                                    buffer[pos] = "0";
                                    pos++;
                                    return { "pos": pos };
                                }
                            }
                            return isValid;
                        }, cardinality: 1
                    }]
                },
                '2': { //val2 ~ day or month
                    validator: function (chrs, buffer, pos, strict, opts) {
                        var frontValue = buffer.join('').substr(0, 3);
                        if (frontValue.indexOf(opts.placeholder[0]) != -1) frontValue = "01" + opts.separator;
                        var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
                        if (!strict && !isValid) {
                            if (chrs.charAt(1) == opts.separator || "-./".indexOf(chrs.charAt(1)) != -1) {
                                isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0));
                                if (isValid) {
                                    buffer[pos - 1] = "0";
                                    return { "pos": pos, "c": chrs.charAt(0) };
                                }
                            }
                        }
                        return isValid;
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (chrs, buffer, pos, strict, opts) {
                            var frontValue = buffer.join('').substr(0, 3);
                            if (frontValue.indexOf(opts.placeholder[0]) != -1) frontValue = "01" + opts.separator;
                            var isValid = opts.regex.val2pre(opts.separator).test(frontValue + chrs);
                            if (!strict && !isValid) {
                                isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs);
                                if (isValid) {
                                    buffer[pos] = "0";
                                    pos++;
                                    return { "pos": pos };
                                }
                            }
                            return isValid;
                        }, cardinality: 1
                    }]
                },
                'y': { //year
                    validator: function (chrs, buffer, pos, strict, opts) {
                        if (opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) {
                            var dayMonthValue = buffer.join('').substr(0, 6);
                            if (dayMonthValue != opts.leapday)
                                return true;
                            else {
                                var year = parseInt(chrs, 10);//detect leap year
                                if (year % 4 === 0)
                                    if (year % 100 === 0)
                                        if (year % 400 === 0)
                                            return true;
                                        else return false;
                                    else return true;
                                else return false;
                            }
                        } else return false;
                    },
                    cardinality: 4,
                    prevalidator: [
                {
                    validator: function (chrs, buffer, pos, strict, opts) {
                        var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                        if (!strict && !isValid) {
                            var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 1);

                            isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            if (isValid) {
                                buffer[pos++] = yearPrefix[0];
                                return { "pos": pos };
                            }
                            yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 2);

                            isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            if (isValid) {
                                buffer[pos++] = yearPrefix[0];
                                buffer[pos++] = yearPrefix[1];
                                return { "pos": pos };
                            }
                        }
                        return isValid;
                    },
                    cardinality: 1
                },
                {
                    validator: function (chrs, buffer, pos, strict, opts) {
                        var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                        if (!strict && !isValid) {
                            var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);

                            isValid = opts.isInYearRange(chrs[0] + yearPrefix[1] + chrs[1], opts.yearrange.minyear, opts.yearrange.maxyear);
                            if (isValid) {
                                buffer[pos++] = yearPrefix[1];
                                return { "pos": pos };
                            }

                            yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);
                            if (opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) {
                                var dayMonthValue = buffer.join('').substr(0, 6);
                                if (dayMonthValue != opts.leapday)
                                    isValid = true;
                                else {
                                    var year = parseInt(chrs, 10);//detect leap year
                                    if (year % 4 === 0)
                                        if (year % 100 === 0)
                                            if (year % 400 === 0)
                                                isValid = true;
                                            else isValid = false;
                                        else isValid = true;
                                    else isValid = false;
                                }
                            } else isValid = false;
                            if (isValid) {
                                buffer[pos - 1] = yearPrefix[0];
                                buffer[pos++] = yearPrefix[1];
                                buffer[pos++] = chrs[0];
                                return { "pos": pos };
                            }
                        }
                        return isValid;
                    }, cardinality: 2
                },
                {
                    validator: function (chrs, buffer, pos, strict, opts) {
                        return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                    }, cardinality: 3
                }
                    ]
                }
            },
            insertMode: false,
            autoUnmask: false
        },
        'mm/dd/yyyy': {
            placeholder: "mm/dd/yyyy",
            alias: "dd/mm/yyyy", //reuse functionality of dd/mm/yyyy alias
            regex: {
                val2pre: function (separator) { var escapedSeparator = $.inputmask.escapeRegex.call(this, separator); return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])"); }, //daypre
                val2: function (separator) { var escapedSeparator = $.inputmask.escapeRegex.call(this, separator); return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)"); }, //day
                val1pre: new RegExp("[01]"), //monthpre
                val1: new RegExp("0[1-9]|1[012]") //month
            },
            leapday: "02/29/",
            onKeyUp: function (e, buffer, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode == opts.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString());
                }
            }
        },
        'yyyy/mm/dd': {
            mask: "y/1/2",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            leapday: "/02/29",
            onKeyUp: function (e, buffer, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode == opts.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString());
                }
            },
            definitions: {
                '2': { //val2 ~ day or month
                    validator: function (chrs, buffer, pos, strict, opts) {
                        var frontValue = buffer.join('').substr(5, 3);
                        if (frontValue.indexOf(opts.placeholder[5]) != -1) frontValue = "01" + opts.separator;
                        var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
                        if (!strict && !isValid) {
                            if (chrs.charAt(1) == opts.separator || "-./".indexOf(chrs.charAt(1)) != -1) {
                                isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0));
                                if (isValid) {
                                    buffer[pos - 1] = "0";
                                    return { "pos": pos, "c": chrs.charAt(0) };
                                }
                            }
                        }

                        //check leap yeap
                        if (isValid) {
                            var dayMonthValue = buffer.join('').substr(4, 4) + chrs;
                            if (dayMonthValue != opts.leapday)
                                return true;
                            else {
                                var year = parseInt(buffer.join('').substr(0, 4), 10);  //detect leap year
                                if (year % 4 === 0)
                                    if (year % 100 === 0)
                                        if (year % 400 === 0)
                                            return true;
                                        else return false;
                                    else return true;
                                else return false;
                            }
                        }

                        return isValid;
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (chrs, buffer, pos, strict, opts) {
                            var frontValue = buffer.join('').substr(5, 3);
                            if (frontValue.indexOf(opts.placeholder[5]) != -1) frontValue = "01" + opts.separator;
                            var isValid = opts.regex.val2pre(opts.separator).test(frontValue + chrs);
                            if (!strict && !isValid) {
                                isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs);
                                if (isValid) {
                                    buffer[pos] = "0";
                                    pos++;
                                    return { "pos": pos };
                                }
                            }
                            return isValid;
                        }, cardinality: 1
                    }]
                }
            }
        },
        'dd.mm.yyyy': {
            mask: "1.2.y",
            placeholder: "dd.mm.yyyy",
            leapday: "29.02.",
            separator: '.',
            alias: "dd/mm/yyyy"
        },
        'dd-mm-yyyy': {
            mask: "1-2-y",
            placeholder: "dd-mm-yyyy",
            leapday: "29-02-",
            separator: '-',
            alias: "dd/mm/yyyy"
        },
        'mm.dd.yyyy': {
            mask: "1.2.y",
            placeholder: "mm.dd.yyyy",
            leapday: "02.29.",
            separator: '.',
            alias: "mm/dd/yyyy"
        },
        'mm-dd-yyyy': {
            mask: "1-2-y",
            placeholder: "mm-dd-yyyy",
            leapday: "02-29-",
            separator: '-',
            alias: "mm/dd/yyyy"
        },
        'yyyy.mm.dd': {
            mask: "y.1.2",
            placeholder: "yyyy.mm.dd",
            leapday: ".02.29",
            separator: '.',
            alias: "yyyy/mm/dd"
        },
        'yyyy-mm-dd': {
            mask: "y-1-2",
            placeholder: "yyyy-mm-dd",
            leapday: "-02-29",
            separator: '-',
            alias: "yyyy/mm/dd"
        },
        'datetime': {
            mask: "1/2/y h:s",
            placeholder: "dd/mm/yyyy hh:mm",
            alias: "dd/mm/yyyy",
            regex: {
                hrspre: new RegExp("[012]"), //hours pre
                hrs24: new RegExp("2[0-9]|1[3-9]"),
                hrs: new RegExp("[01][0-9]|2[0-3]"), //hours
                ampm: new RegExp("^[a|p|A|P][m|M]")
            },
            timeseparator: ':',
            hourFormat: "24", // or 12
            definitions: {
                'h': { //hours
                    validator: function (chrs, buffer, pos, strict, opts) {
                        var isValid = opts.regex.hrs.test(chrs);
                        if (!strict && !isValid) {
                            if (chrs.charAt(1) == opts.timeseparator || "-.:".indexOf(chrs.charAt(1)) != -1) {
                                isValid = opts.regex.hrs.test("0" + chrs.charAt(0));
                                if (isValid) {
                                    buffer[pos - 1] = "0";
                                    buffer[pos] = chrs.charAt(0);
                                    pos++;
                                    return { "pos": pos };
                                }
                            }
                        }

                        if (isValid && opts.hourFormat !== "24" && opts.regex.hrs24.test(chrs)) {

                            var tmp = parseInt(chrs, 10);

                            if (tmp == 24) {
                                buffer[pos + 5] = "a";
                                buffer[pos + 6] = "m";
                            } else {
                                buffer[pos + 5] = "p";
                                buffer[pos + 6] = "m";
                            }

                            tmp = tmp - 12;

                            if (tmp < 10) {
                                buffer[pos] = tmp.toString();
                                buffer[pos - 1] = "0";
                            } else {
                                buffer[pos] = tmp.toString().charAt(1);
                                buffer[pos - 1] = tmp.toString().charAt(0);
                            }

                            return { "pos": pos, "c": buffer[pos] };
                        }

                        return isValid;
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (chrs, buffer, pos, strict, opts) {
                            var isValid = opts.regex.hrspre.test(chrs);
                            if (!strict && !isValid) {
                                isValid = opts.regex.hrs.test("0" + chrs);
                                if (isValid) {
                                    buffer[pos] = "0";
                                    pos++;
                                    return { "pos": pos };
                                }
                            }
                            return isValid;
                        }, cardinality: 1
                    }]
                },
                't': { //am/pm
                    validator: function (chrs, buffer, pos, strict, opts) {
                        return opts.regex.ampm.test(chrs + "m");
                    },
                    casing: "lower",
                    cardinality: 1
                }
            },
            insertMode: false,
            autoUnmask: false
        },
        'datetime12': {
            mask: "1/2/y h:s t\\m",
            placeholder: "dd/mm/yyyy hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        'hh:mm t': {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        'h:s t': {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        'hh:mm:ss': {
            mask: "h:s:s",
            autoUnmask: false
        },
        'hh:mm': {
            mask: "h:s",
            autoUnmask: false
        },
        'date': {
            alias: "dd/mm/yyyy" // "mm/dd/yyyy"
        },
        'mm/yyyy': {
            mask: "1/y",
            placeholder: "mm/yyyy",
            leapday: "donotuse",
            separator: '/',
            alias: "mm/dd/yyyy"
        }
    });
})(jQuery);

;/*
Input Mask plugin extensions
http://github.com/RobinHerbots/jquery.inputmask
Copyright (c) 2010 - 2014 Robin Herbots
Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
Version: 0.0.0

Optional extensions on the jquery.inputmask base
*/
(function ($) {
    //extra definitions
    $.extend($.inputmask.defaults.definitions, {
        'A': {
            validator: "[A-Za-z]",
            cardinality: 1,
            casing: "upper" //auto uppercasing
        },
        '#': {
            validator: "[A-Za-z\u0410-\u044F\u0401\u04510-9]",
            cardinality: 1,
            casing: "upper"
        }
    });
    $.extend($.inputmask.defaults.aliases, {
        'url': {
            mask: "ir",
            placeholder: "",
            separator: "",
            defaultPrefix: "http://",
            regex: {
                urlpre1: new RegExp("[fh]"),
                urlpre2: new RegExp("(ft|ht)"),
                urlpre3: new RegExp("(ftp|htt)"),
                urlpre4: new RegExp("(ftp:|http|ftps)"),
                urlpre5: new RegExp("(ftp:/|ftps:|http:|https)"),
                urlpre6: new RegExp("(ftp://|ftps:/|http:/|https:)"),
                urlpre7: new RegExp("(ftp://|ftps://|http://|https:/)"),
                urlpre8: new RegExp("(ftp://|ftps://|http://|https://)")
            },
            definitions: {
                'i': {
                    validator: function (chrs, buffer, pos, strict, opts) {
                        return true;
                    },
                    cardinality: 8,
                    prevalidator: (function () {
                        var result = [], prefixLimit = 8;
                        for (var i = 0; i < prefixLimit; i++) {
                            result[i] = (function () {
                                var j = i;
                                return {
                                    validator: function (chrs, buffer, pos, strict, opts) {
                                        if (opts.regex["urlpre" + (j + 1)]) {
                                            var tmp = chrs, k;
                                            if (((j + 1) - chrs.length) > 0) {
                                                tmp = buffer.join('').substring(0, ((j + 1) - chrs.length)) + "" + tmp;
                                            }
                                            var isValid = opts.regex["urlpre" + (j + 1)].test(tmp);
                                            if (!strict && !isValid) {
                                                pos = pos - j;
                                                for (k = 0; k < opts.defaultPrefix.length; k++) {
                                                    buffer[pos] = opts.defaultPrefix[k]; pos++;
                                                }
                                                for (k = 0; k < tmp.length - 1; k++) {
                                                    buffer[pos] = tmp[k]; pos++;
                                                }
                                                return { "pos": pos };
                                            }
                                            return isValid;
                                        } else {
                                            return false;
                                        }
                                    }, cardinality: j
                                };
                            })();
                        }
                        return result;
                    })()
                },
                "r": {
                    validator: ".",
                    cardinality: 50
                }
            },
            insertMode: false,
            autoUnmask: false
        },
        "ip": { //ip-address mask
            mask: ["[[x]y]z.[[x]y]z.[[x]y]z.x[yz]", "[[x]y]z.[[x]y]z.[[x]y]z.[[x]y][z]"],
            definitions: {
                'x': {
                    validator: "[012]",
                    cardinality: 1,
                    definitionSymbol: "i"
                },
                'y': {
                    validator: function (chrs, buffer, pos, strict, opts) {
                        if (pos - 1 > -1 && buffer[pos - 1] != ".")
                            chrs = buffer[pos - 1] + chrs;
                        else chrs = "0" + chrs;
                        return new RegExp("2[0-5]|[01][0-9]").test(chrs);
                    },
                    cardinality: 1,
                    definitionSymbol: "i"
                },
                'z': {
                    validator: function (chrs, buffer, pos, strict, opts) {
                        if (pos - 1 > -1 && buffer[pos - 1] != ".") {
                            chrs = buffer[pos - 1] + chrs;
                            if (pos - 2 > -1 && buffer[pos - 2] != ".") {
                                chrs = buffer[pos - 2] + chrs;
                            } else chrs = "0" + chrs;
                        } else chrs = "00" + chrs;
                        return new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                    },
                    cardinality: 1,
                    definitionSymbol: "i"
                }
            }
        }
    });
})(jQuery);

;!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t() }(this, function () { "use strict"; function e() { return Qe.apply(null, arguments) } function t(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) } function n(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) } function s(e) { return void 0 === e } function i(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) } function r(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) } function a(e, t) { var n, s = []; for (n = 0; n < e.length; ++n)s.push(t(e[n], n)); return s } function o(e, t) { return Object.prototype.hasOwnProperty.call(e, t) } function u(e, t) { for (var n in t) o(t, n) && (e[n] = t[n]); return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e } function l(e, t, n, s) { return ge(e, t, n, s, !0).utc() } function d(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf } function h(e) { if (null == e._isValid) { var t = d(e), n = Xe.call(t.parsedDateParts, function (e) { return null != e }), s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n); if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s; e._isValid = s } return e._isValid } function c(e) { var t = l(NaN); return null != e ? u(d(t), e) : d(t).userInvalidated = !0, t } function f(e, t) { var n, i, r; if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = d(t)), s(t._locale) || (e._locale = t._locale), Ke.length > 0) for (n = 0; n < Ke.length; n++)s(r = t[i = Ke[n]]) || (e[i] = r); return e } function m(t) { f(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === et && (et = !0, e.updateOffset(this), et = !1) } function _(e) { return e instanceof m || null != e && null != e._isAMomentObject } function y(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) } function g(e) { var t = +e, n = 0; return 0 !== t && isFinite(t) && (n = y(t)), n } function p(e, t, n) { var s, i = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0; for (s = 0; s < i; s++)(n && e[s] !== t[s] || !n && g(e[s]) !== g(t[s])) && a++; return a + r } function w(t) { !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t) } function v(t, n) { var s = !0; return u(function () { if (null != e.deprecationHandler && e.deprecationHandler(null, t), s) { for (var i, r = [], a = 0; a < arguments.length; a++) { if (i = "", "object" == typeof arguments[a]) { i += "\n[" + a + "] "; for (var o in arguments[0]) i += o + ": " + arguments[0][o] + ", "; i = i.slice(0, -2) } else i = arguments[a]; r.push(i) } w(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), s = !1 } return n.apply(this, arguments) }, n) } function M(t, n) { null != e.deprecationHandler && e.deprecationHandler(t, n), tt[t] || (w(n), tt[t] = !0) } function S(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) } function D(e, t) { var s, i = u({}, e); for (s in t) o(t, s) && (n(e[s]) && n(t[s]) ? (i[s] = {}, u(i[s], e[s]), u(i[s], t[s])) : null != t[s] ? i[s] = t[s] : delete i[s]); for (s in e) o(e, s) && !o(t, s) && n(e[s]) && (i[s] = u({}, i[s])); return i } function k(e) { null != e && this.set(e) } function Y(e, t) { var n = e.toLowerCase(); st[n] = st[n + "s"] = st[t] = e } function O(e) { return "string" == typeof e ? st[e] || st[e.toLowerCase()] : void 0 } function T(e) { var t, n, s = {}; for (n in e) o(e, n) && (t = O(n)) && (s[t] = e[n]); return s } function x(e, t) { it[e] = t } function b(e, t, n) { var s = "" + Math.abs(e), i = t - s.length; return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s } function P(e, t, n, s) { var i = s; "string" == typeof s && (i = function () { return this[s]() }), e && (ut[e] = i), t && (ut[t[0]] = function () { return b(i.apply(this, arguments), t[1], t[2]) }), n && (ut[n] = function () { return this.localeData().ordinal(i.apply(this, arguments), e) }) } function W(e) { return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "") } function H(e, t) { return e.isValid() ? (t = R(t, e.localeData()), ot[t] = ot[t] || function (e) { var t, n, s = e.match(rt); for (t = 0, n = s.length; t < n; t++)ut[s[t]] ? s[t] = ut[s[t]] : s[t] = W(s[t]); return function (t) { var i, r = ""; for (i = 0; i < n; i++)r += S(s[i]) ? s[i].call(t, e) : s[i]; return r } }(t), ot[t](e)) : e.localeData().invalidDate() } function R(e, t) { function n(e) { return t.longDateFormat(e) || e } var s = 5; for (at.lastIndex = 0; s >= 0 && at.test(e);)e = e.replace(at, n), at.lastIndex = 0, s -= 1; return e } function C(e, t, n) { Yt[e] = S(t) ? t : function (e, s) { return e && n ? n : t } } function F(e, t) { return o(Yt, e) ? Yt[e](t._strict, t._locale) : new RegExp(function (e) { return U(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) { return t || n || s || i })) }(e)) } function U(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } function L(e, t) { var n, s = t; for ("string" == typeof e && (e = [e]), i(t) && (s = function (e, n) { n[t] = g(e) }), n = 0; n < e.length; n++)Ot[e[n]] = s } function N(e, t) { L(e, function (e, n, s, i) { s._w = s._w || {}, t(e, s._w, s, i) }) } function G(e, t, n) { null != t && o(Ot, e) && Ot[e](t, n._a, n, e) } function V(e) { return E(e) ? 366 : 365 } function E(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 } function I(t, n) { return function (s) { return null != s ? (j(this, t, s), e.updateOffset(this, n), this) : A(this, t) } } function A(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN } function j(e, t, n) { e.isValid() && !isNaN(n) && ("FullYear" === t && E(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Z(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)) } function Z(e, t) { if (isNaN(e) || isNaN(t)) return NaN; var n = function (e, t) { return (e % t + t) % t }(t, 12); return e += (t - n) / 12, 1 === n ? E(e) ? 29 : 28 : 31 - n % 7 % 2 } function z(e, t) { var n; if (!e.isValid()) return e; if ("string" == typeof t) if (/^\d+$/.test(t)) t = g(t); else if (t = e.localeData().monthsParse(t), !i(t)) return e; return n = Math.min(e.date(), Z(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e } function $(t) { return null != t ? (z(this, t), e.updateOffset(this, !0), this) : A(this, "Month") } function q() { function e(e, t) { return t.length - e.length } var t, n, s = [], i = [], r = []; for (t = 0; t < 12; t++)n = l([2e3, t]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, "")); for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++)s[t] = U(s[t]), i[t] = U(i[t]); for (t = 0; t < 24; t++)r[t] = U(r[t]); this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i") } function J(e) { var t = new Date(Date.UTC.apply(null, arguments)); return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t } function B(e, t, n) { var s = 7 + t - n; return -((7 + J(e, 0, s).getUTCDay() - t) % 7) + s - 1 } function Q(e, t, n, s, i) { var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + B(e, s, i); return o <= 0 ? a = V(r = e - 1) + o : o > V(e) ? (r = e + 1, a = o - V(e)) : (r = e, a = o), { year: r, dayOfYear: a } } function X(e, t, n) { var s, i, r = B(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1; return a < 1 ? s = a + K(i = e.year() - 1, t, n) : a > K(e.year(), t, n) ? (s = a - K(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), { week: s, year: i } } function K(e, t, n) { var s = B(e, t, n), i = B(e + 1, t, n); return (V(e) - s + i) / 7 } function ee() { function e(e, t) { return t.length - e.length } var t, n, s, i, r, a = [], o = [], u = [], d = []; for (t = 0; t < 7; t++)n = l([2e3, 1]).day(t), s = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(s), o.push(i), u.push(r), d.push(s), d.push(i), d.push(r); for (a.sort(e), o.sort(e), u.sort(e), d.sort(e), t = 0; t < 7; t++)o[t] = U(o[t]), u[t] = U(u[t]), d[t] = U(d[t]); this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i") } function te() { return this.hours() % 12 || 12 } function ne(e, t) { P(e, 0, 0, function () { return this.localeData().meridiem(this.hours(), this.minutes(), t) }) } function se(e, t) { return t._meridiemParse } function ie(e) { return e ? e.toLowerCase().replace("_", "-") : e } function re(e) { var t = null; if (!Xt[e] && "undefined" != typeof module && module && module.exports) try { t = Jt._abbr; require("./locale/" + e), ae(t) } catch (e) { } return Xt[e] } function ae(e, t) { var n; return e && (n = s(t) ? ue(e) : oe(e, t)) && (Jt = n), Jt._abbr } function oe(e, t) { if (null !== t) { var n = Qt; if (t.abbr = e, null != Xt[e]) M("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Xt[e]._config; else if (null != t.parentLocale) { if (null == Xt[t.parentLocale]) return Kt[t.parentLocale] || (Kt[t.parentLocale] = []), Kt[t.parentLocale].push({ name: e, config: t }), null; n = Xt[t.parentLocale]._config } return Xt[e] = new k(D(n, t)), Kt[e] && Kt[e].forEach(function (e) { oe(e.name, e.config) }), ae(e), Xt[e] } return delete Xt[e], null } function ue(e) { var n; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Jt; if (!t(e)) { if (n = re(e)) return n; e = [e] } return function (e) { for (var t, n, s, i, r = 0; r < e.length;) { for (t = (i = ie(e[r]).split("-")).length, n = (n = ie(e[r + 1])) ? n.split("-") : null; t > 0;) { if (s = re(i.slice(0, t).join("-"))) return s; if (n && n.length >= t && p(i, n, !0) >= t - 1) break; t-- } r++ } return null }(e) } function le(e) { var t, n = e._a; return n && -2 === d(e).overflow && (t = n[xt] < 0 || n[xt] > 11 ? xt : n[bt] < 1 || n[bt] > Z(n[Tt], n[xt]) ? bt : n[Pt] < 0 || n[Pt] > 24 || 24 === n[Pt] && (0 !== n[Wt] || 0 !== n[Ht] || 0 !== n[Rt]) ? Pt : n[Wt] < 0 || n[Wt] > 59 ? Wt : n[Ht] < 0 || n[Ht] > 59 ? Ht : n[Rt] < 0 || n[Rt] > 999 ? Rt : -1, d(e)._overflowDayOfYear && (t < Tt || t > bt) && (t = bt), d(e)._overflowWeeks && -1 === t && (t = Ct), d(e)._overflowWeekday && -1 === t && (t = Ft), d(e).overflow = t), e } function de(e, t, n) { return null != e ? e : null != t ? t : n } function he(t) { var n, s, i, r, a, o = []; if (!t._d) { for (i = function (t) { var n = new Date(e.now()); return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()] }(t), t._w && null == t._a[bt] && null == t._a[xt] && function (e) { var t, n, s, i, r, a, o, u; if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, a = 4, n = de(t.GG, e._a[Tt], X(pe(), 1, 4).year), s = de(t.W, 1), ((i = de(t.E, 1)) < 1 || i > 7) && (u = !0); else { r = e._locale._week.dow, a = e._locale._week.doy; var l = X(pe(), r, a); n = de(t.gg, e._a[Tt], l.year), s = de(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (u = !0)) : i = r } s < 1 || s > K(n, r, a) ? d(e)._overflowWeeks = !0 : null != u ? d(e)._overflowWeekday = !0 : (o = Q(n, s, i, r, a), e._a[Tt] = o.year, e._dayOfYear = o.dayOfYear) }(t), null != t._dayOfYear && (a = de(t._a[Tt], i[Tt]), (t._dayOfYear > V(a) || 0 === t._dayOfYear) && (d(t)._overflowDayOfYear = !0), s = J(a, 0, t._dayOfYear), t._a[xt] = s.getUTCMonth(), t._a[bt] = s.getUTCDate()), n = 0; n < 3 && null == t._a[n]; ++n)t._a[n] = o[n] = i[n]; for (; n < 7; n++)t._a[n] = o[n] = null == t._a[n] ? 2 === n ? 1 : 0 : t._a[n]; 24 === t._a[Pt] && 0 === t._a[Wt] && 0 === t._a[Ht] && 0 === t._a[Rt] && (t._nextDay = !0, t._a[Pt] = 0), t._d = (t._useUTC ? J : function (e, t, n, s, i, r, a) { var o = new Date(e, t, n, s, i, r, a); return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o }).apply(null, o), r = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[Pt] = 24), t._w && void 0 !== t._w.d && t._w.d !== r && (d(t).weekdayMismatch = !0) } } function ce(e) { var t, n, s, i, r, a, o = e._i, u = en.exec(o) || tn.exec(o); if (u) { for (d(e).iso = !0, t = 0, n = sn.length; t < n; t++)if (sn[t][1].exec(u[1])) { i = sn[t][0], s = !1 !== sn[t][2]; break } if (null == i) return void (e._isValid = !1); if (u[3]) { for (t = 0, n = rn.length; t < n; t++)if (rn[t][1].exec(u[3])) { r = (u[2] || " ") + rn[t][0]; break } if (null == r) return void (e._isValid = !1) } if (!s && null != r) return void (e._isValid = !1); if (u[4]) { if (!nn.exec(u[4])) return void (e._isValid = !1); a = "Z" } e._f = i + (r || "") + (a || ""), _e(e) } else e._isValid = !1 } function fe(e, t, n, s, i, r) { var a = [function (e) { var t = parseInt(e, 10); { if (t <= 49) return 2e3 + t; if (t <= 999) return 1900 + t } return t }(e), Vt.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)]; return r && a.push(parseInt(r, 10)), a } function me(e) { var t = on.exec(function (e) { return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim() }(e._i)); if (t) { var n = fe(t[4], t[3], t[2], t[5], t[6], t[7]); if (!function (e, t, n) { if (e && jt.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()) return d(n).weekdayMismatch = !0, n._isValid = !1, !1; return !0 }(t[1], n, e)) return; e._a = n, e._tzm = function (e, t, n) { if (e) return un[e]; if (t) return 0; var s = parseInt(n, 10), i = s % 100; return (s - i) / 100 * 60 + i }(t[8], t[9], t[10]), e._d = J.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), d(e).rfc2822 = !0 } else e._isValid = !1 } function _e(t) { if (t._f !== e.ISO_8601) if (t._f !== e.RFC_2822) { t._a = [], d(t).empty = !0; var n, s, i, r, a, o = "" + t._i, u = o.length, l = 0; for (i = R(t._f, t._locale).match(rt) || [], n = 0; n < i.length; n++)r = i[n], (s = (o.match(F(r, t)) || [])[0]) && ((a = o.substr(0, o.indexOf(s))).length > 0 && d(t).unusedInput.push(a), o = o.slice(o.indexOf(s) + s.length), l += s.length), ut[r] ? (s ? d(t).empty = !1 : d(t).unusedTokens.push(r), G(r, s, t)) : t._strict && !s && d(t).unusedTokens.push(r); d(t).charsLeftOver = u - l, o.length > 0 && d(t).unusedInput.push(o), t._a[Pt] <= 12 && !0 === d(t).bigHour && t._a[Pt] > 0 && (d(t).bigHour = void 0), d(t).parsedDateParts = t._a.slice(0), d(t).meridiem = t._meridiem, t._a[Pt] = function (e, t, n) { var s; if (null == n) return t; return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0), t) : t }(t._locale, t._a[Pt], t._meridiem), he(t), le(t) } else me(t); else ce(t) } function ye(o) { var l = o._i, y = o._f; return o._locale = o._locale || ue(o._l), null === l || void 0 === y && "" === l ? c({ nullInput: !0 }) : ("string" == typeof l && (o._i = l = o._locale.preparse(l)), _(l) ? new m(le(l)) : (r(l) ? o._d = l : t(y) ? function (e) { var t, n, s, i, r; if (0 === e._f.length) return d(e).invalidFormat = !0, void (e._d = new Date(NaN)); for (i = 0; i < e._f.length; i++)r = 0, t = f({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], _e(t), h(t) && (r += d(t).charsLeftOver, r += 10 * d(t).unusedTokens.length, d(t).score = r, (null == s || r < s) && (s = r, n = t)); u(e, n || t) }(o) : y ? _e(o) : function (o) { var u = o._i; s(u) ? o._d = new Date(e.now()) : r(u) ? o._d = new Date(u.valueOf()) : "string" == typeof u ? function (t) { var n = an.exec(t._i); null === n ? (ce(t), !1 === t._isValid && (delete t._isValid, me(t), !1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t)))) : t._d = new Date(+n[1]) }(o) : t(u) ? (o._a = a(u.slice(0), function (e) { return parseInt(e, 10) }), he(o)) : n(u) ? function (e) { if (!e._d) { var t = T(e._i); e._a = a([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) { return e && parseInt(e, 10) }), he(e) } }(o) : i(u) ? o._d = new Date(u) : e.createFromInputFallback(o) }(o), h(o) || (o._d = null), o)) } function ge(e, s, i, r, a) { var o = {}; return !0 !== i && !1 !== i || (r = i, i = void 0), (n(e) && function (e) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length; var t; for (t in e) if (e.hasOwnProperty(t)) return !1; return !0 }(e) || t(e) && 0 === e.length) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = i, o._i = e, o._f = s, o._strict = r, function (e) { var t = new m(le(ye(e))); return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t }(o) } function pe(e, t, n, s) { return ge(e, t, n, s, !1) } function we(e, n) { var s, i; if (1 === n.length && t(n[0]) && (n = n[0]), !n.length) return pe(); for (s = n[0], i = 1; i < n.length; ++i)n[i].isValid() && !n[i][e](s) || (s = n[i]); return s } function ve(e) { var t = T(e), n = t.year || 0, s = t.quarter || 0, i = t.month || 0, r = t.week || 0, a = t.day || 0, o = t.hour || 0, u = t.minute || 0, l = t.second || 0, d = t.millisecond || 0; this._isValid = function (e) { for (var t in e) if (-1 === Ut.call(hn, t) || null != e[t] && isNaN(e[t])) return !1; for (var n = !1, s = 0; s < hn.length; ++s)if (e[hn[s]]) { if (n) return !1; parseFloat(e[hn[s]]) !== g(e[hn[s]]) && (n = !0) } return !0 }(t), this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = ue(), this._bubble() } function Me(e) { return e instanceof ve } function Se(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) } function De(e, t) { P(e, 0, 0, function () { var e = this.utcOffset(), n = "+"; return e < 0 && (e = -e, n = "-"), n + b(~~(e / 60), 2) + t + b(~~e % 60, 2) }) } function ke(e, t) { var n = (t || "").match(e); if (null === n) return null; var s = ((n[n.length - 1] || []) + "").match(cn) || ["-", 0, 0], i = 60 * s[1] + g(s[2]); return 0 === i ? 0 : "+" === s[0] ? i : -i } function Ye(t, n) { var s, i; return n._isUTC ? (s = n.clone(), i = (_(t) || r(t) ? t.valueOf() : pe(t).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + i), e.updateOffset(s, !1), s) : pe(t).local() } function Oe(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15) } function Te() { return !!this.isValid() && (this._isUTC && 0 === this._offset) } function xe(e, t) { var n, s, r, a = e, u = null; return Me(e) ? a = { ms: e._milliseconds, d: e._days, M: e._months } : i(e) ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (u = fn.exec(e)) ? (n = "-" === u[1] ? -1 : 1, a = { y: 0, d: g(u[bt]) * n, h: g(u[Pt]) * n, m: g(u[Wt]) * n, s: g(u[Ht]) * n, ms: g(Se(1e3 * u[Rt])) * n }) : (u = mn.exec(e)) ? (n = "-" === u[1] ? -1 : (u[1], 1), a = { y: be(u[2], n), M: be(u[3], n), w: be(u[4], n), d: be(u[5], n), h: be(u[6], n), m: be(u[7], n), s: be(u[8], n) }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (r = function (e, t) { var n; if (!e.isValid() || !t.isValid()) return { milliseconds: 0, months: 0 }; t = Ye(t, e), e.isBefore(t) ? n = Pe(e, t) : ((n = Pe(t, e)).milliseconds = -n.milliseconds, n.months = -n.months); return n }(pe(a.from), pe(a.to)), (a = {}).ms = r.milliseconds, a.M = r.months), s = new ve(a), Me(e) && o(e, "_locale") && (s._locale = e._locale), s } function be(e, t) { var n = e && parseFloat(e.replace(",", ".")); return (isNaN(n) ? 0 : n) * t } function Pe(e, t) { var n = { milliseconds: 0, months: 0 }; return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n } function We(e, t) { return function (n, s) { var i, r; return null === s || isNaN(+s) || (M(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = s, s = r), n = "string" == typeof n ? +n : n, i = xe(n, s), He(this, i, e), this } } function He(t, n, s, i) { var r = n._milliseconds, a = Se(n._days), o = Se(n._months); t.isValid() && (i = null == i || i, o && z(t, A(t, "Month") + o * s), a && j(t, "Date", A(t, "Date") + a * s), r && t._d.setTime(t._d.valueOf() + r * s), i && e.updateOffset(t, a || o)) } function Re(e, t) { var n, s = 12 * (t.year() - e.year()) + (t.month() - e.month()), i = e.clone().add(s, "months"); return n = t - i < 0 ? (t - i) / (i - e.clone().add(s - 1, "months")) : (t - i) / (e.clone().add(s + 1, "months") - i), -(s + n) || 0 } function Ce(e) { var t; return void 0 === e ? this._locale._abbr : (null != (t = ue(e)) && (this._locale = t), this) } function Fe() { return this._locale } function Ue(e, t) { P(0, [e, e.length], 0, t) } function Le(e, t, n, s, i) { var r; return null == e ? X(this, s, i).year : (r = K(e, s, i), t > r && (t = r), function (e, t, n, s, i) { var r = Q(e, t, n, s, i), a = J(r.year, 0, r.dayOfYear); return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this }.call(this, e, t, n, s, i)) } function Ne(e, t) { t[Rt] = g(1e3 * ("0." + e)) } function Ge(e) { return e } function Ve(e, t, n, s) { var i = ue(), r = l().set(s, t); return i[n](r, e) } function Ee(e, t, n) { if (i(e) && (t = e, e = void 0), e = e || "", null != t) return Ve(e, t, n, "month"); var s, r = []; for (s = 0; s < 12; s++)r[s] = Ve(e, s, n, "month"); return r } function Ie(e, t, n, s) { "boolean" == typeof e ? (i(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, i(t) && (n = t, t = void 0), t = t || ""); var r = ue(), a = e ? r._week.dow : 0; if (null != n) return Ve(t, (n + a) % 7, s, "day"); var o, u = []; for (o = 0; o < 7; o++)u[o] = Ve(t, (o + a) % 7, s, "day"); return u } function Ae(e, t, n, s) { var i = xe(t, n); return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, e._bubble() } function je(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) } function Ze(e) { return 4800 * e / 146097 } function ze(e) { return 146097 * e / 4800 } function $e(e) { return function () { return this.as(e) } } function qe(e) { return function () { return this.isValid() ? this._data[e] : NaN } } function Je(e) { return (e > 0) - (e < 0) || +e } function Be() { if (!this.isValid()) return this.localeData().invalidDate(); var e, t, n = An(this._milliseconds) / 1e3, s = An(this._days), i = An(this._months); t = y((e = y(n / 60)) / 60), n %= 60, e %= 60; var r = y(i / 12), a = i %= 12, o = s, u = t, l = e, d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "", h = this.asSeconds(); if (!h) return "P0D"; var c = h < 0 ? "-" : "", f = Je(this._months) !== Je(h) ? "-" : "", m = Je(this._days) !== Je(h) ? "-" : "", _ = Je(this._milliseconds) !== Je(h) ? "-" : ""; return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || d ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (d ? _ + d + "S" : "") } var Qe, Xe; Xe = Array.prototype.some ? Array.prototype.some : function (e) { for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)if (s in t && e.call(this, t[s], s, t)) return !0; return !1 }; var Ke = e.momentProperties = [], et = !1, tt = {}; e.suppressDeprecationWarnings = !1, e.deprecationHandler = null; var nt; nt = Object.keys ? Object.keys : function (e) { var t, n = []; for (t in e) o(e, t) && n.push(t); return n }; var st = {}, it = {}, rt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, at = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ot = {}, ut = {}, lt = /\d/, dt = /\d\d/, ht = /\d{3}/, ct = /\d{4}/, ft = /[+-]?\d{6}/, mt = /\d\d?/, _t = /\d\d\d\d?/, yt = /\d\d\d\d\d\d?/, gt = /\d{1,3}/, pt = /\d{1,4}/, wt = /[+-]?\d{1,6}/, vt = /\d+/, Mt = /[+-]?\d+/, St = /Z|[+-]\d\d:?\d\d/gi, Dt = /Z|[+-]\d\d(?::?\d\d)?/gi, kt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Yt = {}, Ot = {}, Tt = 0, xt = 1, bt = 2, Pt = 3, Wt = 4, Ht = 5, Rt = 6, Ct = 7, Ft = 8; P("Y", 0, 0, function () { var e = this.year(); return e <= 9999 ? "" + e : "+" + e }), P(0, ["YY", 2], 0, function () { return this.year() % 100 }), P(0, ["YYYY", 4], 0, "year"), P(0, ["YYYYY", 5], 0, "year"), P(0, ["YYYYYY", 6, !0], 0, "year"), Y("year", "y"), x("year", 1), C("Y", Mt), C("YY", mt, dt), C("YYYY", pt, ct), C("YYYYY", wt, ft), C("YYYYYY", wt, ft), L(["YYYYY", "YYYYYY"], Tt), L("YYYY", function (t, n) { n[Tt] = 2 === t.length ? e.parseTwoDigitYear(t) : g(t) }), L("YY", function (t, n) { n[Tt] = e.parseTwoDigitYear(t) }), L("Y", function (e, t) { t[Tt] = parseInt(e, 10) }), e.parseTwoDigitYear = function (e) { return g(e) + (g(e) > 68 ? 1900 : 2e3) }; var Ut, Lt = I("FullYear", !0); Ut = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) { var t; for (t = 0; t < this.length; ++t)if (this[t] === e) return t; return -1 }, P("M", ["MM", 2], "Mo", function () { return this.month() + 1 }), P("MMM", 0, 0, function (e) { return this.localeData().monthsShort(this, e) }), P("MMMM", 0, 0, function (e) { return this.localeData().months(this, e) }), Y("month", "M"), x("month", 8), C("M", mt), C("MM", mt, dt), C("MMM", function (e, t) { return t.monthsShortRegex(e) }), C("MMMM", function (e, t) { return t.monthsRegex(e) }), L(["M", "MM"], function (e, t) { t[xt] = g(e) - 1 }), L(["MMM", "MMMM"], function (e, t, n, s) { var i = n._locale.monthsParse(e, s, n._strict); null != i ? t[xt] = i : d(n).invalidMonth = e }); var Nt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Gt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Vt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Et = kt, It = kt; P("w", ["ww", 2], "wo", "week"), P("W", ["WW", 2], "Wo", "isoWeek"), Y("week", "w"), Y("isoWeek", "W"), x("week", 5), x("isoWeek", 5), C("w", mt), C("ww", mt, dt), C("W", mt), C("WW", mt, dt), N(["w", "ww", "W", "WW"], function (e, t, n, s) { t[s.substr(0, 1)] = g(e) }); P("d", 0, "do", "day"), P("dd", 0, 0, function (e) { return this.localeData().weekdaysMin(this, e) }), P("ddd", 0, 0, function (e) { return this.localeData().weekdaysShort(this, e) }), P("dddd", 0, 0, function (e) { return this.localeData().weekdays(this, e) }), P("e", 0, 0, "weekday"), P("E", 0, 0, "isoWeekday"), Y("day", "d"), Y("weekday", "e"), Y("isoWeekday", "E"), x("day", 11), x("weekday", 11), x("isoWeekday", 11), C("d", mt), C("e", mt), C("E", mt), C("dd", function (e, t) { return t.weekdaysMinRegex(e) }), C("ddd", function (e, t) { return t.weekdaysShortRegex(e) }), C("dddd", function (e, t) { return t.weekdaysRegex(e) }), N(["dd", "ddd", "dddd"], function (e, t, n, s) { var i = n._locale.weekdaysParse(e, s, n._strict); null != i ? t.d = i : d(n).invalidWeekday = e }), N(["d", "e", "E"], function (e, t, n, s) { t[s] = g(e) }); var At = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), jt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Zt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), zt = kt, $t = kt, qt = kt; P("H", ["HH", 2], 0, "hour"), P("h", ["hh", 2], 0, te), P("k", ["kk", 2], 0, function () { return this.hours() || 24 }), P("hmm", 0, 0, function () { return "" + te.apply(this) + b(this.minutes(), 2) }), P("hmmss", 0, 0, function () { return "" + te.apply(this) + b(this.minutes(), 2) + b(this.seconds(), 2) }), P("Hmm", 0, 0, function () { return "" + this.hours() + b(this.minutes(), 2) }), P("Hmmss", 0, 0, function () { return "" + this.hours() + b(this.minutes(), 2) + b(this.seconds(), 2) }), ne("a", !0), ne("A", !1), Y("hour", "h"), x("hour", 13), C("a", se), C("A", se), C("H", mt), C("h", mt), C("k", mt), C("HH", mt, dt), C("hh", mt, dt), C("kk", mt, dt), C("hmm", _t), C("hmmss", yt), C("Hmm", _t), C("Hmmss", yt), L(["H", "HH"], Pt), L(["k", "kk"], function (e, t, n) { var s = g(e); t[Pt] = 24 === s ? 0 : s }), L(["a", "A"], function (e, t, n) { n._isPm = n._locale.isPM(e), n._meridiem = e }), L(["h", "hh"], function (e, t, n) { t[Pt] = g(e), d(n).bigHour = !0 }), L("hmm", function (e, t, n) { var s = e.length - 2; t[Pt] = g(e.substr(0, s)), t[Wt] = g(e.substr(s)), d(n).bigHour = !0 }), L("hmmss", function (e, t, n) { var s = e.length - 4, i = e.length - 2; t[Pt] = g(e.substr(0, s)), t[Wt] = g(e.substr(s, 2)), t[Ht] = g(e.substr(i)), d(n).bigHour = !0 }), L("Hmm", function (e, t, n) { var s = e.length - 2; t[Pt] = g(e.substr(0, s)), t[Wt] = g(e.substr(s)) }), L("Hmmss", function (e, t, n) { var s = e.length - 4, i = e.length - 2; t[Pt] = g(e.substr(0, s)), t[Wt] = g(e.substr(s, 2)), t[Ht] = g(e.substr(i)) }); var Jt, Bt = I("Hours", !0), Qt = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Gt, monthsShort: Vt, week: { dow: 0, doy: 6 }, weekdays: At, weekdaysMin: Zt, weekdaysShort: jt, meridiemParse: /[ap]\.?m?\.?/i }, Xt = {}, Kt = {}, en = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, nn = /Z|[+-]\d\d(?::?\d\d)?/, sn = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], rn = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], an = /^\/?Date\((\-?\d+)/i, on = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, un = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 }; e.createFromInputFallback = v("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), e.ISO_8601 = function () { }, e.RFC_2822 = function () { }; var ln = v("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () { var e = pe.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : c() }), dn = v("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () { var e = pe.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : c() }), hn = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"]; De("Z", ":"), De("ZZ", ""), C("Z", Dt), C("ZZ", Dt), L(["Z", "ZZ"], function (e, t, n) { n._useUTC = !0, n._tzm = ke(Dt, e) }); var cn = /([\+\-]|\d\d)/gi; e.updateOffset = function () { }; var fn = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, mn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/; xe.fn = ve.prototype, xe.invalid = function () { return xe(NaN) }; var _n = We(1, "add"), yn = We(-1, "subtract"); e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var gn = v("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) { return void 0 === e ? this.localeData() : this.locale(e) }); P(0, ["gg", 2], 0, function () { return this.weekYear() % 100 }), P(0, ["GG", 2], 0, function () { return this.isoWeekYear() % 100 }), Ue("gggg", "weekYear"), Ue("ggggg", "weekYear"), Ue("GGGG", "isoWeekYear"), Ue("GGGGG", "isoWeekYear"), Y("weekYear", "gg"), Y("isoWeekYear", "GG"), x("weekYear", 1), x("isoWeekYear", 1), C("G", Mt), C("g", Mt), C("GG", mt, dt), C("gg", mt, dt), C("GGGG", pt, ct), C("gggg", pt, ct), C("GGGGG", wt, ft), C("ggggg", wt, ft), N(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) { t[s.substr(0, 2)] = g(e) }), N(["gg", "GG"], function (t, n, s, i) { n[i] = e.parseTwoDigitYear(t) }), P("Q", 0, "Qo", "quarter"), Y("quarter", "Q"), x("quarter", 7), C("Q", lt), L("Q", function (e, t) { t[xt] = 3 * (g(e) - 1) }), P("D", ["DD", 2], "Do", "date"), Y("date", "D"), x("date", 9), C("D", mt), C("DD", mt, dt), C("Do", function (e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient }), L(["D", "DD"], bt), L("Do", function (e, t) { t[bt] = g(e.match(mt)[0]) }); var pn = I("Date", !0); P("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), Y("dayOfYear", "DDD"), x("dayOfYear", 4), C("DDD", gt), C("DDDD", ht), L(["DDD", "DDDD"], function (e, t, n) { n._dayOfYear = g(e) }), P("m", ["mm", 2], 0, "minute"), Y("minute", "m"), x("minute", 14), C("m", mt), C("mm", mt, dt), L(["m", "mm"], Wt); var wn = I("Minutes", !1); P("s", ["ss", 2], 0, "second"), Y("second", "s"), x("second", 15), C("s", mt), C("ss", mt, dt), L(["s", "ss"], Ht); var vn = I("Seconds", !1); P("S", 0, 0, function () { return ~~(this.millisecond() / 100) }), P(0, ["SS", 2], 0, function () { return ~~(this.millisecond() / 10) }), P(0, ["SSS", 3], 0, "millisecond"), P(0, ["SSSS", 4], 0, function () { return 10 * this.millisecond() }), P(0, ["SSSSS", 5], 0, function () { return 100 * this.millisecond() }), P(0, ["SSSSSS", 6], 0, function () { return 1e3 * this.millisecond() }), P(0, ["SSSSSSS", 7], 0, function () { return 1e4 * this.millisecond() }), P(0, ["SSSSSSSS", 8], 0, function () { return 1e5 * this.millisecond() }), P(0, ["SSSSSSSSS", 9], 0, function () { return 1e6 * this.millisecond() }), Y("millisecond", "ms"), x("millisecond", 16), C("S", gt, lt), C("SS", gt, dt), C("SSS", gt, ht); var Mn; for (Mn = "SSSS"; Mn.length <= 9; Mn += "S")C(Mn, vt); for (Mn = "S"; Mn.length <= 9; Mn += "S")L(Mn, Ne); var Sn = I("Milliseconds", !1); P("z", 0, 0, "zoneAbbr"), P("zz", 0, 0, "zoneName"); var Dn = m.prototype; Dn.add = _n, Dn.calendar = function (t, n) { var s = t || pe(), i = Ye(s, this).startOf("day"), r = e.calendarFormat(this, i) || "sameElse", a = n && (S(n[r]) ? n[r].call(this, s) : n[r]); return this.format(a || this.localeData().calendar(r, this, pe(s))) }, Dn.clone = function () { return new m(this) }, Dn.diff = function (e, t, n) { var s, i, r; if (!this.isValid()) return NaN; if (!(s = Ye(e, this)).isValid()) return NaN; switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = O(t)) { case "year": r = Re(this, s) / 12; break; case "month": r = Re(this, s); break; case "quarter": r = Re(this, s) / 3; break; case "second": r = (this - s) / 1e3; break; case "minute": r = (this - s) / 6e4; break; case "hour": r = (this - s) / 36e5; break; case "day": r = (this - s - i) / 864e5; break; case "week": r = (this - s - i) / 6048e5; break; default: r = this - s }return n ? r : y(r) }, Dn.endOf = function (e) { return void 0 === (e = O(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")) }, Dn.format = function (t) { t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat); var n = H(this, t); return this.localeData().postformat(n) }, Dn.from = function (e, t) { return this.isValid() && (_(e) && e.isValid() || pe(e).isValid()) ? xe({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, Dn.fromNow = function (e) { return this.from(pe(), e) }, Dn.to = function (e, t) { return this.isValid() && (_(e) && e.isValid() || pe(e).isValid()) ? xe({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, Dn.toNow = function (e) { return this.to(pe(), e) }, Dn.get = function (e) { return e = O(e), S(this[e]) ? this[e]() : this }, Dn.invalidAt = function () { return d(this).overflow }, Dn.isAfter = function (e, t) { var n = _(e) ? e : pe(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = O(s(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) }, Dn.isBefore = function (e, t) { var n = _(e) ? e : pe(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = O(s(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) }, Dn.isBetween = function (e, t, n, s) { return ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n)) }, Dn.isSame = function (e, t) { var n, s = _(e) ? e : pe(e); return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = O(t || "millisecond")) ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) }, Dn.isSameOrAfter = function (e, t) { return this.isSame(e, t) || this.isAfter(e, t) }, Dn.isSameOrBefore = function (e, t) { return this.isSame(e, t) || this.isBefore(e, t) }, Dn.isValid = function () { return h(this) }, Dn.lang = gn, Dn.locale = Ce, Dn.localeData = Fe, Dn.max = dn, Dn.min = ln, Dn.parsingFlags = function () { return u({}, d(this)) }, Dn.set = function (e, t) { if ("object" == typeof e) for (var n = function (e) { var t = []; for (var n in e) t.push({ unit: n, priority: it[n] }); return t.sort(function (e, t) { return e.priority - t.priority }), t }(e = T(e)), s = 0; s < n.length; s++)this[n[s].unit](e[n[s].unit]); else if (e = O(e), S(this[e])) return this[e](t); return this }, Dn.startOf = function (e) { switch (e = O(e)) { case "year": this.month(0); case "quarter": case "month": this.date(1); case "week": case "isoWeek": case "day": case "date": this.hours(0); case "hour": this.minutes(0); case "minute": this.seconds(0); case "second": this.milliseconds(0) }return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this }, Dn.subtract = yn, Dn.toArray = function () { return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()] }, Dn.toObject = function () { return { years: this.year(), months: this.month(), date: this.date(), hours: this.hours(), minutes: this.minutes(), seconds: this.seconds(), milliseconds: this.milliseconds() } }, Dn.toDate = function () { return new Date(this.valueOf()) }, Dn.toISOString = function (e) { if (!this.isValid()) return null; var t = !0 !== e, n = t ? this.clone().utc() : this; return n.year() < 0 || n.year() > 9999 ? H(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", H(n, "Z")) : H(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, Dn.inspect = function () { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var e = "moment", t = ""; this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z"); var n = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = t + '[")]'; return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i) }, Dn.toJSON = function () { return this.isValid() ? this.toISOString() : null }, Dn.toString = function () { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, Dn.unix = function () { return Math.floor(this.valueOf() / 1e3) }, Dn.valueOf = function () { return this._d.valueOf() - 6e4 * (this._offset || 0) }, Dn.creationData = function () { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, Dn.year = Lt, Dn.isLeapYear = function () { return E(this.year()) }, Dn.weekYear = function (e) { return Le.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, Dn.isoWeekYear = function (e) { return Le.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, Dn.quarter = Dn.quarters = function (e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, Dn.month = $, Dn.daysInMonth = function () { return Z(this.year(), this.month()) }, Dn.week = Dn.weeks = function (e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") }, Dn.isoWeek = Dn.isoWeeks = function (e) { var t = X(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") }, Dn.weeksInYear = function () { var e = this.localeData()._week; return K(this.year(), e.dow, e.doy) }, Dn.isoWeeksInYear = function () { return K(this.year(), 1, 4) }, Dn.date = pn, Dn.day = Dn.days = function (e) { if (!this.isValid()) return null != e ? this : NaN; var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (e = function (e, t) { return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10) }(e, this.localeData()), this.add(e - t, "d")) : t }, Dn.weekday = function (e) { if (!this.isValid()) return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") }, Dn.isoWeekday = function (e) { if (!this.isValid()) return null != e ? this : NaN; if (null != e) { var t = function (e, t) { return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e }(e, this.localeData()); return this.day(this.day() % 7 ? t : t - 7) } return this.day() || 7 }, Dn.dayOfYear = function (e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, Dn.hour = Dn.hours = Bt, Dn.minute = Dn.minutes = wn, Dn.second = Dn.seconds = vn, Dn.millisecond = Dn.milliseconds = Sn, Dn.utcOffset = function (t, n, s) { var i, r = this._offset || 0; if (!this.isValid()) return null != t ? this : NaN; if (null != t) { if ("string" == typeof t) { if (null === (t = ke(Dt, t))) return this } else Math.abs(t) < 16 && !s && (t *= 60); return !this._isUTC && n && (i = Oe(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!n || this._changeInProgress ? He(this, xe(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? r : Oe(this) }, Dn.utc = function (e) { return this.utcOffset(0, e) }, Dn.local = function (e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Oe(this), "m")), this }, Dn.parseZone = function () { if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) { var e = ke(St, this._i); null != e ? this.utcOffset(e) : this.utcOffset(0, !0) } return this }, Dn.hasAlignedHourOffset = function (e) { return !!this.isValid() && (e = e ? pe(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, Dn.isDST = function () { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, Dn.isLocal = function () { return !!this.isValid() && !this._isUTC }, Dn.isUtcOffset = function () { return !!this.isValid() && this._isUTC }, Dn.isUtc = Te, Dn.isUTC = Te, Dn.zoneAbbr = function () { return this._isUTC ? "UTC" : "" }, Dn.zoneName = function () { return this._isUTC ? "Coordinated Universal Time" : "" }, Dn.dates = v("dates accessor is deprecated. Use date instead.", pn), Dn.months = v("months accessor is deprecated. Use month instead", $), Dn.years = v("years accessor is deprecated. Use year instead", Lt), Dn.zone = v("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() }), Dn.isDSTShifted = v("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () { if (!s(this._isDSTShifted)) return this._isDSTShifted; var e = {}; if (f(e, this), (e = ye(e))._a) { var t = e._isUTC ? l(e._a) : pe(e._a); this._isDSTShifted = this.isValid() && p(e._a, t.toArray()) > 0 } else this._isDSTShifted = !1; return this._isDSTShifted }); var kn = k.prototype; kn.calendar = function (e, t, n) { var s = this._calendar[e] || this._calendar.sameElse; return S(s) ? s.call(t, n) : s }, kn.longDateFormat = function (e) { var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()]; return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) { return e.slice(1) }), this._longDateFormat[e]) }, kn.invalidDate = function () { return this._invalidDate }, kn.ordinal = function (e) { return this._ordinal.replace("%d", e) }, kn.preparse = Ge, kn.postformat = Ge, kn.relativeTime = function (e, t, n, s) { var i = this._relativeTime[n]; return S(i) ? i(e, t, n, s) : i.replace(/%d/i, e) }, kn.pastFuture = function (e, t) { var n = this._relativeTime[e > 0 ? "future" : "past"]; return S(n) ? n(t) : n.replace(/%s/i, t) }, kn.set = function (e) { var t, n; for (n in e) S(t = e[n]) ? this[n] = t : this["_" + n] = t; this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, kn.months = function (e, n) { return e ? t(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Nt).test(n) ? "format" : "standalone"][e.month()] : t(this._months) ? this._months : this._months.standalone }, kn.monthsShort = function (e, n) { return e ? t(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Nt.test(n) ? "format" : "standalone"][e.month()] : t(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, kn.monthsParse = function (e, t, n) { var s, i, r; if (this._monthsParseExact) return function (e, t, n) { var s, i, r, a = e.toLocaleLowerCase(); if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)r = l([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase(); return n ? "MMM" === t ? -1 !== (i = Ut.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Ut.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Ut.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Ut.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Ut.call(this._longMonthsParse, a)) ? i : -1 !== (i = Ut.call(this._shortMonthsParse, a)) ? i : null }.call(this, e, t, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) { if (i = l([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s; if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s; if (!n && this._monthsParse[s].test(e)) return s } }, kn.monthsRegex = function (e) { return this._monthsParseExact ? (o(this, "_monthsRegex") || q.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (o(this, "_monthsRegex") || (this._monthsRegex = It), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, kn.monthsShortRegex = function (e) { return this._monthsParseExact ? (o(this, "_monthsRegex") || q.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (o(this, "_monthsShortRegex") || (this._monthsShortRegex = Et), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, kn.week = function (e) { return X(e, this._week.dow, this._week.doy).week }, kn.firstDayOfYear = function () { return this._week.doy }, kn.firstDayOfWeek = function () { return this._week.dow }, kn.weekdays = function (e, n) { return e ? t(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(n) ? "format" : "standalone"][e.day()] : t(this._weekdays) ? this._weekdays : this._weekdays.standalone }, kn.weekdaysMin = function (e) { return e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, kn.weekdaysShort = function (e) { return e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, kn.weekdaysParse = function (e, t, n) { var s, i, r; if (this._weekdaysParseExact) return function (e, t, n) { var s, i, r, a = e.toLocaleLowerCase(); if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)r = l([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase(); return n ? "dddd" === t ? -1 !== (i = Ut.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ut.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Ut.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Ut.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ut.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ut.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ut.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ut.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ut.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Ut.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Ut.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ut.call(this._shortWeekdaysParse, a)) ? i : null }.call(this, e, t, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) { if (i = l([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s; if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s; if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s; if (!n && this._weekdaysParse[s].test(e)) return s } }, kn.weekdaysRegex = function (e) { return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || ee.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (o(this, "_weekdaysRegex") || (this._weekdaysRegex = zt), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, kn.weekdaysShortRegex = function (e) { return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || ee.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (o(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $t), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, kn.weekdaysMinRegex = function (e) { return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || ee.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (o(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = qt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, kn.isPM = function (e) { return "p" === (e + "").toLowerCase().charAt(0) }, kn.meridiem = function (e, t, n) { return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" }, ae("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) { var t = e % 10; return e + (1 === g(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } }), e.lang = v("moment.lang is deprecated. Use moment.locale instead.", ae), e.langData = v("moment.langData is deprecated. Use moment.localeData instead.", ue); var Yn = Math.abs, On = $e("ms"), Tn = $e("s"), xn = $e("m"), bn = $e("h"), Pn = $e("d"), Wn = $e("w"), Hn = $e("M"), Rn = $e("y"), Cn = qe("milliseconds"), Fn = qe("seconds"), Un = qe("minutes"), Ln = qe("hours"), Nn = qe("days"), Gn = qe("months"), Vn = qe("years"), En = Math.round, In = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 }, An = Math.abs, jn = ve.prototype; return jn.isValid = function () { return this._isValid }, jn.abs = function () { var e = this._data; return this._milliseconds = Yn(this._milliseconds), this._days = Yn(this._days), this._months = Yn(this._months), e.milliseconds = Yn(e.milliseconds), e.seconds = Yn(e.seconds), e.minutes = Yn(e.minutes), e.hours = Yn(e.hours), e.months = Yn(e.months), e.years = Yn(e.years), this }, jn.add = function (e, t) { return Ae(this, e, t, 1) }, jn.subtract = function (e, t) { return Ae(this, e, t, -1) }, jn.as = function (e) { if (!this.isValid()) return NaN; var t, n, s = this._milliseconds; if ("month" === (e = O(e)) || "year" === e) return t = this._days + s / 864e5, n = this._months + Ze(t), "month" === e ? n : n / 12; switch (t = this._days + Math.round(ze(this._months)), e) { case "week": return t / 7 + s / 6048e5; case "day": return t + s / 864e5; case "hour": return 24 * t + s / 36e5; case "minute": return 1440 * t + s / 6e4; case "second": return 86400 * t + s / 1e3; case "millisecond": return Math.floor(864e5 * t) + s; default: throw new Error("Unknown unit " + e) } }, jn.asMilliseconds = On, jn.asSeconds = Tn, jn.asMinutes = xn, jn.asHours = bn, jn.asDays = Pn, jn.asWeeks = Wn, jn.asMonths = Hn, jn.asYears = Rn, jn.valueOf = function () { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN }, jn._bubble = function () { var e, t, n, s, i, r = this._milliseconds, a = this._days, o = this._months, u = this._data; return r >= 0 && a >= 0 && o >= 0 || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * je(ze(o) + a), a = 0, o = 0), u.milliseconds = r % 1e3, e = y(r / 1e3), u.seconds = e % 60, t = y(e / 60), u.minutes = t % 60, n = y(t / 60), u.hours = n % 24, a += y(n / 24), i = y(Ze(a)), o += i, a -= je(ze(i)), s = y(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, this }, jn.clone = function () { return xe(this) }, jn.get = function (e) { return e = O(e), this.isValid() ? this[e + "s"]() : NaN }, jn.milliseconds = Cn, jn.seconds = Fn, jn.minutes = Un, jn.hours = Ln, jn.days = Nn, jn.weeks = function () { return y(this.days() / 7) }, jn.months = Gn, jn.years = Vn, jn.humanize = function (e) { if (!this.isValid()) return this.localeData().invalidDate(); var t = this.localeData(), n = function (e, t, n) { var s = xe(e).abs(), i = En(s.as("s")), r = En(s.as("m")), a = En(s.as("h")), o = En(s.as("d")), u = En(s.as("M")), l = En(s.as("y")), d = i <= In.ss && ["s", i] || i < In.s && ["ss", i] || r <= 1 && ["m"] || r < In.m && ["mm", r] || a <= 1 && ["h"] || a < In.h && ["hh", a] || o <= 1 && ["d"] || o < In.d && ["dd", o] || u <= 1 && ["M"] || u < In.M && ["MM", u] || l <= 1 && ["y"] || ["yy", l]; return d[2] = t, d[3] = +e > 0, d[4] = n, function (e, t, n, s, i) { return i.relativeTime(t || 1, !!n, e, s) }.apply(null, d) }(this, !e, t); return e && (n = t.pastFuture(+this, n)), t.postformat(n) }, jn.toISOString = Be, jn.toString = Be, jn.toJSON = Be, jn.locale = Ce, jn.localeData = Fe, jn.toIsoString = v("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Be), jn.lang = gn, P("X", 0, 0, "unix"), P("x", 0, 0, "valueOf"), C("x", Mt), C("X", /[+-]?\d+(\.\d{1,3})?/), L("X", function (e, t, n) { n._d = new Date(1e3 * parseFloat(e, 10)) }), L("x", function (e, t, n) { n._d = new Date(g(e)) }), e.version = "2.20.1", function (e) { Qe = e }(pe), e.fn = Dn, e.min = function () { return we("isBefore", [].slice.call(arguments, 0)) }, e.max = function () { return we("isAfter", [].slice.call(arguments, 0)) }, e.now = function () { return Date.now ? Date.now() : +new Date }, e.utc = l, e.unix = function (e) { return pe(1e3 * e) }, e.months = function (e, t) { return Ee(e, t, "months") }, e.isDate = r, e.locale = ae, e.invalid = c, e.duration = xe, e.isMoment = _, e.weekdays = function (e, t, n) { return Ie(e, t, n, "weekdays") }, e.parseZone = function () { return pe.apply(null, arguments).parseZone() }, e.localeData = ue, e.isDuration = Me, e.monthsShort = function (e, t) { return Ee(e, t, "monthsShort") }, e.weekdaysMin = function (e, t, n) { return Ie(e, t, n, "weekdaysMin") }, e.defineLocale = oe, e.updateLocale = function (e, t) { if (null != t) { var n, s, i = Qt; null != (s = re(e)) && (i = s._config), (n = new k(t = D(i, t))).parentLocale = Xt[e], Xt[e] = n, ae(e) } else null != Xt[e] && (null != Xt[e].parentLocale ? Xt[e] = Xt[e].parentLocale : null != Xt[e] && delete Xt[e]); return Xt[e] }, e.locales = function () { return nt(Xt) }, e.weekdaysShort = function (e, t, n) { return Ie(e, t, n, "weekdaysShort") }, e.normalizeUnits = O, e.relativeTimeRounding = function (e) { return void 0 === e ? En : "function" == typeof e && (En = e, !0) }, e.relativeTimeThreshold = function (e, t) { return void 0 !== In[e] && (void 0 === t ? In[e] : (In[e] = t, "s" === e && (In.ss = t - 1), !0)) }, e.calendarFormat = function (e, t) { var n = e.diff(t, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }, e.prototype = Dn, e.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "YYYY-[W]WW", MONTH: "YYYY-MM" }, e });
;(function ( $ ) {
  $.fn.multiStepForm = function(args) {
      if(args === null || typeof args !== 'object' || $.isArray(args))
        throw  " : Called with Invalid argument";
      var form = this;
      var tabs = form.find('.tab');
      var steps = form.find('.step');
      form.previousIndex = 0;
      form.currentIndex = 0;
      form.currentTab;
      steps.each(function(i, e){
        $(e).on('click', function(ev){
        if(form.validateElementsOfCurrentTab())
          form.navigateTo(i);
        });
      });
      form.navigateTo = function (i) {/*index*/

        /*Mark the current section with the class 'current'*/
        tabs.removeClass('current').eq(i).addClass('current');
        // steps.removeClass('next');
        // Show only the navigation buttons that make sense for the current section:
        form.find('.previous').toggle(i > 0);
        
        
        atTheEnd = i >= tabs.length - 1;
          form.find('.next').toggle(!atTheEnd);
          // if(tabs.length > i){
            //   steps.eq([i+1]).addClass('next');
            // }
            // console.log('atTheEnd='+atTheEnd);
            form.find('.submit').toggle(atTheEnd);
            // i = i > form.currentIndex ? i : i
            let newi = i == 0 ? i +1 : form.previousIndex < i ? i-1 : i+1;
            form.currentIndex = i;
            form.previousIndex  = newi;

            if(steps.eq(i).hasClass('previous')){
              console.log('has class');
              steps.removeClass('previous');
              form.previousIndex  =i;
              newi = i
            }else{
            steps.eq(i).addClass('previous');
            steps.eq(i).css("display","inline");
            }

            steps.css("display","inline");

        fixStepIndicator(newi);
        return form;
      }
      function curIndex() {
        /*Return the current index by looking at which section has the class 'current'*/
        console.log(tabs.index(tabs.filter('.current')))
        return tabs.index(tabs.filter('.current'));
      }
      function fixStepIndicator(n) {
       steps.each(function(i, e){
          i == n ? $(e).addClass('active') : $(e).removeClass('active');
          i == n ? tabs.eq(i).addClass('current') : tabs.eq(i).removeClass('current');
        });
      }
      /* Previous button is easy, just go back */
      form.find('.previous').click(function(event) {
        console.log($(event), event);
        // form.navigateTo(curIndex() - 1);
      });

      /* Next button goes forward iff current block validates */
      form.find('.next').click(function() {
        if('validations' in args && typeof args.validations === 'object' && !$.isArray(args.validations)){
          if(!('noValidate' in args) || (typeof args.noValidate === 'boolean' && !args.noValidate)){
            form.validate(args.validations);
            if(form.valid() == true){
              form.navigateTo(curIndex() + 1);
              return true;
            }
            return false;
          }
        }
        form.navigateTo(curIndex() + 1);
      });
      form.find('.submit').on('click', function(e){
        if(typeof args.beforeSubmit !== 'undefined' && typeof args.beforeSubmit !== 'function')
          args.beforeSubmit(form, this);
        /*check if args.submit is set false if not then form.submit is not gonna run, if not set then will run by default*/
        if(typeof args.submit === 'undefined' || (typeof args.submit === 'boolean' && args.submit)){
          form.submit();
        }
        return form;
      });
      /*By default navigate to the tab 0, if it is being set using defaultStep property*/
      typeof args.defaultStep === 'number' ? form.navigateTo(args.defaultStep) : null;

      form.noValidate = function(a) {
        console.log(a)
      }
      form.setActiveIndex = function(index) {
        fixStepIndicator(index);
        return form;
      }
      form.validateElementsOfCurrentTab = function(){
        // console.log($(tabs[form.currentIndex]).find('input'));
        let valid = true;
        let currentTabElements = getCurrentTabElements();
        console.log(currentTabElements)
          for(let i = 0; i < currentTabElements.length; i++){
            valid = isValid(currentTabElements[i]);
            if(!valid) break;
          }
          console.log("valid", valid);
        return valid;
      }

      function isValid(e){
        console.log('val.......',$(e).val(), $(e).data("formula"))
        return $(e) && ($(e).val() || $(e).data("formula") ) ? true: false;
      }

      form.getCurrentTab = function(){
        // console.log($(tabs[form.currentIndex]));
        form.currentTab = $(tabs[form.currentIndex]);
        return form;
      }

      function getCurrentTabElements(){
        form.currentTab = $(tabs[form.currentIndex]);
        // let inputs = [...$(tabs[form.currentIndex]).find('input')]
        return $(tabs[form.currentIndex]).find('input')
      }
      // form.getTab = function(i){
      //   console.log("tabs getTab",tabs[fi])
      //   return $(tabs[i]);
      // }
      return form;
  };
}( jQuery ));

;
//# sourceMappingURL=scripts.js.map