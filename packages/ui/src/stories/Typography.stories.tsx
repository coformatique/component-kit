import { Box, Divider, Grid, Typography, TypographyProps } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { AppTypographyVariant, typographyVariants } from '../theme/mui';

const allVariants: Array<{ label: string; variant: AppTypographyVariant; desc: string }> = [
  {
    label: 'H1. Dashboard title, Edito title',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 36px; letter-spacing: -0.75px; line-height: 36px;',
    variant: 'h1',
  },
  {
    label: 'H2. Modal title',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 28px; letter-spacing: -0.5px; line-height: 28px;',
    variant: 'h2',
  },
  {
    label: 'H3. Tile title, Pie chart value',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 18px; letter-spacing: 0.5px; line-height: 24px;',
    variant: 'h3',
  },
  {
    label: 'H4. Tab section, DRP Month',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 18px; letter-spacing: 0.5px; line-height: 27px;',
    variant: 'h4',
  },
  {
    label: 'Body 1. Body of the text, Filter label, Input text, Dropdown option, DRP Available day',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 16px; letter-spacing: 0.5px; line-height: 21px;',
    variant: 'body1',
  },
  {
    label: 'Body 2. Table cells, Column headers, DRP Weekdays',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 14px; letter-spacing: 0.25px; line-height: 21px;',
    variant: 'body2',
  },
  {
    label: 'Button 1. Primary, Text',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 18px; letter-spacing: 0.5px; line-height: 21px;',
    variant: 'button1',
  },
  {
    label: 'Button 2. Secondary',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 14px; letter-spacing: 0.5px; text-align: center; line-height: 18px;',
    variant: 'button2',
  },
  {
    label: 'Caption text. Input label, Chart legend, Dropdown “Select / Deselect all” buttons, Dropdown option caption',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 11px; letter-spacing: 0.25px;',
    variant: 'caption',
  },
  {
    label: 'Overline. Dropdown group of options, “Your account” multi-account user menu overline',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 10px; letter-spacing: 1px; line-height: 18px;',
    variant: 'overline',
  },
  {
    label: 'Navigation menu category',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 12px; letter-spacing: 1px; line-height: 18px;',
    variant: 'navigationMenuCategory',
  },
  {
    label: 'Chart value figures',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 16px; letter-spacing: 0;',
    variant: 'chartValue',
  },
  {
    label: 'Chart value figures',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 21px; letter-spacing: 0;',
    variant: 'chartValueBig',
  },
  {
    label: 'Chart axis label, Chart value date',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 12px; letter-spacing: 0;',
    variant: 'chartLabel',
  },
  {
    label: 'Form error messages',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 14px; letter-spacing: 0.5px; line-height: 21px;',
    variant: 'formErrorMessage',
  },
  {
    label: 'Accordions title, Modal subtitle',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 16px; letter-spacing: 0.5px; line-height: 21px;',
    variant: 'accordionTitleAndModalSubtitle',
  },
  {
    label: 'Accordions text',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 16px; letter-spacing: 0.5px; line-height: 28px;',
    variant: 'accordionText',
  },
  {
    label: 'Tooltip text',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 12px; letter-spacing: 0.25px; line-height: 16px;',
    variant: 'tooltipText',
  },
  {
    label: 'Tag Label',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 9px; letter-spacing: 1px; line-height: 9px;',
    variant: 'tagLabel',
  },
  {
    label: 'Table tier 1 title',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 24px; letter-spacing: 0.5px; line-height: 28px;',
    variant: 'tableTier1Title',
  },
  {
    label: 'Table tier 1 value',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 18px; letter-spacing: 0.5px; line-height: 24px;',
    variant: 'tableTier1Value',
  },
  {
    label: 'Table tier 3 title & value',
    desc: 'font-family: ESRebondGrotesque-Regular; font-size: 14px; letter-spacing: 0.25px; line-height: 18px;',
    variant: 'tableTier3TitleAndValue',
  },
];

export default {
  title: 'UI/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps & { label: string }> = args => (
  <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Typography {...args} m="auto">
      {args.label}
    </Typography>
  </Box>
);

export const AppTypography = Template.bind({});
AppTypography.args = {
  label: 'I am a typography!',
  variant: 'h3',
};
AppTypography.argTypes = {
  variant: {
    control: { type: 'radio' },
    options: typographyVariants,
  },
  color: {
    control: { type: 'radio' },
    options: [
      undefined,
      'text.darkGray',
      'text.mediumGray',
      'text.warmGray',
      'text.blue',
      'text.green',
      'text.error',
      'black',
      'white',
    ],
  },
  children: {
    options: null,
    control: { type: null },
  },
};

// All variants in one page
const VariantsTemplate: Story<{ label: string }> = args => (
  <div>
    {allVariants.map(({ label, variant, desc }) => (
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant={variant}>{args.label || label}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>{desc}</Typography>
        </Grid>
        <Divider sx={{ width: '100%', my: 2 }} />
      </Grid>
    ))}
  </div>
);

export const Variants = VariantsTemplate.bind({});
Variants.args = { label: '' };
