let x = 52;
switch (typeof(x)){
	case "number":
		alert("Число");
		break;
	case "string":
		alert("Строка");
		break;
	case "boolean":
		alert("Буль");
		break;
	default:
		alert(`Тип ${x} не определен`);


}
