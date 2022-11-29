const { ERROR_MSG } = require('../constants/message.js');
const { LOTTO } = require('../constants/condition.js');

class BonusNumberValidation {
  static validateBonusNumber(bonusNumber, winningNumber) {
    if (!this.#isValidBonusNumberRange(bonusNumber)) {
      throw new Error(ERROR_MSG.invalidLottoNumberRange);
    }

    if (!this.#isUniqueBonusNumber(bonusNumber, winningNumber)) {
      throw new Error(ERROR_MSG.duplicatedLottoNumber);
    }
  }

  static #isValidBonusNumberRange(input) {
    return LOTTO.numberMinRange <= Number(input) && Number(input) <= LOTTO.numberMaxRange;
  }

  static #isUniqueBonusNumber(bonusNumber, winningNumber) {
    return !winningNumber.split(',').includes(bonusNumber);
  }
}

module.exports = BonusNumberValidation;
