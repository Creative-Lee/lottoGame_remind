const REQUEST_MSG = {
  moneyAmount: '구입금액을 입력해 주세요.',
  winningNumber: '당첨 번호를 입력해 주세요.',
};

const ERROR_MSG = {
  invalidInputType: '[ERROR] 숫자 외의 문자를 입력하셨습니다.',
  startedZero: '[ERROR] 입력값이 0으로 시작합니다.',
  indivisibleByLottoPrice: '[ERROR] 입력값이 로또 가격으로 나누어 떨어지지 않습니다.',
  invalidLottoNumberLength: '[ERROR] 유효하지 않은 로또 번호 길이입니다.',
  invalidLottoNumberRange: '[ERROR] 유효하지 않은 로또 번호 범위입니다.',
  duplicatedLottoNumber: '[ERROR] 로또 번호에 중복이 있습니다.',
};

module.exports = {
  REQUEST_MSG,
  ERROR_MSG,
};
