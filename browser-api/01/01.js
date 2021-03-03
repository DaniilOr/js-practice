let btn = document.getElementById('button');
btn.addEventListener('click', () =>{
		console.log("boom");
		document.getElementById('first').classList.toggle("invisible");
		document.getElementById('second').classList.toggle("invisible");
	});
