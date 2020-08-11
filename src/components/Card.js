export class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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

    _setEventListeners() {
        this._element.querySelector('.button__delete').addEventListener('click', (event) => {
            this._handleDeleteCard(event);
        });
        this._element.querySelector('.button__like').addEventListener('click', (event) => {
            this._handleLikeCard(event);
        });
        this._element.querySelector('.card__image').addEventListener('click', () => {
            this._handleCardClick(this._data);
        });
    }
    
    genetareCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.card__image').src = this._link;
        this._element.querySelector('.card__title').textContent = this._name;
        return this._element;
    }
}