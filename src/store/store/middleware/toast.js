const toast = store => next => action => {
  if (action.type === 'error') {
    // eslint-disable-next-line no-console
    console.log('Toastify', action.payload.message);
  } else {
    return next(action);
  }
};

export default toast;
