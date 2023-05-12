// Next/previous controls
function plusSlides(slideshowId, offset) {
  const slideshow = document.getElementById(slideshowId);
  const numImagesInSlideshow = slideshow.getElementsByClassName("slideshow-container-slide").length;
  const currentIndex = Number(slideshow.getAttribute("data-image-index"));
  let newIndex = currentIndex + offset
  if (newIndex >= numImagesInSlideshow) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = numImagesInSlideshow - 1;
  }
  showSlides(slideshowId, newIndex);
}

// Show the slide at given index
function showSlides(slideshowId, indexOfImageToShow) {
  let slideshow = document.getElementById(slideshowId);
  slideshow.setAttribute("data-image-index", `${indexOfImageToShow}`);
  let slideshowImages = slideshow.getElementsByClassName("slideshow-container-slide");
  for (let i = 0; i < slideshowImages.length; i++) {
    slideshowImages[i].style.display = "none";  
  }
  slideshowImages[indexOfImageToShow].style.display = "block";  
}

function closeSlideshowModal() {
  const slideshowModals = document.getElementsByClassName("slideshow-modal");
  for (let i=0; i < slideshowModals.length; i++) {
    console.log("closing span", slideshowModals[i]);
    slideshowModals[i].style.display = "none";
  };
}

function openSlideshowModal(id) {
  document.getElementById(id).style.display = "block";
}
