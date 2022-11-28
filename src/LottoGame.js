const Lotto = require('./Lotto.js');

class LottoGame {
  #Lottos;

  createLottos(eachLottoNumbers) {
    this.#Lottos = eachLottoNumbers.map((numbers) => new Lotto(numbers));
  }
}

module.exports = LottoGame;
