import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import memoize from 'lodash.memoize';
import { randomIntLinear } from '../utils/randomIntLinear';
import { HorizontallyScrollableContainer } from './HorizontallyScrollableContainer';

export default { title: 'UI/Containers/HorizontallyScrollableContainer' } as Meta;

const generateRandomColor = memoize((c: number) => `#${randomIntLinear(4096).toString(16).padStart(3, '0')}`);
const generateRandomWidth = memoize(randomIntLinear);

const Template: Story<{ items: number }> = ({ items }) => {
    return (
        <HorizontallyScrollableContainer columnGap={1} display="flex">
            {[...Array(Math.max(0, items))].map((_, item) => (
                <Box
                    key={item}
                    border="1px solid black"
                    width={generateRandomWidth(100 + item, 100)}
                    height={30}
                    bgcolor={generateRandomColor(item)}
                    flexShrink={0}
                />
            ))}
        </HorizontallyScrollableContainer>
    );
};
export const Default = Template.bind({});
Default.args = { items: 4 };
Default.storyName = 'Horizontally Scrollable Container';
