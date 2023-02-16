const buttonEdit = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__button-close");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector("#input-name");
const jobInput = document.querySelector("#input-job");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

//замена значения в форме из значений в профиле
//открытие попапа, добавляя модификатор
buttonEdit.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  popup.classList.add("popup_opened");
});

//создаем отдельную именованную функцию закрытия попапа
function closeFormPopup(element) {
  element.classList.remove("popup_opened");
}

//закрытие попапа, используя именованную функцию
buttonClose.addEventListener("click", function () {
  closeFormPopup(popup);
});

// Обработчик «отправки» формы
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  //закрытие попапа, используя именованную функцию
  closeFormPopup(popup);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
