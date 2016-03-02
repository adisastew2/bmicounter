function calculate (height, weight) {
	var height = document.getElementById("height").value
	var weight = document.getElementById("weight").value
	var bmindex = weight/(height*height);
	console.log(bmindex);
}