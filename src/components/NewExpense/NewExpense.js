import { useState } from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

export default function NewExpense(props) {
  const [addExpense, setAddExpense] = useState(false)

  const addNewExpense = data => {
    const newExpense = {
      ...data,
      id: Math.random().toString()
    }

    props.onAddNewExpense(newExpense) // This is passing the new expense to the App component

    setAddExpense(false)
  }

  const startAddExpense = () => setAddExpense(true)

  const cancelAddExpense = () => setAddExpense(false)

  return (
    <div className='new-expense'>
      {!addExpense && <button onClick={startAddExpense}>Add New Expense</button>}

      {addExpense && <ExpenseForm onAddExpense={addNewExpense} onCancel={cancelAddExpense} />}
    </div>
  )
}
