import './style.css';
import { updateModal } from './modules/popUp';
import { pokeFetch } from './modules/pokeFetch'
import { addCounterNav } from './modules/navFilter';
import { filterByType } from './modules/navFilter';
import { commentSubmit } from "./modules/comment";

let pokemonList = [];

document.addEventListener("DOMContentLoaded", async () => {
  pokemonList = await pokeFetch();
  addCounterNav(pokemonList)
});

document
  .getElementById("exampleModal")
  .addEventListener("show.bs.modal", (e) => {
    const modal = e.target;
    const trigger = e.relatedTarget;
    updateModal(modal, trigger);
  });

document.querySelector("#modal-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const pokeName = document.querySelector(".modal-title").innerText;
  console.log(pokeName);
  commentSubmit(pokeName);
});

document.querySelectorAll('.nav-link').forEach(navLink => {
  navLink.addEventListener('click', () => {
    let type = navLink.innerText.split(' ')[0]
    filterByType(type)
  })
  
});

