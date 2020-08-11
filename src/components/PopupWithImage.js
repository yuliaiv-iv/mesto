import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector, link, name) {
        super(popupSelector);
        this._image = link;
        this._title = name;
    }

    open(data) {
        super.open();
        const imageView = this._element.querySelector('.popup__view');
        const titlePopup = this._element.querySelector('.popup__title');
        imageView.src = data.link;
        titlePopup.textContent = data.name;
    }
}
