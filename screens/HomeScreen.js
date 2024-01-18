import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "./RecentExpenses";
import AllExpenses from "./AllExpenses";
import ManageExpense from "./ManageExpense";
import { GlobalStyles } from "../constants/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconButton from "../components/UI/IconButton";
import { ExpenseContextProvider } from "../store/expense-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    //We can also return an object with arrow function in screenOptions this will enable us to use the props of the component like navigation, route, etc.
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            shape="add"
            size={30}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expeneses",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expeneses",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarLabel: "Recent",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function HomeScreen() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpenseContextProvider>
        <NavigationContainer independent={true}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="Expense Overview"
              component={ExpenseOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ManageExpense" component={ManageExpense} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}
