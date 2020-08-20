export default class UserInfo {
    constructor({ name, about, avatar }) {
        this._name = name;
        this._about = about;
        this._avatar = avatar;
    }

    getUserInfo() {
        this._userInfo = {
            name: this._name.textContent,
            about: this._about.textContent
        };
        return this._userInfo;
    }

    setUserInfo(nameInput, aboutInput) {
        this._name.textContent = nameInput.value;
        this._about.textContent = aboutInput.value;
    }

    setUserAvatar(user) {
        this._avatar.src = user.value;
    }
}
