import { configureStore } from "@reduxjs/toolkit";
import { castReducer } from "entities/model/Cast";
import { infoReducer } from "entities/model/Info";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { StateSchema } from "./types";
import { cahracterReducer, cahractersReducer } from "entities/model/Characters";
import { episodesReducer } from "entities/model/Episodes";
import { inventoryReducer } from "entities/model/Inventory";

export const store = configureStore<StateSchema>({
  reducer: {
    info: infoReducer,
    cast: castReducer,
    characters: cahractersReducer,
    episodes: episodesReducer,
    inventory: inventoryReducer,
    character: cahracterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
