import { AppIconButton, boxShadows, spacingTheme } from '../..';
import { Box, BoxProps, styled } from '@mui/material';
import { PaperProps } from '@mui/material/Paper';
import { forwardRef, ReactNode } from 'react';
import { DeleteIcon, EditIcon } from '../../icons';
import colors from '../../theme/colors.module.scss';
import { BackgroundDots } from '../BackgroundDots';
import { AppTooltip } from '../tooltips';

type InCardPaperVariant = 'primary' | 'secondary' | 'error' | 'info' | 'white' | 'gray' | 'polkaDots';
const backgroundColors: Record<InCardPaperVariant, string> = {
    primary: colors.ultraLightBlue,
    secondary: colors.ultraLightGreen,
    error: colors.lightRed,
    info: colors.lightYellow,
    white: 'white',
    polkaDots: colors.blue,
    gray: colors.ultraLightGray,
};

export type InCardPaperProps = Partial<Omit<PaperProps, 'variant'>> & {
    variant?: InCardPaperVariant;
    onRemove?: () => void;
    onEdit?: () => void;
    children?: ReactNode;
    containerBoxProps?: BoxProps;
    /**
     * @desc to be used with containers that have their own padding
     * @see HalfAndHalfContainer
     */
    noPadding?: boolean;
    tooltipEditText?: string;
    tooltipDeleteText?: string;
    floating?: boolean;
};

const RootBox = styled(Box)(({ theme }) => ({
    minWidth: 300,
    minHeight: 48,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
}));

export const InCardPaper = forwardRef((props: InCardPaperProps, ref: any) => {
    const {
        variant = 'primary',
        onRemove,
        onEdit,
        children,
        containerBoxProps,
        tooltipEditText,
        tooltipDeleteText,
        sx,
        floating,
        noPadding,
        ...rest
    } = props;

    return (
        <RootBox
            sx={{
                backgroundColor: backgroundColors[variant],
                ...(floating && { boxShadow: boxShadows.banner }),
                ...(variant === 'polkaDots' && { position: 'relative' }),
                ...sx,
            }}
            ref={ref}
            {...rest}
        >
            {variant === 'polkaDots' && <BackgroundDots clipPath="close" />}
            <Box
                padding={
                    noPadding
                        ? 0
                        : variant === 'polkaDots'
                        ? `${spacingTheme.spacing(3)} ${spacingTheme.spacing(4)}`
                        : `${spacingTheme.spacing(2)}`
                }
                flexGrow={1}
                display="flex"
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    flexGrow={1}
                    justifyContent="space-between"
                    {...containerBoxProps}
                >
                    {variant === 'polkaDots' && <Box mb={2} />}
                    {children}
                </Box>
                {(onEdit || onRemove) && (
                    <Box display="flex" flexWrap="nowrap" gap={1} alignItems="center" ml={1}>
                        {onEdit && renderIconButton(onEdit, 'edit', variant, tooltipEditText)}
                        {onRemove && renderIconButton(onRemove, 'delete', variant, tooltipDeleteText)}
                    </Box>
                )}
            </Box>
        </RootBox>
    );
});

const renderIconButton = (
    handler: () => void,
    icon: 'edit' | 'delete',
    variant: InCardPaperVariant,
    tooltipText?: string
) => {
    const isEdit = icon === 'edit';

    const children = (
        <AppIconButton
            variant={variant === 'white' || variant === 'polkaDots' ? 'background' : 'default'}
            onClick={handler}
        >
            {isEdit ? <EditIcon /> : <DeleteIcon />}
        </AppIconButton>
    );

    if (tooltipText) {
        return (
            <AppTooltip minWidthUnset maxWidth={false} placement="top" title={tooltipText}>
                {children}
            </AppTooltip>
        );
    }

    return children;
};
