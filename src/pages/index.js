import '../pages/index.css';

import { Api } from '../components/Api.js';
import { validationConfig } from '../utils/config.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {
    initialCards,
    editButton,
    editPopup,
    addButton,
    addPopup,
    formEdit,
    formAdd,
    formAvatar,
    imagePopup,
    nameInput,
    jobInput,
    profileName,
    profileAbout,
    profileAvatar,
    titleInput,
    linkInput,
    listElements,
    cardTemplateSelector
} from '../utils/constants';

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
    headers: {
        authorization: '4905795f-d4f5-4259-8ab1-1154380da5eb',
        'Content-Type': 'application/json'
    }
});


//Создадим экземпляры
const profileValidator = new FormValidator(validationConfig, formEdit);
const cardValidator = new FormValidator(validationConfig, formAdd);
const avatarValidator = new FormValidator(validationConfig, formAvatar);
const popupImage = new PopupWithImage(imagePopup);
const userProfile = new UserInfo({ name: profileName, about: profileAbout });
const userAvatar = new UserInfo(profileAvatar);


//Отврываем просмотр картинок
const handleCardClick = (data) => {
    popupImage.open(data);
};



const cardList = new Section({
    items: initialCards, // пустой массив из constants.js
    renderer: (item) => {
        const card = new Card(item, cardTemplateSelector, handleCardClick);
        const cardElement = card.genetareCard();
        cardList.addItem(cardElement);
    }
},
    listElements  //контейнер
);

api.getInitialCards()
    .then((result) => {
        //cardList.rendererItems(result);
        console.log(result);
    })
    .catch((err) => {
        console.log(err); 
    });
//console.log(api.getInitialCards())


//Добавляем новую карточку
const addCardPopup = new PopupWithForm({
    popupSelector: addPopup,
    handleFormSubmit: () => {
        const name = titleInput.value;
        const link = linkInput.value;
        const alt = titleInput.value;
        const newCard = new Card({ name, link, alt }, cardTemplateSelector, handleCardClick);
        const cardElement = newCard.genetareCard();
        cardList.addItem(cardElement);
        addCardPopup.close();
    }
});

//Открываем модальное окно добавления карточки
addButton.addEventListener('click', () => {
    formAdd.reset();
    removeFormErrors(addPopup);
    addCardPopup.open();
});

//Отчищение полей формы addcard и отключение активности кнопке
const removeFormErrors = (formElement) => {
    cardValidator.clearFormError(formElement, validationConfig);
    avatarValidator.clearFormError(formElement, validationConfig);
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

//Открываем попап аватара
const avatarButton = document.querySelector('.profile__button-avatar');
const avatarPopup = '.popup__avatar';

const addAvatarPopup = new PopupWithForm({
    popupSelector: avatarPopup,
    handleFormSubmit: () => {
        userAvatar.setUserAvatar();
        addAvatarPopup.close();
    }
});

avatarButton.addEventListener('click', () => {
    addAvatarPopup.open();
    formAvatar.reset();
    removeFormErrors(avatarPopup);
});

addAvatarPopup.setEventListeners();
profilePopup.setEventListeners();
addCardPopup.setEventListeners();
popupImage.setEventListeners();

//Вызов функций валидации форм
profileValidator.enableValidation();
cardValidator.enableValidation();
avatarValidator.enableValidation();


