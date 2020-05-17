import stringifyProfiles from 'helpers/stringifyProfiles/stringifyProfiles';
import isStringArrayUnique from 'helpers/isStringArrayUnique/isStringArrayUnique';

const isProfileListUnique = (list: string[]) => {
  const configObjectsWithoutLocale = stringifyProfiles(list, false);
  return isStringArrayUnique(configObjectsWithoutLocale);
};

export default isProfileListUnique;
