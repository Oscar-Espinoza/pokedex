import { postLike } from "./involvementApi"

export const handleLike = (likeBtn, pokeName) => {
  const likeCounter = likeBtn.nextSibling
  if (!likeBtn.classList.contains('liked')) {
    likeBtn.classList.add('fa-solid','liked')
    postLike(pokeName)
    likeCounter.innerText = parseInt(likeCounter.innerText) + 1
  } else {
    likeBtn.classList.remove('fa-solid','liked')
  }
}