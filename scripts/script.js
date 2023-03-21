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
const profileCloseButton = document.querySelector(".popup__button-close_profile");
const pictureCloseButton = document.querySelector(".popup__button-close_picture");
const imageCloseButton = document.querySelector(".popup__button-close_image");
const closeAllButtons = document.querySelectorAll(".popup__button-close");
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

//pop-up-с увеличенной карточкой
const popupImage = document.querySelector(".popup_image");
const popupImagePhoto = document.querySelector(".popup__image-photo");
const popupImageText = document.querySelector(".popup__image-text");

//template
const elements = document.querySelector(".elements");
const template = document.getElementById("template").content;

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

//обращаемся к массиву initialCards и методом forEach проходим циклом по каждой карточке
initialCards.forEach(function (element) {
  const newCard = createCard(element.name, element.link);
  elements.append(newCard);
});

function createCard(name, link) {
  const cloneTemplate = template.querySelector(".element").cloneNode(true);
  const elementPhoto = cloneTemplate.querySelector(".element__photo");
  const elementTitle = cloneTemplate.querySelector(".element__title");
  const buttonDelete = cloneTemplate.querySelector(".element__button-delete");
  const buttonLike = cloneTemplate.querySelector(".element__button-like");

  //создаем карточки на начальный экран из представленного массива
  elementPhoto.setAttribute("src", link);
  elementPhoto.setAttribute("alt", name);
  elementTitle.textContent = name;

  //создание увеличенной карточки
  elementPhoto.addEventListener("click", function () {
    openPopup(popupImage);
    popupImagePhoto.src = link;
    popupImagePhoto.alt = name;
    popupImageText.textContent = name;
  });

  //удаление карточки
  buttonDelete.addEventListener("click", function (element) {
    const button = element.target;
    const card = button.closest(".element");
    card.remove();
  });

  //возможность ставить лайк
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("element__button-like_activ");
  });

  return cloneTemplate;
}

// Обработчик «отправки» формы profile
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup(popupProfile);
}

// Обработчик «отправки» формы для создания карточек
function handlePictureFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const name = pictureInput.value;
  const link = linkInput.value;
  const newCard = createCard(name, link);
  elements.prepend(newCard);

  closePopup(popupPicture);
  formPicture.reset();
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
formPicture.addEventListener("submit", handlePictureFormSubmit);
