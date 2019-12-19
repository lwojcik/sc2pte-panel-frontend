import useQuerySearch from 'src/hooks/useQuerySearch/useQuerySearch';
import useQueryHash from 'src/hooks/useQueryHash/useQueryHash';

const useLanguage = (defaultLanguage = '') => {
  const language = useQuerySearch('language', defaultLanguage);
  const languageFromQueryHash = useQueryHash('language', defaultLanguage);

  return (language.length > 0 && language !== defaultLanguage)
    ? language
    : languageFromQueryHash;
};

export default useLanguage;
