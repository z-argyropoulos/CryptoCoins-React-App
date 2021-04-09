(this["webpackJsonpifuhadcrypto-reactjs"]=this["webpackJsonpifuhadcrypto-reactjs"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(9),i=c.n(r),a=(c(15),c(7)),o=c(2),l=c(3),j=c(6),h=c(5),u=c(0),b=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"number",min:"0",placeholder:"enter amount"}),Object(u.jsx)("button",{type:"submit",children:"Buy"})]})},d=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).state={name:e.name,base:e.base,price:0,currency:"\u20ac",rise:!0},s}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.coinID=setInterval((function(){e.updateCoin()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.coinID)}},{key:"updateCoin",value:function(){var e=this;fetch("https://api.cryptonator.com/api/ticker/".concat(this.state.base,"-eur")).then((function(e){return e.json()})).then((function(t){var c=Math.round(t.ticker.price);c!==e.state.price&&(c>e.state.price?e.setState({rise:!0}):e.setState({rise:!1})),e.setState({price:c})}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"coin-price",children:[Object(u.jsx)("h2",{children:this.state.name}),Object(u.jsx)("small",{children:this.state.base}),Object(u.jsx)("div",{style:{color:this.state.rise?"green":"red"},children:this.state.price+" "+this.state.currency}),Object(u.jsx)(b,{className:"buy-coin",price:this.state.price})]})}}]),c}(n.a.Component),O=function(e){var t=[{name:"BitCoin",base:"btc"},{name:"Ethereum",base:"eth"},{name:"Litecoin",base:"ltc"}];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{style:{textAlign:"center",color:"white",textDecoration:"underline"},children:"Crypto Coin Prices"}),Object(u.jsxs)("div",{className:"prices-container",children:[Object(u.jsx)(d,Object(a.a)({},t[0])),Object(u.jsx)(d,Object(a.a)({},t[1])),Object(u.jsx)(d,Object(a.a)({},t[2]))]})]})},p=function(e){var t=e.amount,c=e.currency;return Object(u.jsxs)("div",{className:"portfolio",children:[Object(u.jsxs)("h1",{children:["Balance: ",t," ",c," "]}),Object(u.jsx)("small",{children:"Available to buy crypto currencies"})]})};p.defaultProps={amount:100,currency:"\u20ac"};var x=p,m=function(){return Object(u.jsx)("header",{children:Object(u.jsxs)("h1",{className:"heading",style:{textDecoration:"underline"},children:["if you had ",Object(u.jsx)("span",{children:"Crypto"})]})})},f=c(10),y=function(){return Object(u.jsxs)("div",{className:"pack",children:[Object(u.jsx)(f.a,{style:{color:"#F79824",fontSize:"7rem"}}),Object(u.jsx)("h3",{children:"Crypto Pack"})]})},k=function(){return Object(u.jsxs)("section",{className:"pack-section",children:[Object(u.jsx)("h2",{style:{textAlign:"center",color:"white",textDecoration:"underline"},children:"Crypto Packs"}),Object(u.jsxs)("div",{className:"packs",children:[Object(u.jsx)(y,{}),Object(u.jsx)(y,{}),Object(u.jsx)(y,{}),Object(u.jsx)(y,{}),Object(u.jsx)(y,{})]})]})},v=c(4),g=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).tier=e.tier,s.details=function(e){var t,c,s;switch(e){case"Free":t=100,c=3,s=0;break;case"Support":t=300,c=15,s=7;break;case"Shareholder":t=1e3,c=50,s=20;break;default:t=0,c=0,s=0}return{balance:t+"\u20ac",packs:c,price:s+"\u20ac"}}(s.tier),s.handleOnClick=s.handleOnClick.bind(Object(v.a)(s)),s.state={bought:!1},s}return Object(l.a)(c,[{key:"handleOnClick",value:function(){console.log(this),this.state.bought?window.alert("Package has already been bought"):window.confirm("Do you want to buy ".concat(this.tier," tier for ").concat(this.details.price,"?"))&&this.setState((function(e){return{bought:!e.bought}}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{style:{color:"white"},children:[Object(u.jsxs)("h2",{children:[this.tier," Tier"]}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[this.details.balance," starting balance"]}),Object(u.jsxs)("li",{children:[this.details.packs," Crypto Packs per week"]}),Object(u.jsx)("li",{children:"Live Support 24/7"}),"Free"!==this.tier&&Object(u.jsx)("li",{children:"Priority in customer service"})]}),"Free"!==this.tier&&Object(u.jsx)("button",{onClick:this.handleOnClick,style:{backgroundColor:this.state.bought?"green":""},children:this.state.bought?"Bought":"Buy now"})]})}}]),c}(s.Component),C=function(){return Object(u.jsxs)("section",{className:"packages",children:[Object(u.jsx)("h1",{children:"Our packages offer:"}),Object(u.jsxs)("div",{className:"pkg",children:[Object(u.jsx)(g,{className:"free-pkg",tier:"Free"}),Object(u.jsx)(g,{className:"supp-pkg",tier:"Support"}),Object(u.jsx)(g,{className:"shrhold-pkg",tier:"Shareholder"})]})]})};var N=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{}),Object(u.jsx)(x,{}),Object(u.jsx)(O,{}),Object(u.jsx)(k,{}),Object(u.jsx)(C,{})]})};i.a.render(Object(u.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a262ef82.chunk.js.map