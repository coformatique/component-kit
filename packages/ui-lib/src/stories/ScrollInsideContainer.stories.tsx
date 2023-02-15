import { Box, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';

export default {
    title: 'UI/Containers/Scroll Inside Container',
} as Meta;

const Template: Story = (args) => (
    // <Box display="flex" flexDirection="column" height="100%">
    // 	<Box height={args.firstBoxHeight} width="100%" bgcolor="#655272" />
    // 	<Box display="flex" flex="1">
    // 		<Box height={150} width={200} flexShrink={0} bgcolor="#66809a" />
    // 		<Box sx={{ display: 'flex', flexDirection: 'column' }}>
    // 			<Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto', height: 0 }}>
    // 				<Box sx={{ flex: '0 0 auto', bgcolor: '#c0e0ff', height: 100 }} />
    // 				<Box sx={{ flex: '1 1 auto', bgcolor: '#ddd', overflow: 'auto' }}>
    // 					{[...Array(args.repeat)].map((_, i) => (
    // 						<Typography key={i}>
    // 							Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quam consequuntur aperiam quo
    // 							quis officia voluptatem culpa temporibus, tenetur aspernatur commodi harum eaque quidem, voluptates ea!
    // 							Impedit eligendi officiis quia?
    // 						</Typography>
    // 					))}
    // 				</Box>
    // 			</Box>
    // 		</Box>
    // 	</Box>
    // </Box>
    <Box
        display="grid"
        gridTemplateAreas={`
			"A A"
			"B C"
			"B D"
		`}
        height="100%"
        gridTemplateRows={`${args.firstBoxHeight}px 100px auto`}
    >
        <Box height={args.firstBoxHeight} bgcolor="#655272" gridArea="A" />
        <Box height={150} width={200} bgcolor="#66809a" gridArea="B" />
        <Box sx={{ bgcolor: '#c0e0ff', height: 100 }} gridArea="C" />
        <Box sx={{ bgcolor: '#ddd', overflow: 'auto' }} gridArea="D">
            {[...Array(args.repeat)].map((_, i) => (
                <Typography key={i}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quam consequuntur aperiam
                    quo quis officia voluptatem culpa temporibus, tenetur aspernatur commodi harum eaque quidem,
                    voluptates ea! Impedit eligendi officiis quia?
                </Typography>
            ))}
        </Box>
    </Box>
);

export const Default = Template.bind({});
Default.args = {
    firstBoxHeight: 200,
    repeat: 5,
};
Default.storyName = 'Scroll Inside Container';
