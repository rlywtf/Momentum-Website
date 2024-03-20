"use strict";(globalThis["webpackChunkmomentum_fw_dev"]=globalThis["webpackChunkmomentum_fw_dev"]||[]).push([[319],{319:(t,e,s)=>{s.r(e),s.d(e,{default:()=>P});var i=s(9835),a=s(6970);const r={class:"flex-center column align-items-center"},l=(0,i._)("p",null,"Loading Asset Packs...",-1),n=["src"],o={class:"text-h5 text-bold text-center"},c={class:"text-h7 text-center"};function g(t,e,s,g,p,h){const d=(0,i.up)("q-spinner"),m=(0,i.up)("q-btn"),f=(0,i.up)("q-card-actions"),u=(0,i.up)("q-card"),w=(0,i.up)("q-list"),k=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(k,{class:"flex-center column full-width"},{default:(0,i.w5)((()=>[(0,i._)("div",r,[null===t.packs?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(d,{color:"primary",size:"3em",class:"q-mb-md"}),l],64)):((0,i.wg)(),(0,i.j4)(w,{key:1,class:"packs-grid"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.packs,(e=>((0,i.wg)(),(0,i.j4)(u,(0,i.dG)({key:e.name},e,{class:"my-card",dark:""}),{default:(0,i.w5)((()=>[(0,i._)("img",{src:e.image},null,8,n),(0,i._)("div",o,(0,a.zw)(e.name),1),(0,i._)("div",c,"By "+(0,a.zw)(e.author),1),(0,i.Wm)(f,{align:"stretch"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{href:e.download,class:"main-btn",style:{flex:"1"},flat:""},{default:(0,i.w5)((()=>[(0,i.Uk)("Download")])),_:2},1032,["href"]),e.name!==t.installing?((0,i.wg)(),(0,i.j4)(m,{key:0,disable:!t.serialSupported||null!==t.installing||t.rpcToggling,onClick:s=>t.install(e),class:"main-btn",style:{flex:"1"},flat:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(t.serialSupported?t.rpcToggling?"Connecting":t.connected?"Install":"Connect":"Unsupported"),1)])),_:2},1032,["disable","onClick"])):((0,i.wg)(),(0,i.j4)(m,{key:1,class:"main-btn",style:(0,a.j5)(`flex: 1; background-image: linear-gradient(to right, #a883e9 ${100*t.progress}%, transparent ${100*t.progress}%);`),disable:"",flat:""},{default:(0,i.w5)((()=>[(0,i.Uk)("Installing")])),_:1},8,["style"]))])),_:2},1024)])),_:2},1040)))),128))])),_:1}))])])),_:1})}var p=s(5530),h=s(499),d=s(5186);const m=(0,i.aZ)({name:"PagePacks",props:{flipper:Object,connected:Boolean,rpcActive:Boolean,rpcToggling:Boolean,serialSupported:Boolean,info:Object},setup(){return{packs:(0,h.iH)(null),flags:(0,h.iH)({restarting:!1,rpcActive:!1,rpcToggling:!1}),progress:(0,h.iH)(0),installing:(0,h.iH)(null)}},watch:{async info(t,e){null!==t&&t.storage_databases_present&&this.connected&&await this.start()}},methods:{async install(t){if(this.serialSupported)if(this.connected&&null!=this.info&&this.rpcActive)try{this.installing=t.name,this.progress=0;const e=await(0,p.Vy)(t.download).catch((t=>{throw this.$emit("showNotif",{message:"Failed to fetch pack: "+t.toString(),color:"negative"}),this.$emit("log",{level:"error",message:"Packs: Failed to fetch pack: "+t.toString()}),t})).finally((()=>{this.$emit("log",{level:"debug",message:"Packs: Downloaded pack from "+t.download})})),s=Object.entries(e).sort(((t,e)=>t[0]>e[0]?1:-1));let i="/ext",a="asset_packs/"+s[0][0];a.endsWith("/")&&(a=a.slice(0,-1));for(const t of a.split("/"))i+="/"+t,await this.flipper.commands.storage.mkdir(i).catch((t=>this.rpcErrorHandler(t,"storage.mkdir"))).finally((()=>{this.$emit("log",{level:"debug",message:"Packs: storage.mkdir: "+i})}));let r=0;for(const[t,l]of s)0===l.byteLength?(i="/ext/asset_packs/"+t,t.endsWith("/")&&(i=i.slice(0,-1)),await this.flipper.commands.storage.mkdir(i).catch((t=>this.rpcErrorHandler(t,"storage.mkdir"))).finally((()=>{this.$emit("log",{level:"debug",message:"Packs: storage.mkdir: "+i})}))):await this.flipper.commands.storage.write("/ext/asset_packs/"+t,l.buffer).catch((t=>this.rpcErrorHandler(t,"storage.write"))).finally((()=>{this.$emit("log",{level:"debug",message:"Packs: storage.write: /ext/asset_packs/"+t})})),r++,this.progress=r/s.length}finally{this.installing=null,this.progress=0}else this.rpcToggling||this.$emit("selectPort")},async startRpc(){this.flags.rpcToggling=!0;const t=await this.flipper.commands.startRpcSession(this.flipper);if(!t.resolved||t.error)throw this.$emit("showNotif",{message:"Unable to start RPC session. Reload the page or reconnect Flipper manually.",color:"negative",reloadBtn:!0}),this.$emit("log",{level:"error",message:"Device: Couldn't start rpc session"}),new Error("Couldn't start rpc session");this.flags.rpcActive=!0,this.flags.rpcToggling=!1,this.$emit("setRpcStatus",!0),this.$emit("log",{level:"info",message:"Device: RPC started"})},async stopRpc(){this.flags.rpcToggling=!0,await this.flipper.commands.stopRpcSession(),this.flags.rpcActive=!1,this.flags.rpcToggling=!1,this.$emit("setRpcStatus",!1),this.$emit("log",{level:"info",message:"Device: RPC stopped"})},async restartRpc(t){(this.connected&&this.flags.rpcActive&&!this.flags.restarting||t)&&(this.flags.restarting=!0,await this.flipper.closeReader(),await(0,d.Z)(300),await this.flipper.disconnect(),await(0,d.Z)(300),await this.flipper.connect(),await this.startRpc(),this.$emit("log",{level:"info",message:"Device: Restarted RPC"}))},passNotif(t){this.$emit("showNotif",t)},passLog(t){this.$emit("log",t)},rpcErrorHandler(t,e){t=t.toString(),this.$emit("showNotif",{message:`RPC error in command '${e}': ${t}`,color:"negative"}),this.$emit("log",{level:"error",message:`Device: RPC error in command '${e}': ${t}`})},async start(){this.serialSupported&&(this.flags.rpcActive=this.rpcActive,this.rpcActive||(setTimeout((()=>{if(!this.rpcActive)return this.restartRpc(!0)}),1e3),await this.startRpc()),navigator.serial.addEventListener("disconnect",(t=>{this.flags.rpcActive=!1,this.flags.rpcToggling=!1,this.$emit("setRpcStatus",!1)})))}},async mounted(){this.packs=await(0,p.GJ)().catch((t=>{throw this.$emit("showNotif",{message:"Unable to load asset packs from the server. Reload the page and try again.",color:"negative",reloadBtn:!0}),this.$emit("log",{level:"error",message:"Packs: Failed to fetch pack list"}),t})),this.connected&&null!==this.info&&this.info.storage_databases_present&&await this.start()},async beforeUnmount(){this.unbindRestart(),await(0,d.Z)(3e3)}});var f=s(1639),u=s(9885),w=s(3940),k=s(3246),v=s(4458),y=s(1821),b=s(4455),$=s(9984),_=s.n($);const R=(0,f.Z)(m,[["render",g]]),P=R;_()(m,"components",{QPage:u.Z,QSpinner:w.Z,QList:k.Z,QCard:v.Z,QCardActions:y.Z,QBtn:b.Z})}}]);