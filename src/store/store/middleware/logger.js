// SNA
const logger = param => store => next => action => {
  console.log("Logging", param.destination);
  return next(action);
}

export default logger;
