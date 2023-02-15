import { Box } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { AppButton } from '../buttons/AppButton';
import { AppColumnTooltip, ColumnTooltipProps } from './AppColumnTooltip';
import { AppTooltip, AppTooltipProps } from './AppTooltip';

export default {
    title: 'UI/Tooltip',
    component: AppTooltip,
} as Meta;

const placements: Array<AppTooltipProps['placement']> = [
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
    'top',
    'top-start',
    'top-end',
];

const Template: Story<AppTooltipProps> = (args) => {
    console.log(`🚀 ~ args`, args);
    return (
        <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
            <AppTooltip open {...args}>
                <AppButton>{args.placement}</AppButton>
            </AppTooltip>
        </Box>
    );
};

export const Tooltip = Template.bind({});
Tooltip.args = {
    placement: 'top',
    error: false,
    black: false,
    title: 'Tooltip info',
};
Tooltip.argTypes = {
    placement: {
        control: { type: 'radio' },
        options: placements,
    },
};

// All placements in one page
const VariantsTemplate: Story<{ error: boolean; tooltips: 'cardinal' | 'all'; black: boolean }> = (args) => {
    const { error, tooltips, black } = args;
    const renderChild = (n = 0) => {
        const placement = placements[n];

        return placement ? (
            <AppTooltip open error={error} black={black} placement={placement} title={placement!}>
                {renderChild(n + (tooltips === 'all' ? 1 : 3))}
            </AppTooltip>
        ) : (
            <Box height={tooltips === 'all' ? 300 : 100} width={tooltips === 'all' ? 500 : 100} />
        );
    };

    return (
        <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {renderChild()}
        </Box>
    );
};

export const Variants = VariantsTemplate.bind({});
Variants.args = { error: false, tooltips: 'cardinal', black: false };
Variants.argTypes = { tooltips: { control: 'radio', options: ['cardinal', 'all'] } };

// Column Tooltip
const ColumnTooltipTemplate: Story<ColumnTooltipProps> = () => {
    return (
        <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
            <AppColumnTooltip
                open
                column1Title="Title1"
                column2Title="Long Title2"
                column1={['Long value', 'Value', 'Value', 'Value']}
                column2={['Value', 'Really long Value', 'Value', 'Value']}
            >
                <AppButton>Column Tooltip</AppButton>
            </AppColumnTooltip>
        </Box>
    );
};

export const ColumnTooltip = ColumnTooltipTemplate.bind({});
