"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[144],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1330:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:2},l="Navigating back with a result",c={unversionedId:"navigation/backresult",id:"navigation/backresult",title:"Navigating back with a result",description:"You can send results back in a type-safe and simple way.",source:"@site/docs/navigation/backresult.md",sourceDirName:"navigation",slug:"/navigation/backresult",permalink:"/navigation/backresult",editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/docs/navigation/backresult.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/navigation/basics"},next:{title:"Navigation Host Composables",permalink:"/navhosts"}},p=[{value:"Multi module result back case",id:"multi-module-result-back-case",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"navigating-back-with-a-result"},"Navigating back with a result"),(0,o.kt)("p",null,"You can send results back in a type-safe and simple way.\nLet's see how:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"ResultBackNavigator")," parameter to the screen that will send results back:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination(style = AppDialog::class)\n@Composable\nfun GoToProfileConfirmation(\n    resultNavigator: ResultBackNavigator<Boolean>\n) { //...\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ResultBackNavigator")," has a type argument that is corresponding to the type of result you want to send back."),(0,o.kt)("li",{parentName:"ul"},"The above example is a Dialog. Modal destinations (dialogs, bottom sheet) are good examples of screens that want to send a result to previous screens.")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"When the screen is done, call ",(0,o.kt)("inlineCode",{parentName:"li"},"navigateBack")," function passing in the result:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"resultNavigator.navigateBack(result = true)\n")),(0,o.kt)("p",null,"This will finish the current screen (same as calling ",(0,o.kt)("inlineCode",{parentName:"p"},"navigateUp")," on normal navigator) and pass ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to the previous screen."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Get a result back from such a Destination:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable\nfun GreetingScreen(\n    navigator: DestinationsNavigator,\n    resultRecipient: ResultRecipient<GoToProfileConfirmationDestination, Boolean>\n) {\n    resultRecipient.onNavResult { result ->\n        when (result) {\n            is NavResult.Canceled -> {\n                // `GoToProfileConfirmationDestination` was shown but it was canceled\n                // and no value was set (example: dialog/bottom sheet dismissed)\n            }\n            is NavResult.Value -> {\n                println("result received from GoToProfileConfirmationDestination = ${result.value}")\n                // Do whatever with the result received!\n                // Think of it like a button click, usually you want to call\n                // a view model method here or navigate somewhere\n            }\n        }\n    }\n\n    // Navigate normally to the other screen, example:\n\n    Button(\n        onClick = {\n            navigator.navigate(GoToProfileConfirmationDestination)\n        }\n    ) { //...\n}\n')),(0,o.kt)("p",null,"Notice the type arguments of ",(0,o.kt)("inlineCode",{parentName:"p"},"ResultRecipient"),". The first is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination")," that is going to send results to the recipient and the second is the type of result the recipient is expecting.",(0,o.kt)("br",{parentName:"p"}),"\n","The ",(0,o.kt)("inlineCode",{parentName:"p"},"onNavResult")," listener will be called every time the ",(0,o.kt)("inlineCode",{parentName:"p"},"GoToProfileConfirmation")," (in this case) calls ",(0,o.kt)("inlineCode",{parentName:"p"},"navigateBack")," on its ",(0,o.kt)("inlineCode",{parentName:"p"},"ResultBackNavigator")," and receives the result sent through that call.\nIf ",(0,o.kt)("inlineCode",{parentName:"p"},"GoToProfileConfirmation")," screen is shown and then gets popped out of the back stack and no result is set (examples: it calls ",(0,o.kt)("inlineCode",{parentName:"p"},"navigateBack")," with no result set; it is a dialog and it gets dismissed; etc), then the ",(0,o.kt)("inlineCode",{parentName:"p"},"onNavResult")," gets called with ",(0,o.kt)("inlineCode",{parentName:"p"},"NavResult.Canceled")," so that you can react to this."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Safety enforced at compile time:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Screens can have at most one ",(0,o.kt)("inlineCode",{parentName:"li"},"ResultBackNavigator")," argument."),(0,o.kt)("li",{parentName:"ol"},"Screens can have at most one ",(0,o.kt)("inlineCode",{parentName:"li"},"ResultRecipient")," per ",(0,o.kt)("inlineCode",{parentName:"li"},"Destination")," type. This means you can have multiple recipients only if they are related to different Destinations."),(0,o.kt)("li",{parentName:"ol"},"Result type must be one of String, Boolean, Float, Int, Long, Serializable, or Parcelable. They can be nullable but in the case of Serializables and Parcelables, they cannot contain type arguments."),(0,o.kt)("li",{parentName:"ol"},"For every ",(0,o.kt)("inlineCode",{parentName:"li"},"ResultRecipient")," of a result type ",(0,o.kt)("inlineCode",{parentName:"li"},"R"),", the corresponding destination must also have a ",(0,o.kt)("inlineCode",{parentName:"li"},"ResultBackNavigator")," of that same ",(0,o.kt)("inlineCode",{parentName:"li"},"R")," type.")),(0,o.kt)("h2",{id:"multi-module-result-back-case"},"Multi module result back case"),(0,o.kt)("p",null,'In multi module apps, you may find a scenario where there is no dependency between result "sender" and result "recipient". In those scenarios, you need to use ',(0,o.kt)("inlineCode",{parentName:"p"},"OpenResultRecipient<Boolean>")," (example) instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ResultRecipient<YourConfirmationDestination, Boolean>"),"."),(0,o.kt)("p",null,"After this though, there is no way for the library to know how to pass these recipient to your destination, so you need to pass it manually by calling the destinations asking for this kind of ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenResultRecipient"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"DestinationsNavHost(\n//...\n) {\n    composable(YourRecipientScreenDestination) {\n        YourRecipientScreen(\n            //...\n            resultRecipient = resultRecipient<YourConfirmationDestination, Boolean>()\n        )\n    }\n}\n")),(0,o.kt)("p",null,"As you can see, the place that calls DestinationsNavHost is the one that decides where the result comes from. This way we can use this for multi module apps where there is no dependency between recipient and result destinations."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is no check at compile time, and it's a bit of manual setup to use this feature. So always prefer to use the type-safe approach unless you can't - usually only when the destinations at play belong to different modules."))))}m.isMDXComponent=!0}}]);