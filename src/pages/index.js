import '../pages/index.css';

import {initialCards} from '../components/initialCards';
import {validationConfig} from '../utils/config';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {
    editButton,
    editPopup,
    addButton,
    addPopup,
    formEdit,
    formAdd,
    imagePopup,
    nameInput,
    jobInput,
    profileName,
    profileAbout,
    titleInput,
    linkInput,
    listElements,
    cardTemplateSelector
} from '../utils/constants';

//Создадим экземпляры
const profileValidator = new FormValidator(validationConfig, formEdit);
const cardValidator = new FormValidator(validationConfig, formAdd);
const popupImage = new PopupWithImage(imagePopup);
const userProfile = new UserInfo({name: profileName, about: profileAbout});


//Отврываем просмотр картинок
const handleCardClick = (data) => {
    popupImage.open(data);
  };

//Возвращаем наружу карточки из массива
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, cardTemplateSelector, handleCardClick);
        const cardElement = card.genetareCard();
        cardList.addItem(cardElement);
    }
},
    listElements
);
cardList.rendererItems();

//Добавляем новую карточку
const addCardPopup = new PopupWithForm({
    popupSelector: addPopup, 
    handleFormSubmit: () => {
        const name = titleInput.value;
        const link = linkInput.value;
        const newCard = new Card({name, link}, cardTemplateSelector, handleCardClick);
        const cardElement = newCard.genetareCard(); 
        cardList.addItem(cardElement);
        addCardPopup.close();
    }
    
});

//Открываем модальное окно добавления карточки
addButton.addEventListener('click', () => {
    formAdd.reset();
    clearAddFormErrors(addPopup);
    addCardPopup.open(); 
});

//Отчищение полей формы addcard и отключение активности кнопке
const clearAddFormErrors = (formElement) => {
    cardValidator.clearFormError(formElement, validationConfig);
}

//Добавляем данные профиля на страницу
const profilePopup = new PopupWithForm({
    popupSelector: editPopup,
    handleFormSubmit: () => {
        userProfile.setUserInfo(nameInput, jobInput);
        profilePopup.close();
    }
});

//Открываем попап профиля
editButton.addEventListener('click', () => {
    const user = userProfile.getUserInfo();
    nameInput.value = user.name; 
    jobInput.value = user.about;
    userProfile.getUserInfo();
    profileValidator.clearFormError();
    profilePopup.open();
});


profilePopup.setEventListeners();
addCardPopup.setEventListeners();
popupImage.setEventListeners();

//Вызов функций валидации форм
profileValidator.enableValidation();
cardValidator.enableValidation();
