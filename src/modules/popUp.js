import { getComments } from './involvementApi.js';

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const updateModal = async (modal, pokemon) => {
  const pokeName = pokemon.name;
  const pokeImgUrl = pokemon.imgUrl;
  modal.querySelector('#modal-img').src = pokeImgUrl;
  modal.querySelector('#exampleModalLabel').innerText = capitalizeFirstLetter(pokeName);

  const comments = await getComments(pokeName);

  modal.querySelector(
    '#comment-counter',
  ).innerText = `Comments: ${comments.length}`;

  let output = '';
  comments.forEach((el) => {
    output += `
                <li class="comment list-group-item text-start p-2">
                <span class="fst-italic">${el.creation_date}</span> <span class="h6">${el.username}</span>: <span>${el.comment}</span>
                </li>
    `;

    modal.querySelector('#comments').innerHTML = output;
  });

  document.querySelectorAll('.stat').forEach((stat) => {
    const foundStat = pokemon.stats.find(
      (element) => element.stat.name === stat.id,
    );
    stat.innerHTML = `<strong>${foundStat.stat.name}: </strong> ${foundStat.base_stat}`;
  });
};
