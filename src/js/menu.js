const refs = {
    openBtn: document.querySelector('.menu-btn'),
    closeBtn: document.querySelector('.close-btn'),
    backdrop: document.querySelector('.js-backdrop'),
    menu: document.querySelector('.js-menu'),
    logo: document.querySelector('.logo'),
};


refs.openBtn.addEventListener('click', onOpen);
refs.closeBtn.addEventListener('click', onClose);

function onOpen() {
    refs.backdrop.classList.add('is-open');
    refs.menu.classList.add('is-open');

    if(refs.backdrop.classList.contains('is-open')) {
        refs.logo.classList.add('is-open');
    }
}

function onClose() {
    refs.backdrop.classList.remove('is-open');
    refs.menu.classList.remove('is-open');

    if(!refs.backdrop.classList.contains('is-open')) {
        refs.logo.classList.remove('is-open');
    }
}

