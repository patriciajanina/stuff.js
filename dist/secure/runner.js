(function(t){"use strict";function e(){c&&u.removeChild(c),c=l.createElement("iframe"),c.setAttribute("width","100%"),c.setAttribute("height","100%"),u.appendChild(c)}function n(t){e(),c.addEventListener("load",function(){s("load",null)},!1);var n=c.contentWindow.document;n.open(),n.write(t),n.close()}function s(e,n){var s=d.stringify({data:n,type:e,secret:i});t.top.postMessage(s,"*")}function a(t,e){t&&(t={message:t.message,stack:t.stack,type:t.type,arguments:t.arguments,errorType:(t.constructor+"").trim().match(/^function ([A-Z][a-zA-Z]+)/)[1]}),"function"==typeof e&&(e+=""),s("evaljs",{error:t,result:e})}function r(t){var e=c.contentWindow,n=null;try{n=e.eval(t)}catch(s){throw a(s,null),s}a(null,n)}function o(){s("html",c.contentWindow.document.documentElement.outerHTML)}var c,i,l=t.document,u=l.querySelector("body"),d=t.JSON,h={load:n,evaljs:r,html:o};t.addEventListener("message",function(t){var e;try{e=d.parse(t.data)}catch(n){return}var s=e.type,a=e.data;if(e.secret)if(i||"handshake"!==e.type){if(e.secret!==i)return;h[s](a)}else i=e.secret},!1)})(window);