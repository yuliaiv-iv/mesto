import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        //this._element = document.querySelector(popupSelector);
        //this._inputList = Array.from(this._element.querySelectorAll('.popup__item'));
    }

    _getInputValues() {
        this._inputList = Array.from(this._element.querySelectorAll('.popup__item'));
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._element.querySelector('.popup__form');
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }
    
    close() {
        super.close();
        this._form.reset();
    }
}
