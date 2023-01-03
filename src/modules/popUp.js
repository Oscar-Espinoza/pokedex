export const updateModal = (modal, trigger) => {
  const pokeName = trigger.getAttribute('data-bs-name')
  const pokeImgUrl = document.getElementById(`${pokeName}-img`).src
  modal.querySelector('#modal-img').src = pokeImgUrl
}