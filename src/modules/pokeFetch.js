import { postLike, getLikes, getCommets } from "./involvementApi";
export const createPokeCard = (name, imgSrc, likes) => {
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  divCard.classList.add("m-4");
  divCard.innerHTML = `<img src='${imgSrc}' id='${name}-img' class='card-img-top' alt='...' data-bs-toggle='modal' data-bs-name=${name} data-bs-img=${imgSrc} data-bs-target='#exampleModal'>
      <div class='card-body'>
        <div class='card-title d-flex justify-content-between'>
            <h5 class='card-title'>${name}</h5>
            <h5 class='card-title'><i class='fa-regular fa-heart p-2 heart-icon'></i><span class='px-2'>${likes}</span>Likes</h5>
        </div>
        <div class='mx-auto d-grid'>
            <a href='#' class='btn btn-primary mt-4'>Comments</a>
            <a href='#' class='btn btn-primary mt-4'>Reservations</a>
        </div>
      </div>`;

  divCard.querySelector(".fa-heart").addEventListener("click", (e) => {
    const likeBtn = e.target;
    if (!likeBtn.classList.contains("liked")) {
      likeBtn.classList.add("fa-solid", "liked");
      postLike(name);
    } else {
      likeBtn.classList.remove("fa-solid", "liked");
    }
  });
  document.getElementById("cards").appendChild(divCard);
};

export const pokeFetch = async () => {
  const pokeChar = [
    {
      id: 0,
      url: "https://pokeapi.co/api/v2/pokemon/ivysaur",
    },
    {
      id: 1,
      url: "https://pokeapi.co/api/v2/pokemon/squirtle",
    },
    {
      id: 2,
      url: "https://pokeapi.co/api/v2/pokemon/wartortle",
    },
    {
      id: 3,
      url: "https://pokeapi.co/api/v2/pokemon/blastoise",
    },
    {
      id: 4,
      url: "https://pokeapi.co/api/v2/pokemon/charmander",
    },
    {
      id: 5,
      url: "https://pokeapi.co/api/v2/pokemon/charmeleon",
    },
    {
      id: 6,
      url: "https://pokeapi.co/api/v2/pokemon/venusaur",
    },
    {
      id: 7,
      url: "https://pokeapi.co/api/v2/pokemon/charizard",
    },
    {
      id: 8,
      url: "https://pokeapi.co/api/v2/pokemon/caterpie",
    },
  ];

  const likes = await getLikes();

  const pokemonList = [];

  for (const el of pokeChar) {
    await fetch(el.url)
      .then((response) => response.json())
      .then((data) => {
        const pokeLikes = likes.find((pokemon) => pokemon.item_id == data.name);
        createPokeCard(
          data.name,
          data.sprites.other["official-artwork"].front_default,
          pokeLikes ? pokeLikes.likes : 0
        );
        pokemonList.push({
          name: data.name,
          imgUrl: data.sprites.front_shiny,
          stats: data.stats,
        });
      });
  }
  return pokemonList;
};
