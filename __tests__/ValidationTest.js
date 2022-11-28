const Validation = require('../src/Validation.js');
const { ERROR_MSG } = require('../src/constants/message.js');

describe('Validation.validateMoneyAmount 메서드 테스트', () => {
  test('숫자가 아닌 값이 주어지면 Error를 return 해야 한다.', () => {
    const input = 'asd';

    expect(() => {
      Validation.validateMoneyAmount(input);
    }).toThrow(ERROR_MSG.invalidInputType);
  });

  test('0으로 시작하는 입력이 주어지면 Error를 return 해야 한다.', () => {
    const input = '01000';

    expect(() => {
      Validation.validateMoneyAmount(input);
    }).toThrow(ERROR_MSG.startedZero);
  });

  test('로또 가격으로 나누어 떨어지지 않는 입력이 주어지면 Error를 return 해야 한다.', () => {
    const input = '1100';

    expect(() => {
      Validation.validateMoneyAmount(input);
    }).toThrow(ERROR_MSG.indivisibleByLottoPrice);
  });
});
