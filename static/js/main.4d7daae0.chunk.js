(this.webpackJsonpmarket=this.webpackJsonpmarket||[]).push([[0],{10:function(e,t,r){e.exports={types:"Types_types__hyx5x",types__button:"Types_types__button__4-1dh","types__button--selected":"Types_types__button--selected__2A1H0","types__button--placeholder":"Types_types__button--placeholder__1NNUt",animation_button_loading:"Types_animation_button_loading__DH14M",types__failure:"Types_types__failure__OlIHC"}},13:function(e,t,r){e.exports={footer:"Footer_footer__2yRxY",footer__container:"Footer_footer__container__1WsVe",footer__copyright:"Footer_footer__copyright__1rHXe",footer__seperator:"Footer_footer__seperator__79-vF",footer__link:"Footer_footer__link__suuL-"}},16:function(e,t,r){e.exports={basket:"Basket_basket__w6nMD",basket__icon:"Basket_basket__icon__rxiUP",basket__amount:"Basket_basket__amount__1Em2s",basket__amount__currency:"Basket_basket__amount__currency__22e-W"}},19:function(e,t,r){e.exports={menu:"Menu_menu__2tFtC",menu__icon:"Menu_menu__icon__2q7td"}},23:function(e,t,r){e.exports={layout:"Layout_layout__2K1n3",layout__container:"Layout_layout__container__3lKsN"}},40:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var s,a=r(1),n=r.n(a),c=r(14),i=r(12),o=r(4),_=r(25),u=r(26),d=r(2),l={isFiltersVisible:!1,isBasketVisible:!1},p=r(3),b=r.n(p),h=r(5),j="MARKET_FILTERS_VISIBILITY",m="MARKET_BASKET_VISIBILITY",f=function(e){return e.marketReducer},v=function(e){return{type:j,actionFiltersVisibility:e}},O=function(e){return{type:m,actionBasketVisibility:e}};!function(e){e.PriceAsc="_sort=price&_order=asc",e.PriceDesc="_sort=price&_order=desc",e.AddedAsc="_sort=added&_order=asc",e.AddedDesc="_sort=added&_order=desc"}(s||(s={}));new Map([[s.PriceAsc,"Price low to high"],[s.PriceDesc,"Price high to low"],[s.AddedAsc,"New to old"],[s.AddedDesc,"Old to new"]]);var y={filterPage:1,filterSortOrder:s.PriceAsc,filterType:null,filterBrands:null,filterTags:null,loadingProductTypes:!0,loadingProductBrands:!0,loadingProductTags:!0,loadingProductItems:!0,failureProductTypes:!1,failureProductBrands:!1,failureProductTags:!1,failureProductsItems:!1,dataProductTypes:[],dataProductBrands:[],dataProductTags:[],dataProductItems:[],dataProductItemsTotalCount:0},g=r(17),x=r(6),A=r.t(x,2),T={api:{urlBase:"https://furcan.herokuapp.com/api",pathProducts:"/products",pathTypes:"/types",pathBrands:"/brands",pathTags:"/tags",productsLimit:16},app:{url:null===A||void 0===A?void 0:x.homepage,version:null===A||void 0===A?void 0:x.version,name:null===A||void 0===A?void 0:x.description,locale:"tr-TR",currency:"\u20ba"},text:{common:{failure:"Something went wrong."},products:{mainTitle:"Products",buttonAdd:"Add"},footer:{privacy:"Privacy Policy"}}},P=r(27),k=r(28),w=r(29),I=(Error,function(e){return new Promise((function(t){return setTimeout((function(){t()}),e||1e3)}))}),N=function(e){Object({NODE_ENV:"production",PUBLIC_URL:"/Market",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).isDev&&console.error("%c ".concat(T.app.name," "),"padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n ".concat(e))},S=function(e){return e.toLocaleString(T.app.locale,{minimumFractionDigits:2,maximumFractionDigits:2})},E=function(e){var t=e.endpoint,r=e.filters,s=e.page;return"".concat(t,"?").concat(r.join("&"),"&_page=").concat(s,"&_limit=").concat(T.api.productsLimit)},D=function e(t){var r=this;Object(g.a)(this,e),this.headers=void 0,this.defaultHeaders={"Content-Type":"application/json"},this.getProductTypes=Object(h.a)(b.a.mark((function e(){var t,s,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=r.headers,e.next=4,fetch(T.api.urlBase+T.api.pathTypes,{method:"get",headers:t});case 4:if((s=e.sent).ok){e.next=7;break}throw new Error;case 7:return e.next=9,s.json();case 9:if(a=e.sent,Array.isArray(a)){e.next=12;break}throw new Error;case 12:return e.abrupt("return",a);case 15:return e.prev=15,e.t0=e.catch(0),n=e.t0 instanceof Error?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",N(n),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[0,15]])}))),this.getProductsByFiltersAndPage=function(){var e=Object(h.a)(b.a.mark((function e(t,s){var a,n,c,i,o,_,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=r.headers,n=E({endpoint:T.api.urlBase+T.api.pathProducts,filters:t,page:s}),e.next=5,fetch(n,{method:"get",headers:a});case 5:if((c=e.sent).ok){e.next=8;break}throw new Error;case 8:return e.next=10,c.json();case 10:if(i=e.sent,Array.isArray(i)){e.next=13;break}throw new Error;case 13:return o=i.map((function(e){return{slug:null===e||void 0===e?void 0:e.slug,name:null===e||void 0===e?void 0:e.name,price:null===e||void 0===e?void 0:e.price}})),_={products:o,totalCount:parseInt(c.headers.get("X-Total-Count")||"")||0},e.abrupt("return",_);case 18:return e.prev=18,e.t0=e.catch(0),u=e.t0 instanceof Error?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",N(u),e.abrupt("return",null);case 23:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,r){return e.apply(this,arguments)}}(),this.headers=Object(d.a)(Object(d.a)({},this.defaultHeaders),t)},B="PRODUCTS_FILTER_SET_TYPE",F="PRODUCTS_FILTER_SET_SORTORDER",R="PRODUCTS_TYPES_GET_DATA_LOADING",C="PRODUCTS_TYPES_GET_DATA_FAILURE",V="PRODUCTS_TYPES_SET_DATA",M="PRODUCTS_ITEMS_GET_DATA_LOADING",L="PRODUCTS_ITEMS_GET_DATA_FAILURE",H="PRODUCTS_ITEMS_SET_DATA",U=function(e){return e.productsReducer},z=function(e){return{type:B,actionFilterType:e}},G=function(e){return{type:H,actionDataProductItems:e}},K=Object(i.combineReducers)({marketReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),{},{isFiltersVisible:!0===t.actionFiltersVisibility});case m:return Object(d.a)(Object(d.a)({},e),{},{isBasketVisible:!0===t.actionBasketVisibility});default:return e}},productsReducer:function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case R:return Object(d.a)(Object(d.a)({},r),{},{loadingProductTypes:!0,failureProductTypes:!1});case C:return Object(d.a)(Object(d.a)({},r),{},{loadingProductTypes:!1,failureProductTypes:!0});case V:return Object(d.a)(Object(d.a)({},r),{},{loadingProductTypes:!1,failureProductTypes:!1,dataProductTypes:s.actionDataProductTypes||y.dataProductTypes});case M:return Object(d.a)(Object(d.a)({},r),{},{loadingProductItems:!0,failureProductsItems:!1});case L:return Object(d.a)(Object(d.a)({},r),{},{loadingProductItems:!1,failureProductsItems:!0});case H:return Object(d.a)(Object(d.a)({},r),{},{loadingProductItems:!1,failureProductsItems:!1,dataProductItems:(null===(e=s.actionDataProductItems)||void 0===e?void 0:e.products)||y.dataProductItems,dataProductItemsTotalCount:(null===(t=s.actionDataProductItems)||void 0===t?void 0:t.totalCount)||y.dataProductItemsTotalCount});case F:return Object(d.a)(Object(d.a)({},r),{},{filterSortOrder:s.actionFilterSortOrder||y.filterSortOrder});case B:return Object(d.a)(Object(d.a)({},r),{},{filterType:s.actionFilterType||y.filterType});default:return r}}}),Y=r(0);var q=function(e){var t=e.className,r=e.width,s=void 0===r?142:r,a=e.height,n=void 0===a?41:a,c=e.color,i=void 0===c?"#fff":c;return Object(Y.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,width:s,height:n,color:i,viewBox:"0 0 142 41",children:[Object(Y.jsx)("path",{fill:"currentColor",d:"M5.784 20.928c0 .768.192 1.52.576 2.256.416.704.976 1.056 1.68 1.056.736 0 1.296-.08 1.68-.24.416-.192.656-.288.72-.288.192 0 .288.128.288.384s-.192.512-.576.768c-.352.224-1.008.336-1.968.336-.928 0-1.696-.384-2.304-1.152-.608-.768-.96-1.616-1.056-2.544V36H.072V13.776h4.752v7.008c.128-2.016 1.12-3.76 2.976-5.232 1.856-1.504 3.792-2.256 5.808-2.256 2.048 0 3.504.624 4.368 1.872.896 1.216 1.456 2.976 1.68 5.28.128-1.92 1.12-3.584 2.976-4.992 1.888-1.44 3.824-2.16 5.808-2.16 2.112 0 3.664.736 4.656 2.208 1.024 1.44 1.536 4.528 1.536 9.264V36h-4.8v-9.984c0-3.776-.208-6.592-.624-8.448-.384-1.856-1.136-2.784-2.256-2.784-1.408 0-2.816.656-4.224 1.968-1.408 1.312-2.112 2.704-2.112 4.176 0 .768.192 1.52.576 2.256.416.704 1.072 1.056 1.968 1.056.544 0 1.008-.08 1.392-.24.416-.192.656-.288.72-.288.192 0 .288.128.288.384s-.192.512-.576.768c-.352.224-.976.336-1.872.336-.864 0-1.6-.304-2.208-.912-.608-.64-.992-1.456-1.152-2.448.032.608.048 1.584.048 2.928V36H15v-9.984c0-3.776-.208-6.592-.624-8.448-.384-1.856-1.136-2.784-2.256-2.784-1.408 0-2.816.656-4.224 1.968-1.408 1.312-2.112 2.704-2.112 4.176zM47.341 36.48c-2.304 0-4.352-.64-6.144-1.92-1.76-1.312-2.64-3.12-2.64-5.424 0-1.344.32-2.512.96-3.504.672-.992 1.52-1.728 2.544-2.208 1.888-.96 3.728-1.44 5.52-1.44 1.792 0 3.824.48 6.096 1.44-.032-3.712-.496-6.176-1.392-7.392-.864-1.248-2.208-1.872-4.032-1.872-1.824 0-3.408.336-4.752 1.008-1.312.672-1.968 1.568-1.968 2.688 0 .384-.176.576-.528.576-.32 0-.48-.176-.48-.528 0-1.344.736-2.448 2.208-3.312 1.504-.896 3.712-1.344 6.624-1.344 6.08 0 9.12 3.584 9.12 10.752v12h-4.8v-3.792c-.224 1.248-.944 2.272-2.16 3.072-1.216.8-2.608 1.2-4.176 1.2zm4.224-8.976c1.152.8 1.856 1.904 2.112 3.312v-6.528c-2.304-.928-4.192-1.392-5.664-1.392-1.44 0-2.576.608-3.408 1.824-.832 1.216-1.248 2.704-1.248 4.464 0 1.76.336 3.264 1.008 4.512.704 1.216 1.744 1.824 3.12 1.824 1.408 0 2.64-.352 3.696-1.056 1.056-.736 1.584-1.6 1.584-2.592 0-1.728-.576-2.912-1.728-3.552-.48-.288-.72-.56-.72-.816 0-.256.112-.384.336-.384.224 0 .528.128.912.384zM80.082 15.6a.924.924 0 01-.432.816c-.256.192-.592.288-1.008.288-.416 0-.752-.112-1.008-.336a2.1 2.1 0 01-.528-.816c-.064-.288-.256-.544-.576-.768-.32-.256-.768-.384-1.344-.384-1.408 0-2.72 1.024-3.936 3.072-1.216 2.048-1.92 4.368-2.112 6.96V36h-4.8V13.776h4.8v5.664c.768-1.856 1.76-3.392 2.976-4.608 1.248-1.248 2.496-1.872 3.744-1.872 1.248 0 2.256.224 3.024.672.8.416 1.2 1.072 1.2 1.968zM101.669 40.32c-1.728 0-3.072-.576-4.032-1.728-.928-1.12-1.536-2.512-1.824-4.176-.256-1.664-.48-3.344-.672-5.04-.416-4.192-1.664-6.48-3.744-6.864l-3.744 4.944V36h-4.8V0h4.8v25.872l6.048-8.016c1.216-1.632 2.64-2.96 4.272-3.984 1.632-1.024 3.312-1.536 5.04-1.536.608 0 .912.144.912.432 0 .384-.192.576-.576.576-.896 0-1.68.064-2.352.192-.64.096-1.6.56-2.88 1.392-1.28.832-2.528 2.048-3.744 3.648l-2.352 3.072c.704-.064 1.168-.096 1.392-.096 1.632 0 2.944.448 3.936 1.344a5.781 5.781 0 011.968 3.264c.32 1.312.56 2.752.72 4.32.192 1.536.304 2.96.336 4.272.064 1.312.304 2.4.72 3.264.416.896 1.008 1.344 1.776 1.344s1.44-.224 2.016-.672c.576-.416 1.024-.848 1.344-1.296.32-.416.544-.624.672-.624s.192.064.192.192c0 .16-.048.336-.144.528-.96 1.888-2.72 2.832-5.28 2.832z"}),Object(Y.jsx)("path",{fill:"currentColor",d:"M112.436 34.32c.448.32 1.008.592 1.68.816.704.224 1.552.336 2.544.336s2.048-.224 3.168-.672c1.12-.48 1.904-1.184 2.352-2.112h1.392c-1.248 2.528-3.872 3.792-7.872 3.792-3.072 0-5.68-1.088-7.824-3.264-2.112-2.208-3.168-4.96-3.168-8.256 0-3.328 1.12-6.096 3.36-8.304 2.24-2.24 4.672-3.36 7.296-3.36 2.656 0 4.736.736 6.24 2.208 1.536 1.44 2.304 3.152 2.304 5.136s-.816 3.744-2.448 5.28c-1.632 1.536-3.776 2.304-6.432 2.304-2.656 0-4.512-1.136-5.568-3.408.032.224.064.704.096 1.44.064.736.112 1.312.144 1.728.032.416.112.992.24 1.728.16.736.32 1.328.48 1.776.192.448.464.96.816 1.536.352.544.752.976 1.2 1.296zm7.344-13.92c0-4.128-1.568-6.192-4.704-6.192-1.536 0-2.8.752-3.792 2.256-.96 1.472-1.504 3.264-1.632 5.376a5.004 5.004 0 011.728-2.16c.8-.544 1.616-.816 2.448-.816.864 0 1.296.16 1.296.48 0 .288-.192.432-.576.432-1.472.096-2.56.464-3.264 1.104-.672.64-1.008 1.504-1.008 2.592s.384 2.016 1.152 2.784c.8.736 1.728 1.104 2.784 1.104 1.728 0 3.088-.688 4.08-2.064.992-1.408 1.488-3.04 1.488-4.896zM125.438 14.736v-.96h4.416V7.2h4.8v6.576h5.04v.96h-5.04v14.832c0 3.968.864 5.952 2.592 5.952.672 0 1.296-.208 1.872-.624.576-.448 1.024-.88 1.344-1.296.32-.448.544-.672.672-.672s.192.08.192.24c0 .128-.048.288-.144.48-.96 1.888-2.72 2.832-5.28 2.832-2.048 0-3.568-.784-4.56-2.352-.992-1.568-1.488-3.664-1.488-6.288V14.736h-4.416z"})]})},J=r(24),W=r(19),X=r.n(W);var Q=function(){var e=Object(o.b)(),t=Object(o.c)(f).isFiltersVisible;return Object(Y.jsxs)("button",{type:"button",onClick:function(){var r;e((r=!t,function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(v(r));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},className:X.a.menu,children:[!t&&Object(Y.jsx)(J.a,{className:X.a.menu__icon}),t&&Object(Y.jsx)(J.b,{className:X.a.menu__icon})]})};var Z=function(e){var t=e.className,r=e.width,s=void 0===r?24:r,a=e.height,n=void 0===a?26:a,c=e.color,i=void 0===c?"#fff":c;return Object(Y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,width:s,height:n,color:i,viewBox:"0 0 24 26",children:Object(Y.jsx)("path",{fill:"currentColor",d:"M5.412 9.467h13.176v11.541H5.412V9.467zM9.672 4.657h4.67l.934.97v3.84l-1.011-.003v-3.84h-4.51v3.84l-1.031.003V5.624l.948-.967z"})})},$=r(16),ee=r.n($);var te=function(){var e=Object(o.b)(),t=Object(o.c)(f).isBasketVisible;return Object(Y.jsxs)("button",{type:"button",onClick:function(){var r;e((r=!t,function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(O(r));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},className:ee.a.basket,children:[Object(Y.jsx)(Z,{className:ee.a.basket__icon}),Object(Y.jsxs)("span",{className:ee.a.basket__amount,children:[Object(Y.jsx)("span",{className:ee.a.basket__amount__currency,children:T.app.currency}),Object(Y.jsx)("span",{children:S(0)})]})]})},re=r(9),se=r.n(re);var ae=function(e){var t=e.testId;return Object(Y.jsx)("header",{"data-testid":t,className:se.a.header,children:Object(Y.jsxs)("div",{className:se.a.header__container,children:[Object(Y.jsx)("div",{className:se.a.header__menu,children:Object(Y.jsx)(Q,{})}),Object(Y.jsx)("a",{className:se.a.header__logo,href:"/Market",children:Object(Y.jsx)(q,{className:se.a.header__logo__icon})}),Object(Y.jsx)("div",{className:se.a.header__basket,children:Object(Y.jsx)(te,{})})]})})},ne=r(23),ce=r.n(ne);var ie=function(e){var t=e.testId,r=e.children;return Object(Y.jsx)("section",{"data-testid":t,className:ce.a.layout,children:Object(Y.jsx)("div",{className:ce.a.layout__container,children:r})})},oe=r(13),_e=r.n(oe);var ue=function(e){var t=e.testId;return Object(Y.jsx)("footer",{"data-testid":t,className:_e.a.footer,children:Object(Y.jsxs)("div",{className:_e.a.footer__container,children:[Object(Y.jsxs)("p",{className:_e.a.footer__copyright,children:["\xa9","".concat((new Date).getFullYear()," ").concat(T.app.name)]}),Object(Y.jsx)("span",{className:_e.a.footer__seperator,children:"\u2022"}),Object(Y.jsx)("a",{className:_e.a.footer__link,href:"/Market",children:Object(Y.jsx)("span",{children:T.text.footer.privacy})})]})})},de=r(10),le=r.n(de);var pe=function(){var e=Object(o.b)(),t=Object(o.c)(U),r=t.loadingProductTypes,s=t.failureProductTypes,n=t.dataProductTypes,c=t.filterType,i=Array(6).fill("");Object(a.useEffect)((function(){r&&e(function(){var e=Object(h.a)(b.a.mark((function e(t){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:R}),e.next=4,I();case 4:return e.next=6,(new D).getProductTypes();case 6:if(r=e.sent){e.next=9;break}throw new Error;case 9:t({type:V,actionDataProductTypes:r}),(s=r.find((function(e){return e})))&&t(z(s.queryString)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),t({type:C});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}())}),[r,e]);var _=function(t){var r;e((r=t,function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(z(r));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};return Object(Y.jsxs)("div",{className:le.a.types,children:[r&&i.map((function(e,t){return Object(Y.jsx)("span",{className:[le.a.types__button,le.a["types__button--placeholder"]||""].join(" ")},t)})),s&&Object(Y.jsx)("p",{className:le.a.types__failure,children:T.text.common.failure}),n.length>0&&n.map((function(e,t){return Object(Y.jsx)("button",{onClick:function(){return _(e.queryString)},className:[le.a.types__button,c===e.queryString&&le.a["types__button--selected"]||""].join(" "),children:Object(Y.jsx)("span",{children:e.name})},t)}))]})},be=r(7),he=r.n(be);var je=function(){var e=Object(o.b)(),t=Object(o.c)(U),r=t.filterPage,s=t.filterType,n=t.filterSortOrder,c=t.loadingProductItems,i=t.failureProductsItems,_=t.dataProductItems;return Object(a.useEffect)((function(){var t,a;s&&n&&e((t=[s,n],a=r,function(){var e=Object(h.a)(b.a.mark((function e(r){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:M}),e.next=4,I();case 4:return e.next=6,(new D).getProductsByFiltersAndPage(t,a);case 6:if(s=e.sent){e.next=9;break}throw new Error;case 9:r(G(s)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),r({type:L});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()))}),[e,r,s,n]),Object(Y.jsxs)("div",{className:he.a.items,children:[c&&Object(Y.jsx)("p",{children:"Loading"}),i&&Object(Y.jsx)("p",{children:"Failure"}),!c&&!i&&_.length>0&&_.map((function(e,t){return Object(Y.jsxs)("div",{className:he.a.items__single,children:[Object(Y.jsx)("div",{className:he.a.items__single__media,children:Object(Y.jsx)("img",{className:he.a.items__single__media__image,width:"100",height:"100",alt:"TODO",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAQMAAAC6caSPAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/9APCGXRuQAAACpJREFUeJztwTEBAAAAwqD1T+1vBqAAAAAAAAAAAAAAAAAAAAAAAAAAgDdPsAABORaXeAAAAABJRU5ErkJggg=="})}),Object(Y.jsxs)("p",{className:he.a.items__single__price,children:[Object(Y.jsx)("span",{className:he.a.items__single__price__currency,children:T.app.currency}),Object(Y.jsx)("span",{children:S(e.price)})]}),Object(Y.jsx)("h3",{className:he.a.items__single__title,children:e.name}),Object(Y.jsx)("button",{type:"button",className:he.a.items__single__button,children:Object(Y.jsx)("span",{children:T.text.products.buttonAdd})})]},t)}))]})},me=r(8),fe=r.n(me);var ve=function(){var e=Object(o.c)(f),t=e.isFiltersVisible,r=e.isBasketVisible;return Object(Y.jsxs)("div",{className:fe.a.products,children:[Object(Y.jsx)("div",{className:[fe.a.products__filters,t&&fe.a["products__filters--visible"]||""].join(" "),children:Object(Y.jsx)("h1",{children:"Filters"})}),Object(Y.jsxs)("div",{className:fe.a.products__content,children:[Object(Y.jsx)("h2",{className:fe.a.products__content__title,children:T.text.products.mainTitle}),Object(Y.jsx)(pe,{}),Object(Y.jsx)(je,{})]}),Object(Y.jsx)("div",{className:[fe.a.products__basket,r&&fe.a["products__basket--visible"]||""].join(" "),children:Object(Y.jsx)("h1",{children:"Basket"})})]})};var Oe=function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(ae,{testId:"Header"}),Object(Y.jsx)(ie,{testId:"Layout",children:Object(Y.jsx)(ve,{})}),Object(Y.jsx)(ue,{testId:"Footer"})]})},ye=(r(40),function(){var e=Object(i.createStore)(K,Object(u.composeWithDevTools)(Object(i.applyMiddleware)(_.a)));return Object(Y.jsx)(o.a,{store:e,children:Object(Y.jsx)(n.a.StrictMode,{children:Object(Y.jsx)(Oe,{})})})}),ge=window.document.getElementById("MarketApp");(null===ge||void 0===ge?void 0:ge.hasChildNodes())?Object(c.hydrate)(Object(Y.jsx)(ye,{}),ge):ge&&Object(c.render)(Object(Y.jsx)(ye,{}),ge)},6:function(e){e.exports=JSON.parse('{"name":"market","description":"Market","homepage":"https://furcan.github.io/Market/","version":"1.0.0-Beta.01","private":true,"devDependencies":{"@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@types/jest":"^26.0.15","@types/node":"^12.0.0","@types/react":"^17.0.0","@types/react-dom":"^17.0.0","@typescript-eslint/eslint-plugin":"^4.22.1","@typescript-eslint/parser":"^4.22.1","eslint":"^7.25.0","eslint-plugin-react":"^7.23.2","eslint-plugin-react-hooks":"^4.2.0","react-icons":"^4.3.1","react-redux":"^7.2.5","redux":"^4.1.1","redux-devtools-extension":"^2.13.9","redux-thunk":"^2.3.0","sass":"^1.43.3","stylelint":"^13.13.1","stylelint-config-standard":"^22.0.0","stylelint-scss":"^3.19.0","typescript":"^4.1.2"},"dependencies":{"react":"^17.0.2","react-dom":"^17.0.2","react-scripts":"4.0.3"},"scripts":{"lint:stylelint":"stylelint \\"src/presentation/**/*.{scss,sass}\\" --config .stylelintrc.json","lint:eslint":"eslint src","lint":"yarn lint:stylelint && yarn lint:eslint","start":"yarn lint && react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},7:function(e,t,r){e.exports={items:"Items_items__27W7e",items__single:"Items_items__single__3ddz6",items__single__media:"Items_items__single__media__naSj5",items__single__media__image:"Items_items__single__media__image__3eQ6m",items__single__price:"Items_items__single__price__fCBd2",items__single__price__currency:"Items_items__single__price__currency__31iEf",items__single__title:"Items_items__single__title__2PlTn",items__single__button:"Items_items__single__button__3abXd"}},8:function(e,t,r){e.exports={products:"Products_products__3Kfi9",products__filters:"Products_products__filters__1G0IY","products__filters--visible":"Products_products__filters--visible__3DFx6",products__content:"Products_products__content__3iTXr",products__content__title:"Products_products__content__title__1AiC3",products__basket:"Products_products__basket__3QmZa","products__basket--visible":"Products_products__basket--visible__32TnV"}},9:function(e,t,r){e.exports={header:"Header_header__27AAm",header__container:"Header_header__container__D7qb9",header__menu:"Header_header__menu__tkMbz",header__logo:"Header_header__logo__1Nh1j",header__logo__icon:"Header_header__logo__icon__3LSZs",header__basket:"Header_header__basket__j-LR8"}}},[[41,1,2]]]);
//# sourceMappingURL=main.4d7daae0.chunk.js.map