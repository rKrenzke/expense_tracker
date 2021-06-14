import { useState } from "react";
import "./Expense.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExp = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expense">
        <ExpensesFilter
          onFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExp}/>
        <ExpensesList items={filteredExp}/>
      </Card>
    </div>
  );
};

export default Expense;
