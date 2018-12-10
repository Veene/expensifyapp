import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

// const date = new Date();
const now = moment();
console.log(now.format('MMM Do YYYY'));

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: '',
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {
                description: description
            }
        })
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return {
                note: note
            }
        })
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>({ amount }))
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt: createdAt }))
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };
    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            //Set error state = to 'Please provide description and amount'
            this.setState(() => ({ error: 'Please provide description and amount'}))
        } else {
            //Clear the error
            this.setState(() => ({ error: '' }))
            console.log('submitted')
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100, //formatted to remove the .(dots) and make it in cents instead
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error ? <p className="form__error">{this.state.error}</p> : null}
                    <input 
                      type='text'
                      placeholder="Description"
                      autoFocus
                      className="text-input"
                      value={this.state.description}
                      onChange={this.onDescriptionChange}/>
                    <input 
                      type='text'
                      placeholder="Amount"
                      className="text-input"
                      value={this.state.amount}
                      onChange={this.onAmountChange} />

                      <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false} />
                    <textarea 
                      className="textarea"
                      placeholder="Add a note for your expense (optional)"
                      value={this.state.note}
                      onChange={this.onNoteChange}>
                    </textarea>
                    <div>
                        <button className="button">Save Expense</button>
                    </div>
                    
                </form>
        )
    }
}

export default ExpenseForm;