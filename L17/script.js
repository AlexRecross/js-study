var carForm = document.forms.carForm;
var carBrand = carForm.brand;
var carModel = carForm.model;
var carFuel = carForm.typeOfFuel;

console.log(carForm, carBrand, carModel);

// input text interaction

var carBrandPlaceholder = carBrand.placeholder;

carBrand.addEventListener("focus", function() {
	carBrand.placeholder = "";
});

carBrand.addEventListener("blur", function() {
	carBrand.placeholder = carBrandPlaceholder;
});

var carModelPlaceholder = carModel.placeholder;

carModel.addEventListener("focus", function() {
	carModel.placeholder = "";
});

carModel.addEventListener("blur", function(){
	carModel.placeholder = carModelPlaceholder;
});


carForm.addEventListener("submit", function() {
	console.log('Form sending...');

	if(!carBrand.value) {
		console.log("Sending canceled. Car's brand is empty")
		event.preventDefault();
	}
	if(!carModel.value) {
		console.log("Sending canceled. Car's model is empty")
		event.preventDefault();
	}
})
