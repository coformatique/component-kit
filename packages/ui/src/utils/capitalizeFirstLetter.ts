export const capitalizeFirstLetter = (name: string) =>
  name
    .split('')
    .map((el, i) => (i === 0 ? el.toUpperCase() : el.match(/[A-Z]/) ? ` ${el.toLocaleLowerCase()}` : el))
    .join('');
