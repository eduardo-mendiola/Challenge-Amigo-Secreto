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

