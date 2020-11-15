const appDiv = document.querySelector('.app');
const appHeader = document.querySelector('.header');

(() => {
    navElement();
})();

function nav(){
    return `
    <div class="nav__section">
        <h3 class="nav__section__items nav__section__art">New Art</h3>
        <h3 class="nav__section__items nav__section__api">Harvard API</h3>
    </div>
    `
}

function navElement(){
    appHeader.innerHTML= nav();
}