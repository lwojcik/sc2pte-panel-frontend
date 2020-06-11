import React from 'react';
import useTimeout from 'hooks/useTimeout/useTimeout';
import EmptyPlaceholder from 'components/EmptyPlaceholder/EmptyPlaceholder';

const ViewerDataFetchError = () => {
  useTimeout(() => {
    window.location.reload();
  }, 60000);

  return (
    <EmptyPlaceholder>
      <p>Error fetching player data</p>
    </EmptyPlaceholder>
  );
};

export default ViewerDataFetchError;
