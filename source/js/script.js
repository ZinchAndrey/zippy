
document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;

var sliderStart = 0;

function sliderLeft() {
  var sliderLine = document.getElementById('slider-line');
  sliderStart = sliderStart - 124;
  if (sliderStart < -248) {
    sliderStart = 0;
  }
  sliderLine.style.left = sliderStart + 'px';
}

function sliderRight() {
  var sliderLine = document.getElementById('slider-line');
  sliderStart = sliderStart + 124;
  if (sliderStart > 0) {
    sliderStart = -248;
  }
  sliderLine.style.left = sliderStart + 'px';
}
