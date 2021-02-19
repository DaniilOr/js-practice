arr = [1, 1, 1, 1];
let isEqual = true;
prev = arr[0];
for (let x = 1; x < arr.length; x++){
	if (arr[x] != prev){
		isEqual = false;
		break;
	}
	prev = arr[x];
}
if(isEqual){
	alert("All items are equal");
} else {
	alert("Items are not equal");
}
