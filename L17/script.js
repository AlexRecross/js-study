document.addEventListener('DOMContentLoaded', function () {
	
	var carForm = document.forms.carForm;
	var carBrand = carForm.brand;
	var carModel = carForm.model;
	var userName = carForm.UserName;
	var userEmail = carForm.UserEmail;


	// input text interaction
	// user Name
	var userNamePlaceholder = userName.placeholder;

	userName.addEventListener("focus", function() {
		userName.placeholder = "";
	});

	carBrand.addEventListener("blur", function() {
		userName.placeholder = userNamePlaceholder;
	});

	// UserEmail

	var userEmailPlaceholder = userEmail.placeholder;

	userEmail.addEventListener("focus", function() {
		userEmail.placeholder = "";
	});

	userEmail.addEventListener("blur", function() {
		userEmail.placeholder = userEmailPlaceholder;
	});

	// cars brand

	var carBrandPlaceholder = carBrand.placeholder;

	carBrand.addEventListener("focus", function() {
		carBrand.placeholder = "";
	});

	carBrand.addEventListener("blur", function() {
		carBrand.placeholder = carBrandPlaceholder;
	});

	// cars model

	var carModelPlaceholder = carModel.placeholder;

	carModel.addEventListener("focus", function() {
		carModel.placeholder = "";
	});

	carModel.addEventListener("blur", function(){
		carModel.placeholder = carModelPlaceholder;
	});



	// validation
	carForm.addEventListener('submit', function() {
		event.preventDefault();

		var error = formValidate(carForm);

		if (error === 0) {
			carForm.classList.add('sending');
		} else {
			console.log('Fill in required fields');
		}
	});

	function formValidate(form) {
		var error = 0;
		var formReq =  carForm.getElementsByClassName('required')

		for (var i = 0; i < formReq.length; i++) {
			var input = formReq[i];
			formRemoveError(input);

			if (input.value =='') {
				formAddError(input);
				error++;
			}

			if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			}

			if (input.classList.contains('email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('error');
		input.classList.add('error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('error');
		input.classList.remove('error');
	}


	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});