import { FormikHelpers, FormikValues } from 'formik';
import saveConfigUrl from 'src/helpers/saveConfigUrl/saveConfigUrl';
import unpackProfileUrls from 'src/helpers/unpackProfileUrls/unpackProfileUrls';

export interface ConfigFormValues extends FormikValues {
  profiles: string[];
}
interface ResponseObject {
  status: number,
  message: string,
}

interface FormStatus {
  success: Boolean;
  msg: string;
}

interface ResetFormParams {
  status: FormStatus;
  values: ConfigFormValues;
  actions: FormikHelpers<FormikValues>;
}

const resetFormWithStatus = ({
  status,
  values,
  actions,
}: ResetFormParams) => {
  actions.setSubmitting(false);
  actions.resetForm({ values });
  actions.setStatus(status);
};

const handleSuccess = (values: ConfigFormValues, actions: FormikHelpers<FormikValues>) => {
  resetFormWithStatus({
    status: {
      success: true,
      msg: 'Changes have been saved!'
    },
    values,
    actions,
  });
};

const handleFailure = (values: ConfigFormValues, actions: FormikHelpers<FormikValues>) => {
  resetFormWithStatus({
    status: {
      success: false,
      msg: 'Something went wrong!',
    },
    values,
    actions,
  });
};

const handleResponseObject = (responseObject: ResponseObject, values: ConfigFormValues, actions: FormikHelpers<FormikValues>) => {
  if (responseObject?.status === 200) {
    handleSuccess(values, actions);
  } else {
    handleFailure(values, actions);
  }
};

const submitConfig = (channelId: string, token: string) => {
  const { url, method } = saveConfigUrl(channelId);
  return async (values: ConfigFormValues, actions: FormikHelpers<FormikValues>) => {
    try {
      const sc2ConfigArray = unpackProfileUrls(values.profiles);
      const body = JSON.stringify(sc2ConfigArray);
      const response = await fetch(url, {
        headers: {
          channelId,
          token,
        },
        method,
        body,
      });
      const responseObject = await response.json() as ResponseObject;
      handleResponseObject(responseObject, values, actions);
    } catch (error) {
      handleFailure(values, actions);
    }
  };
};

export default submitConfig;
