import { ListItem, ListItemButton, ListItemButtonProps, ListItemIcon, ListItemText, styled } from '@mui/material';
import { CSSProperties, ReactNode } from 'react';
import { AddMenuListIcon, CheckIcon } from '../../../icons';
import colors from '../../../theme/colors';
import { AppCheckbox } from '../AppCheckbox';

export const ITEM_SIZE = 42;

const calculateBoldParts = (text: string, searchTerm: string) => {
  let textTemp = text.slice();
  const parts = [];
  const regex = new RegExp(searchTerm, 'i');

  while (true) {
    const matchIndex = textTemp.search(regex);
    if (matchIndex === -1) break;

    matchIndex > 0 && parts.push({ text: textTemp.slice(0, matchIndex), bold: false });
    parts.push({ text: textTemp.slice(matchIndex, matchIndex + searchTerm.length), bold: true });
    textTemp = textTemp.slice(matchIndex + searchTerm.length);
  }
  textTemp.length && parts.push({ text: textTemp, bold: false });
  return parts;
};

export const renderText = (text: string, searchTerm: string | undefined) => {
  if (!searchTerm) return text;
  const searchParts = calculateBoldParts(text, searchTerm);
  return <>{searchParts.map(({ text, bold }) => (bold ? <b>{text}</b> : text))}</>;
};

export const StyledListItem = styled(ListItem)({
  height: ITEM_SIZE,
  overflow: 'hidden',
});

export const StyledListItemButton = styled(ListItemButton)({
  whiteSpace: 'nowrap',
  paddingTop: 0,
  paddingBottom: 0,
  height: ITEM_SIZE,
  '&:hover': { background: colors.ultraLightBlue },
});

export const StyledListItemApplyButton = styled(StyledListItemButton)({
  backgroundColor: colors.blue,
  color: 'white',
  justifyContent: 'center',
  // marginTop: theme.spacing(2),
  '&:hover': { backgroundColor: 'black' },
});

export const StyledListItemText = styled(ListItemText)({
  '&>span': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: 'calc(100%)',
    whiteSpace: 'nowrap',
  },
  '&.blue': { color: colors.blue },
});

export const FreeSoloListItem = ({ handleToggle, searchTerm }: any) => (
  <StyledListItemButton dense onClick={() => handleToggle({ id: 0, name: searchTerm })}>
    <ListItemIcon>
      <AddMenuListIcon sx={{ mr: 2 }} />
    </ListItemIcon>
    <StyledListItemText>Add “{searchTerm}”</StyledListItemText>
  </StyledListItemButton>
);

export const ListItemMulti = ({
  checked,
  onClick,
  text,
  style,
  labelId,
}: {
  onClick: ListItemButtonProps['onClick'];
  checked: boolean;
  text: ReactNode;
  style?: CSSProperties;
  labelId: string;
}) => (
  <StyledListItemButton dense onClick={onClick} style={style}>
    <ListItemIcon>
      <AppCheckbox
        edge="start"
        checked={checked}
        tabIndex={-1}
        disableRipple
        color="primary"
        size="small"
        inputProps={{ 'aria-labelledby': labelId }}
      />
    </ListItemIcon>
    <StyledListItemText id={labelId}>{text}</StyledListItemText>
  </StyledListItemButton>
);

export const ListItemSingle = ({
  checked,
  onClick,
  text,
  style,
  labelId,
}: {
  onClick: ListItemButtonProps['onClick'];
  checked: boolean;
  text: ReactNode;
  style?: CSSProperties;
  labelId: string;
}) => (
  <StyledListItemButton dense onClick={onClick} style={style}>
    <StyledListItemText id={labelId} className={checked ? 'blue' : undefined}>
      {text}
    </StyledListItemText>
    {checked && (
      <ListItemIcon>
        <CheckIcon color="primary" />
      </ListItemIcon>
    )}
  </StyledListItemButton>
);
