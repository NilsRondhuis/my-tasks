import { onSubmit } from "../render-list/form";
import { createEl } from "../render-list/form";
import { saveItemLocalStorage } from "../render-list/form";
import refs from "../refs/refs";


refs.formMakePage.addEventListener('submit', () => {
    onSubmit(event, 'make-task');
});

saveItemLocalStorage('make-task', createEl);


// const LS = localStorage.getItem('make-task');
// const parse = JSON.parse(LS);
// const newArr = parse.filter(el => el !== 'dfsdf');
// const newLS = JSON.stringify(newArr);
// localStorage.removeItem('make-task');
// localStorage.setItem('make-task', newLS);

