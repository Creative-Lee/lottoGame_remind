const { PRIZE } = require('../constants/condition.js');
const PRIZES = ['fifth', 'fourth', 'third', 'second', 'first'];

const TemplateMaker = {
  getStatisticsTemplate(statistics) {
    const template = PRIZES.map((prize) => {
      if (prize === 'second') return TemplateMaker.secondPrizeTemplate(statistics);

      return (
        `${PRIZE.matchedCount[prize]}개 일치 ` +
        `(${PRIZE.money[prize].toLocaleString()}원) - ${statistics[prize]}개`
      );
    });

    return template;
  },

  secondPrizeTemplate(statistics) {
    return (
      `${PRIZE.matchedCount.second}개 일치, 보너스 볼 일치 ` +
      `(${PRIZE.money.second.toLocaleString()}원) - ${statistics.second}개`
    );
  },
};

module.exports = TemplateMaker;
