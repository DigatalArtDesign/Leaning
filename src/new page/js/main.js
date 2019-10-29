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
