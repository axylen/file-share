(this["webpackJsonpfile-share"]=this["webpackJsonpfile-share"]||[]).push([[0],{13:function(e,n,t){e.exports={card:"FileCard_card__2LQTx",card_iconContainer:"FileCard_card_iconContainer__1stON",card__icon:"FileCard_card__icon__3au0f",card__icon_hover:"FileCard_card__icon_hover__1ZfZb",card__title:"FileCard_card__title__3F9SZ",card__progress:"FileCard_card__progress__13gjT"}},14:function(e,n,t){e.exports={heading:"ShareClient_heading__VAHtz",connectionBox:"ShareClient_connectionBox__1kudq",container:"ShareClient_container__22l9m",spinner:"ShareClient_spinner__1DKly",connectionStatus:"ShareClient_connectionStatus__zdiMK",noFiles:"ShareClient_noFiles__1diTg"}},18:function(e,n,t){e.exports={container:"Home_container__q5gBo",heading:"Home_heading__3rzF0",lead:"Home_lead__27OI1",backdrop:"Home_backdrop__1n7Oa",spinnerContainer:"Home_spinnerContainer__3Cqik"}},19:function(e,n,t){e.exports={heading:"ShareHost_heading__3e1Cg",connectionBox:"ShareHost_connectionBox__2Ibxu",container:"ShareHost_container__3R05H",spinner:"ShareHost_spinner__3zaTs",connectionStatus:"ShareHost_connectionStatus__32Sgu"}},22:function(e,n,t){e.exports={inputGroup:"InputToClipboard_inputGroup__1K_jF",input:"InputToClipboard_input__aZxeq",btn:"InputToClipboard_btn__13k-2",icon:"InputToClipboard_icon__xv5Og"}},30:function(e,n,t){e.exports={header:"Header_header__Q76hA",header__heading:"Header_header__heading__BlGzf",header__lead:"Header_header__lead__1jR8H"}},31:function(e,n,t){e.exports={addFiles:"AddFileCard_addFiles__1Cp53",icon:"AddFileCard_icon__2tDcj"}},35:function(e,n,t){e.exports={backdrop:"Backdrop_backdrop__2USgN",backdrop_active:"Backdrop_backdrop_active__Esi8Q"}},44:function(e,n,t){e.exports={input:"FileInput_input__3v6pL"}},46:function(e,n,t){e.exports={spinner:"Spinner_spinner__3GSHq",rotate:"Spinner_rotate__2wN5u"}},48:function(e,n,t){e.exports={list:"FileList_list__3k0mc"}},51:function(e,n,t){e.exports=t(67)},60:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(25),o=t.n(r),c=t(6),s=t(16),l=t(8),u=function(e){return Array.isArray(e)?e.join(" "):Object.keys(e).filter((function(n){return e[n]})).join(" ")},d=function(e){try{return JSON.parse(e)}catch(n){return null}},f=function(e,n){var t={};for(var a in e)t[a]=n(e[a],a,e);return t},m=function(e){return f(e,(function(e){return{name:e.name,size:e.size}}))},p=function(e,n){var t=document.createElement("a");t.href=URL.createObjectURL(e),document.body.appendChild(t),t.download=n,t.click(),window.URL.revokeObjectURL(t.href),t.remove()},_=function(e){return{type:"SET_CONNECTION_STATUS",payload:{status:e}}},h=function(e){var n={};return e.forEach((function(e){return n[function(e){return"".concat(e.lastModified).concat(e.size).concat(e.name)}(e)]=e})),{type:"HOST_ADD_FILES",payload:n}},v={isHost:!1,status:"new"},g=t(28),E=t(29),F={},b={},O=Object(s.b)({connection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CONNECTION":case"SET_CONNECTION_STATUS":return Object(l.a)({},e,{},n.payload)}return e},hostFiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"HOST_ADD_FILES":return Object(l.a)({},e,{},n.payload);case"HOST_REMOVE_FILE":var t=n.payload.id,a=(e[t],Object(g.a)(e,[t].map(E.a)));return a;case"HOST_CLEAR_FILES":return{}}return e},clientFiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CLIENT_ADD_FILES":return Object(l.a)({},e,{},n.payload);case"CLIENT_REMOVE_FILE":var t=n.payload.id,a=(e[t],Object(g.a)(e,[t].map(E.a)));return a;case"SET_DOWNLOAD_PROGRESS":var i=Object(l.a)({},e);return i[n.payload.id].downloadedSize=n.payload.downloadedSize,i;case"SAVE_FILE_DATA":var r=Object(l.a)({},e);return r[n.payload.id].file=n.payload.file,r}return e}}),w=Object(s.c)(O),S=(t(60),t(27)),C=t(10),y=t(5),N=t.n(y),j=t(12),k=t(17),x=t(18),T=t.n(x),L=t(44),A=t.n(L),I=t(21),z=t(35),D=t.n(z),H=function(e){var n,t=e.children,a=e.active,r=void 0===a||a,o=(n={},Object(I.a)(n,D.a.backdrop,!0),Object(I.a)(n,D.a.backdrop_active,r),n);return i.a.createElement("div",{className:u(o)},t)},R=function(e){var n=e.onFileInput,t=e.noFocus,r=Object(a.useState)(!1),o=Object(k.a)(r,2),c=o[0],s=o[1],l=Object(a.useRef)(null),u=Object(a.useCallback)((function(e){e.preventDefault(),s(!1);var t=e.dataTransfer.files;t&&n(Array.from(t))}),[n]),d=Object(a.useCallback)((function(e){var t=e.target.files;t&&n(Array.from(t))}),[n]);return Object(a.useEffect)((function(){var e=function(){return s(!0)},n=function(e){e.target===l.current&&s(!1)};return window.addEventListener("dragenter",e),window.addEventListener("dragleave",n),function(){window.removeEventListener("dragenter",e),window.removeEventListener("dragleave",n)}}),[]),i.a.createElement(H,{active:c},i.a.createElement("div",{ref:l,className:A.a.input,onDragOver:function(e){return e.preventDefault()},onDrop:u},i.a.createElement("input",{type:"file",name:"files",className:"visually-hidden",multiple:!0,onChange:d,tabIndex:t?-1:0})))},M=t(9),B=t(45),J={iceServers:[{urls:["stun:stun.l.google.com:19302"]},{urls:["stun:stun1.l.google.com:19302"]},{urls:["stun:stun2.l.google.com:19302"]},{urls:["stun:stun3.l.google.com:19302"]},{urls:["stun:stun4.l.google.com:19302"]},{urls:["stun:stun.voipstunt.com"]}]},P=function(){function e(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;Object(M.a)(this,e),this.connection=void 0,this.messageChannel=void 0,this.onConnection=function(e){},this.onMessage=function(e){},this.createOffer=function(){var e=n.connection;return new Promise(function(){var t=Object(j.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.onicecandidate=function(e){return!e.candidate&&a(n.description)},t.t0=e,t.next=4,e.createOffer();case 4:return t.t1=t.sent,t.next=7,t.t0.setLocalDescription.call(t.t0,t.t1);case 7:"complete"!==e.iceGatheringState&&a(n.description);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},this.connect=function(e){var t=n.connection,a=new RTCSessionDescription(JSON.parse(e));return new Promise(function(){var e=Object(j.a)(N.a.mark((function e(i){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setRemoteDescription(a);case 2:if("offer"===a.type){e.next=4;break}return e.abrupt("return",i());case 4:return t.onicecandidate=function(e){return!e.candidate&&i(n.description)},e.t0=t,e.next=8,t.createAnswer();case 8:return e.t1=e.sent,e.next=11,e.t0.setLocalDescription.call(e.t0,e.t1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},this.sendMessage=function(e){var t=n.messageChannel;if("open"===t.readyState)return t.send(e);setTimeout((function(){return n.sendMessage(e)}),50)},this.sendJSON=function(e){n.sendMessage(JSON.stringify(e))};var a=new RTCPeerConnection(t);this.connection=a;var i=a.createDataChannel("message");this.messageChannel=i,i.onmessage=function(e){return n.onMessage(e.data)},a.addEventListener("datachannel",(function(e){var t=e.channel;"message"===t.label&&(n.messageChannel=t)})),a.addEventListener("iceconnectionstatechange",(function(){n.onConnection(a.iceConnectionState)}))}return Object(B.a)(e,[{key:"description",get:function(){return JSON.stringify(this.connection.localDescription)}}]),e}(),q=t(49),Q=t(50),U=function e(n,t){var a=this;Object(M.a)(this,e),this.channel=void 0,this.file=void 0,this.onFileReady=function(e,n){},this.onFileProgress=function(e){},this.fileMessage=function(e){if("string"===typeof e){var n=JSON.parse(e);if("new"===n.status&&n.info)a.file={id:n.info.id,name:n.info.name,size:n.info.size,downloadedSize:0,data:[]};else if("done"===n.status&&a.file){var t={id:a.file.id,name:a.file.name,size:a.file.size},i=new Blob(a.file.data);a.onFileReady(i,t),a.file=void 0}}else{var r=a.file;r&&(r.data.push(e),r.downloadedSize+=e.byteLength,a.onFileProgress({size:r.size,downloaded:r.downloadedSize,id:r.id}))}},this.sendingFileQueue=[],this.sendFile=function(e,n){var t=a.sendingFileQueue;t.push({file:e,id:n}),t.length>1||a._sendFile()},this._sendFile=function(){var e=a.sendingFileQueue;if(e.length){var n=e[0],t=n.file,i=n.id,r=0,o=!1,c=new window.FileReader;c.onload=function(){if(c.result&&"string"!==typeof c.result){if(!o){var e={status:"new",info:{id:i,name:t.name,size:t.size}};a.channel.send(JSON.stringify(e)),o=!0}a.channel.send(c.result),r+=4096}},c.onloadend=function(){if(r<t.size)c.readAsArrayBuffer(t.slice(r,r+4096));else{a.channel.send(JSON.stringify({status:"done"})),a.sendingFileQueue.shift(),a._sendFile()}},c.readAsArrayBuffer(t.slice(r,r+4096))}},this.channel=n.createDataChannel(t),n.addEventListener("datachannel",(function(e){e.channel.label===t&&(a.channel=e.channel)})),this.channel.onmessage=function(e){return a.fileMessage(e.data)}},G=function(e){Object(Q.a)(t,e);var n=Object(q.a)(t);function t(e){var a;Object(M.a)(this,t),(a=n.call(this,e)).fileChannel=void 0,a.onFile=function(e,n){},a.onFileProgress=function(e){},a.onRequestFile=function(e){},a._onMessage=function(e){var n=d(e.data);if(n&&"sendFile"===n.action){var t=a.onRequestFile(n.id);t&&a.sendFile(t,n.id)}else a.onMessage(e.data)},a.sendFile=function(e,n){return a.fileChannel.sendFile(e,n)},a.requestFile=function(e){a.sendJSON({action:"sendFile",id:e})};var i=new U(a.connection,"file");return a.fileChannel=i,i.onFileReady=function(e,n){return a.onFile(e,n)},i.onFileProgress=function(e){return a.onFileProgress(e)},a.messageChannel.onmessage=a._onMessage,a}return t}(P),V=t(36);t(62);V.initializeApp({apiKey:"AIzaSyCOmcLQTAhqWDbXZTfhzU0CIOFQj5BjbFE",authDomain:"file-share-6b78c.firebaseapp.com",databaseURL:"https://file-share-6b78c.firebaseio.com",projectId:"file-share-6b78c",storageBucket:"file-share-6b78c.appspot.com",messagingSenderId:"1009616620358"});var Z=V,W=function e(){var n=this;Object(M.a)(this,e),this.connections=void 0,this.doc=function(e){return n.connections.doc(e)},this.add=function(e){return n.connections.add(e)},this.getOffer=function(){var e=Object(j.a)(N.a.mark((function e(t){var a,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.doc(t).get();case 2:if(a=e.sent,!(i=a.data())){e.next=6;break}return e.abrupt("return",i.offer);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.sendOffer=function(e){return n.add({offer:e}).then((function(e){return e.id}))},this.getAnswer=function(e){return new Promise((function(t){var a=n.doc(e).onSnapshot((function(e){var n=e.data();n&&n.answer&&(t(n.answer),a())}))}))},this.sendAnswer=function(e,t){return n.doc(e).set({answer:t},{merge:!0})},this.connections=Z.firestore().collection("connections")},K=t(46),$=t.n(K),X=function(){return i.a.createElement("span",{className:$.a.spinner})},Y=Object(c.b)(null,{addConnection:function(e){return{type:"SET_CONNECTION",payload:{isHost:!0,connection:e}}},addFiles:h,clearFiles:function(){return{type:"HOST_CLEAR_FILES"}}})((function(e){var n=e.addConnection,t=e.addFiles,r=e.clearFiles,o=Object(C.f)(),c=Object(a.useState)(!1),s=Object(k.a)(c,2),l=s[0],u=s[1],d=function(){var e=Object(j.a)(N.a.mark((function e(a){var i,c,s,l,d;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new G,n(i),r(),t(a),c=new W,u(!0),e.next=8,i.createOffer();case 8:return s=e.sent,e.next=11,c.sendOffer(s);case 11:return l=e.sent,o.push("/".concat(l)),e.next=15,c.getAnswer(l);case 15:d=e.sent,i.connect(d);case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{className:T.a.container},i.a.createElement("h1",{className:T.a.heading},"Share files easily"),i.a.createElement("p",{className:T.a.lead},"Drop files here or click to select"),i.a.createElement(R,{onFileInput:d})),i.a.createElement(H,{active:l},i.a.createElement("div",{className:T.a.backdrop},i.a.createElement("div",{className:T.a.spinnerContainer},i.a.createElement(X,null)))))})),ee=t(19),ne=t.n(ee),te=t(22),ae=t.n(te),ie=function(e){var n=e.text,t=Object(a.useRef)(null);return i.a.createElement("div",{className:ae.a.inputGroup},i.a.createElement("input",{ref:t,className:ae.a.input,readOnly:!0,value:n,onFocus:function(e){return e.target.select()},autoFocus:!0}),i.a.createElement("button",{className:ae.a.btn,onClick:function(){var e;if(!navigator.clipboard)return null===(e=t.current)||void 0===e?void 0:e.focus();navigator.clipboard.writeText(n)}},i.a.createElement("svg",{className:ae.a.icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#copy"}))))},re=t(48),oe=t.n(re),ce=t(13),se=t.n(ce),le=function(e){var n=e.name,t=e.id,a=e.onClick,r=e.progress,o=e.iconOnHover,c=n.match(/(?<=\.)[a-zA-Z0-9]+$/)||[""],s=function(e){e=e.toLowerCase();var n={"file-text":["txt","doc","docx","rtf","odt"],"file-image":["psd","tiff","tif","bmp","jpeg","jpg","gif","png","ico","webp","svg","eps","ai","heic","nef","crw","arw"],"file-audio":["ac3","aif","amr","aud","mp3","flac","iff","m4a","m4b","m4p","mid","mpa","ogg","wav","wave"],"file-video":["mp4","avi","mpg","mov","wmv","3gp","flv","m4v","mts","ts","webm"],"file-zip":["zip","rar","7z","jar","gz"]};for(var t in n)if(n[t].includes(e))return t;return"file-empty"}(Object(k.a)(c,1)[0]);return i.a.createElement("button",{className:se.a.card,onClick:function(){return a&&a(t)}},i.a.createElement("div",{className:se.a.card_iconContainer},i.a.createElement("svg",{className:se.a.card__icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#".concat(s)})),i.a.createElement("svg",{className:se.a.card__icon_hover,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#".concat(o)}))),i.a.createElement("p",{className:se.a.card__title,title:n},n),i.a.createElement("progress",{value:null!==r&&void 0!==r?r:0,max:100,className:se.a.card__progress}))},ue=function(e){var n=e.files,t=e.onFileClick,a=e.appendComponent,r=e.iconOnHover;return i.a.createElement("ul",{className:oe.a.list},n.map((function(e){var n=e.id,a=e.name,o=e.progress;return i.a.createElement("li",{key:n},i.a.createElement(le,{name:a,id:n,onClick:t,progress:o,iconOnHover:r}))})),a?i.a.createElement("li",null,a):null)},de=t(30),fe=t.n(de),me=function(e){var n=e.main,t=e.lead;return i.a.createElement("header",{className:fe.a.header},i.a.createElement("h2",{className:fe.a.header__heading},n),i.a.createElement("p",{className:fe.a.header__lead},t))},pe=t(31),_e=t.n(pe),he=function(e){var n=e.onFileInput;return i.a.createElement("label",{className:_e.a.addFiles},i.a.createElement("svg",{className:_e.a.icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#file-add"})),i.a.createElement("span",{className:_e.a.addFiles__caption},"Add Files"),i.a.createElement("input",{type:"file",className:"visually-hidden",multiple:!0,onChange:function(e){var t=e.target.files;return t&&n(Array.from(t))}}))},ve=X,ge=i.a.createElement(i.a.Fragment,null,"waiting for connection",i.a.createElement("span",{className:ne.a.spinner},i.a.createElement(ve,null))),Ee=function(e){var n=e.files,t=e.addFiles,a=e.removeFile,r=e.connectionStatus,o="connected"===r?"Files can be downloaded now":"Share this link",c="connected"===r?"don't close the tab until files are downloaded":ge;return i.a.createElement(i.a.Fragment,null,i.a.createElement(me,{main:o,lead:c}),i.a.createElement("div",{className:ne.a.connectionBox},"connected"!==r?i.a.createElement(ie,{text:window.location.href}):i.a.createElement("div",{className:ne.a.connectionStatus},"Connected")),i.a.createElement("main",{className:ne.a.container},i.a.createElement("h2",{className:ne.a.heading},"Files"),i.a.createElement(ue,{files:n,appendComponent:i.a.createElement(he,{onFileInput:t}),onFileClick:a,iconOnHover:"file-delete"})),i.a.createElement(R,{onFileInput:t,noFocus:!0}))},Fe=Object(c.b)((function(e){return{files:e.hostFiles,connectionStatus:e.connection.status}}),{addFiles:h,removeFile:function(e){return{type:"HOST_REMOVE_FILE",payload:{id:e}}},setConnectionStatus:_})((function(e){var n=e.connection,t=e.files,r=e.addFiles,o=e.removeFile,c=e.connectionStatus,s=e.setConnectionStatus;Object(a.useEffect)((function(){n.onRequestFile=function(e){return t[e]},n.onConnection=function(e){s(e),"connected"===e&&n.sendJSON({action:"addFiles",files:m(t)})}}),[n,t,s]);var l=Object(a.useCallback)((function(e){var t=r(e).payload;n.sendJSON({action:"addFiles",files:m(t)})}),[n,r]),u=Object(a.useCallback)((function(e){o(e),n.sendJSON({action:"removeFile",id:e})}),[n,o]),d=Object.keys(t).map((function(e){return{id:e,name:t[e].name}}));return i.a.createElement(Ee,{addFiles:l,files:d,removeFile:u,connectionStatus:c})})),be=t(14),Oe=t.n(be),we=function(e){var n=e.files,t=e.requestFile,a=e.connectionStatus,r="connected"===a?"click on file to start download":"connecting";return i.a.createElement(i.a.Fragment,null,i.a.createElement(me,{main:"Download files",lead:r}),i.a.createElement("div",{className:Oe.a.connectionBox},"connected"!==a?i.a.createElement("div",{className:Oe.a.spinner},i.a.createElement(ve,null)):i.a.createElement("div",{className:Oe.a.connectionStatus},"You are connected")),i.a.createElement("main",{className:Oe.a.container},i.a.createElement("h2",{className:Oe.a.heading},"Files"),Object.keys(n).length?i.a.createElement(ue,{files:n,onFileClick:t,iconOnHover:"file-download"}):i.a.createElement("h3",{className:Oe.a.noFiles},"There's no files yet :(")))},Se=Object(c.b)((function(e){return{files:e.clientFiles,connectionStatus:e.connection.status}}),{addFiles:function(e){return{type:"CLIENT_ADD_FILES",payload:e}},removeFile:function(e){return{type:"CLIENT_REMOVE_FILE",payload:{id:e}}},setDownloadProgress:function(e,n){return{type:"SET_DOWNLOAD_PROGRESS",payload:{id:e,downloadedSize:n}}},saveFileData:function(e,n){return{type:"SAVE_FILE_DATA",payload:{id:e,file:n}}},setConnectionStatus:_})((function(e){var n=e.connection,t=e.connectionStatus,r=e.files,o=e.addFiles,c=e.removeFile,s=e.setDownloadProgress,l=e.saveFileData,u=e.setConnectionStatus;Object(a.useEffect)((function(){n.onMessage=function(e){var n=d(e);if(n)switch(n.action){case"addFiles":return o(n.files);case"removeFile":return c(n.id)}},n.onFileProgress=function(e){var n=e.downloaded,t=e.id;s(t,n)},n.onConnection=u}),[n,o,c,s,u]),Object(a.useEffect)((function(){n.onFile=function(e,n){l(n.id,e),p(e,n.name)}}),[n,l]);var f=Object(a.useCallback)((function(e){var t=r[e];if(t.file)return p(t.file,t.name);t.downloadedSize||(s(e,1),n.requestFile(e))}),[n,r,s]),m=Object.keys(r).map((function(e){var n=r[e],t={id:e,name:n.name};return n.downloadedSize&&(t.progress=n.downloadedSize/n.size*100),t}));return i.a.createElement(we,{files:m,requestFile:f,connectionStatus:t})})),Ce=Object(c.b)((function(e){return{isHost:e.connection.isHost,connection:e.connection.connection}}),{clientSetConnection:function(e){return{type:"SET_CONNECTION",payload:{isHost:!1,connection:e}}}})((function(e){var n=e.isHost,t=e.connection,a=e.clientSetConnection,r=Object(C.f)(),o=Object(C.g)().id;if(t)return n?i.a.createElement(Fe,{connection:t}):i.a.createElement(Se,{connection:t});if(n||!o)return r.replace("/"),i.a.createElement(i.a.Fragment,null);var c=new G,s=new W;return a(c),s.getOffer(o).then((function(e){if(!e)throw new Error("Can't get offer");return c.connect(e)})).then((function(e){return s.sendAnswer(o,e)})).catch((function(){r.replace("/")})),i.a.createElement("div",null,"Loading...")}));var ye=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(S.a,null,i.a.createElement(C.c,null,i.a.createElement(C.a,{path:"/:id"},i.a.createElement(Ce,null)),i.a.createElement(C.a,{path:"/"},i.a.createElement(Y,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c.a,{store:w},i.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.6edd6a25.chunk.js.map