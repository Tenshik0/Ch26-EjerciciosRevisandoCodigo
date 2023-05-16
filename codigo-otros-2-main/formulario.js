/*  Esta aplicación crea una lista de invitados.
    Los invitados pueden ser agregados a través de un formulario
    Se pueden borrar invitados de la lista usando el botón

 A todo el documento se le anexo ";" correspondientes  
 A todo el documento se le dio shit+alt+F para acomodar el codigo*/

var formulario = document.querySelector("#form");



formulario.onsubmit = function (e) {

  // Se cambio de e.prevent() a e.preventDefault(), ya que esta es la funcion correcta
  // para evitar el comportamiento predeterminado del formulario
  e.preventDefault();

  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  // Aqui subi todo el texto en una sola linea para que sea mas legible
  // 
  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);


function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  // Cambio de .added a .add, ya que classList.add() es la funcion correcta
  // para agregar una clase a un elemento
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);

  // se cambiarons los var, ya que puede generar problemas con los var 
  //ya declarados de arriba
  function crearElemento(descripcion, valor) {
    var span = document.createElement("span");
    var input = document.createElement("input");
    var espacio = document.createElement("br");
    span.textContent = descripcion + ": ";
    input.value = valor;
    elementoLista.appendChild(span);
    elementoLista.appendChild(input);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);;

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  };
}