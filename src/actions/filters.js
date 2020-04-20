export const setTextFilter = (text = '') => ({
  type: 'TEXT',
  text
});

export const setSortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

export const setSortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const setStartDate = (date = undefined) => ({
  type: 'START_DATE',
  date
});

export const setEndDate = (date = undefined) => ({
  type: 'END_DATE',
  date
});
