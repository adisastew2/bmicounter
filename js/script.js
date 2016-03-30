// calculates bmi from user input
function calculate (height, weight) {
	var height = document.getElementById("height").value
	var weight = document.getElementById("weight").value
	var bmindex = (weight/(height*height))*703;
	console.log(bmindex);


	// display result on page
	var yourNumb = document.getElementById("yourNumb")
	yourNumb.innerHTML="Your Body Mass Index is " + bmindex.toFixed(2)
	
}
	