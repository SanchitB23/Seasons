(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),c=n(6),o=n(4),s=n(7),i=n(0),u=n.n(i),l=n(5),m=n.n(l),d=(n(14),{summer:{text:"Summer",iconName:"sun"},winter:{text:"Winter",iconName:"snowflake"}}),f=function(e){var t,n,a=(t=e.lat,(n=(new Date).getMonth())>2&&n<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=d[a],c=r.text,o=r.iconName;return u.a.createElement("div",{className:"season-display ".concat(a)},u.a.createElement("i",{className:"icon-start massive ".concat(o," icon")}),u.a.createElement("h1",null,c),u.a.createElement("i",{className:"icon-end massive ".concat(o," icon")}))};function v(e){return u.a.createElement("div",{class:"ui active dimmer"},u.a.createElement("div",{class:"ui text loader"},e.message))}v.defaultProps={message:"Loading"},n.d(t,"default",function(){return w});var w=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(o.a)(t).call(this,e))).componentDidMount=function(){window.navigator.geolocation.getCurrentPosition(function(e){return n.setState({lat:e.coords.latitude})},function(e){return n.setState({errorMsg:e.message})})},n.state={lat:null,errorMsg:""},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.lat,n=e.errorMsg;return!t&&n?u.a.createElement("div",null,n):t&&!n?u.a.createElement(f,{lat:t}):u.a.createElement(v,{message:"Please Accept Location Request"})}}]),t}(i.Component);m.a.render(u.a.createElement(w,null),document.querySelector("#root"))},8:function(e,t,n){e.exports=n(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.0fa524d7.chunk.js.map