import { postComment } from "./involvementApi";
export const commentSubmit = (pokeName) => {
  const userName = document.querySelector("#username").value;
  const commentBody = document.querySelector("#comment").value;
  postComment(pokeName, userName, commentBody);
  document.querySelector("#username").value = "";
  document.querySelector("#comment").value = "";
};
