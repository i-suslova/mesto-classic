/*const enableValidationConfig = {
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

// enableValidation();*/
const formElement = document.querySelector(".popup__form"); //form

const formInput = formElement.querySelector(".popup__input"); //input
const formError = formElement.querySelector(`.${formInput.id}-error`); //span

//Функция, которая добавляет класс с ошибкой
const showError = (formElement, inputElement, errorMessage, inputErrorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  openErrorClass();
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error_visible");
};

//Функция, которая удаляет класс с ошибкой
const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__error_visible");
  errorElement.textContent = "";
};

//проверка на корректность введённых данных
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

//находим все группы полей '.popup__form' и преобразуем их в массив
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__form"));
  const buttonElement = formElement.querySelector(".popup__button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//функция, проверяющая корректность содержимого на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some((input) => !input.validity.valid);
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button_disabled");
  } else {
    buttonElement.classList.remove("popup__button_disabled");
  }
};

//запускаем процесс валидации
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(formSelector)); //(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    });
  });
};
//У формы есть такой встроенный метод checkValidity();
//включение валидации вызовом enableValidation
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
  super
  !!!!!!!!!!!!!!!!!!!!!!!!!
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

  formElement.addEventListener("submit",(evt) => {
    evt.preventDefault();
  });
  // console.log(inputList);
  inputList.forEach((formInput) => {
    formInput.addEventListener("input", (e) => {
      console.log(e.target.value);

      checkInputValidity(formElement, formInput);
    });
  });
  }


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
