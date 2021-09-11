import serverLocalStorage from '../data-base/data-base';

const refs = {
    form: document.querySelector('.form'),
    list: document.querySelector('.list-task'),
};

const LOCAL_STORAGE = 'task-info';

refs.form.addEventListener('submit', onSubmit);

localStorage.setItem(LOCAL_STORAGE, JSON.stringify(serverLocalStorage.dataBase));
const getString = localStorage.getItem(LOCAL_STORAGE);
const parseString = JSON.parse(getString);
const result = makeMarkup(parseString);
appendMarkup(result);

function onSubmit(e) {
    e.preventDefault();
    const value = e.currentTarget.elements.query.value;
    serverLocalStorage.dataBase.push(value);
    
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(serverLocalStorage.dataBase));
    const getString = localStorage.getItem(LOCAL_STORAGE);
    const parseString = JSON.parse(getString);
    
    const result = makeMarkup(parseString);
    appendMarkup(result);
    e.currentTarget.reset();
}


function makeMarkup(elements) {
    return elements.map(el => {
        return `
        <li class="item"><p class="content-task">${el}</p></li>
        `;
    })
}

function appendMarkup(el) {
    refs.list.innerHTML = el.join('');
}