import {useState} from 'react';
import Expense from './components/Expense'
import NewExpense from './components/NewExpense/NewExpense';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Beer for the weekend',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Wood for catapult',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Water balloons',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {

  const [expenses, setExpenses] = useState(dummy_expenses)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
