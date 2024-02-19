import "react-native-gesture-handler";
import { AppRegistry, YellowBox } from "react-native";
import App from "./src/App";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import { name as appName } from "./app.json";

const AppWithStore = () => {
  YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger"]);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWithStore);
