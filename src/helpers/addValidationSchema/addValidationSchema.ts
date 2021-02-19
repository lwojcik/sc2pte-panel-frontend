import { YupInstance } from 'yup';
import StarCraft2API from 'starcraft2-api';
import isProfileListUnique from 'helpers/isProfileListUnique/isProfileListUnique';
import { strings } from 'config';

const { config } = strings;

const addValidationSchema = (yup: YupInstance) => ({
  profiles: yup.array()
    .of(
      yup.string()
        .ensure()
        .min(34, config.VALIDATION_URL_TOO_SHORT)
        .matches(
          StarCraft2API.profileUrlRegex(),
          {
            message: config.VALIDATION_URL_INVALID,
            excludeEmptyString: false,
          },
        )
    )
    .unique(config.VALIDATION_DUPLICATE_URLS, isProfileListUnique),
});

export default addValidationSchema;
