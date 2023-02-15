import { AppIconButton } from '../../..';
import Popover from '@mui/material/Popover';
import { ChangeEvent, Dispatch, FC, MouseEvent, SetStateAction, useEffect, useMemo, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { AppFormField, getErrorByPath } from '../../../forms';
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from '../../../icons';
import { LIST_MAX_WIDTH } from './DropdownList';
import { DropdownSelectLayout } from './DropdownSelectLayout';
import { DropdownSelectList, DropdownSelectListProps } from './DropdownSelectList';
import { DropdownSelectSharedProps, FilterItem, InfiniteLoaderWrapperType } from './types';
import { defaultDropdownSelectFieldProps, defaultDropdownSelectPopoverProps, StyledTextField } from './utils';

export type AppDropdownSelectProps = Omit<
    DropdownSelectListProps,
    'handleToggle' | 'selectedItems' | 'searchTerm' | 'width'
> &
    DropdownSelectSharedProps & {
        selectedItem: FilterItem | undefined;
        // setSelectedItem: Dispatch<SetStateAction<FilterItem | undefined>>;
        setSelectedItem: Dispatch<SetStateAction<FilterItem | undefined>>;
        freeSolo?: boolean;
    };

export const AppDropdownSelect: FC<AppDropdownSelectProps> = ({
    selectedItem,
    setSelectedItem,
    inputText: _inputText,
    setInputText: _setInputText,
    searchInternally,
    freeSolo,
    description,
    tooltipText,
    // inf loader props
    hasNextPage,
    isNextPageLoading,
    groups: _groups,
    items: _items,
    loadNextPage,
    total,
    // textfield props
    onChange, // omitting these to remove validation from textfield
    onBlur, // omitting these to remove validation from textfield
    fieldError,
    clearSearchTextOnSelect = true,
    margin,
    ...rest
}) => {
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const [inputTextInternal, setInputTextInternal] = useState('');
    const setInputText = (s: string) => {
        setInputTextInternal(s);
        !searchInternally && _setInputText(s);
    };

    const [items, groups] = useMemo(() => {
        if (!searchInternally) return [_items, _groups];
        return [
            _items?.filter((i) => i.name.toLowerCase().includes(inputTextInternal.toLowerCase())),
            _groups
                ?.map((g) => ({
                    name: g.name,
                    items: g.items.filter((i) => i.name.toLowerCase().includes(inputTextInternal.toLowerCase())),
                }))
                ?.filter((g) => g.items.length > 0),
        ];
    }, [_groups, _items, inputTextInternal, searchInternally]);

    const handleTextFieldClick = (event: MouseEvent) => {
        if (!rest.disabled) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleTextFieldClick(e as unknown as MouseEvent);
        setInputText(e.target.value);
        setInputTextInternal(e.target.value);
    };

    const open = Boolean(anchorEl);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open && selectedItem) setInputTextInternal(selectedItem.name);
    }, [open, selectedItem]);

    const handleItemChange = (item: FilterItem) => {
        setSelectedItem(item);
        handlePopoverClose();
        // clear input and search state
        clearSearchTextOnSelect && setInputText('');
        setInputTextInternal(item.name);
    };

    const clearSelectedItem = () => {
        setSelectedItem(undefined);
        setInputTextInternal('');
    };

    return (
        <DropdownSelectLayout
            fieldError={fieldError}
            fullWidth={rest.fullWidth}
            tooltipText={tooltipText}
            margin={margin}
        >
            {/* @ts-ignore variant */}
            <StyledTextField
                {...defaultDropdownSelectFieldProps}
                ref={ref}
                onChange={handleTextFieldChange}
                value={inputTextInternal}
                InputProps={{
                    className: 'input',
                    disableUnderline: true,
                    endAdornment: (
                        <>
                            {selectedItem && (
                                <AppIconButton
                                    size="small"
                                    onClick={(e) => {
                                        // prevent clicking the button from re-opening the popover list
                                        e.stopPropagation();
                                        clearSelectedItem();
                                    }}
                                >
                                    <CloseIcon />
                                </AppIconButton>
                            )}
                            <AppIconButton size="small">{open ? <ChevronUpIcon /> : <ChevronDownIcon />}</AppIconButton>
                        </>
                    ),
                }}
                onClick={handleTextFieldClick}
                {...rest}
            />
            <Popover
                {...defaultDropdownSelectPopoverProps}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
            >
                <DropdownSelectList
                    {...{
                        loadNextPage,
                        selectedItems: selectedItem ? [selectedItem] : [],
                        items,
                        groups,
                        isNextPageLoading,
                        hasNextPage,
                        handleToggle: handleItemChange,
                        total,
                        searchTerm: inputTextInternal,
                        freeSolo,
                        description,
                    }}
                    width={`${LIST_MAX_WIDTH}px`}
                    type={InfiniteLoaderWrapperType.Single}
                />
            </Popover>
        </DropdownSelectLayout>
    );
};

export type AppDropdownSelectFieldProps = Omit<AppDropdownSelectProps, 'selectedItem' | 'setSelectedItem'> &
    AppFormField;

export const AppDropdownSelectField = (props: AppDropdownSelectFieldProps) => {
    const { name } = props;
    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useFormContext();
    const error = getErrorByPath(errors, name);
    const value: FilterItem = watch(name);

    return (
        // @ts-ignore props or types (searchInternally|inputText+setInputText)
        <AppDropdownSelect
            {...register(name)}
            {...props}
            selectedItem={value}
            setSelectedItem={(item) =>
                setValue(name, item, { shouldDirty: true, shouldTouch: true, shouldValidate: true })
            }
            fieldError={error}
        />
    );
};
