import { YupInstance, Schema } from 'yup';

type SchemaType =
  'mixed'
  | 'string'
  | 'number'
  | 'boolean'
  | 'bool'
  | 'date'
  | 'array'
  | 'object'; 

interface addValidationMethodParams {
  validator: YupInstance;
  schemaType: SchemaType;
  name: string;
  method: (this: Schema<unknown>, message: string, testFn: (testedValues: unknown) => boolean)
    => Schema<unknown>;
}

const addValidationMethod = ({
  validator,
  schemaType,
  name,
  method,
}: addValidationMethodParams) => {
  validator.addMethod(validator[schemaType], name, method);
  return validator;
}

export default addValidationMethod;