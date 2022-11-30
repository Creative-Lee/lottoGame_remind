const LottoGame = require('../src/LottoGame.js');

const lottoGame = new LottoGame();
lottoGame.createLottos([
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
]);
lottoGame.setWinningNumber([4, 5, 6, 7, 8, 9]);
lottoGame.setBonusNumber(10);

describe('LottoGame.getEachCompareResult 메서드 테스트', () => {
  test('각 로또의 번호 일치 개수, 보너스 번호 일치 여부를 객체 배열 형태로 return 해야 한다.', () => {
    const output = lottoGame.getEachCompareResult();

    const compareResult1 = { matchedCount: 3, hasBonusNumber: false };
    const compareResult2 = { matchedCount: 3, hasBonusNumber: true };

    expect(output).toEqual([compareResult1, compareResult2]);
  });
});

describe('LottoGame.getEachLottoPrize 메서드 테스트', () => {
  test('각 로또의 등수 정보 문자열을 배열로 return 해야 한다.', () => {
    const results = lottoGame.getEachCompareResult();

    const output = lottoGame.getEachLottoPrize(results);

    expect(output).toEqual(['fifth', 'fifth']);
  });
});

describe('LottoGame.getPrizeStatistics 메서드 테스트', () => {
  test('로또 등수 정보 통계 객체를 return 해야 한다.', () => {
    const results = lottoGame.getEachCompareResult();
    const eachPrize = lottoGame.getEachLottoPrize(results);

    const output = lottoGame.getPrizeStatistics(eachPrize);

    const statistics = {
      fifth: 2,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };

    expect(output).toEqual(statistics);
  });
});

describe('LottoGame.getTotalPrize 메서드 테스트', () => {
  test('각 로또 당첨금의 합계를 return 해야 한다.', () => {
    const results = lottoGame.getEachCompareResult();
    const eachPrize = lottoGame.getEachLottoPrize(results);

    const output = lottoGame.getTotalPrize(eachPrize);

    expect(output).toEqual(10000);
  });
});

describe('LottoGame.getYiledRatio 메서드 테스트', () => {
  test('수익률을 문자열로 return 해야 한다.', () => {
    const results = lottoGame.getEachCompareResult();
    const eachPrize = lottoGame.getEachLottoPrize(results);
    const totalPrize = lottoGame.getTotalPrize(eachPrize);

    const output = lottoGame.getYiledRatio(totalPrize);

    expect(output).toEqual('500');
  });
});
