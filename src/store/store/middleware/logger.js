// SNA
const logger = param => store => next => action => {
  // eslint-disable-next-line no-console
  console.log('Logging', param.destination);
  return next(action);
};

export default logger;
