const { Random } = require('@woowacourse/mission-utils');
const { LOTTO } = require('../constants/condition.js');

const lottoNumberGenerator = () => {
  return Random.pickUniqueNumbersInRange(LOTTO.numberMinRange, LOTTO.numberMaxRange, LOTTO.digits);
};

module.exports = lottoNumberGenerator;
