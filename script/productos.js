import ropa from './BD.js'

const rop = document.querySelector('#contPrincipal');

function ObervaDatos() {
    idRopa = localStorage.getItem('idRopa');
    ropa.forEach(ropainfo => {
        if (idRopa == ropainfo.id) {
            const items = document.createElement('div');
            document.title = "Tienda de Ropa | " + ropainfo.name;
            items.innerHTML = `
                    <div class="div-img">
                        <img src="${ropainfo.image}" alt="">
                    </div>
                    <div class="cont-descripcion">
                        <div>
                            <div class="div-titulo">
                                <h2>${ropainfo.name}</h2>
                            </div>
                            </br>
                            <div class="div-boton">
                                    <label for="">$ ${Intl.NumberFormat('es-DE').format(ropainfo.precio)}</label>
                                </div> 
                            <div>
                                 <p>
                                    ${ropainfo.descripcion}
                                </p>
                            </div>
                            
                            <div class="cont-botones">
                                   
                                <div class="div-boton">
                                    <input type="number" min="0" pattern="^[0-9]+" id="cantidad" class="" style="height: 68px" placeholder="0">
                                </div>    
                                <div class="div-boton">
                                    <button class="btn btn-primary" id="comprar">Agregar al Carrito</button>
                                </div>    
                            </div>
                        </div>
                    </div>
                `;
            rop.appendChild(items);
            precio = Number(ropainfo.precio);
            nombre = ropainfo.name;
            imagen = ropainfo.image;
            id = idRopa;

        }
    });
}



let idRopa;
let cantidad, precio, nombre, imagen, id;

let objetoCarrito = []
if (JSON.parse(localStorage.getItem('Carrito'))) {
    objetoCarrito = JSON.parse(localStorage.getItem('Carrito'));
}

//adquirir producto
ObervaDatos();

let cantidadProductos = 0;
if (JSON.parse(localStorage.getItem('cantidadProductos'))) {
    cantidadProductos = JSON.parse(localStorage.getItem('cantidadProductos'));
}

const compraRopa = () => {



    cantidad = document.getElementById("cantidad").value;
    if (isNaN(cantidad) || cantidad == 0) {
        swal({
            title: "¡No fue posible agregar al carrito!",
            text: "¡El valor ingresado en cantidad debe ser mayor a 0!",
            icon: "error",
        });
    } else {
        objetoCarrito.push({
            "id": id,
            "nombre": nombre,
            "precio": precio,
            "cantidad": cantidad,
            "imagen": imagen
        });
        localStorage.setItem('Carrito', JSON.stringify(objetoCarrito));
        cantidadProductos = objetoCarrito.length;
        localStorage.setItem('cantidadProductos', JSON.stringify(cantidadProductos));
        swal({
            title: "¡Agregado Al Carrito!",
            text: "¡El producto se ha agregado al carrito de manera exitosa!",
            icon: "success",
        }).then(() => {
            location.reload()
        });
    }

}

let boton = document.getElementById('comprar');
boton.addEventListener('click', compraRopa);