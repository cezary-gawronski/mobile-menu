// const hamburger = document.querySelector('.hamburger--js');
// console.log(hamburger);
// hamburger.addEventListener('click', () => {
//     const nav = document.querySelector('.navigation__list--js');
//     nav.classList.toggle('navigation__list--open');
// });



(() => {
    const button = document.querySelector('.hamburger--js');
    const menu = document.querySelector('.navigation__list');
    const logoLink = document.querySelector('.navigation__logo');

    const toggleClass = () => {
        menu.classList.toggle('navigation__list--open');
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
    logoLink.addEventListener("click", toggleClass);

})();