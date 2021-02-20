function isPrime(x){
	if(typeof(x) != "number" || x > 1000){
		console.log("Введены неверные данные");
		return;
	}
	if(x == 0 || x == 1){
		console.log("Не простое");
	} else {
		for(let i = 2; i <= Math.sqrt(x); i ++){
			if(x % i == 0){
				console.log("Не простое");
				return;
			}
		}
		console.log("Простое");
	}
	
}
