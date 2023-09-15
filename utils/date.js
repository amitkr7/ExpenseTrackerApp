export const getFormattedDate = (date) => {
  return `${date.toLocaleString('default', {
    day: '2-digit',
  })}-${date.toLocaleString('default', {
    month: 'short',
  })}-${date.getFullYear()}`;
};

export const getDateMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
