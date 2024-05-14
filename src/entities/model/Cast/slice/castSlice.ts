import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cast, CastSchema } from "../types/cast";
import { getCast } from "../services/getCast";

const initialState: CastSchema = {
  isLoading: false,
  cast: [],
};

export const castSlice = createSlice({
  name: "cast",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCast.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getCast.fulfilled,
      (state, action: PayloadAction<Cast[]>) => {
        state.isLoading = false;
        state.cast = action.payload;
      }
    );
    builder.addCase(getCast.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { actions: castActions, reducer: castReducer } = castSlice;
