const Lotto = require('./Lotto.js');
const { LOTTO } = require('./constants/condition.js');
const { PRIZE_MONEY } = require('./constants/condition.js');

class LottoGame {
  #Lottos;
  #winningNumber;
  #bonusNumber;

  createLottos(eachLottoNumbers) {
    this.#Lottos = eachLottoNumbers.map((numbers) => new Lotto(numbers));
  }

  setWinningNumber(winningNumber) {
    this.#winningNumber = winningNumber;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  getEachCompareResult() {
    return this.#Lottos.map((lotto) => {
      const matchedCount = lotto.getMatchedLottoNumberCount(this.#winningNumber);
      const hasBonusNumber = lotto.hasBonusNumber(this.#bonusNumber);

      return { matchedCount, hasBonusNumber };
    });
  }

  getEachLottoPrize(results) {
    return results.map(({ matchedCount, hasBonusNumber }) => {
      switch (matchedCount) {
        case 6:
          return 'first';
        case 5: {
          if (hasBonusNumber) return 'second';
          return 'third';
        }
        case 4:
          return 'fourth';
        case 3:
          return 'fifth';
      }

      return 'fail';
    });
  }

  getPrizeStatistics(eachPrize) {
    const statistics = {
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };

    eachPrize.forEach((prize) => (statistics[prize] += 1));

    return statistics;
  }

  getTotalPrize(eachPrize) {
    return eachPrize.reduce((totalPrize, prize) => totalPrize + PRIZE_MONEY[prize], 0);
  }

  getYiledRatio(totalPrize) {
    const moneyAmount = this.#Lottos.length * LOTTO.price;

    return ((moneyAmount / totalPrize) * 100).toFixed(2);
  }
}

module.exports = LottoGame;
