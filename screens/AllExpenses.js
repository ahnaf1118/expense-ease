import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import { useState, useEffect } from "react";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { fetchExpenses } from "../util/http";

function AllExpenses() {
  const expenseCtx = useContext(ExpenseContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true);
      const expenses = await fetchExpenses();
      setIsLoading(false);
      expenseCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);
  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput expenses={expenseCtx.expenses} expensesPeriod="Total " />
  );
}

export default AllExpenses;
