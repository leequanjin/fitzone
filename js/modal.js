var modal = document.getElementById("modal");
var openModal = document.getElementById("open-modal");
var closeModal = document.getElementById("close-modal");

var modal2 = document.getElementById("modal2");
var openModal2 = document.getElementById("open-modal2");
var closeModal2 = document.getElementById("close-modal2");

console.log(modal, openModal, modal2, openModal2, closeModal)

// show modal
openModal.onclick = function () {
  modal.style.display = "block";
}

// close modal
closeModal.onclick = function () {
  modal.style.display = "none";
}

// close modal when click outside of modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// show modal2
openModal2.onclick = function () {
  modal2.style.display = "block";
}

// close modal2
closeModal2.onclick = function () {
  modal2.style.display = "none";
}

// close modal when click outside of modal2
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

