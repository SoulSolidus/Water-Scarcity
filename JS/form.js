const name = document.getElementById('name');
const email = document.getElementById('email');
const opinion = document.getElementById('opinion');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener("click", function () {
    if (name.value != "" && email.value != "" && opinion.value != "") {
        SendMail();
    } else {
        alert("Por favor llene todos los datos");
    }
});

function SendMail() {
    var tempParams = {
        from_name: name.value,
        to_name: 'Odalmer y Juan',
        message: opinion.value,
        from_email: email.value
    };
    emailjs.send('DuarteJoven', 'template_duarteJoven', tempParams)
        .then(function (res) {
            console.log("success", res.status);
        });
}