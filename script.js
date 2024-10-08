document.getElementById('showLinksBtn').addEventListener('click', function() {
    var extraLinks = document.getElementById('extraLinks');
    if (extraLinks.style.display === 'flex') {
        extraLinks.style.display = 'none';
    } else {
        extraLinks.style.display = 'flex';
    }
});

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open'); // Toggle the 'open' class to show or hide the menu

    const isOpen = dropDownMenu.classList.contains('open');
    
    // Toggle the icon between bars and x-mark
    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  
  slides.forEach(slide => slide.style.display = "none");
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  slides[slideIndex - 1].style.display = "block"; 
  setTimeout(showSlides,5000); 
}

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", () => {
  slideIndex -= 2;
  showSlides();
});

nextBtn.addEventListener("click", () => {
  showSlides();
});