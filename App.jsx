import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <Toast/>
      <Navigation/>
      <StatusBar style="dark" backgroundColor="#FEBD00"/>
    </SafeAreaProvider>
  );
}
