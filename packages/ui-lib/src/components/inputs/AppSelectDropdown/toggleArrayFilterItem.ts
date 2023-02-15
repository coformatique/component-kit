import { FilterItem } from './types';

const removeAtIndex = (arr: Array<any>, index: number) => {
    const copy = arr.slice();
    copy.splice(index, 1);
    return copy;
};

export const toggleArrayFilterItem = (
    item: FilterItem,
    arr: Array<FilterItem>,
    getValue = (item: FilterItem) => item.id
) => {
    const index = arr.findIndex((i) => getValue(i) === getValue(item));
    if (index === -1) return [...arr, item];
    return removeAtIndex(arr, index);
};
