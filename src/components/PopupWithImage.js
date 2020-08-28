import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(data) {
        super.open();
        const imageView = this._element.querySelector('.popup__view');
        const titlePopup = this._element.querySelector('.popup__title');
        imageView.src = data.link;
        titlePopup.textContent = data.name;
        imageView.alt = data.name;

    }
}