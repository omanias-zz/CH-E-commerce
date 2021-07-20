const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", enviarFormulario);


const suscripcion = [];

function enviarFormulario() {
    const mail = document.getElementById("email").value;
    const text = document.getElementById("text").value;
    suscripcion.push({ mail: mail, text: text });

    imprimirSaludo()
}

function imprimirSaludo() {

    const print = document.getElementById("print");

    suscripcion.forEach(element => {
        print.innerHTML += `<p> Gracias por tu consulta, nos estaremos comunicando a tu direccion de email ${element.mail}</p>`
    })
}