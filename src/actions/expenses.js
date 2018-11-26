import uuid from 'uuid';

//ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE
export const addExpense = ({ description='', note='', amount=0, createdAt=0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})