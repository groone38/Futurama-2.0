import { CastPage } from "pages/CastPage";
import { CharactersPage } from "pages/CharactersPage";
import { EpisodesPage } from "pages/EpisodesPage";
import { InfoPage } from "pages/InfoPage";
import { InventoryPage } from "pages/InventoryPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRouters {
  MAIN = "main",
  INFO = "info",
  CHARACTERS = "characters",
  CAST = "cast",
  EPISODES = "episodes",
  INVENTORY = "inventory",
}

export const RoutePath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: "/",
  [AppRouters.CAST]: "/cast",
  [AppRouters.CHARACTERS]: "/characters",
  [AppRouters.EPISODES]: "/episodes",
  [AppRouters.INFO]: "/info",
  [AppRouters.INVENTORY]: "/inventory",
};

export const routeConfig: Record<AppRouters, RouteProps> = {
  [AppRouters.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRouters.CAST]: {
    path: RoutePath.cast,
    element: <CastPage />,
  },
  [AppRouters.CHARACTERS]: {
    path: RoutePath.characters,
    element: <CharactersPage />,
  },
  [AppRouters.EPISODES]: {
    path: RoutePath.episodes,
    element: <EpisodesPage />,
  },
  [AppRouters.INFO]: {
    path: RoutePath.info,
    element: <InfoPage />,
  },
  [AppRouters.INVENTORY]: {
    path: RoutePath.inventory,
    element: <InventoryPage />,
  },
};
