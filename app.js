//ASIDE
const panel = document.querySelector("#panelAside");

//boton para cerrar (funcionalidad para cerrar paneles)
const botonCerrar = document.querySelector("#botonDeCerrar");

//CLASE OCULTAR
botonCerrar.addEventListener("click", () => {
    panel.classList.add("ocultar");
});

//BOTON IMAGEN
const botonImagen = document.querySelector("#botonImagen");
//BOTON TEXTO
const botonTexto = document.querySelector("#textoButton");
//BOTON CLARO-OSCURO
const buttonClaroOscuro = document.querySelector(".botonClaroOscuro");
//HEADER
const panelDeInicio = document.querySelector(".panelDeInicio");
//PANEL IMAGEN ASIDE
const panelImagen = document.querySelector(".panelImagen");
//PANEL DE TEXTO
const panelTexto = document.querySelector(".panelTexto");

const body = document.querySelector("body");

//QUITA EL PANEL SELECCIONADO

//VER PANEL IMAGEN
botonImagen.addEventListener("click", () => {
    panel.classList.remove("ocultar");
    panelTexto.classList.add("ocultar");
    panelImagen.classList.remove("ocultar");
})

//VER PANEL TEXTO
botonTexto.addEventListener("click", () => {
    panel.classList.remove("ocultar");
    panelTexto.classList.remove("ocultar");
    panelImagen.classList.add("ocultar");
})

// MODO CLARO-OSCURO
const textoButton = document.querySelector("#textoButton");

buttonClaroOscuro.addEventListener("click", () => {
    body.classList.toggle("modoClaro");
    body.classList.toggle("modoOscuro");

    if (textoButton.innerText == 'Modo Claro') {
        textoButton.innerText = 'Modo Oscuro';
    } else {
        textoButton.innerText = 'Modo Claro';
    }
});

//         PANEL TEXTO

//Modificacion de texto Superior/inferior

//Superior
const TopTitleMeme = document.querySelector("#textoUsuarioTop");
const topText = document.getElementById("topText");

topText.addEventListener("input", ()=>{
    TopTitleMeme.innerText = topText.value;
});

//Inferior
const bottomTitleMeme = document.querySelector("#textoUsuarioBottom");
const bottomText = document.getElementById("bottomText");

bottomText.addEventListener("input", ()=>{
    bottomTitleMeme.innerText = bottomText.value;
});

//Sin Texto Superior/Inferior
const checkboxInferior = document.getElementById("checkBottomText");
checkboxInferior.addEventListener("change", ()=>{
    if (checkboxInferior.checked){
        bottomTitleMeme.classList.add("ocultar");
        bottomText.disable = true;
    }else{
        bottomTitleMeme.classList.remove("ocultar");
        bottomText.disable = false;
    }
});

const checkboxSuperior = document.getElementById("checkTopText");
checkboxSuperior.addEventListener("change", ()=>{
    if(checkboxSuperior.checked){
        TopTitleMeme.classList.add("ocultar");
        bottomTitleMeme.classList.add("ocultar");
    }else{
        TopTitleMeme.classList.remove("ocultar");
        bottomTitleMeme.classList.remove("ocultar");
    }
});

//Select tipo de tipografias
const selectTipografia = document.querySelector("#selectTipografias"); 
selectTipografia.addEventListener("change", ()=>{
    TopTitleMeme.style.fontFamily = selectTipografia.value;
});

selectTipografia.addEventListener("change", ()=>{
    bottomTitleMeme.style.fontFamily = selectTipografia.value;
});

//Tamaño de la fuente
const tamanioFuente = document.querySelector("#tamanioFuente");
tamanioFuente.addEventListener("input", ()=>{
    TopTitleMeme.style.fontSize = `${tamanioFuente.value}px`;
    bottomTitleMeme.style.fontSize = `${tamanioFuente.value}px`;
});

//Alineacion
const alingLeft = document.querySelector(".alingLeft");
const alingCenter = document.querySelector(".alingCenter");
const alingRight = document.querySelector(".alingRight");

alingLeft.addEventListener("click", () => {
    TopTitleMeme.style = `text-align: left;`
    bottomTitleMeme.style = `text-align: left;`
});

alingCenter.addEventListener("click", () => {
    TopTitleMeme.style = `text-align: center;`
    bottomTitleMeme.style = `text-align: center;`
});

alingRight.addEventListener("click", () => {
    TopTitleMeme.style = `text-align: right;`
    bottomTitleMeme.style = `text-align: right;`
});