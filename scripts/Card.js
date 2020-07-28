import {openPopup} from './utils.js';

export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document 
        .querySelector(this._cardSelector) 
        .content 
        .cloneNode(true);
        return cardElement;
    }

    _handleDeleteCard(event) {
        event.target.closest('.card').remove();
    }

    _handleLikeCard(event) {
        event.target.classList.toggle('button__like_active');
    }

    _handleOpenImageCard(event) {
        const imageItem = document.querySelector('.popup__view');
        const imageTitle = document.querySelector('.popup__title_image');
        const imagePopup = document.querySelector('.popup__image');
        event.target.closest('.card');
        imageItem.src = this._link;
        imageTitle.textContent = this._name;
        openPopup(imagePopup);
    }

    _setEventListeners() {
        this._element.querySelector('.button__delete').addEventListener('click', (event) => {
            this._handleDeleteCard(event);
        });
        this._element.querySelector('.button__like').addEventListener('click', (event) => {
            this._handleLikeCard(event);
        });
        this._element.querySelector('.card__image').addEventListener('click', (event) => {
            this._handleOpenImageCard(event);
        });
    }
    
    genetareCard(){
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.card__image').src = this._link;
        this._element.querySelector('.card__title').textContent = this._name;
        return this._element;
    }
}