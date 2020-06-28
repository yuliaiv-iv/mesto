// Объявление переменных
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__button-edit');
let editPopup = document.querySelector('.popup__edit');
let submitButton = document.querySelector('.popup__button-submit');
let formEdit = document.querySelector('.popup__input_container-edit');
let formAdd = document.querySelector('.popup__input_container-add');
let nameInput = formEdit.querySelector('.popup__item_input-name');
let jobInput = formEdit.querySelector('.popup__item_input-about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

//функция принимает элемент попапа в качестве аргумента
function togglePopup (popup) {
    popup.classList.toggle('popup_open');
}

//Открываем попап редактирования
editButton.addEventListener('click', function () {
    togglePopup(editPopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
});

//Открываем попап добавления карточки
let addButton = document.querySelector('.profile__button-add');
let addPopup = document.querySelector('.popup__add');
addButton.addEventListener('click', function () {
    togglePopup(addPopup);
});




//Закрываем модальное окно редактирования 
let closeButtonEdit = document.querySelector('.popup__close_edit');
closeButtonEdit.addEventListener('click', function () {
    togglePopup(editPopup);
});
//Закрываем модальное окно добавления карточки
let closeButtonAdd = document.querySelector('.popup__close_add');
closeButtonAdd.addEventListener('click', function () {
    togglePopup(addPopup);
});

//Обработчик отправки формы
function editFormSubmitHandler (evt) {
    evt.preventDefault();  
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    togglePopup(editPopup);
}
//Прикрепляем обработчик к форме
formEdit.addEventListener('submit', editFormSubmitHandler);




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

const templateElements = document.querySelector('.elements-template').content;
const listElements = document.querySelector('.elements__list');

function addCard(name, link) {
    const element = templateElements.cloneNode(true);
    element.querySelector('.elements__title').textContent = name;
    element.querySelector('.elements__image').src = link;

    element.querySelector('.button__delete').addEventListener('click', deleteCard);
    element.querySelector('.button__like').addEventListener('click', likeCard);
    element.querySelector('.elements__image').addEventListener('click', openImage);

    listElements.prepend(element);
}

initialCards.forEach(function(item) {
    addCard(item.name, item.link);
});


function addFormSubmitHandler (evt) {
    evt.preventDefault();  
    let titleInput = document.querySelector('.popup__item_input-title');
    let linkInput = document.querySelector('.popup__item_input-link');
    const name = titleInput.value;
    const link = linkInput.value;
    titleInput = '';
    linkInput = '';

    addCard(name, link);
    togglePopup(addPopup);
}

formAdd.addEventListener('submit', addFormSubmitHandler);


function deleteCard(event) {
    const element = event.target.closest('.elements__item');
    element.remove();
}


function likeCard(event) {
    event.target.classList.toggle('button__like_active');
}

let imageItem = document.querySelector('.popup__view');
let imageTitle = document.querySelector('.popup__title_image');


//Закрываем попап просмотра фотографии
let imagePopup = document.querySelector('.popup__image');
let closeImageView = document.querySelector('.popup__close_image');
closeImageView.addEventListener('click', function () {
    togglePopup(imagePopup);
});


function openImage(event) {
    const element = event.target.closest('.elements__item');
    imageItem.src = element.querySelector('.elements__image').src;
    imageTitle.textContent = element.querySelector('.elements__title').textContent;
    togglePopup(imagePopup);
}