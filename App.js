import "react-native-gesture-handler";
import RootNavigation from "./src/navigation/RootNavigation";
import { StatusBar, LogBox } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true
  }
});
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

const customTheme = {
  ...AmplifyTheme,
  container: {
    ...AmplifyTheme.container,
    paddingTop: 20
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "#06C167"
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: "#06C16780"
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: "#06C167"
  },
  sectionFooterLinkDisabled: {
    ...AmplifyTheme.sectionFooterLinkDisabled,
    color: "#06C16780"
  }
};

const signUpConfig = {
  header: "Create a new account",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Username",
      key: "username",
      required: true,
      displayOrder: 3,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
    }
  ]
};

export default withAuthenticator(App, { signUpConfig, theme: customTheme });