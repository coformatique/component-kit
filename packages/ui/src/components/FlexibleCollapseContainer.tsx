import { Box, BoxProps } from '@mui/material';
import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useResizeObserver } from '../utils';

const isOverflown = (parentNode: HTMLElement, diff: number, collapsed: boolean): boolean => {
  const { width } = parentNode.getBoundingClientRect();
  const { paddingLeft, paddingRight } = getComputedStyle(parentNode);
  const parentWidth = width - parseInt(paddingLeft) - parseInt(paddingRight);
  if (!collapsed) {
    return (
      // parent definitely overflown
      parentNode.scrollWidth > parentNode.offsetWidth ||
      // parent not overflown, but its children are
      Array.from(parentNode.children).some(({ scrollWidth, clientWidth }) => scrollWidth > clientWidth)
    );
  } else {
    const childrenWidths = Array.from(parentNode.childNodes).reduce((a, c) => a + (c as HTMLElement).scrollWidth, 0);
    // parentWidth <= childrenWidths + diff means there's room for collapsed element to expand
    return parentWidth <= childrenWidths + diff;
  }
};

export const FlexibleCollapseContainer = ({
  children,
  boxProps,
}: {
  children: (collapse: boolean) => ReactNode;
  boxProps?: BoxProps;
}) => {
  const [collapse, setCollapse] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const widths = useMemo(() => [Infinity, 0], []);

  const calculateCollapsed = useCallback(() => {
    if (rootRef.current && rootRef.current.parentElement) {
      const newWidth = rootRef.current!.scrollWidth;

      newWidth < widths[0] && (widths[0] = newWidth);
      newWidth > widths[1] && (widths[1] = newWidth);

      const diff = widths[1] - widths[0];

      setCollapse(collapse => isOverflown(rootRef.current!.parentElement!, diff, collapse));
    }
  }, [widths]);

  const rootBoxWidth = useResizeObserver({ current: rootRef.current?.parentElement ?? null });

  useEffect(calculateCollapsed, [rootBoxWidth, calculateCollapsed, children]);
  useEffect(() => {
    window.addEventListener('resize', calculateCollapsed);
    return () => {
      window.removeEventListener('resize', calculateCollapsed);
    };
  }, [calculateCollapsed]);

  return (
    <Box ref={rootRef} {...boxProps} sx={{ ...boxProps?.sx, ...(!collapse && { '& *': { flexShrink: 0 } }) }}>
      {children(collapse)}
    </Box>
  );
};
