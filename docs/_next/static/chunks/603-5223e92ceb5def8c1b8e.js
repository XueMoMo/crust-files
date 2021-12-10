"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{60954:function(n,e,t){var r,o=t(52209),i=t(92809),a=t(67294),s=t(48237),c=t(29163),l=t(85893);function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}e.Z=a.memo((0,c.ZP)((function(n){return(0,l.jsx)(s.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},n))}))(r||(r=(0,o.Z)(["\n  background: unset !important;\n  border: 1px solid var(--primary-color) !important;\n  color: var(--primary-color) !important;\n  font-weight: normal !important;\n  border-radius: 10px !important;\n\n  &:hover {\n    background: var(--primary-color) !important;\n    color: white !important;\n  }\n"]))))},97494:function(n,e,t){var r,o=t(52209),i=t(67294),a=t(29163),s=t(85893);e.Z=i.memo((0,a.ZP)((function(n){var e=n.src,t=void 0===e?"/images/logo_22x.png":e,r=n.className;return(0,s.jsx)("div",{className:r,children:(0,s.jsx)("img",{src:t})})}))(r||(r=(0,o.Z)(["\n  display: inline-block;\n\n  img {\n    display: inline-block;\n    height: 2.5rem;\n    width: auto;\n    object-fit: contain;\n  }\n\n  span {\n    font-size: 2.45rem;\n    font-weight: 400;\n    line-height: 2.45rem;\n    color: white;\n    display: inline-block;\n  }\n"]))))},60649:function(n,e,t){var r,o=t(52209),i=t(67294),a=t(76736),s=t(35766),c=t(14309),l=t(94983),u=t(11163),m=t(94184),p=t.n(m),d=t(29163),f=t(97494),g=t(85893),h=[{path:"/files",icon:"cru-fo-file",name:"Upload"},{path:"/docs",icon:"cru-fo-file-text",name:"Docs"},{path:"/setting",icon:"cru-fo-settings",name:"Settings"}];var b="15.7rem";e.Z=i.memo((0,d.ZP)((function(n){var e=(0,u.useRouter)(),t=(0,i.useCallback)((function(t,r){var o=r.index,i=h[o];i.path!==n.path&&e.push(i.path)}),[n.path]);return(0,g.jsxs)(a.Z.Pushable,{as:s.Z,className:p()(n.className,"basic"),children:[(0,g.jsx)(a.Z,{as:s.Z,animation:"push",direction:"left",visible:!0,className:"basic",children:(0,g.jsxs)(c.Z,{textAlign:"center",children:[(0,g.jsx)(c.Z.Row,{columns:1,className:"logoPanel",children:(0,g.jsx)(f.Z,{src:"/images/logo_12x.png"})}),(0,g.jsx)(c.Z.Row,{columns:1,children:(0,g.jsx)(l.Z,{fluid:!0,vertical:!0,borderless:!0,children:h.map((function(e,r){return(0,g.jsx)(l.Z.Item,{position:"left",index:r,active:e.path===n.path,icon:(0,g.jsx)("span",{className:e.icon}),name:e.name,onClick:t},"side_menu_".concat(r))}))})})]})}),(0,g.jsx)(a.Z.Pusher,{children:n.children})]})}))(r||(r=(0,o.Z)(["\n  overflow: hidden;\n  height: 100vh;\n  background: white;\n\n  .ui.sidebar {\n    background: #F5F5F5;\n    box-shadow: unset !important;\n    width: ",';\n\n    .logoPanel {\n      padding: 4.7rem 0;\n\n      img {\n        height: 1.7rem;\n      }\n    }\n\n    .menu {\n      box-shadow: unset !important;\n      border: unset !important;\n      border-radius: unset !important;\n      background: unset !important;\n\n      .item {\n        border-radius: 0 !important;\n        text-align: left;\n        padding-left: 2rem !important;\n        font-weight: 500;\n        font-size: 1.3rem;\n        color: var(--secend-color);\n        font-family: "OpenSans-Regular";\n\n        &.active {\n          position: relative;\n          color: var(--main-color);\n          font-family: "OpenSans-Medium";\n          border-right: solid 0.2rem var(--primary-color);\n          border-right-style: dot-dash;\n        }\n\n\n        span {\n          float: left;\n          margin-right: 10px;\n        }\n      }\n    }\n  }\n\n  .pusher {\n    width: calc(100vw - ',");\n    height: 100vh;\n    transform: translate3d(",", 0, 0) !important;\n    overflow: auto !important;\n    background: white;\n  }\n"])),b,b,b))},43913:function(n,e,t){t.d(e,{Z:function(){return P}});var r,o=t(52209),i=t(80318),a=t(67294),s=t(35766),c=t(88188),l=t(68154),u=t(96705),m=t(29163),p=t(99056),d=t(65058),f=t(92809),g=t(10219),h=t(345),b=t(60954),w=t(85893),v=["user","toggleOpen"];function j(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?j(Object(t),!0).forEach((function(e){(0,f.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var x,O=a.memo((0,m.ZP)((function(n){var e=n.user,t=n.toggleOpen,r=(0,g.Z)(n,v),o=(0,a.useState)(e.account),i=o[0],s=o[1],c=(0,a.useCallback)((function(n,e){var t=e.value;s(t)}),[]),u=(0,a.useCallback)((function(){e.account!==i&&e.setLoginUser({wallet:e.wallet,account:i,pubKey:e.pubKey}),t(!1)}),[i,e]),m=(0,a.useMemo)((function(){return e.accounts.map((function(n){return{text:(0,p.l)(n),value:n}}))}),[e]);return(0,w.jsxs)(h.Z,y(y({closeIcon:(0,w.jsx)("span",{className:"close icon cru-fo-x"}),onClose:function(){return t(!1)}},r),{},{children:[(0,w.jsx)(h.Z.Header,{content:"Select Account"}),(0,w.jsxs)(h.Z.Content,{children:[(0,w.jsx)(l.Z,{fluid:!0,selection:!0,icon:(0,w.jsx)("span",{className:"icon cru-fo cru-fo-chevron-down"}),defaultValue:i,options:m,onChange:c}),(0,w.jsxs)("div",{className:"btns",children:[(0,w.jsx)(b.Z,{content:"Confirm",onClick:u}),(0,w.jsx)(b.Z,{content:"Cancel",onClick:function(){return t(!1)}})]})]})]}))}))(r||(r=(0,o.Z)(["\n  overflow: unset !important;\n  width: 34.3rem !important;\n  \n  .header {\n    height: 3.93rem;\n    font-size: 1.3rem !important;\n    padding: 0 1.14rem !important;\n    font-weight: 600 !important;\n    line-height: 3.93rem !important;\n    border-top-right-radius: 0.6rem !important;\n    border-top-left-radius: 0.6rem !important;\n  }\n\n\n  .close.icon {\n    top: 0.5rem;\n    right: 0.6rem;\n    color: #666666;\n  }\n\n  .content {\n    padding: 1rem !important;\n    border-bottom-right-radius: 0.6rem !important;\n    border-bottom-left-radius: 0.6rem !important;\n\n    .btns {\n      padding-top: 2.3rem;\n\n      button {\n        width: calc(50% - 0.5rem) !important;\n        margin: unset;\n      }\n\n      button:first-child {\n        margin-right: 1rem;\n      }\n    }\n\n    .ui.dropdown {\n      border-radius: 0.57rem !important;\n      border: 0.07rem solid #CCCCCC !important;\n      box-shadow: unset !important;\n\n      .icon {\n        float: right;\n        transform: translateX(1.2rem);\n      }\n      \n      .text {\n        font-weight: 500 !important;\n        color: var(--main-color) !important;\n        font-family: OpenSans-Medium sans-serif !important;\n      }\n\n      .menu {\n        background: #FFFFFF;\n        box-shadow: 0 0.57rem 1.43rem 0 rgba(0, 0, 0, 0.1) !important;\n        border-radius: 0.57rem !important;\n        border: 0.07rem solid #EEEEEE !important;\n        padding: unset !important;\n        top: calc(100% + 0.6rem);\n\n        .item {\n          padding: 1rem 0.8rem !important;\n          border-radius: unset !important;\n          border-top: 1px solid #EEEEEE;\n          font-weight: 500;\n          color: var(--main-color) !important;\n          font-family: OpenSans-Medium sans-serif;\n\n          &:active {\n            background-color: #EEEEEE;\n          }\n        }\n\n        .item:first-child {\n          border-top: unset !important;\n        }\n      }\n    }\n  }\n"])))),Z=t(96486),k=t.n(Z);function E(n){switch(n.wallet){case"crust":return"/images/wallet_crust.png";case"polkadot-js":return"/images/wallet_polkadot.png";case"metamask":return"/images/wallet_metamask.png";case"metamask-Polygon":return"/images/wallet_polygon.png";case"metamask-Moonriver":return"/images/wallet_moonriver.png";case"near":return"/images/wallet_near.png";case"solana":return"/images/wallet_solana.png";case"elrond":return"/images/wallet_elrond.png";case"flow":return"/images/wallet_flow.png";case"wallet-connect":var e=k().get(n.walletConnect.connect,"peerMeta.icons");return k().size(e)?e[0]:"/images/wallet_connect.png";default:return""}}var P=a.memo((0,m.ZP)((function(n){var e=(0,u.WY)(),t=(0,a.useCallback)(e.logout,[e]),r=(0,d.O)(),o=(0,i.Z)(r,2),m=o[0],f=o[1];return(0,w.jsxs)(s.Z,{basic:!0,textAlign:"right",className:n.className,children:[m&&(0,w.jsx)(O,{size:"tiny",open:!0,user:e,toggleOpen:f}),(0,w.jsx)(c.Z.Group,{children:(0,w.jsxs)(c.Z,{style:{justifyContent:"flex-end"},children:[(0,w.jsx)(c.Z.Image,{src:E(e),size:"tiny"}),(0,w.jsx)(c.Z.Content,{verticalAlign:"middle",style:{flex:"unset",paddingLeft:"0.7rem"},children:(0,w.jsx)(l.Z,{pointing:"top right",icon:(0,w.jsx)("span",{className:"cru-fo cru-fo-chevron-down"}),basic:!0,text:(0,p.l)(e.account),children:(0,w.jsxs)(l.Z.Menu,{children:[e.accounts&&(0,w.jsx)(l.Z.Item,{text:"Switch Account",onClick:function(){return f()}}),(0,w.jsx)(l.Z.Item,{text:"Logout",onClick:t})]})})})]})})]})}))(x||(x=(0,o.Z)(["\n  border-bottom: 1px solid var(--line-color) !important;\n  margin: unset !important;\n  padding: 1.3rem !important;\n  width: 100%;\n\n  .tiny.image {\n    width: 4.3rem;\n    height: 4.3rem;\n  }\n\n  .items > .item.tiny {\n    width: 4.3rem;\n  }\n\n  .ui.dropdown {\n    .cru-fo {\n      font-size: 1.3rem;\n      margin-left: 1.1rem;\n    }\n\n    .text {\n      font-family: OpenSans-Medium;\n      font-size: 1.3rem;\n    }\n\n    .menu::after {\n      display: none;\n    }\n\n    .menu {\n      background: #FFFFFF;\n      box-shadow: 0 0.57rem 1.43rem 0 rgba(0, 0, 0, 0.1);\n      border-radius: 0.86rem;\n      border: 0.07rem solid #EEEEEE;\n      padding: 0.57rem;\n\n      .item {\n        padding: 0.78rem 0.57rem !important;\n        border-radius: 0.57rem;\n\n        &:active {\n          background-color: #EEEEEE;\n        }\n      }\n    }\n  }\n"]))))},17082:function(n,e,t){t.d(e,{vZ:function(){return h},hC:function(){return b},MH:function(){return w}});var r=t(92809),o=t(30266),i=t(80318),a=t(809),s=t.n(a),c=t(67294),l=t(58971),u=t.n(l),m=t(65058);function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var f=t(21994).Cypher,g=new f(8),h=function(n){return new Promise((function(e,t){var r=new FileReader;r.onload=function(){r.result&&e(r.result)},r.onerror=t,r.readAsArrayBuffer(n)}))};function b(n){try{var e=n&&n.trim();if(e){var t=e.split(" ");if(1===t.length&&t[0]){var r=t[0],o=window.atob(r),i=g.phraseFromSecret(o);if(i&&i.split(" ").length>=4)return{secret:r,seeds:i}}else if(t.length>=4){var a=g.secretFromPhrase(e);if(a&&a.split("-").length>=4)return{secret:window.btoa(a),seeds:e}}}return null}catch(s){return null}}function w(){var n=(0,c.useState)({}),e=n[0],t=n[1],r=(0,m.O)(),a=(0,i.Z)(r,2),l=a[0],p=a[1];(0,c.useEffect)((function(){var n=u().get("user:crypto");n&&t(n),p(!0)}),[]);var g=(0,c.useCallback)((function(n){t(n),u().set("user:crypto",n)}),[]),h=(0,c.useCallback)((0,o.Z)(s().mark((function n(){var e,t,r,o,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new f(8),t=e.genMnemonics(),r=t.secret,o=t.mnemonics,i={secret:window.btoa(r),seeds:o},console.info("length:",r.length,i.secret.length),g(i),n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)}))),[]);return(0,c.useMemo)((function(){return d(d({},e),{},{generate:h,set:g,init:l})}),[e,g,l,h])}},20478:function(n,e,t){t.d(e,{V:function(){return s}});var r=t(67294),o=t(12752),i=t(20640),a=t.n(i);function s(){var n=(0,r.useContext)(o.I).alert;return(0,r.useCallback)((function(e){a()(e),n.alert({msg:"Copied",type:"success"})}),[n])}},65058:function(n,e,t){t.d(e,{O:function(){return o}});var r=t(67294);function o(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(0,r.useState)(n),t=e[0],o=e[1],i=(0,r.useCallback)((function(n){o(void 0!==n?n:function(n){return!n})}),[]);return[t,i]}},99056:function(n,e,t){t.d(e,{l:function(){return r}});var r=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return n.length>2*e?"".concat(n.substr(0,e),"...").concat(n.substr(n.length-e)):n}}}]);