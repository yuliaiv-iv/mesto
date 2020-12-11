!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n,o;return t=e,(n=[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkStatus)}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkStatus)}},{key:"postNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkStatus)}},{key:"setUserData",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkStatus)}},{key:"setUserAvatarData",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.link})}).then(this._checkStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkStatus)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkStatus)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}}])&&r(t.prototype,n),o&&r(t,o),e}(),i={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__button-submit",inactiveButtonClass:"popup__button-submit_disabled",inputErrorClass:"popup__item_error",errorClass:"popup__item-error_active"};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n,r,o,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._name=t.name,this._link=t.link,this._cardId=t._id,this._ownerId=t.owner._id,this._likes=t.likes,this._userId=n,this._cardSelector=r,this._deleteLike=i,this._addLike=o,this._handleDeleteCard=a,this._handleCardClick=u}var t,n,r;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"deletePhoto",value:function(){this._element.remove(),this._element=null}},{key:"isLiked",value:function(){var e=this;this._likes.some((function(t){return t._id===e._userId}))&&this._element.querySelector(".button__like").classList.add("button__like_active")}},{key:"_handleLike",value:function(){event.target.classList.contains("button__like_active")?(event.target.classList.remove("button__like_active"),this._counter.textContent=this._likes.length-=1,this._deleteLike(this._cardId)):(event.target.classList.add("button__like_active"),this._counter.textContent=this._likes.length+=1,this._addLike(this._cardId))}},{key:"genetareCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".button__delete");this._ownerId===this._userId&&e.classList.add("button_visible"),this.isLiked(),this._counter=this._element.querySelector(".card__like-counter"),this._counter.textContent=this._likes.length;var t=this._element.querySelector(".card__image");return t.src=this._link,t.alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".button__like").addEventListener("click",(function(){e._handleLike()})),this._ownerId===this._userId&&this._element.querySelector(".button__delete").addEventListener("click",(function(){e._handleDeleteCard(e._data)})),this._element.querySelector(".card__image").addEventListener("click",(function(){e._handleCardClick(e._data)}))}}])&&a(t.prototype,n),r&&a(t,r),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n,r;return t=e,(n=[{key:"_showError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._inactiveButtonClass),t.setAttribute("disabled",!0)):(t.classList.remove(this._inactiveButtonClass),t.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._formElement.querySelectorAll(this._inputSelector)),n=this._formElement.querySelector(this._submitButtonSelector);this._toggleButtonState(t,n),t.forEach((function(r){r.addEventListener("input",(function(){e._checkInputValidity(r),e._toggleButtonState(t,n)}))}))}},{key:"clearFormError",value:function(){var e=this,t=Array.from(this._formElement.querySelectorAll(this._inputSelector));t.forEach((function(n){e._hideError(n);var r=e._formElement.querySelector(e._submitButtonSelector);e._toggleButtonState(t,r)}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&c(t.prototype,n),r&&c(t,r),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._element=document.querySelector(n)}var t,n,r;return t=e,(n=[{key:"rendererItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._element.prepend(e)}}])&&l(t.prototype,n),r&&l(t,r),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(t)}var t,n,r;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){var e=this;this._element.classList.add("popup_open"),document.addEventListener("keydown",(function(t){return e._handleEscClose(t)}))}},{key:"close",value:function(){var e=this;this._element.classList.remove("popup_open"),document.removeEventListener("keydown",(function(t){return e._handleEscClose(t)}))}},{key:"setEventListeners",value:function(){var e=this;this._element.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._element.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&h(t.prototype,n),r&&h(t,r),e}();function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,r,o=v(i);function i(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,n))._handleFormSubmit=r,t}return t=i,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._element.querySelectorAll(".popup__item")),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;y(S(i.prototype),"setEventListeners",this).call(this),this._form=this._element.querySelector(".popup__form"),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){y(S(i.prototype),"close",this).call(this),this._form.reset()}}])&&d(t.prototype,n),r&&d(t,r),i}(p);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=n,this._aboutSelector=r,this._avatarSelector=o,this._name=document.querySelector(this._nameSelector),this._about=document.querySelector(this._aboutSelector),this._avatar=document.querySelector(this._avatarSelector)}var t,n,r;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={},this._userInfo.name=this._name.textContent,this._userInfo.about=this._about.textContent,this._userInfo}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar}}])&&g(t.prototype,n),r&&g(t,r),e}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q(e);if(t){var o=q(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(i,e);var t,n,r,o=j(i);function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,e)}return t=i,(n=[{key:"open",value:function(e){C(q(i.prototype),"open",this).call(this);var t=this._element.querySelector(".popup__view"),n=this._element.querySelector(".popup__title");t.src=e.link,n.textContent=e.name,t.alt=e.name}}])&&O(t.prototype,n),r&&O(t,r),i}(p);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t,n){return(U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B(e);if(t){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return A(this,n)}}function A(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(i,e);var t,n,r,o=D(i);function i(e){var t=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,t)}return t=i,(n=[{key:"setEventListeners",value:function(){var e=this;U(B(i.prototype),"setEventListeners",this).call(this),this._form=this._element.querySelector(".popup__form"),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}},{key:"setFormSubmitHandler",value:function(e){this._handleSubmit=e}}])&&T(t.prototype,n),r&&T(t,r),i}(p),V=document.querySelector(".profile__button-edit"),M=document.querySelector(".profile__button-add"),N=document.querySelector(".popup__input_container-edit"),H=document.querySelector(".popup__input_container-add"),J=document.querySelector(".profile__button-avatar"),z=document.querySelector(".popup__input_container-avatar"),$=document.querySelector(".popup__item_input-name"),G=document.querySelector(".popup__item_input-about"),K=document.querySelector(".popup__button-submit-add"),Q=document.querySelector(".popup__button-submit-edit"),W=document.querySelector(".popup__button-submit-avatar");function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z=new o({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"4905795f-d4f5-4259-8ab1-1154380da5eb","Content-Type":"application/json"}}),ee=new s(i,N),te=new s(i,H),ne=new s(i,z),re=new I(".popup__image"),oe=new E({name:".profile__name",about:".profile__about",avatar:".profile__image"}),ie=new F({popupSelector:".popup__delete"}),ae="";Promise.all([Z.getInitialCards(),Z.getUserData()]).then((function(e){var t=X(e,2),n=t[0],r=t[1];ae=r._id,ce.rendererItems(n),oe.setUserInfo(r)})).catch((function(e){console.log(e)}));var ue=function(e){var t=new u(e,ae,".card-template",(function(e){Z.addLike(e).then((function(){console.log("you added like")})).catch((function(e){console.log(e)}))}),(function(e){Z.deleteLike(e).then((function(){console.log("you removed like")})).catch((function(e){console.log(e)}))}),(function(e){ie.setFormSubmitHandler((function(){Z.deleteCard(e._id).then((function(){t.deletePhoto(),ie.close()})).catch((function(e){console.log("".concat(e))}))})),ie.open()}),(function(e){re.open(e)})),n=t.genetareCard();ce.addItem(n)},ce=new f({items:[],renderer:ue},".card-container__list"),se=new k({popupSelector:".popup__add",handleFormSubmit:function(e){pe(!0,K),Z.postNewCard(e).then((function(e){ue(e),se.close(),console.log("the card was uploaded")})).catch((function(e){console.log(e)})).finally((function(){pe(!1,K)}))}}),le=new k({popupSelector:".popup__edit",handleFormSubmit:function(e){pe(!0,Q),Z.setUserData(e).then((function(e){oe.setUserInfo(e),le.close(),console.log("the profile info was updated")})).catch((function(e){console.log(e)})).finally((function(){pe(!1,Q)}))}}),fe=new k({popupSelector:".popup__avatar",handleFormSubmit:function(e){pe(!0,W),Z.setUserAvatarData(e).then((function(e){oe.setUserInfo(e),fe.close()})).catch((function(e){console.log(e)})).finally((function(){pe(!1,W)}))}}),he=function(e){te.clearFormError(e,i),ne.clearFormError(e,i)};function pe(e,t){t.textContent=e?"Сохранение...":"Сохранить"}M.addEventListener("click",(function(){H.reset(),he(".popup__add"),se.open()})),V.addEventListener("click",(function(){var e=oe.getUserInfo();$.value=e.name,G.value=e.about,ee.clearFormError(),le.open()})),J.addEventListener("click",(function(){fe.open(),z.reset(),he(".popup__avatar")})),fe.setEventListeners(),le.setEventListeners(),se.setEventListeners(),re.setEventListeners(),ie.setEventListeners(),ee.enableValidation(),te.enableValidation(),ne.enableValidation()}]);