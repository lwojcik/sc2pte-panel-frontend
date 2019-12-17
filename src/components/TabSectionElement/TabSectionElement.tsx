import React, { ReactElement } from 'react';

export interface TabSectionElementProps {
  name: string,
  children: ReactElement;
}

const TabSectionElement = ({ name, children }: TabSectionElementProps) => (
  <>
    {{
      name,
      children,
    }}
  </>
);

export default TabSectionElement;