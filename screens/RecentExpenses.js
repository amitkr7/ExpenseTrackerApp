import { useContext, useEffect } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expense-context';
import { getDateMinusDays } from '../utils/date';
import { fetchExpense } from '../utils/http';

const RecentExpenses = () => {
  const expensesCxt = useContext(ExpensesContext);

  useEffect(() => {
    const getExpenses = async () => {
      await fetchExpense();
    };
    getExpenses();
  }, []);

  const recentExpenses = expensesCxt.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='Last 7 days'
      fallbackText='No Expenses added in last 7 days.'
    />
  );
};

export default RecentExpenses;
