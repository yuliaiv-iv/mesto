// Объявление переменных
let editButton = document.querySelector('.profile__button-edit');
let closeButton = document.querySelector('.popup__close-icon');
let submitButton = document.querySelector('.popup__button-submit');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__item_input-name');
let jobInput = formElement.querySelector('.popup__item_input-about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');


//Выводим данные пользователя в форму при открытии модального окна 
function popupOpen() {
    popup.classList.add('popup_open');
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
}
//Закрытие модального окна 
function popupClose () {
    popup.classList.remove('popup_open');
}
//Обработчик отправки формы
function formSubmitHandler (evt) {
    evt.preventDefault();  
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    popupClose ();
}

//Прикрепляем обработчик при нажатии на кнопки
editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
//Прикрепляем обработчик к форме
formElement.addEventListener('submit', formSubmitHandler);
