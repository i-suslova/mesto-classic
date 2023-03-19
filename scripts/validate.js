/*const objValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error", //red
  errorClass: "popup__error_visible", //
};*/

const formElement = document.querySelector(".popup__form"); //form
const formInput = formElement.querySelector(".popup__input"); //input
const formMaxError = formElement.querySelector(".popup__error"); //span blue
// const formError = formElement.querySelector(`.${formInput.id}-error`); //span blue

const showInputError = (formElement, formInput, errorMessage) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`); //span blue

  formInput.classList.add("popup__input_type_error");
  formError.textContent = errorMessage;
  formError.classList.add("popup__error_visible");
};

const hideInputError = (formElement, formInput) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`); //span blue

  formInput.classList.remove("popup__input_type_error");
  formError.classList.remove("popup__error_visible");
  formError.textContent = "";
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, formInput) => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, formInput);
  }
};

const setEventListeners = (formElement, inputList) => {
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  // console.log(inputList);
  inputList.forEach((formInput) => {
    formInput.addEventListener("input", (e) => {
      console.log(e.target.value);

      checkInputValidity(formElement, formInput);
    });
  });
};

const enableValidation = (config) => {
  const formElement = document.querySelector(config.formSelector); //form
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));

  setEventListeners(formElement, inputList);
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error", //red
  errorClass: "popup__error_visible", //span
});

console.log("123");
console.log(!formInput.validity.valid);
//console.log(formError);
console.log(`${formInput.id}-error`);
