webpackJsonp([16],{262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(n(269),n(270)),r=(n(312),n(313)),l=(n(287),n(288)),o=n(64),i=n.n(o),c=n(65),s=n.n(c),u=n(66),f=n.n(u),m=n(67),h=n.n(m),p=n(68),v=n.n(p),d=n(0),E=n.n(d),y=n(284),_=n(286),b=n(285),w=n(467),C=(n.n(w),function(e){function t(){return s()(this,t),h()(this,(t.__proto__||i()(t)).apply(this,arguments))}return v()(t,e),f()(t,[{key:"render",value:function(){return E.a.createElement(y.a,{className:"noticebar-page"},E.a.createElement(_.a,{title:"通告栏 NoticeBar"}),E.a.createElement("main",null,E.a.createElement(a.a,null,E.a.createElement(a.a.Header,{title:"基本"}),E.a.createElement("div",null,E.a.createElement(r.a,null,"普通"),E.a.createElement(r.a,{theme:"error"},"错误色"),E.a.createElement(r.a,{icon:E.a.createElement(l.a,{type:"wrong-round"})},"自定义图标"),E.a.createElement(r.a,{autoscroll:!0},"各位zarmer请注意，本组件使用了自动滚动功能，更多用法请参见使用文档。"))),E.a.createElement(a.a,null,E.a.createElement(a.a.Header,{title:"可操作"}),E.a.createElement("div",null,E.a.createElement(r.a,{hasArrow:!0,onClick:function(){return alert("click this notice!")}},"链接样式的"),E.a.createElement(r.a,{hasClosable:!0},"可关闭的")))),E.a.createElement(b.a,null))}}]),t}(d.Component));t.default=C},312:function(e,t,n){"use strict";var a=(n(276),n(310),n(287),n(466));n.n(a)},313:function(e,t,n){"use strict";var a=n(282),r=n.n(a),l=n(64),o=n.n(l),i=n(65),c=n.n(i),s=n(66),u=n.n(s),f=n(67),m=n.n(f),h=n(68),p=n.n(h),v=n(283),d=n.n(v),E=n(0),y=n.n(E),_=n(311),b=n(288),w=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof d.a)for(var r=0,a=d()(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]]);return n},C=function(e){function t(e){c()(this,t);var n=m()(this,(t.__proto__||o()(t)).call(this,e));return n.state={offset:0},n}return p()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.autoscroll){var t=this.wrapper.offsetWidth-this.content.offsetWidth;if(!(t>0)){var n=1e3;this.moveInterval=setInterval(function(){var a=e.state.offset;if((a<t||a>=0)&&n>0)return void(n-=50);n=1e3,a=a<t?0:a-1,e.setState({offset:a})},50)}}}},{key:"componentWillUnmount",value:function(){this.moveInterval&&clearInterval(this.moveInterval)}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.children,l=(t.autoscroll,w(t,["prefixCls","children","autoscroll"]));return y.a.createElement(_.a,r()({},l,{size:"lg"}),y.a.createElement("div",{className:n,ref:function(t){e.wrapper=t}},y.a.createElement("div",{className:n+"-body",ref:function(t){e.content=t},style:{left:this.state.offset}},a)))}}]),t}(E.PureComponent);t.a=C,C.defaultProps={prefixCls:"za-noticebar",theme:"warning",icon:y.a.createElement(b.a,{type:"broadcast"}),hasArrow:!1,hasClosable:!1,autoscroll:!1}},466:function(e,t){},467:function(e,t){}});