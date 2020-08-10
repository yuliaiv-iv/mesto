export class Popup {
    constructor(popupSelector) {
        //this._popupSelector = popupSelector;
        this._element = document.querySelector(popupSelector);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close()
        }
    }

    open() {
        this._element.classList.add('popup_open');
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    }

    close() {
        this._element.classList.remove('popup_open');
        document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
    }

    setEventListeners() {
        this._element.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        })
        this._element.addEventListener('mousedown', (evt) => {
            if (evt.target !== evt.currentTarget) {
                return
            }
            this.close();
        })
    }
}
