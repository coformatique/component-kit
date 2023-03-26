import { Accordion, AccordionDetails, AccordionProps, AccordionSummary, Box, Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { ChevronRightIcon } from '../icons';

export default {
  title: 'UI/Accordion',
  component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = args => {
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
      <Accordion>
        <AccordionSummary expandIcon={<ChevronRightIcon />}>
          <Typography color="text.blue">How to connect to data sources?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          We are working on these integrations during Q1 2020: Procountor, Hubspot, Google Analytics, Supermetrics
          (access to 50+ marketing platforms) and PayPal.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export const Default = Template.bind({});
Default.storyName = 'Accordion';
