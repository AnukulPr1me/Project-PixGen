import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <>    
      <StackNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
