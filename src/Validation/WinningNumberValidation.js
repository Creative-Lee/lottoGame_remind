const { ERROR_MSG } = require('../constants/message.js');

class WinningNumberValidaion {
  static validateWinningNumber(winningNumber) {
    if (this.#hasOnlyNumber(winningNumber)) {
      throw new Error(ERROR_MSG.invalidInputType);
    }
  }

  static #hasOnlyNumber(input) {
    return input
      .split(',')
      .map((eachLetter) => parseInt(eachLetter))
      .every(Number.isInteger);
  }
}

module.exports = WinningNumberValidaion;
