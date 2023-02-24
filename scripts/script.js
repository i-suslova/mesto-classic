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

const buttonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup_profile");
const buttonProfileClose = document.querySelector(".popup__button-close_profile");
const formProfile = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector("#input-name");
const jobInput = document.querySelector("#input-job");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const buttonProfileAdd = document.querySelector(".profile__button-add");
const popupPicture = document.querySelector(".popup_picture");
const buttonPictureClose = document.querySelector(".popup__button-close_picture");
const buttonImageClose = document.querySelector(".popup__button-close_image");
const elements = document.querySelector(".elements");
const pictureInput = document.querySelector("#input-picture");
const linkInput = document.querySelector("#input-link");
const popupImage = document.querySelector(".popup__image");
const cloneTemplate = document.getElementById("template").content.cloneNode(true);
const formPicture = document.querySelector(".popup__form-picture");
const elementPhoto = cloneTemplate.querySelector(".element__photo");
const elementTitle = cloneTemplate.querySelector(".element__title");

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

//закрытие попапа-profile, используя именованную функцию
buttonProfileClose.addEventListener("click", function () {
  closeFormPopup(popupProfile);
});

//открытие формы для создания карточек, используя именованную функцию
buttonProfileAdd.addEventListener("click", function () {
  openFormPopup(popupPicture);
});

//закрытие формы для создания карточек, используя именованную функцию
buttonPictureClose.addEventListener("click", function () {
  c;
});

//обращаемся к массиву initialCards и методом forEach проходим циклом по каждой карточке
initialCards.forEach(createCard);

function createCard(initialCard) {
  const cloneTemplate = document.getElementById("template").content.cloneNode(true);
  const elementPhoto = cloneTemplate.querySelector(".element__photo");
  const elementTitle = cloneTemplate.querySelector(".element__title");
  const buttonDelete = cloneTemplate.querySelector(".element__button-delete");
  const buttonLike = cloneTemplate.querySelector(".element__button-like");
  const popupImage = document.querySelector(".popup__image");
  const buttonImageClose = document.querySelector(".popup__button-close_image");

  elementPhoto.addEventListener("click", function () {
    openFormPopup(popupImage);
    document.querySelector(".popup__image-photo").src = initialCard.link;
    document.querySelector(".popup__image-photo").alt = initialCard.name;
    document.querySelector(".popup__image-text").textContent = initialCard.name;
  });
  /*closeFormPopup(popupImage);????*/

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

  elementPhoto.setAttribute("src", initialCard.link);
  elementPhoto.setAttribute("alt", initialCard.name);
  elementTitle.textContent = initialCard.name;

  elements.append(cloneTemplate);
  return cloneTemplate;
}

// Обработчик «отправки» формы
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  //закрытие попапа-profile, используя именованную функцию
  closeFormPopup(popupProfile);
}

function pictureFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const name = pictureInput.value;
  const link = linkInput.value;
  const card = createCard(name, link);
  createCard(name, link);
  closeFormPopup(popupPicture);
  formPicture.reset();
  elements.prepend(card);

  closeFormPopup(popupPicture);
}

formProfile.addEventListener("submit", handleFormSubmit);
formPicture.addEventListener("submit", pictureFormSubmit);
