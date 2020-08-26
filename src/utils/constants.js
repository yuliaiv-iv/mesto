const editButton = document.querySelector('.profile__button-edit');
const editPopup = '.popup__edit';
const addButton = document.querySelector('.profile__button-add');
const addPopup = '.popup__add';
const formEdit = document.querySelector('.popup__input_container-edit');
const formAdd = document.querySelector('.popup__input_container-add');
const avatarButton = document.querySelector('.profile__button-avatar');
const avatarPopup = '.popup__avatar';
const formAvatar = document.querySelector('.popup__input_container-avatar');
const imagePopup = '.popup__image';
const nameInput = document.querySelector('.popup__item_input-name');
const jobInput = document.querySelector('.popup__item_input-about');
const profileName = '.profile__name';
const profileAbout = '.profile__about';
const profileAvatar = '.profile__image';
const listElements = '.card-container__list';
const deleteCard = '.popup__delete';
const cardTemplateSelector = '.card-template';
const submitCard = document.querySelector('.popup__button-submit-add');
const submitInfo = document.querySelector('.popup__button-submit-edit');
const submitAvatar = document.querySelector('.popup__button-submit-avatar');


export {
    editButton,
    editPopup,
    addButton,
    addPopup,
    avatarButton,
    avatarPopup,
    formEdit,
    formAdd,
    formAvatar,
    imagePopup,
    nameInput,
    jobInput,
    profileName,
    profileAbout,
    profileAvatar,
    listElements,
    deleteCard,
    submitCard,
    submitInfo,
    submitAvatar,
    cardTemplateSelector,
}

export const initialCards = [];

