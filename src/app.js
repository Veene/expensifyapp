import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';




const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill', amount: 4500,createdAt:1001 }))
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }))
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }))
// console.log(store.getState())


const state = store.getState()
const visibileExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibileExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        //just logged in
        console.log('logged in');
    } else {
        console.log('logged out');
    }
});







