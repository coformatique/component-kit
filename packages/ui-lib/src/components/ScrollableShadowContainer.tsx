import { Box, BoxProps } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';

const opacity = 0.2;
const shadowSize = 8;
const shadowBottomCss = `inset 0px -${shadowSize}px ${shadowSize}px -${shadowSize}px rgb(0 0 0 / ${opacity})`;
const shadowTopCss = `inset 0px ${shadowSize}px ${shadowSize}px -${shadowSize}px rgb(0 0 0 / ${opacity})`;
const shadowNoneCss = `inset 0px 0px ${shadowSize}px -${shadowSize}px transparent`;
const margin = 8;

export const ScrollableShadowContainer = ({ sx, children, ...boxProps }: BoxProps) => {
    const ref = useRef<HTMLDivElement>();
    const [shadow, setShadow] = useState('');

    const applyShadow = useCallback(() => {
        const div = ref.current;
        if (div) {
            const scrollable = div.scrollHeight > div.offsetHeight;
            if (!scrollable) {
                setShadow('');
                return;
            }
            const top = div.scrollTop > margin;
            const bottom = div.scrollTop + div.offsetHeight < div.scrollHeight - margin;

            setShadow(
                top && !bottom
                    ? `${shadowTopCss}, ${shadowNoneCss}`
                    : !top && bottom
                    ? `${shadowNoneCss}, ${shadowBottomCss}`
                    : `${shadowTopCss}, ${shadowBottomCss}`
            );
        }
    }, []);

    useEffect(() => {
        const div = ref.current;
        let observer: ResizeObserver;
        if (div && applyShadow) {
            div.addEventListener('scroll', applyShadow);
            observer = new ResizeObserver(applyShadow);
            observer.observe(div);
            applyShadow();
        }

        return () => {
            div?.removeEventListener('scroll', applyShadow);
            observer?.disconnect();
        };
    }, [applyShadow]);

    return (
        <Box
            ref={ref}
            sx={{
                display: 'flex',
                overflowY: 'auto',
                boxShadow: shadow,
                transition: 'box-shadow 0.5s ease',
                '&::-webkit-scrollbar': { width: 10, height: 10 },
                ...sx,
            }}
            {...boxProps}
        >
            {children}
        </Box>
    );
};
