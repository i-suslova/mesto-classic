const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error", //red
  errorClass: "popup__error_visible", //
};

//onst maxformElement = document.querySelector(".popup__form"); //form
//const formInput = formElement.querySelector(".popup__input"); //input
//const formMaxError = formElement.querySelector(".popup__error"); //span blue
// const formError = formElement.querySelector(`.${formInput.id}-error`); //span blue
//console.log(maxformElement);

const showInputError = (formElement, inputElement, errorMessage) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`); //span blue

  inputElement.classList.add("popup__input_type_error");
  formError.textContent = errorMessage;
  formError.classList.add("popup__error_visible");
};

const hideInputError = (formElement, inputElement) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`); //span blue

  inputElement.classList.remove("popup__input_type_error");
  formError.classList.remove("popup__error_visible");
  formError.textContent = "";
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement);
  }
};

//функция, проверяющая корректность содержимого на валидность
//const hasInvalidInput = (inputList) => {
//  return inputList.some((inputElement) => !inputElement.validity.valid);
//};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation(config);

console.log("123");
//console.log(!formInput.validity.valid);
// console.log(formList);
console.log(enableValidation);
//сonsole.log(inputList);
//сonsole.log(formList);
