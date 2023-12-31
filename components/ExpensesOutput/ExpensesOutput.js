import { View,StyleSheet,Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";



function ExpensesOutput({ expenses, expensesPeriod }) {
  let content = <Text style={styles.nothingText}>No expenses found</Text>;
  if(expenses.length > 0){
    content = <ExpensesList expenses={expenses}/>
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;


const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  nothingText:{
    fontSize: 20,
    color: GlobalStyles.colors.primary800,
    textAlign: 'center',
    marginTop: 20,
  }
});
