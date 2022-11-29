const Lotto = require('./Lotto.js');

class LottoGame {
  #Lottos;
  #winningNumber;

  createLottos(eachLottoNumbers) {
    this.#Lottos = eachLottoNumbers.map((numbers) => new Lotto(numbers));
  }

  setWinningNumber(winningNumber) {
    this.#winningNumber = winningNumber;
  }
}

module.exports = LottoGame;
