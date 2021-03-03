const doc =  `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;
function parse(doc){
	console.log(typeof(doc));
	return JSON.parse(doc);
}
console.log(parse(doc));
