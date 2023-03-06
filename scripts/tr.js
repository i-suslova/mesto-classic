const enableValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  enableValidationConfig: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//const formElement = document.querySelector(".popup__container");
const formSelector = document.querySelector(".popup__form");
const inputSelector = formSelector.querySelector(".popup__input");
const errorClass = formSelector.querySelector(".popup__error_visible");

const inputErrorClass = document.querySelector(".popup__input_type_error");

const showError = (formSelector, inputSelector, errorMessage, enableValidationConfig) => {
  const errorSelector = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.add(enableValidationConfig.enableValidationConfig);
  errorSelector.textContent = errorMessage;
  errorSelector.classList.add(enableValidationConfig.errorClass);
};

const hideError = (formSelector, inputSelector, enableValidationConfig) => {
  const errorSelector = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.remove(enableValidationConfig.enableValidationConfig);
  errorSelector.classList.remove(enableValidationConfig.errorClass);
  errorSelector.textContent = " ";
};
//проверка на корректность введённых данных
const checkInputValidity = (formSelector, inputSelector, enableValidationConfig) => {
  if (!inputSelector.validity.valid) {
    showError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    hideError(formSelector, inputSelector, enableValidationConfig);
  }
};

const setEventListeners = (formSelector, enableValidationConfig) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formSelector.querySelectorAll(enableValidationConfig.inputSelector));

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputSelector) => {
    // каждому полю добавим обработчик события input
    inputSelector.addEventListener("input", () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      checkInputValidity(formSelector, inputSelector, enableValidationConfig);
    });
  });
};

const enableValidation = (enableValidationConfig) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(enableValidationConfig.formSelector));

  // Переберём полученную коллекцию
  formList.forEach((formSelector) => {
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formSelector, enableValidationConfig);
  });
};

// Вызовем функцию
enableValidation(enableValidationConfig);

//inputSelector.addEventListener("input", function () {
// checkInputValidity();
//});

// enableValidation();
