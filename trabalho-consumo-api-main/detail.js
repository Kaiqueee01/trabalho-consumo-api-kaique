const content = document.getElementById('detail');
let id = Number(window.location.hash.replace("#", ""));

async function getCharacterDetail() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await response.json();


  content.innerHTML = `
    <h2>${character.name}</h2>
    <img src="${character.image}" alt="${character.name}" width="200"/>
    <p><strong>Gênero:</strong> ${character.gender}</p>
    <p><strong>Especie:</strong> ${character.species}</p>
    <p><strong>Status:</strong> ${character.status}</p>
    <p><strong>Mundo/Dimensão:</strong> ${character.origin.name}</p>
    <br>
    <a href="index.html">Voltar</a>
  `;
}

getCharacterDetail();
