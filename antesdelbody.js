//MANEJO DE DOM

let encabezados = "";

window.onclick = function() {
    //Crea una serie de elementos por cada tag encontrado
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("¿Quieres ser mi morrita?");

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
}

//Tipos de datos en JAVASCRIPT

