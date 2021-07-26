const btnSubmit = $("#btnSubmit");
$('#btnSubmit').on("click", enviarFormulario);



const suscripcion = [];

function enviarFormulario() {
    const mail = $("#email").value;
    const text = $("#text").value;
    suscripcion.push({ mail: mail, text: text });

    imprimirSaludo()
}


function imprimirSaludo() {

    const print = $("#print");

    suscripcion.forEach(element => {
        print.innerHTML += `<p> Gracias por tu consulta, nos estaremos comunicando a tu direccion de email ${element.mail}</p>`

    })
}
