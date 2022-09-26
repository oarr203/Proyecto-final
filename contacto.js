let nombre = document.getElementById("Nombre")
let apellido = document.getElementById("Apellido")
let correo = document.getElementById("Correo")
let telefono = document.getElementById("Telefono")
let texto = document.getElementById("Comentario")
let botonEnviar = document.getElementById("Enviar")


botonEnviar.onclick = enviar;

function enviar() {

    console.log(nombre.value)
    console.log(texto.value)

    nombre.value == "" || apellido.value == "" || correo.value == "" || telefono.value == "" || texto.value == "" ?
    Toastify({
        text: "Informacion incompleta",
        position: "center",
        className: "warning",
        gravity: "bottom",
        duration: 1500,
        stopOnFocus: false,
        style: {
          background: "rgb(212, 51, 51)",
        }
      }).showToast():

        swal({
            title: "La infomacion ingresada es correcta?",
            text: `Nombre: ${nombre.value} Apellido: ${apellido.value} Correo: ${correo.value} Telefono: ${telefono.value}`,
            icon: "info",
            buttons: true,
            dangerMode: false,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Gracias, pronto nos estaremos comunicando contigo!", {
                    icon: "success",
                });

                localStorage.setItem("nombre", nombre.value)
                localStorage.setItem("apellido", apellido.value)
                localStorage.setItem("correo", correo.value)
                localStorage.setItem("telefono", telefono.value)
                localStorage.setItem("solicitud", texto.value)
                nombre.value=""
                apellido.value=""
                correo.value=""
                telefono.value=""
                texto.value=""
            } else {
                swal("Ingresa la informacion nuevamente");
            }
        });


}


console.log("hola")