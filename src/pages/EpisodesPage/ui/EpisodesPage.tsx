import { useAppSelector } from "app/providers/store";
import { getEpisodesState } from "entities/model/Episodes";
import React from "react";

export const EpisodesPage = () => {
  const { isLoading, episodes } = useAppSelector(getEpisodesState);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        episodes.map((item) => <span>{item.title}</span>)
      )}
    </>
  );
};
