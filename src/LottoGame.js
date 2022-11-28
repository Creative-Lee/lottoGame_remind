const Lotto = require('./Lotto.j');

class LottoGame {
  #Lottos;

  createLottos(eachLottoNumbers) {
    this.#Lottos = eachLottoNumbers.map((numbers) => new Lotto(numbers));
  }
}

module.exports = LottoGame;
