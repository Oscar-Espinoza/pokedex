import './style.css';
import updateModal from './modules/popUp.js';
import { pokeFetch } from './modules/pokeFetch.js';
import { addCounterNav, filterByType } from './modules/navFilter.js';
import commentSubmit from './modules/comment.js';

let pokemonList = [];

document.addEventListener('DOMContentLoaded', async () => {
  pokemonList = await pokeFetch();
  addCounterNav(pokemonList);
});

document
  .getElementById('exampleModal')
  .addEventListener('show.bs.modal', (e) => {
    const modal = e.target;
    const trigger = e.relatedTarget;
    updateModal(modal, trigger);
  });

document.querySelector('#modal-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const pokeName = document.querySelector('.modal-title').innerText;
  commentSubmit(pokeName);
});

document.querySelectorAll('.nav-link').forEach((navLink) => {
  navLink.addEventListener('click', () => {
    const type = navLink.innerText.split(' ')[0];
    filterByType(type);
  });
});
