(this["webpackJsonpfile-share"]=this["webpackJsonpfile-share"]||[]).push([[0],{13:function(e,n,t){e.exports={card:"FileCard_card__2LQTx",card_iconContainer:"FileCard_card_iconContainer__1stON",card__icon:"FileCard_card__icon__3au0f",card__icon_hover:"FileCard_card__icon_hover__1ZfZb",card__title:"FileCard_card__title__3F9SZ",card__progress:"FileCard_card__progress__13gjT"}},14:function(e,n,t){e.exports={heading:"ShareClient_heading__VAHtz",connectionBox:"ShareClient_connectionBox__1kudq",container:"ShareClient_container__22l9m",spinner:"ShareClient_spinner__1DKly",connectionStatus:"ShareClient_connectionStatus__zdiMK",noFiles:"ShareClient_noFiles__1diTg"}},18:function(e,n,t){e.exports={container:"Home_container__q5gBo",heading:"Home_heading__3rzF0",lead:"Home_lead__27OI1",backdrop:"Home_backdrop__1n7Oa",spinnerContainer:"Home_spinnerContainer__3Cqik"}},19:function(e,n,t){e.exports={heading:"ShareHost_heading__3e1Cg",connectionBox:"ShareHost_connectionBox__2Ibxu",container:"ShareHost_container__3R05H",spinner:"ShareHost_spinner__3zaTs",connectionStatus:"ShareHost_connectionStatus__32Sgu"}},22:function(e,n,t){e.exports={inputGroup:"InputToClipboard_inputGroup__1K_jF",input:"InputToClipboard_input__aZxeq",btn:"InputToClipboard_btn__13k-2",icon:"InputToClipboard_icon__xv5Og"}},31:function(e,n,t){e.exports={header:"Header_header__Q76hA",header__heading:"Header_header__heading__BlGzf",header__lead:"Header_header__lead__1jR8H"}},32:function(e,n,t){e.exports={addFiles:"AddFileCard_addFiles__1Cp53",icon:"AddFileCard_icon__2tDcj"}},36:function(e,n,t){e.exports={backdrop:"Backdrop_backdrop__2USgN",backdrop_active:"Backdrop_backdrop_active__Esi8Q"}},45:function(e,n,t){e.exports={input:"FileInput_input__3v6pL"}},46:function(e,n,t){e.exports={spinner:"Spinner_spinner__3GSHq",rotate:"Spinner_rotate__2wN5u"}},48:function(e,n,t){e.exports={list:"FileList_list__3k0mc"}},51:function(e,n,t){e.exports=t(67)},60:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(25),o=t.n(r),c=t(6),s=t(17),l=t(8),u=function(e){return Array.isArray(e)?e.join(" "):Object.keys(e).filter((function(n){return e[n]})).join(" ")},d=function(e){try{return JSON.parse(e)}catch(n){return null}},f=function(e,n){var t={};for(var a in e)t[a]=n(e[a],a,e);return t},m=function(e){return f(e,(function(e){return{name:e.name,size:e.size}}))},h=function(e,n){var t=document.createElement("a");t.href=URL.createObjectURL(e),document.body.appendChild(t),t.download=n,t.click(),window.URL.revokeObjectURL(t.href),t.remove()},p=function(e){return e.filter((function(e){var n=e.size,t=e.name,a=e.type;return 0!==n&&(!t.match(/lnk$/)&&(""!==a||4096!==n))}))},v=function(){var e=!1;return function(n){e||(e=!0,n())}},_=function(e){return{type:"SET_CONNECTION_STATUS",payload:{status:e}}},g=function(e){var n={};return e.forEach((function(e){return n[function(e){return"".concat(e.lastModified).concat(e.size).concat(e.name)}(e)]=e})),{type:"HOST_ADD_FILES",payload:n}},E={isHost:!1,status:"new"},b=t(29),F=t(30),w={},O={},S=Object(s.b)({connection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CONNECTION":return e.connection&&e.connection.destroy(),Object(l.a)({},e,{},n.payload,{status:"new"});case"SET_CONNECTION_STATUS":return Object(l.a)({},e,{},n.payload)}return e},hostFiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"HOST_ADD_FILES":return Object(l.a)({},e,{},n.payload);case"HOST_REMOVE_FILE":var t=n.payload.id,a=(e[t],Object(b.a)(e,[t].map(F.a)));return a;case"HOST_CLEAR_FILES":return{}}return e},clientFiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CLIENT_ADD_FILES":return Object(l.a)({},e,{},n.payload);case"CLIENT_REMOVE_FILE":var t=n.payload.id,a=(e[t],Object(b.a)(e,[t].map(F.a)));return a;case"SET_DOWNLOAD_PROGRESS":var i=Object(l.a)({},e);return i[n.payload.id].downloadedSize=n.payload.downloadedSize,i;case"SAVE_FILE_DATA":var r=Object(l.a)({},e);return r[n.payload.id].file=n.payload.file,r}return e}}),C=Object(s.c)(S),y=(t(60),t(15)),N=t(10),j=t(3),k=t.n(j),x=t(12),L=t(28),T=t(18),A=t.n(T),D=t(45),I=t.n(D),z=t(21),H=t(36),R=t.n(H),M=function(e){var n,t=e.children,a=e.active,r=void 0===a||a,o=(n={},Object(z.a)(n,R.a.backdrop,!0),Object(z.a)(n,R.a.backdrop_active,r),n);return i.a.createElement("div",{className:u(o)},t)},B=function(e){var n=e.onFileInput,t=e.noFocus,r=Object(a.useState)(!1),o=Object(L.a)(r,2),c=o[0],s=o[1],l=Object(a.useRef)(null),u=Object(a.useCallback)((function(e){var t=p(e);t.length&&n(t)}),[n]),d=Object(a.useCallback)((function(e){e.preventDefault(),s(!1);var n=e.dataTransfer.files;n&&u(Array.from(n))}),[u]),f=Object(a.useCallback)((function(e){var n=e.target.files;n&&u(Array.from(n))}),[u]);return Object(a.useEffect)((function(){var e=function(){return s(!0)},n=function(e){e.target===l.current&&s(!1)};return window.addEventListener("dragenter",e),window.addEventListener("dragleave",n),function(){window.removeEventListener("dragenter",e),window.removeEventListener("dragleave",n)}}),[]),i.a.createElement(M,{active:c},i.a.createElement("div",{ref:l,className:I.a.input,onDragOver:function(e){return e.preventDefault()},onDrop:d},i.a.createElement("input",{type:"file",name:"files",className:"visually-hidden",multiple:!0,onChange:f,tabIndex:t?-1:0})))},J=t(9),P=t(27),q={iceServers:[{urls:["stun:stun.l.google.com:19302"]},{urls:["stun:stun1.l.google.com:19302"]},{urls:["stun:stun2.l.google.com:19302"]},{urls:["stun:stun3.l.google.com:19302"]},{urls:["stun:stun4.l.google.com:19302"]},{urls:["stun:stun.voipstunt.com"]}]},Q=function(){function e(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;Object(J.a)(this,e),this.connection=void 0,this.messageChannel=void 0,this.onConnection=function(e){},this.onMessage=function(e){},this.destroy=function(){n.connection.ondatachannel=null,n.connection.removeEventListener("iceconnectionstatechange",n._handleIceconnectionstatechange)},this._handleDataChannel=function(e){var t=e.channel;"message"===t.label&&(n.messageChannel=t)},this._handleIceconnectionstatechange=function(){return n.onConnection(n.connection.iceConnectionState)},this.createOffer=function(){var e=n.connection;return new Promise(function(){var t=Object(x.a)(k.a.mark((function t(a){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.onicecandidate=function(e){return!e.candidate&&a(n.description)},t.t0=e,t.next=4,e.createOffer();case 4:return t.t1=t.sent,t.next=7,t.t0.setLocalDescription.call(t.t0,t.t1);case 7:setTimeout((function(){"complete"!==e.iceGatheringState&&a(n.description)}),2e3);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},this.connect=function(e){var t=n.connection,a=new RTCSessionDescription(JSON.parse(e));return new Promise(function(){var e=Object(x.a)(k.a.mark((function e(i){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setRemoteDescription(a);case 2:if("offer"===a.type){e.next=4;break}return e.abrupt("return",i());case 4:return t.onicecandidate=function(e){return!e.candidate&&i(n.description)},e.t0=t,e.next=8,t.createAnswer();case 8:return e.t1=e.sent,e.next=11,e.t0.setLocalDescription.call(e.t0,e.t1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},this.sendMessage=function(e){var t=n.messageChannel;if("open"===t.readyState)return t.send(e);setTimeout((function(){return n.sendMessage(e)}),50)},this.sendJSON=function(e){n.sendMessage(JSON.stringify(e))};var a=new RTCPeerConnection(t);this.connection=a;var i=a.createDataChannel("message");this.messageChannel=i,i.onmessage=function(e){return n.onMessage(e.data)},a.ondatachannel=function(e){return n._handleDataChannel(e)},a.addEventListener("iceconnectionstatechange",this._handleIceconnectionstatechange)}return Object(P.a)(e,[{key:"description",get:function(){return JSON.stringify(this.connection.localDescription)}}]),e}(),U=t(49),G=t(50),V=function(){function e(n){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16384;Object(J.a)(this,e),this.channel=void 0,this.chunkSize=void 0,this.file=void 0,this.onFileReady=function(e,n){},this.onFileProgress=function(e){},this.onMessage=function(e){if("string"!==typeof e)return t.onData(e);var n=JSON.parse(e),a=n.status,i=n.info,r=t.file;"new"===a&&i?t.onNewFile(i):"done"===a&&r&&t.onFileDownloaded(r.data,r.info)},this.onData=function(e){var n=t.file;if(n){n.data.push(e);var a=n.info,i=a.id,r=a.size,o=n.downloaded+=e.byteLength;t.onFileProgress({size:r,id:i,downloaded:o})}},this.onNewFile=function(e){t.file={data:[],downloaded:0,info:e}},this.onFileDownloaded=function(e,n){var a=new Blob(e);t.onFileReady(a,n),t.file=void 0},this.sendingQueue=[],this.sendFile=function(e,n){var a=t.sendingQueue;!!a.find((function(e){return e.id===n}))||(a.push({file:e,id:n}),1===a.length&&t._sendFileRef())},this._sendFile=function(){if(t.sendingQueue.length){var e=t.sendingQueue[0],n=e.file,a=e.id,i=t.chunkSize,r=t.channel,o=0,c=new FileReader,s=[],l=t.sendChunks(s,n.size),u=i,d=Math.max(8*i,1048576);t.channel.bufferedAmountLowThreshold=u;var f=!1,m=function e(){if(!f){f=!0;var n=r.bufferedAmount;if(s.length){for(var a={done:!1,value:0};!a.done;)if((n+=(a=l.next()).value||0)>=d)return r.bufferedAmount<u&&setTimeout(e,0),void(f=!1);t.doneSendingFile()}}},h=!1;c.onload=function(){c.result&&"string"!==typeof c.result&&(h||(h=!0,t.startSendingFile(a,n.name,n.size)),s.push(c.result),o+=i)},c.onloadend=function(){o<n.size?c.readAsArrayBuffer(n.slice(o,o+i)):m()},c.readAsArrayBuffer(n.slice(0,i)),t.channel.onbufferedamountlow=m}},this._sendFileRef=function(){if(t.sendingQueue.length){var e=t.sendingQueue[0],n=e.file,a=e.id,i=v(),r=function(){return t.startSendingFile(a,n.name,n.size)};t.readFileChunks(n,{onChunkLoad:function(e){i(r)},onLoaded:function(e){var a=t.sendData(e,n.size);a(),t.channel.onbufferedamountlow=a}})}},this.readFileChunks=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.chunkSize,i=[],r=0,o=new FileReader,c=n.onChunkLoad,s=void 0===c?function(){}:c,l=n.onLoaded,u=void 0===l?function(){}:l;return o.onload=function(){o.result&&"string"!==typeof o.result&&(i.push(o.result),r+=a,s(o.result))},o.onloadend=function(){r<e.size?o.readAsArrayBuffer(e.slice(r,r+a)):u(i)},o.readAsArrayBuffer(e.slice(0,a)),i},this.sendData=function(e,n){var a=Math.max(8*t.chunkSize,1048576),i=!1,r=t.sendChunks(e,n);return function n(){if(!i){i=!0;var o=t.channel.bufferedAmount;if(e.length){var c;do{if((o+=(c=r.next()).value||0)>=a)return t.channel.bufferedAmount<t.chunkSize&&setTimeout(n,0),void(i=!1)}while(!c.done);t.doneSendingFile()}}}},this.startSendingFile=function(e,n,a){var i={status:"new",info:{id:e,name:n,size:a}};t.channel.send(JSON.stringify(i))},this.doneSendingFile=function(){t.channel.onbufferedamountlow=null,t.channel.send(JSON.stringify({status:"done"})),t.sendingQueue.shift(),t._sendFile()},this.channel=n,this.chunkSize=a}return Object(P.a)(e,[{key:"sendChunks",value:k.a.mark((function e(n,t){var a,i,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0,i=0;case 2:if(!(a<t)){e.next=10;break}return r=n[i++],this.channel.send(r),a+=r.byteLength,e.next=8,r.byteLength;case 8:e.next=2;break;case 10:case"end":return e.stop()}}),e,this)}))}]),e}(),Z=function(e){Object(G.a)(t,e);var n=Object(U.a)(t);function t(e){var a,i;Object(J.a)(this,t),(i=n.call(this,e)).fileChannel=void 0,i.onFile=function(e,n){},i.onFileProgress=function(e){},i.onRequestFile=function(e){},i._handleDataChannel=function(e){var n=e.channel;"message"===n.label&&(i.messageChannel=n),"file"===n.label&&(i.fileChannel.channel=n)},i._onMessage=function(e){var n=d(e.data);if(n&&"sendFile"===n.action){var t=i.onRequestFile(n.id);t&&i.sendFile(t,n.id)}else i.onMessage(e.data)},i.sendFile=function(e,n){return i.fileChannel.sendFile(e,n)},i.requestFile=function(e){i.sendJSON({action:"sendFile",id:e})};var r=i.connection.createDataChannel("file"),o=new V(r,null===(a=i.connection.sctp)||void 0===a?void 0:a.maxMessageSize);return i.fileChannel=o,r.onmessage=function(e){var n=e.data;return o.onMessage(n)},o.onFileReady=function(e,n){return i.onFile(e,n)},o.onFileProgress=function(e){return i.onFileProgress(e)},i.messageChannel.onmessage=i._onMessage,i}return t}(Q),K=t(37);t(62);K.initializeApp({apiKey:"AIzaSyCOmcLQTAhqWDbXZTfhzU0CIOFQj5BjbFE",authDomain:"file-share-6b78c.firebaseapp.com",databaseURL:"https://file-share-6b78c.firebaseio.com",projectId:"file-share-6b78c",storageBucket:"file-share-6b78c.appspot.com",messagingSenderId:"1009616620358"});var W=K,$=function e(){var n=this;Object(J.a)(this,e),this.connections=void 0,this.doc=function(e){return n.connections.doc(e)},this.add=function(e){return n.connections.add(e)},this.getOffer=function(){var e=Object(x.a)(k.a.mark((function e(t){var a,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.doc(t).get();case 2:if(a=e.sent,!(i=a.data())){e.next=6;break}return e.abrupt("return",i.offer);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.sendOffer=function(e){return n.add({offer:e}).then((function(e){return e.id}))},this.getAnswer=function(e){return new Promise((function(t){var a=n.doc(e).onSnapshot((function(e){var n=e.data();n&&n.answer&&(t(n.answer),a())}))}))},this.sendAnswer=function(e,t){return n.doc(e).set({answer:t},{merge:!0})},this.connections=W.firestore().collection("connections")},X=t(46),Y=t.n(X),ee=function(){return i.a.createElement("span",{className:Y.a.spinner})},ne=Object(c.b)(null,{addConnection:function(e){return{type:"SET_CONNECTION",payload:{isHost:!0,connection:e}}},addFiles:g,clearFiles:function(){return{type:"HOST_CLEAR_FILES"}}})((function(e){var n=e.addConnection,t=e.addFiles,r=e.clearFiles,o=Object(N.f)(),c=Object(a.useState)(!1),s=Object(L.a)(c,2),l=s[0],u=s[1],d=function(){var e=Object(x.a)(k.a.mark((function e(a){var i,c,s,l,d;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new Z,n(i),r(),t(a),c=new $,u(!0),e.next=8,i.createOffer();case 8:return s=e.sent,e.next=11,c.sendOffer(s);case 11:return l=e.sent,o.push("/".concat(l)),e.next=15,c.getAnswer(l);case 15:d=e.sent,i.connect(d);case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{className:A.a.container},i.a.createElement("h1",{className:A.a.heading},"Share files easily"),i.a.createElement("p",{className:A.a.lead},"Drop files here or click to select"),i.a.createElement(B,{onFileInput:d})),i.a.createElement(M,{active:l},i.a.createElement("div",{className:A.a.backdrop},i.a.createElement("div",{className:A.a.spinnerContainer},i.a.createElement(ee,null)))))})),te=t(19),ae=t.n(te),ie=t(22),re=t.n(ie),oe=function(e){var n=e.text,t=Object(a.useRef)(null);return i.a.createElement("div",{className:re.a.inputGroup},i.a.createElement("input",{ref:t,className:re.a.input,readOnly:!0,value:n,onFocus:function(e){return e.target.select()},autoFocus:!0}),i.a.createElement("button",{className:re.a.btn,onClick:function(){var e;if(!navigator.clipboard)return null===(e=t.current)||void 0===e?void 0:e.focus();navigator.clipboard.writeText(n)}},i.a.createElement("svg",{className:re.a.icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#copy"}))))},ce=t(48),se=t.n(ce),le=t(13),ue=t.n(le),de=function(e){var n=e.name,t=e.id,a=e.onClick,r=e.progress,o=e.iconOnHover,c=n.match(/\.([a-zA-Z0-9])+$/),s=function(e){e=e.toLowerCase();var n={"file-text":["txt","doc","docx","rtf","odt"],"file-image":["psd","tiff","tif","bmp","jpeg","jpg","gif","png","ico","webp","svg","eps","ai","heic","nef","crw","arw"],"file-audio":["ac3","aif","amr","aud","mp3","flac","iff","m4a","m4b","m4p","mid","mpa","ogg","wav","wave"],"file-video":["mp4","avi","mpg","mov","wmv","3gp","flv","m4v","mts","ts","webm"],"file-zip":["zip","rar","7z","jar","gz"]};for(var t in n)if(n[t].includes(e))return t;return"file-empty"}(c?c[1]:"");return i.a.createElement("button",{className:ue.a.card,onClick:function(){return a&&a(t)}},i.a.createElement("div",{className:ue.a.card_iconContainer},i.a.createElement("svg",{className:ue.a.card__icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#".concat(s)})),i.a.createElement("svg",{className:ue.a.card__icon_hover,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#".concat(o)}))),i.a.createElement("p",{className:ue.a.card__title,title:n},n),i.a.createElement("progress",{value:null!==r&&void 0!==r?r:0,max:100,className:ue.a.card__progress}))},fe=function(e){var n=e.files,t=e.onFileClick,a=e.appendComponent,r=e.iconOnHover;return i.a.createElement("ul",{className:se.a.list},n.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(de,Object.assign({},e,{onClick:t,iconOnHover:r})))})),a?i.a.createElement("li",null,a):null)},me=t(31),he=t.n(me),pe=function(e){var n=e.main,t=e.lead;return i.a.createElement("header",{className:he.a.header},i.a.createElement("h2",{className:he.a.header__heading},n),i.a.createElement("p",{className:he.a.header__lead},t))},ve=t(32),_e=t.n(ve),ge=function(e){var n=e.onFileInput,t=Object(a.useCallback)((function(e){var t=p(Array.from(e.target.files||[]));t.length&&n(t)}),[n]);return i.a.createElement("label",{className:_e.a.addFiles},i.a.createElement("svg",{className:_e.a.icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#file-add"})),i.a.createElement("span",{className:_e.a.addFiles__caption},"Add Files"),i.a.createElement("input",{type:"file",className:"visually-hidden",multiple:!0,onChange:t}))},Ee=ee,be=i.a.createElement(i.a.Fragment,null,"waiting for connection",i.a.createElement("span",{className:ae.a.spinner},i.a.createElement(Ee,null))),Fe=function(e){var n=e.files,t=e.addFiles,a=e.removeFile,r="connected"===e.connectionStatus,o=r?"Files can be downloaded now":"Share this link",c=r?"don't close the tab until files are downloaded":be;return i.a.createElement(i.a.Fragment,null,i.a.createElement(pe,{main:o,lead:c}),i.a.createElement("div",{className:ae.a.connectionBox},r?i.a.createElement("div",{className:ae.a.connectionStatus},"Connected"):i.a.createElement(oe,{text:window.location.href})),i.a.createElement("main",{className:ae.a.container},i.a.createElement("h2",{className:ae.a.heading},"Files"),i.a.createElement(fe,{files:n,appendComponent:i.a.createElement(ge,{onFileInput:t}),onFileClick:a,iconOnHover:"file-delete"})),i.a.createElement(B,{onFileInput:t,noFocus:!0}))},we=Object(c.b)((function(e){return{files:e.hostFiles,connectionStatus:e.connection.status}}),{addFiles:g,removeFile:function(e){return{type:"HOST_REMOVE_FILE",payload:{id:e}}},setConnectionStatus:_})((function(e){var n=e.connection,t=e.files,r=e.addFiles,o=e.removeFile,c=e.connectionStatus,s=e.setConnectionStatus,l=Object(N.f)();Object(a.useEffect)((function(){n.onRequestFile=function(e){return t[e]},n.onConnection=function(e){if(s(e),"disconnected"===e)return l.push("/");"connected"===e&&n.sendJSON({action:"addFiles",files:m(t)})}}),[n,t,s,l]);var u=Object(a.useCallback)((function(e){var t=r(e).payload;n.sendJSON({action:"addFiles",files:m(t)})}),[n,r]),d=Object(a.useCallback)((function(e){o(e),n.sendJSON({action:"removeFile",id:e})}),[n,o]),f=Object.keys(t).map((function(e){return{id:e,name:t[e].name}}));return i.a.createElement(Fe,{addFiles:u,files:f,removeFile:d,connectionStatus:c})})),Oe=t(14),Se=t.n(Oe),Ce=i.a.createElement("div",{className:Se.a.spinner},i.a.createElement(Ee,null)),ye=function(e){var n=e.files,t=e.requestFile,a="connected"===e.connectionStatus,r=a?"click on file to start download":"connecting",o=a?i.a.createElement("div",{className:Se.a.connectionStatus},"You are connected"):Ce;return i.a.createElement(i.a.Fragment,null,i.a.createElement(pe,{main:"Download files",lead:r}),i.a.createElement("div",{className:Se.a.connectionBox},o),i.a.createElement("main",{className:Se.a.container},i.a.createElement("h2",{className:Se.a.heading},"Files"),Object.keys(n).length?i.a.createElement(fe,{files:n,onFileClick:t,iconOnHover:"file-download"}):i.a.createElement("h3",{className:Se.a.noFiles},"There's no files yet :(")))},Ne=Object(c.b)((function(e){return{files:e.clientFiles,connectionStatus:e.connection.status}}),{addFiles:function(e){return{type:"CLIENT_ADD_FILES",payload:e}},removeFile:function(e){return{type:"CLIENT_REMOVE_FILE",payload:{id:e}}},setDownloadProgress:function(e,n){return{type:"SET_DOWNLOAD_PROGRESS",payload:{id:e,downloadedSize:n}}},saveFileData:function(e,n){return{type:"SAVE_FILE_DATA",payload:{id:e,file:n}}},setConnectionStatus:_})((function(e){var n=e.connection,t=e.connectionStatus,r=e.files,o=e.addFiles,c=e.removeFile,s=e.setDownloadProgress,l=e.saveFileData,u=e.setConnectionStatus,f=Object(N.f)();Object(a.useEffect)((function(){n.onMessage=function(e){var n=d(e);if(n)switch(n.action){case"addFiles":return o(n.files);case"removeFile":return c(n.id)}}}),[n,o,c]),Object(a.useEffect)((function(){n.onFileProgress=function(e){var n=e.downloaded,t=e.id;return s(t,n)},n.onConnection=function(e){u(e),"disconnected"===e&&f.push("/")}}),[n,s,u,f]),Object(a.useEffect)((function(){n.onFile=function(e,n){l(n.id,e),h(e,n.name)}}),[n,l]),Object(a.useEffect)((function(){var e=function(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none")},n=function(e){return e.preventDefault()};return window.addEventListener("dragover",e),window.addEventListener("drop",n),function(){window.removeEventListener("dragover",e),window.removeEventListener("drop",n)}}),[]);var m=Object(a.useCallback)((function(e){var t=r[e];if(t.file)return h(t.file,t.name);t.downloadedSize||(s(e,1),n.requestFile(e))}),[n,r,s]),p=Object.keys(r).map((function(e){var n=r[e],t={id:e,name:n.name};return n.downloadedSize&&(t.progress=n.downloadedSize/n.size*100),t}));return i.a.createElement(ye,{files:p,requestFile:m,connectionStatus:t})})),je=Object(c.b)((function(e){return{isHost:e.connection.isHost,connection:e.connection.connection}}),{clientSetConnection:function(e){return{type:"SET_CONNECTION",payload:{isHost:!1,connection:e}}}})((function(e){var n=e.isHost,t=e.connection,a=e.clientSetConnection,r=Object(N.f)(),o=Object(N.g)().id;if(t)return n?i.a.createElement(we,{connection:t}):i.a.createElement(Ne,{connection:t});if(n||!o)return r.replace("/"),i.a.createElement(i.a.Fragment,null);var c=new Z,s=new $;return a(c),s.getOffer(o).then((function(e){if(!e)throw new Error("Can't get offer");return c.connect(e)})).then((function(e){return s.sendAnswer(o,e)})).catch((function(){r.replace("/")})),i.a.createElement("div",null,"Loading...")}));var ke=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(y.a,null,i.a.createElement(N.c,null,i.a.createElement(N.a,{path:"/:id"},i.a.createElement(je,null)),i.a.createElement(N.a,{path:"/"},i.a.createElement(ne,null)))))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c.a,{store:C},i.a.createElement(ke,null))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.7f2a078c.chunk.js.map