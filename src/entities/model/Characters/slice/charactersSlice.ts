import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Characters, CharactersSchema } from "../types/characters";
import { getCharacters } from "../services/getCharacters";

const initialState: CharactersSchema = {
  isLoading: false,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCharacters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getCharacters.fulfilled,
      (state, action: PayloadAction<Characters[]>) => {
        state.isLoading = false;
        state.characters = action.payload;
      }
    );
    builder.addCase(getCharacters.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { actions: cahractersActions, reducer: cahractersReducer } =
  charactersSlice;
