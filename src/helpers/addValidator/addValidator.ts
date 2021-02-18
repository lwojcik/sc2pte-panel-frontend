import getValidatorInstance from 'helpers/getValidatorInstance/getValidatorInstance';
import addUniqueProfileListValidationMethod from 'helpers/addUniqueProfileListValidationMethod/addUniqueProfileListValidationMethod';

const addValidator = () => {
  const validatorInstance = getValidatorInstance();
  return addUniqueProfileListValidationMethod(validatorInstance);
};

export default addValidator;
