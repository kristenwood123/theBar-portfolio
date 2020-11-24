const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

let sliderImages = document.querySelectorAll('.slide')
arrowLeft = document.getElementById('arrow-left')
arrowRight = document.getElementById('arrow-right')
current = 0;

//Clear All images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none' 
  }
}

//Initializes slider
function startSlideshow() {
  reset()
  sliderImages[0].style.display ='block'
}

//show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block"
  current++;
}

// Show previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block'
  current--;
}

//Left arrow click
arrowLeft.addEventListener('click', function(){
  if(current === 0) {
    current = sliderImages.length
  }
  slideLeft();
})

//Right arrow click
arrowRight.addEventListener('click', function(){
  if(current === sliderImages.length - 1) {
    current = -1
  }
  slideRight();
})

startSlideshow();








