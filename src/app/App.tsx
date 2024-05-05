import React from "react";
import { NavBar } from "widgets/NavBar";
import { AppRouter } from "./providers/router";

const App = () => {
  return (
    <div>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
