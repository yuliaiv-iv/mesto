import '../pages/index.css';

import {initialCards} from './initialCards.js';
import {validationConfig} from './config.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
//import {openPopup, closePopup} from './utils.js';
import {Section} from './Section.js';
import {PopupWithForm} from './PopupWithForm.js';

// Объявление переменных
// const editButton = document.querySelector('.profile__button-edit');
// const editPopup = '.popup__edit';
//const closeButtonEdit = document.querySelector('.popup__close_edit');
const addButton = document.querySelector('.profile__button-add');
const addPopup = '.popup__add';
//const closeButtonAdd = document.querySelector('.popup__close_add');
const formEdit = document.querySelector('.popup__input_container-edit');
const formAdd = document.querySelector('.popup__input_container-add');
// const nameInput = formEdit.querySelector('.popup__item_input-name');
// const jobInput = formEdit.querySelector('.popup__item_input-about');
// const profileName = document.querySelector('.profile__name');
// const profileAbout = document.querySelector('.profile__about');
//const listElements = document.querySelector('.card-container__list');
// const imagePopup = document.querySelector('.popup__image');
// const closeImageView = document.querySelector('.popup__close_image');
// const titleInput = document.querySelector('.popup__item_input-title');
// const linkInput = document.querySelector('.popup__item_input-link');
const cardTemplateSelector = '.card-template';
const listElements = '.card-container__list';


//Создадим экземпляр для каждой формы
const profileValidator = new FormValidator(validationConfig, formEdit);
const cardValidator = new FormValidator(validationConfig, formAdd);


//Возвращаем наружу карточки из массива
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, cardTemplateSelector);
        const cardElement = card.genetareCard();
        cardList.addItem(cardElement);
    }
},
    listElements
);
cardList.rendererItems();

console.log(cardList);

//Добавляем новую карточку
const addCardPopup = new PopupWithForm({
    popupSelector: addPopup,              //const addPopup = '.popup__add';
    handleFormSubmit: (data) => {
        const newCard = new Card(data, cardTemplateSelector); //const cardTemplateSelector = '.card-template';
        const cardElement = newCard.genetareCard(); 
        cardList.addItem(cardElement);
        addCardPopup.close();
    }
    
});
addCardPopup.setEventListeners();

//Открываем модальное окно добавления карточки
addButton.addEventListener('click', () => {
    formAdd.reset();
    clearAddFormErrors(addPopup);
    addCardPopup.open(); 
});

//Отчищение полей формы addcard и отключение активности кнопке
const clearAddFormErrors = (formElement) => {
    formAdd.reset();
    cardValidator.clearFormError(formElement, validationConfig);
}

// editButton.addEventListener('click', () => {
//     nameInput.value = profileName.textContent;
//     jobInput.value = profileAbout.textContent;
//     profileValidator.clearFormError();
//     profilePopup.open();
// });



//Вызов функций валидации форм
profileValidator.enableValidation();
cardValidator.enableValidation();

//Возвращаем наружу карточки из массива
// initialCards.forEach((item) => {
//     const card = new Card(item, cardTemplateSelector);
//     const cardElement = card.genetareCard();
//     listElements.prepend(cardElement);
// });

//Функция создания новой карточки пользователем
// const initialRender = (item) => {
//     const card = new Card(item, cardTemplateSelector);
//     const cardElement = card.genetareCard(); 
//     listElements.prepend(cardElement);
// }

//Добавляем новые карточки
// const addFormSubmitHandler = (event) => {
//     event.preventDefault();
//     const name = titleInput.value;
//     const link = linkInput.value;
//     initialRender({name, link});
//     closePopup(addPopup);
// }

//Открываем модальное окно редактирования
// editButton.addEventListener('click', () => {
//     nameInput.value = profileName.textContent;
//     jobInput.value = profileAbout.textContent;
//     profileValidator.clearFormError();
//     openPopup(editPopup);
// });

//Сохранение имя и профессии при закрытии формы
// const editFormSubmitHandler = (event) => {
//     event.preventDefault();  
//     profileName.textContent = nameInput.value;
//     profileAbout.textContent = jobInput.value;
//     closePopup(editPopup);
// }

//Закрываем модальное окно добавления карточки
// closeButtonAdd.addEventListener('click', () => {
//     closePopup(addPopup);
// });

//Закрываем модальное окно редактирования 
// closeButtonEdit.addEventListener('click', () => {
//     closePopup(editPopup);
// });

//Закрываем попап просмотра фотографии
// closeImageView.addEventListener('click', () => {
//     closePopup(imagePopup);
// });

//Прикрепляем обработчик к форме добавления карточек и форме редактирования
//formAdd.addEventListener('submit', addFormSubmitHandler);
//formEdit.addEventListener('submit', editFormSubmitHandler);