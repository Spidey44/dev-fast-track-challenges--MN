import { useState } from 'react';
import Card from '../UI/Card.js';
import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';

//function ExpenseItem(props) 
const ExpenseItem = (props) => {
    //function clickHandler(){}
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("updated!");
        console.log(title)
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Chang Title</button>
        </Card>
    );
}

export default ExpenseItem;