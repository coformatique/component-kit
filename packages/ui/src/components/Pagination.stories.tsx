import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { AppPagination, AppPaginationProps } from './Pagination';

export default {
  title: 'UI/AppPagination',
  component: AppPagination,
} as Meta;

const Template: Story<AppPaginationProps & { message: boolean }> = args => {
  const [page, setPage] = useState(0);
  return (
    <Box
      sx={{
        m: 'auto',
        margin: 'auto',
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <AppPagination {...args} currentPage={page} onCurrentPageChange={setPage} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: false,
  totalCount: 100,
  totalPages: 10,
};
Default.storyName = 'AppPagination';
