import {formValidate} from './form.js';
//import { createLi,loadCards } from './content.js';

const bookingForm = document.getElementById('bookingForm');
const clearFormBtn = document.getElementById('clearFormBtn');

clearFormBtn.addEventListener("click", () => {
    bookingForm.reset();
});

bookingForm.addEventListener("submit", formValidate);



