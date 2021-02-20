function countdown(a, b){
	let start = a;
	let canceler = setInterval(function(){
		if(start<=b) {console.log(start); start++;}
		else clearInterval(canceler);
		
	}, 1000);	
}

countdown(5, 15);
