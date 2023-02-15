// organize-imports-ignore
// do not run organize imports on this file, only save without formatting
// it'll break the dependency tree, for example theme must be defined before all other components

// Import React from consuming application
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// colors
import colors from './theme/colors.module.scss';
export { colors };

window.React = React;
window.ReactDOM = ReactDOM;

// theme
export * from './theme/consts';
export * from './theme/mui';
export * from './theme/UIProvider';

// icons
export * from './icons';

// nested component folders
export * from './components/inputs';
export * from './components/tooltips';
export * from './components/cards';
export * from './components/dialogs';
export * from './components/buttons';
export * from './components/score';
// components
export * from './components/Alert';
export * from './components/BackgroundDots';
export * from './components/ColoredCircle';
export * from './components/ContextMenu';
export * from './components/ErrorText';
export * from './components/FlexibleCollapseContainer';
export * from './components/HalfAndHalfContainer';
export * from './components/HorizontallyScrollableContainer';
export * from './components/loader/Loader';
export * from './components/MultiInputRow';
export * from './components/Pagination';
export * from './components/Placeholder';
export * from './components/ScrollableShadowContainer';
export * from './components/SearchPanelInput';
export * from './components/snackbar';
export * from './components/Splash';
export const TabPanel = () => null;

// Forms
export * from './forms';

// utils
export * from './utils';

// MUI exports
export * from '@mui/material';
//@ts-ignore
export * from '@mui/lab';
//@ts-ignore
export * from '@mui/styles';
//@ts-ignore
export * from '@mui/x-date-pickers';

// React Hook Form exports
//@ts-ignore
export * from 'react-hook-form';
export * from '@hookform/resolvers';
