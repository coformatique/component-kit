import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { AppForm } from '../forms';
import { AppDropdownSelect } from './inputs';

export default {
  title: 'UI/Misc/Popup Indicator',
} as Meta;

const Template: Story = () => {
  return (
    <Box width={300}>
      <AppForm>
        <Box my={1}>
          <AppDropdownSelect
            items={[{ id: 'a', name: 'option' }]}
            inputText=""
            setInputText={() => {}}
            selectedItem={undefined}
            setSelectedItem={() => {}}
            label="Dropdown select"
          />
        </Box>
        <Box my={1}>
          <TextField select label="TextField Select" fullWidth variant="filled">
            <MenuItem>option</MenuItem>
          </TextField>
        </Box>
        <Box my={1}>
          <FormControl fullWidth>
            <InputLabel id="select-label">Select</InputLabel>
            <Select label="Select" labelId="select-label" variant="filled">
              <MenuItem>option</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </AppForm>
    </Box>
  );
};

export const Default = Template.bind({});
Default.storyName = 'Popup Indicator';
