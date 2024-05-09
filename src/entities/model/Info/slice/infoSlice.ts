import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Info, InfoSchema } from "../types/info";
import { getInfo } from "entities/model/Info";

const initialState: InfoSchema = {
  isLoading: false,
  info: {
    creators: [],
    id: null,
    synopsis: null,
    yearsAired: null,
  },
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfoData: (state, action: PayloadAction<Info>) => {
      state.info = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getInfo.fulfilled, (state, action: PayloadAction<Info>) => {
      state.isLoading = false;
      state.info = action.payload;
    });
    builder.addCase(getInfo.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { actions: infoActions, reducer: infoReducer } = infoSlice;
