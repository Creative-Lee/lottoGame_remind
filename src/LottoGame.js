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
}

module.exports = LottoGame;
