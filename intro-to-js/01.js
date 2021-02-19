let numb = +prompt("Enter a number");
if (typeof(numb) != "number" || isNaN(numb)){
	alert("Упс, кажется, вы ошиблись");
} else {
	if(numb % 2) {
		alert("Нечетное");
	} else {
		alert("Четное");
	}
}
