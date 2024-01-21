import logo from './logo.svg';
import './App.css';
import ContextProvider from './components/contextProvider';
import BudgetDetails from './components/BudgetDetails';
import Expenses from './components/Expenses';
import AddExpense from './components/AddExpense';

function App() {
  return (
    <div className="App px-4">
        <ContextProvider>
          <h1 className='text-4xl p-3 bg-gray-200 mb-3 font-semibold'>MY BUDEGET PLANNER</h1>
          <BudgetDetails/>
          <Expenses/>
          <AddExpense/>
        </ContextProvider>
        
    </div>

  );
}

export default App;
