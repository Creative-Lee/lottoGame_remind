const { Console } = require('@woowacourse/mission-utils');
const TemplateMaker = require('../utils/TemplateMaker.js');

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

  printPrizeStatistics(prizeStatistics) {
    const templates = TemplateMaker.getStatisticsTemplate(prizeStatistics);

    templates.forEach(Console.print);
  },

  printYiledRatio(yiledRatio) {
    Console.print(`총 수익률은 ${yiledRatio}%입니다.`);
  },
};

module.exports = OutputView;
