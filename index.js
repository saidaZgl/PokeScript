const pokedex = document.querySelector("#pokedex");

const fetchApi = async (num) => {
  const pokemons = [];
  for (let i = 1; i <= num; i++) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const json = await data.json();
    pokemons.push(json);
  }
  const render = pokemons
    .map((pokemon) => {
      const { name, sprites } = pokemon;
      const types = pokemon.types.map((type) => type.type.name);
      return `
        <article>
            <img src="${sprites.front_default}" />
            <h2>${name}</h2>
            <p>Type${types.length > 1 ? "s" : ""} : ${types.join(" | ")}</p>
        </article>
      `;
    })
    .join("");
  pokedex.innerHTML = render;
};

fetchApi(151);
