import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { FlexibleCollapseContainer } from './FlexibleCollapseContainer';

export default { title: 'UI/Containers/FlexibleCollapseContainer' } as Meta;

const Template: Story<{ items: number }> = ({ items }) => {
    return (
        <Box display="flex">
            <FlexibleCollapseContainer boxProps={{ display: 'flex' }}>
                {(collapse: boolean) => (
                    <Box width={collapse ? 100 : 500} height={100} bgcolor={collapse ? '#f06' : '#0fb'} flexShrink={0}>
                        {collapse ? 'Collapsed' : 'Expanded'}
                    </Box>
                )}
            </FlexibleCollapseContainer>
            {[...Array(Math.max(0, items))].map((_, item) => (
                <Box key={item} border="1px solid black" width={100} height={100} bgcolor="#9ba" flexShrink={0} />
            ))}
        </Box>
    );
};
export const Default = Template.bind({});
Default.args = { items: 4 };
Default.storyName = 'Flexible Collapse Container';
