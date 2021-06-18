import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState(" ");
    const [enteredAmount, setEnteredAmount] = useState(" ");
    const [enteredDate, setEnteredDate] = useState(" ");

    const titleChangeHandeler = (event) => {
        console.log(event.target.value)
        setEnteredTitle(event.target.value)
    };
    const amountChangeHandeler = (event) => {
        console.log(event.target.value)
        setEnteredAmount(event.target.value)
    };
    const dateChangeHandeler = (event) => {
        console.log(event.target.value)
        setEnteredDate(event.target.value)
    };

    const SubmitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

return (
         <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                <input
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandeler}
                />
                </div>
                <div className="new-expense__controls">
                    <label>Amout</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={enteredAmount}
                    onChange={amountChangeHandeler} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                <input
                    type="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandeler} />
                </div>
            </div>
            <div className="new-expenses-actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    );
};

export default ExpenseForm;
