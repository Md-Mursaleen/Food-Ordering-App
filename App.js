import "react-native-gesture-handler";
import RootNavigation from "./src/navigation/RootNavigation";
import { StatusBar, LogBox } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

LogBox.ignoreAllLogs();

function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("white");
  }, []);
  return (
    <>
      <RootNavigation />
      <StatusBar barStyle="light-content" backgroundColor="black" hidden={false} translucent={true} />
    </>
  );
}

export default App;