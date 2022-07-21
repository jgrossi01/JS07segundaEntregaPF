import { formValidate } from "./form.js";
import { createLi, loadCards } from "./content.js";

window.addEventListener("DOMContentLoaded", (event) => {
  createLi();
  loadCards();

    const bookingForm = document.getElementById("bookingForm");
    const clearFormBtn = document.getElementById("clearFormBtn");

    clearFormBtn.addEventListener("click", () => {
    bookingForm.reset();
    });

    bookingForm.addEventListener("submit", formValidate);
});

function nextIndexOf(array) {
  return array.length + 1;
}

export { nextIndexOf };
