import { CSSProperties, ReactNode, useEffect, useRef } from 'react';
import InfiniteLoader from 'react-window-infinite-loader';
import { CustomFixedSizeList, CustomVariableSizeList } from './DropdownList';
import { FilterGroup, FilterItem, InfiniteLoaderWrapperType } from './types';

export interface InfiniteLoaderWrapperProps {
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  groups?: FilterGroup[];
  items?: FilterItem[];
  loadNextPage?: (startIndex: number, stopIndex: number) => Promise<any> | void;
  selectedItems: Array<FilterItem>;
  handleToggle: (item: FilterItem) => void;
  width?: CSSProperties['width'];
  total?: number;
  searchTerm?: string;
  type?: InfiniteLoaderWrapperType;
  onApply?: (() => void) | false;
  freeSolo?: boolean;
  description?: ReactNode;
  showDescription: boolean;
}

export const InfiniteLoaderWrapper = ({
  groups,
  loadNextPage,
  isNextPageLoading,
  hasNextPage,
  items,
  selectedItems,
  handleToggle,
  total,
  width,
  onApply,
  freeSolo,
  type = InfiniteLoaderWrapperType.Multi,
  searchTerm,
  description,
  showDescription,
}: InfiniteLoaderWrapperProps) => {
  const listRef = useRef<any>(null);

  useEffect(() => {
    if (listRef.current && groups) {
      // this refreshes the list component and recomputes item heights
      // so whenever "groups" changes, i.e. when the component fetches more data, we reset the list
      listRef.current._listRef.resetAfterIndex?.(0);
    }
  }, [groups]);

  const loadMoreItems: typeof loadNextPage = (...args) => {
    if (isNextPageLoading) return;
    loadNextPage?.(...args);
  };
  const isItemLoaded = (index: number) => {
    return !hasNextPage || index < (groups || items)!.length;
  };
  return (
    <InfiniteLoader ref={listRef} isItemLoaded={isItemLoaded} itemCount={total ?? 0} loadMoreItems={loadMoreItems}>
      {({ onItemsRendered, ref }) => {
        const props = {
          selectedItems,
          handleToggle,
          listRef: ref,
          onItemsRendered,
          isNextPageLoading,
          width,
          onApply,
          freeSolo,
          type,
          searchTerm,
          description,
          showDescription,
        };
        return groups ? (
          <CustomVariableSizeList groups={groups.filter(g => g.items.length)} {...props} />
        ) : items ? (
          <CustomFixedSizeList items={items} {...props} />
        ) : null;
      }}
    </InfiniteLoader>
  );
};
