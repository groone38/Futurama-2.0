import { useAppDispatch, useAppSelector } from "app/providers/store";
import axios from "axios";
import { getInfo } from "entities/Info";

import { infoService } from "entities/api/variabels";
import React, { useEffect } from "react";

export const InfoPage = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.info);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  // console.log(data);
  return (
    <>
      {data.isLoading ? <h1>Loading...</h1> : <span>{data.info.synopsis}</span>}
    </>
  );
};
