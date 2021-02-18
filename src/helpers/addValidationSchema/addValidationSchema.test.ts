import addValidator from '../addValidator/addValidator';
import addValidationSchema from './addValidationSchema';

it('returns valid validation schema', () => {
  const validator = addValidator();
  const validationSchema = addValidationSchema(validator);
  expect(validationSchema).toMatchSnapshot();
});
