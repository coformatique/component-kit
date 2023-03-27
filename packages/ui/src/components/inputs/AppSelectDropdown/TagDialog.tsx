import { Box, Chip } from '@mui/material';
import { useState } from 'react';
import { AppDialog } from '../../dialogs';
import { AppPagination } from '../../Pagination';
import { FilterItem } from './types';

type Props = {
  tags: Array<FilterItem>;
  handleToggle: (item: FilterItem) => void;
  name?: string;
  open: boolean;
  onClose: () => void;
};

const pageSize = 20;

export const TagDialog = ({ tags, handleToggle, onClose, open, name }: Props) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(tags.length / pageSize);

  return (
    <AppDialog
      open={open}
      onClose={e => {
        // prevent autocomplete popover list from opening on closing the dialog
        e.stopPropagation();
        onClose();
      }}
      title={`Selected ${name ?? 'items'}`}
      id="selected-tags"
      fullWidth
      maxWidth="sm"
      PaperProps={{
        onClick: e => {
          // prevent autocomplete popover list from opening when clicking on anything inside the paper
          e.stopPropagation();
        },
      }}
    >
      <Box display="flex" gap={1} flexWrap="wrap">
        {tags.slice(page * pageSize, (page + 1) * pageSize).map(item => (
          <Chip
            variant="filled"
            size="medium"
            key={item.id}
            label={item.name}
            onDelete={e => {
              e.stopPropagation();
              handleToggle(item);
            }}
          />
        ))}
      </Box>
      {totalPages > 1 && (
        <Box display="flex" justifyContent="flex-end">
          <AppPagination
            totalCount={tags.length}
            totalPages={totalPages}
            currentPage={page}
            onCurrentPageChange={setPage}
          />
        </Box>
      )}
    </AppDialog>
  );
};
