import {createLi,removeContent,loadCards,nextIndexOf} from './content.js';
import {Car, Reservation,arrayCars} from './class.js';
import {formValidate,saveThis,applyVoucher,addErrorMsj,addMsj,clearMsj} from './form.js';


let finalQty;
let finalTotal;

let voucherReturn;
let totalDiscount;

const msjBox = document.getElementById('msj');
const msjMsj = document.getElementById('msjmsj');
const msjFinal = document.getElementById('msjfinal');  

const errorMsjBox = document.getElementById('errormsj');
const errorMsjMsj = document.getElementById('errormsjmsj');
const errorMsjFinal = document.getElementById('errormsjfinal'); 

const bookingForm = document.getElementById('bookingForm');
const clearFormBtn = document.getElementById('clearFormBtn');

clearFormBtn.addEventListener("click", () => {
    bookingForm.reset();
});

bookingForm.addEventListener("submit", formValidate);

window.addEventListener('DOMContentLoaded', (event) => {
    createLi(arrayCars);
    loadCards(arrayCars);
});




