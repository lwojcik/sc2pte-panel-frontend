import React from 'react';
import EmptyPlaceholder from 'components/EmptyPlaceholder/EmptyPlaceholder';

const ViewerDataFetchError = () => (
  <EmptyPlaceholder fullHeight={true}>
    <p>Error fetching player data</p>
  </EmptyPlaceholder>
);

export default ViewerDataFetchError;
