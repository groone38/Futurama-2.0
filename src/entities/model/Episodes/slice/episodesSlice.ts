import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Episodes, EpisodesSchema, getEpisodes } from "../";

const initialState: EpisodesSchema = {
  isLoading: false,
};

export const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEpisodes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getEpisodes.fulfilled,
      (state, action: PayloadAction<Episodes[]>) => {
        state.isLoading = false;
        state.episodes = action.payload;
      }
    );
    builder.addCase(getEpisodes.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { actions: episodesActions, reducer: episodesReducer } =
  episodesSlice;
