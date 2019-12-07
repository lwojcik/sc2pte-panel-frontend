import { YupInstance } from 'yup';
import StarCraft2API from 'starcraft2-api';

const addValidationSchema = (yup: YupInstance) => ({
  profiles: yup.array()
    .of(
      yup.string()
        .ensure()
        .min(34, 'too short')
        .matches(StarCraft2API.profileUrlRegex(),
          {
            message: 'invalid SC2 profile',
            excludeEmptyString: false,
          },
        )
    )
    .unique('duplicate phone', (a: string) => a),
});

export default addValidationSchema;
