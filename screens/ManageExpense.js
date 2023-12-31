import { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";
import { useState } from "react";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.id;
  //? here is used to check of the params exist or not
  const isEditing = !!expenseId;
  //!! here is used to convert the value to boolean
  const [isLoading, setIsLoading] = useState(false);

  const expenseCtx = useContext(ExpenseContext);
  const updatedExpense = expenseCtx.expenses.find(
    (expense) => expense.id === expenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsLoading(true);
    await deleteExpense(expenseId);
    // setIsLoading(false);
    expenseCtx.deleteExpense(expenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  async function saveExpenseHandler(expenseData) {
    setIsLoading(true);
    if (isEditing) {
      expenseCtx.updateExpense(expenseId, expenseData);
      await updateExpense(expenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expenseCtx.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={saveExpenseHandler}
        defaultVals={updatedExpense}
      />
      {isEditing && (
        <View style={styles.binContainer}>
          <IconButton
            shape="trash"
            size={30}
            color="red"
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  binContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 10,
    elevation: 5,
    shadowColor: GlobalStyles.colors.primary100,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    marginHorizontal: 20,
  },
});
