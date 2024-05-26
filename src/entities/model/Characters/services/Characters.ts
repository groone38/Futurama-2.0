import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "entities/api/variabels";
import { Characters } from "../types/characters";

export const getCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.charactersService.getCharacters();

      const characters: Record<number, Characters> = {};

      data.forEach((item) => {
        characters[item.id] = { ...item };
      });

      if (!data) {
        throw new Error();
      }

      return characters;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCharacter = createAsyncThunk(
  "character/fetchCharacter",
  async (id: string, thunkAPI) => {
    try {
      const { data } = await api.charactersService.getCharacter(id);

      if (!data) {
        throw new Error();
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
