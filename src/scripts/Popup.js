export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._element = document.querySelector(this._popupSelector);
    }

    setEventListeners() {
        this._element.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        });
    }
    
    open() {
        this._element.classList.add('popup_open');
        this.setEventListeners();
    }

    close() {
        this._element.classList.remove('popup_open');
        this.setEventListeners();
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target !== evt.currentTarget) {
            return
        }
        this.close();
    }
}
