(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{3958:function(e,t){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.cloneNode=t.Element=t.Document=t.NodeWithChildren=t.ProcessingInstruction=t.Comment=t.Text=t.DataNode=t.Node=void 0;var a=new Map([["tag",1],["script",1],["style",1],["directive",1],["text",3],["cdata",4],["comment",8],["root",9]]),o=function(){function e(e){this.type=e,this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"nodeType",{get:function(){var e;return null!==(e=a.get(this.type))&&void 0!==e?e:1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return void 0===e&&(e=!1),m(this,e)},e}();t.Node=o;var s=function(e){function t(t,r){var n=e.call(this,t)||this;return n.data=r,n}return n(t,e),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),t}(o);t.DataNode=s;var l=function(e){function t(t){return e.call(this,"text",t)||this}return n(t,e),t}(s);t.Text=l;var c=function(e){function t(t){return e.call(this,"comment",t)||this}return n(t,e),t}(s);t.Comment=c;var d=function(e){function t(t,r){var n=e.call(this,"directive",r)||this;return n.name=t,n}return n(t,e),t}(s);t.ProcessingInstruction=d;var u=function(e){function t(t,r){var n=e.call(this,t)||this;return n.children=r,n}return n(t,e),Object.defineProperty(t.prototype,"firstChild",{get:function(){var e;return null!==(e=this.children[0])&&void 0!==e?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),t}(o);t.NodeWithChildren=u;var p=function(e){function t(t){return e.call(this,"root",t)||this}return n(t,e),t}(u);t.Document=p;var f=function(e){function t(t,r,n){void 0===n&&(n=[]);var i=e.call(this,"script"===t?"script":"style"===t?"style":"tag",n)||this;return i.name=t,i.attribs=r,i.attribs=r,i}return n(t,e),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e=this;return Object.keys(this.attribs).map((function(t){var r,n;return{name:t,value:e.attribs[t],namespace:null===(r=e["x-attribsNamespace"])||void 0===r?void 0:r[t],prefix:null===(n=e["x-attribsPrefix"])||void 0===n?void 0:n[t]}}))},enumerable:!1,configurable:!0}),t}(u);function m(e,t){var r;switch(void 0===t&&(t=!1),e.type){case"text":r=new l(e.data);break;case"directive":var n=e;r=new d(n.name,n.data),null!=n["x-name"]&&(r["x-name"]=n["x-name"],r["x-publicId"]=n["x-publicId"],r["x-systemId"]=n["x-systemId"]);break;case"comment":r=new c(e.data);break;case"tag":case"script":case"style":var a=e,o=t?h(a.children):[],s=new f(a.name,i({},a.attribs),o);o.forEach((function(e){return e.parent=s})),a["x-attribsNamespace"]&&(s["x-attribsNamespace"]=i({},a["x-attribsNamespace"])),a["x-attribsPrefix"]&&(s["x-attribsPrefix"]=i({},a["x-attribsPrefix"])),r=s;break;case"cdata":o=t?h(e.children):[];var m=new u(e.type,o);o.forEach((function(e){return e.parent=m})),r=m;break;case"root":var g=e,y=(o=t?h(g.children):[],new p(o));o.forEach((function(e){return e.parent=y})),g["x-mode"]&&(y["x-mode"]=g["x-mode"]),r=y;break;case"doctype":throw new Error("Not implemented yet: ElementType.Doctype case")}return r.startIndex=e.startIndex,r.endIndex=e.endIndex,r}function h(e){for(var t=e.map((function(e){return m(e,!0)})),r=1;r<t.length;r++)t[r].prev=t[r-1],t[r-1].next=t[r];return t}t.Element=f,t.cloneNode=m},8048:function(e){e.exports={CASE_SENSITIVE_TAG_NAMES:["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussainBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"]}},5389:function(e,t,r){var n="html",i="head",a="body",o=/<([a-zA-Z]+[0-9]?)/,s=/<head.*>/i,l=/<body.*>/i,c=function(){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},d=function(){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")};if("function"==typeof window.DOMParser){var u=new window.DOMParser;c=d=function(e,t){return t&&(e="<"+t+">"+e+"</"+t+">"),u.parseFromString(e,"text/html")}}if(document.implementation){var p=r(5953).isIE,f=document.implementation.createHTMLDocument(p()?"html-dom-parser":void 0);c=function(e,t){return t?(f.documentElement.getElementsByTagName(t)[0].innerHTML=e,f):(f.documentElement.innerHTML=e,f)}}var m,h=document.createElement("template");h.content&&(m=function(e){return h.innerHTML=e,h.content.childNodes}),e.exports=function(e){var t,r,u,p,f=e.match(o);switch(f&&f[1]&&(t=f[1].toLowerCase()),t){case n:return r=d(e),s.test(e)||(u=r.getElementsByTagName(i)[0])&&u.parentNode.removeChild(u),l.test(e)||(u=r.getElementsByTagName(a)[0])&&u.parentNode.removeChild(u),r.getElementsByTagName(n);case i:case a:return p=c(e).getElementsByTagName(t),l.test(e)&&s.test(e)?p[0].parentNode.childNodes:p;default:return m?m(e):c(e,a).getElementsByTagName(a)[0].childNodes}}},3268:function(e,t,r){var n=r(5389),i=r(5953).formatDOM,a=/<(![a-zA-Z\s]+)>/;e.exports=function(e){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(""===e)return[];var t,r=e.match(a);return r&&r[1]&&(t=r[1]),i(n(e),null,t)}},5953:function(e,t,r){for(var n,i=r(8048),a=r(3958),o=i.CASE_SENSITIVE_TAG_NAMES,s=a.Comment,l=a.Element,c=a.ProcessingInstruction,d=a.Text,u={},p=0,f=o.length;p<f;p++)n=o[p],u[n.toLowerCase()]=n;function m(e){for(var t,r={},n=0,i=e.length;n<i;n++)r[(t=e[n]).name]=t.value;return r}function h(e){var t=function(e){return u[e]}(e=e.toLowerCase());return t||e}e.exports={formatAttributes:m,formatDOM:function e(t,r,n){r=r||null;for(var i=[],a=0,o=t.length;a<o;a++){var u,p=t[a];switch(p.nodeType){case 1:(u=new l(h(p.nodeName),m(p.attributes))).children=e(p.childNodes,u);break;case 3:u=new d(p.nodeValue);break;case 8:u=new s(p.nodeValue);break;default:continue}var f=i[a-1]||null;f&&(f.next=u),u.parent=r,u.prev=f,u.next=null,i.push(u)}return n&&((u=new c(n.substring(0,n.indexOf(" ")).toLowerCase(),n)).next=i[0]||null,u.parent=r,i.unshift(u),i[1]&&(i[1].prev=i[0])),i},isIE:function(){return/(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)}}},392:function(e,t,r){var n=r(9178),i=r(9062),a=r(3268),o={lowerCaseAttributeNames:!1};function s(e,t){if("string"!=typeof e)throw new TypeError("First argument must be a string");return""===e?[]:n(a(e,(t=t||{}).htmlparser2||o),t)}s.domToReact=n,s.htmlToDOM=a,s.attributesToProps=i,e.exports=s,e.exports.default=s},9062:function(e,t,r){var n=r(8962),i=r(8065),a=i.setStyleProp,o=n.html,s=n.svg,l=n.isCustomAttribute,c=Object.prototype.hasOwnProperty;e.exports=function(e){var t,r,n,d;e=e||{};var u={};for(t in e)n=e[t],l(t)?u[t]=n:(r=t.toLowerCase(),c.call(o,r)?u[(d=o[r]).propertyName]=!!(d.hasBooleanValue||d.hasOverloadedBooleanValue&&!n)||n:c.call(s,t)?u[(d=s[t]).propertyName]=n:i.PRESERVE_CUSTOM_ATTRIBUTES&&(u[t]=n));return a(e.style,u),u}},9178:function(e,t,r){var n=r(7294),i=r(9062),a=r(8065),o=a.setStyleProp;function s(e){return a.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===e.type&&a.isCustomComponent(e.name,e.attribs)}e.exports=function e(t,r){for(var a,l,c,d,u=(r=r||{}).library||n,p=u.cloneElement,f=u.createElement,m=u.isValidElement,h=[],g="function"==typeof r.replace,y=r.trim,b=0,v=t.length;b<v;b++)if(a=t[b],g&&m(l=r.replace(a)))v>1&&(l=p(l,{key:l.key||b})),h.push(l);else if("text"!==a.type){switch(c=a.attribs,s(a)?o(c.style,c):c&&(c=i(c)),d=null,a.type){case"script":case"style":a.children[0]&&(c.dangerouslySetInnerHTML={__html:a.children[0].data});break;case"tag":"textarea"===a.name&&a.children[0]?c.defaultValue=a.children[0].data:a.children&&a.children.length&&(d=e(a.children,r));break;default:continue}v>1&&(c.key=b),h.push(f(a.name,c,d))}else y?a.data.trim()&&h.push(a.data):h.push(a.data);return 1===h.length?h[0]:h}},8065:function(e,t,r){var n=r(7294),i=r(7929).default;var a={reactCompat:!0};var o=n.version.split(".")[0]>=16;e.exports={PRESERVE_CUSTOM_ATTRIBUTES:o,invertObject:function(e,t){if(!e||"object"!=typeof e)throw new TypeError("First argument must be an object");var r,n,i="function"==typeof t,a={},o={};for(r in e)n=e[r],i&&(a=t(r,n))&&2===a.length?o[a[0]]=a[1]:"string"==typeof n&&(o[n]=r);return o},isCustomComponent:function(e,t){if(-1===e.indexOf("-"))return t&&"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}},setStyleProp:function(e,t){null!=e&&(t.style=i(e,a))}}},6650:function(e){var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,n=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,a=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,l=/^\s+|\s+$/g,c="";function d(e){return e?e.replace(l,c):c}e.exports=function(e,l){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];l=l||{};var u=1,p=1;function f(e){var t=e.match(r);t&&(u+=t.length);var n=e.lastIndexOf("\n");p=~n?e.length-n:p+e.length}function m(){var e={line:u,column:p};return function(t){return t.position=new h(e),v(),t}}function h(e){this.start=e,this.end={line:u,column:p},this.source=l.source}h.prototype.content=e;var g=[];function y(t){var r=new Error(l.source+":"+u+":"+p+": "+t);if(r.reason=t,r.filename=l.source,r.line=u,r.column=p,r.source=e,!l.silent)throw r;g.push(r)}function b(t){var r=t.exec(e);if(r){var n=r[0];return f(n),e=e.slice(n.length),r}}function v(){b(n)}function x(e){var t;for(e=e||[];t=E();)!1!==t&&e.push(t);return e}function E(){var t=m();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var r=2;c!=e.charAt(r)&&("*"!=e.charAt(r)||"/"!=e.charAt(r+1));)++r;if(r+=2,c===e.charAt(r-1))return y("End of comment missing");var n=e.slice(2,r-2);return p+=2,f(n),e=e.slice(r),p+=2,t({type:"comment",comment:n})}}function w(){var e=m(),r=b(i);if(r){if(E(),!b(a))return y("property missing ':'");var n=b(o),l=e({type:"declaration",property:d(r[0].replace(t,c)),value:n?d(n[0].replace(t,c)):c});return b(s),l}}return v(),function(){var e,t=[];for(x(t);e=w();)!1!==e&&(t.push(e),x(t));return t}()}},8962:function(e,t,r){var n=r(2914),i=r(5414),a=r(961),o=a.MUST_USE_PROPERTY,s=a.HAS_BOOLEAN_VALUE,l=a.HAS_NUMERIC_VALUE,c=a.HAS_POSITIVE_NUMERIC_VALUE,d=a.HAS_OVERLOADED_BOOLEAN_VALUE;function u(e,t){return(e&t)===t}function p(e,t,r){var n,i,a,p=e.Properties,f=e.DOMAttributeNames;for(i in p)n=f[i]||(r?i:i.toLowerCase()),a=p[i],t[n]={attributeName:n,propertyName:i,mustUseProperty:u(a,o),hasBooleanValue:u(a,s),hasNumericValue:u(a,l),hasPositiveNumericValue:u(a,c),hasOverloadedBooleanValue:u(a,d)}}var f={};p(n,f);var m={};p(i,m,!0);var h={};p(n,h),p(i,h,!0);e.exports={html:f,svg:m,properties:h,isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"))}},2914:function(e){e.exports={Properties:{autoFocus:4,accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:4,allowTransparency:0,alt:0,as:0,async:4,autoComplete:0,autoPlay:4,capture:4,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:5,cite:0,classID:0,className:0,cols:24,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:4,controlsList:0,coords:0,crossOrigin:0,data:0,dateTime:0,default:4,defer:4,dir:0,disabled:4,download:32,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:4,formTarget:0,frameBorder:0,headers:0,height:0,hidden:4,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:4,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:5,muted:5,name:0,nonce:0,noValidate:4,open:4,optimum:0,pattern:0,placeholder:0,playsInline:4,poster:0,preload:0,profile:0,radioGroup:0,readOnly:4,referrerPolicy:0,rel:0,required:4,reversed:4,role:0,rows:24,rowSpan:8,sandbox:0,scope:0,scoped:4,scrolling:0,seamless:4,selected:5,shape:0,size:24,sizes:0,span:24,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:8,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,typeof:0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:4,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"}}},5414:function(e){e.exports={Properties:{accentHeight:0,accumulate:0,additive:0,alignmentBaseline:0,allowReorder:0,alphabetic:0,amplitude:0,arabicForm:0,ascent:0,attributeName:0,attributeType:0,autoReverse:0,azimuth:0,baseFrequency:0,baseProfile:0,baselineShift:0,bbox:0,begin:0,bias:0,by:0,calcMode:0,capHeight:0,clip:0,clipPath:0,clipRule:0,clipPathUnits:0,colorInterpolation:0,colorInterpolationFilters:0,colorProfile:0,colorRendering:0,contentScriptType:0,contentStyleType:0,cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:0,direction:0,display:0,divisor:0,dominantBaseline:0,dur:0,dx:0,dy:0,edgeMode:0,elevation:0,enableBackground:0,end:0,exponent:0,externalResourcesRequired:0,fill:0,fillOpacity:0,fillRule:0,filter:0,filterRes:0,filterUnits:0,floodColor:0,floodOpacity:0,focusable:0,fontFamily:0,fontSize:0,fontSizeAdjust:0,fontStretch:0,fontStyle:0,fontVariant:0,fontWeight:0,format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:0,glyphOrientationHorizontal:0,glyphOrientationVertical:0,glyphRef:0,gradientTransform:0,gradientUnits:0,hanging:0,horizAdvX:0,horizOriginX:0,ideographic:0,imageRendering:0,in:0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:0,kernelUnitLength:0,kerning:0,keyPoints:0,keySplines:0,keyTimes:0,lengthAdjust:0,letterSpacing:0,lightingColor:0,limitingConeAngle:0,local:0,markerEnd:0,markerMid:0,markerStart:0,markerHeight:0,markerUnits:0,markerWidth:0,mask:0,maskContentUnits:0,maskUnits:0,mathematical:0,mode:0,numOctaves:0,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:0,overlineThickness:0,paintOrder:0,panose1:0,pathLength:0,patternContentUnits:0,patternTransform:0,patternUnits:0,pointerEvents:0,points:0,pointsAtX:0,pointsAtY:0,pointsAtZ:0,preserveAlpha:0,preserveAspectRatio:0,primitiveUnits:0,r:0,radius:0,refX:0,refY:0,renderingIntent:0,repeatCount:0,repeatDur:0,requiredExtensions:0,requiredFeatures:0,restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:0,slope:0,spacing:0,specularConstant:0,specularExponent:0,speed:0,spreadMethod:0,startOffset:0,stdDeviation:0,stemh:0,stemv:0,stitchTiles:0,stopColor:0,stopOpacity:0,strikethroughPosition:0,strikethroughThickness:0,string:0,stroke:0,strokeDasharray:0,strokeDashoffset:0,strokeLinecap:0,strokeLinejoin:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0,surfaceScale:0,systemLanguage:0,tableValues:0,targetX:0,targetY:0,textAnchor:0,textDecoration:0,textRendering:0,textLength:0,to:0,transform:0,u1:0,u2:0,underlinePosition:0,underlineThickness:0,unicode:0,unicodeBidi:0,unicodeRange:0,unitsPerEm:0,vAlphabetic:0,vHanging:0,vIdeographic:0,vMathematical:0,values:0,vectorEffect:0,version:0,vertAdvY:0,vertOriginX:0,vertOriginY:0,viewBox:0,viewTarget:0,visibility:0,widths:0,wordSpacing:0,writingMode:0,x:0,xHeight:0,x1:0,x2:0,xChannelSelector:0,xlinkActuate:0,xlinkArcrole:0,xlinkHref:0,xlinkRole:0,xlinkShow:0,xlinkTitle:0,xlinkType:0,xmlBase:0,xmlns:0,xmlnsXlink:0,xmlLang:0,xmlSpace:0,y:0,y1:0,y2:0,yChannelSelector:0,z:0,zoomAndPan:0},DOMAttributeNames:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlnsXlink:"xmlns:xlink",xmlLang:"xml:lang",xmlSpace:"xml:space"}}},961:function(e){e.exports={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32}},7929:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=n(r(2303)),a=r(6024);t.default=function(e,t){var r={};return e&&"string"==typeof e?(i.default(e,(function(e,n){e&&n&&(r[a.camelCase(e,t)]=n)})),r):r}},6024:function(e,t){"use strict";t.__esModule=!0,t.camelCase=void 0;var r=/^--[a-zA-Z0-9-]+$/,n=/-([a-z])/g,i=/^[^-]+$/,a=/^-(webkit|moz|ms|o|khtml)-/,o=function(e,t){return t.toUpperCase()},s=function(e,t){return t+"-"};t.camelCase=function(e,t){return void 0===t&&(t={}),function(e){return!e||i.test(e)||r.test(e)}(e)?e:(e=e.toLowerCase(),t.reactCompat||(e=e.replace(a,s)),e.replace(n,o))}},2303:function(e,t,r){var n=r(6650);e.exports=function(e,t){var r,i=null;if(!e||"string"!=typeof e)return i;for(var a,o,s=n(e),l="function"==typeof t,c=0,d=s.length;c<d;c++)a=(r=s[c]).property,o=r.value,l?t(a,o,r):o&&(i||(i={}),i[a]=o);return i}},1496:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var i,a=n(r(1506)),o=n(r(5354)),s=n(r(7316)),l=n(r(7154)),c=n(r(7294)),d=n(r(5697)),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,r=e.fixed,n=m(t||r||[]);return n&&n.src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),r=f(t);return h[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,x=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),r&&c.default.createElement("source",{media:i,srcSet:r,sizes:a}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function k(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var R=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),x.set(e,t)),function(){r.unobserve(e),x.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+c+o+s+r+n+t+a+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(P,(0,l.default)({ref:t,src:r},a,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,i(n),s):s})),P=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,d=e.onError,u=e.loading,p=e.draggable,f=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":f,sizes:r,srcSet:n,src:i},m,{onLoad:o,onError:d,ref:t,loading:u,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));P.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var T=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),(r=f(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,p=void 0===d?{}:d,f=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,x=e.itemProp,w=e.loading,O=e.draggable,R=h||g;if(!R)return null;var T=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,F=(0,l.default)({opacity:T?1:0,transition:I?"opacity "+b+"ms":"none"},s),Z="boolean"==typeof y?"lightgray":y,A={transitionDelay:b+"ms"},M=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&A,s,p),N={title:t,alt:this.state.isVisible?"":r,style:M,className:f,itemProp:x},H=this.state.isHydrated?m(R):R[0];if(h)return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),Z&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:Z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&A)}),H.base64&&c.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:N,imageVariants:R,generateSources:S}),H.tracedSVG&&c.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:N,imageVariants:R,generateSources:k}),this.state.isVisible&&c.default.createElement("picture",null,E(R),c.default.createElement(P,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:F,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:r,title:t,loading:w},H,{imageVariants:R}))}}));if(g){var _=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},a);return"inherit"===a.display&&delete _.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},Z&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:Z,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},I&&A)}),H.base64&&c.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:N,imageVariants:R,generateSources:S}),H.tracedSVG&&c.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:N,imageVariants:R,generateSources:k}),this.state.isVisible&&c.default.createElement("picture",null,E(R),c.default.createElement(P,{alt:r,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:F,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:r,title:t,loading:w},H,{imageVariants:R}))}}))}return null},t}(c.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),F=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function Z(e){return function(t,r,n){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");d.default.checkPropTypes(((i={})[r]=e,i),t,"prop",n)}}T.propTypes={resolutions:I,sizes:F,fixed:Z(d.default.oneOfType([I,d.default.arrayOf(I)])),fluid:Z(d.default.oneOfType([F,d.default.arrayOf(F)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var A=T;t.Z=A},3548:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7294),i=r(392),a=r.n(i),o=(a().domToReact,a().htmlToDOM,a().attributesToProps,a()),s=r(1496),l=function(e){var t=e.data;return n.createElement("div",{class:"p-4"},n.createElement("picture",{class:"h-auto w-full"},n.createElement("source",{media:"(min-width: 2100px)",srcset:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=2400&fit=crop&ar=4%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"}),n.createElement("source",{media:"(min-width: 1800px)",srcset:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=2100&fit=crop&ar=4%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"}),n.createElement("source",{media:"(min-width: 1600px)",srcset:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=1800&fit=crop&ar=4%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"}),n.createElement("source",{media:"(min-width: 1400px)",srcset:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=1600&fit=crop&ar=4%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"}),n.createElement("source",{media:"(min-width: 1200px)",srcset:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=1400&fit=crop&ar=4%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"}),n.createElement("source",{media:"(min-width: 900px)",srcset:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=1200&fit=crop&ar=3%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"}),n.createElement("source",{media:"(min-width: 600px)",srcset:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=900&fit=crop&ar=3%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"}),n.createElement("source",{media:"(min-width: 450px)",src:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=600&fit=crop&ar=1%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"}),n.createElement("source",{media:"(min-width: 1px)",srcset:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=550&fit=crop&ar=1%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"}),n.createElement("img",{width:"1200",height:"600",src:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=1200&fit=crop&ar=2%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress"})),n.createElement("div",{class:"flex flex-wrap"},t.allContentfulBlogPost.edges.map((function(e){var t=e.node;return n.createElement("div",{class:"p-4 lg:w-1/3 md:w-1/2 sm:w-full"},n.createElement("p",{class:"text-2xl p-2"},o(t.title)),n.createElement(s.Z,{fluid:Object.assign({},t.heroImage.imgixImage.fluid,{sizes:"(min-width: 1024px) calc(30vw - 128px), (min-width: 768px) calc(50vw - 100px), calc(100vw - 70px)",aspectRatio:1.8})}),n.createElement("p",{class:"p-2"},o(t.body.body)))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-fa8b6011398ef65af535.js.map