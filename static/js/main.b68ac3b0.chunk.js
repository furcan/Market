(this.webpackJsonpmarket=this.webpackJsonpmarket||[]).push([[0],{12:function(e,t,r){e.exports={footer:"Footer_footer__2yRxY",footer__container:"Footer_footer__container__1WsVe",footer__copyright:"Footer_footer__copyright__1rHXe",footer__seperator:"Footer_footer__seperator__79-vF",footer__link:"Footer_footer__link__suuL-"}},15:function(e,t,r){e.exports={basket:"Basket_basket__w6nMD",basket__icon:"Basket_basket__icon__rxiUP",basket__amount:"Basket_basket__amount__1Em2s",basket__amount__currency:"Basket_basket__amount__currency__22e-W"}},18:function(e,t,r){e.exports={menu:"Menu_menu__2tFtC",menu__icon:"Menu_menu__icon__2q7td"}},22:function(e,t,r){e.exports={layout:"Layout_layout__2K1n3",layout__container:"Layout_layout__container__3lKsN"}},39:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var s,c=r(1),a=r.n(c),n=r(13),i=r(11),o=r(3),_=r(24),d=r(25),l=r(2),u={isFiltersVisible:!1,isBasketVisible:!1},p=r(4),b=r.n(p),h=r(6),j="MARKET_FILTERS_VISIBILITY",f="MARKET_BASKET_VISIBILITY",v=function(e){return e.marketReducer},y=function(e){return{type:j,actionFiltersVisibility:e}},O=function(e){return{type:f,actionBasketVisibility:e}};!function(e){e.PriceAsc="_sort=price&_order=asc",e.PriceDesc="_sort=price&_order=desc",e.AddedAsc="_sort=added&_order=asc",e.AddedDesc="_sort=added&_order=desc"}(s||(s={}));new Map([[s.PriceAsc,"Price low to high"],[s.PriceDesc,"Price high to low"],[s.AddedAsc,"New to old"],[s.AddedDesc,"Old to new"]]);var m={filterSortOrder:s.PriceAsc,filterType:null,filterBrands:null,filterTags:null,loadingProductTypes:!0,loadingProductBrands:!0,loadingProductTags:!0,failureProductTypes:!1,failureProductBrands:!1,failureProductTags:!1,dataProductTypes:[],dataProductBrands:[],dataProductTags:[]},x=r(16),T=r(5),g=r.t(T,2),k={api:{urlBase:"https://furcan.herokuapp.com/api",pathProducts:"/products",pathTypes:"/types",pathBrands:"/brands",pathTags:"/tags"},app:{url:null===g||void 0===g?void 0:T.homepage,version:null===g||void 0===g?void 0:T.version,name:null===g||void 0===g?void 0:T.description,locale:"tr-TR",currency:"\u20ba"},text:{common:{failure:"Something went wrong."},products:{mainTitle:"Products"},footer:{privacy:"Privacy Policy"}}},P=r(26),w=r(27),N=r(28),D=(Error,function(e){return new Promise((function(t){return setTimeout((function(){t()}),e||1e3)}))}),S=function e(t){var r=this;Object(x.a)(this,e),this.headers=void 0,this.defaultHeaders={"Content-Type":"application/json"},this.getProductTypes=Object(h.a)(b.a.mark((function e(){var t,s,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=r.headers,e.next=4,fetch(k.api.urlBase+k.api.pathTypes,{method:"get",headers:t});case 4:if((s=e.sent).ok){e.next=7;break}throw new Error;case 7:return e.next=9,s.json();case 9:if(c=e.sent,Array.isArray(c)){e.next=12;break}throw new Error;case 12:return e.abrupt("return",c);case 15:return e.prev=15,e.t0=e.catch(0),a=e.t0 instanceof Error?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",n=a,Object({NODE_ENV:"production",PUBLIC_URL:"/Market",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).isDev&&console.error("%c ".concat(k.app.name," "),"padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n ".concat(n)),e.abrupt("return",null);case 20:case"end":return e.stop()}var n}),e,null,[[0,15]])}))),this.headers=Object(l.a)(Object(l.a)({},this.defaultHeaders),t)},V="PRODUCTS_GET_TYPES_LOADING",E="PRODUCTS_GET_TYPES_FAILURE",F="PRODUCTS_GET_TYPES_DATA",A="PRODUCTS_FILTER_TYPE",B=function(e){return e.productsReducer},M=function(e){return{type:A,actionFilterType:e}},I=Object(i.combineReducers)({marketReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{isFiltersVisible:!0===t.actionFiltersVisibility});case f:return Object(l.a)(Object(l.a)({},e),{},{isBasketVisible:!0===t.actionBasketVisibility});default:return e}},productsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(l.a)(Object(l.a)({},e),{},{loadingProductTypes:!0,failureProductTypes:!1});case E:return Object(l.a)(Object(l.a)({},e),{},{loadingProductTypes:!1,failureProductTypes:!0});case F:return Object(l.a)(Object(l.a)({},e),{},{loadingProductTypes:!1,failureProductTypes:!1,dataProductTypes:t.actionDataProductTypes||m.dataProductTypes});case A:return Object(l.a)(Object(l.a)({},e),{},{filterType:t.actionFilterType||m.filterType});default:return e}}}),R=r(0);var C=function(e){var t=e.className,r=e.width,s=void 0===r?142:r,c=e.height,a=void 0===c?41:c,n=e.color,i=void 0===n?"#fff":n;return Object(R.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,width:s,height:a,color:i,viewBox:"0 0 142 41",children:[Object(R.jsx)("path",{fill:"currentColor",d:"M5.784 20.928c0 .768.192 1.52.576 2.256.416.704.976 1.056 1.68 1.056.736 0 1.296-.08 1.68-.24.416-.192.656-.288.72-.288.192 0 .288.128.288.384s-.192.512-.576.768c-.352.224-1.008.336-1.968.336-.928 0-1.696-.384-2.304-1.152-.608-.768-.96-1.616-1.056-2.544V36H.072V13.776h4.752v7.008c.128-2.016 1.12-3.76 2.976-5.232 1.856-1.504 3.792-2.256 5.808-2.256 2.048 0 3.504.624 4.368 1.872.896 1.216 1.456 2.976 1.68 5.28.128-1.92 1.12-3.584 2.976-4.992 1.888-1.44 3.824-2.16 5.808-2.16 2.112 0 3.664.736 4.656 2.208 1.024 1.44 1.536 4.528 1.536 9.264V36h-4.8v-9.984c0-3.776-.208-6.592-.624-8.448-.384-1.856-1.136-2.784-2.256-2.784-1.408 0-2.816.656-4.224 1.968-1.408 1.312-2.112 2.704-2.112 4.176 0 .768.192 1.52.576 2.256.416.704 1.072 1.056 1.968 1.056.544 0 1.008-.08 1.392-.24.416-.192.656-.288.72-.288.192 0 .288.128.288.384s-.192.512-.576.768c-.352.224-.976.336-1.872.336-.864 0-1.6-.304-2.208-.912-.608-.64-.992-1.456-1.152-2.448.032.608.048 1.584.048 2.928V36H15v-9.984c0-3.776-.208-6.592-.624-8.448-.384-1.856-1.136-2.784-2.256-2.784-1.408 0-2.816.656-4.224 1.968-1.408 1.312-2.112 2.704-2.112 4.176zM47.341 36.48c-2.304 0-4.352-.64-6.144-1.92-1.76-1.312-2.64-3.12-2.64-5.424 0-1.344.32-2.512.96-3.504.672-.992 1.52-1.728 2.544-2.208 1.888-.96 3.728-1.44 5.52-1.44 1.792 0 3.824.48 6.096 1.44-.032-3.712-.496-6.176-1.392-7.392-.864-1.248-2.208-1.872-4.032-1.872-1.824 0-3.408.336-4.752 1.008-1.312.672-1.968 1.568-1.968 2.688 0 .384-.176.576-.528.576-.32 0-.48-.176-.48-.528 0-1.344.736-2.448 2.208-3.312 1.504-.896 3.712-1.344 6.624-1.344 6.08 0 9.12 3.584 9.12 10.752v12h-4.8v-3.792c-.224 1.248-.944 2.272-2.16 3.072-1.216.8-2.608 1.2-4.176 1.2zm4.224-8.976c1.152.8 1.856 1.904 2.112 3.312v-6.528c-2.304-.928-4.192-1.392-5.664-1.392-1.44 0-2.576.608-3.408 1.824-.832 1.216-1.248 2.704-1.248 4.464 0 1.76.336 3.264 1.008 4.512.704 1.216 1.744 1.824 3.12 1.824 1.408 0 2.64-.352 3.696-1.056 1.056-.736 1.584-1.6 1.584-2.592 0-1.728-.576-2.912-1.728-3.552-.48-.288-.72-.56-.72-.816 0-.256.112-.384.336-.384.224 0 .528.128.912.384zM80.082 15.6a.924.924 0 01-.432.816c-.256.192-.592.288-1.008.288-.416 0-.752-.112-1.008-.336a2.1 2.1 0 01-.528-.816c-.064-.288-.256-.544-.576-.768-.32-.256-.768-.384-1.344-.384-1.408 0-2.72 1.024-3.936 3.072-1.216 2.048-1.92 4.368-2.112 6.96V36h-4.8V13.776h4.8v5.664c.768-1.856 1.76-3.392 2.976-4.608 1.248-1.248 2.496-1.872 3.744-1.872 1.248 0 2.256.224 3.024.672.8.416 1.2 1.072 1.2 1.968zM101.669 40.32c-1.728 0-3.072-.576-4.032-1.728-.928-1.12-1.536-2.512-1.824-4.176-.256-1.664-.48-3.344-.672-5.04-.416-4.192-1.664-6.48-3.744-6.864l-3.744 4.944V36h-4.8V0h4.8v25.872l6.048-8.016c1.216-1.632 2.64-2.96 4.272-3.984 1.632-1.024 3.312-1.536 5.04-1.536.608 0 .912.144.912.432 0 .384-.192.576-.576.576-.896 0-1.68.064-2.352.192-.64.096-1.6.56-2.88 1.392-1.28.832-2.528 2.048-3.744 3.648l-2.352 3.072c.704-.064 1.168-.096 1.392-.096 1.632 0 2.944.448 3.936 1.344a5.781 5.781 0 011.968 3.264c.32 1.312.56 2.752.72 4.32.192 1.536.304 2.96.336 4.272.064 1.312.304 2.4.72 3.264.416.896 1.008 1.344 1.776 1.344s1.44-.224 2.016-.672c.576-.416 1.024-.848 1.344-1.296.32-.416.544-.624.672-.624s.192.064.192.192c0 .16-.048.336-.144.528-.96 1.888-2.72 2.832-5.28 2.832z"}),Object(R.jsx)("path",{fill:"currentColor",d:"M112.436 34.32c.448.32 1.008.592 1.68.816.704.224 1.552.336 2.544.336s2.048-.224 3.168-.672c1.12-.48 1.904-1.184 2.352-2.112h1.392c-1.248 2.528-3.872 3.792-7.872 3.792-3.072 0-5.68-1.088-7.824-3.264-2.112-2.208-3.168-4.96-3.168-8.256 0-3.328 1.12-6.096 3.36-8.304 2.24-2.24 4.672-3.36 7.296-3.36 2.656 0 4.736.736 6.24 2.208 1.536 1.44 2.304 3.152 2.304 5.136s-.816 3.744-2.448 5.28c-1.632 1.536-3.776 2.304-6.432 2.304-2.656 0-4.512-1.136-5.568-3.408.032.224.064.704.096 1.44.064.736.112 1.312.144 1.728.032.416.112.992.24 1.728.16.736.32 1.328.48 1.776.192.448.464.96.816 1.536.352.544.752.976 1.2 1.296zm7.344-13.92c0-4.128-1.568-6.192-4.704-6.192-1.536 0-2.8.752-3.792 2.256-.96 1.472-1.504 3.264-1.632 5.376a5.004 5.004 0 011.728-2.16c.8-.544 1.616-.816 2.448-.816.864 0 1.296.16 1.296.48 0 .288-.192.432-.576.432-1.472.096-2.56.464-3.264 1.104-.672.64-1.008 1.504-1.008 2.592s.384 2.016 1.152 2.784c.8.736 1.728 1.104 2.784 1.104 1.728 0 3.088-.688 4.08-2.064.992-1.408 1.488-3.04 1.488-4.896zM125.438 14.736v-.96h4.416V7.2h4.8v6.576h5.04v.96h-5.04v14.832c0 3.968.864 5.952 2.592 5.952.672 0 1.296-.208 1.872-.624.576-.448 1.024-.88 1.344-1.296.32-.448.544-.672.672-.672s.192.08.192.24c0 .128-.048.288-.144.48-.96 1.888-2.72 2.832-5.28 2.832-2.048 0-3.568-.784-4.56-2.352-.992-1.568-1.488-3.664-1.488-6.288V14.736h-4.416z"})]})},H=r(23),L=r(18),z=r.n(L);var K=function(){var e=Object(o.b)(),t=Object(o.c)(v).isFiltersVisible;return Object(R.jsxs)("button",{type:"button",onClick:function(){var r;e((r=!t,function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(y(r));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},className:z.a.menu,children:[!t&&Object(R.jsx)(H.a,{className:z.a.menu__icon}),t&&Object(R.jsx)(H.b,{className:z.a.menu__icon})]})};var U=function(e){var t=e.className,r=e.width,s=void 0===r?24:r,c=e.height,a=void 0===c?26:c,n=e.color,i=void 0===n?"#fff":n;return Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,width:s,height:a,color:i,viewBox:"0 0 24 26",children:Object(R.jsx)("path",{fill:"currentColor",d:"M5.412 9.467h13.176v11.541H5.412V9.467zM9.672 4.657h4.67l.934.97v3.84l-1.011-.003v-3.84h-4.51v3.84l-1.031.003V5.624l.948-.967z"})})},Y=r(15),W=r.n(Y);var q=function(){var e,t=Object(o.b)(),r=Object(o.c)(v).isBasketVisible;return Object(R.jsxs)("button",{type:"button",onClick:function(){var e;t((e=!r,function(){var t=Object(h.a)(b.a.mark((function t(r){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r(O(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},className:W.a.basket,children:[Object(R.jsx)(U,{className:W.a.basket__icon}),Object(R.jsxs)("span",{className:W.a.basket__amount,children:[Object(R.jsx)("span",{className:W.a.basket__amount__currency,children:k.app.currency}),Object(R.jsx)("span",{children:(e=0,e.toLocaleString(k.app.locale,{minimumFractionDigits:2,maximumFractionDigits:2}))})]})]})},G=r(8),J=r.n(G);var X=function(e){var t=e.testId;return Object(R.jsx)("header",{"data-testid":t,className:J.a.header,children:Object(R.jsxs)("div",{className:J.a.header__container,children:[Object(R.jsx)("div",{className:J.a.header__menu,children:Object(R.jsx)(K,{})}),Object(R.jsx)("a",{className:J.a.header__logo,href:"/Market",children:Object(R.jsx)(C,{className:J.a.header__logo__icon})}),Object(R.jsx)("div",{className:J.a.header__basket,children:Object(R.jsx)(q,{})})]})})},Z=r(22),Q=r.n(Z);var $=function(e){var t=e.testId,r=e.children;return Object(R.jsx)("section",{"data-testid":t,className:Q.a.layout,children:Object(R.jsx)("div",{className:Q.a.layout__container,children:r})})},ee=r(12),te=r.n(ee);var re=function(e){var t=e.testId;return Object(R.jsx)("footer",{"data-testid":t,className:te.a.footer,children:Object(R.jsxs)("div",{className:te.a.footer__container,children:[Object(R.jsxs)("p",{className:te.a.footer__copyright,children:["\xa9","".concat((new Date).getFullYear()," ").concat(k.app.name)]}),Object(R.jsx)("span",{className:te.a.footer__seperator,children:"\u2022"}),Object(R.jsx)("a",{className:te.a.footer__link,href:"/Market",children:Object(R.jsx)("span",{children:k.text.footer.privacy})})]})})},se=r(9),ce=r.n(se);var ae=function(){var e=Object(o.b)(),t=Object(o.c)(B),r=t.loadingProductTypes,s=t.failureProductTypes,a=t.dataProductTypes,n=t.filterType,i=Array(6).fill("");Object(c.useEffect)((function(){r&&e(function(){var e=Object(h.a)(b.a.mark((function e(t){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:V}),e.next=4,D();case 4:return e.next=6,(new S).getProductTypes();case 6:if(r=e.sent){e.next=9;break}throw new Error;case 9:t({type:F,actionDataProductTypes:r}),(s=r.find((function(e){return e})))&&t(M(s.queryString)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),t({type:E});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}())}),[r,e]);var _=function(t){var r;e((r=t,function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(M(r));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};return Object(R.jsxs)("div",{className:ce.a.types,children:[r&&i.map((function(e,t){return Object(R.jsx)("span",{className:[ce.a.types__button,ce.a["types__button--placeholder"]||""].join(" ")},t)})),s&&Object(R.jsx)("p",{className:ce.a.types__failure,children:k.text.common.failure}),a.length>0&&a.map((function(e,t){return Object(R.jsx)("button",{onClick:function(){return _(e.queryString)},className:[ce.a.types__button,n===e.queryString&&ce.a["types__button--selected"]||""].join(" "),children:Object(R.jsx)("span",{children:e.name})},t)}))]})},ne=r(7),ie=r.n(ne);var oe=function(){var e=Object(o.c)(v),t=e.isFiltersVisible,r=e.isBasketVisible;return Object(R.jsxs)("div",{className:ie.a.products,children:[Object(R.jsx)("div",{className:[ie.a.products__filters,t&&ie.a["products__filters--visible"]||""].join(" "),children:Object(R.jsx)("h1",{children:"Filters"})}),Object(R.jsxs)("div",{className:ie.a.products__content,children:[Object(R.jsx)("h2",{className:ie.a.products__content__title,children:k.text.products.mainTitle}),Object(R.jsx)(ae,{}),Object(R.jsx)("h1",{children:"TODO"}),Object(R.jsx)("h1",{children:"TODO"}),Object(R.jsx)("h1",{children:"TODO"}),Object(R.jsx)("h1",{children:"TODO"})]}),Object(R.jsx)("div",{className:[ie.a.products__basket,r&&ie.a["products__basket--visible"]||""].join(" "),children:Object(R.jsx)("h1",{children:"Basket"})})]})};var _e=function(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(X,{testId:"Header"}),Object(R.jsx)($,{testId:"Layout",children:Object(R.jsx)(oe,{})}),Object(R.jsx)(re,{testId:"Footer"})]})},de=(r(39),function(){var e=Object(i.createStore)(I,Object(d.composeWithDevTools)(Object(i.applyMiddleware)(_.a)));return Object(R.jsx)(o.a,{store:e,children:Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(_e,{})})})}),le=window.document.getElementById("MarketApp");(null===le||void 0===le?void 0:le.hasChildNodes())?Object(n.hydrate)(Object(R.jsx)(de,{}),le):le&&Object(n.render)(Object(R.jsx)(de,{}),le)},5:function(e){e.exports=JSON.parse('{"name":"market","description":"Market","homepage":"https://furcan.github.io/Market/","version":"1.0.0-Beta.01","private":true,"devDependencies":{"@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@types/jest":"^26.0.15","@types/node":"^12.0.0","@types/react":"^17.0.0","@types/react-dom":"^17.0.0","@typescript-eslint/eslint-plugin":"^4.22.1","@typescript-eslint/parser":"^4.22.1","eslint":"^7.25.0","eslint-plugin-react":"^7.23.2","eslint-plugin-react-hooks":"^4.2.0","react-icons":"^4.3.1","react-redux":"^7.2.5","redux":"^4.1.1","redux-devtools-extension":"^2.13.9","redux-thunk":"^2.3.0","sass":"^1.43.3","stylelint":"^13.13.1","stylelint-config-standard":"^22.0.0","stylelint-scss":"^3.19.0","typescript":"^4.1.2"},"dependencies":{"react":"^17.0.2","react-dom":"^17.0.2","react-scripts":"4.0.3"},"scripts":{"lint:stylelint":"stylelint \\"src/presentation/**/*.{scss,sass}\\" --config .stylelintrc.json","lint:eslint":"eslint src","lint":"yarn lint:stylelint && yarn lint:eslint","start":"yarn lint && react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},7:function(e,t,r){e.exports={products:"Products_products__3Kfi9",products__filters:"Products_products__filters__1G0IY","products__filters--visible":"Products_products__filters--visible__3DFx6",products__content:"Products_products__content__3iTXr",products__content__title:"Products_products__content__title__1AiC3",products__basket:"Products_products__basket__3QmZa","products__basket--visible":"Products_products__basket--visible__32TnV"}},8:function(e,t,r){e.exports={header:"Header_header__27AAm",header__container:"Header_header__container__D7qb9",header__menu:"Header_header__menu__tkMbz",header__logo:"Header_header__logo__1Nh1j",header__logo__icon:"Header_header__logo__icon__3LSZs",header__basket:"Header_header__basket__j-LR8"}},9:function(e,t,r){e.exports={types:"Types_types__hyx5x",types__button:"Types_types__button__4-1dh","types__button--selected":"Types_types__button--selected__2A1H0","types__button--placeholder":"Types_types__button--placeholder__1NNUt",animation_button_loading:"Types_animation_button_loading__DH14M",types__failure:"Types_types__failure__OlIHC"}}},[[40,1,2]]]);
//# sourceMappingURL=main.b68ac3b0.chunk.js.map