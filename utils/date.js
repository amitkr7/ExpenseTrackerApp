export const getFormattedDate = (date) => {
  return `${date.toLocaleString('default', {
    day: '2-digit',
  })}-${date.toLocaleString('default', {
    month: 'short',
  })}-${date.getFullYear()}`;
};
