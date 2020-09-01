import { YupInstance, AssertingTestFunction } from 'yup';
import isProfileListUnique from 'helpers/isProfileListUnique/isProfileListUnique';
import addValidationMethod from 'helpers/addValidationMethod/addValidationMethod';
import { ValidationMethod } from 'types';

const addUniqueProfileListValidationMethod = (yupInstance: YupInstance) =>
  addValidationMethod({
    validator: yupInstance,
    schemaType: 'array',
    name: 'unique',
    method: function (message: string) {
      return this.test('unique', message, isProfileListUnique as AssertingTestFunction<boolean>);
    } as ValidationMethod,
  });

export default addUniqueProfileListValidationMethod;
