const articulo1 = document.getElementById("compra1")
const articulo2 = document.getElementById("compra2")
const articulo3 = document.getElementById("compra3")
const articulo4 = document.getElementById("compra4")
const articulo5 = document.getElementById("compra5")
const articulo6 = document.getElementById("compra6")
const articulo7 = document.getElementById("compra7")
const articulo8 = document.getElementById("compra8")
const articulo9 = document.getElementById("compra9")
const articulo10 = document.getElementById("compra10")
const articulo11 = document.getElementById("compra11")
const articulo12 = document.getElementById("compra12")
/*const listaDeCompras = document.getElementById("listaDeCompras")*/
const nombre1 = document.getElementById("nombre1")
const precio1 = document.getElementById("precio1")
const nombre2 = document.getElementById("nombre2")
const precio2 = document.getElementById("precio2")
const nombre3 = document.getElementById("nombre3")
const precio3 = document.getElementById("precio3")
const nombre4 = document.getElementById("nombre4")
const precio4 = document.getElementById("precio4")
const nombre5 = document.getElementById("nombre5")
const precio5 = document.getElementById("precio5")
const nombre6 = document.getElementById("nombre6")
const precio6 = document.getElementById("precio6")
const nombre7 = document.getElementById("nombre7")
const precio7 = document.getElementById("precio7")
const nombre8 = document.getElementById("nombre8")
const precio8 = document.getElementById("precio8")
const nombre9 = document.getElementById("nombre9")
const precio9 = document.getElementById("precio9")
const nombre10 = document.getElementById("nombre10")
const precio10 = document.getElementById("precio10")
const nombre11 = document.getElementById("nombre11")
const precio11 = document.getElementById("precio11")
const nombre12 = document.getElementById("nombre12")
const precio12 = document.getElementById("precio12")

let buscar = document.getElementById("buscar")
let palabra = document.getElementById("palabra")
let elemento = document.getElementById('elem')
let ventana = document.getElementById("ventana")

articulo1.addEventListener("click", agregar1)
articulo2.addEventListener("click", agregar2)
articulo3.addEventListener("click", agregar3)
articulo4.addEventListener("click", agregar4)
articulo5.addEventListener("click", agregar5)
articulo6.addEventListener("click", agregar6)
articulo7.addEventListener("click", agregar7)
articulo8.addEventListener("click", agregar8)
articulo9.addEventListener("click", agregar9)
articulo10.addEventListener("click", agregar10)
articulo11.addEventListener("click", agregar11)
articulo12.addEventListener("click", agregar12)

//localStorage.setItem("nombre",nombre1.innerText)
//localStorage.setItem("precio",precio1.innerText)

class zapatillas {
    constructor(referencia, costo) {
        this.referencia = referencia
        this.costo = costo
    }
}

const productosAgregados = [];


function agregar1() {


    localStorage.setItem("nombre", nombre1.innerText)
    localStorage.setItem("precio", precio1.innerText)

    agregar()
}

function agregar2() {


    localStorage.setItem("nombre", nombre2.innerText)
    localStorage.setItem("precio", precio2.innerText)

    agregar()
}

function agregar3() {


    localStorage.setItem("nombre", nombre3.innerText)
    localStorage.setItem("precio", precio3.innerText)

    agregar()
}

function agregar4() {


    localStorage.setItem("nombre", nombre4.innerText)
    localStorage.setItem("precio", precio4.innerText)

    agregar()
}

function agregar5() {


    localStorage.setItem("nombre", nombre5.innerText)
    localStorage.setItem("precio", precio5.innerText)

    agregar()
}

function agregar6() {


    localStorage.setItem("nombre", nombre6.innerText)
    localStorage.setItem("precio", precio6.innerText)

    agregar()
}

function agregar7() {


    localStorage.setItem("nombre", nombre7.innerText)
    localStorage.setItem("precio", precio7.innerText)

    agregar()
}

function agregar8() {


    localStorage.setItem("nombre", nombre8.innerText)
    localStorage.setItem("precio", precio8.innerText)

    agregar()
}

function agregar9() {


    localStorage.setItem("nombre", nombre9.innerText)
    localStorage.setItem("precio", precio9.innerText)

    agregar()
}

function agregar10() {


    localStorage.setItem("nombre", nombre10.innerText)
    localStorage.setItem("precio", precio10.innerText)

    agregar()
}

function agregar11() {


    localStorage.setItem("nombre", nombre11.innerText)
    localStorage.setItem("precio", precio11.innerText)

    agregar()
}

function agregar12() {


    localStorage.setItem("nombre", nombre12.innerText)
    localStorage.setItem("precio", precio12.innerText)

    agregar()
}
// funcion general se ejecuta para al dar clic a cualquier boton de compra

function agregar() {

    Toastify({
        text: "Agregado al carrito de compras",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "rgb(212, 51, 51)",
        },


    }).showToast();

    let obtenerNombre = localStorage.getItem("nombre")
    let obtenerPrecio = localStorage.getItem("precio")

    /*let producto = document.createElement("li");
    producto.innerHTML = obtenerNombre + " " + obtenerPrecio
    listaDeCompras.appendChild(producto)*/

    productosAgregados.push(new zapatillas(obtenerNombre, obtenerPrecio))
    localStorage.setItem("listado", JSON.stringify(productosAgregados))


}

console.log(productosAgregados)

//aplicacion api search


const options = {
    method: 'GET',
    headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Key': 'fefec7e42bmshdba9da2e3789d3cp1357eejsn1e420a6eee42',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    }
};

let contador = 0;
buscar.onclick = () => {

    ventana.style.background = "rgba(0, 0, 0, 0.5)"
    elem.style.padding = "23px"


    if (contador != 0) {

        let lista = document.getElementsByTagName("li")

        while (elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
    }

    console.log(palabra.value)

    fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${palabra.value}`, options)
        .then(response => response.json())
        .then(response => {

            let titulo = response.results.map(datos => datos.title)
            let enlace = response.results.map(datos => datos.link)
            let descripcion = response.results.map(datos => datos.description)

            for (let i = 0; i < titulo.length; i++) {

                let elemento2 = document.createElement('li')
                elemento2.innerHTML = `<a href="${enlace[i]}" target="blank">${titulo[i]}</a><p>${descripcion[i]}</p>`
                elemento.appendChild(elemento2)

                contador = 1;
            }
            console.log(response)
        })
        .catch(err => console.error(err));



}