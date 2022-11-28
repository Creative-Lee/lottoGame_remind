const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printLottoQuantity(quantity) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
  },
};

module.exports = OutputView;
