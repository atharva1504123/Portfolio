// Dark-light mode

const modeButton = document.querySelector('.mode-button')
const element = document.body;
const section = document.querySelector('section')
const certificate = document.getElementById('certificate')
const nav = document.getElementsByClassName('navigation')
const circle = document.querySelector('.circle');
circle.addEventListener('click', darkMode);
function darkMode() {
    circle.style.transition = '1s';
    circle.style.transform = 'translateX(27px)';
    circle.style.background = 'var(--secondary-color)';
    modeButton.style.background = 'var(--primary-color)';
    element.className = "dark";
    section.style.background = "black";
    certificate.style.background = "black";
}

const light = document.querySelector('.checkbox');
light.addEventListener('click' , lightMode);
function lightMode(){
    light.style.transition = '1s';
    circle.style.transform = 'translateX(-3px)';
    circle.style.background = 'var(--primary-color)';
    modeButton.style.background = 'var(--secondary-color)';
    element.className = "light"
    section.style.background = "#e0d3ef";
}

// Pre-loader

const loading = document.querySelector('.loader');

setTimeout(loader,5000);
function loader(){
    element.style.visibility = 'visible';
    loading.style.visibility = 'hidden';
}

// Autosliding images of workspace

const carouselRow = document.querySelector('.slides-row');
const carouselSlides = document.getElementsByClassName('slide');
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

// declaring variables

let index = 1;
width = carouselSlides[0].clientWidth;
carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';

// go to next slide

nextBtn.addEventListener('click', nextSlide);
function nextSlide() {
  if (index >= carouselSlides.length - 1) {
    return
  };
  carouselRow.style.transition = 'transform 0.4s ease-out';
  index++;
  carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
}

// go to previous slide

prevBtn.addEventListener('click', prevSlide);
function prevSlide() {
  if (index <= 0) {
    return
  };
  carouselRow.style.transition = 'transform 0.4s ease-out';
  index--;
  carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
}

// return to the first slide 

carouselRow.addEventListener('transitionend', function () {
  if (carouselSlides[index].id === 'first-image-duplicate') {
    carouselRow.style.transition = 'none';
    index = carouselSlides.length - index;
    carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
  }

  if (carouselSlides[index].id === 'last-image-duplicate') {
    carouselRow.style.transition = 'none';
    index = carouselSlides.length - 2;
    carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
  }
})

// Auto sliding

function autoslide() {
  deleteInterval = setInterval(timer, 3000);
  function timer() {
    nextSlide();
  }
}
autoslide();

// stop auto sliding 

const mainContainer = document.querySelector('.container');
mainContainer.addEventListener('mouseover', function () {
  clearInterval(deleteInterval);
});

// resume sliding

mainContainer.addEventListener('mouseout', autoslide);

