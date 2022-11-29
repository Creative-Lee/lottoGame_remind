const { ERROR_MSG } = require('../constants/message.js');
const { LOTTO } = require('../constants/condition.js');

class MoneyAmountValidation {
  static validateMoneyAmount(moneyAmount) {
    if (!this.#hasOnlyNumber(moneyAmount)) {
      throw new Error(ERROR_MSG.invalidInputType);
    }

    if (this.#isStartedZero(moneyAmount)) {
      throw new Error(ERROR_MSG.startedZero);
    }

    if (!this.#isDivisibleByLottoPrice(moneyAmount)) {
      throw new Error(ERROR_MSG.indivisibleByLottoPrice);
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

  static #isDivisibleByLottoPrice(input) {
    const remainder = parseInt(input) % LOTTO.price;

    return remainder === 0;
  }
}

module.exports = MoneyAmountValidation;
