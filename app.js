// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigoIngresado = "";

function agregarAmigo() {
  amigoIngresado = document.getElementById("amigo").value;
  if (amigoIngresado === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(amigoIngresado);
    limpiarCampo();
    mostrarListaAmigos();
  }
}

function limpiarCampo() {
  document.getElementById("amigo").value = "";
}

function crearListaHTML() {
  let listaHTML = "";
  for (let amigo of amigos) {
    listaHTML += `<li>${amigo}</li>`;
  }
  return listaHTML;
}

function mostrarListaAmigos() {
  let elementoHtml = document.getElementById("listaAmigos");
  elementoHtml.innerHTML = crearListaHTML();
}

function sorteoAmigo() {
  let numeroMaximo = amigos.length;
  let amigoSorteado = "";
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo);
  amigoSorteado = amigos[numeroGenerado];
  return amigoSorteado;
} 

function mostrarAmigoSorteado() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = sorteoAmigo();
}