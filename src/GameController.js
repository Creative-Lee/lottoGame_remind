const InputView = require('./views/InputView.js');

class GameController {
  start() {
    this.#requestMoneyAmount();
  }

  #requestMoneyAmount() {
    InputView.requestMoneyAmount((moneyAmount) => {});
  }
}

module.exports = GameController;
