import refs from "../refs/refs";

refs.openBtnMainPage.addEventListener('click', onOpen);
refs.closeBtnMainPage.addEventListener('click', onClose);

function onOpen() {
    refs.backdropMainPage.classList.add('is-open');
    refs.menuMainPage.classList.add('is-open');

    if(refs.backdropMainPage.classList.contains('is-open')) {
        refs.logoMainPage.classList.add('is-open');
    }
}

function onClose() {
    refs.backdropMainPage.classList.remove('is-open');
    refs.menuMainPage.classList.remove('is-open');

    if(!refs.backdropMainPage.classList.contains('is-open')) {
        refs.logoMainPage.classList.remove('is-open');
    }
}

