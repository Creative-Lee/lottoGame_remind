const LOTTO = {
  price: 1000,
  numberMinRange: 1,
  numberMaxRange: 45,
  digits: 6,
};

const PRIZE = {
  money: {
    fail: 0,
    fifth: 5000,
    fourth: 50000,
    third: 1_500_000,
    second: 30_000_000,
    first: 2_000_000_000,
  },
  matchedCount: {
    fifth: 3,
    fourth: 4,
    third: 5,
    second: 5,
    first: 6,
  },
};

module.exports = {
  LOTTO,
  PRIZE,
};
