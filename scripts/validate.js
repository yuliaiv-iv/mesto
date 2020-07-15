//Добавляем класс с ошибкой
const showError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
};

//Скрываем класс с ошибкой
const hideError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
};

//Проверка валидности полей ввода
const checkInputValidity = (formElement, inputElement, config) => {
    if(!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage, config);
    }
    else {
        hideError(formElement, inputElement, config);
    }
};

//Проверка наличия невалидного поля
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

//Функция переключения кнопки
function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

//Добавление обработчиков всем полям формы
function setEventListeners(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
    });
});
}

//Установка слушателей всем формам
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
    });
        setEventListeners(formElement, config);
    });
};
