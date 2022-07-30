import React, { useState } from "react";
import { Card } from "../UI/Card";
import { ExpensesList } from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import { ExpensesChart } from "./ExpensesChart";
import "./Expenses.css";

export const Expenses = (props = {}) => {
  const [pickedYear, setPickedYear] = useState("2020");

  const onYearChange = (year) => {
    setPickedYear(year);
  };

  const filteredExpenses = props.expenseList.filter(
    (expense) => expense.date.getFullYear().toString() === pickedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={onYearChange} defaultYear={pickedYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
