const { ERROR_MSG } = require('../constants/message.js');
const { LOTTO } = require('../constants/condition.js');

class WinningNumberValidaion {
  static validateWinningNumber(winningNumber) {
    if (!this.#hasOnlyNumber(winningNumber)) {
      throw new Error(ERROR_MSG.invalidInputType);
    }

    if (!this.#isValidLottoNumberLength(winningNumber)) {
      throw new Error(ERROR_MSG.invalidLottoNumberLength);
    }

    if (!this.#isValidLottoNumberRange(winningNumber)) {
      throw new Error(ERROR_MSG.invalidLottoNumberRange);
    }
  }

  static #hasOnlyNumber(input) {
    return input
      .split(',')
      .map((eachLetter) => parseInt(eachLetter))
      .every(Number.isInteger);
  }

  static #isValidLottoNumberLength(input) {
    return input.split(',').length === LOTTO.digits;
  }

  static #isValidLottoNumberRange(input) {
    input
      .split(',')
      .map(Number)
      .every((number) => {
        return LOTTO.numberMinRange <= number && number <= LOTTO.numberMaxRange;
      });
  }
}

module.exports = WinningNumberValidaion;
