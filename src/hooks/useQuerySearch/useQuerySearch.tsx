import { useState, useEffect } from 'react';
import * as qs from 'query-string';

const useQuerySearch = (paramName: string, defaultValue = '') => {
  const [paramValue, setParamValue] = useState({ [paramName]: defaultValue });
  
  useEffect(() => {
    const value = qs.parse(window.location.search)[paramName] as string || defaultValue;
    setParamValue({ [paramName]: value });
  }, [paramName, defaultValue]);

  return paramValue[paramName];
}

export default useQuerySearch;