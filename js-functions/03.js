function wrapper(x, func){

	return x + func(x);
}

function abs(x){
	if (x < 0) return -x;
	return x;	
}

wrapper(5, abs);
