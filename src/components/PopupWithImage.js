import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
	constructor(popupSelector, imageSelector, titleSelector) {
        super(popupSelector);
        this._image = this._element.querySelector(imageSelector);
        this._title = this._element.querySelector(titleSelector);
    }

    open(image, title) {
        this._image.src = image;
        this._title.textContent = title;
        super.open();
    }
}