import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { useRef, useState } from 'react';
import { SearchPanelInput, SearchPanelInputProps } from './SearchPanelInput';

export default {
    title: 'UI/SearchPanelInput',
    component: SearchPanelInput,
} as Meta;

const Template: Story<Partial<SearchPanelInputProps>> = (args) => {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLInputElement>(null);

    return (
        <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center" p={4}>
            <SearchPanelInput
                {...args}
                inputRef={ref}
                value={value}
                onValueChange={setValue}
                setOpen={setOpen}
                open={open}
            />
        </Box>
    );
};

export const Default = Template.bind({});
Default.args = {
    placeholder: '',
};
Default.storyName = 'SearchPanelInput';
