import { NavBar } from "widgets/NavBar";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
