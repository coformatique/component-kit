import debounce from 'lodash.debounce';
import { useCallback, useState } from 'react';

export const useDebouncedSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _debounceSetSearchValue = useCallback(debounce(setSearchValue, 500), []);

  const debounceSetSearchValue: typeof setSearchValue = useCallback(
    v => {
      _debounceSetSearchValue(v);
      // If the user removes the search string, call the function immediately to reset table
      if (!v.length) _debounceSetSearchValue.flush();
    },
    [_debounceSetSearchValue],
  );

  return [searchValue, debounceSetSearchValue] as const;
};
