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
const pictureInput = document.querySelector("#input-picture");
const linkInput = document.querySelector("#input-link");


//создаем отдельную именованную функцию открытия попапа
function openFormPopup(element) {
  element.classList.add("popup_opened");
}

//создаем отдельную именованную функцию закрытия попапа
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

//открытие попапа-template, используя именованную функцию
buttonProfileAdd.addEventListener("click", function() {
  openFormPopup(popupPicture);
})

//закрытие попапа-template, используя именованную функцию
buttonPictureClose.addEventListener("click", function () {
  closeFormPopup(popupPicture);
})

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


function


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