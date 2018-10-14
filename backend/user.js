class User {
  constructor(name) {
    this._name = name;
    this._list = [];
  }

  setLanguage(language) {
    this.language = language;
  }

  addItem(itemName) {
    this._list.push(itemName);
  }

  getLanguage() {
    return this.language;
  }
}

module.exports = {User};
