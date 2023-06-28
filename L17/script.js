// document.addEventListener('DOMContentLoaded', function () {

	var carForm = document.forms.carForm;
	var userFirstName = carForm.UserFirstName;
	var userLastName = carForm.UserLastName;
	var userEmail = carForm.UserEmail;
	var userPassword = carForm.UserPassword;
	var userPhone = carForm.UserPhone;

// input text interaction
	// user Last & First Name
	//first name

	var userFirstNamePlaceholder = userFirstName.placeholder;
	userFirstName.addEventListener("focus", function() {
		formRemoveError(userFirstName);
		userFirstName.placeholder = "";
	});

	userFirstName.addEventListener("blur", function() {
		formRemoveError(userFirstName);
		if(nameTest(userFirstName)) {
			formAddError(userFirstName)
		}
		userFirstName.placeholder = userFirstNamePlaceholder;
	});

	userFirstName.addEventListener("change", function() {
		formRemoveError(userFirstName);
		if(nameTest(userFirstName)) {
			formAddError(userFirstName)
		}
	});

	//last name
	var userLastNamePlaceholder = userLastName.placeholder;
	userLastName.addEventListener("focus", function() {
		formRemoveError(userLastName);
		userLastName.placeholder = "";
	});

	userLastName.addEventListener("blur", function() {
		formRemoveError(userLastName);
		if(nameTest(userLastName)) {
			formAddError(userLastName)
		}
		userLastName.placeholder = userLastNamePlaceholder;
	});

	userLastName.addEventListener("change", function() {
		formRemoveError(userLastName);
		if(nameTest(userLastName)) {
			formAddError(userLastName)
		}
	});

	// UserEmail & Password
	//email
	var userEmailPlaceholder = userEmail.placeholder;
	userEmail.addEventListener("focus", function() {
		formRemoveError(userEmail);
		userEmail.placeholder = "";
	});

	userEmail.addEventListener("blur", function() {
		formRemoveError(userEmail);
		if(emailTest(userEmail)) {
			formAddError(userEmail)
		}
		userEmail.placeholder = userEmailPlaceholder;
	});

	userEmail.addEventListener("change", function() {
		formRemoveError(userEmail);
		if(emailTest(userEmail)) {
			formAddError(userEmail)
		}
	});
	//password
	var userPasswordPlaceholder = userPassword.placeholder;
	userPassword.addEventListener("focus", function() {
		formRemoveError(userPassword);
		userPassword.placeholder = "";
	});
	userPassword.addEventListener("blur", function() {
		formRemoveError(userPassword);
		if(passTest(userPassword)) {
			formAddError(userPassword)
		}
		userPassword.placeholder = userPasswordPlaceholder;
	});

	userPassword.addEventListener("change", function() {
		formRemoveError(userPassword);
		if(passTest(userPassword)) {
			formAddError(userPassword)
		}
	});

// UserPhoneNumber

	var userPhonePlaceholder = userPhone.placeholder;
	userPhone.addEventListener("focus", function() {
		formRemoveError(userPhone);
		userPhone.placeholder = "";
	});
	userPhone.addEventListener("blur", function() {
		formRemoveError(userPhone);
		if(numberTest(userPhone)) {
			formAddError(userPhone)
		}
		userPhone.placeholder = userPhonePlaceholder;
	});

	userPhone.addEventListener("change", function() {
		formRemoveError(userPhone);
		if(numberTest(userPhone)) {
			formAddError(userPhone)
		}
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

			if (input.classList.contains('firstName')) {
				console.log(input.name, input.value);
				if (nameTest(input)) {
					formAddError(input);
					error++;
				}
			}

			if (input.classList.contains('lastName')) {
				console.log(input.name, input.value);
				if (nameTest(input)) {
					formAddError(input);
					error++;
				}
			}

			if (input.classList.contains('email')) {
				console.log(input.name, input.value);
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			}

			if (input.classList.contains('phone')) {
				console.log(input.name, input.value);
				if (numberTest(input)) {
					formAddError(input);
					error++;
				}
			}

			if (input.classList.contains('pass')) {
				console.log(input.name, input.value);
				if (passTest(input)) {
					formAddError(input);
					error++;
				}
			}

			if (input.id === 'formAgreement' && input.checked === false) {
				formAddError(input);
				error++;
			}

			if (input.checked) {
				console.log(input.name, " checked");
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

	function nameTest(input) {
		return !/^[A-Z][A-Za-z]+$/.test(input.value);
	}

	function emailTest(input) {
		if(!/^\.|\.@|&|=|<|>|,|_|-|`|\.\./.test(input.value)){
			return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
		}
	}

	function numberTest(input) {
		return !/(^\+\d{10}|^\+\d{3}-\d{3}-\d{4})/.test(input.value);
	}

	function passTest(input) {
		if (passCompareToName(input) && passCompareToEmail(input)){
		return !/[A-Za-z]+\d+|\d+[A-Za-z]+/.test(input.value);
		}
	}

	function passCompareToName(input) {
		var formReq =  carForm.getElementsByClassName('required');
		var name = formReq[0].value;
		var passwordSplit = input.value.match(/\w{4}/gmi)
		if (passwordSplit == null){
			formAddError(input)
			return 0;
		}else{
			for(var i = 0; i < passwordSplit.length; i++) {
				const reg = new RegExp(passwordSplit[i],'ig');
				console.log(reg);
				if(reg.test(name)){
					formAddError(input);
					console.log('Password vs First Name error')
					return 0;
				} else {
					return 1;
				}
			}
		}
	}

	function passCompareToEmail(input) {
		var formReq =  carForm.getElementsByClassName('required');
		var email = formReq[2].value;
		var passwordSplit = input.value.match(/\w{4}/gmi)
		if (passwordSplit == null){
			formAddError(input)
			return 0;
		}else{
			for(var i = 0; i < passwordSplit.length; i++) {
				const reg = new RegExp(passwordSplit[i],'ig');
				console.log(reg);
				if(reg.test(email)){
					formAddError(input);
					console.log('Password vs Email error')
					return 0;
				} else {
					return 1;
				}
			}
		}
	}
// });