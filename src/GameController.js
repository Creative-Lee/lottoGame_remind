const InputView = require('./views/InputView.js');
const OutputView = require('./views/OutputView.js');
const Validation = require('./Validation.js');
const LottoGame = require('./LottoGame.js');
const Lotto = require('./Lotto.js');
const { LOTTO } = require('./constants/condition.js');
const lottoNumberGenerator = require('./utils/lottoNumberGenerator.js');

class GameController {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  start() {
    this.#requestMoneyAmount();
  }

  #requestMoneyAmount() {
    InputView.requestMoneyAmount(this.#createLottoPhase.bind(this));
  }

  #createLottoPhase(moneyAmount) {
    Validation.validateMoneyAmount(moneyAmount);

    const lottoQuantity = moneyAmount / LOTTO.price;
    const eachLottoNumbers = Array.from({ length: lottoQuantity }, lottoNumberGenerator);
    this.#lottoGame.createLottos(eachLottoNumbers);

    OutputView.printLottoQuantity(lottoQuantity);
    OutputView.printEachLottoNumbers(eachLottoNumbers);

    this.#requestWinningNumber();
  }

  #requestWinningNumber() {
    InputView.requestWinningNumber((winningNumber) => {});
  }
}

module.exports = GameController;
