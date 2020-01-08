import sample from 'src/sample/index';
import ViewerPanel from 'src/components/ViewerPanel/ViewerPanel';
import React from 'react';

const Sample = () => (
  <ViewerPanel error={false} data={{ profiles: sample } as any} />
);

export default Sample;
