//i para que afecte tanto a mayusculas como a minusculas
//g para que afecte la linea u oracion
//m para que afecte a multiples lineas o parrafo

var btnEncriptar = document.querySelector(".btn_encriptar");
var btnDesencriptar = document.querySelector(".btn_desencriptar");
var btnCopiar = document.querySelector(".copy");

var contMuneco = document.querySelector(".muneco");
var conthtres = document.querySelector(".titulohtres");
var contSubtitulo = document.querySelector(".subtitulo");
var textoMostrar = document.querySelector(".mostrarTexto");


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copyText;

function encriptar(){
    ocultarlos();
    textoMostrar.textContent = encriptarTexto();
}
function encriptarTexto(){
    var textoNormal = document.querySelector(".ingresarTexto").value.toLowerCase();
 
    var txtCifrado = textoNormal.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");
    return txtCifrado;
}
function desencriptar(){
    textoMostrar.textContent = desencriptarTexto();
}
function desencriptarTexto(){
    var textoEncriptado = document.querySelector(".ingresarTexto").value.toLowerCase();

    var txtCifrado = textoEncriptado.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
    return txtCifrado;
}
function ocultarlos(){

    contMuneco.classList.add("ocultar");
    conthtres.classList.add("ocultar");
    contSubtitulo.classList.add("ocultar");
}

function copyText(){
        var copiandoTexto = document.getElementById("showText");
            copiandoTexto.select();
            document.execCommand("copy");
}