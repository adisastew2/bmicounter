// calculates bmi from user input
function calculate (height, weight) {
	var height = document.getElementById("height").value
	var weight = document.getElementById("weight").value
	var bmindex = (weight/(height*height))*703;
	console.log(bmindex);


	// display result on page
	var newH2 = document.createElement("H2");
	var result = document.createTextNode("Your Body Mass Index is " + bmindex.toFixed(2));
	newH2.appendChild(result);
	document.getElementById("result").appendChild(newH2);
}
	