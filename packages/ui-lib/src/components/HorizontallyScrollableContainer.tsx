import autoAnimate from '@formkit/auto-animate';
import { Box, BoxProps, styled } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';
import { useResizeObserver } from '../utils';
import { AppIconButton } from './buttons/AppIconButton';

const StyledIconButton = styled(AppIconButton)({
    position: 'absolute',
    top: '50%',
    margin: 0,
    zIndex: 1,
});

export const HorizontallyScrollableContainer = ({ children, ...boxProps }: BoxProps) => {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        rootRef.current && autoAnimate(rootRef.current);
    }, []);

    const [showPagination, setShowPagination] = useState(false);
    const [scroll, setScroll] = useState(0);

    const calcScroll = useCallback(() => {
        // console.log('scrolling');
        setScroll(rootRef.current?.scrollLeft ?? 0);
        setShowPagination(!!rootRef.current && rootRef.current.scrollWidth > rootRef.current.offsetWidth + 5);
    }, []);

    const pageSize = useResizeObserver(rootRef);

    useEffect(calcScroll, [calcScroll, children, pageSize]);
    useEffect(() => {
        const node = rootRef.current;
        node?.addEventListener('scroll', calcScroll);
        return () => {
            node?.removeEventListener('scroll', calcScroll);
        };
    }, [calcScroll]);

    // const pageSize = rootRef.current?.offsetWidth ?? 0;
    const showRightArrow = showPagination && scroll + pageSize < (rootRef.current?.scrollWidth ?? 0) - 6;
    const showLeftArrow = showPagination && scroll > 0;

    return (
        <Box position="relative">
            {showLeftArrow && (
                <StyledIconButton
                    variant="floating"
                    sx={{ transform: 'translate(-50%, -50%)', left: 0 }}
                    size="small"
                    onClick={() => {
                        rootRef.current?.scrollTo({ left: scroll - pageSize * 0.8, behavior: 'smooth' });
                    }}
                >
                    <ChevronLeftIcon />
                </StyledIconButton>
            )}
            <Box overflow="hidden" display="flex" ref={rootRef} {...boxProps}>
                {children}
            </Box>
            {showRightArrow && (
                <StyledIconButton
                    variant="floating"
                    sx={{ transform: 'translate(50%, -50%)', right: 0 }}
                    size="small"
                    onClick={() => {
                        rootRef.current?.scrollTo({ left: scroll + pageSize * 0.8, behavior: 'smooth' });
                    }}
                >
                    <ChevronRightIcon />
                </StyledIconButton>
            )}
        </Box>
    );
};
