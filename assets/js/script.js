const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('ul');

const openMenu = () =>{
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('#nav-link');
navLink.forEach((n)=> n.addEventListener('click', closeMenu));
const closeMenu = () =>{
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener('click', ()=>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});