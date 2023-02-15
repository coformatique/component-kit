import { AppIconButton } from '../../..';
import Popover from '@mui/material/Popover';
import { ChangeEvent, FC, MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { getErrorByPath } from '../../..';
import { AppFormField } from '../../../forms/AppForm';
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from '../../../icons';
import { DropdownFieldTags } from './DropdownFieldTags';
import { LIST_MAX_WIDTH } from './DropdownList';
import { DropdownSelectLayout } from './DropdownSelectLayout';
import { DropdownSelectList, DropdownSelectListProps } from './DropdownSelectList';
import { toggleArrayFilterItem } from './toggleArrayFilterItem';
import { DropdownSelectSharedProps, FilterItem, InfiniteLoaderWrapperType } from './types';
import { defaultDropdownSelectFieldProps, defaultDropdownSelectPopoverProps, StyledTextField } from './utils';

export type AppDropdownMultiselectProps = Omit<DropdownSelectListProps, 'handleToggle' | 'searchTerm' | 'width'> &
    DropdownSelectSharedProps & {
        selectedItems: Array<FilterItem>;
        setSelectedItems: (items: Array<FilterItem>) => void;
        changeOnApply?: boolean;
    };

export const AppDropdownMultiselect: FC<AppDropdownMultiselectProps> = ({
    selectedItems: parentSelectedItems = [],
    setSelectedItems: parentSetSelectedItems,
    inputText: _inputText,
    setInputText: _setInputText,
    searchInternally,
    changeOnApply,
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
    revalidate,
    selectionError,
    clearSearchTextOnSelect = true,
    margin,
    ...rest
}) => {
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const [selectedItems, setSelectedItems] = useState<Array<FilterItem>>(parentSelectedItems);
    const [inputTextInternal, setInputTextInternal] = useState('');
    const inputText = searchInternally ? inputTextInternal : _inputText;
    const setInputText = searchInternally ? setInputTextInternal : _setInputText;

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

    const inputRef = useRef<HTMLInputElement>(null);

    const handleTextFieldClick = useCallback(
        (event: MouseEvent, select = true) => {
            if (!rest.disabled) {
                setAnchorEl(event.currentTarget);
                select && inputRef.current?.select();
            }
        },
        [rest.disabled]
    );

    const handlePopoverClose = useCallback(() => {
        setAnchorEl(null);
        revalidate?.();
    }, [revalidate]);

    const open = Boolean(anchorEl);

    const clearTextSearch = useCallback(() => {
        if (clearSearchTextOnSelect && changeOnApply) {
            inputRef.current && (inputRef.current.value = '');
            setInputText('');
        }
    }, [changeOnApply, clearSearchTextOnSelect, setInputText]);

    const clearSelection = useCallback(() => {
        setSelectedItems([]);
        parentSetSelectedItems([]);
        clearTextSearch();
        revalidate?.();
    }, [clearTextSearch, parentSetSelectedItems, revalidate]);

    const handleTextFieldChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            handleTextFieldClick(e as unknown as MouseEvent, false);
            setInputText(e.target.value);
        },
        [handleTextFieldClick, setInputText]
    );

    const handleToggle = useCallback(
        (item: FilterItem, forceSetParent?: boolean) => {
            const newFilters = toggleArrayFilterItem(item, selectedItems);
            setSelectedItems(newFilters);
            if (!changeOnApply || forceSetParent) parentSetSelectedItems(newFilters);
            forceSetParent && revalidate?.();
        },
        [changeOnApply, parentSetSelectedItems, revalidate, selectedItems]
    );

    const onApply = useMemo(
        () =>
            changeOnApply &&
            (() => {
                parentSetSelectedItems(selectedItems);
                handlePopoverClose();
                revalidate?.();
                clearTextSearch();
            }),
        [changeOnApply, clearTextSearch, handlePopoverClose, parentSetSelectedItems, revalidate, selectedItems]
    );

    useEffect(clearTextSearch, [clearTextSearch, parentSelectedItems]);
    useEffect(() => {
        if (!changeOnApply) setSelectedItems(parentSelectedItems);
    }, [changeOnApply, parentSelectedItems]);

    return (
        <DropdownSelectLayout
            fieldError={fieldError}
            fullWidth={rest.fullWidth}
            tooltipText={tooltipText}
            margin={margin}
        >
            {/* @ts-ignore variant type */}
            <StyledTextField
                {...defaultDropdownSelectFieldProps}
                InputLabelProps={{
                    // document.activeElement === inputRef.current input element is in focus
                    shrink:
                        !!inputText || parentSelectedItems.length > 0 || document.activeElement === inputRef.current,
                }}
                onChange={handleTextFieldChange}
                InputProps={{
                    inputProps: { ref: inputRef },
                    className: 'input',
                    disableUnderline: true,
                    endAdornment: (
                        <>
                            {parentSelectedItems.length > 1 && (
                                <AppIconButton
                                    size="small"
                                    onClick={(e) => {
                                        // prevent clicking the button from re-opening the popover list
                                        e.stopPropagation();
                                        clearSelection();
                                    }}
                                >
                                    <CloseIcon />
                                </AppIconButton>
                            )}
                            <AppIconButton size="small">{open ? <ChevronUpIcon /> : <ChevronDownIcon />}</AppIconButton>
                        </>
                    ),
                    startAdornment: parentSelectedItems?.length ? (
                        <DropdownFieldTags
                            tags={parentSelectedItems}
                            handleToggle={(item) => handleToggle(item, true)}
                            name={rest.label as string}
                        />
                    ) : undefined,
                }}
                onClick={handleTextFieldClick}
                {...rest}
            />
            <Popover
                {...defaultDropdownSelectPopoverProps}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                tabIndex={0}
            >
                <DropdownSelectList
                    {...{
                        loadNextPage,
                        selectedItems,
                        items,
                        groups,
                        isNextPageLoading,
                        hasNextPage,
                        handleToggle,
                        total,
                        searchTerm: inputText,
                        onApply,
                        description,
                        selectionError,
                    }}
                    width={`${LIST_MAX_WIDTH}px`}
                    type={InfiniteLoaderWrapperType.Multi}
                />
            </Popover>
        </DropdownSelectLayout>
    );
};

export type AppDropdownMultiselectFieldProps = Omit<AppDropdownMultiselectProps, 'selectedItems' | 'setSelectedItems'> &
    AppFormField;

export const AppDropdownMultiselectField = (props: AppDropdownMultiselectFieldProps) => {
    const { name } = props;
    const {
        register,
        watch,
        setValue,
        formState: { errors },
        trigger,
    } = useFormContext();
    const error = getErrorByPath(errors, name);
    const value: Array<FilterItem> = watch(name);

    return (
        // @ts-ignore props or types (searchInternally|inputText+setInputText)
        <AppDropdownMultiselect
            {...register(name)}
            {...props}
            selectedItems={value ?? []}
            setSelectedItems={(items) =>
                setValue(name, items, { shouldDirty: true, shouldTouch: true, shouldValidate: true })
            }
            fieldError={error}
            revalidate={() => trigger(name)}
        />
    );
};
