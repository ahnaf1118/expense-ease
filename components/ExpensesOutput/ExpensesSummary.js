import { View, Text,StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ expenses, expensesPeriod }) {
  const expensesSum = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{expensesPeriod}</Text>
      <Text style={styles.sum}>$ {expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles= StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: GlobalStyles.colors.primary100,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  period:{
    fontSize: 18,
    color: GlobalStyles.colors.primary800,
  },
  sum:{
    fontSize: 20,
    color: GlobalStyles.colors.primary800,
    fontWeight: 'bold',
  }
});