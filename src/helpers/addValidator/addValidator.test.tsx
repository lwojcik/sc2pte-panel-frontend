import addValidator from './addValidator';
import addUniqueProfileListValidationMethod from '../addUniqueProfileListValidationMethod/addUniqueProfileListValidationMethod';
import * as Yup from 'yup';

it('returns Yup-compatible validator', () => {
  const validator = addValidator();
  expect(validator).toEqual(addUniqueProfileListValidationMethod(Yup));
});

it('returns validator with unique array validation method', () => {
  const validator = addValidator();
  const uniqueMethod = validator.array().of(addValidator().string() as any).unique;
  expect(typeof uniqueMethod).toBe('function');
});
