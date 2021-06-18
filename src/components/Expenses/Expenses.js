import React, {useState}from 'react'
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';


const Expenses = ({ items }) => {

const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    };
    
    const filterExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    


    return (
        <Card className="expenses">
           
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filterExpenses} />
            <ExpensesList items={filterExpenses} />
        </Card>
    );
};

export default Expenses;
