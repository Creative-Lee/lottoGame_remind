const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printLottoQuantity(quantity) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
  },

  printEachLottoNumbers(eachlottoNumbers) {
    eachlottoNumbers.forEach((lottoNumbers) => {
      const sortedNumbers = lottoNumbers.sort((numA, numB) => numA - numB);
      const joinedNumbers = sortedNumbers.join(', ');

      Console.print(`[${joinedNumbers}]`);
    });
  },
};

module.exports = OutputView;
