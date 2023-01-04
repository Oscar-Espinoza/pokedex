import './style.css';
import { postLike, getLikes, postComment, getComments } from './modules/involvementApi';
import { updateModal } from './modules/popUp';
import { pokeFetch, createPokeCard } from './modules/pokeFetch'
import { addCounterNav } from './modules/navFilter';
import { filterByType } from './modules/navFilter';

let pokemonList = [];

document.addEventListener('DOMContentLoaded', async () => {
  pokemonList = await pokeFetch();
  addCounterNav(pokemonList)
});


document.getElementById('exampleModal').addEventListener('show.bs.modal', (e) => {
  const modal = e.target;
  const trigger = e.relatedTarget;
  updateModal(modal, trigger);
});

document.querySelectorAll('.nav-link').forEach(navLink => {
  navLink.addEventListener('click', () => {
    let type = navLink.innerText.split(' ')[0]
    filterByType(type)
  })
  
});

