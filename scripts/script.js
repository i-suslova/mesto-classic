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

const cloneTemplate = document.querySelector("#template").content.cloneNode(true);

const pictureInput = document.querySelector("#input-picture");
const linkInput = document.querySelector("#input-link");
const popupImage = document.querySelector(".popup__image");

/*//функция создания картинки
function addPicture(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

}*/

//отдельная именованная функцию открытия попапа
function openFormPopup(element) {
  element.classList.add("popup_opened");
}

//отдельная именованная функцию закрытия попапа
function closeFormPopup(element) {
  element.classList.remove("popup_opened");
}

//замена значения в форме из значений в профиле
//открытие попапа-profile, используя именованную функцию
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

/*//открытие попапа с увеличенной карточкой, используя именованную функцию
elementPhoto.addEventListener("click", function () {
  openFormPopup(popupImage);
});*/

//закрытие формы для создания карточек, используя именованную функцию
buttonPictureClose.addEventListener("click", function () {
  closeFormPopup(popupPicture);
});

/*// активность кнопки нравится
buttonLike.addEventListener("click", function () {
  buttonLike.classList.toggle("element__button-like_activ");
});*/

// for template
const elements = document.querySelector(".elements");

//обращаемся к массиву initialCards и методом forEach проходим циклом по каждой карточке

function createCard(initialCard) {
  // находим по id и клонируем содержимое тега <template>
  const cloneTemplate = document.getElementById("template").content.cloneNode(true);
  //в cloneTemplate находим img
  const elementPhoto = cloneTemplate.querySelector(".element__photo");
  elementPhoto.setAttribute("src", initialCard.link);
  elementPhoto.setAttribute("alt", initialCard.name);
  //в cloneTemplate находим заголовок
  const elementTitle = cloneTemplate.querySelector(".element__title");
  //свойством textContent присвиваем нужное значение
  elementTitle.textContent = initialCard.name;

  //удаление карточки
  const buttonDelete = cloneTemplate.querySelector(".element__button-delete");
  buttonDelete.addEventListener("click", function (element) {
    const button = element.target;
    const card = button.closest(".element");
    card.remove();
  });

  const buttonLike = cloneTemplate.querySelector(".element__button-like");
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle(".element__button-delete");
  });

  // Вставляем склонированный контент на страницу
  elements.append(cloneTemplate);
}

initialCards.forEach(createCard);

// Обработчик «отправки» формы
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  //закрытие попапа-profile, используя именованную функцию
  closeFormPopup(popupProfile);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfile.addEventListener("submit", handleFormSubmit);
