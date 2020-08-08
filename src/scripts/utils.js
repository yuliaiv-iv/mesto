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
export const setCloseListener = (popup) => {
    document.addEventListener('keydown', closePopupEsc);
    popup.addEventListener('mousedown', closeClickingOverlay);
}

export const removeCloseListener = (popup) => {
    document.removeEventListener('keydown', closePopupEsc);
    popup.removeEventListener('mousedown', closeClickingOverlay);
}

//функция открытия и закрытия модальных окон
export const openPopup = (popup) => { 
    popup.classList.add('popup_open');
    setCloseListener(popup);
}

export const closePopup = (popup) => { 
    popup.classList.remove('popup_open');
    removeCloseListener(popup);
}
