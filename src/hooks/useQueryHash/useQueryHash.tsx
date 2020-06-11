import { useState, useEffect } from 'react';
import getHashParam from 'helpers/getHashParam/getHashParam';

const useQueryHash = (paramName: string, defaultValue = '') => {
  const [paramValue, setParamValue] = useState({ [paramName]: defaultValue });

  useEffect(() => {
    const value = getHashParam(paramName) || defaultValue;
    setParamValue({ [paramName]: value });
  }, [paramName, defaultValue]);

  return paramValue[paramName];
};

export default useQueryHash;
