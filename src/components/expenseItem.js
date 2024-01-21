import React from 'react'
import { useContext } from 'react'
import budgetContext from './BudgetContext'



const ExpenseItem = (props) => {

  const ctx=useContext(budgetContext)
  const ondelete=()=>{
    const list=ctx.expenseList.filter((item)=>(item.name!=props.name || item.cost!=props.cost) )
    ctx.setExpenseList(list);
    ctx.setRemaining((prev)=>prev+parseInt(props.cost));
    ctx.setSpent((prev)=>prev-parseInt(props.cost))
  }
  return (
    <div className='flex p-2 w-2/3 justify-between shadow m-2'>
    <div>{props.name}</div>
    <div>Rs. {props.cost} <button className='p-2' onClick={ondelete}>x</button></div>
    
    </div>
  )
}

export default ExpenseItem
