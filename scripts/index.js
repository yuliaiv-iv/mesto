let editButton = document.querySelector('.profile__button-edit');
let closeButton = document.querySelector('.popup__close-icon');
let submitButton = document.querySelector('.popup__button-submit');
let popup = document.querySelector('.popup');


function popupOpen() {
    popup.classList.add('popup_open');
}
function popupClose () {
    popup.classList.remove('popup_open');
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
submitButton.addEventListener('click', popupClose);

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input-name');
let jobInput = formElement.querySelector('.popup__input-about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);


