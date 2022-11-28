const { ERROR_MSG } = require('./constants/message.js');

class Validation {
  static validateMoneyAmount(moneyAmount) {
    if (!this.#hasOnlyNumber(moneyAmount)) {
      throw new Error(ERROR_MSG.invalidInputType);
    }

    if (!this.#isStartedZero(moneyAmount)) {
      throw new Error(ERROR_MSG.startedZero);
    }
  }

  static #hasOnlyNumber(input) {
    return input
      .split('')
      .map((eachLetter) => parseInt(eachLetter))
      .every(Number.isInteger);
  }

  static #isStartedZero(input) {
    return input.startsWith('0');
  }
}

module.exports = Validation;
