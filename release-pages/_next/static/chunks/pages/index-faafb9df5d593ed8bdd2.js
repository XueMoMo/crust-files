(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{97494:function(t,n,e){"use strict";var i,r=e(52209),a=e(67294),s=e(29163),o=e(85893);n.Z=a.memo((0,s.ZP)((function(t){var n=t.src,e=void 0===n?"/images/logo_22x.png":n,i=t.className;return(0,o.jsx)("div",{className:i,children:(0,o.jsx)("img",{src:e})})}))(i||(i=(0,r.Z)(["\n  display: inline-block;\n\n  img {\n    display: inline-block;\n    height: 2.5rem;\n    width: auto;\n    object-fit: contain;\n  }\n\n  span {\n    font-size: 2.45rem;\n    font-weight: 400;\n    line-height: 2.45rem;\n    color: white;\n    display: inline-block;\n  }\n"]))))},25814:function(t,n,e){"use strict";e.d(n,{Z:function(){return h}});var i=e(67294),r=function(){};r.prototype.init=function(t,n){return this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.particleNetwork=new s(this,n),this};var a=function(t,n,e){this.isFocus=!1,this.network=t,this.canvas=t.canvas,this.ctx=t.ctx,this.particleColor=c(this.network.options.particleColors),this.radius=o(1.5,2.5),this.opacity=0,this.x=n||Math.random()*this.canvas.width,this.y=e||Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*t.options.velocity,y:(Math.random()-.5)*t.options.velocity}};a.prototype.update=function(){this.opacity<1?this.opacity+=.01:this.opacity=1,(this.x>this.canvas.width+100||this.x<-100)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+100||this.y<-100)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},a.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.particleColor,this.ctx.globalAlpha=this.opacity,this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill()};var s=function(t,n){this.options={velocity:.5,density:13e3,netLineDistance:220,netLineDistanceFocus:300,netLineColor:"#999999",netLineColorFocus:"#999999",particleColors:["#888888"]},this.canvas=t.canvas,this.ctx=t.ctx,this.et=n,this.init()};s.prototype.init=function(){this.createParticles(!0),this.animationFrame=requestAnimationFrame(this.update.bind(this)),this.bindUiActions()},s.prototype.createParticles=function(t){var n=this;this.particles=[];var e=this.canvas.width*this.canvas.height/this.options.density;if(t){var i=0;clearInterval(this.createIntervalId);for(var r=0;r<e;r++)this.particles.push(new a(this));this.createIntervalId=setInterval(function(){i<e-1?this.particles.push(new a(this)):clearInterval(n.createIntervalId),i++}.bind(this),250)}else for(var s=0;s<e;s++)this.particles.push(new a(this))},s.prototype.createInteractionParticle=function(){return this.interactionParticle=new a(this),this.interactionParticle.isFocus=!0,this.interactionParticle.velocity={x:0,y:0},this.particles.push(this.interactionParticle),this.interactionParticle},s.prototype.removeInteractionParticle=function(){var t=this.particles.indexOf(this.interactionParticle);t>-1&&(this.interactionParticle=void 0,this.particles.splice(t,1))},s.prototype.update=function(){if(this.canvas){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1;for(var t=0;t<this.particles.length;t++)for(var n=this.particles[t],e=this.particles.length-1;e>t;e--){var i,r=this.particles[e],a=n.isFocus||r.isFocus,s=a?this.options.netLineDistanceFocus:this.options.netLineDistance,o=a?this.options.netLineColorFocus:this.options.netLineColor,c=Math.abs(n.x-r.x),l=Math.abs(n.y-r.y);Math.max(c,l)>s||((i=Math.sqrt(Math.pow(c,2)+Math.pow(l,2)))>s||(this.ctx.beginPath(),this.ctx.strokeStyle=o,this.ctx.globalAlpha=(s-i)/s*n.opacity*r.opacity,this.ctx.lineWidth=.7,this.ctx.moveTo(n.x,n.y),this.ctx.lineTo(r.x,r.y),this.ctx.stroke()))}for(var u=0;u<this.particles.length;u++)this.particles[u].update(),this.particles[u].draw();0!==this.options.velocity&&(this.animationFrame=requestAnimationFrame(this.update.bind(this)))}else cancelAnimationFrame(this.animationFrame)},s.prototype.bindUiActions=function(){this.spawnQuantity=3,this.mouseIsDown=!1,this.touchIsMoving=!1,this.onMouseMove=function(t){this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.clientX,this.interactionParticle.y=t.clientY}.bind(this),this.onTouchMove=function(t){this.touchIsMoving=!0,this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.changedTouches[0].clientX,this.interactionParticle.y=t.changedTouches[0].clientY}.bind(this),this.onMouseDown=function(t){this.mouseIsDown=!0;var n=0,e=this.spawnQuantity,i=setInterval(function(){if(this.mouseIsDown){1===n&&(e=1);for(var t=0;t<e;t++)this.interactionParticle&&this.particles.push(new a(this,this.interactionParticle.x,this.interactionParticle.y))}else clearInterval(i);n++}.bind(this),50)}.bind(this),this.onTouchStart=function(t){setTimeout(function(){if(!this.touchIsMoving)for(var n=0;n<this.spawnQuantity;n++)this.particles.push(new a(this,t.changedTouches[0].clientX,t.changedTouches[0].clientY))}.bind(this),200)}.bind(this),this.onMouseUp=function(t){this.mouseIsDown=!1}.bind(this),this.onMouseOut=function(t){this.removeInteractionParticle()}.bind(this),this.onTouchEnd=function(t){this.touchIsMoving=!1,this.removeInteractionParticle()}.bind(this),console.info("---setMouseLis--\x3e",this.et),this.et.addEventListener("mousemove",this.onMouseMove),this.et.addEventListener("touchmove",this.onTouchMove),this.et.addEventListener("mouseup",this.onMouseUp),this.et.addEventListener("mouseout",this.onMouseOut),this.et.addEventListener("touchend",this.onTouchEnd)},s.prototype.unbindUiActions=function(){this.et&&(this.et.removeEventListener("mousemove",this.onMouseMove),this.et.removeEventListener("touchmove",this.onTouchMove),this.et.removeEventListener("mouseup",this.onMouseUp),this.et.removeEventListener("mouseout",this.onMouseOut),this.et.removeEventListener("touchend",this.onTouchEnd))};var o=function(t,n,e){var i=Math.random()*(n-t)+t;return e&&(i=Math.round(i)),i},c=function(t){return t[Math.floor(Math.random()*t.length)]},l=new r;var u=e(85893);function h(){var t=(0,i.useRef)(),n=(0,i.useRef)();return(0,i.useEffect)((function(){var t,e,i;return n.current&&(e=n.current,i=document.body,t=l.init(e,i),window.__bgAnim=t,console.info("---initBgAnim--\x3e")),function(){console.info("---DestroyAnim--\x3e"),function(t){t&&t.particleNetwork.unbindUiActions()}(t)}}),[n.current]),(0,i.useEffect)((function(){if(t.current&&n.current){var e=n.current.offsetWidth,i=n.current.offsetHeight,r=setInterval((function(){var n,r,a=e!==t.current.offsetWidth||i!==t.current.offsetHeight;a&&(e=t.current.offsetWidth,i=t.current.offsetHeight,n=e,r=i,l.particleNetwork.removeInteractionParticle(),l.ctx.clearRect(0,0,l.canvas.width,l.canvas.height),l.canvas.width=n,l.canvas.height=r,l.particleNetwork.createParticles(),console.info("---\x3e",a))}),1e3);return function(){clearInterval(r)}}}),[t.current,n.current]),(0,u.jsx)("div",{ref:t,style:{position:"absolute",width:"100vw",height:"100vh",zIndex:-1,background:"rgb(45,45,45)"},children:(0,u.jsx)("canvas",{ref:n})})}},97376:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return L}});var i=e(52209),r=e(92809),a=e(30266),s=e(809),o=e.n(s),c=e(8736),l=e(65382),u=e(94184),h=e.n(u),p=e(23499),d=e(25814),m=e(83789),f=e(68216),v=e(67294),g=function t(){(0,f.Z)(this,t),(0,r.Z)(this,"value",!1)};var x,w=e(96705),b=e(48278),y=e(29163),k=e(95194),M=e(97494),P=e(12752),j=e(85893);function I(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function C(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?I(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):I(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var N=[{name:"Crust Wallet",image:"/images/wallet_crust.png"},{name:"Polkadot (.js Extension)",image:"/images/wallet_polkadot.png"},{name:"MetaMask",image:"/images/wallet_metamask.png"},{name:"Polygon",image:"/images/wallet_polygon.png"},{name:"Moonriver",image:"/images/wallet_moonriver.png"},{name:"Near Wallet",image:"/images/wallet_near.png"},{name:"Flow (Blocto Wallet)",image:"/images/wallet_flow.png"},{name:"Solana (Phantom Wallet)",image:"/images/wallet_solana.png"},{name:"Elrond (Maiar Wallet)",image:"/images/wallet_elrond.png"}],_=[{name:"WalletConnect",image:"/images/wallet_connect.png"}];var L=v.memo((0,y.ZP)((function(t){var n=t.className,e=(0,p.$)().t,i=function(t,n){var e=(0,v.useMemo)((function(){for(var t=[],e=0;e<n;e++)t.push(new g);return t}),[n]),i=(0,v.useState)(e),r=i[0],a=i[1];return(0,v.useEffect)((function(){var i=n+1;a(e);var r=setInterval((function(){i>=e.length?i-=1:i<0?clearInterval(r):(console.info("setValueTrue--\x3e",i),a((function(t){return t[i].value=!0,(0,m.Z)(t)})),i-=1)}),t);return function(){return clearInterval(r)}}),[e,t,n]),(0,v.useMemo)((function(){return{data:r}}),[r])}(100,N.length+_.length).data,r=(0,w.WY)(),s=(0,v.useContext)(P.I).alert,u=(0,v.useCallback)((function(t){t&&s.error(t)}),[]),f=(0,v.useCallback)((0,a.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(""),t.next=4,r.crust.init();case 4:if(r.crust.provider){t.next=7;break}return u("".concat(N[0].name," not installed")),t.abrupt("return");case 7:return t.next=9,r.crust.login();case 9:(n=t.sent).length>0&&r.setLoginUser({account:n[0],wallet:"crust"}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),[r,e]),x=(0,v.useCallback)((0,a.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(""),t.next=4,r.polkadotJs.init();case 4:if(r.polkadotJs.provider){t.next=7;break}return u("".concat(N[1].name," not installed")),t.abrupt("return");case 7:return t.next=9,r.polkadotJs.login();case 9:(n=t.sent).length>0&&r.setLoginUser({account:n[0],wallet:"polkadot-js"}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),[r,e]),y=(0,v.useCallback)(function(){var t=(0,a.Z)(o().mark((function t(n){var e,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(""),t.next=3,r.metamask.init();case 3:i=null===(e=r.metamask.ethereum)||void 0===e?void 0:e.request,r.metamask.isInstalled&&i?i({method:"eth_requestAccounts"}).then((function(t){var e;console.info("accounts:",t);var i=null===(e=r.metamask.ethereum)||void 0===e?void 0:e.selectedAddress,a="Polygon"===n.name?"metamask-Polygon":"Moonriver"===n.name?"metamask-Moonriver":"metamask";i&&t.includes(i)?r.setLoginUser({account:i,wallet:a}):t.length&&r.setLoginUser({account:t[0],wallet:a})})).catch((function(t){console.error("accountsError:",t)})):u("".concat(N[2].name," not installed"));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[r,e]),I=(0,v.useCallback)((0,a.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(""),t.next=3,r.near.init();case 3:return t.next=5,r.near.wallet.requestSignIn(b.h.contractName,"Crust Files");case 5:case"end":return t.stop()}}),t)}))),[r,e]);(0,v.useEffect)((function(){r.near.init().then((function(){r.near.keyPair&&r.near.wallet.isSignedIn()&&r.setLoginUser({account:r.near.wallet.getAccountId(),wallet:"near",pubKey:r.near.keyPair.getPublicKey().toString().substr(8)})})).catch(console.error)}),[r]);var L=(0,v.useCallback)((0,a.Z)(o().mark((function t(){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(""),t.next=3,r.flow.init();case 3:if(n=r.flow.fcl){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,n.currentUser().snapshot();case 8:if((e=t.sent).loggedIn){t.next=12;break}return t.next=12,n.authenticate();case 12:return t.next=14,n.currentUser().snapshot();case 14:e=t.sent,r.setLoginUser({account:e.addr,wallet:"flow"});case 16:case"end":return t.stop()}}),t)}))),[r]),E=(0,v.useCallback)((0,a.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(""),t.next=3,r.solana.init();case 3:if(r.solana.isInstalled||u("".concat(N[5].name," not installed")),!r.solana.solana.isConnected){t.next=7;break}return r.setLoginUser({account:r.solana.solana.publicKey.toBase58(),wallet:"solana"}),t.abrupt("return");case 7:r.solana.solana.connect(),r.solana.solana.on("connect",(function(){r.setLoginUser({account:r.solana.solana.publicKey.toBase58(),wallet:"solana"})}));case 9:case"end":return t.stop()}}),t)}))),[r,e]),Z=(0,v.useCallback)((0,a.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(""),t.next=3,r.elrond.init();case 3:if(r.elrond.provider){t.next=6;break}return u("".concat(N[6].name," not installed")),t.abrupt("return");case 6:return t.next=8,r.elrond.provider.login({callbackUrl:encodeURIComponent("".concat(window.location.origin,"/#/files"))});case 8:n=r.elrond.provider.account.address,r.setLoginUser({account:n,wallet:"elrond"});case 10:case"end":return t.stop()}}),t)}))),[r,e]),T=(0,v.useCallback)((0,a.Z)(o().mark((function t(){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.walletConnect.init();case 2:return t.prev=2,t.next=5,r.walletConnect.connect.killSession();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),console.error(t.t0);case 10:return t.next=12,null===(n=r.walletConnect.connect)||void 0===n?void 0:n.createSession();case 12:null===(e=r.walletConnect.connect)||void 0===e||e.on("connect",(function(t,n){var e=n.params[0].accounts;r.setLoginUser({account:e[0],wallet:"wallet-connect"})}));case 13:case"end":return t.stop()}}),t,null,[[2,7]])}))),[r]),F=(0,v.useMemo)((function(){return N.map((function(t){switch(t.name){case"Crust Wallet":return C(C({},t),{},{onClick:f});case"Polkadot (.js Extension)":return C(C({},t),{},{onClick:x});case"MetaMask":case"Polygon":case"Moonriver":return C(C({},t),{},{onClick:y});case"Near Wallet":return C(C({},t),{},{onClick:I});case"Flow (Blocto Wallet)":return C(C({},t),{},{onClick:L});case"Solana (Phantom Wallet)":return C(C({},t),{},{onClick:E});case"Elrond (Maiar Wallet)":return C(C({},t),{},{onClick:Z})}return C(C({},t),{},{onClick:f})}))}),[f,x,y,I,L,E,Z]),O=(0,v.useMemo)((function(){return _.map((function(t){return C(C({},t),{},{onClick:T})}))}),[T]),S=(0,v.useState)(0),U=S[0],W=S[1];(0,v.useEffect)((function(){var t=0,n=setInterval((function(){3===t&&W(1),9===t&&W(2),14===t&&(W(0),t=0),t+=1}),2e3);return function(){return clearInterval(n)}}),[]);var A=(0,v.useState)(null),D=A[0],z=A[1],B=(0,v.useRef)(),R=function(t){if(B.current&&B.current.children&&B.current.children.length){var n=B.current.children;"l"===t&&n.item(0).scrollIntoView({behavior:"smooth"}),"r"===t&&n.item(n.length-1).scrollIntoView({behavior:"smooth"})}};return(0,j.jsxs)("div",{className:n,children:[(0,j.jsx)(d.Z,{}),(0,j.jsx)(M.Z,{className:"logo"}),(0,j.jsx)("div",{className:"flexN"}),(0,j.jsxs)("div",{className:"slog font-sans-semibold",children:[(0,j.jsx)(c.Z,{src:"/images/crust_box2x.png",className:h()("slogIcon")}),(0,j.jsxs)("div",{className:h()("slogText"),children:[0===U&&(0,j.jsx)("div",{className:"slogText1",children:(0,j.jsxs)(k.Z,{options:{speed:60},children:["Enjoy storing your ",(0,j.jsx)("br",{}),"files in a ",(0,j.jsx)("span",{className:"highlight",children:"Web3"})," style. ",(0,j.jsx)("br",{}),"Now ",(0,j.jsx)("span",{className:"highlight",children:"free"}),"."]})}),1===U&&(0,j.jsx)("div",{className:"slogText2",children:(0,j.jsxs)(k.Z,{options:{speed:60},children:["- Multi-wallet access with your Web3.0 identity",(0,j.jsx)("br",{}),"- Absolute data privacy by end-to-end file encryption",(0,j.jsx)("br",{}),"- IPFS storage with globally-distributed replicas"]})}),2===U&&(0,j.jsx)("div",{className:"slogText2",children:(0,j.jsxs)(k.Z,{options:{speed:60},children:["- Easy share links to friends",(0,j.jsx)("br",{}),"- Retrieve your files anywhere, anytime",(0,j.jsx)("br",{}),"- Paid service with smart contract on public",(0,j.jsx)("br",{})," blockchains"]})})]})]}),(0,j.jsx)("div",{className:"flex1"}),(0,j.jsxs)("div",{className:"wallets_panel",children:[(0,j.jsxs)("div",{className:"wallets",children:[(0,j.jsx)(l.Z,{className:"btn_scroll left",name:"caret left",onClick:function(){return R("l")}}),(0,j.jsx)("div",{className:"wallets_content",ref:B,children:F.map((function(t,n){return(0,j.jsx)(c.Z,{id:t.name,className:h()({spaceLeft:n},"animStart",{animFinal:i[n].value}),circular:!0,inline:!0,size:"tiny",src:t.image,onClick:function(){return t.onClick(t)},onMouseEnter:function(){u(""),z((function(){return F[n]}))},onMouseLeave:function(){u(""),z((function(){return null}))}},"wallet_".concat(n))}))}),(0,j.jsx)(l.Z,{className:"btn_scroll right",name:"caret right",onClick:function(){return R("r")}})]}),(0,j.jsx)("div",{className:"wallets",children:O.map((function(t,n){return(0,j.jsx)(c.Z,{id:t.name,className:h()({spaceLeft:n},"animStart",{animFinal:i[n+F.length].value}),circular:!0,inline:!0,size:"tiny",src:t.image,onClick:t.onClick,onMouseEnter:function(){u(""),z((function(){return O[n]}))},onMouseLeave:function(){u(""),z((function(){return null}))}},"wallet_".concat(n))}))})]}),(0,j.jsx)("span",{className:h()("signTip font-sans-medium"),dangerouslySetInnerHTML:{__html:null===D?"Sign-in with Web/Browser/Mobile Wallets":"Sign-in with <span>".concat(D.name,"</span>")}}),(0,j.jsx)("div",{className:"flexN"})]})}))(x||(x=(0,i.Z)(["\n\n  color: white;\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n\n  .logo {\n    margin-left: 3.5rem;\n    margin-top: 3rem;\n    align-self: flex-start;\n  }\n\n  .flexN {\n    flex: 1;\n  }\n\n  .flex1 {\n    height: 7.8rem;\n  }\n\n  .slog {\n    display: flex;\n    overflow: hidden;\n    padding-top: 1rem;\n    font-weight: 600;\n    flex-shrink: 0;\n    height: 19.8rem;\n\n    .slogIcon {\n      position: relative;\n      margin-right: 4.3rem;\n      width: 19.6rem;\n      height: 18.2rem;\n    }\n\n    .slogText {\n      position: relative;\n      width: 44.5rem;\n    }\n\n    .slogText1 {\n      font-size: 60px;\n      white-space: pre-wrap;\n      word-break: break-all;\n      line-height: 86px;\n\n      .highlight {\n        color: var(--primary-color);\n      }\n    }\n\n    .slogText2 {\n      padding-top: 40px;\n      line-height: 56px;\n      font-size: 24px;\n      white-space: pre-wrap;\n      word-break: break-all;\n    }\n\n  }\n\n  .wallets_panel {\n    overflow-x: auto;\n    display: flex;\n    height: auto;\n    flex-shrink: 0;\n    white-space: nowrap;\n\n    .wallets:first-child {\n      margin-right: 1rem;\n      width: 60rem;\n      overflow: hidden;\n\n      .btn_scroll {\n        display: inline-block;\n        font-size: 30px;\n        line-height: 2.86rem;\n        border-radius: 1.5rem;\n        cursor: pointer;\n        color: #cccccc;\n        width: 2.86rem;\n        height: 2.86rem;\n        background: rgba(255, 255, 255, 0.15);\n        vertical-align: bottom;\n        margin-bottom: 4rem;\n      }\n\n      .left {\n        margin-left: 2.14rem;\n        margin-right: 1.4rem;\n        padding-right: 5px;\n      }\n\n      .right {\n        margin-left: 1.4rem;\n        margin-right: 2.14rem;\n        padding-left: 5px;\n      }\n\n      .wallets_content {\n        width: 47.6rem;\n        overflow: hidden;\n        display: inline-block;\n        padding-top: 1.4rem;\n        padding-bottom: 0.8rem;\n      }\n    }\n\n    .wallets:last-child {\n      padding: 1.4rem 4rem 0.8rem 4rem;\n    }\n  }\n\n  .wallets {\n    height: min-content;\n    display: inline-block;\n    overflow: hidden;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 6rem;\n    flex-shrink: 0;\n\n    .animStart {\n      width: 8.4rem !important;\n      height: 8.4rem !important;\n      cursor: pointer;\n      transition: all cubic-bezier(.41, .19, .21, 1.25) 1.2s;\n      position: relative;\n      transform: translateX(-800px) rotateZ(-900deg);\n\n      &:hover {\n        filter: drop-shadow(0 2px 6px rgba(255, 255, 255, 0.5));\n      }\n    }\n\n    .spaceLeft {\n      margin-left: 1.4rem;\n    }\n\n    .animFinal {\n      transform: none;\n    }\n  }\n\n  .signTip {\n    line-height: 3rem;\n    font-size: 1.5rem;\n\n    span {\n      color: var(--primary-color);\n    }\n  }\n\n  .errorInfo {\n    color: #FF5B5B;\n  }\n\n"]))))},45301:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(97376)}])}},function(t){t.O(0,[610,827,774,888,179],(function(){return n=45301,t(t.s=n);var n}));var n=t.O();_N_E=n}]);