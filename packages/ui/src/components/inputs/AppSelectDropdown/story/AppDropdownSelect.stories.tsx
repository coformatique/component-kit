import { Box, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { useMemo, useState } from 'react';
import { z } from 'zod';
import { DROPDOWN_SELECT_QUERY_LIMIT } from '..';
import { AppForm } from '../../../../forms';
import { useDebouncedSearch } from '../../../../utils';
import {
  AppDropdownMultiselect,
  AppDropdownMultiselectField,
  AppDropdownMultiselectProps,
} from '../AppDropdownMultiselect';
import { AppDropdownSelect, AppDropdownSelectField } from '../AppDropdownSelect';
import { FilterGroup, FilterItem } from '../types';
import { useDropdownSelectPagination } from '../useSelectPagination';
import { useGetCustomerFilters } from './mockApi';

export default {
  title: 'Fields/Dropdown Select',
} as Meta;

type Args = Omit<AppDropdownMultiselectProps, 'type' | 'selectedItems' | 'setSelectedItems'> & {
  type: 'single' | 'multi';
  listType: 'grouped' | 'non-grouped';
  field: boolean;
  bufferBoxes: boolean;
};

const CustomersFilter: Story<Args> = ({ listType, type, label, description, field, bufferBoxes, ...rest }) => {
  const [inputText, setInputText] = useDebouncedSearch();
  const [selectedItems, setSelectedItems] = useState<Array<FilterItem>>([]);
  const [selectedItem, setSelectedItem] = useState<FilterItem>();

  const { data, loading, fetchMore } = useGetCustomerFilters({
    offset: 0,
    limit: DROPDOWN_SELECT_QUERY_LIMIT,
    name: inputText,
  });
  const total = data?.metadata.aggregate?.count;
  const items = data?.results;

  const { hasNextPage, loadNextPage } = useDropdownSelectPagination({ fetchMore, total });

  const groups: FilterGroup[] = useMemo(() => {
    const g: Record<string, Array<FilterItem>> = {};
    items?.forEach(e => {
      const { name } = e;
      const groupName = name[0].toLowerCase();
      if (g[groupName]) g[groupName].push(e);
      else g[groupName] = [e];
    });
    return Object.keys(g).map(name => ({ name, items: g[name] }));
  }, [items]);

  const props = {
    ...rest,
    groups: listType === 'grouped' ? groups ?? [] : undefined,
    items: listType === 'non-grouped' ? items ?? [] : undefined,
    inputText,
    setInputText,
    loadNextPage,
    hasNextPage,
    total,
    isNextPageLoading: loading,
    label: label || 'Customer',
    description: description ? <Typography variant="caption">{description}</Typography> : undefined,
  };

  return (
    <Box>
      {bufferBoxes && <Box height={20} bgcolor="#2b00991a" />}
      {!field ? (
        type === 'multi' ? (
          // @ts-ignore or type
          <AppDropdownMultiselect
            selectionError={items => {
              if (items.length < 2)
                return (
                  <Typography variant="caption" color="text.error">
                    Selected less than 2 items
                  </Typography>
                );
              if (items.length > 10)
                return (
                  <Typography variant="caption" color="text.error">
                    You are currently selecting <b>12 porfolios</b>. Please select no more than <b>10 porfolios</b>.
                  </Typography>
                );
            }}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            {...props}
          />
        ) : (
          // @ts-ignore or type
          <AppDropdownSelect selectedItem={selectedItem} setSelectedItem={setSelectedItem} {...props} />
        )
      ) : (
        // here's how fields could be used
        <AppForm<{ singleselect?: any; multiselect: any[] }>
          formValues={{ multiselect: [] }}
          schema={z.object({
            singleselect: z.object(
              { name: z.string(), id: z.number() },
              { required_error: 'Please select a customer' },
            ),
            multiselect: z.array(z.any()).min(2),
          })}
        >
          {type === 'multi' ? (
            <AppDropdownMultiselectField name="multiselect" {...props} />
          ) : (
            <AppDropdownSelectField name="singleselect" {...props} />
          )}
        </AppForm>
      )}
      {bufferBoxes && <Box height={20} bgcolor="#2b00991a" />}
    </Box>
  );
};

export const Default = CustomersFilter.bind({});
Default.args = {
  type: 'multi',
  listType: 'non-grouped',
  label: undefined,
  fullWidth: true,
  changeOnApply: false,
  freeSolo: false,
  description: 'Select at least 2 portfolios and no more than 10 portfolios',
  field: false,
  disabled: false,
  margin: 'none',
  tooltipText: '',
  variant: 'filled',
  bufferBoxes: false,
};
Default.argTypes = {
  listType: {
    control: 'radio',
    options: ['grouped', 'non-grouped'],
  },
  changeOnApply: { description: 'Only works with mutli select' },
  freeSolo: {
    description: `Adds the ability to add the new option, it'll only appear when you type something in the field.
			Only works with single select`,
  },
  type: {
    control: 'radio',
    options: ['single', 'multi'],
  },
  size: {
    control: 'radio',
    options: ['medium', 'small', 'labelless'],
  },
  field: {
    description: 'Will wrap component with a form and a validation rule: required/2 items at least for multiselect',
  },
  bufferBoxes: {
    description: 'Will put two light purple box on top and bottom of component to highlight margins',
  },
  margin: {
    control: 'radio',
    options: ['normal', 'dense', 'none'],
  },
  variant: {
    control: 'radio',
    options: ['outlined', 'filled', 'standard'],
  },
};
Default.storyName = 'Dropdown Select';
