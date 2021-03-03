function clicked(){
 	const value = +document.querySelector('input').value;
 	console.log(value);
 	sendRequest(value);

 }

function sendRequest(value){
	if(value >= 0 && value <= 10){
	const xhr = new XMLHttpRequest();
	xhr.open("get", `https://picsum.photos/v2/list?limit=${value}`, true);
	xhr.onload = function() {
		 createImgs(JSON.parse(xhr.response));	
	};
	xhr.onerror = function() {
  		console.log(xhr.status);
  		console.log(xhr.response);
	};
	xhr.send();
	} else {
		alert("Число вне диапазона");
	}
}

function createImgs(imgs){
	for(let item of imgs){
		console.log(item);
		let img = document.createElement("img");
		img.setAttribute("src", item.download_url);
		document.body.appendChild(img);
	}

}
