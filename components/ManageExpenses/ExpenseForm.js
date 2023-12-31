import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({ onCancel, submitButtonLabel, onSubmit, defaultVals }) {
  const [inputData, setInputData] = useState({
    title: { value: defaultVals ? defaultVals.title : "", isValid: true },
    amount: {
      value: defaultVals ? defaultVals.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultVals ? getFormattedDate(defaultVals.date) : "",
      isValid: true,
    },
  });
  function inputChangeHandler(inputIdentifier, inputValue) {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [inputIdentifier]: {
          ...prevInputData[inputIdentifier],
          value: inputValue,
        },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      title: inputData.title.value,
      amount: +inputData.amount.value,
      date: new Date(inputData.date.value),
    };

    const isTitleValid = expenseData.title.trim().length > 0;
    const isAmountValid = expenseData.amount > 0 && !isNaN(expenseData.amount);
    const isDateValid = !isNaN(expenseData.date.getTime());

    setInputData((prevInputData) => {
      return {
        title: {
          value: prevInputData.title.value,
          isValid: isTitleValid,
          inValid: !isTitleValid,
        },
        amount: {
          value: prevInputData.amount.value,
          isValid: isAmountValid,
          inValid: !isAmountValid,
        },
        date: {
          value: prevInputData.date.value,
          isValid: isDateValid,
          inValid: !isDateValid,
        },
      };
    });

    if (!isTitleValid || !isAmountValid || !isDateValid) {
      return;
    }
    onSubmit(expenseData);
  }

  const isFormValid =
    inputData.title.isValid &&
    inputData.amount.isValid &&
    inputData.date.isValid;

  return (
    <View>
      <Input
        label="Title"
        inValid={!inputData.title.isValid}
        inputConfig={{
          multiline: true,
          onChangeText: (input) => {
            inputChangeHandler("title", input);
          },
          value: inputData.title.value,
        }}
      ></Input>
      <View style={styles.container}>
        <Input
          label="Amount"
          inValid={!inputData.amount.isValid}
          inputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (input) => {
              inputChangeHandler("amount", input);
            },
            value: inputData.amount.value,
          }}
          style={{ flex: 1 }}
        ></Input>
        <Input
          label="Date"
          inValid={!inputData.date.isValid}
          inputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (input) => {
              inputChangeHandler("date", input);
            },
            value: inputData.date.value,
          }}
          style={{ flex: 1 }}
        ></Input>
      </View>
      {!isFormValid && (
        <Text style={styles.errorText}>
          Invalid input! Please check your Input
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 10,
    minWidth: 100,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
});
