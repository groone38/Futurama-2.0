import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "entities/api/variabels";

export const getCast = createAsyncThunk(
  "cast/fetchCast",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.castService.getCast();

      if (!data) {
        throw new Error();
      }

      //   thunkAPI.dispatch(infoActions.setInfoData(data[0]));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
