import React from 'react'
import { useContext } from 'react'
import budgetContext from './BudgetContext'

const BudgetDetails = () => {

    const ctx=useContext(budgetContext)
  return (
    <div className='flex  w-full justify-around'>
      <h2 className='p-2 text-green-950 bg-gray-400 text-xl rounded-md px-3 font-medium'>Budget:Rs. {ctx.budget} </h2>
      <h2 className='p-2 text-green-950 bg-gray-400 text-xl rounded-md px-3 font-medium'>Remaining :Rs. {ctx.remaining} </h2>
      <h2 className='p-2 text-green-950 bg-gray-400 text-xl rounded-md px-3 font-medium'>Spend So Far: Rs. {ctx.spent}</h2>
    </div>
  )
}

export default BudgetDetails
