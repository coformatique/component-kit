import { List, ListSubheader, styled } from '@mui/material';
import { CSSProperties, ReactNode, Ref } from 'react';
import { FixedSizeList, ListChildComponentProps, ListOnItemsRenderedProps, VariableSizeList } from 'react-window';
import { ITEM_SIZE, ListItemMulti, ListItemSingle, renderText } from './DropdownListItem';
import { FilterGroup, FilterItem, InfiniteLoaderWrapperType } from './types';

// types
type OnItemsRendered = (props: ListOnItemsRenderedProps) => any;

interface ListProps {
    onItemsRendered: OnItemsRendered;
    listRef: Ref<any>;
    isNextPageLoading?: boolean;
    width?: CSSProperties['width'];
    searchTerm?: string;
    selectedItems: Array<FilterItem>;
    handleToggle: (id: FilterItem) => void;
    type: InfiniteLoaderWrapperType;
    onApply?: (() => void) | false;
    freeSolo?: boolean;
    description?: ReactNode;
    showDescription?: boolean;
}

export type CustomVariableSizeListProps = ListProps & { groups: FilterGroup[] };

export type CustomFixedSizeListProps = ListProps & { items: FilterItem[] };

// const
const LIST_MAX_HEIGHT = 360;
export const LIST_MAX_WIDTH = 380;

// styled components
const StyledList = styled(List)({
    whiteSpace: 'nowrap',
    paddingBlock: '0 !important',
});

const StyledListSubheader = styled(ListSubheader)({
    display: 'flex',
    margin: 0,
    height: 42,
    alignItems: 'center',
});

// util
const calculateListHeight = ({ freeSolo, searchTerm, onApply, isNextPageLoading, showDescription }: ListProps) => {
    const showFreeSolo = !!(freeSolo && searchTerm);
    const applyButton = !!onApply;

    // subtract (reserve) the height of the description, loader, apply button and the freesolo item from the list height,
    // so that the popover is never more than 360 pixels in height
    return (
        LIST_MAX_HEIGHT -
        [showFreeSolo, applyButton, isNextPageLoading, showDescription].filter((t) => t).length * ITEM_SIZE
    );
};

// lists
export const CustomVariableSizeList = (props: CustomVariableSizeListProps) => {
    const { onItemsRendered, listRef, groups, selectedItems, handleToggle, width, searchTerm, type } = props;
    const allItemsLength = groups.flatMap((g) => g.items).length + groups.length;

    const height = Math.min(
        calculateListHeight(props),
        ITEM_SIZE * allItemsLength + (allItemsLength ? 8 /* px padding */ : 0)
    );

    return (
        <VariableSizeList
            width={width ?? 'auto'}
            height={height}
            itemCount={groups.length}
            // 1 for header + child count
            itemSize={(i) => (1 + groups[i].items.length) * ITEM_SIZE}
            onItemsRendered={onItemsRendered}
            ref={listRef}
        >
            {(props) => {
                const { index, style } = props;
                const group = groups[index];

                return (
                    <StyledList key={group.name + index} style={style}>
                        {group.items.length > 0 && group.name !== 'no-group' && (
                            <StyledListSubheader>
                                {group.name.trim() ? group.name : 'Uncategorized'}
                            </StyledListSubheader>
                        )}
                        {group.items.map((item) => {
                            const labelId = `multi-select-filter-list-checkbox-label-${item.id}`;
                            const text = renderText(item.name, searchTerm);
                            const ListItem = type === InfiniteLoaderWrapperType.Multi ? ListItemMulti : ListItemSingle;

                            return (
                                <ListItem
                                    key={item.id}
                                    labelId={labelId}
                                    onClick={() => handleToggle(item)}
                                    checked={!!selectedItems.find((i) => i.id === item.id)}
                                    text={text}
                                />
                            );
                        })}
                    </StyledList>
                );
            }}
        </VariableSizeList>
    );
};

const renderListItem = (
    props: ListChildComponentProps<any>,
    items: Array<FilterItem>,
    searchTerm: string | undefined,
    handleToggle: (item: FilterItem) => void,
    selectedItems: Array<FilterItem>,
    type: InfiniteLoaderWrapperType
) => {
    const { index, style } = props;
    const item = items[index];
    const labelId = `multi-select-filter-list-checkbox-label-${item.id}`;
    const text = renderText(item.name, searchTerm);
    const ListItem = type === InfiniteLoaderWrapperType.Multi ? ListItemMulti : ListItemSingle;

    return (
        <ListItem
            key={item.id}
            style={style}
            labelId={labelId}
            onClick={() => handleToggle(item)}
            checked={!!selectedItems.find((i) => i.id === item.id)}
            text={text}
        />
    );
};

export const CustomFixedSizeList = (props: CustomFixedSizeListProps) => {
    const { onItemsRendered, listRef, handleToggle, items, selectedItems, width, searchTerm, type } = props;

    const height = Math.min(calculateListHeight(props), ITEM_SIZE * items.length);

    return (
        <FixedSizeList
            width={width ?? 'auto'}
            height={height}
            itemCount={items.length}
            itemSize={ITEM_SIZE}
            onItemsRendered={onItemsRendered}
            ref={listRef}
        >
            {(props) => renderListItem(props, items, searchTerm, handleToggle, selectedItems, type)}
        </FixedSizeList>
    );
};
