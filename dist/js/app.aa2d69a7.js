(function(e){function t(t){for(var o,i,c=t[0],a=t[1],p=t[2],d=0,l=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);u&&u(t);while(l.length)l.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var u=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"1b43":function(e,t,n){var o={"./coco-banner/package.json":"59c4","./coco-form/package.json":"c3e1"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id="1b43"},3234:function(e){e.exports=JSON.parse('{"schema":{"type":"object","title":"页面配置","properties":{"background":{"type":"string","title":"页面背景色","format":"color"},"title":{"type":"string","title":"页面标题"}}},"data":{"title":"coco-template"}}')},"37b7":function(e,t,n){var o={"./package.json":"3234"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id="37b7"},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("8bbf"),r=n.n(o),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("CocoComponent",[t("coco-banner",{attrs:{obj:{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}}}),t("coco-form")],1)],1)},i=[],c=function(){var e=this,t=e._self._c;return e.loaded?t("div",{staticClass:"slider-view",attrs:{id:"slider-view"}},e._l(e.components,(function(n,o){return t("div",{key:o,attrs:{"data-layout":n.props&&n.props._layout,id:"coco-render-id-_component_"+o}},[t(n.name,{key:n+o,tag:"div",attrs:{obj:n.props||{},config:n.config},on:{onRemoteComponentLoad:e.remoteComponentLoad}})],1)})),0):e._e()},a=[],p=(n("24b8"),n("34d3")),u=n("3508"),d=n.n(u),l=n("110b"),m=n.n(l);function f(){const e=[],t=n("1b43");return t.keys().forEach(n=>{const o=t(n);e.push(o)}),e}function h(){let e={};const t=n("37b7");return t.keys().forEach(n=>{const o=t(n);e=o}),e}function g(e){const t=n("ffe0");t.keys().forEach(n=>{const o=t(n),r=d()(m()(n.split("/")[1].replace(/\.\w+$/,"")));e.component(r,o.default||o)})}g(r.a);let b={componentConfig:f(),pageConfig:h()};const v=Object(p["parse"])(location.href.split("?")[1])||{},y="true"===v.isEdit,x="true"===v.isPreview,_=v.env,w=v.pageId,j={development:"http://dev.api.com",production:""}[_];function C(e){window.parent.postMessage(e,"*")}function O(e,t){const n=new XMLHttpRequest;n.open("GET",e),n.withCredentials=!0,n.responseType="json",n.onreadystatechange=function(){4===n.readyState&&200===n.status&&t(n.response)},n.send(null)}var k=function(){var e=this,t=e._self._c;return e.component?t(e.component,{tag:"div",attrs:{obj:e.obj}}):e._e()},E=[],I={name:"coco-remote-component-loader",props:{obj:{type:Object,default:()=>{}},config:{}},data(){return{data:{},component:""}},created(){const{name:e,js:t,css:n,index:o}=this.config,s=window[e];if(s)this.$emit("onRemoteComponentLoad",{...window[e],index:o}),this.$nextTick(()=>{this.component=r.a.extend(window[e].Component)});else{const s=document.createElement("script"),i=document.createElement("link");s.src=t,i.href=n,i.rel="stylesheet",document.head.appendChild(i),document.body.appendChild(s),s.onload=()=>{this.$emit("onRemoteComponentLoad",{...window[e],index:o}),this.component=r.a.extend(window[e].Component)}}},watch:{"config.name"(){this.component=r.a.extend(window[this.config.name].Component)}}},S=I,P=n("0b56"),N=Object(P["a"])(S,k,E,!1,null,null,null),$=N.exports;document.domain="coco-h5.cn";var U={name:"coco-component",data(){return{init:!1,loaded:!1,sortOption:{group:{name:"components",pull:!0,put:!0},sort:!0,animation:200},isEdit:y,components:window.__coco_config__.components.length?window.__coco_config__.components:this.$slots.default.map(e=>{var t;const n=e.componentOptions.tag,{data:o}=b.componentConfig.filter(e=>e.name===n)[0];return{name:n,props:(null===(t=e.componentOptions.propsData)||void 0===t?void 0:t.obj)||o}}),componentConfig:b.componentConfig,currentIndex:0,remoteComponents:[],page:{schema:b.pageConfig.schema,props:window.__coco_config__.pageData&&window.__coco_config__.pageData.props||b.pageConfig.data}}},created(){x&&j&&w?O(`${j}/project/preview?id=${w}`,e=>{this.components=e.result.components,this.page=e.result.pageData,this.$emit("init",this.page.props),this.loaded=!0}):(this.loaded=!0,this.$emit("init",this.page.props),y&&window.addEventListener("message",e=>{e.source!==window&&"loaded"!==e.data&&(this.isEdit=!0,this[e.data.type](e.data.data))}))},methods:{setConfig(e){this.components=e.userSelectComponents,this.page=e.page,this.getConfig()},getConfig(){this.init=!0,C({type:"returnConfig",data:{components:this.componentConfig,userSelectComponents:this.components,currentIndex:this.currentIndex,remoteComponents:this.remoteComponents,page:this.page}})},reset({userSelectComponents:e,currentIndex:t,page:n}){this.components=e,this.currentIndex=t,this.page=n,this.$emit("init",this.page.props)},remoteComponentLoad({config:e,index:t}){if(!this.isEdit)return;const n=this.remoteComponents.filter(t=>`${e.name}.${e.version}`===`${t.name}.${t.version}`)[0];n||this.remoteComponents.push(e),this.components.forEach(n=>{n.config&&n.config.index===t&&(n.props=n.props||e.data)}),this.init&&this.getConfig()},addComponent({data:e,index:t}){this.currentIndex=t?t+1:t,e.schema?(this.components=[...this.components.slice(0,this.currentIndex),{name:e.name,props:e.data},...this.components.slice(this.currentIndex,this.components.length)],this.getConfig()):this.components=[...this.components.slice(0,this.currentIndex),{name:"coco-components-loader",props:null,config:{...e,index:this.currentIndex}},...this.components.slice(this.currentIndex,this.components.length)]},changeProps(e){"__page"===e.type?(this.page.props=e,this.$emit("init",this.page.props)):this.$set(this.components[this.currentIndex],"props",e),this.getConfig()},changeIndex(e){this.currentIndex=e,this.getConfig()},deleteComponent(e){this.components.splice(e,1),this.changeIndex(e-1<0?0:e-1)},sortComponent({index:e,op:t}){const n=JSON.parse(JSON.stringify(this.components)),o=n[e],r=e+t;n[e]=n[r],n[r]=o,this.components=n,this.changeIndex(r)},copyComponent(e){this.components=[...this.components.slice(0,e),JSON.parse(JSON.stringify(this.components[e])),...this.components.slice(e,this.components.length)],this.changeIndex(e+1)}},components:{CocoComponentsLoader:$}},L=U,T=Object(P["a"])(L,c,a,!1,null,null,null),D=T.exports,J=n("befc"),V=n("bd8c"),M=n("4ff3"),R=n.n(M);const q=()=>{let e="mock";const t=location.host;return e=y||"mock"===Object({NODE_ENV:"production",VUE_APP_API:"http://qa.api.com/api/",BASE_URL:""}).VUE_APP_ENV?"mock":/\.dev\.|\d+\.\d+\.|localhost/.test(t)?"dev":/\.qa\./.test(t)?"qa":/\.pre\./.test(t)?"pre":"pro",e},z=q(),Z=R.a.create({baseURL:"http://qa.api.com/api/",timeout:3e4,withCredentials:!0}),A=e=>{const{url:t,method:o,params:r,config:s={}}=e;if("mock"===z){const e=t.replace(/\//g,"^"),r=n("ca25")(`./${e}${o}.json`);return Promise.resolve(r)}return Z[o.toLocaleLowerCase()](t,r,s)};var F=A;const W=e=>{const t="api/1.0.0/getCampaignInfo";return F({url:t,method:"Post",params:e})};var B={name:"App",components:{CocoBanner:J["default"],CocoForm:V["default"],CocoComponent:D},mounted(){W().then(e=>{console.log(e)})}},G=B,H=(n("a4fa"),Object(P["a"])(G,s,i,!1,null,null,null)),X=H.exports,K=n("6130");n("8755");function Q(e=375){const t=document.documentElement;t.clientWidth>=600?t.style.fontSize="80px":t.style.fontSize=t.clientWidth/e*100+"px",document.body.style.fontSize="16px"}Q(),window.addEventListener("resize",()=>Q()),r.a.use(K["a"]),r.a.config.productionTip=!1,new r.a({render:e=>e(X)}).$mount("#app")},"59c4":function(e){e.exports=JSON.parse('{"name":"coco-banner","description":"banner 组件","snapshot":"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png","schema":{"type":"object","properties":{"src":{"title":"图片地址","type":"string","format":"image"},"link":{"title":"跳转链接","type":"string","format":"url"}},"required":["src"]},"data":{"src":"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}}')},"7b0e":function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},a4fa:function(e,t,n){"use strict";n("7b0e")},bd8c:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),t("van-field",{attrs:{type:"phone",name:"手机号",label:"手机号",placeholder:"手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),t("van-field",{attrs:{type:"address",name:"地址",label:"地址",placeholder:"地址"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(e._s(e.obj.btnText))])],1)],1)},r=[],s={props:{obj:{type:Object,default:()=>{}}},data(){return{username:"",address:"",phone:""}},methods:{onSubmit(e){console.log("submit",e)}}},i=s,c=n("0b56"),a=Object(c["a"])(i,o,r,!1,null,"857f5798",null);t["default"]=a.exports},befc:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("a",[t("img",{attrs:{src:e.obj.src,width:"100%",alt:"图片"}})])},r=[],s={name:"banner",props:{obj:{type:Object,default:()=>{}}}},i=s,c=n("0b56"),a=Object(c["a"])(i,o,r,!1,null,null,null);t["default"]=a.exports},c3e1:function(e){e.exports=JSON.parse('{"name":"coco-form","description":"form 组件","snapshot":"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c69eef4e997843ea84929b1c0e2a2fdf~tplv-k3u1fbpfcp-watermark.image","schema":{"type":"object","properties":{"btnText":{"title":"按钮文案","type":"string"},"action":{"title":"提交接口地址","type":"string","format":"url"}},"required":["btnText"]},"data":{"btnText":"提交"}}')},ca25:function(e,t,n){var o={"./api^1.0.0^getCampaignInfoPost.json":"e414"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id="ca25"},e414:function(e){e.exports=JSON.parse('{"type":"mock","user":{}}')},ffe0:function(e,t,n){var o={"./coco-banner/index.vue":"befc","./coco-form/index.vue":"bd8c"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id="ffe0"}});
//# sourceMappingURL=app.aa2d69a7.js.map