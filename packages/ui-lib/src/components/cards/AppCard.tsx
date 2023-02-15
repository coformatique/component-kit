import { styled } from '@mui/material';
import Card, { CardProps } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader, { CardHeaderProps } from '@mui/material/CardHeader';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { ErrorText } from '../ErrorText';

export interface AppCardProps extends CardProps {
    action?: ReactNode;
    error?: string | { type: any; message?: string };
    header?: CardHeaderProps;
    smallTitle?: boolean;
    bottomPadding?: number;
    sticky?: boolean;
    elevation?: number;
    children?: ReactNode;
    submitOnDirty?: boolean;
    /**
     * @deprecated
     */
    bigPadding?: boolean;
}

export const AppCard = styled(
    ({
        action,
        error,
        header,
        smallTitle,
        sticky = false,
        elevation,
        children,
        bottomPadding,
        bigPadding,
        ...rest
    }: AppCardProps) => (
        <Card sx={{ p: 4 }} elevation={elevation} {...rest} className={clsx({ sticky, bigPadding }, rest.className)}>
            {header && (
                <CardHeader sx={{ p: 0 }} {...header} titleTypographyProps={{ variant: smallTitle ? 'h3' : 'h2' }} />
            )}
            <CardContent sx={{ px: 0 }} className="cardContent">
                {children}
            </CardContent>
            {action && <CardActions sx={{ px: 0 }}>{action}</CardActions>}
            <ErrorText error={error} center />
        </Card>
    )
)(({ theme, bottomPadding = 3 }) => ({
    '&.sticky': { position: 'sticky', top: 0 },
    '& .cardContent': { '&:last-child': { paddingBottom: theme.spacing(bottomPadding) }, overflow: 'visible' },
    '&.bigPadding': { padding: '40px 50px' },
}));
