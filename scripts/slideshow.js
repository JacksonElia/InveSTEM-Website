const numberOfImages = 3;
let currentImage = 0;
let frameKeep = 0

function scrollToRight() {
  frameKeep = 0;
  currentImage++;
  if (currentImage > numberOfImages - 1) {
    currentImage = 0;
  }
  document.getElementById(currentImage.toString()).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })

}

function scrollToLeft() {
  frameKeep = 0;
  currentImage--;
  if (currentImage < 0) {
    currentImage = numberOfImages - 1;
  }
  document.getElementById(currentImage.toString()).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
}

function matrixTextMainLoop() {
  if (document.documentElement.scrollTop < 15) {
    frameKeep++;
    if (frameKeep % 240 === 0) {
      scrollToRight()
      frameKeep = 0;
    }
  }
  requestAnimationFrame(matrixTextMainLoop);
}

requestAnimationFrame(matrixTextMainLoop);