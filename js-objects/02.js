function hasProp(prop, obj){
	return prop in obj;
}

console.log(hasProp("a", {a:22, b:11}));
console.log(hasProp(11, {a:22, b:11}));
