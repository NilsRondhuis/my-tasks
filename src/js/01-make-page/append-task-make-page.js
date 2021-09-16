import { onSubmit } from "../render-list/form";
import { createEl } from "../render-list/form";
import { saveItemLocalStorage } from "../render-list/form";
import refs from "../refs/refs";


refs.formMakePage.addEventListener('submit', () => {
    onSubmit(event, 'make-task');
});

saveItemLocalStorage('make-task', createEl);