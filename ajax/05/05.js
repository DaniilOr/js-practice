window.onload =  function() {
		let imgs = localStorage.getItem("page");
		imgs = JSON.parse(imgs);
  		if(imgs){
		for(let item of imgs){
			let img = document.createElement("img");
			img.setAttribute("src", item.download_url);
			document.body.appendChild(img);
		}
	}
};

const useRequest = (pageNum, limit) => {
  return fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=${limit}`)
    .then((response) => {
      return response.json();
    })
    .then((json) => { return json; })
    .catch(() => { console.log('error') });
}

async function clicked(){
 	const pageNum = +document.getElementById("inp1").value;
	const limit = +document.getElementById("inp2").value;
	console.log("Entered: ", pageNum, limit);
	if(!(pageNum >= 1 && pageNum <= 10) && (limit >= 1 && limit <= 10)){
		alert("Номер страницы и лимит вне диапазона от 1 до 10");
		return;
	}
	if(!(pageNum >= 1 && pageNum <= 10)){
		alert("Номер страницы вне диапазона от 1 до 10");
		return;
	}
	if(!(limit >= 1 && limit <= 10)){
		alert("Лимит вне диапазона от 1 до 10");
		return;
	}	
	const requestResult = await useRequest(pageNum, limit);
	localStorage.setItem("page", JSON.stringify(requestResult));
	for(let item of requestResult){
			let img = document.createElement("img");
			img.setAttribute("src", item.download_url);
			document.body.appendChild(img);
		}

}



