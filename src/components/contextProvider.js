import React, { useState } from 'react'
import { useContext } from 'react'
import budgetContext from './BudgetContext'

const ContextProvider = (props) => {

    const [budget,setBudget]=useState(2000)
    const [remaining,setRemaining]=useState(2000)
    const [spent,setSpent]=useState(0)
    const [expenseList,setExpenseList]=useState([]);

    const data={
        budget,
        setBudget,
        remaining,
        setRemaining,
        spent,
        setSpent,
        expenseList,
        setExpenseList
    }

  return (
    <budgetContext.Provider value={data}>
         {props.children}
    </budgetContext.Provider>
  )
}

export default ContextProvider
