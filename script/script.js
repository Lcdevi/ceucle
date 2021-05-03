function sendMail(params) {
	let resetEmail = document.getElementById("email")
    var tempParams = {
        email: document.getElementById("email").value
    };
		console.log("tempParams--->", tempParams)

		emailjs.send('service_dapgoeh', 'template_0r3ynqe', tempParams)
			.then((res) => {
				console.log('success', res.status, res.text);
			}, (error) => {
				console.log('FAILED...', error.text)
			})
			resetEmail.value = resetEmail.defaultValue;
}