const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.expense];
    case 'REMOVE':
      return state.filter((expense) => {
        return expense.id !== action.id;
      })
    case 'EDIT':
      return state.map((expense) => {
        if(expense.id === action.id)
          return {...expense, ...action.updates};
        return {...expense}
      })
    default:
      return state;
  }
};

export default expensesReducer;
