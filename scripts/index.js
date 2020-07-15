// Объявление переменных
const editButton = document.querySelector('.profile__button-edit');
const editPopup = document.querySelector('.popup__edit');
const closeButtonEdit = document.querySelector('.popup__close_edit');
const addButton = document.querySelector('.profile__button-add');
const addPopup = document.querySelector('.popup__add');
const closeButtonAdd = document.querySelector('.popup__close_add');
const formEdit = document.querySelector('.popup__input_container-edit');
const formAdd = document.querySelector('.popup__input_container-add');
const nameInput = formEdit.querySelector('.popup__item_input-name');
const jobInput = formEdit.querySelector('.popup__item_input-about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const templateElements = document.querySelector('.card-template').content;
const listElements = document.querySelector('.card-container__list');
const imageItem = document.querySelector('.popup__view');
const imageTitle = document.querySelector('.popup__title_image');
const imagePopup = document.querySelector('.popup__image');
const closeImageView = document.querySelector('.popup__close_image');
const titleInput = document.querySelector('.popup__item_input-title');
const linkInput = document.querySelector('.popup__item_input-link');


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_disabled',
    inputErrorClass: 'popup__item_error',
    errorClass: 'popup__item-error_active',
}

//функция открытия и закрытия модальных окон
function openPopup(event) { 
    event.classList.add('popup_open');
    clearFormError(config);
}

function closePopup(event) { 
    event.classList.remove('popup_open');
}

//Слушатель добавляется при открытии модального окна и удаляется при его закрытии
function setCloseListener() {
    document.addEventListener('keydown', closePopupEsc);
    //document.addEventListener('mousedown', closeClickingOverlay);
}
function removeCloseListener() {
    document.removeEventListener('keydown', closePopupEsc);
    //document.removeEventListener('mousedown', closeClickingOverlay);
}


//Удаление карточек
function deleteCard(event) {
    const element = event.target.closest('.card');
    element.remove();
}

//Like карточки
function likeCard(event) {
    event.target.classList.toggle('button__like_active');
}

function editFormSubmitHandler (event) {
    event.preventDefault();  
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup(editPopup);
}

//Сборка карточки и установка слушателей
function assembleCard(name, link) {
    const element = templateElements.cloneNode(true);
    const image = element.querySelector('.card__image');
    element.querySelector('.card__title').textContent = name;
    image.src = link;
//Добавляем обработчики событий к каждой карточке
    element.querySelector('.button__delete').addEventListener('click', deleteCard);
    element.querySelector('.button__like').addEventListener('click', likeCard);
    image.addEventListener('click', openImage);
    return element;
}

//Добавление карточки в разметку
function addCard(card) {
    listElements.prepend(card);
}

//Добавляем новые карточки из массива
function addFormSubmitHandler (event) {
    event.preventDefault();
    const name = titleInput.value;
    const link = linkInput.value;
    const card = assembleCard(name, link);
    addCard(card);
    closePopup(addPopup);
}

//Добавляем объекты из массива
function initialRender() {
    initialCards.forEach(item => {
        const card = assembleCard(item.name, item.link);
        addCard(card);
    });
}

//Функция закрытия модалных окон по нажатию Esc
function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpen = document.querySelector('.popup_open');
        if (popupOpen) {
            closePopup(popupOpen);
        }
    }
}

//Функция закрытия модальных окон кликом на оверлей
function closeClickingOverlay(evt) { 
    if (evt.target !== evt.currentTarget) {  
        return  
    } 
    closePopup(evt.target) 
}

editPopup.addEventListener('mousedown', closeClickingOverlay);
addPopup.addEventListener('mousedown', closeClickingOverlay);

//Функция отчистки форм от ошибок при открытии и отключение активности кнопке
const clearFormError = (config) => { 
    const formList = Array.from(document.querySelectorAll(config.formSelector)); 
    formList.forEach((formElement) => { 
        const inputList = Array.from(formElement.querySelectorAll(config.inputSelector)); 
        inputList.forEach((inputElement)=>{ 
            const buttonElement = formElement.querySelector(config.submitButtonSelector); 

            buttonElement.setAttribute('disabled', true); 
            buttonElement.classList.add(config.inactiveButtonClass); 
            hideError(formElement, inputElement, config); 
        }); 
    }); 
}  


//Открываем модальное окно редактирования
editButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
    openPopup(editPopup);
    clearFormError(editPopup);
    setCloseListener(editPopup);
});

//Открываем модальное окно добавления карточки
addButton.addEventListener('click', () => {
    openPopup(addPopup); 
    clearFormError(addPopup);
    setCloseListener(addPopup);
    formAdd.reset();
});

//Открываем попап просмотра фотографии
function openImage(event) {
    const element = event.target.closest('.card');
    imageItem.src = element.querySelector('.card__image').src;
    imageTitle.textContent = element.querySelector('.card__title').textContent;
    openPopup(imagePopup);
    setCloseListener(imagePopup);
}

//Закрываем модальное окно добавления карточки
closeButtonAdd.addEventListener('click', () => {
    closePopup(addPopup);
    removeCloseListener(addPopup);
});

//Закрываем модальное окно редактирования 
closeButtonEdit.addEventListener('click', () => {
    closePopup(editPopup);
    removeCloseListener(editPopup);
});

//Закрываем попап просмотра фотографии
closeImageView.addEventListener('click', () => {
    closePopup(imagePopup);
    removeCloseListener(imagePopup);
});

//Прикрепляем обработчик к форме добавления карточек и форме редактирования
formAdd.addEventListener('submit', addFormSubmitHandler);
formEdit.addEventListener('submit', editFormSubmitHandler);

//Вызов функций
initialRender();
enableValidation(config);