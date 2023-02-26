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
const buttonEdit = document.querySelector(".profile__button-edit");
const buttonProfileAdd = document.querySelector(".profile__button-add");
const buttonProfileClose = document.querySelector(".popup__button-close_profile");
const buttonPictureClose = document.querySelector(".popup__button-close_picture");
const buttonImageClose = document.querySelector(".popup__button-close_image");

//pop-up-profile
const popupProfile = document.querySelector(".popup_profile");
const formProfile = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector("#input-name");
const jobInput = document.querySelector("#input-job");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

//pop-up-формы для создания карточек
const popupPicture = document.querySelector(".popup_picture");
const formPicture = document.querySelector(".popup__form-picture");
const pictureInput = document.querySelector("#input-picture");
const linkInput = document.querySelector("#input-link");

//pop-up-с увеличенной карточкой
const popupImage = document.querySelector(".popup__image");
const popupImagePhoto = document.querySelector(".popup__image-photo");
const popupImageText = document.querySelector(".popup__image-text");

//template
const cloneTemplate = document.getElementById("template").content.cloneNode(true);
const elements = document.querySelector(".elements");

//открытие-закрытие попапов
function openFormPopup(element) {
  element.classList.add("popup_opened");
}

function closeFormPopup(element) {
  element.classList.remove("popup_opened");
}

buttonEdit.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openFormPopup(popupProfile);
});

buttonProfileClose.addEventListener("click", function () {
  closeFormPopup(popupProfile);
});

//открытие формы для создания карточек, используя именованную функцию
buttonProfileAdd.addEventListener("click", function () {
  openFormPopup(popupPicture);
});

//закрытие формы для создания карточек, используя именованную функцию
buttonPictureClose.addEventListener("click", function () {
  closeFormPopup(popupPicture);
});

//обращаемся к массиву initialCards и методом forEach проходим циклом по каждой карточке
initialCards.forEach(function (element) {
  const newCard = createCard(element.name, element.link);
  elements.append(newCard);
});

function createCard(name, link) {
  const cloneTemplate = document.getElementById("template").content.cloneNode(true);
  const elementPhoto = cloneTemplate.querySelector(".element__photo");
  const elementTitle = cloneTemplate.querySelector(".element__title");
  const buttonDelete = cloneTemplate.querySelector(".element__button-delete");
  const buttonLike = cloneTemplate.querySelector(".element__button-like");
  const buttonImageClose = document.querySelector(".popup__button-close_image");

  //создаем карточки на начальный экран из представленного массива
  elementPhoto.setAttribute("src", link);
  elementPhoto.setAttribute("alt", name);
  elementTitle.textContent = name;

  //создание увеличенной карточки
  elementPhoto.addEventListener("click", function () {
    openFormPopup(popupImage);
    popupImagePhoto.src = link;
    popupImagePhoto.alt = name;
    popupImageText.textContent = name;
  });

  //закрытие увеличенной карточки
  buttonImageClose.addEventListener("click", function () {
    closeFormPopup(popupImage);
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
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closeFormPopup(popupProfile);
}

// Обработчик «отправки» формы для создания карточек
function handlePictureFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const name = pictureInput.value;
  const link = linkInput.value;
  const newCard = createCard(name, link);
  elements.prepend(newCard);

  closeFormPopup(popupPicture);
  formPicture.reset();
}

formProfile.addEventListener("submit", handleFormSubmit);
formPicture.addEventListener("submit", handlePictureFormSubmit);
