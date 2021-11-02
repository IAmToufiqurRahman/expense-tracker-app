import { useState } from 'react'

import './ExpenseForm.css'

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value)
  }

  const amountChangeHandler = e => {
    setEnteredAmount(e.target.value)
  }

  const dateChangeHandler = e => {
    setEnteredDate(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, // Unary plus convert any other type to number
      date: new Date(enteredDate)
    }

    props.onAddExpense(expenseData) // This is passing the expense data to the NewExpense component

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  const disableValue = enteredTitle && enteredAmount && enteredDate

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input onChange={titleChangeHandler} type='text' value={enteredTitle} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input onChange={amountChangeHandler} type='number' value={enteredAmount} min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input onChange={dateChangeHandler} type='date' value={enteredDate} min='2019-01-01' max='2023-12-31' />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!disableValue} type='submit'>
          Add Expense
        </button>
      </div>
    </form>
  )
}
