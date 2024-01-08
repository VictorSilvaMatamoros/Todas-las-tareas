const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

// Vector para almacenar los usuarios
let userList = [];

// Función que obtiene de la API un nombre aleatorio,
// genera una cantidad de dinero aleatoria cuyo máximo es 1.000.000
// y añade al usuario con ambos datos
async function getRandomUser() {
  let res = await fetch('https://randomuser.me/api');
  let data = await res.json();
  let user = data.results[0];

  // TODO: Crea un objeto usuario (newUser) que tenga como atributos: name y money

  addData(newUser);
}

// TODO: Función que añade un nuevo usuario (objeto) al listado de usuarios (array)
function addData(obj) {

}

// TODO: Función que dobla el dinero de todos los usuarios existentes
function doubleMoney() {
  // TIP: Puedes usar map()
}

// TODO: Función que ordena a los usuarios por la cantidad de dinero que tienen
function sortByRichest() {
  // TIP: Puedes usar sort()
}

// TODO: Función que muestra únicamente a los usuarios millonarios (tienen más de 1.000.000)
function showMillionaires() {
  // TIP: Puedes usar filter()
}

// TODO: Función que calcula y muestra el dinero total de todos los usuarios
function calculateWealth() {
  // TIP: Puedes usar reduce ()
}

// TODO: Función que actualiza el DOM
function updateDOM() {
  // TIP: Puedes usar forEach () para actualizar el DOM con cada usuario y su dinero
}

// Función que formatea un número a dinero
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '€';
}

// Obtenemos un usuario al iniciar la app
getRandomUser();

// TODO: Event listeners
