import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation/>
      <StatusBar style="dark" backgroundColor="#FEBD00"/>
    </SafeAreaProvider>
  );
}
