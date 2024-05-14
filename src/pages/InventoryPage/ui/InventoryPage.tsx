import { useAppDispatch, useAppSelector } from "app/providers/store";
import { getInventory, getInventoryState } from "entities/model/Inventory";
import React, { useEffect } from "react";

const InventoryPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, inventory } = useAppSelector(getInventoryState);

  useEffect(() => {
    dispatch(getInventory());
  }, []);

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

export default InventoryPage;
