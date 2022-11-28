const InputView = require('./views/InputView.js');
const Validation = require('./Validation.js');

class GameController {
  start() {
    this.#requestMoneyAmount();
  }

  #requestMoneyAmount() {
    InputView.requestMoneyAmount(this.#createLottoPhase.bind(this));
  }

  #createLottoPhase(moneyAmount) {
    Validation.validateMoneyAmount(moneyAmount);
  }
}

module.exports = GameController;
