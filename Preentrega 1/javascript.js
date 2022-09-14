const d = document;

let productos = [ 
    {Id: 1,
    nombre: "harina 000",
    precioKg: 250,
    stock: 100,   
},
    {Id: 2,
    nombre: "harina 0000",
    precioKg: 250,
    stock: 100,   
},
    {Id: 3,
    nombre: "harina integral",
    precioKg: 300,
    stock: 75,   
},
    {Id: 4,
    nombre: "poroto blanco",
    precioKg: 700,
    stock: 60,   
},
    {Id: 5,
    nombre: "poroto colorado",
    precioKg: 620,
    stock: 45,   
},
    {Id: 6,
    nombre: "poroto negro",
    precioKg: 500,
    stock: 100,   
},
    {Id: 7,
    nombre: "copos maiz",
    precioKg: 350,
    stock: 50,   
},
    {Id: 8,
    nombre: "cereal chocolate",
    precioKg: 450,
    stock: 65,   
},
    {Id: 9,
    nombre:"granola mix",
    precioKg: 850,
    stock: 50,   
},
    {Id: 10,
    nombre: "granola crocante",
    precioKg:1050,
    stock: 40,   
},
]

let carrito = [
    {Id: 9,
        nombre:"granola mix",
        precioKg: 850,
        stock: 50,   
    },
    {Id: 6,
        nombre: "poroto negro",
        precioKg: 500,
        stock: 100,   
    },
    {Id: 2,
        nombre: "harina 0000",
        precioKg: 250,
        stock: 100, }
]

console.table (productos)

const addBtn= d.querySelector("#addBtn")

function enviar(param) {
    alert ("Producto agregado")
}

addBtn.addEventListener ( "click", () => { 
    enviar() 
} )

function filtrarProductos() {
    let parametro = prompt("Ingresa el producto buscado:")
    let resultado = productos.filter((producto)=> producto.nombre.includes(parametro))
    console.table(resultado)}


function ordenarProductosPrecio() {
    productos.sort((a, b)=> {
        if (a.precio > b.precio) {
            return 1
        }
        if (a.precio < b.precio) {
            return -1
        }
        return 0
    })
    console.table(productos)
}

function ordenarProductosStock() {
    productos.sort ((a,b) => {
        if (a.stock > b.stock) {
            return 1
        }
        if (a.stock < b.stock) {
            return -1
        }
        return 0
    })
    console.table(productos)
}

let envio = 550
function calcularTotal() {
    let total = carrito.reduce((acumulador, producto)=>  acumulador + producto.precioKg, envio)
        console.log("Total del carrito + envio:", total)
    }


export default function searchFilters(input, selector){
    d.addEventListener("keyup",(e)=> {
        if (e.target.matches(input)){
        
         if(e.key === "Escape") e.target.value= "";
        
         d.querySelectorAll(selector).forEach((el)=>
            el.textContent.toLowerCase().includes(e.target.value)
            ? el.classList.remove("filter")
            :el.classList.add("filter")
        );
        } 
    });
}







searchFilters (".card-filter",".card")