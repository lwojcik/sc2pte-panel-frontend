import * as Yup from 'yup';
import addUniqueProfileListValidationMethod from './addUniqueProfileListValidationMethod';

jest.mock('src/helpers/isProfileListUnique/isProfileListUnique', () => {
  return jest.fn().mockImplementation(() => true);
});

it('adds validation method correctly', () => {
  const yupInstance = addUniqueProfileListValidationMethod(Yup);
  expect(yupInstance.array()
    .of(
      yupInstance.string()
    )
    // istanbul ignore next
    .unique('duplicate phone', jest.fn().mockImplementation(() => true)), 
  ).toMatchSnapshot();
  // expect(isProfileListUnique).toHaveBeenCalledTimes(1);
});