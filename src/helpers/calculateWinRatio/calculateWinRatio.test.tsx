import calculateWinRatio from './calculateWinRatio';

const numbers = [0, 1, 20, 35, 632, 23, 99, 3];

it('should calculate correct win ratios for different number combinations', () => {
  numbers.map(winNumber =>
    numbers.map(lossNumber =>
      expect(calculateWinRatio(winNumber, lossNumber)).toMatchSnapshot()
    ));
});
