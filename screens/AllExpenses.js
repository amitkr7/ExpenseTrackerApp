import React, { useContext } from 'react';
import { Text } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expense-context';

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod='Last 7 days'
      fallbackText='No expenses found'
    />
  );
};

export default AllExpenses;
