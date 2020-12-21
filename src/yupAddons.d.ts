import * as Yup from 'yup';

declare module 'yup' {
  export interface NotRequiredArraySchema {
    unique(message?: TestOptionsMessage, mapperFn: Function): Yup.Schema<any>;
  }

  export type YupInstance = typeof Yup;
}
