class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getMatchedLottoNumberCount(winningNumber) {
    return this.#numbers.filter((number) => winningNumber.includes(number)).length;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(Number(bonusNumber));
  }
}

module.exports = Lotto;
