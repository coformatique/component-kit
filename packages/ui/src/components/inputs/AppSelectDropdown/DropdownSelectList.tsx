import { ListItemText } from '@mui/material';
import { ReactNode } from 'react';
import { Loader } from '../../loader/Loader';
import { FreeSoloListItem, ITEM_SIZE, StyledListItem, StyledListItemApplyButton } from './DropdownListItem';
import { InfiniteLoaderWrapper, InfiniteLoaderWrapperProps } from './InfiniteLoaderWrapper';
import { FilterItem } from './types';

export type DropdownSelectListProps = Omit<InfiniteLoaderWrapperProps, 'showDescription'> & {
  selectionError?: (selectedItems: Array<FilterItem>) => ReactNode | void | undefined | false;
};

export const DropdownSelectList = (props: DropdownSelectListProps) => {
  const {
    isNextPageLoading,
    items,
    groups,
    handleToggle,
    searchTerm,
    onApply,
    freeSolo,
    description,
    selectionError,
    selectedItems,
  } = props;
  const selectionErrorNode = selectionError?.(selectedItems);

  return (
    <>
      {description && !selectionErrorNode && <StyledListItem dense>{description}</StyledListItem>}
      {selectionErrorNode && <StyledListItem dense>{selectionErrorNode}</StyledListItem>}
      {!isNextPageLoading && ((items && !items.length) || (groups && groups.every(g => !g.items.length))) && (
        <StyledListItem dense sx={{ mb: 1 }}>
          <ListItemText>No data found</ListItemText>
        </StyledListItem>
      )}
      <InfiniteLoaderWrapper {...props} showDescription={!!(description || selectionErrorNode)} />
      {isNextPageLoading && (
        <StyledListItem dense>
          <Loader height={ITEM_SIZE} />
        </StyledListItem>
      )}
      {freeSolo && searchTerm && <FreeSoloListItem handleToggle={handleToggle} searchTerm={searchTerm} />}
      {onApply && (
        <StyledListItemApplyButton onClick={onApply} disabled={!!selectionErrorNode}>
          Apply
        </StyledListItemApplyButton>
      )}
    </>
  );
};
