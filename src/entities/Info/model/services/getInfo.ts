import { createAsyncThunk } from "@reduxjs/toolkit";
import { infoService } from "entities/api/variabels";
import { infoActions } from "../slice/infoSlice";

export const getInfo = createAsyncThunk(
  "info/fetchInfo",
  async (_, thunkAPI) => {
    try {
      const { data } = await infoService.getInfo();

      if (!data) {
        throw new Error();
      }

      //   thunkAPI.dispatch(infoActions.setInfoData(data[0]));

      return data[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
