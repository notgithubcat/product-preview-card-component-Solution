// Get a reference to the <img> element
const imgElement = document.getElementById("responsiveImage");

// Add a function to change the src attribute based on screen size
function updateImageSource() {
  if (window.innerWidth <= 600) {
    imgElement.src = "./images/image-product-mobile.jpg";
  } else {
    imgElement.src = "./images/image-product-desktop.jpg";
  }
}

// Initial call to set the image source based on the current screen size
updateImageSource();

// Add an event listener to update the image source when the window is resized
window.addEventListener("resize", updateImageSource);
