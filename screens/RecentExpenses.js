import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect } from "react";
import { ExpenseContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { useState } from "react";

function RecentExpenses() {
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

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date > date7daysAgo;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days " />
  );
}

export default RecentExpenses;
