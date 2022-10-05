//establezco el constructor (Producto) para crear los componentes del array productos
class Producto {
    constructor(id, nombre, importe, categoria, stock,) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.categoria = categoria
        this.stock = stock
    }
}

//defino el array de productos
const stockProductos = []

//defino una funcion para completar el array productos con el constructor Producto
function generadorAutomatico() {
    stockProductos.push(new Producto(01, "Harina 000", 250, "Harinas", 100))
    stockProductos.push(new Producto(02, "Harina 0000", 260, "Harinas", 100))
    stockProductos.push(new Producto(03, "Harina Leudante", 300, "Harinas", 100))
    stockProductos.push(new Producto(04, "Harina integral", 300, "Harinas", 100))
    stockProductos.push(new Producto(05, "Harina de Arroz", 400, "Harinas", 100))
    stockProductos.push(new Producto(06, "Harina de mandioca", 400, "Harinas", 100))
    stockProductos.push(new Producto(07, "Arroz blanco", 250, "Arroz", 100))
    stockProductos.push(new Producto(08, "Arroz integral", 350, "Arroz", 100))
    stockProductos.push(new Producto(09, "Arroz Yamani", 500, "Arroz", 100))
    stockProductos.push(new Producto(10, "Arroz Doble carolina", 500, "Arroz", 100))
    stockProductos.push(new Producto(11, "Arroz Carnaroli", 550, "Arroz", 100))
    stockProductos.push(new Producto(12, "Copos de maiz", 250, "Cereales", 100))
    stockProductos.push(new Producto(13, "Copos azucarados", 250, "Cereales", 100))
    stockProductos.push(new Producto(14, "Chocolatitos", 250, "Cereales", 100))
    stockProductos.push(new Producto(15, "Vainillitas", 250, "Cereales", 100))
    stockProductos.push(new Producto(16, "Fibritas", 250, "Cereales", 100))
    stockProductos.push(new Producto(17, "Coquitos", 250, "Cereales", 100))
    stockProductos.push(new Producto(18, "Sal marina", 250, "Condimentos", 100))
    stockProductos.push(new Producto(19, "Sal Himalaya", 250, "Condimentos", 100))
    stockProductos.push(new Producto(20, "Pimienta blanca", 250, "Condimentos", 100))
    stockProductos.push(new Producto(21, "Pimienta verde", 450, "Condimentos", 100))
    stockProductos.push(new Producto(22, "Pimienta Roja", 350, "Condimentos", 100))
    stockProductos.push(new Producto(23, "Pimienta Negra", 350, "Condimentos", 100))
    stockProductos.push(new Producto(24, "Aji molido", 250, "Condimentos", 100))
    stockProductos.push(new Producto(25, "Pimenton", 250, "Condimentos", 100))
    stockProductos.push(new Producto(26, "Nuez moscada", 300, "Condimentos", 100))
    stockProductos.push(new Producto(27, "Mix tropical", 250, "Frutos secos", 100))
    stockProductos.push(new Producto(28, "Mix energetico", 250, "Frutos secos", 100))
    stockProductos.push(new Producto(29, "Mix frutal", 250, "Frutos secos", 100))
    stockProductos.push(new Producto(30, "Maiz frito", 250, "Frutos secos", 100))
}
generadorAutomatico()


//defino variables DOM
const contenedorProductos= document.querySelector("#contenedor-productos")
const contenedorCarrito= document.querySelector("#carrito-contenedor")
const botonVaciar = document.querySelector('#vaciar-carrito')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precio-total')

let carrito = []

//storage
document.addEventListener('DOMContentLoaded', () =>{
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//creo las tarjetas para cada producto
stockProductos.forEach((Producto) => {
    const div = document.createElement('div')
    div.classList.add("card")
    div.innerHTML = `
    <h3>${Producto.nombre}</h3>
    <p>precio: ${Producto.importe}$</p>
    <button id="agregar${Producto.id}" class="boton-agregar"> Agregar </button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById (`agregar${Producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(Producto.id)
        Toastify({
            text: "producto agregado al carrito",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, grey, lightgrey)",
            },
          }).showToast();
    })
   
})

//vacia el carrito completamente
botonVaciar.addEventListener('click', () => {
    Swal.fire({
        title: 'Error!',
        text: 'Desea vaciar el carrito?',
        icon: 'Question',
        confirmButton: 'true',
        showCancelButton: 'true',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      })
    carrito  = []
    actualizarCarrito()
})

//refresca el carrito automaticamente
const actualizarCarrito = () =>{
    contenedorCarrito.innerHTML=""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className =('productoEnCarrito')
        div.innerHTML=`
        <p>${prod.nombre}</p>
        <p>${prod.precio}</P>
        <p>Cantidad:<span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.importe, 0)
}

//funcion para agrupar productos iguales en el carrito
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some( prod => prod.id === prodId)
    
    if (existe){
        const prod = carrito.map (prod => {
            if (prod.id == prodId){
                prod.cantidad++
            }
        })
    } 
            else {
                const item = stockProductos.find((prod) => prod.id === prodId)
                carrito.push(item)
    }
    actualizarCarrito()
}

//elimina el producto del carrito.
const eliminarDelCarrito = (prodId) => {
    const item=carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice (indice,1)
    actualizarCarrito()
}

//filtro de busqueda productos
document.addEventListener("keyup",(e)=> {
    if (e.target.matches("#buscador")) {
     document.querySelectorAll(".card").forEach( product =>{
        product.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? product.classList.remove("filter")
        : product.classList.add("filter") 
    
    })
}
}
)