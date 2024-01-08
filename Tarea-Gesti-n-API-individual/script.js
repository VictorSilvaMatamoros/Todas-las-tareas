

function abrirBaseDeDatos() {
  return new Promise((resolve, reject) => {
    const solicitud = indexedDB.open('SuperheroesDB', 1);

    solicitud.onupgradeneeded = function (event) {
      const db = event.target.result;
      const objectStore = db.createObjectStore('superheroes', { keyPath: 'name' });
      objectStore.createIndex('intelligence', 'powerstats.intelligence');
      objectStore.createIndex('strength', 'powerstats.strength');
      objectStore.createIndex('speed', 'powerstats.speed');
      objectStore.createIndex('power', 'powerstats.durability');

    };

    solicitud.onsuccess = function (event) {
      const db = event.target.result;
      resolve(db);
    };

    solicitud.onerror = function (event) {
      reject(new Error('Error al abrir la base de datos.'));
    };
  });
}



async function insertarHeroeEnDB(heroeData) {
  try {
    const db = await abrirBaseDeDatos();
    const transaccion = db.transaction('superheroes', 'readwrite');
    const objectStore = transaccion.objectStore('superheroes');
    objectStore.add(heroeData);
    return 'Héroe insertado correctamente en la base de datos.';
  } catch (error) {
    return `Error al insertar héroe en la base de datos: ${error.message}`;
  }
}



async function obtenerHeroeDeDB(nombreHeroe) {
  try {
    const db = await abrirBaseDeDatos();
    const transaccion = db.transaction('superheroes', 'readonly');
    const objectStore = transaccion.objectStore('superheroes');
    const heroe = await objectStore.get(nombreHeroe);
    return heroe;
  } catch (error) {
    return null;
  }
}



async function compararHeroes() {
  const hero1Input = document.getElementById('hero1-input').value;
  const hero2Input = document.getElementById('hero2-input').value;

  if (hero1Input.trim() === '' || hero2Input.trim() === '') {
    alert('Por favor, complete ambos campos.');
    return;
  }

  try {
    const hero1Data = await fetchHeroData(hero1Input);
    const hero2Data = await fetchHeroData(hero2Input);

    await insertarHeroeEnDB(hero1Data);
    await insertarHeroeEnDB(hero2Data);

    mostrarResultadoComparacion(hero1Data, hero2Data);
  } catch (error) {
    console.error('Error al comparar héroes:', error.message);
    alert('Ese héroe esta no esta entre nosotros');
    return;
  }
}


async function fetchHeroData(heroInput) {
  const response = await fetch(`https://www.superheroapi.com/api.php/122106563108124464/search/${heroInput}`);
  const data = await response.json();

  if (data.response === 'error' || data.results.length === 0) {
    throw new Error(`Héroe no encontrado. Por favor, ingrese un nombre o ID válido.`);
  }

  return data.results[0];
}


function mostrarResultadoComparacion(hero1Data, hero2Data) {
  const comparisionResultContainer = document.getElementById('comparision-result');

  comparisionResultContainer.innerHTML = `
      <div class="result-container">
        <div class="character-container">
            <h4>${hero1Data.name}</h4>
            <img src="${hero1Data.image.url}" alt="${hero1Data.name}" class="img-fluid">
            <p><strong>Intelligence:</strong> ${hero1Data.powerstats.intelligence}</p>
            <p><strong>Strength:</strong> ${hero1Data.powerstats.strength}</p>
            <p><strong>Speed:</strong> ${hero1Data.powerstats.speed}</p>
            <p><strong>Power:</strong> ${hero1Data.powerstats.power}</p>
        </div>
        <div class="vs-container">
            <h4>VS</h4>
        </div>
        <div class="superhero-container">
            <h4>${hero2Data.name}</h4>
            <img src="${hero2Data.image.url}" alt="${hero2Data.name}" class="img-fluid">
            <p><strong>Intelligence:</strong> ${hero2Data.powerstats.intelligence}</p>
            <p><strong>Strength:</strong> ${hero2Data.powerstats.strength}</p>
            <p><strong>Speed:</strong> ${hero2Data.powerstats.speed}</p>
            <p><strong>Power:</strong> ${hero2Data.powerstats.power}</p>
        </div>
      </div>
      <div class="winner-message">
          <p><strong>${determinarGanador(hero1Data.powerstats, hero2Data.powerstats, hero1Data.name, hero2Data.name)}</strong></p>
      </div>
  `;

  comparisionResultContainer.style.display = 'flex';
  comparisionResultContainer.style.flexDirection = 'column';

  document.querySelector('.result-container').style.display = 'flex';
  document.querySelector('.result-container').style.flexDirection = 'row';
  document.querySelector('.result-container').style.alignItems = 'center';
}


