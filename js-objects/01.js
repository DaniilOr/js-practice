function printOwn(obj){
	for (key in obj){
		if(obj.hasOwnProperty(key)){
			console.log(`Key - ${key}; Value - ${obj[key]}`);
		}
	}
}
proto = {a: "1", b:42};
printOwn(proto);
child = Object.create(proto);
child.c = true;
printOwn(child);
