import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id,
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[2] ])
})
test('should not remove expense if id was not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1',
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
test('should edit expense by id', () => {
    const amountChange = 101
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount: amountChange
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amountChange)
})
test('should not edit expense if expense not found', () => {
    const amountChange = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
        amount: amountChange
        } 
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
test('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})
test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
})