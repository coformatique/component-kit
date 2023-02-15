import { useMemo } from 'react';
import { AppDropdownSelectField, AppDropdownSelectFieldProps } from '../../components/inputs';
import { currencies } from '../../utils/currencies';

export const CurrencyField = ({
    disabled,
    tooltipText,
    name = 'currency',
    fieldProps,
}: {
    disabled?: boolean;
    tooltipText?: string;
    name?: string;
    fieldProps?: Partial<AppDropdownSelectFieldProps>;
}) => {
    const options = useMemo(
        () => Object.values(currencies).map((currency) => ({ id: currency.code, name: currency.name })),
        []
    );

    return (
        <AppDropdownSelectField
            disabled={!!disabled}
            required
            name={name}
            label="Currency"
            items={options}
            tooltipText={tooltipText}
            searchInternally
            {...fieldProps}
        />
    );
};
