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

//Alineacion texto
const alingLeft = document.querySelector(".alignLeft");
const alingCenter = document.querySelector(".alignCenter");
const alingRight = document.querySelector(".alignRight");

alingLeft.addEventListener("click", () => {
    TopTitleMeme.style = `text-align: left;`;
    bottomTitleMeme.style = `text-align: left;`;
})

alingCenter.addEventListener("click", () => {
    TopTitleMeme.style = `text-align: center;`;
    bottomTitleMeme.style = `text-align: center;`;
})

alingRight.addEventListener("click", () => {
    TopTitleMeme.style = `text-align: right;`
    bottomTitleMeme.style = `text-align: right;`
})

//Color de letra
const colorDeTexto = document.querySelector("#colorDeTexto");
const spanTexto = document.querySelector("#refSpanTexto");

colorDeTexto.addEventListener("input", ()=>{
    TopTitleMeme.style.color = colorDeTexto.value;
    bottomTitleMeme.style.color = colorDeTexto.value;
    spanTexto.textContent = colorDeTexto.value;
})    

//Color fondo imagen
const colorFondo = document.querySelector("#colorDeFondo");
const spanColorFondo = document.querySelector("#refSpanFondo");

colorFondo.addEventListener("input",()=>{
    TopTitleMeme.style.backgroundColor = colorFondo.value;
    bottomTitleMeme.style.backgroundColor = colorFondo.value;
    spanColorFondo.textContent = colorFondo.value; //actualiza referencia color de fondo en el span
});

//Fondo transparente
const fondoTransparente = document.querySelector("#backgroundTransparent");

fondoTransparente.addEventListener("input", ()=>{
    TopTitleMeme.style = `background-color: transparent;`
    bottomTitleMeme.style = `background-color: transparent;`
})

//Contorno
const sinContorno = document.querySelector(".ninguno");
const contornoClaro = document.querySelector(".claro");
const contornoOscuro = document.querySelector(".oscuro");

sinContorno.addEventListener("click", ()=>{
    TopTitleMeme.classList.add("sinContorno");
    bottomTitleMeme.classList.add("sinContorno");
});

contornoClaro.addEventListener("click", ()=>{
    TopTitleMeme.classList.add("contornoClaro");
    bottomTitleMeme.classList.add("contornoClaro");
});

contornoOscuro.addEventListener("click", ()=>{
    TopTitleMeme.classList.add("contornoOscuro");
    bottomTitleMeme.classList.add("contornoOscuro");
});

//Espaciado
const espaciado = document.querySelector("#espaciado");

espaciado.addEventListener ("input", ()=>{
    TopTitleMeme.style.padding = `${espaciado.value}px 50px`;
    bottomTitleMeme.style.padding = `${espaciado.value}px 50px`;
});

//--------INTERLINEADO--------
const interlineado = document.querySelector("#interlineado");

interlineado.addEventListener("input", () => {
    TopTitleMeme.style.lineHeight = interlineado.value;
    bottomTitleMeme.style.lineheight = interlineado.value;
});

//FINAL DEL PANEL DE TEXTO


//PANEL IMAGEN
const imagenMeme =  document.querySelector(".imagenMeme");
const inputImagen = document.querySelector(".urlImagenMeme");

inputImagen.addEventListener("change", () => {
    imagenMeme.style.backgroundImage = `url("${inputurl.value}")`;
});



