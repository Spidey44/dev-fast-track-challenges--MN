import React, { useState } from "react"
import './ExpenseForm.css'


const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredTDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    };
    return <form>
        <div>
            <div className="new-expense__controls">
                <div className="new-expense__control"></div>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control"></div>
                <label>Amoiunt</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control"></div>
                <label>Date</label>
                <input type="date" min="2023-01-01" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit"> Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm
