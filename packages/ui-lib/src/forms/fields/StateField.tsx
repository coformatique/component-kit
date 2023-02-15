import { useMemo } from 'react';
import { AppDropdownSelectField } from '../../components/inputs';
import { states } from '../../utils/states';

export const StateField = ({ tooltipText }: { tooltipText?: string }) => {
    const items = useMemo(() => Object.values(states).map((state) => ({ id: state.alpha2, name: state.name })), []);

    return (
        <AppDropdownSelectField
            required
            name="state"
            label="State"
            items={items}
            tooltipText={tooltipText}
            searchInternally
        />
    );
};
