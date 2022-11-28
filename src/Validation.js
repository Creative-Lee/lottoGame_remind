const { ERROR_MSG } = require('./constants/message.js');

class Validation {
  static validateMoneyAmount(moneyAmount) {
    if (!this.#hasOnlyNumber(moneyAmount)) {
      throw new Error(ERROR_MSG.invalidInputType);
    }
  }

  static #hasOnlyNumber(input) {
    input
      .split('')
      .map((eachLetter) => parseInt(eachLetter))
      .every(Number.isInteger);
  }
}

module.exports = Validation;
