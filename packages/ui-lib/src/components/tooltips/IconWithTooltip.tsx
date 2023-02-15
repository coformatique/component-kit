import { Box, BoxProps, styled } from '@mui/material';
import { colors } from '../..';
import { InfoCircleIcon, QuestionCircleIcon } from '../../icons';
import { AppTooltip, AppTooltipProps } from './AppTooltip';

const iconStyles = { verticalAlign: 'middle', color: colors.darkGray }; // Styles specific to this component

const StyledInfoCircleIcon = styled(InfoCircleIcon)(iconStyles);
const StyledQuestionCircleIcon = styled(QuestionCircleIcon)(iconStyles);

export interface IconWithTooltipProps extends Omit<BoxProps, 'title'> {
    type: 'info' | 'question';
    title: string | JSX.Element;
    textField?: boolean;
    placement?: AppTooltipProps['placement'];
}

export const IconWithTooltip = ({ title, textField, placement, type, ...props }: IconWithTooltipProps) => {
    const Icon = type === 'info' ? StyledInfoCircleIcon : StyledQuestionCircleIcon;
    return (
        <Box {...(textField ? { ml: 2, pt: 1, alignSelf: 'center' } : { ml: 1 })} {...props}>
            <AppTooltip title={title} placement={placement}>
                <Icon color="disabled" fontSize="small" />
            </AppTooltip>
        </Box>
    );
};
