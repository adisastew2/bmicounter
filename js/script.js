
function calculate (height, weight) {
	var height = document.getElementById("height").value
	var weight = document.getElementById("weight").value
	var heightnew = Number(height);
	var weightnew = Number(weight);
	var heightsquare = heightnew*heightnew;
	var bmindex = weightnew/heightsquare;
	console.log(bmindex);
}
