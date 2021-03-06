import React from 'react';
import Card from '../UI/Card';
import "./ExpenseItem.css";
import ExpensesDate from './ExpensesDate';
const ExpenseItem = ({ title, amount, date }) => {
    

return (
     <li>
        <Card className="expense-item">
            <ExpensesDate  date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    {amount}
                </div>
            </div>
         </Card>
      </li>
    );
};

export default ExpenseItem;

