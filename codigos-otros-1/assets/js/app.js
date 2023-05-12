/*
  Este codigo lo que hace es que nos trae la informacion del baseEndpoint, de la cual vamos a imprimir
  en un parrafo en name y el blog.
*/

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se cambia el query selector ya que esta mandando null
// De name  a  .name 
const $n = document.querySelector('.name');
// Se cambia el query selector ya que estamos seleccionando nuestro objeto por clase y no por ID
// De #blog  a  .blog
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// Marcaba error en el await por que no esta marcada la funcion como asincrona
// para ello debemos usar la palabra asyn antes
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // convierte la respuesta de la solicitud a la API de Github en un objeto JavaScript.
  console.log(data);
  // Se cambian las comillas, de  ' a  `
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);