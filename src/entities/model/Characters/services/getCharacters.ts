import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "entities/api/variabels";

export const getCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.charactersService.getCharacters();

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
