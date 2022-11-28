const { Console } = require('@woowacourse/mission-utils');
const { REQUEST_MSG } = require('../constants/message.js');

const InputView = {
  requestMoneyAmount(callback) {
    Console.readLine(REQUEST_MSG.moneyAmount, callback);
  },
};

module.exports = InputView;
