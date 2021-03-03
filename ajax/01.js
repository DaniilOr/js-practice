const doc = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`
function parse(doc){
	const parser = new DOMParser();
	let objects = [];
	const DOMRepresentation = parser.parseFromString(doc, "text/xml");
	const listContents = DOMRepresentation.querySelector("list");
	console.log(listContents.children);
	for(student of listContents.children){
		let studentObject = {};
		console.log(student);
		for(property of student.children){
			if(property.nodeName == "name"){
				studentObject["lang"] = property.getAttribute("lang");
				studentObject[property.nodeName] = property.children[0].textContent + " " + property.children[1].textContent;
				continue;
			}
			studentObject[property.nodeName] = property.textContent;	
		}

		objects.push(studentObject);
	}
	return {"list":objects};
}
parse(doc);
