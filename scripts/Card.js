export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._alt = data.name;
    this._link = data.link;

    this._popupImage = document.querySelector(".popup_image");
    this._popupImagePhoto = this._popupImage.querySelector(".popup__image-photo");
    this._popupImageText = this._popupImage.querySelector(".popup__image-text");

    this._templateSelector = templateSelector; // шаблон разметки
  }
  // забираем разметку из HTML и клонируем элемент
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      //извлечём содержимое template-элемента
      .content.querySelector(".element")
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._image = this._element.querySelector(".element__photo");
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;

    this._buttonDelete = this._element.querySelector(".element__button-delete");
    this._buttonLike = this._element.querySelector(".element__button-like");

    this._setEventListeners();

    // Вернём элемент наружу
    return this._element;
  }

  _setEventListeners() {
    //создание увеличенной карточки
    this._image.addEventListener("click", () => {
      this._handleOpenPopup();
    });

    //  удаление карточки
    this._buttonDelete.addEventListener("click", () => {
      this._handleButtonDelete();
    });

    //возможность ставить лайк
    this._buttonLike.addEventListener("click", () => {
      this._handleButtonLike();
    });
  }

  _handleButtonDelete() {
    this._element.remove();
  }

  _handleButtonLike() {
    this._buttonLike.classList.toggle("element__button-like_activ");
  }

  _handleOpenPopup() {
    this._popupImagePhoto.src = this._link;
    this._popupImagePhoto.alt = this._name;
    this._popupImageText.textContent = this._name;
    this._popupImage.classList.add("popup_opened");
  }

  _handleClosePopup() {
    popupImage.src = "";
    this._popupImage.classList.remove("popup_opened");
  }
}
