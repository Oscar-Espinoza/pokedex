export const handleLike = (likeBtn) => {
  if (!likeBtn.classList.contains('liked')) {
    likeBtn.classList.add('fa-solid','liked')
    postLike(name)
  } else {
    likeBtn.classList.remove('fa-solid','liked')
  }
}