// Объявление переменных
const popup = document.querySelector('.popup');
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

//функция принимает элемент попапа в качестве аргумента
function togglePopup (popup) {
    popup.classList.toggle('popup_open');
}
//Открываем модальное окно редактирования
editButton.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
    togglePopup(editPopup);
});

//Закрываем модальное окно редактирования 
closeButtonEdit.addEventListener('click', () => togglePopup(editPopup));

//Открываем модальное окно добавления карточки
addButton.addEventListener('click', () => togglePopup(addPopup));

//Закрываем модальное окно добавления карточки
closeButtonAdd.addEventListener('click', () => togglePopup(addPopup));

//Открываем попап просмотра фотографии
function openImage(event) {
    const element = event.target.closest('.card');
    imageItem.src = element.querySelector('.card__image').src;
    imageTitle.textContent = element.querySelector('.card__title').textContent;
    togglePopup(imagePopup);
}

//Закрываем попап просмотра фотографии
closeImageView.addEventListener('click', () => togglePopup(imagePopup));

//Удаление карточек
function deleteCard(event) {
    const element = event.target.closest('.card');
    element.remove();
}
//Like карточки
function likeCard(event) {
    event.target.classList.toggle('button__like_active');
}

//Отправка формы редактирования
function editFormSubmitHandler (evt) {
    evt.preventDefault();  
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    togglePopup(editPopup);
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
function addFormSubmitHandler (evt) {
    evt.preventDefault();
    const name = titleInput.value;
    const link = linkInput.value;
    let card = assembleCard(name, link);
    addCard(card);
    togglePopup(addPopup);
}

//Прикрепляем обработчик к форме добавления карточек
formAdd.addEventListener('submit', addFormSubmitHandler);
//Прикрепляем обработчик к форме редактирования
formEdit.addEventListener('submit', editFormSubmitHandler);

//Добавляем объекты из массива
function initialRender() {
    initialCards.forEach(item => {
        let card = assembleCard(item.name, item.link);
        addCard(card);
    });
}
initialRender();