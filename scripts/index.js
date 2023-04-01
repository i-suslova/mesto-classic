import Card from "../scripts/Card.js";
import FormValidator from "./FormValidator.js";
import { config } from "./constants.js";

// ссылки на картинки
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//кнопки
const profileEditButton = document.querySelector(".profile__button-edit");
const profileAddButton = document.querySelector(".profile__button-add");
const popupList = document.querySelectorAll(".popup");

//pop-up-profile
const popupProfile = document.querySelector(".popup_profile");
const profileForm = document.forms["form-profile"];
const nameInput = document.querySelector("#input-name");
const jobInput = document.querySelector("#input-job");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

//pop-up-формы для создания карточек
const popupPicture = document.querySelector(".popup_picture");
const formPicture = document.forms["form-picture"];
const pictureInput = document.querySelector("#input-picture");
const linkInput = document.querySelector("#input-link");

//template
const elements = document.querySelector(".elements");



//открытие-закрытие попапов
function openPopup(element) {
  element.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closePopup(element) {
  element.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

profileEditButton.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupProfile);
});

//Закрытие попапа нажатием на Esc
const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    //находим открытый попап и закрываем его
    popupList.forEach((popup) => {
      if (popup.classList.contains("popup_opened")) {
        closePopup(popup);
      }
    });
  }
};

//объединяем обработчики оверлея и крестиков, их закрытие
popupList.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    //методом contains проверяем наличие CSS класса и при наличии выполняем функцию closePopup
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__button-close")) {
      closePopup(popup);
    }
  });
});

//открытие формы для создания карточек, используя именованную функцию
profileAddButton.addEventListener("click", function () {
  openPopup(popupPicture);
});

initialCards.forEach((data) => {
  const card = new Card(data, "#template");
  const cardElement = card.generateCard();
  // Добавляем в DOM
  document.querySelector(".elements").append(cardElement);
});

function createCard(evt, data) {
  evt.preventDefault();
  const card = new Card(data, "#template");
  const cardElement = card.generateCard();

  elements.prepend(cardElement);

  closePopup(popupPicture);
  formPicture.reset();
}

// Обработчик «отправки» формы profile
function handleProfileFormSubmit() {
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup(popupProfile);
}

// Обработчик «отправки» формы для создания карточек
function handlePictureFormSubmit(evt) {
  const data = {
    name: pictureInput.value,
    link: linkInput.value,
  };
  createCard(evt, data);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
formPicture.addEventListener("submit", handlePictureFormSubmit);


const formElements = document.querySelectorAll(config.formSelector);

formElements.forEach((formElement) => {
  const formValidator = new FormValidator(config, formElement);
  formValidator.enableValidation();
});
