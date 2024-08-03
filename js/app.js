/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

Requisitos:
Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

*/

let infoTarjeta = document.querySelector(".main__resultado__container__info");
let textAreaResultado = document.querySelector("#resultado");
let btnCopiar = document.querySelector("#btn-copiar");
let expReg = /^[a-z\s]+$/;

let texto = textAreaResultado.value;

function asignarTexto(etiqueta, texto) {
  let etiquetaHTML = document.querySelector(etiqueta);
  etiquetaHTML.innerHTML = texto;
}

function encriptar() {
  let textoUsuario = document.querySelector("#textoUsuario").value;

  //Validar que el campo no esté vacío y que solo contenga letras minúsculas
  if (textoUsuario.trim() !== "" && expReg.test(textoUsuario)) {
    infoTarjeta.style.display = "none";
    textAreaResultado.style.display = "block";
    btnCopiar.style.display = "block";
    let textoEncriptado = textoUsuario
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    asignarTexto("#resultado", textoEncriptado);
    return textoEncriptado;
  } else {
    swal("Error", "El texto ingresado no es válido", "error");
  }
}

function desencriptar() {
  //Obtener el texto ingresado por el usuario
  let textoUsuario = document.querySelector("#textoUsuario").value;

  //Validar que el campo no esté vacío y que solo contenga letras minúsculas
  if (textoUsuario.trim() !== "" && expReg.test(textoUsuario)) {
    infoTarjeta.style.display = "none";
    textAreaResultado.style.display = "block";
    btnCopiar.style.display = "block";
    let txtDesencriptado = textoUsuario
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    asignarTexto("#resultado", txtDesencriptado);
  } else {
    swal("Error", "El texto ingresado no es válido", "error");
  }
}

const copiarTexto = async () => {
  let texto = textAreaResultado.innerHTML;
  try {
    await navigator.clipboard.writeText(texto);
    console.log("Copiado al portapapeles");
    swal("Texto copiado!","El texto se ha copiado al portapapeles :)", "success");
  } catch (err) {
    console.log("Error al copiar", err);
  }
};

/* navigator.permissions.query({ name: "write-on-clipboard" })
.then((resultado) => {
  if (resultado.state == "granted" || resultado.state == "prompt") {
    alert("¡Permiso de escritura concedido!");
  }
}); */
