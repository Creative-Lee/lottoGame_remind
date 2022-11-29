const Lotto = require('./Lotto.js');

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
}

module.exports = LottoGame;
