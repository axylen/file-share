(this["webpackJsonpfile-share"]=this["webpackJsonpfile-share"]||[]).push([[0],{15:function(e,n,t){e.exports={card:"FileCard_card__2LQTx",card__icon:"FileCard_card__icon__3au0f",icon:"FileCard_icon__2MZPN",card__title:"FileCard_card__title__3F9SZ",card__progress:"FileCard_card__progress__13gjT"}},18:function(e,n,t){e.exports={inputGroup:"InputToClipboard_inputGroup__1K_jF",input:"InputToClipboard_input__aZxeq",btn:"InputToClipboard_btn__13k-2",icon:"InputToClipboard_icon__xv5Og"}},27:function(e,n,t){e.exports={heading:"ShareHost_heading__3e1Cg",urlBox:"ShareHost_urlBox__qbpUI",container:"ShareHost_container__3R05H"}},28:function(e,n,t){e.exports={header:"Header_header__Q76hA",header__heading:"Header_header__heading__BlGzf",header__lead:"Header_header__lead__1jR8H"}},29:function(e,n,t){e.exports={addFiles:"AddFileCard_addFiles__1Cp53",addFiles__caption:"AddFileCard_addFiles__caption__1oLnV",icon:"AddFileCard_icon__2tDcj"}},33:function(e,n,t){e.exports={input:"FileInput_input__3v6pL",inputActive:"FileInput_inputActive__3STcl"}},37:function(e,n,t){e.exports={heading:"ShareClient_heading__VAHtz",container:"ShareClient_container__22l9m"}},43:function(e,n,t){e.exports={container:"Home_container__q5gBo"}},46:function(e,n,t){e.exports={list:"FileList_list__3k0mc"}},49:function(e,n,t){e.exports=t(65)},58:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(21),o=t.n(r),c=t(6),s=t(14),l=t(9),u=function(e){return Array.isArray(e)?e.join(" "):Object.keys(e).filter((function(n){return e[n]})).join(" ")},d=function(e){try{return JSON.parse(e)}catch(n){return null}},f=function(e,n){var t={};for(var a in e)t[a]=n(e[a],a,e);return t},m=function(e){return f(e,(function(e){return{name:e.name,size:e.size}}))},p=function(e,n){var t=document.createElement("a");t.href=URL.createObjectURL(e),document.body.appendChild(t),t.download=n,t.click(),window.URL.revokeObjectURL(t.href),t.remove()},h=function(e){var n={};return e.forEach((function(e){return n[function(e){return"".concat(e.lastModified).concat(e.size).concat(e.name)}(e)]=e})),{type:"HOST_ADD_FILES",payload:n}},v={isHost:!1},_=t(25),g=t(26),E={},F={},b=Object(s.b)({connection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CONNECTION":return Object(l.a)({},e,{},n.payload)}return e},hostFiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"HOST_ADD_FILES":return Object(l.a)({},e,{},n.payload);case"HOST_REMOVE_FILE":var t=n.payload.id,a=(e[t],Object(_.a)(e,[t].map(g.a)));return a}return e},clientFiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CLIENT_ADD_FILES":return Object(l.a)({},e,{},n.payload);case"CLIENT_REMOVE_FILE":var t=n.payload.id,a=(e[t],Object(_.a)(e,[t].map(g.a)));return a;case"SET_DOWNLOAD_PROGRESS":var i=Object(l.a)({},e);return i[n.payload.id].downloadedSize=n.payload.downloadedSize,i;case"SAVE_FILE_DATA":var r=Object(l.a)({},e);return r[n.payload.id].file=n.payload.file,r}return e}}),w=Object(s.c)(b),O=(t(58),t(23)),y=t(10),C=t(5),S=t.n(C),j=t(12),N=t(43),x=t.n(N),A=t(17),L=t(24),I=t(33),k=t.n(I),T=function(e){var n,t=e.onFileInput,r=e.noFocus,o=Object(a.useState)(!1),c=Object(L.a)(o,2),s=c[0],l=c[1],d=Object(a.useRef)(null),f=Object(a.useCallback)((function(e){e.preventDefault(),l(!1);var n=e.dataTransfer.files;n&&t(Array.from(n))}),[t]),m=Object(a.useCallback)((function(e){var n=e.target.files;n&&t(Array.from(n))}),[t]);Object(a.useEffect)((function(){var e=function(){return l(!0)},n=function(e){e.target===d.current&&l(!1)};return window.addEventListener("dragenter",e),window.addEventListener("dragleave",n),function(){window.removeEventListener("dragenter",e),window.removeEventListener("dragleave",n)}}),[]);var p=(n={},Object(A.a)(n,k.a.input,!0),Object(A.a)(n,k.a.inputActive,s),n);return i.a.createElement("div",{ref:d,className:u(p),onDragOver:function(e){return e.preventDefault()},onDrop:f},i.a.createElement("input",{type:"file",name:"files",className:"visually-hidden",multiple:!0,onChange:m,tabIndex:r?-1:0}))},D=t(8),z=t(44),R={iceServers:[{urls:["stun:stun.l.google.com:19302"]}]},H=function(){function e(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;Object(D.a)(this,e),this.connection=void 0,this.messageChannel=void 0,this.onConnection=function(){},this.onMessage=function(e){},this.createOffer=function(){var e=n.connection;return new Promise(function(){var t=Object(j.a)(S.a.mark((function t(a){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.onicecandidate=function(e){return!e.candidate&&a(n.description)},t.t0=e,t.next=4,e.createOffer();case 4:return t.t1=t.sent,t.next=7,t.t0.setLocalDescription.call(t.t0,t.t1);case 7:setTimeout((function(){"complete"!==e.iceGatheringState&&a(n.description)}),4e3);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},this.connect=function(e){var t=n.connection,a=new RTCSessionDescription(JSON.parse(e));return new Promise(function(){var e=Object(j.a)(S.a.mark((function e(i){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setRemoteDescription(a);case 2:if("offer"===a.type){e.next=4;break}return e.abrupt("return",i());case 4:return t.onicecandidate=function(e){return!e.candidate&&i(n.description)},e.t0=t,e.next=8,t.createAnswer();case 8:return e.t1=e.sent,e.next=11,e.t0.setLocalDescription.call(e.t0,e.t1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},this.sendMessage=function(e){var t=n.messageChannel;if("open"===t.readyState)return t.send(e);setTimeout((function(){return n.sendMessage(e)}),50)},this.sendJSON=function(e){n.sendMessage(JSON.stringify(e))};var a=new RTCPeerConnection(t);this.connection=a;var i=a.createDataChannel("message");this.messageChannel=i,i.onmessage=function(e){return n.onMessage(e.data)},a.addEventListener("datachannel",(function(e){var t=e.channel;"message"===t.label&&(n.messageChannel=t)})),a.addEventListener("iceconnectionstatechange",(function(){console.log(a.iceConnectionState),"connected"===a.iceConnectionState&&n.onConnection()}))}return Object(z.a)(e,[{key:"description",get:function(){return JSON.stringify(this.connection.localDescription)}}]),e}(),M=t(47),P=t(48),J=function e(n,t){var a=this;Object(D.a)(this,e),this.channel=void 0,this.file=void 0,this.onFileReady=function(e,n){},this.onFileProgress=function(e){},this.fileMessage=function(e){if("string"===typeof e){var n=JSON.parse(e);if("new"===n.status&&n.info)a.file={id:n.info.id,name:n.info.name,size:n.info.size,downloadedSize:0,data:[]};else if("done"===n.status&&a.file){var t={id:a.file.id,name:a.file.name,size:a.file.size},i=new Blob(a.file.data);a.onFileReady(i,t),a.file=void 0}}else{var r=a.file;r&&(r.data.push(e),r.downloadedSize+=e.byteLength,a.onFileProgress({size:r.size,downloaded:r.downloadedSize,id:r.id}))}},this.sendingFileQueue=[],this.sendFile=function(e,n){var t=a.sendingFileQueue;t.push({file:e,id:n}),t.length>1||a._sendFile()},this._sendFile=function(){var e=a.sendingFileQueue;if(e.length){var n=e[0],t=n.file,i=n.id,r=0,o=!1,c=new window.FileReader;c.onload=function(){if(c.result&&"string"!==typeof c.result){if(!o){var e={status:"new",info:{id:i,name:t.name,size:t.size}};a.channel.send(JSON.stringify(e)),o=!0}a.channel.send(c.result),r+=16384}},c.onloadend=function(){if(r<t.size)c.readAsArrayBuffer(t.slice(r,r+16384));else{a.channel.send(JSON.stringify({status:"done"})),a.sendingFileQueue.shift(),a._sendFile()}},c.readAsArrayBuffer(t.slice(r,r+16384))}},this.channel=n.createDataChannel(t),n.addEventListener("datachannel",(function(e){e.channel.label===t&&(a.channel=e.channel)})),this.channel.onmessage=function(e){return a.fileMessage(e.data)}},B=function(e){Object(P.a)(t,e);var n=Object(M.a)(t);function t(e){var a;Object(D.a)(this,t),(a=n.call(this,e)).fileChannel=void 0,a.onFile=function(e,n){},a.onFileProgress=function(e){},a.onRequestFile=function(e){},a._onMessage=function(e){console.log(e.data);var n=d(e.data);if(n&&"sendFile"===n.action){var t=a.onRequestFile(n.id);t&&a.sendFile(t,n.id)}else a.onMessage(e.data)},a.sendFile=function(e,n){return a.fileChannel.sendFile(e,n)},a.requestFile=function(e){a.sendJSON({action:"sendFile",id:e})};var i=new J(a.connection,"file");return a.fileChannel=i,i.onFileReady=function(e,n){return a.onFile(e,n)},i.onFileProgress=function(e){return a.onFileProgress(e)},a.messageChannel.onmessage=a._onMessage,a}return t}(H),q=t(34);t(60);q.initializeApp({apiKey:"AIzaSyCOmcLQTAhqWDbXZTfhzU0CIOFQj5BjbFE",authDomain:"file-share-6b78c.firebaseapp.com",databaseURL:"https://file-share-6b78c.firebaseio.com",projectId:"file-share-6b78c",storageBucket:"file-share-6b78c.appspot.com",messagingSenderId:"1009616620358"});var Q=q,V=function e(){var n=this;Object(D.a)(this,e),this.connections=void 0,this.doc=function(e){return n.connections.doc(e)},this.add=function(e){return n.connections.add(e)},this.getOffer=function(){var e=Object(j.a)(S.a.mark((function e(t){var a,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.doc(t).get();case 2:if(a=e.sent,!(i=a.data())){e.next=6;break}return e.abrupt("return",i.offer);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.sendOffer=function(e){return n.add({offer:e}).then((function(e){return e.id}))},this.getAnswer=function(e){return new Promise((function(t){var a=n.doc(e).onSnapshot((function(e){var n=e.data();n&&n.answer&&(t(n.answer),a())}))}))},this.sendAnswer=function(e,t){return n.doc(e).set({answer:t},{merge:!0})},this.connections=Q.firestore().collection("connections")},G=Object(c.b)(null,{addConnection:function(e){return{type:"SET_CONNECTION",payload:{isHost:!0,connection:e}}},addFiles:h})((function(e){var n=e.addConnection,t=e.addFiles,a=Object(y.f)(),r=function(){var e=Object(j.a)(S.a.mark((function e(i){var r,o,c,s,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new B,n(r),t(i),o=new V,e.next=6,r.createOffer();case 6:return c=e.sent,e.next=9,o.sendOffer(c);case 9:return s=e.sent,a.push("/".concat(s)),e.next=13,o.getAnswer(s);case 13:l=e.sent,console.log(l),r.connect(l);case 16:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return i.a.createElement("label",{className:x.a.container},i.a.createElement("h1",null,"Add Files"),i.a.createElement(T,{onFileInput:r}))})),U=t(27),W=t.n(U),Z=t(18),K=t.n(Z),$=function(e){var n=e.text,t=Object(a.useRef)(null);return i.a.createElement("div",{className:K.a.inputGroup},i.a.createElement("input",{ref:t,className:K.a.input,readOnly:!0,value:n,onFocus:function(e){return e.target.select()},autoFocus:!0}),i.a.createElement("button",{className:K.a.btn,onClick:function(){var e;if(!navigator.clipboard)return null===(e=t.current)||void 0===e?void 0:e.focus();navigator.clipboard.writeText(n)}},i.a.createElement("svg",{className:K.a.icon,xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22"},i.a.createElement("use",{href:"icons.svg#copy"})),"Copy"))},X=t(46),Y=t.n(X),ee=t(15),ne=t.n(ee),te=function(e){var n=e.name,t=e.id,a=e.onClick,r=e.progress,o=n.match(/(?<=\.)[a-zA-Z0-9]+$/)||[""],c=function(e){e=e.toLowerCase();var n={"file-text":["txt","doc","docx","rtf","odt"],"file-picture":["psd","tiff","tif","bmp","jpeg","jpg","gif","png","ico","webp","svg","eps","ai","heic","nef","crw","arw"],"file-music":["ac3","aif","amr","aud","mp3","flac","iff","m4a","m4b","m4p","mid","mpa","ogg","wav","wave"],"file-video":["mp4","avi","mpg","mov","wmv","3gp","flv","m4v","mts","ts","webm"],"file-zip":["zip","rar","7z","jar","gz"]};for(var t in n)if(n[t].includes(e))return t;return"file-empty"}(Object(L.a)(o,1)[0]);return i.a.createElement("button",{className:ne.a.card,onClick:function(){return a&&a(t)}},i.a.createElement("div",{className:ne.a.card__icon},i.a.createElement("svg",{className:ne.a.icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#".concat(c)}))),i.a.createElement("p",{className:ne.a.card__title,title:n},n),i.a.createElement("progress",{value:null!==r&&void 0!==r?r:0,max:100,className:ne.a.card__progress}))},ae=function(e){var n=e.files,t=e.onFileClick,a=e.appendComponent;return i.a.createElement("ul",{className:Y.a.list},n.map((function(e){var n=e.id,a=e.name,r=e.progress;return i.a.createElement("li",{key:n},i.a.createElement(te,{name:a,id:n,onClick:t,progress:r}))})),a?i.a.createElement("li",null,a):null)},ie=t(28),re=t.n(ie),oe=function(e){var n=e.main,t=e.lead;return i.a.createElement("header",{className:re.a.header},i.a.createElement("h2",{className:re.a.header__heading},n),i.a.createElement("p",{className:re.a.header__lead},t))},ce=t(29),se=t.n(ce),le=function(e){var n=e.onFileInput;return i.a.createElement("label",{className:se.a.addFiles},i.a.createElement("svg",{className:se.a.icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#file-add"})),i.a.createElement("span",{className:se.a.addFiles__caption},"Add Files"),i.a.createElement("input",{type:"file",className:"visually-hidden",multiple:!0,onChange:function(e){var t=e.target.files;return t&&n(Array.from(t))}}))},ue=function(e){var n=e.files,t=e.addFiles,a=e.removeFile;return i.a.createElement(i.a.Fragment,null,i.a.createElement(oe,{main:"Share This Link",lead:"waiting for connection..."}),i.a.createElement("div",null,i.a.createElement("div",{className:W.a.urlBox},i.a.createElement($,{text:window.location.href})),i.a.createElement("main",{className:W.a.container},i.a.createElement("h2",{className:W.a.heading},"Files"),i.a.createElement(ae,{files:n,appendComponent:i.a.createElement(le,{onFileInput:t}),onFileClick:a}))),i.a.createElement(T,{onFileInput:t,noFocus:!0}))},de=Object(c.b)((function(e){return{files:e.hostFiles}}),{addFiles:h,removeFile:function(e){return{type:"HOST_REMOVE_FILE",payload:{id:e}}}})((function(e){var n=e.connection,t=e.files,r=e.addFiles,o=e.removeFile;Object(a.useEffect)((function(){n.onRequestFile=function(e){return t[e]},n.onConnection=function(){n.sendJSON({action:"addFiles",files:m(t)})}}),[n,t]);var c=Object(a.useCallback)((function(e){var t=r(e).payload;n.sendJSON({action:"addFiles",files:m(t)})}),[n,r]),s=Object(a.useCallback)((function(e){o(e),n.sendJSON({action:"removeFile",id:e})}),[n,o]),l=Object.keys(t).map((function(e){return{id:e,name:t[e].name}}));return i.a.createElement(ue,{addFiles:c,files:l,removeFile:s})})),fe=t(37),me=t.n(fe),pe=function(e){var n=e.files,t=e.requestFile;return i.a.createElement(i.a.Fragment,null,i.a.createElement(oe,{main:"Download Files",lead:"click on file to start download"}),i.a.createElement("div",null,i.a.createElement("main",{className:me.a.container},i.a.createElement("h2",{className:me.a.heading},"Files"),i.a.createElement(ae,{files:n,onFileClick:t}))))},he=Object(c.b)((function(e){return{files:e.clientFiles}}),{addFiles:function(e){return{type:"CLIENT_ADD_FILES",payload:e}},removeFile:function(e){return{type:"CLIENT_REMOVE_FILE",payload:{id:e}}},setDownloadProgress:function(e,n){return{type:"SET_DOWNLOAD_PROGRESS",payload:{id:e,downloadedSize:n}}},saveFileData:function(e,n){return{type:"SAVE_FILE_DATA",payload:{id:e,file:n}}}})((function(e){var n=e.connection,t=e.files,r=e.addFiles,o=e.removeFile,c=e.setDownloadProgress,s=e.saveFileData;Object(a.useEffect)((function(){n.onMessage=function(e){var n=d(e);if(n)switch(n.action){case"addFiles":return r(n.files);case"removeFile":return o(n.id)}},n.onFileProgress=function(e){var n=e.downloaded,t=e.id;c(t,n)}}),[n,r,o,c]),Object(a.useEffect)((function(){n.onFile=function(e,n){s(n.id,e),p(e,n.name)}}),[n,s]);var l=Object(a.useCallback)((function(e){var a=t[e];if(a.file)return p(a.file,a.name);a.downloadedSize||(c(e,1),n.requestFile(e))}),[n,t,c]),u=Object.keys(t).map((function(e){var n=t[e],a={id:e,name:n.name};return n.downloadedSize&&(a.progress=n.downloadedSize/n.size*100),a}));return i.a.createElement(pe,{files:u,requestFile:l})})),ve=Object(c.b)((function(e){return{isHost:e.connection.isHost,connection:e.connection.connection}}),{clientSetConnection:function(e){return{type:"SET_CONNECTION",payload:{isHost:!1,connection:e}}}})((function(e){var n=e.isHost,t=e.connection,a=e.clientSetConnection,r=Object(y.f)(),o=Object(y.g)().id;if(t)return n?i.a.createElement(de,{connection:t}):i.a.createElement(he,{connection:t});if(n||!o)return r.replace("/"),i.a.createElement(i.a.Fragment,null);var c=new B,s=new V;return a(c),s.getOffer(o).then((function(e){if(!e)throw new Error("Can't get offer");return c.connect(e)})).then((function(e){return s.sendAnswer(o,e)})).catch((function(){r.replace("/")})),i.a.createElement("div",null,"Loading...")}));var _e=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(O.a,null,i.a.createElement(y.c,null,i.a.createElement(y.a,{path:"/:id"},i.a.createElement(ve,null)),i.a.createElement(y.a,{path:"/"},i.a.createElement(G,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c.a,{store:w},i.a.createElement(_e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.93d1ab6f.chunk.js.map