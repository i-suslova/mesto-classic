const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//добавляем спан с ошибкой и подчеркиваем красной чертой
const showInputError = (formElement, inputElement, errorMessage) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(config.inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(config.errorClass);
};

//удаляем спан с ошибкой и убираем красную черту
const hideInputError = (formElement, inputElement) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(config.inputErrorClass);
  formError.classList.remove(config.errorClass);
  formError.textContent = "";
};

//показываем неработающую кнопку отправки формы
const disableButton = (buttonElement) => {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.classList.remove(config.submitButtonSelector);
  buttonElement.disabled = true;
};
//показываем работающую кнопку отправки формы
const enableButton = (buttonElement) => {
  buttonElement.classList.add(config.submitButtonSelector);
  buttonElement.classList.remove(config.inactiveButtonClass);
  buttonElement.disabled = false;
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

//функция,котрая принимает массив полей
const hasInvalidInput = (inputList) => {
  //методом some находим невалидный input
  return inputList.some((input) => !input.validity.valid);
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement);
  } else {
    enableButton(buttonElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  // вызов функции toggleButtonState до ввода данных в поля,
  // для недоступного состояния кнопки при загрузке страницы
  toggleButtonState(inputList, buttonElement, disableButton);

  // обработчик reset для деактивации кнопки
  formElement.addEventListener("reset", () => {
    disableButton(buttonElement, config);
  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      // вызов функции toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement, disableButton);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

enableValidation(config);
