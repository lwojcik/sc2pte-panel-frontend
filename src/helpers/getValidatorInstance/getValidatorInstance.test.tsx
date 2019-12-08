import getValidatorInstance from './getValidatorInstance';

it('returns Yup-compatible validator instance', () => {
  expect(getValidatorInstance()).toMatchSnapshot();
});