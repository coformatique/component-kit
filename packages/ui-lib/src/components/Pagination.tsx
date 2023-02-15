import { ButtonProps } from '@mui/material';
import { styled, SxProps } from '@mui/material/styles';
import clsx from 'clsx';
import { AppIconButton } from './buttons/AppIconButton';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

interface PageButtonProps {
    text: string;
    isActive: boolean;
    onClick: (e: any) => void;
    isDisabled: boolean;
    classes?: ButtonProps['classes'];
}

const PREFIX = 'Pagination';

const classMap = {
    button: `${PREFIX}-button`,
    activeButton: `${PREFIX}-activeButton`,
    text: `${PREFIX}-text`,
    pagination: `${PREFIX}-pagination`,
    rowsLabel: `${PREFIX}-rowsLabel`,
    prev: `${PREFIX}-prev`,
    next: `${PREFIX}-next`,
    arrowButton: `${PREFIX}-arrowButton`,
};

const StyledIconButton = styled(AppIconButton)(({ theme }) => ({
    [`&.${classMap.button}`]: { ...theme.typography.body1 },
    [`&.${classMap.activeButton}`]: { fontWeight: 'bold', cursor: 'default' },
    [`&.${classMap.text}`]: { color: 'rgba(0, 0, 0, 0.87)' },
    '@media(max-width: 768px)': {
        [`&.${classMap.button}`]: { display: 'none' },
    },
}));

const StyledDiv = styled('div')(({ theme }) => ({
    [`&.${classMap.pagination}`]: { margin: 0 },
    [`& .${classMap.rowsLabel}`]: { display: 'inline-flex', paddingRight: theme.spacing(5) },
    [`& .${classMap.arrowButton}`]: {
        transform: theme.direction === 'rtl' ? 'rotate(180deg)' : null,
        msTransform: theme.direction === 'rtl' ? 'rotate(180deg)' : null,
    },
    [`& .${classMap.prev}`]: { marginRight: 0 },
    [`& .${classMap.next}`]: { marginLeft: 0 },
    '@media(max-width: 768px)': {
        [`& .${classMap.rowsLabel}`]: { paddingRight: theme.spacing(2) },
        [`& .${classMap.prev}`]: { marginRight: theme.spacing(1) },
        [`& .${classMap.next}`]: { marginLeft: theme.spacing(1) },
    },
}));

const PageButton = ({ text, isActive, isDisabled, onClick, classes }: PageButtonProps) => {
    const buttonClasses = clsx({
        [classMap.button]: true,
        [classMap.activeButton]: isActive,
        [classMap.text]: true,
    });

    return (
        <StyledIconButton
            className={buttonClasses}
            disabled={isDisabled}
            onClick={onClick}
            {...(isActive ? { tabIndex: -1, disabled: true } : null)}
            classes={classes}
        >
            {text}
        </StyledIconButton>
    );
};

PageButton.defaultProps = {
    onClick: () => {},
    isDisabled: false,
    isActive: false,
};

const ellipsisSymbol = '\u2026';

const calculateStartPage = (currentPage: number, maxButtonCount: number, totalPageCount: number) =>
    Math.max(Math.min(currentPage - Math.floor(maxButtonCount / 2), totalPageCount - maxButtonCount + 1), 1);

const renderPageButtons = (currentPage: number, totalPageCount: number, onCurrentPageChange: (p: number) => void) => {
    const pageButtons = [];
    const maxButtonCount = 3;
    let startPage = 1;
    let endPage = totalPageCount || 1;

    // NOTE: take into account last button and ellipsis (T1004797)
    if (maxButtonCount < totalPageCount - 2) {
        startPage = calculateStartPage(currentPage + 1, maxButtonCount, totalPageCount);
        endPage = startPage + maxButtonCount - 1;
    }
    if (startPage > 1) {
        pageButtons.push(<PageButton key={1} text={String(1)} onClick={() => onCurrentPageChange(0)} />);

        if (startPage > 2) {
            pageButtons.push(<PageButton key="ellipsisStart" text={ellipsisSymbol} isDisabled />);
        }
    }

    for (let page = startPage; page <= endPage; page += 1) {
        pageButtons.push(
            <PageButton
                key={page}
                text={String(page)}
                isActive={page === currentPage + 1}
                classes={classMap}
                onClick={() => onCurrentPageChange(page - 1)}
                isDisabled={startPage === endPage}
            />
        );
    }

    if (endPage < totalPageCount) {
        if (endPage < totalPageCount - 1) {
            pageButtons.push(<PageButton key="ellipsisEnd" text={ellipsisSymbol} classes={classMap} isDisabled />);
        }

        pageButtons.push(
            <PageButton
                key={totalPageCount}
                text={String(totalPageCount)}
                classes={classMap}
                onClick={() => onCurrentPageChange(totalPageCount - 1)}
            />
        );
    }

    return pageButtons;
};

export type AppPaginationProps = {
    totalCount: number;
    currentPage: number;
    onCurrentPageChange: (page: number) => void;
    totalPages: number;
    sx?: SxProps;
};

export const AppPagination = ({ totalCount, currentPage, onCurrentPageChange, totalPages, sx }: AppPaginationProps) => (
    <StyledDiv className={classMap.pagination} sx={sx}>
        <AppIconButton
            className={clsx(classMap.arrowButton, classMap.prev)}
            disabled={currentPage === 0}
            onClick={() => currentPage > 0 && onCurrentPageChange(currentPage - 1)}
            aria-label="Previous"
            size="large"
        >
            <ChevronLeftIcon />
        </AppIconButton>
        {renderPageButtons(currentPage, totalPages, onCurrentPageChange)}
        <AppIconButton
            className={clsx(classMap.arrowButton, classMap.next)}
            disabled={currentPage === totalPages - 1 || totalCount === 0}
            onClick={() => currentPage < totalPages - 1 && onCurrentPageChange(currentPage + 1)}
            aria-label="Next"
            size="large"
        >
            <ChevronRightIcon />
        </AppIconButton>
    </StyledDiv>
);
