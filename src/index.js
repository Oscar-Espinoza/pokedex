import './style.css';
import { postLike, getLikes, postComment, getCommets } from './modules/involvementApi';
import { updateModal } from './modules/popUp';
import { pokeFetch, createPokeCard } from './modules/pokeFetch'

let pokemonList = [];

document.addEventListener('DOMContentLoaded', async () => {
  console.log(await getCommets('1'));
  pokemonList = await pokeFetch();
});


document.getElementById('exampleModal').addEventListener('show.bs.modal', (e) => {
  const modal = e.target;
  const trigger = e.relatedTarget;
  updateModal(modal, trigger);
});

