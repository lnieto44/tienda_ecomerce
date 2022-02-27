let categoria;

const enviarCategoria = () => {
    localStorage.setItem("Categoria", JSON.stringify(categoria));
}


let boton1 = document.getElementById('mujer');
boton1.addEventListener('click', function() {
    categoria = "Mujer";
    enviarCategoria();
});

let boton2 = document.getElementById('hombre');
boton2.addEventListener('click', function() {
    categoria = "Hombre";
    enviarCategoria();
});

