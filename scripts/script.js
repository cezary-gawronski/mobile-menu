const hamburger = document.querySelector('.hamburger--js');
console.log(hamburger);

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation__list--js');
    nav.classList.toggle('navigation__list--open');
})





// navigation__list--js

// .navigation__list--open