// const hamburger = document.querySelector('.hamburger--js');
// console.log(hamburger);
// hamburger.addEventListener('click', () => {
//     const nav = document.querySelector('.navigation__list--js');
//     nav.classList.toggle('navigation__list--open');
// });



(() => {
    const button = document.querySelector('.hamburger--js');
    const menu = document.querySelector('.navigation-list');
    const logoLink = document.querySelector('.navigation__logo');

    const toggleClass = () => {
        menu.classList.toggle('navigation-list--open');
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
    logoLink.addEventListener("click", toggleClass);

})();



const asidePanel = document.querySelector(".last-upgrade--js");
const asidePanelText = document.querySelector(".last-upgrade__tongue-special");

const asidePanelTextOld = asidePanelText.textContent;
const asidePanelTextNew = "Zwiń Mnie 😁";

asidePanel.addEventListener("click", () => {
    asidePanel.classList.toggle("last-upgrade--show");
    if (asidePanelText.innerText == asidePanelTextOld) {
        asidePanelText.innerText = asidePanelTextNew;
    } else {
        asidePanelText.innerText = asidePanelTextOld;
    }
});



// const asidePanel = document.querySelector('.last-upgrade--js');
// asidePanel.addEventListener('click', () => {
//     asidePanel.classList.toggle('last-upgrade--show');
// });

// const asideText = document.querySelector('.last-upgrade__tongue');
// console.log("asideText", asideText)

// asideText.addEventListener('click', () => {
//     asideText.innerText = ("Zamknij mnie");


// });