function sendMail(params) {
	let resetEmail = document.getElementById("emailform")
  let resetMessage = document.getElementById("message")
  let resetName = document.getElementById("name")

	var tempParams = {
		emailform: document.getElementById("emailform").value,
		message: document.getElementById("message").value,
		name: document.getElementById("name").value

	};

	function emailIsValid (email) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	}

	// console.log(resetEmail.value)

	if (emailIsValid(resetEmail.value)) {

		emailjs.send('service_dapgoeh', 'template_1lljj2j', tempParams)
		.then((res) => {
			console.log('success', res.status, res.text);
		}, (error) => {
			console.log('FAILED...', error.text)
		})
		
		resetEmail.value = resetEmail.defaultValue;
		resetMessage.value = resetMessage.defaultValue;
		resetName.value = resetName.defaultValue;

	} else {
		alert("Veuillez saisir un email valide")
	}

}