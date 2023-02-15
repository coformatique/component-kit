import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { ScrollableShadowContainer } from './ScrollableShadowContainer';

export default {
    title: 'UI/Containers/ScrollableShadowContainer',
    component: ScrollableShadowContainer,
} as Meta;

const Template: Story<any> = (args) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <Box height="33%" display="flex" width="100%" bgcolor="#125" flexShrink={0} />
            <ScrollableShadowContainer sx={{ bgcolor: 'white' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum quidem animi, porro nesciunt quis minus,
                unde ratione reiciendis esse soluta? Ex sunt ea, qui sed aperiam fugit aliquam doloremque. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Ab eum quidem animi, porro nesciunt quis minus, unde
                ratione reiciendis esse soluta? Ex sunt ea, qui sed aperiam fugit aliquam doloremque. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ab eum quidem animi, porro nesciunt quis minus, unde ratione
                reiciendis esse soluta? Ex sunt ea, qui sed aperiam fugit aliquam doloremque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ab eum quidem animi, porro nesciunt quis minus, unde ratione reiciendis
                esse soluta? Ex sunt ea, qui sed aperiam fugit aliquam doloremque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ab eum quidem animi, porro nesciunt quis minus, unde ratione reiciendis
                esse soluta? Ex sunt ea, qui sed aperiam fugit aliquam doloremque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ab eum quidem animi, porro nesciunt quis minus, unde ratione reiciendis
                esse soluta? Ex sunt ea, qui sed aperiam fugit aliquam doloremque. minus, unde ratione reiciendis esse
                soluta? Ex sunt ea, qui sed aperiam fugit aliquam doloremque. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ab eum quidem animi, porro nesciunt quis minus, unde ratione reiciendis esse soluta?
                Ex sunt ea, qui sed aperiam fugit aliquam doloremque. minus, unde ratione reiciendis esse soluta? Ex
                sunt ea, qui sed aperiam fugit aliquam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ab eum quidem animi, porro nesciunt quis minus, unde ratione reiciendis esse soluta? Ex sunt ea,
                qui sed aperiam fugit aliquam doloremque. minus, unde ratione reiciendis esse soluta? Ex sunt ea, qui
                sed aperiam fugit aliquam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum
                quidem animi, porro nesciunt quis minus, unde ratione reiciendis esse soluta? Ex sunt ea, qui sed
                aperiam fugit aliquam doloremque.
            </ScrollableShadowContainer>
            <Box height="33%" display="flex" width="100%" bgcolor="#125" flexShrink={0} />
        </Box>
    );
};

export const Default = Template.bind({});
Default.storyName = 'Scrollable Shadow Container';
