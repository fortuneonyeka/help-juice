const hamburgerButton = document.getElementById("hamburger-button");
const navModal = document.getElementById("navModal");
const closeModalButton = document.getElementById("closeModal");

function openModal() {
  navModal.classList.remove("hidden");
}

function closeModal() {
  navModal.classList.add("hidden");
}

hamburgerButton.addEventListener("click", openModal);

closeModalButton.addEventListener("click", closeModal);
