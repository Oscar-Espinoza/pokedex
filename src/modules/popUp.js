import { getComments } from './involvementApi.js';

const updateModal = async (modal, trigger) => {
  const pokeName = trigger.getAttribute('data-bs-name');
  const pokeImgUrl = document.getElementById(`${pokeName}-img`).src;
  modal.querySelector('#modal-img').src = pokeImgUrl;
  modal.querySelector('#exampleModalLabel').innerText = pokeName;

  const comments = await getComments(pokeName);

  modal.querySelector('#comment-counter').innerHTML = comments.length;

  let output = '';
  comments.forEach((el) => {
    output += `
                <li class="comment list-group-item text-start p-2">
                <span class="fst-italic">${el.creation_date}</span> <span class="h6">${el.username}</span>: <span>${el.comment}</span>
                </li>
    `;

    modal.querySelector('#comments').innerHTML = output;
  });
};

export default updateModal;
