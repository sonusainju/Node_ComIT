(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return p}));var a=r(1),n=r(9),c=(r(0),r(469)),s={id:"best-practices",title:"Production Best Practices"},i={id:"best-practices",title:"Production Best Practices",description:"## Performance and Reliability",source:"@site/../docs/best-practices.md",permalink:"/node_comit/docs/best-practices",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/best-practices.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092},o=[{value:"Performance and Reliability",id:"performance-and-reliability",children:[]},{value:"Security",id:"security",children:[{value:"Website security threats",id:"website-security-threats",children:[]}]},{value:"Resources",id:"resources",children:[]}],l={rightToc:o};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"performance-and-reliability"},"Performance and Reliability"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Use gzip compression")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Use the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/compression"}),"compression")," middleware for gzip compression in your Express app. For example:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const compression = require("compression");\nconst express = require("express");\nconst app = express();\napp.use(compression());\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Don\u2019t use synchronous functions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Handle exceptions properly")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"To ensure you handle all exceptions, use the following techniques:"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://expressjs.com/en/advanced/best-practice-performance.html#use-try-catch"}),"Use try-catch"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.get("/search", function(req, res) {\n  // Simulating async operation\n  setImmediate(function() {\n    const jsonStr = req.query.params;\n    try {\n      const jsonObj = JSON.parse(jsonStr);\n      res.send("Success");\n    } catch (e) {\n      res.status(400).send("Invalid JSON string");\n    }\n  });\n});\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://expressjs.com/en/advanced/best-practice-performance.html#use-promises"}),"Use promises"))),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.get("/", function(req, res, next) {\n  // do some sync stuff\n  queryDb()\n    .then(function(data) {\n      // handle data\n      return makeCsv(data);\n    })\n    .then(function(csv) {\n      // handle csv\n    })\n    .catch(next);\n});\n\napp.use(function(err, req, res, next) {\n  // handle error\n});\n'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Setting NODE_ENV to \u201cproduction\u201d makes Express:"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Cache view templates."),Object(c.b)("li",{parentName:"ul"},"Cache CSS files generated from CSS extensions."),Object(c.b)("li",{parentName:"ul"},"Generate less verbose error messages."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Ensure your app automatically restarts")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Run your app in a cluster")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Cache request results")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Use a load balancer")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Use a reverse proxy"))),Object(c.b)("h2",{id:"security"},"Security"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Security best practices for Express applications in production include:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Don\u2019t use deprecated or vulnerable versions of Express"),Object(c.b)("li",{parentName:"ul"},"Use TLS"),Object(c.b)("li",{parentName:"ul"},"Use Helmet"),Object(c.b)("li",{parentName:"ul"},"Use cookies securely"),Object(c.b)("li",{parentName:"ul"},"Prevent brute-force attacks against authorization"),Object(c.b)("li",{parentName:"ul"},"Ensure your dependencies are secure"),Object(c.b)("li",{parentName:"ul"},"Avoid other known vulnerabilities"),Object(c.b)("li",{parentName:"ul"},"Additional considerations")))),Object(c.b)("h3",{id:"website-security-threats"},"Website security threats"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Cross-Site Scripting (XSS)")," is a class of attacks that allow an attacker to inject client-side scripts through the website into the browsers of other users"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"SQL injection")," enables malicious users to execute arbitrary SQL code on a database, allowing data to be accessed, modified, or deleted irrespective of the user's permissions"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Cross-Site Request Forgery (CSRF)")," attacks allow a malicious user to execute actions using the credentials of another user without that user\u2019s knowledge or consent"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Glossary/Distributed_Denial_of_Service"}),"Denial of Service (DoS)")," is usually achieved by flooding a target site with fake requests so that access to a site is disrupted for legitimate users.")),Object(c.b)("h2",{id:"resources"},"Resources"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://expressjs.com/en/advanced/best-practice-performance.html"}),"Production best practices: performance and reliability")," (Express docs)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://expressjs.com/en/advanced/best-practice-security.html"}),"Production Best Practices: Security")," (Express docs)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security"}),"Website Security")," (Mozilla docs)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.cloudflare.com/learning/security/threats/owasp-top-10/"}),"OWASP Top 10 2017")," (Cloudflare docs)")))}p.isMDXComponent=!0},469:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(r),m=a,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||c;return r?n.a.createElement(d,i({ref:t},l,{components:r})):n.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<c;l++)s[l]=r[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);