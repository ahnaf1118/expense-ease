import { createContext, useReducer } from "react";


export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  deleteExpense: (expenseId) => {},
  updateExpense: (expenseId, expenseData) => {},
  setExpenses: (expenses) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex((expense) => {
        return expense.id === action.payload.id;
      });
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = {
        ...updateableExpense,
        ...action.payload.data,
      };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "SET":
      return action.payload.reverse();
      //because data fetched from firebase is in the order in which it is stored like a stack
    default:
      return state;
  }
};

export const ExpenseContextProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expensesReducer, []);
  function addExpense(expnenseData) {
    dispatch({ type: "ADD", payload: expnenseData });
  }
  function deleteExpense(expenseId) {
    dispatch({ type: "DELETE", payload: expenseId });
  }
  function updateExpense(expenseId, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: expenseId, data: expenseData } });
  }
  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  const value = {
    expenses: expenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
    setExpenses: setExpenses,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
