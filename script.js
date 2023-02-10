const buttonEdit = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__button-close");
const buttonSubmit = document.querySelector(".popup__button-submit");

buttonEdit.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

buttonClose.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});

let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__input-name");
let jobInput = formElement.querySelector(".popup__input-status");

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameInput.value;
  jobInput.value;

  let profileTitle = document.querySelector(".profile__title");
  let profileSubtitle = document.querySelector(".profile__subtitle");

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

formElement.addEventListener("submit", handleFormSubmit);

buttonSubmit.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});
