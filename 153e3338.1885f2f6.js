(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(469)),c={},i={id:"exercises/browser/ex_47",title:"ex_47",description:"# Exercise 47",source:"@site/../docs/exercises/browser/ex_47.md",permalink:"/node_comit/docs/exercises/browser/ex_47",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_47.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_46",permalink:"/node_comit/docs/exercises/browser/ex_46"},next:{title:"ex_48",permalink:"/node_comit/docs/exercises/browser/ex_48"}},l=[{value:"index.html",id:"indexhtml",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"exercise-47"},"Exercise 47"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_47\n  |-- index.html\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n    <title>Form Checkbox</title>\n  </head>\n  <body>\n    <form\n      action="save_user.html"\n      method="post"\n      enctype="application/x-www-form-urlencoded"\n      name="login"\n    >\n      <input type="checkbox" name="superheroe" value="Wolverine" /> Wolverine\n      <input type="checkbox" name="superheroe" value="The Invisible Woman" />\n      The Invisible Woman\n      <input type="checkbox" name="superheroe" value="Iron Man" /> Iron Man\n      <input type="checkbox" name="superheroe" value="Superman" /> Superman\n      <input type="checkbox" name="superheroe" value="" /> Daredevil\n      <input type="checkbox" name="superheroe" value="The Flash" /> The Flash\n      <input type="checkbox" name="superheroe" value="Captain America" />\n      Captain America\n      <input type="checkbox" name="superheroe" value="Wonder Woman" /> Wonder\n      Woman\n      <input type="checkbox" name="superheroe" value="Spider-Man" /> Spider-Man\n      <input type="checkbox" name="superheroe" value="Batman" /> Batman\n      <input type="submit" name="submit" value="Submit" />\n    </form>\n  </body>\n</html>\n')),Object(o.b)("h2",{id:"indexhtml"},"index.html"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(o.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(o.b)("li",{parentName:"ul"},"Select the form element using any of the JavaScript selectors"),Object(o.b)("li",{parentName:"ul"},"Add a form submit event handler and prevent the default behaviour"),Object(o.b)("li",{parentName:"ul"},"Show the following message when the user submits the form:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Show the following message if the user doesn't select any superheroes:")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Please at least select a superheroe\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Show the following message if the user only selects one superheroe")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"The best superheroe is: %selectedSuperhero%\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Show the following message if the user selects many superheroes")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"The best superheores are: %listOfSuperheroesNames%\n")))))}u.isMDXComponent=!0},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,h=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(h,i({ref:t},p,{components:n})):a.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);