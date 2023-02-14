const buttonEdit = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__button-close");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector("#input-name");
let jobInput = document.querySelector("#input-job");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

//изменять значения в форме из значений в профиле до открытия попапа
nameInput.value = "Жак-Ив Кусто";
jobInput.value = "Исследователь океана";

//открытия попапа, добавляя модификатор
buttonEdit.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});

//закрытие попапа, удаляя модификатор
buttonClose.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

// Обработчик «отправки» формы
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
