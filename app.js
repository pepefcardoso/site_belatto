let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  changeSlide();
}, 8000);

function changeSlide() {
  count++;
  if (count > 4) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}