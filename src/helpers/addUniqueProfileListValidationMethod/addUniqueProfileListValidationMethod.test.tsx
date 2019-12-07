import * as Yup from 'yup';
import addUniqueProfileListValidationMethod from './addUniqueProfileListValidationMethod';

it('adds validation method correctly', () => {
  const yupInstance = Yup;
  addUniqueProfileListValidationMethod(yupInstance);
  expect(yupInstance).toMatchSnapshot();
});