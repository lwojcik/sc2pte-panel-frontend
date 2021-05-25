import { YupInstance } from 'yup';
import { StarCraft2API } from 'starcraft2-api';
import isProfileListUnique from 'helpers/isProfileListUnique/isProfileListUnique';

const addValidationSchema = (yup: YupInstance) => ({
  profiles: yup.array()
    .of(
      yup.string()
        .ensure()
        .min(34, 'Please provide correct StarCraft II profile URL.')
        .matches(
          StarCraft2API.profileUrlRegex(),
          {
            message: 'Profile URL is invalid.',
            excludeEmptyString: false,
          },
        )
    )
    .unique('Duplicate profiles detected. Please review your configuration before saving.', isProfileListUnique),
});

export default addValidationSchema;
