import React from "react";
import { SideBar } from "widgets/SideBar";
import { AppRouter } from "./providers/router";

const App = () => {
  return (
    <div>
      <SideBar />
      <AppRouter />
    </div>
  );
};

export default App;
