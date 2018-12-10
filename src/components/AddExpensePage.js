import React, {Component} from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/dashboard')
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content_container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content_container">
                    <ExpenseForm
                        onSubmit={this.onSubmit} />
                </div>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);