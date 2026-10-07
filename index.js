const showBtnEl = document.querySelector(".show");
const oqEl = document.querySelector(".oq");
const closeEl = document.querySelector(".close");
const cancelEl = document.querySelector(".cancel");
const deleteEl = document.querySelector(".delete");
function toggleModal() {
  oqEl.classList.toggle("hidden");
  showBtnEl.classList.toggle("hidden");
}

showBtnEl.addEventListener("click", () => toggleModal());
closeEl.addEventListener("click", () => toggleModal());
cancelEl.addEventListener("click", () => toggleModal());
deleteEl.addEventListener("click", () => toggleModal());
