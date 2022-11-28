const { Console } = require('@woowacourse/mission-utils');
const { REQUEST_MSG } = require('../constants/message.js');

const InputView = {
  requestMoneyAmount(callback) {
    Console.readLine(REQUEST_MSG.moneyAmount, callback);
  },

  requestWinningNumber(callback) {
    Console.readLine(REQUEST_MSG.winningNumber, callback);
  },
};

module.exports = InputView;
