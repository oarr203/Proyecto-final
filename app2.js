const listaDeCompra = document.getElementById("listaDeCompra")
const finalizarCompra = document.getElementById("finalizarCompra")

let obtenerNombre = localStorage.getItem("nombre")
let obtenerPrecio = localStorage.getItem("precio")

let carrito = JSON.parse(localStorage.getItem("listado"))

console.log(carrito)



for (const elemento in carrito) {

    let lista = document.createElement("li")
    lista.innerHTML = JSON.stringify(carrito[elemento].referencia) + " $: " + JSON.stringify(carrito[elemento].costo)
    listaDeCompra.appendChild(lista)
}

finalizarCompra.addEventListener("click", ventanaSwal = () => {

    swal({
        title: "Compra Realizada",
        text: "Gracias",
        icon: "success",
        button: "Cerrar",
    });

})