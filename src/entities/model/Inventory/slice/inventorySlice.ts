import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Inventory, InventorySchema, getInventory } from "../";

const initialState: InventorySchema = {
  isLoading: false,
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getInventory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getInventory.fulfilled,
      (state, action: PayloadAction<Inventory[]>) => {
        state.isLoading = false;
        state.inventory = action.payload;
      }
    );
    builder.addCase(getInventory.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { actions: inventoryActions, reducer: inventoryReducer } =
  inventorySlice;
