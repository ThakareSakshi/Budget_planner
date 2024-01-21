import React from 'react'
import { useContext } from 'react'
import budgetContext from './BudgetContext'
import ExpenseItem from './expenseItem'

const Expenses = () => {
    const ctx=useContext(budgetContext)

  return (
    <div>
      <h1 className='text-2xl font-semibold'>Expenses</h1>
      {
       ctx.expenseList.length!=0? ctx.expenseList.map((item)=> <ExpenseItem {...item}/>):<h1 className='text-2xl m-4 text-gray-600'>no expense added..</h1>
      }
      
    </div>
  )
}

export default Expenses