function determinarGanador(userStats, superheroStats, characterName, superheroName) {
  const parseIntStat = (stat) => parseInt(stat, 10);

  let userScore = 0;
  let superheroScore = 0;

  if (parseIntStat(userStats.Power) > parseIntStat(superheroStats.Power)) {
    userScore++;
  } else if (parseIntStat(userStats.Power) < parseIntStat(superheroStats.Power)) {
    superheroScore++;
  }

  if (parseIntStat(userStats.intelligence) > parseIntStat(superheroStats.intelligence)) {
    userScore++;
  } else if (parseIntStat(userStats.intelligence) < parseIntStat(superheroStats.intelligence)) {
    superheroScore++;
  }

  if (parseIntStat(userStats.strength) > parseIntStat(superheroStats.strength)) {
    userScore++;
  } else if (parseIntStat(userStats.strength) < parseIntStat(superheroStats.strength)) {
    superheroScore++;
  }

  if (parseIntStat(userStats.speed) > parseIntStat(superheroStats.speed)) {
    userScore++;
  } else if (parseIntStat(userStats.speed) < parseIntStat(superheroStats.speed)) {
    superheroScore++;
  }

  if (userScore > superheroScore) {
    return `¡${characterName} ganaría contra ${superheroName}!`;
  } else if (userScore < superheroScore) {
    return `¡${superheroName} ganaría contra ${characterName}!`;
  } else {
    return `¡La batalla termina en empate!`;
  }
}



function getImageData(imageFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      resolve(event.target.result);
    };
    reader.onerror = function (event) {
      reject(new Error('Error al cargar la imagen.'));
    };
    reader.readAsDataURL(imageFile);
  });
}


function seleccionarHeroeAleatorio() {
  const heroesDisponibles = ["Spider-Man", "Iron Man", "Wonder Woman", "Hulk", "Batman", "Superman",
    "Black Widow", "Abe Sapien", "Abraxas", "Animal Man", "Ant-Man", "Anti-Monitor", "Anti-Venom", "Aquaman", "Godzilla", "Goku", "Punisher", "Predator", "Rambo"];

  const indiceAleatorio1 = Math.floor(Math.random() * heroesDisponibles.length);
  let indiceAleatorio2;
  do {
    indiceAleatorio2 = Math.floor(Math.random() * heroesDisponibles.length);
  } while (indiceAleatorio2 === indiceAleatorio1);

  document.getElementById('hero1-input').value = heroesDisponibles[indiceAleatorio1];
  document.getElementById('hero2-input').value = heroesDisponibles[indiceAleatorio2];

}

document.getElementById('borrar-personajes-btn').addEventListener('click', borrarPersonajes);

async function borrarPersonajes() {
  try {
    const db = await abrirBaseDeDatos();
    const transaccion = db.transaction('superheroes', 'readwrite');
    const objectStore = transaccion.objectStore('superheroes');

    const hero1Input = document.getElementById('hero1-input').value;
    const hero2Input = document.getElementById('hero2-input').value;
    objectStore.delete(hero1Input);
    objectStore.delete(hero2Input);

    document.getElementById('hero1-input').value = '';
    document.getElementById('hero2-input').value = '';

    const comparisionResultContainer = document.getElementById('comparision-result');
    comparisionResultContainer.style.display = 'none';

    alert('Personajes borrados correctamente.');
  } catch (error) {
    console.error('Error al borrar personajes:', error.message);
    alert('Error al borrar personajes.');
  }
}