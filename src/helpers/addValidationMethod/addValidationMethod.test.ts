import * as Yup from 'yup';
import addValidationMethod from './addValidationMethod';

it('adds validation method correctly', () => {
  const yupInstance = Yup;
  addValidationMethod({
    validator: yupInstance,
    schemaType: 'string',
    name: 'testMethod',
    method: function(message) {
      return this.test('testMethod', message, (text) => text.length > 0);
    },
  });

  expect(yupInstance).toMatchSnapshot();
});
