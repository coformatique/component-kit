import { TextFieldProps } from '@mui/material';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { FieldError } from 'react-hook-form';

export enum InfiniteLoaderWrapperType {
    Multi = 1,
    Single,
}

export type FilterItem = { id: number | string; name: string };
export interface FilterGroup {
    name: string;
    items: Array<FilterItem>;
}

export type DropdownSelectSharedProps = {
    description?: ReactNode;
    fieldError?: string | FieldError;
    revalidate?: () => void;
    clearSearchTextOnSelect?: boolean;
    tooltipText?: string;
} & (
    | { inputText: string; setInputText: Dispatch<SetStateAction<string>>; searchInternally?: never }
    | { searchInternally: true; inputText?: never; setInputText?: never }
) &
    Pick<
        TextFieldProps,
        | 'disabled'
        | 'onChange'
        | 'onBlur'
        | 'required'
        | 'label'
        | 'variant'
        | 'fullWidth'
        | 'margin'
        | 'size'
        | 'placeholder'
    >;
