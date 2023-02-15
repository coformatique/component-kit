import { z } from 'zod';

// initialize default error map
z.setErrorMap((m, ctx) => {
    switch (m.code) {
        case 'invalid_enum_value':
            return { message: 'Please choose one of the valid values' };
        case 'invalid_type':
        default:
            return { message: 'This field is required' };
    }
});

export * from './AppForm';
export * from './common-schemas';
// Primitive form fields
export * from './fields/AppCheckboxField';
export * from './fields/AppCheckboxGroup';
export * from './fields/AppCheckboxSubmitField';
export * from './fields/AppControlledRadioGroup';
export * from './fields/AppDayPicker';
export * from './fields/AppRadioGroup';
export * from './fields/AppSearchTextField';
export * from './fields/AppTextField';
export * from './fields/AppToggleField';
// composite, special purpose fields (Fields built upon the AppDropdownSelect)
export * from './fields/CountryField';
export * from './fields/CurrencyField';
export * from './fields/HorizontalGroupLabel';
export * from './fields/VerticalGroupLabel';
export * from './fields/StateField';
// getErrorByPath
export * from './getErrorByPath';
