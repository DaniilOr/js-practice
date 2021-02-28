function createEmpty(){
	return Object.create(null);
}

a = createEmpty();
console.log(Object.getPrototypeOf(a));
