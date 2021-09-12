import serverLocalStorage from '../data-base/data-base';

const refs = {
    form: document.querySelector('.form'),
    list: document.querySelector('.list-task'),
};

const LOCAL_STORAGE = 'make-task';

refs.form.addEventListener('submit', onSubmit);

const createEl = text => `<li class="item"><p class="content-task">${text}</p></li>`;

const storageCollection = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
const dataFromStorage = storageCollection ? storageCollection : [];
const result = dataFromStorage.map(string => createEl(string));
const markup = result.join('');
refs.list.insertAdjacentHTML('afterbegin', markup);

// localStorage.clear()

function onSubmit(e) {
    e.preventDefault();
    const value = e.currentTarget.elements.query.value;
    refs.list.insertAdjacentHTML('beforeend', createEl(value));

    const array = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    const arrayForStorage = array ? array : [];
    arrayForStorage.push(value);
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(arrayForStorage));

    e.currentTarget.reset();
}

