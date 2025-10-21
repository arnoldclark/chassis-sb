import{g as f}from"./_commonjsHelpers-CqkleIqs.js";var c={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var u;function p(){return u||(u=1,(function(r){(function(){var o={}.hasOwnProperty;function n(){for(var t="",e=0;e<arguments.length;e++){var s=arguments[e];s&&(t=l(t,a(s)))}return t}function a(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var s in t)o.call(t,s)&&t[s]&&(e=l(e,s));return e}function l(t,e){return e?t?t+" "+e:t+e:t}r.exports?(n.default=n,r.exports=n):window.classNames=n})()})(c)),c.exports}var m=p();const d=f(m),h={title:"Elements/Button",tags:["autodocs"],render:({label:r,variant:o,isGhost:n,size:a,loading:l})=>`<button class="${d("ch-btn",{[`ch-btn--${o}`]:!!o,"ch-btn--sm":a==="small","ch-btn--lg":a==="large","ch-btn--loading":l,"ch-btn--ghost":n})}">${r}</button>`,argTypes:{label:{control:"text"},variant:{control:{type:"select"},options:["primary","secondary","danger","link"]},isGhost:{control:"boolean"},size:{control:{type:"select"},options:["default","small","large"]},loading:{control:"boolean"}}},i={args:{label:"Button",variant:"primary",isGhost:!1,size:"default",loading:!1}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Button",
    variant: "primary",
    isGhost: false,
    size: "default",
    loading: false
  }
}`,...i.parameters?.docs?.source}}};const g=["DefaultButton"];export{i as DefaultButton,g as __namedExportsOrder,h as default};
