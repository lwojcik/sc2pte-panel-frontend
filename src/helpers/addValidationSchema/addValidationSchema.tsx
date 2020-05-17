import { YupInstance } from 'yup';
import StarCraft2API from 'starcraft2-api';
import isProfileListUnique from 'helpers/isProfileListUnique/isProfileListUnique';

const addValidationSchema = (yup: YupInstance) => ({
  profiles: yup.array()
    .of(
      yup.string()
        .ensure()
        .min(34, 'enter URL')
        .matches(
          StarCraft2API.profileUrlRegex(),
          {
            message: 'invalid URL',
            excludeEmptyString: false,
          },
        )
    )
    .unique('duplicate phone', isProfileListUnique),
});

export default addValidationSchema;
