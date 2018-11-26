import moment from 'moment'
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should sort by amount when sortBy is selected for amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date (need to start off with amount to make sure it changes)', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'boob'
    const action = {type: 'SET_TEXT_FILTER', text: text}
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe('boob')
})
test('should set startDate filter', () => {
    const action = {type: 'SET_START_DATE', startDate: moment(100)}
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(moment(100))
})
test('should setup end Date filter', () => {
    const action = { type: 'SET_END_DATE', endDate: moment(10)}
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(moment(10))
})