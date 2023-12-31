import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useLayoutEffect } from "react";

function Input({ label, inputConfig, style, inValid }) {
  const inputStyle = [styles.input];
  if (inputConfig.multiline) {
    inputStyle.push(styles.multiLineStyle);
  }
  return (
    <View style={[styles.container, style, inValid && styles.errorInput]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyle} {...inputConfig}></TextInput>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: GlobalStyles.colors.primary100,
    // backgroundColor: GlobalStyles.colors.primary50,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    padding: 4,
    borderRadius: 10,
    color: GlobalStyles.colors.primary800,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: GlobalStyles.colors.primary50,
    height: 40,
  },
  multiLineStyle: {
    height: 100,
    textAlignVertical: "top",
  },
  errorInput: {
    borderColor: "red",
  },
});
