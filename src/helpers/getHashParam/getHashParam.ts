const getHashParam = (paramName: string) => {
  const { href } = window.location;
  const params = href.split('?')[1];
  if (params && params !== '') {
    const result = params.split('&').reduce((res, item) => {
      const parts = item.split('=');
      (res as { [key: string]: string })[parts[0]] = parts[1];
      return res;
    }, {}) as { [key: string]: string };
    return result[paramName];
  }
  return "";
}

export default getHashParam;