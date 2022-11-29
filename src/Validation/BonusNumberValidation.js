const { ERROR_MSG } = require('../constants/message.js');
const { LOTTO } = require('../constants/condition.js');

class BonusNumberValidation {
  static validateBonusNumber(bonusNumber) {
    if (!this.#isValidBonusNumberRange(bonusNumber)) {
      throw new Error(ERROR_MSG.invalidLottoNumberRange);
    }
  }

  static #isValidBonusNumberRange(input) {
    return LOTTO.numberMinRange <= Number(input) && Number(input) <= LOTTO.numberMaxRange;
  }
}

module.exports = BonusNumberValidation;
