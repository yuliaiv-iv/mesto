import '../pages/index.css';

import { Api } from '../components/Api.js';
import { validationConfig } from '../utils/config.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js'
import {
    initialCards,
    editButton,
    editPopup,
    avatarButton,
    addButton,
    addPopup,
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
    cardTemplateSelector
} from '../utils/constants';

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
    headers: {
        authorization: '4905795f-d4f5-4259-8ab1-1154380da5eb',
        'Content-Type': 'application/json'
    }
});
//Создадим экземпляры//
const profileValidator = new FormValidator(validationConfig, formEdit);
const cardValidator = new FormValidator(validationConfig, formAdd);
const avatarValidator = new FormValidator(validationConfig, formAvatar);
const popupImage = new PopupWithImage(imagePopup);
const userProfile = new UserInfo({ name: profileName, about: profileAbout, avatar: profileAvatar });
const deleteCardPopup = new PopupWithConfirm({ popupSelector: deleteCard });
let userId = '';

Promise.all([api.getInitialCards(), api.getUserData()])
    .then((result) => {
        const [items, userInfo] = result;
        userId = userInfo._id;
        cardList.rendererItems(items);
        userProfile.setUserInfo(userInfo);
    })
    .catch((err) => {
        console.log(err);
    });

// Создаем карточку    
const renderer = (item) => {
    const card = new Card(item, userId, cardTemplateSelector, addLike, deleteLike, handleDelete, handleCardClick);
    const cardElement = card.genetareCard();
    cardList.addItem(cardElement);
    //Отврываем просмотр картинок
    function handleCardClick(data) {
        popupImage.open(data);
    }
    //функция удаления карточки
    function handleDelete(item) {
        deleteCardPopup.setFormSubmitHandler(() => {
            api.deleteCard(item._id)
                .then(() => {
                    card.deletePhoto();
                    deleteCardPopup.close();
                })
                .catch((err) => {
                    console.log(`${err}`)
                });
        })
        deleteCardPopup.open();
    }
    //Добавить лайк
    function addLike(cardId) {
        api.addLike(cardId)
            .then(() => {
                console.log('you added like')
            })
            .catch((err) => {
                console.log(err);
            });
    }
    //Удаляем лайк
    function deleteLike(cardId) {
        api.deleteLike(cardId)
            .then(() => {
                console.log('you removed like')
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

//Добавить карточки в разметку
const cardList = new Section({
    items: initialCards,
    renderer
},
    listElements
);

//Добавляем новую карточку на сервер
const addCardPopup = new PopupWithForm({
    popupSelector: addPopup,
    handleFormSubmit: (item) => {
        renderLoading(true, submitCard);
        api.postNewCard(item)
            .then((item) => {
                renderer(item);
                addCardPopup.close();
                console.log('the card was uploaded')
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                renderLoading(false, submitCard);
            });
    }
});

//Обновление данных профиля на странице
const profilePopup = new PopupWithForm({
    popupSelector: editPopup,
    handleFormSubmit: (item) => {
        renderLoading(true, submitInfo);
        api.setUserData(item)
            .then((item) => {
                userProfile.setUserInfo(item);
                profilePopup.close();
                console.log('the profile info wad updated')
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                renderLoading(false, submitInfo);
            });
    }
});

//Обновление профайл фото
const addAvatarPopup = new PopupWithForm({
    popupSelector: avatarPopup,
    handleFormSubmit: (item) => {
        renderLoading(true, submitAvatar);
        api.setUserAvatarData(item)
            .then((item) => {
                userProfile.setUserInfo(item);
                addAvatarPopup.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                renderLoading(false, submitAvatar);
            });
    }
});

//Отчищение полей формы addcard и отключение активности кнопке
const removeFormErrors = (formElement) => {
    cardValidator.clearFormError(formElement, validationConfig);
    avatarValidator.clearFormError(formElement, validationConfig);
}

//Открываем модальное окно добавления карточки
addButton.addEventListener('click', () => {
    formAdd.reset();
    removeFormErrors(addPopup);
    addCardPopup.open();
});

//Открываем модальное окно профиля
editButton.addEventListener('click', () => {
    const user = userProfile.getUserInfo();
    nameInput.value = user.name;
    jobInput.value = user.about;
    profileValidator.clearFormError();
    profilePopup.open();
});

//Открываем модальное окно аватарки
avatarButton.addEventListener('click', () => {
    addAvatarPopup.open();
    formAvatar.reset();
    removeFormErrors(avatarPopup);
});

//функция изменения кнопки при ожидании загрузки на сервер
function renderLoading(isLoading, button) {
    if (isLoading) {
        button.textContent = "Сохранение...";
    } else {
        button.textContent = "Сохранить";
    }
}

//Установка слушателей
addAvatarPopup.setEventListeners();
profilePopup.setEventListeners();
addCardPopup.setEventListeners();
popupImage.setEventListeners();
deleteCardPopup.setEventListeners();

//Вызов функций валидации форм
profileValidator.enableValidation();
cardValidator.enableValidation();
avatarValidator.enableValidation();



