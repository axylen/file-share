(this["webpackJsonpfile-share"]=this["webpackJsonpfile-share"]||[]).push([[0],{14:function(e,n,t){e.exports={container:"Share_container__t5fhj",heading:"Share_heading__jC7_U",remoteFiles__shareInfo:"Share_remoteFiles__shareInfo__2Q8RS",remoteFiles__shareLink:"Share_remoteFiles__shareLink__AQK_A",remoteFiles__spinner:"Share_remoteFiles__spinner__3NQAG"}},15:function(e,n,t){e.exports={card:"FileCard_card__2LQTx",card_iconContainer:"FileCard_card_iconContainer__1stON",card__icon:"FileCard_card__icon__3au0f",card__icon_hover:"FileCard_card__icon_hover__1ZfZb",card__title:"FileCard_card__title__3F9SZ",card__progress:"FileCard_card__progress__13gjT"}},16:function(e,n,t){e.exports={header:"Header_header__Q76hA",container:"Header_container__1WZxG",connectionState:"Header_connectionState__359O3",connectionStatus:"Header_connectionStatus__3demK",connectionStatus_connected:"Header_connectionStatus_connected__U1iGc",disconnect:"Header_disconnect__22hgd"}},19:function(e,n,t){e.exports={container:"Home_container__1kzk4",heading:"Home_heading__3M0eX",lead:"Home_lead__3655m",backdrop:"Home_backdrop__D4awL",spinnerContainer:"Home_spinnerContainer__2apqp"}},24:function(e,n,t){e.exports={inputGroup:"InputToClipboard_inputGroup__1K_jF",input:"InputToClipboard_input__aZxeq",btn:"InputToClipboard_btn__13k-2",icon:"InputToClipboard_icon__xv5Og"}},34:function(e,n,t){e.exports={addFiles:"AddFileCard_addFiles__1Cp53",icon:"AddFileCard_icon__2tDcj"}},39:function(e,n,t){e.exports={backdrop:"Backdrop_backdrop__2USgN",backdrop_active:"Backdrop_backdrop_active__Esi8Q"}},42:function(e,n,t){e.exports={noFiles:"RemoteFiles_noFiles__3at_o",container:"RemoteFiles_container__2-4I9"}},48:function(e,n,t){e.exports={input:"FileInput_input__3v6pL"}},49:function(e,n,t){e.exports={spinner:"Spinner_spinner__3GSHq",rotate:"Spinner_rotate__2wN5u"}},51:function(e,n,t){e.exports={list:"FileList_list__3k0mc"}},52:function(e,n,t){e.exports={container:"LocalFiles_container__3-TNT"}},55:function(e,n,t){e.exports=t(71)},64:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(27),r=t.n(o),c=t(5),s=t(18),l=t(7),u=function(e){return Array.isArray(e)?e.join(" "):Object.keys(e).filter((function(n){return e[n]})).join(" ")},d=function(e){try{return JSON.parse(e)}catch(n){return null}},f=function(e,n){var t={};for(var a in e)t[a]=n(e[a],a,e);return t},m=function(e){return f(e,(function(e){var n=e.file;return{name:n.name,size:n.size}}))},p=function(e,n){var t=document.createElement("a");t.href=URL.createObjectURL(e),document.body.appendChild(t),t.download=n,t.click(),window.URL.revokeObjectURL(t.href),t.remove()},h=function(e){return e.filter((function(e){var n=e.size,t=e.name,a=e.type;return 0!==n&&(!t.match(/lnk$/)&&(""!==a||4096!==n))}))},v=function(e,n){return n?"connected":e?"hostWaiting":"clientWaiting"},_=t(23),g=function(e,n){for(var t=0,a=[];t<e.byteLength;)a.push(e.slice(t,t+n)),t+=n;return a},F=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.readChunkSize||2097152,a=n.chunkSize||16384,i=n.onChunkLoad,o=void 0===i?function(){}:i,r=n.onLoaded,c=void 0===r?function(){}:r,s=0,l=new FileReader,u=[];return l.onload=function(){l.result&&"string"!==typeof l.result&&(u.push.apply(u,Object(_.a)(g(l.result,a))),s+=t,o(l.result))},l.onloadend=function(){s<e.size?l.readAsArrayBuffer(e.slice(s,s+t)):c(u)},l.readAsArrayBuffer(e.slice(0,t)),u},E=t(53),b=t(54),S=function(e,n){return{deleted:e[n],val:Object(E.a)(e,[n].map(b.a))}};var O=function(e){var n,t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=!1,o=function o(){for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];t=c,i||(e.apply(void 0,Object(_.a)(t)),t=null,i=!0,n=setTimeout((function(){i=!1,t&&o.apply(void 0,Object(_.a)(t))}),a),setTimeout((function(){}),100))};return o.stop=function(){return clearTimeout(n)},o},w=function(e){var n={};return e.forEach((function(e){var t=function(e){return"".concat(e.lastModified).concat(e.size).concat(e.name)}(e);n[t]={file:e,sentBytes:0}})),{type:"HOST_ADD_FILES",payload:n}},C=function(e){return{type:"SET_CONNECTION_STATUS",payload:{status:e}}},y=function(e,n){return e.connection&&e.connection.destroy(),Object(l.a)({},e,{},n.payload,{status:"new"})},N={isHost:!1,status:"new"},j={},k=function(e,n){var t=Object(l.a)({},e);return t[n.payload.id].sentBytes=n.payload.sentBytes,t},T=function(e,n){var t=Object(l.a)({},e);return t[n.payload.id].downloadedSize=n.payload.downloadedSize,t},x=function(e,n){var t=Object(l.a)({},e),a=t[n.payload.id];return a.file=n.payload.file,a.downloadedSize=a.size,t},L={},D=Object(s.b)({connection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CONNECTION":return y(e,n);case"SET_CONNECTION_STATUS":return Object(l.a)({},e,{},n.payload)}return e},hostFiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"HOST_ADD_FILES":return Object(l.a)({},e,{},n.payload);case"HOST_REMOVE_FILE":return S(e,n.payload.id).val;case"HOST_CLEAR_FILES":return{};case"SET_SENT_BYTES":return k(e,n)}return e},clientFiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CLIENT_ADD_FILES":return Object(l.a)({},e,{},n.payload);case"CLIENT_REMOVE_FILE":return S(e,n.payload.id).val;case"SET_DOWNLOAD_PROGRESS":return T(e,n);case"SAVE_FILE_DATA":return x(e,n)}return e}}),I=Object(s.c)(D),A=(t(64),t(20)),z=t(11),H=t(3),R=t.n(H),M=t(13),P=t(32),B=t(9),J=t(30),Q={iceServers:[{urls:["stun:stun.l.google.com:19302"]},{urls:["stun:stun1.l.google.com:19302"]},{urls:["stun:stun2.l.google.com:19302"]},{urls:["stun:stun3.l.google.com:19302"]},{urls:["stun:stun4.l.google.com:19302"]},{urls:["stun:stun.voipstunt.com"]}]},W=function(){function e(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q;Object(B.a)(this,e),this.connection=void 0,this.messageChannel=void 0,this.onConnection=function(e){},this.onMessage=function(e){},this.destroy=function(){n.connection.ondatachannel=null,n.connection.oniceconnectionstatechange=null},this.handleDataChannel=function(e){var t=e.channel;"message"===t.label&&(n.messageChannel=t)},this.createOffer=function(){var e=n.connection;return new Promise(function(){var t=Object(M.a)(R.a.mark((function t(a){var i;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.onicecandidate=function(e){return!e.candidate&&a(n.description)},t.next=3,e.createOffer();case 3:return i=t.sent,t.next=6,e.setLocalDescription(i);case 6:setTimeout((function(){"complete"!==e.iceGatheringState&&a(n.description)}),2e3);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},this.connect=function(e){var t=n.connection,a=new RTCSessionDescription(JSON.parse(e));return new Promise(function(){var e=Object(M.a)(R.a.mark((function e(i){var o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setRemoteDescription(a);case 2:if("offer"===a.type){e.next=4;break}return e.abrupt("return",i());case 4:return t.onicecandidate=function(e){return!e.candidate&&i(n.description)},e.next=7,t.createAnswer();case 7:return o=e.sent,e.next=10,t.setLocalDescription(o);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},this.sendMessage=function(e){var t=n.messageChannel;if("open"===t.readyState)return t.send(e);setTimeout((function(){return n.sendMessage(e)}),50)},this.sendJSON=function(e){return n.sendMessage(JSON.stringify(e))},this.connection=new RTCPeerConnection(t),this.messageChannel=this.connection.createDataChannel("message"),this.messageChannel.onmessage=function(e){return n.onMessage(e.data)},this.connection.ondatachannel=function(e){return n.handleDataChannel(e)},this.connection.oniceconnectionstatechange=function(){return n.onConnection(n.connection.iceConnectionState)}}return Object(J.a)(e,[{key:"description",get:function(){return JSON.stringify(this.connection.localDescription)}}]),e}(),q=t(31),U=t(33),G=function(e){Object(U.a)(t,e);var n=Object(q.a)(t);function t(e,a){var i;Object(B.a)(this,t),(i=n.call(this,e,a)).startTime=0,i.speedStats=function(e){var n=(performance.now()-i.startTime)/1e3,t=e/1024/1024;return{time:"".concat(n.toFixed(2)," \u0441\u0435\u043a."),size:"".concat(t.toFixed(2)," \u043c\u0431"),speed:"".concat((t/n).toFixed(2)," \u043c\u0431/\u0441\u0435\u043a")}};var o=i.doneSendingFile,r=i.sendFileInfo,c=i.onNewFile,s=i.onFileDownloaded;return i.onNewFile=function(e){return i.startTime=performance.now(),c(e)},i.onFileDownloaded=function(e,n){return console.log(i.speedStats(n.size)),s(e,n)},i.sendFileInfo=function(){return i.startTime=performance.now(),r.apply(void 0,arguments)},i.doneSendingFile=function(){var e=i.sendingQueue[0];return console.log(i.speedStats((null===e||void 0===e?void 0:e.file.size)||1)),o()},i}return t}(function(){function e(n){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16384;Object(B.a)(this,e),this.channel=void 0,this.chunkSize=void 0,this.file=void 0,this.onFileReady=function(e,n){},this.onFileProgress=function(e){},this.onFileSendProgress=function(e){},this.onFileSent=function(e,n){},this.onMessage=function(e){if("string"!==typeof e)return t.onData(e);var n=JSON.parse(e),a=n.status,i=n.info,o=t.file;"new"===a&&i?t.onNewFile(i):"done"===a&&o&&t.onFileDownloaded(o.data,o.info)},this.onData=function(e){var n=t.file;if(n){n.data.push(e);var a=n.info,i=a.id,o=a.size,r=n.downloaded+=e.byteLength;t.onFileProgress({size:o,id:i,downloaded:r})}},this.onNewFile=function(e){t.file={data:[],downloaded:0,info:e}},this.onFileDownloaded=function(e,n){var a=new Blob(e);t.onFileReady(a,n),t.file=void 0},this.sendingQueue=[],this.sendFile=function(e,n){var a=t.sendingQueue;!!a.find((function(e){return e.id===n}))||(a.push({file:e,id:n}),1===a.length&&t._sendFile())},this._sendFile=function(){if(t.sendingQueue.length){var e=t.sendingQueue[0],n=e.file,a=e.id;t.sendFileInfo(a,n.name,n.size);var i=F(n,{onChunkLoad:function(){return o()},chunkSize:t.chunkSize}),o=t.sendData(i,n.size,a);t.channel.onbufferedamountlow=o}},this.sendFileInfo=function(e,n,a){var i={status:"new",info:{id:e,name:n,size:a}};t.channel.send(JSON.stringify(i))},this.doneSendingFile=function(){t.channel.onbufferedamountlow=null,t.channel.send(JSON.stringify({status:"done"}));var e=t.sendingQueue.shift();e&&t.onFileSent(e.id,e.file.size),t._sendFile()},this.sendData=function(e,n,a){var i=t.channel,o=t.chunkSize,r=Math.max(8*o,1048576),c=t.sendChunks(e,n,a),s=!1;return function n(){if(!s&&e.length){s=!0;var a,l,u=i.bufferedAmount;do{var d=c.next(),f=d.done;a=void 0!==f&&f;var m=d.value;if("noChunk"===(l=void 0===m?0:m))return void(s=!1);if((u+=l)>=r)return i.bufferedAmount<o&&setTimeout(n,0),void(s=!1)}while(!a);t.doneSendingFile()}}},this.channel=n,this.chunkSize=a}return Object(J.a)(e,[{key:"sendChunks",value:R.a.mark((function e(n,t,a){var i,o,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0,o=0;case 2:if(!(i<t)){e.next=17;break}if(!(r=n[o])){e.next=13;break}return++o,this.channel.send(r),i+=r.byteLength,this.onFileSendProgress({size:t,sent:i,id:a}),e.next=11,r.byteLength;case 11:e.next=15;break;case 13:return e.next=15,"noChunk";case 15:e.next=2;break;case 17:case"end":return e.stop()}}),e,this)}))}]),e}()),Z=function(e){Object(U.a)(t,e);var n=Object(q.a)(t);function t(e){var a,i;Object(B.a)(this,t),(i=n.call(this,e)).fileChannel=void 0,i.onFile=function(e,n){},i.onFileProgress=function(e){},i.onFileSendProgress=function(e){},i.onFileSent=function(e,n){},i.onRequestFile=function(e){},i.handleDataChannel=function(e){var n=e.channel;"message"===n.label&&(i.messageChannel=n),"file"===n.label&&(i.fileChannel.channel=n)},i._onMessage=function(e){var n=d(e.data);if(n&&"sendFile"===n.action){var t=i.onRequestFile(n.id);t&&i.sendFile(t,n.id)}else i.onMessage(e.data)},i.sendFile=function(e,n){return i.fileChannel.sendFile(e,n)},i.requestFile=function(e){return i.sendJSON({action:"sendFile",id:e})};var o=i.connection.createDataChannel("file");return i.fileChannel=new G(o,null===(a=i.connection.sctp)||void 0===a?void 0:a.maxMessageSize),i.fileChannel.onFileReady=function(e,n){return i.onFile(e,n)},i.fileChannel.onFileSent=function(e,n){return i.onFileSent(e,n)},i.fileChannel.onFileProgress=function(e){return i.onFileProgress(e)},i.fileChannel.onFileSendProgress=function(e){return i.onFileSendProgress(e)},o.onmessage=function(e){var n=e.data;return i.fileChannel.onMessage(n)},i.messageChannel.onmessage=i._onMessage,i}return t}(W),V=t(38);t(66);V.initializeApp({apiKey:"AIzaSyCOmcLQTAhqWDbXZTfhzU0CIOFQj5BjbFE",authDomain:"file-share-6b78c.firebaseapp.com",databaseURL:"https://file-share-6b78c.firebaseio.com",projectId:"file-share-6b78c",storageBucket:"file-share-6b78c.appspot.com",messagingSenderId:"1009616620358"});var K=V,Y=function e(){var n=this;Object(B.a)(this,e),this.connections=void 0,this.doc=function(e){return n.connections.doc(e)},this.add=function(e){return n.connections.add(e)},this.getOffer=function(){var e=Object(M.a)(R.a.mark((function e(t){var a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.doc(t).get();case 2:if(a=e.sent,!(i=a.data())){e.next=8;break}if(!i.answer){e.next=7;break}throw new Error("Was already connected");case 7:return e.abrupt("return",i.offer);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.sendOffer=function(e){return n.add({offer:e}).then((function(e){return e.id}))},this.getAnswer=function(e){return new Promise((function(t){var a=n.doc(e).onSnapshot((function(e){var n=e.data();n&&n.answer&&(t(n.answer),a())}))}))},this.sendAnswer=function(e,t){return n.doc(e).set({answer:t},{merge:!0})},this.connections=K.firestore().collection("connections")},X=t(19),$=t.n(X),ee=t(48),ne=t.n(ee),te=t(10),ae=t(39),ie=t.n(ae),oe=function(e){var n,t=e.children,a=e.active,o=void 0===a||a,r=(n={},Object(te.a)(n,ie.a.backdrop,!0),Object(te.a)(n,ie.a.backdrop_active,o),n);return i.a.createElement("div",{className:u(r)},t)},re=function(e){var n=e.onFileInput,t=e.noFocus,o=Object(a.useState)(!1),r=Object(P.a)(o,2),c=r[0],s=r[1],l=Object(a.useRef)(null),u=Object(a.useCallback)((function(e){var t=h(e);t.length&&n(t)}),[n]),d=Object(a.useCallback)((function(e){e.preventDefault(),s(!1);var n=e.dataTransfer.files;n&&u(Array.from(n))}),[u]),f=Object(a.useCallback)((function(e){var n=e.target.files;n&&u(Array.from(n)),e.target.value=""}),[u]);return Object(a.useEffect)((function(){var e=function(){return s(!0)},n=function(e){e.target===l.current&&s(!1)};return window.addEventListener("dragenter",e),window.addEventListener("dragleave",n),function(){window.removeEventListener("dragenter",e),window.removeEventListener("dragleave",n)}}),[]),i.a.createElement(oe,{active:c},i.a.createElement("div",{ref:l,className:ne.a.input,onDragOver:function(e){return e.preventDefault()},onDrop:d},i.a.createElement("input",{type:"file",name:"files",className:"visually-hidden",multiple:!0,onChange:f,tabIndex:t?-1:0})))},ce=t(49),se=t.n(ce),le=function(){return i.a.createElement("span",{className:se.a.spinner})},ue=function(e){var n=e.onFileInput,t=e.showLoader,a=void 0!==t&&t;return i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{className:$.a.container},i.a.createElement("h1",{className:$.a.heading},"Share files easily"),i.a.createElement("p",{className:$.a.lead},"Drop files here or click to select"),i.a.createElement(re,{onFileInput:n})),i.a.createElement(oe,{active:a},i.a.createElement("div",{className:$.a.backdrop},i.a.createElement("div",{className:$.a.spinnerContainer},i.a.createElement(le,null)))))},de=Object(c.b)(null,{addConnection:function(e){return{type:"SET_CONNECTION",payload:{isHost:!0,connection:e}}},addFiles:w,clearFiles:function(){return{type:"HOST_CLEAR_FILES"}}})((function(e){var n=e.addConnection,t=e.addFiles,o=e.clearFiles,r=Object(a.useState)(!1),c=Object(P.a)(r,2),s=c[0],l=c[1],u=Object(z.g)(),d=function(){var e=Object(M.a)(R.a.mark((function e(a){var i,r,c,s,d;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new Z,n(i),o(),t(a),l(!0),r=new Y,e.next=8,i.createOffer();case 8:return c=e.sent,e.next=11,r.sendOffer(c);case 11:return s=e.sent,u.push("/".concat(s)),e.next=15,r.getAnswer(s);case 15:d=e.sent,i.connect(d);case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return i.a.createElement(ue,{onFileInput:d,showLoader:s})})),fe=function(){return i.a.createElement(de,null)},me=t(14),pe=t.n(me),he=t(51),ve=t.n(he),_e=t(15),ge=t.n(_e),Fe=function(e){var n=e.name,t=e.id,o=e.onClick,r=void 0===o?function(){}:o,c=e.progress,s=e.iconOnHover,l=Object(a.useMemo)((function(){var e=n.match(/\.([a-zA-Z0-9]+)$/);return function(e){e=e.toLowerCase();var n={"file-text":["txt","doc","docx","rtf","odt"],"file-image":["psd","tiff","tif","bmp","jpeg","jpg","gif","png","ico","webp","svg","eps","ai","heic","nef","crw","arw"],"file-audio":["ac3","aif","amr","aud","mp3","flac","iff","m4a","m4b","m4p","mid","mpa","ogg","wav","wave"],"file-video":["mp4","avi","mpg","mov","wmv","3gp","flv","m4v","mts","ts","webm"],"file-zip":["zip","rar","7z","jar","gz"]};for(var t in n)if(n[t].includes(e))return t;return"file-empty"}(e?e[1]:"")}),[n]);return i.a.createElement("button",{className:ge.a.card,onClick:function(){return r(t)}},i.a.createElement("div",{className:ge.a.card_iconContainer},i.a.createElement("svg",{className:ge.a.card__icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#".concat(l)})),i.a.createElement("svg",{className:ge.a.card__icon_hover,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#".concat(s)}))),i.a.createElement("p",{className:ge.a.card__title,title:n},n),i.a.createElement("progress",{value:null!==c&&void 0!==c?c:0,max:100,className:ge.a.card__progress}))},Ee=function(e){var n=e.files,t=e.onFileClick,a=e.appendComponent,o=e.iconOnHover;return i.a.createElement("ul",{className:ve.a.list},n.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(Fe,Object.assign({},e,{onClick:t,iconOnHover:o})))})),a?i.a.createElement("li",null,a):null)},be=t(34),Se=t.n(be),Oe=function(e){var n=e.onFileInput,t=Object(a.useCallback)((function(e){var t=h(Array.from(e.target.files||[]));t.length&&n(t),e.target.value=""}),[n]);return i.a.createElement("label",{className:Se.a.addFiles},i.a.createElement("svg",{className:Se.a.icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#file-add"})),i.a.createElement("span",{className:Se.a.addFiles__caption},"Add Files"),i.a.createElement("input",{type:"file",className:"visually-hidden",multiple:!0,onChange:t}))},we=t(52),Ce=t.n(we),ye=function(e){var n=e.files,t=e.addFiles,a=e.removeFile;return i.a.createElement("div",{className:Ce.a.container},i.a.createElement(Ee,{files:n,iconOnHover:"file-delete",onFileClick:a,appendComponent:i.a.createElement(Oe,{onFileInput:t})}),i.a.createElement(re,{onFileInput:t,noFocus:!0}))},Ne=Object(c.b)((function(e){return{files:e.hostFiles,connectionStatus:e.connection.status}}),{addFiles:w,removeFile:function(e){return{type:"HOST_REMOVE_FILE",payload:{id:e}}},setConnectionStatus:C,setSentBytes:function(e,n){return{type:"SET_SENT_BYTES",payload:{id:e,sentBytes:n}}}})((function(e){var n=e.connection,t=e.files,o=e.addFiles,r=e.removeFile,c=e.setSentBytes;Object(a.useEffect)((function(){var e=O(c,33);return n.onFileSendProgress=function(n){var t=n.id,a=n.sent;return e(t,a)},n.onFileSent=function(e,n){return c(e,n)},function(){return e.stop()}}),[n,c]);var s=Object(a.useCallback)((function(e){var t=o(e).payload;n.sendJSON({action:"addFiles",files:m(t)})}),[n,o]),l=Object(a.useCallback)((function(e){var a=t[e],i=a.sentBytes,o=a.file;i>0&&i<o.size||(r(e),n.sendJSON({action:"removeFile",id:e}))}),[n,r,t]),u=Object.keys(t).map((function(e){var n=t[e];return{id:e,name:n.file.name,progress:n.sentBytes/n.file.size*100}}));return i.a.createElement(ye,{addFiles:s,files:u,removeFile:l})})),je=t(42),ke=t.n(je),Te=function(e){var n=e.files,t=e.requestFile;return n.length?i.a.createElement("div",{className:ke.a.container},i.a.createElement(Ee,{files:n,onFileClick:t,iconOnHover:"file-download"})):i.a.createElement("div",{className:ke.a.noFiles},"There's no files yet :(")},xe=Object(c.b)((function(e){return{files:e.clientFiles,connectionStatus:e.connection.status}}),{setDownloadProgress:function(e,n){return{type:"SET_DOWNLOAD_PROGRESS",payload:{id:e,downloadedSize:n}}},saveFileData:function(e,n){return{type:"SAVE_FILE_DATA",payload:{id:e,file:n}}}})((function(e){var n=e.connection,t=e.files,o=e.setDownloadProgress,r=e.saveFileData;Object(a.useEffect)((function(){var e=O(o,33);return n.onFileProgress=function(n){var t=n.id,a=n.downloaded;return e(t,a)},function(){return e.stop()}}),[n,o]),Object(a.useEffect)((function(){n.onFile=function(e,n){r(n.id,e),p(e,n.name)}}),[n,r]);var c=Object(a.useCallback)((function(e){var a=t[e];if(a.file)return p(a.file,a.name);a.downloadedSize||(o(e,1),n.requestFile(e))}),[n,t,o]),s=Object.keys(t).map((function(e){var n=t[e],a={id:e,name:n.name};return n.downloadedSize&&(a.progress=n.downloadedSize/n.size*100),a}));return i.a.createElement(Te,{files:s,requestFile:c})})),Le=le,De=t(24),Ie=t.n(De),Ae=function(e){var n=e.text,t=Object(a.useRef)(null);return i.a.createElement("div",{className:Ie.a.inputGroup},i.a.createElement("input",{ref:t,className:Ie.a.input,readOnly:!0,value:n,onFocus:function(e){return e.target.select()},autoFocus:!0}),i.a.createElement("button",{className:Ie.a.btn,onClick:function(){var e;if(!navigator.clipboard)return null===(e=t.current)||void 0===e?void 0:e.focus();navigator.clipboard.writeText(n)}},i.a.createElement("svg",{className:Ie.a.icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#copy"}))))},ze=t(16),He=t.n(ze),Re=function(e){var n,t=e.isHost,a=e.isConnected,o=e.onDisconnectClick,r=void 0===o?function(){}:o,c=v(t,a),s={connected:"Click on remote file to start downloading it",hostWaiting:"Click on your file to remove it",clientWaiting:"Click on your file to remove it"}[c],l={connected:"Connected",hostWaiting:"Waiting For Connection",clientWaiting:"Connecting"}[c],d=u((n={},Object(te.a)(n,He.a.connectionStatus,!0),Object(te.a)(n,He.a.connectionStatus_connected,"connected"===c),n));return i.a.createElement("header",{className:He.a.header},i.a.createElement("div",{className:He.a.container},i.a.createElement("div",null,s),i.a.createElement("div",{className:He.a.connectionState},i.a.createElement("span",{className:d}),l),i.a.createElement("button",{className:He.a.disconnect,onClick:r},"Disconnect")))},Me=function(e){var n=e.isConnected,t=e.isHost,a=e.connection,o=e.disconnect,r={connected:i.a.createElement(xe,{connection:a}),hostWaiting:i.a.createElement("div",null,i.a.createElement("p",{className:pe.a.remoteFiles__shareInfo},"Copy this link and send it to the person you want to share files with."),i.a.createElement("div",{className:pe.a.remoteFiles__shareLink},i.a.createElement(Ae,{text:window.location.href}))),clientWaiting:i.a.createElement("div",{className:pe.a.remoteFiles__spinner},i.a.createElement(Le,null))},c=v(t,n);return i.a.createElement(i.a.Fragment,null,i.a.createElement(Re,{isHost:t,isConnected:n,onDisconnectClick:o}),i.a.createElement("main",{className:pe.a.container},i.a.createElement("section",null,i.a.createElement("h2",{className:pe.a.heading},"Your Files"),i.a.createElement(Ne,{connection:a})),i.a.createElement("section",null,i.a.createElement("h2",{className:pe.a.heading},"Remote Files"),r[c])))},Pe=Object(c.b)((function(e){return{connectionStatus:e.connection.status,localFiles:e.hostFiles,isHost:e.connection.isHost}}),{setConnectionStatus:C,addRemoteFiles:function(e){return{type:"CLIENT_ADD_FILES",payload:e}},removeRemoteFile:function(e){return{type:"CLIENT_REMOVE_FILE",payload:{id:e}}}})((function(e){var n=e.connection,t=e.connectionStatus,o=e.setConnectionStatus,r=e.localFiles,c=e.isHost,s=e.addRemoteFiles,l=e.removeRemoteFile,u=Object(z.g)();return n.onRequestFile=function(e){return r[e].file},n.onConnection=function(e){if(o(e),"disconnected"===e)return u.push("/");"connected"===e&&setTimeout((function(){return n.sendJSON({action:"addFiles",files:m(r)})}),50)},Object(a.useEffect)((function(){n.onMessage=function(e){var n=d(e);n&&("addFiles"===n.action?s(n.files):"removeFile"===n.action&&l(n.id))}}),[n,s,l]),i.a.createElement(Me,{isConnected:"connected"===t,isHost:c,connection:n,disconnect:function(){return u.replace("/")}})})),Be=Object(c.b)((function(e){return{isHost:e.connection.isHost,connection:e.connection.connection}}),{clientSetConnection:function(e){return{type:"SET_CONNECTION",payload:{isHost:!1,connection:e}}}})((function(e){var n=e.isHost,t=e.connection,a=e.clientSetConnection,o=Object(z.g)(),r=Object(z.h)().id;if(t)return i.a.createElement(Pe,{connection:t});if(n||!r)return i.a.createElement(z.a,{to:"/"});var c=new Z;return a(c),function(e,n){var t=new Y;return t.getOffer(n).then((function(n){if(!n)throw new Error("Can't get offer");return e.connect(n)})).then((function(e){return t.sendAnswer(n,e)}))}(c,r).catch((function(){return o.replace("/")})),i.a.createElement("div",null,"Loading...")}));var Je=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(A.a,{hashType:"noslash"},i.a.createElement(z.d,null,i.a.createElement(z.b,{path:"/:id"},i.a.createElement(Be,null)),i.a.createElement(z.b,{path:"/"},i.a.createElement(fe,null)))))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c.a,{store:I},i.a.createElement(Je,null))),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.3ccd54f7.chunk.js.map