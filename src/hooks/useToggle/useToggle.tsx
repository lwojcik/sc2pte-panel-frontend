import { useState } from 'react';

const useToggle = (initialValue: boolean) => {
  const [state, setState] = useState(initialValue);
  return [state, () => setState(!state)] as [boolean, () => void];
};

export default useToggle;
