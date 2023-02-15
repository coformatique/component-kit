import './App.css';
import {
    AppCheckbox,
    AppIconButton,
    AppSwitch,
    AppDayPicker,
    UIProvider,
    Button,
    AppButton,
    Box,
    Typography,
    AddIcon,
} from 'ui-lib';
import { customTheme } from './custom-theme/mui';

function App() {
    return (
        <div>
            <UIProvider theme={customTheme}>
                <Box display={'flex'} justifyContent="center" alignItems="center" flexDirection={'column'} gap={1}>
                    <Typography variant="h3">Component Kit's Demo</Typography>
                    {/* @ts-ignore */}
                    <AppButton
                        variant="primaryContained"
                        sx={{
                            borderRadius: 50,
                        }}
                    >
                        Test Button{' '}
                    </AppButton>
                    <AppIconButton>
                        <AddIcon color="primary" fontSize="large" />
                    </AppIconButton>
                    <AppCheckbox />
                    <AppSwitch />
                    <AppDayPicker />
                    <AppDayPicker type="month" />
                    <Button variant="contained">sdmsms</Button>
                </Box>
            </UIProvider>
        </div>
    );
}

export default App;
