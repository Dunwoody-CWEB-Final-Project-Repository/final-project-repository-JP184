let form = document.getElementById('signUpForm')

form.onsubmit = sendData

function sendData(e) {
    e.preventDefault(form)

    const formData = new FormData(form)

    let Params = {
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            email: formData.get('email'),
            username: formData.get('username'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        }),
        method: "POST"
    }

    fetch("/signup", Params)
        .then(res => res.json())
        .then(data => {

            let error = document.querySelector('.error');

            document.querySelector('.errorContainer').style.display = "block";
            error.value = "";

            try {
                data.errors.forEach((err) => {
                    error.innerHTML += `<li>${err.msg}`;
                });
            } catch (err) {

            }

            console.log(data.errors);
        })
        .catch(err => { console.log(err) })
}