import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense: expense
})

export const startAddExpense = (expenseData={}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description='', note='', amount=0, createdAt=0
        } = expenseData;

        const expense = { description, note, amount, createdAt }
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
};

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense( id ));
        });
    };
};
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

// SET_EXPENSES
export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses: expenses
    }
};

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};