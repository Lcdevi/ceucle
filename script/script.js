function sendMail(params) {
	let resetEmail = document.getElementById("email")
	let element = document.getElementById("validatesubscribe");

	var tempParams = {
			email: document.getElementById("email").value
	};

	function emailIsValid (email) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	}

	// console.log(resetEmail.value)

	if (emailIsValid(resetEmail.value)) {

		emailjs.send('service_dapgoeh', 'template_0r3ynqe', tempParams)
		.then((res) => {
			console.log('success', res.status, res.text);
		}, (error) => {
			console.log('FAILED...', error.text)
		})
		
		resetEmail.value = resetEmail.defaultValue;
		
		element.classList.add("validateappears");

	} else {
		alert("Veuillez saisir un email valide")
	}

}