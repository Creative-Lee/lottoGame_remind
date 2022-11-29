const InputView = require('./views/InputView.js');
const OutputView = require('./views/OutputView.js');
const MoneyAmountValidation = require('./Validation/MoneyAmountValidation.js');
const WinningNumberValidaion = require('./Validation/WinningNumberValidation.js');
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
    MoneyAmountValidation.validateMoneyAmount(moneyAmount);

    const lottoQuantity = moneyAmount / LOTTO.price;
    const eachLottoNumbers = Array.from({ length: lottoQuantity }, lottoNumberGenerator);
    this.#lottoGame.createLottos(eachLottoNumbers);

    OutputView.printLottoQuantity(lottoQuantity);
    OutputView.printEachLottoNumbers(eachLottoNumbers);

    this.#requestWinningNumber();
  }

  #requestWinningNumber() {
    InputView.requestWinningNumber((winningNumber) => {
      WinningNumberValidaion.validateWinningNumber(winningNumber);
    });
  }
}

module.exports = GameController;
