import React from 'react';
import { View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

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
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;
