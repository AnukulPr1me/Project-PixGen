import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import StackNavigator from "./StackNavigator";
import { UserContext } from "./UserContext";
export default function App() {
  return (
    <>
    
      <UserContext>
        <StackNavigator />
      </UserContext>
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
