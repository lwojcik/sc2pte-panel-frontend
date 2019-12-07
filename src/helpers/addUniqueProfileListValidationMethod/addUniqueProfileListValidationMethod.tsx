import { YupInstance } from 'yup';
import isProfileListUnique from 'src/helpers/isProfileListUnique/isProfileListUnique';
import addValidationMethod from 'src/helpers/addValidationMethod/addValidationMethod';

const addUniqueProfileListValidationMethod = (yupInstance: YupInstance) =>
  addValidationMethod({
    validator: yupInstance,
    schemaType: 'array',
    name: 'unique',
    method: function (message) {
      return this.test('unique', message, (list) => isProfileListUnique(list));
    },
  });

export default addUniqueProfileListValidationMethod;
