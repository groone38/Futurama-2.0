import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store/types";

export const getInfoState = (state: StateSchema) => state.info;
// export const test = createSelector()
