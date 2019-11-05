$('.carousel').flickity({
  freeScroll: true,
  wrapAround: true,
  groupCells: 2,
  cellAlign: "center",
  arrowShape: {
    x0: 10,
    x1: 70, y1: 50,
    x2: 70, y2: 50,
    x3: 70
  }
  
  // autoPlay: true,
  // autoPlay: 5000,
  // setGallerySize: false

});

let radio_num = document.querySelectorAll("#radio");
function change_radio() {
  let form_control = document.querySelector(".form-control");
  form_control.style.color = "red";
}
// Get the modal
let modal = document.querySelector('.login-modal');
// Get the button which opens the modal
let btn = document.querySelector('.login');
// Get the span element which closes the modal
let span = document.querySelector('.close');
let container = document.querySelector('.container-fluid');
btn.onclick = function () {
  modal.style.display = 'block';
  container.classList.remove('scaleAnimanitionOut');
}
span.onclick = function () {
  container.classList.add('scaleAnimanitionOut');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 400);
}
window.onclick = function (event) {
  if (event.target == modal) {
    container.classList.add('scaleAnimanitionOut');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 400);
  }
}
