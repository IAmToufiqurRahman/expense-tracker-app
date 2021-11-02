import { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'

import './Expenses.css'

export default function Expenses({ items }) {
  const [selectedYear, setSelectedYear] = useState('2021')

  const yearChangeHandler = year => setSelectedYear(year)

  const showAllExpenses = items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)

  const filteredExpenses = items.filter(expense => expense.date.getFullYear().toString() === selectedYear)

  const showFilteredExpenses = filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)

  const noExpenseMessage = <h2 className='expenses-list__fallback'>Found No Expense</h2>

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={selectedYear} onYearChange={yearChangeHandler} />

      <ExpensesChart expenses={filteredExpenses} />

      {filteredExpenses.length === 0 && noExpenseMessage}

      {selectedYear === 'all' ? showAllExpenses : showFilteredExpenses}
    </Card>
  )
}
