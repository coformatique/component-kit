import { RefObject, useEffect, useState } from 'react';

const getRefWidth = (chartRef: SVGSVGElement | HTMLElement) =>
    chartRef?.parentElement?.getBoundingClientRect().width ?? 0;

export const useResizeObserver = (chartRef: RefObject<SVGSVGElement | HTMLElement>, callback?: () => void) => {
    const { current } = chartRef;
    const [currentWidth, setCurrentWidth] = useState(0);
    const [refresh, setRefresh] = useState(0);

    // re-render component each time the size of its parent changes
    useEffect(() => {
        let observer: ResizeObserver;
        if (current) {
            observer = new ResizeObserver(() => {
                const width = getRefWidth(current);
                if (width && Math.max(width, currentWidth) / Math.min(width, currentWidth) > 1.01) {
                    setCurrentWidth(width ?? 0);
                    callback?.();
                }
            });
            current.parentElement && observer.observe(current.parentElement);
        } else {
            // if parent hasn't rendered yet, fire the effect on next event loop
            setTimeout(() => setRefresh((r) => r + 1), 0);
        }

        return () => observer?.disconnect();
    }, [currentWidth, current, callback, chartRef, refresh]);
    return currentWidth;
};
