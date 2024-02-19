import React from "react";

import { Main } from "./components/Main";
import { TailwindProvider } from "tailwind-rn";
import { PaperProvider } from "react-native-paper";
import utilities from "../tailwind.json";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </TailwindProvider>
  );
}

export default App;
