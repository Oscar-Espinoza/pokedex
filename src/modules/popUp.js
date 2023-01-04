import { postComment } from "./involvementApi";
export const updateModal = (modal, trigger) => {
  const pokeName = trigger.getAttribute("data-bs-name");
  const pokeImgUrl = document.getElementById(`${pokeName}-img`).src;
  modal.querySelector("#modal-img").src = pokeImgUrl;
  modal.querySelector("#exampleModalLabel").innerText = pokeName;
  modal.querySelector("#modal-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.querySelector("#username").value;
    const commentBody = document.querySelector("#comment").value;
    postComment(pokeName, userName, commentBody);
    document.querySelector("#username").value = "";
    document.querySelector("#comment").value = "";
  });
};
