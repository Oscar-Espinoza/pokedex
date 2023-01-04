import "./style.css";
import {
  postLike,
  getLikes,
  postComment,
  getCommets,
} from "./modules/involvementApi";
import { updateModal } from "./modules/popUp";
import { pokeFetch, createPokeCard } from "./modules/pokeFetch";
import { commentSubmit } from "./modules/comment";

let pokemonList = [];

document.addEventListener("DOMContentLoaded", async () => {
  pokemonList = await pokeFetch();
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
