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


//Удаление карточек
const deleteCard = (event) => {
    const element = event.target.closest('.card');
    element.remove();
}

//Like карточки
const likeCard = (event) => {
    event.target.classList.toggle('button__like_active');
}

//Добавление карточки в разметку
const addCard = (card) => {
    listElements.prepend(card);
}

//Функция закрытия модалных окон по нажатию Esc
const closePopupEsc = (evt) => {
    if (evt.key === 'Escape') {
        const popupOpen = document.querySelector('.popup_open');
        if (popupOpen) {
            closePopup(popupOpen);
        }
    }
}

//Функция закрытия модальных окон кликом на оверлей
const closeClickingOverlay = (evt) => { 
    if (evt.target !== evt.currentTarget) {
        return
    }
    closePopup(evt.target);
}

//Слушатель добавляется при открытии модального окна и удаляется при его закрытии
const setCloseListener = (popup) => {
    document.addEventListener('keydown', closePopupEsc);
    popup.addEventListener('mousedown', closeClickingOverlay);
}
const removeCloseListener = (popup) => {
    document.removeEventListener('keydown', closePopupEsc);
    popup.removeEventListener('mousedown', closeClickingOverlay);
}

//функция открытия и закрытия модальных окон
const openPopup = (popup) => { 
    popup.classList.add('popup_open');
    setCloseListener(popup);
}

const closePopup = (popup) => { 
    popup.classList.remove('popup_open');
    removeCloseListener(popup);
}

//Открываем попап просмотра фотографии
const openImage = (event) => {
    const element = event.target.closest('.card');
    imageItem.src = element.querySelector('.card__image').src;
    imageTitle.textContent = element.querySelector('.card__title').textContent;
    openPopup(imagePopup);
}

//Сборка карточки и установка слушателей
const assembleCard = (name, link) => {
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

//Функция отчистки форм от ошибок при открытии и отключение активности кнопке
const clearFormError = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    inputList.forEach((inputElement) => {
        hideError(formElement, inputElement, config);
        const buttonElement = formElement.querySelector(config.submitButtonSelector);
        toggleButtonState(inputList, buttonElement, config);
    });
}

//Добавляем новые карточки из массива
const addFormSubmitHandler = (event) => {
    event.preventDefault();
    const name = titleInput.value;
    const link = linkInput.value;
    const card = assembleCard(name, link);
    addCard(card);
    closePopup(addPopup);
}

//Сохранение имя и профессии
const editFormSubmitHandler = (event) => {
    event.preventDefault();  
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup(editPopup);
}

//Добавляем объекты из массива
const initialRender = () => {
    initialCards.forEach(item => {
        const card = assembleCard(item.name, item.link);
        addCard(card);
    });
}

const clearInputError = (formElement) => {
    formAdd.reset();
    clearFormError(formElement, config);
}

//Открываем модальное окно редактирования
editButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
    clearInputError(editPopup);
    openPopup(editPopup);
});


//Открываем модальное окно добавления карточки
addButton.addEventListener('click', () => {
    clearInputError(addPopup);
    openPopup(addPopup); 
});


//Закрываем модальное окно добавления карточки
closeButtonAdd.addEventListener('click', () => {
    closePopup(addPopup);
});

//Закрываем модальное окно редактирования 
closeButtonEdit.addEventListener('click', () => {
    closePopup(editPopup);
});

//Закрываем попап просмотра фотографии
closeImageView.addEventListener('click', () => {
    closePopup(imagePopup);
});

//Прикрепляем обработчик к форме добавления карточек и форме редактирования
formAdd.addEventListener('submit', addFormSubmitHandler);
formEdit.addEventListener('submit', editFormSubmitHandler);

//Вызов функций
initialRender();
enableValidation(config);