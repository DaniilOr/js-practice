function clicked(){
	const width = +document.getElementById("inp1").value;
	const height = +document.getElementById("inp2").value;
	if(!(width >= 100 && width <= 300) || !(height >= 100 && height <= 300)){
		alert("одно из чисел вне диапазона от 100 до 300");
		return;
	}
		
	 await fetch(`https://picsum.photos/${width}/${height}`, {
	    method: 'GET',
	  }).then(response => {
	    console.log(response);
	    if (!response.ok) {
	      throw new Error('Network response was not ok.')
	    }
	    let img = document.createElement("img");
	    img.setAttribute("src", response.url);
	    document.body.appendChild(img);
	  }).catch(console.error)
}
	
