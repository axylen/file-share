(this["webpackJsonpfile-share"]=this["webpackJsonpfile-share"]||[]).push([[0],{13:function(e,n,t){e.exports={card:"FileCard_card__DvQkw",card_iconContainer:"FileCard_card_iconContainer__3ESwO",card__icon:"FileCard_card__icon__1140Z",card__icon_hover:"FileCard_card__icon_hover__12B2M",card__title:"FileCard_card__title__211tm",card__size:"FileCard_card__size__radKC",card__progress:"FileCard_card__progress__2hLYP"}},14:function(e,n,t){e.exports={header:"Header_header__1b9As",container:"Header_container__3Sx61",connectionState:"Header_connectionState__3o736",connectionStatus:"Header_connectionStatus__8fShc",connectionStatus_connected:"Header_connectionStatus_connected__-8iAg",disconnect:"Header_disconnect__1WtSJ",advice:"Header_advice__JjUYa"}},19:function(e,n,t){e.exports={container:"Home_container__2lNJi",heading:"Home_heading__3LyfN",lead:"Home_lead__fRIGj",backdrop:"Home_backdrop__reCZU",spinnerContainer:"Home_spinnerContainer__3kUMa"}},24:function(e,n,t){e.exports={inputGroup:"InputToClipboard_inputGroup__3zbD6",input:"InputToClipboard_input__cVr1s",btn:"InputToClipboard_btn__1Hr82",icon:"InputToClipboard_icon__3Sfqw"}},34:function(e,n,t){e.exports={addFiles:"AddFileCard_addFiles__3kSyI",icon:"AddFileCard_icon__3F120"}},39:function(e,n,t){e.exports={backdrop:"Backdrop_backdrop__1jq0J",backdrop_active:"Backdrop_backdrop_active__1JWyz"}},42:function(e,n,t){e.exports={noFiles:"RemoteFiles_noFiles__3WGC9",container:"RemoteFiles_container__3BL1G"}},52:function(e,n,t){e.exports={input:"FileInput_input__3x8Ew"}},53:function(e,n,t){e.exports={spinner:"Spinner_spinner__1DJCX",rotate:"Spinner_rotate__3GRoh"}},56:function(e,n,t){e.exports={list:"FileList_list__2mDrg"}},57:function(e,n,t){e.exports={container:"LocalFiles_container__O2uLF"}},60:function(e,n,t){e.exports=t(81)},69:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(27),o=t.n(r),c=t(5),s=t(18),l=t(7),u=function(e){return Array.isArray(e)?e.join(" "):Object.keys(e).filter((function(n){return e[n]})).join(" ")},d=function(e){try{return JSON.parse(e)}catch(n){return null}},f=function(e,n){var t={};for(var a in e)t[a]=n(e[a],a,e);return t},m=function(e){return f(e,(function(e){var n=e.file;return{name:n.name,size:n.size}}))},p=function(e,n){var t=document.createElement("a");t.href=URL.createObjectURL(e),document.body.appendChild(t),t.download=n,t.click(),window.URL.revokeObjectURL(t.href),t.remove()},h=function(e){return e.filter((function(e){var n=e.size,t=e.name,a=e.type;return 0!==n&&(!t.match(/lnk$/)&&(""!==a||4096!==n))}))},v=function(e,n){return n?"connected":e?"hostWaiting":"clientWaiting"},_=t(23),g=function(e,n){for(var t=0,a=[];t<e.byteLength;)a.push(e.slice(t,t+n)),t+=n;return a},F=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.readChunkSize||2097152,a=n.chunkSize||16384,i=n.onChunkLoad,r=void 0===i?function(){}:i,o=n.onLoaded,c=void 0===o?function(){}:o,s=0,l=new FileReader,u=[];return l.onload=function(){l.result&&"string"!==typeof l.result&&(u.push.apply(u,Object(_.a)(g(l.result,a))),s+=t,r(l.result))},l.onloadend=function(){s<e.size?l.readAsArrayBuffer(e.slice(s,s+t)):c(u)},l.readAsArrayBuffer(e.slice(0,t)),u},E=t(58),b=t(59),S=function(e,n){return{deleted:e[n],val:Object(E.a)(e,[n].map(b.a))}};var w=function(e){var n,t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=!1,r=function r(){for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];t=c,i||(e.apply(void 0,Object(_.a)(t)),t=null,i=!0,n=setTimeout((function(){i=!1,t&&r.apply(void 0,Object(_.a)(t))}),a),setTimeout((function(){}),100))};return r.stop=function(){return clearTimeout(n)},r},C=function(e){var n={};return e.forEach((function(e){var t=function(e){return"".concat(e.lastModified).concat(e.size).concat(e.name)}(e);n[t]={file:e,sentBytes:0}})),{type:"HOST_ADD_FILES",payload:n}},O=function(e){return{type:"SET_CONNECTION_STATUS",payload:{status:e}}},y=function(e,n){return e.connection&&e.connection.destroy(),Object(l.a)({},e,{},n.payload,{status:"new"})},N={isHost:!1,status:"new"},j={},k=function(e,n){var t=Object(l.a)({},e);return t[n.payload.id].sentBytes=n.payload.sentBytes,t},x=function(e,n){var t=Object(l.a)({},e);return t[n.payload.id].downloadedSize=n.payload.downloadedSize,t},T=function(e,n){var t=Object(l.a)({},e),a=t[n.payload.id];return a.file=n.payload.file,a.downloadedSize=a.size,t},L={},D=Object(s.b)({connection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CONNECTION":return y(e,n);case"SET_CONNECTION_STATUS":return Object(l.a)({},e,{},n.payload)}return e},hostFiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"HOST_ADD_FILES":return Object(l.a)({},e,{},n.payload);case"HOST_REMOVE_FILE":return S(e,n.payload.id).val;case"HOST_CLEAR_FILES":return{};case"SET_SENT_BYTES":return k(e,n)}return e},clientFiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CLIENT_ADD_FILES":return Object(l.a)({},e,{},n.payload);case"CLIENT_REMOVE_FILE":return S(e,n.payload.id).val;case"SET_DOWNLOAD_PROGRESS":return x(e,n);case"SAVE_FILE_DATA":return T(e,n)}return e}}),z=Object(s.c)(D),I=(t(69),t(20)),A=t(12),H=t(3),R=t.n(H),B=t(17),M=t(32),P=t(10),J=t(30),W={iceServers:[{urls:["stun:stun.l.google.com:19302"]},{urls:["stun:stun1.l.google.com:19302"]},{urls:["stun:stun2.l.google.com:19302"]},{urls:["stun:stun3.l.google.com:19302"]},{urls:["stun:stun4.l.google.com:19302"]},{urls:["stun:stun.voipstunt.com"]}]},q=function(){function e(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;Object(P.a)(this,e),this.connection=void 0,this.messageChannel=void 0,this.onConnection=function(e){},this.onMessage=function(e){},this.destroy=function(){n.connection.ondatachannel=null,n.connection.oniceconnectionstatechange=null},this.handleDataChannel=function(e){var t=e.channel;"message"===t.label&&(n.messageChannel=t)},this.createOffer=function(){var e=n.connection;return new Promise(function(){var t=Object(B.a)(R.a.mark((function t(a){var i;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.onicecandidate=function(e){return!e.candidate&&a(n.description)},t.next=3,e.createOffer();case 3:return i=t.sent,t.next=6,e.setLocalDescription(i);case 6:setTimeout((function(){"complete"!==e.iceGatheringState&&a(n.description)}),2e3);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},this.connect=function(e){var t=n.connection,a=new RTCSessionDescription(JSON.parse(e));return new Promise(function(){var e=Object(B.a)(R.a.mark((function e(i){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setRemoteDescription(a);case 2:if("offer"===a.type){e.next=4;break}return e.abrupt("return",i());case 4:return t.onicecandidate=function(e){return!e.candidate&&i(n.description)},e.next=7,t.createAnswer();case 7:return r=e.sent,e.next=10,t.setLocalDescription(r);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},this.sendMessage=function(e){var t=n.messageChannel;if("open"===t.readyState)return t.send(e);setTimeout((function(){return n.sendMessage(e)}),50)},this.sendJSON=function(e){return n.sendMessage(JSON.stringify(e))},this.connection=new RTCPeerConnection(t),this.messageChannel=this.connection.createDataChannel("message"),this.messageChannel.onmessage=function(e){return n.onMessage(e.data)},this.connection.ondatachannel=function(e){return n.handleDataChannel(e)},this.connection.oniceconnectionstatechange=function(){return n.onConnection(n.connection.iceConnectionState)}}return Object(J.a)(e,[{key:"description",get:function(){return JSON.stringify(this.connection.localDescription)}}]),e}(),U=t(31),G=t(33),Q=function(e){Object(G.a)(t,e);var n=Object(U.a)(t);function t(e,a){var i;Object(P.a)(this,t),(i=n.call(this,e,a)).startTime=0,i.speedStats=function(e){var n=(performance.now()-i.startTime)/1e3,t=e/1024/1024;return{time:"".concat(n.toFixed(2)," \u0441\u0435\u043a."),size:"".concat(t.toFixed(2)," \u043c\u0431"),speed:"".concat((t/n).toFixed(2)," \u043c\u0431/\u0441\u0435\u043a")}};var r=i.doneSendingFile,o=i.sendFileInfo,c=i.onNewFile,s=i.onFileDownloaded;return i.onNewFile=function(e){return i.startTime=performance.now(),c(e)},i.onFileDownloaded=function(e,n){return console.log(i.speedStats(n.size)),s(e,n)},i.sendFileInfo=function(){return i.startTime=performance.now(),o.apply(void 0,arguments)},i.doneSendingFile=function(){var e=i.sendingQueue[0];return console.log(i.speedStats((null===e||void 0===e?void 0:e.file.size)||1)),r()},i}return t}(function(){function e(n){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16384;Object(P.a)(this,e),this.channel=void 0,this.chunkSize=void 0,this.file=void 0,this.onFileReady=function(e,n){},this.onFileProgress=function(e){},this.onFileSendProgress=function(e){},this.onFileSent=function(e,n){},this.onMessage=function(e){if("string"!==typeof e)return t.onData(e);var n=JSON.parse(e),a=n.status,i=n.info,r=t.file;"new"===a&&i?t.onNewFile(i):"done"===a&&r&&t.onFileDownloaded(r.data,r.info)},this.onData=function(e){var n=t.file;if(n){n.data.push(e);var a=n.info,i=a.id,r=a.size,o=n.downloaded+=e.byteLength;t.onFileProgress({size:r,id:i,downloaded:o})}},this.onNewFile=function(e){t.file={data:[],downloaded:0,info:e}},this.onFileDownloaded=function(e,n){var a=new Blob(e);t.onFileReady(a,n),t.file=void 0},this.sendingQueue=[],this.sendFile=function(e,n){var a=t.sendingQueue;!!a.find((function(e){return e.id===n}))||(a.push({file:e,id:n}),1===a.length&&t._sendFile())},this._sendFile=function(){if(t.sendingQueue.length){var e=t.sendingQueue[0],n=e.file,a=e.id;t.sendFileInfo(a,n.name,n.size);var i=F(n,{onChunkLoad:function(){return r()},chunkSize:t.chunkSize}),r=t.sendData(i,n.size,a);t.channel.onbufferedamountlow=r}},this.sendFileInfo=function(e,n,a){var i={status:"new",info:{id:e,name:n,size:a}};t.channel.send(JSON.stringify(i))},this.doneSendingFile=function(){t.channel.onbufferedamountlow=null,t.channel.send(JSON.stringify({status:"done"}));var e=t.sendingQueue.shift();e&&t.onFileSent(e.id,e.file.size),t._sendFile()},this.sendData=function(e,n,a){var i=t.channel,r=t.chunkSize,o=Math.max(8*r,1048576),c=t.sendChunks(e,n,a),s=!1;return function n(){if(!s&&e.length){s=!0;var a,l,u=i.bufferedAmount;do{var d=c.next(),f=d.done;a=void 0!==f&&f;var m=d.value;if("noChunk"===(l=void 0===m?0:m))return void(s=!1);if((u+=l)>=o)return i.bufferedAmount<r&&setTimeout(n,0),void(s=!1)}while(!a);t.doneSendingFile()}}},this.channel=n,this.chunkSize=a}return Object(J.a)(e,[{key:"sendChunks",value:R.a.mark((function e(n,t,a){var i,r,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0,r=0;case 2:if(!(i<t)){e.next=17;break}if(!(o=n[r])){e.next=13;break}return++r,this.channel.send(o),i+=o.byteLength,this.onFileSendProgress({size:t,sent:i,id:a}),e.next=11,o.byteLength;case 11:e.next=15;break;case 13:return e.next=15,"noChunk";case 15:e.next=2;break;case 17:case"end":return e.stop()}}),e,this)}))}]),e}()),V=function(e){Object(G.a)(t,e);var n=Object(U.a)(t);function t(e){var a,i;Object(P.a)(this,t),(i=n.call(this,e)).fileChannel=void 0,i.onFile=function(e,n){},i.onFileProgress=function(e){},i.onFileSendProgress=function(e){},i.onFileSent=function(e,n){},i.onRequestFile=function(e){},i.handleDataChannel=function(e){var n=e.channel;"message"===n.label&&(i.messageChannel=n),"file"===n.label&&(i.fileChannel.channel=n)},i._onMessage=function(e){var n=d(e.data);if(n&&"sendFile"===n.action){var t=i.onRequestFile(n.id);t&&i.sendFile(t,n.id)}else i.onMessage(e.data)},i.sendFile=function(e,n){return i.fileChannel.sendFile(e,n)},i.requestFile=function(e){return i.sendJSON({action:"sendFile",id:e})};var r=i.connection.createDataChannel("file");return i.fileChannel=new Q(r,null===(a=i.connection.sctp)||void 0===a?void 0:a.maxMessageSize),i.fileChannel.onFileReady=function(e,n){return i.onFile(e,n)},i.fileChannel.onFileSent=function(e,n){return i.onFileSent(e,n)},i.fileChannel.onFileProgress=function(e){return i.onFileProgress(e)},i.fileChannel.onFileSendProgress=function(e){return i.onFileSendProgress(e)},r.onmessage=function(e){var n=e.data;return i.fileChannel.onMessage(n)},i.messageChannel.onmessage=i._onMessage,i}return t}(q),Y=t(38);t(71);Y.initializeApp({apiKey:"AIzaSyCOmcLQTAhqWDbXZTfhzU0CIOFQj5BjbFE",authDomain:"file-share-6b78c.firebaseapp.com",databaseURL:"https://file-share-6b78c.firebaseio.com",projectId:"file-share-6b78c",storageBucket:"file-share-6b78c.appspot.com",messagingSenderId:"1009616620358"});var Z=Y,K=function e(){var n=this;Object(P.a)(this,e),this.connections=void 0,this.doc=function(e){return n.connections.doc(e)},this.add=function(e){return n.connections.add(e)},this.getOffer=function(){var e=Object(B.a)(R.a.mark((function e(t){var a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.doc(t).get();case 2:if(a=e.sent,!(i=a.data())){e.next=8;break}if(!i.answer){e.next=7;break}throw new Error("Was already connected");case 7:return e.abrupt("return",i.offer);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.sendOffer=function(e){return n.add({offer:e}).then((function(e){return e.id}))},this.getAnswer=function(e){return new Promise((function(t){var a=n.doc(e).onSnapshot((function(e){var n=e.data();n&&n.answer&&(t(n.answer),a())}))}))},this.sendAnswer=function(e,t){return n.doc(e).set({answer:t},{merge:!0})},this.connections=Z.firestore().collection("connections")},X=t(19),$=t.n(X),ee=t(52),ne=t.n(ee),te=t(11),ae=t(39),ie=t.n(ae),re=function(e){var n,t=e.children,a=e.active,r=void 0===a||a,o=(n={},Object(te.a)(n,ie.a.backdrop,!0),Object(te.a)(n,ie.a.backdrop_active,r),n);return i.a.createElement("div",{className:u(o)},t)},oe=function(e){var n=e.onFileInput,t=e.noFocus,r=Object(a.useState)(!1),o=Object(M.a)(r,2),c=o[0],s=o[1],l=Object(a.useRef)(null),u=Object(a.useCallback)((function(e){var t=h(e);t.length&&n(t)}),[n]),d=Object(a.useCallback)((function(e){e.preventDefault(),s(!1);var n=e.dataTransfer.files;n&&u(Array.from(n))}),[u]),f=Object(a.useCallback)((function(e){var n=e.target.files;n&&u(Array.from(n)),e.target.value=""}),[u]);return Object(a.useEffect)((function(){var e=function(){return s(!0)},n=function(e){e.target===l.current&&s(!1)};return window.addEventListener("dragenter",e),window.addEventListener("dragleave",n),function(){window.removeEventListener("dragenter",e),window.removeEventListener("dragleave",n)}}),[]),i.a.createElement(re,{active:c},i.a.createElement("div",{ref:l,className:ne.a.input,onDragOver:function(e){return e.preventDefault()},onDrop:d},i.a.createElement("input",{type:"file",name:"files",className:"visually-hidden",multiple:!0,onChange:f,tabIndex:t?-1:0})))},ce=t(53),se=t.n(ce),le=function(){return i.a.createElement("span",{className:se.a.spinner})},ue=function(e){var n=e.onFileInput,t=e.showLoader,a=void 0!==t&&t;return i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{className:$.a.container},i.a.createElement("h1",{className:$.a.heading},"Share files easily"),i.a.createElement("p",{className:$.a.lead},"Drop files here or click to select"),i.a.createElement(oe,{onFileInput:n})),i.a.createElement(re,{active:a},i.a.createElement("div",{className:$.a.backdrop},i.a.createElement("div",{className:$.a.spinnerContainer},i.a.createElement(le,null)))))},de=Object(c.b)(null,{addConnection:function(e){return{type:"SET_CONNECTION",payload:{isHost:!0,connection:e}}},addFiles:C,clearFiles:function(){return{type:"HOST_CLEAR_FILES"}}})((function(e){var n=e.addConnection,t=e.addFiles,r=e.clearFiles,o=Object(a.useState)(!1),c=Object(M.a)(o,2),s=c[0],l=c[1],u=Object(A.g)(),d=function(){var e=Object(B.a)(R.a.mark((function e(a){var i,o,c,s,d;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new V,n(i),r(),t(a),l(!0),o=new K,e.next=8,i.createOffer();case 8:return c=e.sent,e.next=11,o.sendOffer(c);case 11:return s=e.sent,u.push("/".concat(s)),e.next=15,o.getAnswer(s);case 15:d=e.sent,i.connect(d);case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return i.a.createElement(ue,{onFileInput:d,showLoader:s})})),fe=function(){return i.a.createElement(de,null)},me=t(55),pe=t.n(me),he=t(9),ve=t.n(he),_e=t(56),ge=t.n(_e),Fe=t(13),Ee=t.n(Fe),be=function(e){var n=e.name,t=e.id,r=e.onClick,o=void 0===r?function(){}:r,c=e.size,s=e.progressBytes,l=e.iconOnHover,u=Object(a.useMemo)((function(){var e=n.match(/\.([a-zA-Z0-9]+)$/);return function(e){e=e.toLowerCase();var n={"file-text":["txt","doc","docx","rtf","odt"],"file-image":["psd","tiff","tif","bmp","jpeg","jpg","gif","png","ico","webp","svg","eps","ai","heic","nef","crw","arw"],"file-audio":["ac3","aif","amr","aud","mp3","flac","iff","m4a","m4b","m4p","mid","mpa","ogg","wav","wave"],"file-video":["mp4","avi","mpg","mov","wmv","3gp","flv","m4v","mts","ts","webm"],"file-zip":["zip","rar","7z","jar","gz"]};for(var t in n)if(n[t].includes(e))return t;return"file-empty"}(e?e[1]:"")}),[n]),d=s/c*100,f=c/1024/1024;return i.a.createElement("button",{className:Ee.a.card,onClick:function(){return o(t)}},i.a.createElement("div",{className:Ee.a.card_iconContainer},i.a.createElement("svg",{className:Ee.a.card__icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#".concat(u)})),i.a.createElement("svg",{className:Ee.a.card__icon_hover,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#".concat(l)}))),i.a.createElement("p",{className:Ee.a.card__title,title:n},n),i.a.createElement("p",{className:Ee.a.card__size},f<1e4?f.toFixed(1):f.toLocaleString(void 0,{maximumFractionDigits:1,minimumFractionDigits:1})," ","MB"),i.a.createElement("progress",{value:null!==d&&void 0!==d?d:0,max:100,className:Ee.a.card__progress}))},Se=function(e){var n=e.files,t=e.onFileClick,a=e.appendComponent,r=e.iconOnHover;return i.a.createElement("ul",{className:ge.a.list},n.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(be,Object.assign({},e,{onClick:t,iconOnHover:r})))})),a?i.a.createElement("li",null,a):null)},we=t(34),Ce=t.n(we),Oe=function(e){var n=e.onFileInput,t=Object(a.useCallback)((function(e){var t=h(Array.from(e.target.files||[]));t.length&&n(t),e.target.value=""}),[n]);return i.a.createElement("label",{className:Ce.a.addFiles},i.a.createElement("svg",{className:Ce.a.icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#file-add"})),i.a.createElement("span",{className:Ce.a.addFiles__caption},"Add Files"),i.a.createElement("input",{type:"file",className:"visually-hidden",multiple:!0,onChange:t}))},ye=t(57),Ne=t.n(ye),je=function(e){var n=e.files,t=e.addFiles,a=e.removeFile;return i.a.createElement("div",{className:Ne.a.container},i.a.createElement(Se,{files:n,iconOnHover:"file-delete",onFileClick:a,appendComponent:i.a.createElement(Oe,{onFileInput:t})}),i.a.createElement(oe,{onFileInput:t,noFocus:!0}))},ke=Object(c.b)((function(e){return{files:e.hostFiles,connectionStatus:e.connection.status}}),{addFiles:C,removeFile:function(e){return{type:"HOST_REMOVE_FILE",payload:{id:e}}},setConnectionStatus:O,setSentBytes:function(e,n){return{type:"SET_SENT_BYTES",payload:{id:e,sentBytes:n}}}})((function(e){var n=e.connection,t=e.files,r=e.addFiles,o=e.removeFile,c=e.setSentBytes;Object(a.useEffect)((function(){var e=w(c,33);return n.onFileSendProgress=function(n){var t=n.id,a=n.sent;return e(t,a)},n.onFileSent=function(e,n){return c(e,n)},function(){return e.stop()}}),[n,c]);var s=Object(a.useCallback)((function(e){var t=r(e).payload;n.sendJSON({action:"addFiles",files:m(t)})}),[n,r]),l=Object(a.useCallback)((function(e){var a=t[e],i=a.sentBytes,r=a.file;i>0&&i<r.size||(o(e),n.sendJSON({action:"removeFile",id:e}))}),[n,o,t]),u=Object.keys(t).map((function(e){var n=t[e],a=n.file,i=n.sentBytes;return{id:e,name:a.name,size:a.size,progressBytes:i}}));return i.a.createElement(je,{addFiles:s,files:u,removeFile:l})})),xe=t(42),Te=t.n(xe),Le=function(e){var n=e.files,t=e.requestFile;return n.length?i.a.createElement("div",{className:Te.a.container},i.a.createElement(Se,{files:n,onFileClick:t,iconOnHover:"file-download"})):i.a.createElement("div",{className:Te.a.noFiles},"There's no files yet :(")},De=Object(c.b)((function(e){return{files:e.clientFiles,connectionStatus:e.connection.status}}),{setDownloadProgress:function(e,n){return{type:"SET_DOWNLOAD_PROGRESS",payload:{id:e,downloadedSize:n}}},saveFileData:function(e,n){return{type:"SAVE_FILE_DATA",payload:{id:e,file:n}}}})((function(e){var n=e.connection,t=e.files,r=e.setDownloadProgress,o=e.saveFileData;Object(a.useEffect)((function(){var e=w(r,33);return n.onFileProgress=function(n){var t=n.id,a=n.downloaded;return e(t,a)},function(){return e.stop()}}),[n,r]),Object(a.useEffect)((function(){n.onFile=function(e,n){o(n.id,e),p(e,n.name)}}),[n,o]);var c=Object(a.useCallback)((function(e){var a=t[e];if(a.file)return p(a.file,a.name);a.downloadedSize||(r(e,1),n.requestFile(e))}),[n,t,r]),s=Object.keys(t).map((function(e){var n=t[e];return{id:e,name:n.name,size:n.size,progressBytes:n.downloadedSize||0}}));return i.a.createElement(Le,{files:s,requestFile:c})})),ze=le,Ie=t(24),Ae=t.n(Ie),He=function(e){var n=e.text,t=!!navigator.share,r=Object(a.useRef)(null);return i.a.createElement("div",{className:Ae.a.inputGroup},i.a.createElement("input",{ref:r,className:Ae.a.input,readOnly:!0,value:n,onFocus:function(e){return e.target.select()},autoFocus:!0}),i.a.createElement("button",{className:Ae.a.btn,onClick:function(){try{window.navigator.share({title:"Share Files",text:"Download my files and send yours",url:n})}catch(t){}var e;if(!navigator.clipboard)return null===(e=r.current)||void 0===e?void 0:e.focus();navigator.clipboard.writeText(n)}},i.a.createElement("svg",{className:Ae.a.icon,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("use",{href:"icons.svg#".concat(t?"share":"copy")}))))},Re=t(14),Be=t.n(Re),Me=function(e){var n,t=e.isHost,a=e.isConnected,r=e.onDisconnectClick,o=void 0===r?function(){}:r,c=v(t,a),s={connected:"Click on remote file to start downloading it",hostWaiting:"Click on your file to remove it",clientWaiting:"Click on your file to remove it"}[c],l={connected:"Connected",hostWaiting:"Waiting For Connection",clientWaiting:"Connecting"}[c],d=u((n={},Object(te.a)(n,Be.a.connectionStatus,!0),Object(te.a)(n,Be.a.connectionStatus_connected,"connected"===c),n));return i.a.createElement("header",{className:Be.a.header},i.a.createElement("div",{className:Be.a.container},i.a.createElement("div",{className:Be.a.advice},s),i.a.createElement("div",{className:Be.a.connectionState},i.a.createElement("span",{className:d}),l),i.a.createElement("button",{className:Be.a.disconnect,onClick:o},"Disconnect")))},Pe=function(e){var n=e.isConnected,t=e.isHost,a=e.connection,r=e.disconnect,o={connected:i.a.createElement(De,{connection:a}),hostWaiting:i.a.createElement("div",null,i.a.createElement("p",{className:ve.a.remoteFiles__shareInfo},"Copy this link and send it to the person you want to share files with."),i.a.createElement("div",{className:ve.a.remoteFiles__shareLink},i.a.createElement(He,{text:window.location.href})),i.a.createElement("div",{className:ve.a.remoteFiles__qr},i.a.createElement(pe.a,{value:window.location.href,renderAs:"svg",size:200,fgColor:"var(--color-text)",bgColor:"transparent"}))),clientWaiting:i.a.createElement("div",{className:ve.a.remoteFiles__spinner},i.a.createElement(ze,null))},c=v(t,n);return i.a.createElement(i.a.Fragment,null,i.a.createElement(Me,{isHost:t,isConnected:n,onDisconnectClick:r}),i.a.createElement("main",{className:ve.a.container},i.a.createElement("section",{className:ve.a.container__your_files},i.a.createElement("h2",{className:ve.a.heading},"Your Files"),i.a.createElement(ke,{connection:a})),i.a.createElement("section",{className:ve.a.container__remote_files},i.a.createElement("h2",{className:ve.a.heading},"Remote Files"),o[c])))},Je=Object(c.b)((function(e){return{connectionStatus:e.connection.status,localFiles:e.hostFiles,isHost:e.connection.isHost}}),{setConnectionStatus:O,addRemoteFiles:function(e){return{type:"CLIENT_ADD_FILES",payload:e}},removeRemoteFile:function(e){return{type:"CLIENT_REMOVE_FILE",payload:{id:e}}}})((function(e){var n=e.connection,t=e.connectionStatus,r=e.setConnectionStatus,o=e.localFiles,c=e.isHost,s=e.addRemoteFiles,l=e.removeRemoteFile,u=Object(A.g)();return n.onRequestFile=function(e){return o[e].file},n.onConnection=function(e){if(r(e),"disconnected"===e)return u.push("/");"connected"===e&&setTimeout((function(){return n.sendJSON({action:"addFiles",files:m(o)})}),50)},Object(a.useEffect)((function(){n.onMessage=function(e){var n=d(e);n&&("addFiles"===n.action?s(n.files):"removeFile"===n.action&&l(n.id))}}),[n,s,l]),i.a.createElement(Pe,{isConnected:"connected"===t,isHost:c,connection:n,disconnect:function(){return u.replace("/")}})})),We=Object(c.b)((function(e){return{isHost:e.connection.isHost,connection:e.connection.connection}}),{clientSetConnection:function(e){return{type:"SET_CONNECTION",payload:{isHost:!1,connection:e}}}})((function(e){var n=e.isHost,t=e.connection,a=e.clientSetConnection,r=Object(A.g)(),o=Object(A.h)().id;if(t)return i.a.createElement(Je,{connection:t});if(n||!o)return i.a.createElement(A.a,{to:"/"});var c=new V;return a(c),function(e,n){var t=new K;return t.getOffer(n).then((function(n){if(!n)throw new Error("Can't get offer");return e.connect(n)})).then((function(e){return t.sendAnswer(n,e)}))}(c,o).catch((function(){return r.replace("/")})),i.a.createElement("div",null,"Loading...")}));var qe=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(I.a,{hashType:"noslash"},i.a.createElement(A.d,null,i.a.createElement(A.b,{path:"/:id"},i.a.createElement(We,null)),i.a.createElement(A.b,{path:"/"},i.a.createElement(fe,null)))))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c.a,{store:z},i.a.createElement(qe,null))),document.getElementById("root"))},9:function(e,n,t){e.exports={container:"Share_container__2LnzK",heading:"Share_heading__ZECPu",remoteFiles__shareInfo:"Share_remoteFiles__shareInfo__1OlHO",remoteFiles__shareLink:"Share_remoteFiles__shareLink__exPSw",remoteFiles__spinner:"Share_remoteFiles__spinner__1C4Cu",remoteFiles__qr:"Share_remoteFiles__qr__3VYI5",container__your_files:"Share_container__your_files__2vKCC"}}},[[60,1,2]]]);
//# sourceMappingURL=main.e5a21496.chunk.js.map