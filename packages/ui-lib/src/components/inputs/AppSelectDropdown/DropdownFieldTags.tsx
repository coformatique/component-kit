import { Box, Chip, Fade, styled } from '@mui/material';
import { RefObject, useEffect, useRef, useState } from 'react';
import { useResizeObserver } from '../../../utils';
import { TagDialog } from './TagDialog';
import { FilterItem } from './types';
import { compactChipStyles } from './utils';

export const ChipContainerBox = styled(Box)({
    display: 'grid',
    gridAutoFlow: 'column',
    gridColumnGap: '8px',
    paddingRight: '4px',
    paddingTop: '26px',
    paddingBottom: '8px',
    alignItems: 'center',
});

const isOverflown = (node: HTMLDivElement) => {
    // definitely overflown
    const { scrollWidth, clientWidth } = node;
    if (scrollWidth > clientWidth) return true;

    // might not be overflown, but there's not enough space for the text field
    const input = node.parentElement?.querySelector('input');
    const { clientWidth: inputWidth } = input ?? {};
    return (inputWidth ?? 0) < 100;
};

const useNoOfTagsToRender = (ref: RefObject<HTMLDivElement>, length: number) => {
    const [noOfTagsThatFit, setNoOfTagsThatFit] = useState<number>(length);
    const oldLength = useRef(0);
    // reset number of tags with length whenever body width changes
    const bodyWidth = useResizeObserver({ current: document.body });

    useEffect(() => {
        // gracefully increase the number of tags by 2 (going from portrait to landscape on mobile)
        setNoOfTagsThatFit((old) => old + 2);
    }, [bodyWidth]);

    useEffect(() => {
        setNoOfTagsThatFit((noOfTagsThatFit) => {
            // means you're adding one new item, so we gracefully increase the number of tags to be rendered by one,
            // and let the 2nd effect take care of it
            if (length === noOfTagsThatFit + 1) return noOfTagsThatFit + 1;
            // means you're adding a bunch of tags at once, so we must check
            // if the state was not overflown just before adding these new tags, if so, return the length,
            // and again let the 2nd effect take care of it
            else if (length > noOfTagsThatFit && noOfTagsThatFit === oldLength.current) return length;
            // means we're in an overflown state, don't change the number of tags so the component doesn't express jumpy behavior
            else return noOfTagsThatFit;
        });
        oldLength.current = length;
    }, [length]);

    // reduce no. of tags rendered if div is overflown
    useEffect(() => {
        const div = ref.current;
        if (div && isOverflown(div)) {
            setNoOfTagsThatFit((v) => (v > 0 ? v - 1 : v));
        }
    }, [ref, noOfTagsThatFit, length]);

    return noOfTagsThatFit;
};

export const DropdownFieldTags = ({
    tags,
    handleToggle,
    name,
}: {
    tags: Array<FilterItem>;
    handleToggle: (id: FilterItem) => void;
    name?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { length } = Object.keys(tags);
    const noOfTagsToRender = useNoOfTagsToRender(ref, length);
    const [isTagDialogOpen, setIsTagDialogOpen] = useState(false);

    return (
        <ChipContainerBox ref={ref} className="chipContainerBox">
            {/* tags that fit */}
            {Object.values(tags)
                .slice(0, noOfTagsToRender)
                .map((item) => (
                    <Fade in key={item.id}>
                        <Chip
                            variant="filled"
                            size="medium"
                            label={item.name}
                            tabIndex={-1}
                            onDelete={(e) => {
                                e.stopPropagation();
                                handleToggle(item);
                            }}
                            sx={compactChipStyles}
                        />
                    </Fade>
                ))}
            {/* X+ tag */}
            {length > noOfTagsToRender && (
                <Fade in>
                    <Chip
                        variant="filled"
                        size="medium"
                        label={
                            noOfTagsToRender === 0
                                ? `${length} selected item${length !== 1 ? 's' : ''}`
                                : `+${length - noOfTagsToRender}`
                        }
                        color="info"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsTagDialogOpen(true);
                        }}
                    />
                </Fade>
            )}
            {/* tag dialog */}
            <TagDialog
                tags={tags}
                handleToggle={handleToggle}
                open={isTagDialogOpen}
                name={name}
                onClose={() => setIsTagDialogOpen(false)}
            />
        </ChipContainerBox>
    );
};
