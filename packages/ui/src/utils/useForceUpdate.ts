import { useCallback, useState } from 'react';

export const useForceUpdate = () => {
  const [, setState] = useState(false);
  return useCallback(() => setState(s => !s), []);
};
