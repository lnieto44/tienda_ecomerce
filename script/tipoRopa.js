import ropa from './BD.js'
const card = document.querySelector('#card-ropa');
const tituloCategoria = document.querySelector('#cont-titulo');

function CargarRopa(ropa) {
    let categoriaRopa = localStorage.getItem('Categoria');
    var categoria="https://developer.mozilla.org/";


    card.innerHTML = "";
    ropa.forEach(ropainfo => {
        categoria = '"' + ropainfo.categoria + '"';
        if (categoriaRopa  == categoria) {
            tituloCategoria.innerHTML = "Ropa de " + ropainfo.categoria;
            idRopas.push(ropainfo.id);
            const item = document.createElement('div');
            item.innerHTML = `
            <div class="card cont-carta" id="${ropainfo.id}" style="width: 12rem;">
                <h5 class="card-title">${ropainfo.name}</h5>
                <a href="productos.html" class=" ${ropainfo.id}">
                <img src=${ropainfo.image} class="card-img-top image-carta" class="btn btn-primary botones" alt="...">
                </a>
                <div class="precio">
                    <h5>Precio: $ ${Intl.NumberFormat('es-DE').format(ropainfo.precio)}</h5>
                </div>
               
            </div>
            `;
            card.appendChild(item);
        }
    

    });
    console.log(idRopas.length);
}

let idRopas = [];

CargarRopa(ropa);
idRopas.forEach(ropas => {
    let boton = document.getElementById(ropas);
    boton.addEventListener('click', function() {
        localStorage.setItem("idRopa", JSON.stringify(ropas));
    });
})