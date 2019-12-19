import getValidatorInstance from 'src/helpers/getValidatorInstance/getValidatorInstance';
import addUniqueProfileListValidationMethod from 'src/helpers/addUniqueProfileListValidationMethod/addUniqueProfileListValidationMethod';

const addValidator = () => {
  const validatorInstance = getValidatorInstance();
  return addUniqueProfileListValidationMethod(validatorInstance);
};

export default addValidator;
