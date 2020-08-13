import { YupInstance } from 'yup';
import { SchemaType, ValidationMethod } from 'types';

interface addValidationMethodParams {
  validator: YupInstance;
  schemaType: SchemaType;
  name: string;
  method: ValidationMethod;
}

const addValidationMethod = ({
  validator,
  schemaType,
  name,
  method,
}: addValidationMethodParams) => {
  validator.addMethod(validator[schemaType], name, method);
  return validator;
};

export default addValidationMethod;
