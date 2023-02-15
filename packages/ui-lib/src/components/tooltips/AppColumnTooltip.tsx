import { Grid, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { FC } from 'react';
import { AppTooltip, AppTooltipProps } from './AppTooltip';

const styles: Record<string, SxProps> = {
    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
};

export interface ColumnTooltipProps extends Omit<AppTooltipProps, 'placement' | 'title' | 'arrow'> {
    column1Title: string;
    column2Title: string;
    column1?: string[];
    column2?: string[];
}

export const AppColumnTooltip: FC<ColumnTooltipProps> = ({
    column1,
    column2,
    column1Title,
    column2Title,
    ...props
}) => (
    <AppTooltip
        {...props}
        placement="top"
        arrow
        maxWidth={false}
        title={
            <Grid container spacing={1.75} justifyContent="space-between">
                <Grid item sx={styles.columnContainer}>
                    <Typography variant="tooltipText" fontWeight="normal" mb={1}>
                        {column1Title}
                    </Typography>
                    {column1?.map((value) => (
                        <Typography key={value} variant="tooltipText">
                            {value}
                        </Typography>
                    ))}
                </Grid>
                <Grid item sx={styles.columnContainer}>
                    <Typography variant="tooltipText" fontWeight="normal" mb={1}>
                        {column2Title}
                    </Typography>
                    {column2?.map((value) => (
                        <Typography key={value} variant="tooltipText">
                            {value}
                        </Typography>
                    ))}
                </Grid>
            </Grid>
        }
    />
);
