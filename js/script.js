// calculates bmi from user input
function calculate (height, weight) {
	var height = document.getElementById("height").value
	var weight = document.getElementById("weight").value
	var bmindex = (weight/(height*height))*703;
	console.log(bmindex);


	// display result on page
	var yourNumb = document.getElementById("yourNumb")
	yourNumb.innerHTML="Your Body Mass Index is " + bmindex.toFixed(2)

	var info = document.getElementById("info")
	var rating = document.getElementById("rating")
	if(bmindex <= 18.5){
		rating.innerHTML="Underweight"
		info.innerHTML="A lean BMI can indicate that your weight maybe too low. You should consult your physician to determine if you should gain weight, as low body mass can decrease your body's immune system, which could lead to ilness such as disappearance of periods (women), bone loss, malnutrition and other conditions. The lower your BMI the greater these risks become."
	}
	else if(bmindex > 18.5 && bmindex < 25){
		rating.innerHTML="Normal Weight"
		info.innerHTML="People whose BMI is within 18.5 to 24.9 possess the ideal amount of body weight, associated with living longest, the lowest incidence of serious ilness, as well as being perceived as more physically attractive than people with BMI in higher or lower ranges. However, it may be a good idea to check your Waist Circumference and keep it within the recommended limits"
	}
	else if(bmindex > 24.99 && bmindex < 30){
		rating.innerHTML="Overweight"
		info.innerHTML="People falling in this BMI range are considered overweight and would benefit from finding healthy ways to lower their weight, such as diet and exercise. Individuals who fall in this range are at increased risk for a variety of ilnesses. If your BMI is 27-29.99 your risk of health problems becomes higher. In a recent study an increased rate of blood pressure, diabetes and heart disease was recorded at 27.3 for women and 27.8 for men. It may be a good idea to check your Waist Circumference and compare it with the recommended limits."
	}
	else if(bmindex > 29.99 && bmindex < 35){
		rating.innerHTML="Obesity (Class 1)"
		info.innerHTML="Individuals with a BMI of 30-34.99 are in a physically unhealthy condition, which puts them at risk for serious ilnesses such as heart disease, diabetes, high blood pressure, gall bladder disease, and some cancers. This holds especially true if you have a larger than recommended Waist Size. These people would benefit greatly by modifying their lifestyle. Ideally, see your doctor and consider reducing your weight by 5-10 percent. Such a weight reduction will result in considerable health improvements."
	}
	else if(bmindex > 34.99 && bmindex < 40){
		rating.innerHTML="Obesity (Class 2)"
		info.innerHTML="If you have a BMI of 35-39.99 your risk of weight-related health problems and even death, is severe. See your doctor and reduce your weight to a lower BMI."
	}
	else if(bmindex >= 40){
		rating.innerHTML="Morbid Obesity"
		info.innerHTML="With a BMI of 40+ you have an extremely high risk of weight-related disease and premature death. Indeed, you may have already been suffering from a weight-related condition. For the sake of your health it is very important to see your doctor and get specialists help for your condition."
	}

}
	