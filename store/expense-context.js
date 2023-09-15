import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Books',
    amount: 50,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'Vegetables',
    amount: 40,
    date: new Date('2022-10-09'),
  },
  {
    id: 'e3',
    description: 'FRUITS',
    amount: 40,
    date: new Date('2023-10-09'),
  },
  {
    id: 'e4',
    description: 'CLOTHES',
    amount: 49,
    date: new Date('2023-02-08'),
  },
  {
    id: 'e5',
    description: 'SHOES',
    amount: 70,
    date: new Date('2022-12-12'),
  },
  {
    id: 'e6',
    description: 'Vegetables',
    amount: 40,
    date: new Date('2022-10-09'),
  },
  {
    id: 'e7',
    description: 'FRUITS',
    amount: 40,
    date: new Date('2023-10-09'),
  },
  {
    id: 'e8',
    description: 'CLOTHES',
    amount: 49,
    date: new Date('2023-02-08'),
  },
  {
    id: 'e9',
    description: 'SHOES',
    amount: 70,
    date: new Date('2022-12-12'),
  },
  {
    id: 'e10',
    description: 'SHOES',
    amount: 70,
    date: new Date('2022-12-12'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseindex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseindex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseindex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: 'ADD', payload: expenseData });
  };
  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: 'UPDATE', payload: { id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
