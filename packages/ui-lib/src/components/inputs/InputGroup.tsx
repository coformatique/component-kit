import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import colors from '../../theme/colors.module.scss';

export const InputGroup = styled(Box)({
    position: 'relative',
    display: 'grid',
    gridAutoFlow: 'column',
    flexWrap: 'wrap', // For form validation feedback
    alignItems: 'stretch',
    width: '100%',
    '& div': { margin: 0 },

    '& > div': {
        '& > div': { height: '100%' },
        position: 'relative', // For focus state's z-index
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        // Bring the input control to the top of surrounding elements
        '& .MuiInputLabel-filled.MuiInputLabel-shrink:not(.Mui-disabled)': {
            color: colors.blue,
        },
        '& .MuiInputBase-formControl.Mui-focused, .MuiInputBase-formControl.Mui-error': {
            zIndex: 3,
        },
        // Bring the input label above the input
        '& .MuiInputLabel-filled.Mui-focused, .MuiInputLabel-filled.Mui-error': {
            zIndex: 4,
        },
        '&:not(:last-child) .MuiInputBase-formControl': {
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
        },
        '&:not(:first-child) .MuiInputBase-formControl': {
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
        },
    },
});
