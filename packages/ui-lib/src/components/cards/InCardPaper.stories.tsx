import { Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { InCardPaper, InCardPaperProps } from './InCardPaper';

export default {
    title: 'UI/Cards/In Card Paper',
    component: InCardPaper,
} as Meta;

type Args = Omit<InCardPaperProps, 'children' | 'onRemove' | 'onEdit'> & { editButton: boolean; deleteButton: boolean };

const Template: Story<Args> = ({ editButton, deleteButton, ...props }) => {
    return (
        <InCardPaper {...props} {...(editButton && { onEdit: () => {} })} {...(deleteButton && { onRemove: () => {} })}>
            <Typography color={props.variant === 'polkaDots' ? 'white' : 'black'}>
                This is a completely random paragraph made for the purpose of this story:
            </Typography>
        </InCardPaper>
    );
};

export const Default = Template.bind({});
Default.args = {
    editButton: true,
    deleteButton: true,
    variant: 'primary',
    tooltipEditText: '',
    tooltipDeleteText: '',
    floating: true,
    noPadding: false,
};
Default.argTypes = {
    variant: { control: 'radio', options: ['info', 'primary', 'secondary', 'white', 'polkaDots', undefined] },
    editButton: { type: 'boolean' },
    deleteButton: { type: 'boolean' },
};
Default.storyName = 'In Card Paper';
