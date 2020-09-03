function mostrarFecha(elemento){
    elemento.innerHTML = Date()
}

function stringArray(string){
    var arr = string.split(",");
    return arr[0];
}

function stringArray(string, n){
    var arr = string.split(",");
    return arr[n-1];
}

function mostrarArray(arreglo){
    var salida = "";

    for(i = 0; i<arreglo.length; i++){
        salida = salida + arreglo[i] + "<br>";
    }

    return salida;
}