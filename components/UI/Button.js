import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({ style, children, onPress, mode }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View
          style={[
            styles.buttonContainer,
            mode === "flat" && styles.flatContainer,
          ]}
        >
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  flatContainer: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: GlobalStyles.colors.primary800,
    fontSize: 18,
  },
  flatText: {
    color: GlobalStyles.colors.primary50,
  },
  pressed: {
    opacity: 0.8,
  },
});
