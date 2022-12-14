const InputView = require('./views/InputView.js');
const OutputView = require('./views/OutputView.js');
const MoneyAmountValidation = require('./Validation/MoneyAmountValidation.js');
const WinningNumberValidaion = require('./Validation/WinningNumberValidation.js');
const BonusNumberValidation = require('./Validation/BonusNumberValidation.js');
const LottoGame = require('./LottoGame.js');
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
      this.#lottoGame.setWinningNumber(winningNumber);

      this.#requestBounsNumber(winningNumber);
    });
  }

  #requestBounsNumber(winningNumber) {
    InputView.requestBonusNumber((bonusNumber) => {
      BonusNumberValidation.validateBonusNumber(bonusNumber, winningNumber);

      this.#lottoGame.setBonusNumber(bonusNumber);

      this.#comparePhase();
    });
  }

  #comparePhase() {
    const results = this.#lottoGame.getEachCompareResult();
    const eachPrize = this.#lottoGame.getEachLottoPrize(results);

    this.#statisticsPhase(eachPrize);
  }

  #statisticsPhase(eachPrize) {
    const prizeStatistics = this.#lottoGame.getPrizeStatistics(eachPrize);

    const totalPrize = this.#lottoGame.getTotalPrize(eachPrize);
    const yiledRatio = this.#lottoGame.getYiledRatio(totalPrize);

    OutputView.printPrizeStatistics(prizeStatistics);
    OutputView.printYiledRatio(yiledRatio);
  }
}

module.exports = GameController;
