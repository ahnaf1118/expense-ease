import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, title, date, amount }) {
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate("ManageExpense", { id: id });
  }
  return (
    <Pressable
      onPress={onPressHandler}
      style={({ pressed }) => pressed && styles.expensePressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.dateText}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 8,
    backgroundColor: GlobalStyles.colors.primary800,
    borderRadius: 10,
    elevation: 5,
    shadowColor: GlobalStyles.colors.primary100,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  infoContainer: {},
  titleText: {
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary50,
  },
  dateText: {
    padding: 5,
    fontSize: 14,
    color: GlobalStyles.colors.primary50,
  },
  amountContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary50,
    minWidth: 100,
    padding: 10,
    borderRadius: 10,
  },
  amountText: {
    fontSize: 18,
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  expensePressed: {
    opacity: 0.8,
  },
});
