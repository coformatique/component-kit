import { Box, styled, Typography, TypographyProps } from '@mui/material';
import { FC, isValidElement, ReactNode } from 'react';
import {
    CompaniesIllustration,
    CustomersIllustration,
    FinanceIllustration,
    GenericConnectionIssueIllustration,
    InvoicesIllustration,
    NoDataReceivedIllustration,
    ProductsIllustration,
    SearchIllustration,
    SubscriptionsIllustration,
} from '../icons';
import { AppCard, AppCardProps } from './cards';

type IconType =
    | 'bolt'
    | 'customer'
    | 'finance'
    | 'invoice'
    | 'product'
    | 'subscription'
    | 'company'
    | 'invoiceWarning'
    | 'noData'
    | 'searchIcon';

export type PlaceholderProps = {
    icon?: IconType;
    text?: ReactNode;
    subtext?: ReactNode;
    action?: ReactNode;
    footer?: ReactNode;
} & (
    | {
          type: 'card';
          centerCardVertically?: boolean;
          appCardProps?: AppCardProps;
      }
    | {
          type?: 'fullScreen' | 'none';
          centerCardVertically?: never;
          appCardProps?: never;
      }
);

const iconMap: Record<IconType, FC> = {
    bolt: GenericConnectionIssueIllustration,
    customer: CustomersIllustration,
    finance: FinanceIllustration,
    invoice: InvoicesIllustration,
    product: ProductsIllustration,
    subscription: SubscriptionsIllustration,
    company: CompaniesIllustration,
    invoiceWarning: () => <InvoicesIllustration warning />,
    noData: NoDataReceivedIllustration,
    searchIcon: SearchIllustration,
};

const Icon = ({ icon }: { icon: IconType }) => {
    const Icon = iconMap[icon];
    return <Icon />;
};

const StyledBoxContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
});

const StyledFullscreenBoxContainer = styled(StyledBoxContainer)(({ theme }) => ({
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='862' height='509' viewBox='0 0 862 509' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23EEE' d='M1 1h86v39H1zM87 1h86v39H87zM1 40h86v39H1zM87 40h86v39H87zM1 79h86v39H1zM87 79h86v39H87zM1 118h86v39H1zM87 118h86v39H87zM1 157h86v39H1zM87 157h86v39H87zM1 196h86v39H1zM87 196h86v39H87zM1 235h86v39H1zM87 235h86v39H87zM1 274h86v39H1zM87 274h86v39H87zM1 313h86v39H1zM87 313h86v39H87zM1 352h86v39H1zM87 352h86v39H87zM1 391h86v39H1zM87 391h86v39H87zM1 430h86v39H1zM1 469h86v39H1zM87 430h86v39H87zM87 469h86v39H87zM173 1h86v39h-86zM173 40h86v39h-86zM173 79h86v39h-86zM173 118h86v39h-86zM173 157h86v39h-86zM173 196h86v39h-86zM173 235h86v39h-86zM173 274h86v39h-86zM173 313h86v39h-86zM173 352h86v39h-86zM173 391h86v39h-86zM173 430h86v39h-86zM173 469h86v39h-86zM259 1h86v39h-86zM259 40h86v39h-86zM259 79h86v39h-86zM259 118h86v39h-86zM259 157h86v39h-86zM259 196h86v39h-86zM259 235h86v39h-86zM259 274h86v39h-86zM259 313h86v39h-86zM259 352h86v39h-86zM259 391h86v39h-86zM259 430h86v39h-86zM259 469h86v39h-86zM345 1h86v39h-86zM345 40h86v39h-86zM345 79h86v39h-86zM345 118h86v39h-86zM345 157h86v39h-86zM345 196h86v39h-86zM345 235h86v39h-86zM345 274h86v39h-86zM345 313h86v39h-86zM345 352h86v39h-86zM345 391h86v39h-86zM345 430h86v39h-86zM345 469h86v39h-86zM431 1h86v39h-86zM431 40h86v39h-86zM431 79h86v39h-86zM431 118h86v39h-86zM431 157h86v39h-86zM431 196h86v39h-86zM431 235h86v39h-86zM431 274h86v39h-86zM431 313h86v39h-86zM431 352h86v39h-86zM431 391h86v39h-86zM431 430h86v39h-86zM431 469h86v39h-86zM517 1h86v39h-86zM517 40h86v39h-86zM517 79h86v39h-86zM517 118h86v39h-86zM517 157h86v39h-86zM517 196h86v39h-86zM517 235h86v39h-86zM517 274h86v39h-86zM517 313h86v39h-86zM517 352h86v39h-86zM517 391h86v39h-86zM517 430h86v39h-86zM517 469h86v39h-86zM603 1h86v39h-86zM603 40h86v39h-86zM603 79h86v39h-86zM603 118h86v39h-86zM603 157h86v39h-86zM603 196h86v39h-86zM603 235h86v39h-86zM603 274h86v39h-86zM603 313h86v39h-86zM603 352h86v39h-86zM603 391h86v39h-86zM603 430h86v39h-86zM603 469h86v39h-86zM689 1h86v39h-86zM689 40h86v39h-86zM689 79h86v39h-86zM689 118h86v39h-86zM689 157h86v39h-86zM689 196h86v39h-86zM689 235h86v39h-86zM689 274h86v39h-86zM689 313h86v39h-86zM689 352h86v39h-86zM689 391h86v39h-86zM689 430h86v39h-86zM689 469h86v39h-86zM775 1h86v39h-86zM775 40h86v39h-86zM775 79h86v39h-86zM775 118h86v39h-86zM775 157h86v39h-86zM775 196h86v39h-86zM775 235h86v39h-86zM775 274h86v39h-86zM775 313h86v39h-86zM775 352h86v39h-86zM775 391h86v39h-86zM775 430h86v39h-86zM775 469h86v39h-86z' /%3E%3C/svg%3E")`,
    flexGrow: 1,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(8),
    justifyContent: 'center',
    height: '100%',
}));

const renderText = (text?: ReactNode, props?: TypographyProps) => {
    if (!text) return null;
    return (
        <Box mb={1} flexWrap="wrap" display="flex" alignItems="center" justifyContent="center">
            {isValidElement(text) ? (
                text
            ) : (
                <Typography align="center" {...props}>
                    {text}
                </Typography>
            )}
        </Box>
    );
};

export const Placeholder = ({
    action,
    icon,
    subtext,
    text,
    type = 'fullScreen',
    footer,
    centerCardVertically,
    appCardProps,
}: PlaceholderProps) => {
    const contents = (
        <>
            <Box>
                {icon && (
                    <Box mb={3} maxWidth={100} m="auto">
                        <Icon icon={icon} />
                    </Box>
                )}
                <Box maxWidth={320} m="auto">
                    {renderText(text, { ...((type === 'card' || type === 'none') && { color: 'black' }) })}
                </Box>
                {renderText(subtext, { variant: 'body2' })}
                {action && (
                    <Box mt={2} mb={3}>
                        {action}
                    </Box>
                )}
            </Box>
            <Box>{renderText(footer, { variant: 'body2' })}</Box>
        </>
    );

    switch (type) {
        case 'fullScreen':
            return <StyledFullscreenBoxContainer>{contents}</StyledFullscreenBoxContainer>;

        case 'card':
            return (
                <AppCard {...(centerCardVertically && { sx: { my: 'auto' } })} {...appCardProps}>
                    <StyledBoxContainer>{contents}</StyledBoxContainer>
                </AppCard>
            );

        case 'none':
            return contents;
    }
};
