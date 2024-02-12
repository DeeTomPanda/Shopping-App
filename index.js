import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { name as appName } from "./app.json";

const AppWithStore = () => {
  console.disableYellowBox = true; // Disable YellowBox warnings
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWithStore);
