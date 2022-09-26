const listaDeCompra = document.getElementById("listaDeCompra")
const finalizarCompra = document.getElementById("finalizarCompra")
const regresar = document.getElementById("volver")

let obtenerNombre = localStorage.getItem("nombre")
let obtenerPrecio = localStorage.getItem("precio")

let carrito = JSON.parse(localStorage.getItem("listado"))

console.log(carrito)

let totalCompra = 0

for (const elemento in carrito) {
    //crear elementos li para agregar los articulos//
    let lista = document.createElement("li")
    lista.innerHTML = JSON.stringify(carrito[elemento].referencia) + " $: " + JSON.stringify(carrito[elemento].costo)
    listaDeCompra.appendChild(lista)
    console.log(Number(carrito[elemento].costo))
    let borrarIcono = document.createElement("spam")
    borrarIcono.innerHTML = ` &nbsp &nbsp <img src="imagenes/borrar.png" height="20">`
    lista.appendChild(borrarIcono)

    //acumular el valor de los articulos//
    totalCompra += Number(carrito[elemento].costo)

    //borrar articulos//

    borrarIcono.onclick = function () {
        lista.remove();
        totalCompra -= Number(carrito[elemento].costo)
        total.innerHTML = `El total de la compra es $: ${totalCompra} Pesos`
        listaDeCompra.appendChild(total)

    }

}

//crear elemento h3 para mostar el valor total//
let total = document.createElement("h2")
total.innerHTML = `El total de la compra es $: ${totalCompra} Pesos`
listaDeCompra.appendChild(total)








//mostara alerta para confirmar compra//
finalizarCompra.addEventListener("click", ventanaSwal = () => {

    swal({
        title: "Compra Realizada",
        text: "Gracias",
        icon: "success",
        button: "Cerrar",
    });

})
//limpiar storage 
regresar.onclick = () => localStorage.clear();