import { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expense-context';
import { getDateMinusDays } from '../utils/date';
import { fetchExpense } from '../utils/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCxt = useContext(ExpensesContext);

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpense();
      setIsFetching(false);
      expensesCxt.setExpenses(expenses);
    };
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
