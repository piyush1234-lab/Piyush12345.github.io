let cube = document.getElementById('cube');

function rotate(face) {
  let rotation = {
    front: 'rotateX(0deg) rotateY(0deg)',
    back: 'rotateX(0deg) rotateY(180deg)',
    right: 'rotateX(0deg) rotateY(-90deg)',
    left: 'rotateX(0deg) rotateY(90deg)',
    top: 'rotateX(-90deg) rotateY(0deg)',
    bottom: 'rotateX(90deg) rotateY(0deg)',
  };

  cube.style.transform = rotation[face];
}
function border2(Img) {
  // Remove border from all control images
  for (let i = 1; i <= 6; i++) {
    let img = document.getElementById('img' + i);
    img.style.border = "none";
    img.style.boxShadow = "none";
  }

  // Add white border to the selected image
Img.style.border = "2px solid white";
Img.style.boxShadow = "0px 0px 100px 5px rgba(191, 21, 133, 0.3)";
}