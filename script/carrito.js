const rop = document.querySelector('#cont-secundario');
let arrayCarrito = [];

if (JSON.parse(localStorage.getItem('Carrito'))) {
    arrayCarrito = JSON.parse(localStorage.getItem('Carrito'));
}

let arrayId = [];

let arraySubtotales = [];
const subTotal = () => {
    arrayCarrito.forEach(indice => {
        let subtotal = Number(indice.cantidad) * Number(indice.precio);
        arraySubtotales.push(subtotal);
    });
}

subTotal();

function verStorage() {

    let contador = 0;
    arrayCarrito.forEach(carrito => {

        const items = document.createElement('div');
        items.innerHTML = `
        <div class="cont-tarjetas" id="card-ropa">
        <div class="card cont-carta" id="" style="width: 12rem;">
            <h5 class="card-title">${carrito.nombre}</h5>
            <img src="${carrito.imagen}" class="card-img-top image-carta" alt="...">
            <div class="card-body ">
                <a href="carrito.html" class="btn btn-primary botones" id="${contador}">Eliminar</a>
            </div>
        </div>
        </div>
        <div class="cont-tarjetas" id="card-ropa">
        <div class="card cont-carta" id="" style="width: 12rem;">
            <h5 class="card-title">cantidad</h5>
            <label for="">${carrito.cantidad}</label>
        </div>
        </div>
        <div class="cont-tarjetas" id="card-ropa">
        <div class="card cont-carta" id="" style="width: 12rem;">
            <h5 class="card-title">Precio</h5>
            <label for="">$ ${Intl.NumberFormat('es-DE').format(carrito.precio)}</label>
        </div>
        </div>
        <div class="cont-tarjetas" id="card-ropa">
        <div class="card cont-carta" id="" style="width: 12rem;">
            <h5 class="card-title">Sub Total</h5>
            <label for="">$ ${Intl.NumberFormat('es-DE').format(arraySubtotales[contador])}</label>
        </div>
        </div>
                    `;
        rop.appendChild(items);
        arrayId.push(contador);
        contador++;
    });
}
verStorage();
let valorTotal = 0;
const precioTotal = () => {
    const rop = document.querySelector('#cont-valor');
    arraySubtotales.forEach(indice => {
        valorTotal += indice;
    });

    const items = document.createElement('div');
    items.innerHTML = `
    <label for="">Total:   $ ${Intl.NumberFormat('es-DE').format(valorTotal)}</label>
    <div class="boton">
        <div class="boton-pagar">
            <a href="carrito.html" class="btn btn-primary botones" id="vaciar">Limpiar</a>
        </div>
        <div class="boton-limpiar">
            <a href="registro.html" class="btn btn-primary botones" id="pagar">Pagar</a>
        </div>
    </div>
    `;
    rop.appendChild(items);

    if (arrayCarrito.length >= 1) {
        localStorage.setItem('cantidadProductos', JSON.stringify(arrayCarrito.length));
    } else {
        localStorage.setItem('cantidadProductos', JSON.stringify(0));
    }
}
precioTotal();
arrayId.forEach(indice => {
    let boton = document.getElementById(indice);
    boton.addEventListener('click', function() {
        arrayCarrito.splice(indice, 1);
        localStorage.setItem('Carrito', JSON.stringify(arrayCarrito));
        actualizar();
    });

})

let boton_pagar = document.getElementById('pagar');
boton_pagar.addEventListener('click', function() {
    localStorage.setItem('ValorCompra', JSON.stringify(valorTotal));
});

let boton_limpiar = document.getElementById('vaciar');
boton_limpiar.addEventListener('click', function() {
    arrayCarrito.splice(0, arrayCarrito.length);
    localStorage.setItem('Carrito', JSON.stringify(arrayCarrito));
    localStorage.setItem('cantidadProductos', JSON.stringify(0));
});

