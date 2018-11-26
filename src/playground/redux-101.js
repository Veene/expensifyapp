import { createStore } from 'redux';

//action-generators
const incrementCount = ({ incrementBy=1 }={}) => {
    return {
        type: 'INCREMENT', 
        incrementBy
    } 
}
const decrementCount = ({ decrementBy=1 }={}) => ({
    type: 'DECREMENT',
    decrementBy
})
const resetCount = () => ({
    type: 'RESET'
})
const setCount = ({ count }) => ({
    type: 'SET', 
    count
})

//REDUCERS
//1.reducers are pure functions - output determined by input
//2. Never change state or action - dont mutate the state
const reducer = (state={ count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {count : state.count + action.incrementBy}
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {count : state.count - decrementBy}
        case 'RESET':
            return {count : 0}
        case 'SET':
            return {count : action.count}
        default:
            return state
    }
}

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
//Actions -object that gets sent to the store
store.dispatch(incrementCount({incrementBy: 5}));
// unsubscribe(); --> Just run this to stop subscribe similar to how you stop setInterval
store.dispatch(incrementCount());
store.dispatch(resetCount())
store.dispatch(decrementCount({decrementBy: 10}))
store.dispatch(setCount({ count:101 }))

