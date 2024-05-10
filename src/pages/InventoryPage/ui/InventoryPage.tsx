import { useAppSelector } from "app/providers/store";
import { getInventoryState } from "entities/model/Inventory";
import React from "react";

export const InventoryPage = () => {
  const { isLoading, inventory } = useAppSelector(getInventoryState);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        inventory.map((item) => <span>{item.title}</span>)
      )}
    </>
  );
};
