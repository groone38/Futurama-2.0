import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Characters, CharacterSchema } from "../types/characters";
import { getCharacter } from "../services/Characters";

const initialState: CharacterSchema = {
  isLoading: true,
  character: null,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCharacter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getCharacter.fulfilled,
      (state, action: PayloadAction<Characters>) => {
        state.isLoading = false;
        state.character = action.payload;
      }
    );
    builder.addCase(getCharacter.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { actions: cahracterActions, reducer: cahracterReducer } =
  characterSlice;
