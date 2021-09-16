import refs from "../refs/refs";

export const createEl = text => `<li class="item"><p class="content-task">${text}</p></li>`;

export function saveItemLocalStorage (LOCAL_STORAGE, createEl) {
    const storageCollection = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    const dataFromStorage = storageCollection ? storageCollection : [];
    const result = dataFromStorage.map(string => createEl(string));
    const markup = result.join('');
    refs.listMakePage.insertAdjacentHTML('afterbegin', markup);    
}

export function onSubmit(event, LOCAL_STORAGE) {
    event.preventDefault();
    const value = event.currentTarget.elements.query.value;
    refs.listMakePage.insertAdjacentHTML('beforeend', createEl(value));

    const array = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    const arrayForStorage = array ? array : [];
    arrayForStorage.push(value);
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(arrayForStorage));

    event.currentTarget.reset();
}

