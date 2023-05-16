/*  Esta aplicación crea una lista de invitados.
    Los invitados pueden ser agregados a través de un formulario
    Se pueden borrar invitados de la lista usando el botón

 A todo el documento se le anexo ";" correspondientes  
 A todo el documento se le dio shit+alt+F para acomodar el codigo*/
// Se cambio de #form a form porque asi esta el ID en html
var formulario = document.getElementById("form");



formulario.onsubmit = function (e) {

  // Se cambio de e.prevent() a e.preventDefault(), ya que esta es la funcion correcta
  // para evitar el comportamiento predeterminado del formulario
  e.preventDefault();

  // Se cambio aqui porque al colocar formulario.elements[0] estamos seleccionado por
  // indices y es mejor seleecionarlos por su atributo
  var n = formulario.elements["name"];
  var e = formulario.elements["age"];
  var na = formulario.elements["nationality"];


  var nombre = n.value;
  var edad = parseInt(e.value); // Convertir la edad a un número entero

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }else{ // anexar else
    n.classList.remove("error"); // Quitar la clase de error si la edad es válida
  }

  if (edad < 18 || edad > 120) {
    e.classList.add("error"); 
  }else{// anexar else
    e.classList.remove("error"); // Quitar la clase de error si el nombre es válido
  }

  // Aqui subi todo el texto en una sola linea para que sea mas legible
  // Igual se cambio a >= para mayor claridad
  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
     // Restaurar los valores predeterminados del formulario
     formulario.reset();
     n.classList.remove("error");
     e.classList.remove("error");
     na.selectedIndex = 0;
   }
};

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

// En esta funcion se crean elementos del formulario innecesariamente por lo que se
// elimino esa parte, de igual manera, se puede eliminar la funcion crearElemento ya que
//ya se ha agregado esos elementos antes de llamar a esa función. También se elimino la 
//creación de los elementos spanNombre e inputNombre, para usar los elementos existentes.
function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  elementoLista.innerHTML = `
    <span>Nombre: </span>
    <input value="${nombre}" disabled>
    <br>
    <span>Edad: </span>
    <input value="${edad}" disabled>
    <br>
    <span>Nacionalidad: </span>
    <input value="${nacionalidad}" disabled>
    <br>
  `;

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    elementoLista.remove(); // Eliminar el div completo que contiene los detalles del invitado
  };
}
