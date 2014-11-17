//doesn't block the load event
function createIframe(){
  var i = document.createElement("iframe");
  i.src = "http://www.youtube.com/embed/I-px1pnYdY8", "http://www.youtube.com/embed/C-z6iwzz0r0?list=UUFqWksZEchl2F_bmR01sjaA", "http://www.youtube.com/embed/NYgCh7EYSzg?list=PLvy119PeSK5hYtHQ3WBxjp_uE9nxWG-t-",  "http://www.youtube.com/embed/KOIsqRgJ3XM", ;
  i.scrolling = "auto";
  i.frameborder = "0";
  i.width = "200px";
  i.height = "100px";
  document.getElementById("aside").appendChild(i);
};
	
// Check for browser support of event handling capability
if (window.addEventListener)
window.addEventListener("load", createIframe, false);
else if (window.attachEvent)
window.attachEvent("onload", createIframe);
else window.onload = createIframe;