const InputView = require('./views/InputView.js');
const OutputView = require('./views/OutputView.js');
const Validation = require('./Validation.js');
const LottoGame = require('./LottoGame.js');
const Lotto = require('./Lotto.js');
const { LOTTO } = require('./constants/condition.js');
const lottoNumberGenerator = require('./utils/lottoNumberGenerator.js');

class GameController {
  #lottoGame;

  start() {
    this.#requestMoneyAmount();
  }

  #requestMoneyAmount() {
    InputView.requestMoneyAmount(this.#createLottoPhase.bind(this));
  }

  #createLottoPhase(moneyAmount) {
    Validation.validateMoneyAmount(moneyAmount);

    const lottoQuantity = moneyAmount / LOTTO.price;
    const lottos = Array.from({ length: lottoQuantity }, () => new Lotto(lottoNumberGenerator()));

    this.#lottoGame = new LottoGame(lottos);
    OutputView.printLottoQuantity(lottoQuantity);
  }
}

module.exports = GameController;
