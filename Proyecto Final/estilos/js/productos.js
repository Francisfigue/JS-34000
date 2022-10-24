//establezco el constructor (Producto) para crear los componentes del array productos
class Producto {
    constructor(id, nombre, importe, categoria, stock, cantidad, imagen) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.categoria = categoria
        this.stock = stock
        this.cantidad = 1
        this.imagen = imagen
    }
}

//defino el array de productos
const stockProductos = []

//defino una funcion para completar el array productos con el constructor Producto
function generadorAutomatico() {
    stockProductos.push(new Producto(01, "Harina 000", 250, "Harinas", 100, 1,'./estilos/img/harina.jpg'))
    stockProductos.push(new Producto(02, "Harina 0000", 260, "Harinas", 100, 1,'./estilos/img/harina.jpg'))
    stockProductos.push(new Producto(03, "Harina Leudante", 300, "Harinas", 100, 1,'./estilos/img/harina.jpg'))
    stockProductos.push(new Producto(04, "Harina integral", 300, "Harinas", 100, 1,'./estilos/img/harina integral.jpg'))
    stockProductos.push(new Producto(05, "Harina de Arroz", 400, "Harinas", 100, 1,'./estilos/img/harina integral.jpg'))
    stockProductos.push(new Producto(06, "Harina de mandioca", 400, "Harinas", 100, 1,'./estilos/img/harina integral.jpg'))
    stockProductos.push(new Producto(07, "Arroz blanco", 250, "Arroz", 100, 1,'./estilos/img/arroz.jpg'))
    stockProductos.push(new Producto(08, "Arroz integral", 350, "Arroz", 100, 1,'./estilos/img/arroz.jpg'))
    stockProductos.push(new Producto(09, "Arroz Yamani", 500, "Arroz", 100, 1,'./estilos/img/arroz.jpg'))
    stockProductos.push(new Producto(10, "Arroz Doble carolina", 500, "Arroz", 100, 1,'./estilos/img/arroz carnaroli.jpg'))
    stockProductos.push(new Producto(11, "Arroz Carnaroli", 550, "Arroz", 100, 1,'./estilos/img/arroz carnaroli.jpg'))
    stockProductos.push(new Producto(12, "Copos de maiz", 250, "Cereales", 100, 1,'./estilos/img/arroz carnaroli.jpg'))
    stockProductos.push(new Producto(13, "Copos azucarados", 250, "Cereales", 100, 1,'./estilos/img/copos de maiz.jpg'))
    stockProductos.push(new Producto(14, "Chocolatitos", 250, "Cereales", 100, 1,'./estilos/img/chocolatitos.jpg'))
    stockProductos.push(new Producto(15, "Vainillitas", 250, "Cereales", 100, 1,'./estilos/img/vainillas.jpg'))
    stockProductos.push(new Producto(16, "Fibritas", 250, "Cereales", 100, 1,'./estilos/img/fibritas.jpg'))
    stockProductos.push(new Producto(17, "Coquitos", 250, "Cereales", 100, 1,'./estilos/img/granola coco.jpg'))
    stockProductos.push(new Producto(18, "Sal marina", 250, "Condimentos", 100, 1,'./estilos/img/sal.jpg'))
    stockProductos.push(new Producto(19, "Sal Himalaya", 250, "Condimentos", 100, 1,'./estilos/img/sal.jpg'))
    stockProductos.push(new Producto(20, "Pimienta blanca", 250, "Condimentos", 100, 1,'./estilos/img/pimienta blanca.jpg'))
    stockProductos.push(new Producto(21, "Pimienta verde", 450, "Condimentos", 100, 1,'./estilos/img/pimienta verde.jpg'))
    stockProductos.push(new Producto(22, "Pimienta Roja", 350, "Condimentos", 100, 1,'./estilos/img/pimienta roja.jpg'))
    stockProductos.push(new Producto(23, "Pimienta Negra", 350, "Condimentos", 100, 1,'./estilos/img/pimienta negra.jpg'))
    stockProductos.push(new Producto(24, "Aji molido", 250, "Condimentos", 100, 1,'./estilos/img/aji molido.jpg'))
    stockProductos.push(new Producto(25, "Pimenton", 250, "Condimentos", 100, 1,'./estilos/img/pimenton.jpg'))
    stockProductos.push(new Producto(26, "Nuez moscada", 300, "Condimentos", 100, 1,'./estilos/img/nuez moscada.jpg'))
    stockProductos.push(new Producto(27, "Mix tropical", 250, "Frutos secos", 100, 1,'./estilos/img/Mix frutos secos.jpg'))
    stockProductos.push(new Producto(28, "Mix energetico", 250, "Frutos secos", 100, 1,'./estilos/img/Mix frutos secos.jpg'))
    stockProductos.push(new Producto(29, "Mix frutal", 250, "Frutos secos", 100, 1,'./estilos/img/Mix frutos secos.jpg'))
    stockProductos.push(new Producto(30, "Maiz frito", 250, "Frutos secos", 100, 1,'./estilos/img/maiz frito.jpg'))
}
generadorAutomatico()


//defino variables DOM
const contenedorProductos= document.querySelector("#contenedor-productos")
const contenedorCarrito= document.querySelector("#carrito-contenedor")
const botonVaciar = document.querySelector('#vaciar-carrito')
const botonComprar = document.querySelector('#Comprar-carrito')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precio-total')
const comentarios = document.querySelector('#Comentarios')
const URL ="./estilos/JS/comentarios.json"
let carrito = []
let contenidoHTML = ""

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
    <img src="${Producto.imagen}" class="img-productos">
    <h3>${Producto.nombre}</h3>
    <p>Precio: ${Producto.importe}$</p>
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
              background: "grey",
            },
          }).showToast();
    })
   
})

//vacia el carrito completamente
botonVaciar.addEventListener('click', () => {
    Swal.fire({
        title: 'Atencion!',
        text: 'Desea vaciar el carrito?',
        icon: 'question',
        showCancelButton: 'true',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire({
                text: 'el carrito se vacio con exito!',
                icon: 'success',})
            carrito = []
            }
        else {}
        actualizarCarrito()
    })
})

botonComprar.addEventListener ('click', () => {
    Swal.fire({  
        title: 'Finalizo su compra',
        text: 'Desea continuar?',
        icon: 'question',
        showCancelButton: 'true',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire({
                text: 'Nos pondremos en contacto contigo para ultimar detalles de su compra',
                icon: 'success',})
            }
        else {}
}) })

//refresca el carrito automaticamente
const actualizarCarrito = () =>{
    contenedorCarrito.innerHTML=""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className =('productoEnCarrito')
        div.innerHTML=`
        <p>${prod.nombre}</p>
        <p>${prod.importe}</P>
        <p>Cantidad:<span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fa-solid fa-trash-can"></i> <p>eliminar producto</p></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.importe * prod.cantidad, 0)
}

//funcion para agrupar productos iguales en el carrito
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some( prod => prod.id === prodId)
    
    if (existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
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
}})

fetch(URL)
    .then(res => res.json())
    .then ((response) => {
        response.forEach((abc) => {
            const com = document.createElement('div')
            com.innerHTML=`
            <div class="comms">
            <h4>${abc.User}</h4>
            <p>${abc.Comentario}</p>
            </div> 
            `
            comentarios.append(com)
        })
    }
    )

