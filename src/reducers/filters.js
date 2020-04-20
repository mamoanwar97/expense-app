import moment from 'moment';

const filterReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filterReducerDefault, action) => {
  switch (action.type) {
    case 'TEXT':
      return {...state, text: action.text};
    case 'SORT_BY_AMOUNT':
      return {...state, sortBy: 'amount'};
    case 'SORT_BY_DATE':
      return {...state, sortBy: 'date'};
    case 'START_DATE':
      return {...state, startDate: action.date};
    case 'END_DATE':
      return {...state, endDate: action.date};
    default:
      return state;
  }
};
