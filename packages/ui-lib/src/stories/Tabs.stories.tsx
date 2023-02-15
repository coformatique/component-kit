import { TabContext, TabList, TabListProps, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

export default {
    title: 'UI/Tabs',
    component: TabList,
} as Meta;

const variants: Array<TabListProps['variant']> = ['standard', 'scrollable', 'fullWidth', undefined];

const Template: Story<TabListProps & { deletable: boolean; clickable: boolean }> = ({
    deletable,
    clickable,
    ...args
}) => {
    const [tab, setTab] = useState('0');
    const handleChange = (_: ChangeEvent<{}>, newTab: string) => {
        setTab(newTab);
    };

    return (
        <Box sx={{ m: 'auto', flexDirection: 'column', height: '100%' }} className="flexCenter">
            <TabContext value={tab}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" {...args}>
                    <Tab label="Item 1" value="1" />
                    <Tab label="Item 2" value="2" />
                    <Tab label="Item 3" value="3" />
                    <Tab label="Item 4" value="4" />
                    <Tab label="Item 5" value="5" />
                    <Tab label="Item 6" value="6" />
                    <Tab label="Item 7" value="7" />
                    <Tab label="Item 8" value="8" />
                </TabList>

                <TabPanel value="1">Item 1</TabPanel>
                <TabPanel value="2">Item 2</TabPanel>
                <TabPanel value="3">Item 3</TabPanel>
                <TabPanel value="4">Item 4</TabPanel>
                <TabPanel value="5">Item 5</TabPanel>
                <TabPanel value="6">Item 6</TabPanel>
                <TabPanel value="7">Item 7</TabPanel>
                <TabPanel value="8">Item 8</TabPanel>
            </TabContext>
        </Box>
    );
};

export const Default = Template.bind({});
Default.args = {
    variant: 'scrollable',
    orientation: 'horizontal',
};
Default.argTypes = {
    variant: {
        control: 'radio',
        options: variants,
    },

    orientation: {
        control: 'radio',
        options: ['vertical', 'horizontal'],
    },
};
Default.storyName = 'Tabs';
