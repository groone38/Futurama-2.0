import { useAppDispatch, useAppSelector } from "app/providers/store";
import { getEpisodes, getEpisodesState } from "entities/model/Episodes";
import React, { useEffect } from "react";

const EpisodesPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, episodes } = useAppSelector(getEpisodesState);

  useEffect(() => {
    dispatch(getEpisodes());
  }, []);

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

export default EpisodesPage;
