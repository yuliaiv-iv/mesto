import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup {
    constructor({ popupSelector }) {
        super(popupSelector);
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._element.querySelector('.popup__form');
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmit();
            this.close();
        });
    }

    setFormSubmitHandler(handle) {
        this._handleSubmit = handle;
    }
}

