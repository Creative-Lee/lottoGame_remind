const { ERROR_MSG } = require('../constants/message.js');
const { LOTTO } = require('../constants/condition.js');

class WinningNumberValidaion {
  static validateWinningNumber(winningNumber) {
    const winningNumberArr = winningNumber.split(',');

    if (!this.#hasOnlyNumber(winningNumberArr)) {
      throw new Error(ERROR_MSG.invalidInputType);
    }

    if (!this.#isValidLottoNumberLength(winningNumberArr)) {
      throw new Error(ERROR_MSG.invalidLottoNumberLength);
    }

    if (!this.#isValidLottoNumberRange(winningNumberArr)) {
      throw new Error(ERROR_MSG.invalidLottoNumberRange);
    }

    if (!this.#hasUniqueLottoNumber(winningNumberArr)) {
      throw new Error(ERROR_MSG.duplicatedLottoNumber);
    }
  }

  static #hasOnlyNumber(input) {
    return input.map((eachLetter) => parseInt(eachLetter)).every(Number.isInteger);
  }

  static #isValidLottoNumberLength(input) {
    return input.length === LOTTO.digits;
  }

  static #isValidLottoNumberRange(input) {
    return input.map(Number).every((number) => {
      return LOTTO.numberMinRange <= number && number <= LOTTO.numberMaxRange;
    });
  }

  static #hasUniqueLottoNumber(input) {
    return new Set(input).size === LOTTO.digits;
  }
}

module.exports = WinningNumberValidaion;
