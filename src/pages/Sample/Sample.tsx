import sample from 'sample/index';
import ViewerPanel from 'components/ViewerPanel/ViewerPanel';
import React from 'react';

const Sample = () => (
  <ViewerPanel
    error={false}
    data={{ profiles: sample } as any}
  />
);

export default Sample;
