import calculatePercentage from './calculatePercentage';

it('should calculate correct percentages', () => {
  expect(calculatePercentage(0,100)).toMatchSnapshot();
  expect(calculatePercentage(1,150)).toMatchSnapshot();

  expect(calculatePercentage(1354,3434)).toMatchSnapshot();
  expect(calculatePercentage(100,200)).toMatchSnapshot();
  expect(calculatePercentage(100,100)).toMatchSnapshot();
});

it('should return zero for non-positive numbers', () => {
  expect(calculatePercentage(-100,-300)).toBe(0);
  expect(calculatePercentage(-10, 0)).toBe(0);
  expect(calculatePercentage(1,-300)).toBe(0);
});
