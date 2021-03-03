const wsUri = "wss://echo.websocket.org/";
const output = document.getElementById("output");
const btnGeo = document.getElementById("geo");
const btnSend = document.getElementById('send');
let geolocationClicked = false;
let websocket;
window.onload =  function() {
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) {
    console.log("CONNECTED");
  };
  websocket.onclose = function(evt) {
    console.log("DISCONNECTED");
  };
  websocket.onmessage = function(evt) {
  if(!geolocationClicked){
    writeToScreen(
      '<span style="color: blue;">RESPONSE: ' + evt.data+'</span>'
    );
   } else {
   	geolocationClicked = !geolocationClicked;
   }
   websocket.onerror = function(evt) {
    writeToScreen(
      '<span style="color: red;">ERROR:</span> ' + evt.data);
    };
 };
};



function writeToScreen(message, isGeo=false) {
  if(isGeo){
   let pre = document.createElement("a");
   pre.innerHTML = "геолокация";
   pre.href = message;
   output.appendChild(pre);
   return;
  }
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}


btnSend.addEventListener('click', () => {
  const message = document.getElementById("inp").value;
  writeToScreen("SENT: " + message);
  websocket.send(message);
});

btnGeo.addEventListener('click', () => {
   navigator.geolocation.getCurrentPosition(async (pos)=>{
  	 let url = `https://www.openstreetmap.org/#map=10/${pos.coords.latitude}/${pos.coords.longitude}`;
  	 writeToScreen(url, true);
  	 geolocationClicked = true;
  	 websocket.send(url);
  }, (err)=>{console.log(`ERROR(${err.code}): ${err.message}`);}, {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
});
});
