import { postComment, getCommets } from "./involvementApi";
export const updateModal = async (modal, trigger) => {
  const pokeName = trigger.getAttribute("data-bs-name");
  const pokeImgUrl = document.getElementById(`${pokeName}-img`).src;
  modal.querySelector("#modal-img").src = pokeImgUrl;
  modal.querySelector("#exampleModalLabel").innerText = pokeName;

  modal.querySelector("#modal-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const pokeName = trigger.getAttribute("data-bs-name");
    const userName = document.querySelector("#username").value;
    const commentBody = document.querySelector("#comment").value;
    postComment(pokeName, userName, commentBody);
    document.querySelector("#username").value = "";
    document.querySelector("#comment").value = "";
  });

  const comments = await getCommets(pokeName);

  modal.querySelector("#comment-counter").innerHTML = comments.length;

  console.log(comments);

  let output = "";
  comments.forEach((el) => {
    output += `
                <li class="comment list-group-item text-start p-2">
                <span class="fst-italic">${el.creation_date}</span> <span class="h6">${el.username}</span>: <span>${el.comment}</span>
                </li>
    `;

    modal.querySelector("#comments").innerHTML = output;
  });
};
