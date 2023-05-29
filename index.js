function encriptar() {
    let texto = document.getElementById("texto").value;
        
    let textocifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (document.getElementById("texto").value.length != 0){
        document.getElementById("texto").value = textocifrado;
        document.getElementById("titulo-mensaje").textContent = "Texto encriptado con Éxito";
        document.getElementById("parrafo") .textContent ="";
       
    } else {
        alert("Debes ingresar algún texto");
        document.getElementById("titulo-mensaje").textContent = "Ningún mensaje fue encontrado";
        document.getElementById("parrafo") .textContent ="Ingrese el mensaje que quiere encriptar o desencriptar";
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textocifrado = texto
        .replace(/enter/gi, "e") 
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0){
        document.getElementById("texto").value = textocifrado;
        document.getElementById("titulo-mensaje").textContent = "Texto desencriptado con Éxito";
        document.getElementById("parrafo") .textContent ="";
    }else{
        alert("Debes ingresar algún texto");
        document.getElementById("titulo-mensaje").textContent = "Ningún mensaje fue encontrado";
        document.getElementById("parrafo") .textContent ="Ingrese el mensaje que quiere encriptar o desencriptar";
    }

}