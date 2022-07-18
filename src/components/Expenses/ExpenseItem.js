import React from "react";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
import "./ExpenseItem.css";

export const ExpenseItem = (props = {}) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={props.expenseDate} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
