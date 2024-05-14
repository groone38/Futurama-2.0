import React, { useEffect } from "react";
import { NavBar } from "widgets/NavBar";
import { AppRouter } from "./providers/router";
import { useAppDispatch } from "./providers/store";
import { getInfo } from "entities/model/Info";
import { getCast } from "entities/model/Cast";
import { getCharacters } from "entities/model/Characters";
import { getEpisodes } from "entities/model/Episodes";
import { getInventory } from "entities/model/Inventory";
import "./styles/index.scss";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInfo());
    dispatch(getCast());
    dispatch(getCharacters());
    dispatch(getEpisodes());
    dispatch(getInventory());
  }, []);

  return (
    <div className="app">
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
