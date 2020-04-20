import uuid from 'uuid';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
  type: 'ADD',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const removeExpense = ({id} = {}) => ({
  type: 'REMOVE',
  id
});

export const editExpense = (id = 0, updates = {}) => ({
  type: 'EDIT',
  id,
  updates
});
