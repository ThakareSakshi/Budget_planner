import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import budgetContext from "./BudgetContext";

const AddExpense = () => {
  const ctx = useContext(budgetContext);
  const nameRef = useRef();
  const costRef = useRef();

  const AddItemToList = (e) => {

    e.preventDefault();

    ctx.setExpenseList([
      ...ctx.expenseList,
      { name: nameRef.current.value, cost: costRef.current.value },
    ]);

    ctx.setRemaining((prev) => prev - costRef.current.value);
    ctx.setSpent((prev) => prev + parseInt(costRef.current.value));

  };

  return (
    <div>
      <h1 className='text-2xl font-semibold'>Add Expense</h1>
      <form onSubmit={AddItemToList}>
        <input
          type="text"
          placeholder="name"
          ref={nameRef}
          className="shadow-sm p-2 border-2 border-solid border-gray-700 m-2 w-2/5 rounded-md"
          required
        />
        <input
          type="number"
          placeholder="cost"
          ref={costRef}
          className="shadow-sm p-2 border-2 border-solid border-gray-700 m-2 w-2/5 rounded-md"
          required
        />
        <button type="submit" className="p-2 rounded-md bg-gray-700 text-white font-medium px-3 ">
          save
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
