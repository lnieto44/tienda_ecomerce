const cabecera = document.querySelector('#encabezado');
let cantProductos = 0;
if (JSON.parse(localStorage.getItem('cantidadProductos'))) {
    cantProductos = JSON.parse(localStorage.getItem('cantidadProductos'));
}
const encabezado = () => {
    const items = document.createElement('div');
    items.innerHTML = `
            <div class="cont-menu">
                <ul class="menu">
                    <li><a href="index.html">Menu</a></li>
                    <li class="">
                        <a href="carrito.html"><img src="images/carrito.png" />
                            <label for="">${cantProductos}</label></a>
                    </li>
                </ul>
            </div>
            <hr>
            `;
    cabecera.appendChild(items);
}

const pie_pagina = document.querySelector('#footer-principal');
const pieDePagina = () => {
    const items = document.createElement('div');
    items.innerHTML = `
             <div class=" text-center py-3 footerCopyright">© 2022 Copyright: Derechos reservados por la tienda de ropa
             </br>
                <a href="https://www.linkedin.com/in/lnieto44/"> Mas información en Linkedin </a>
                
            </div>
            `;
    pie_pagina.appendChild(items);
}

encabezado();
pieDePagina();