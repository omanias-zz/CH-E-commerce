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


let url = 'https://jsonplaceholder.typicode.com/users'


$("#btnApi").click(() => {
    $.get(url, function (request, state) {
        if (state === "success") {

            request.forEach(element => {
                $("section").append(`
                
                <div class="container-fluid">
                <p>NOMBRE DE USUARIO ${element.username} -- CORREO ELECTRONICO ${element.email}</p>
                <div>               
                `);
            }
            )
        };
    });
});
