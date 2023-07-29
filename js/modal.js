var modal = document.getElementById("modal");
var openModal = document.getElementById("open-modal");
var closeModal = document.getElementById("close-modal");

openModal.onclick = function () {
  modal.style.display = "block";
}

closeModal.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
