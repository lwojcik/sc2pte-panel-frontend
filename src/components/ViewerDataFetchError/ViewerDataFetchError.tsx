import React from 'react';
import useTimeout from 'src/hooks/useTimeout/useTimeout';

const ViewerDataFetchError = () => {
  useTimeout(() => {
    window.location.reload();
  }, 60000);

  return (
    <p>Error fetching data.</p>
  );
};

export default ViewerDataFetchError;
