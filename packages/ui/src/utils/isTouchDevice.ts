export const isTouchDevice = () =>
  'ontouchstart' in window ||
  navigator.maxTouchPoints > 0 ||
  // @ts-ignore microsoft max points for IE10 support
  navigator.msMaxTouchPoints > 0;
