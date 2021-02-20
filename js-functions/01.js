function checkArray(){
	let odds = 0;
	let evens = 0;
	let zeros = 0;
	for(let i = 0; i < arr.length; i++){
		if(typeof(arr[i]) == "number"){
			if(arr[i] == 0) {
				zeros ++;
			} else {
				evens += !(arr[i] % 2);
				odds += arr[i] % 2;
			}
			
		}
	}
	console.log(`Odds: ${odds}, Evens: ${evens}, Zeros:${zeros}`);
}
arr = [1, 2, 0, 0, "not a number", true, null]
checkArray();
