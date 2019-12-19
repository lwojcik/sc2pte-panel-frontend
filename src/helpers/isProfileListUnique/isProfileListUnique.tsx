import stringifyProfiles from 'src/helpers/stringifyProfiles/stringifyProfiles';
import isStringArrayUnique from 'src/helpers/isStringArrayUnique/isStringArrayUnique';

const isProfileListUnique = (list: string[]) => {
  const configObjectsWithoutLocale = stringifyProfiles(list, false);
  return isStringArrayUnique(configObjectsWithoutLocale);
};

export default isProfileListUnique;
