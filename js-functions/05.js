const pow=(x, n)=>{
	let val = 1;
	for(let i = 0; i < n; i++){
		val *= x;
	} 
	return val;
}
console.log(pow(2, 0));
console.log(pow(2, 10));
console.log(pow(3, 4));

