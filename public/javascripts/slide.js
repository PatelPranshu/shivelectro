// let currentSlide = 0;
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length;

// // Show the first slide
// slides[currentSlide].style.display = "block";

// setInterval(() => {
//   // Hide current slide
//   slides[currentSlide].style.display = "none";

//   // Move to next
//   currentSlide = (currentSlide + 1) % totalSlides;

//   // Show next slide
//   slides[currentSlide].style.display = "block";
// }, 3000); // 3000ms = 3 seconds



const slideTrack = document.getElementById("slideTrack");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function slideNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  slideTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slideNext, 4000);
