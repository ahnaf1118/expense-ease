import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  const expenseData = itemData.item;
  return (
    <ExpenseItem
      id={expenseData.id}
      title={expenseData.title}
      date={expenseData.date}
      amount={expenseData.amount}
    />
  );
}
function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
