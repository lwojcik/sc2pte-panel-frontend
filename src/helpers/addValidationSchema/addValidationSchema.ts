import { YupInstance } from 'yup';
import StarCraft2API from 'starcraft2-api';
import isProfileListUnique from 'helpers/isProfileListUnique/isProfileListUnique';
import phrases from 'config/phrases';

const addValidationSchema = (yup: YupInstance) => ({
  profiles: yup.array()
    .of(
      yup.string()
        .ensure()
        .min(34, phrases.FORM_VALIDATION_URL_TOO_SHORT)
        .matches(
          StarCraft2API.profileUrlRegex(),
          {
            message: phrases.FORM_VALIDATION_URL_INVALID,
            excludeEmptyString: false,
          },
        )
    )
    .unique(phrases.FORM_VALIDATION_DUPLICATE_URLS, isProfileListUnique),
});

export default addValidationSchema;
