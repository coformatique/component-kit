import { useCallback, useEffect, useState } from 'react';

// @dev
// export const QUERY_LIMIT = 50;
export const QUERY_LIMIT = 200;

export const useDropdownSelectPagination = ({
  total,
  fetchMore,
  searchTerm,
}: {
  total: number | undefined;
  fetchMore: Function;
  searchTerm?: string;
}) => {
  const [offset, setOffset] = useState(0);

  const hasNextPage = Boolean(total && offset + QUERY_LIMIT < total);

  useEffect(() => {
    setOffset(0);
  }, [searchTerm]);

  const loadNextPage = useCallback(() => {
    fetchMore({ variables: { offset: offset + QUERY_LIMIT } });
    setOffset(p => p + QUERY_LIMIT);
  }, [fetchMore, offset]);

  return {
    offset,
    setOffset,
    hasNextPage,
    loadNextPage,
  };
};
