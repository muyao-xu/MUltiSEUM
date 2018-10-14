class User {
  constructor() {
    this._list = [];
  }

  setName(name) {
    this._name = name;
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

  getList() {
    return this._list;
  }
}

module.exports = {User};
