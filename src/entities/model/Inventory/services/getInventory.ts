import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "entities/api/variabels";

export const getInventory = createAsyncThunk(
  "inventory/fetchInventory",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.inventoryService.getEpisodes();

      if (!data) {
        throw new Error();
      }

      //   thunkAPI.dispatch(CharactersActions.setCharactersData(data[0]));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
