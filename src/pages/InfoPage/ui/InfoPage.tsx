import { useAppDispatch, useAppSelector } from "app/providers/store";
import { getInfo, getInfoState } from "entities/model/Info";

import { useEffect } from "react";

export const InfoPage = () => {
  const data = useAppSelector(getInfoState);

  return (
    <>
      {data.isLoading ? <h1>Loading...</h1> : <span>{data.info.synopsis}</span>}
    </>
  );
};
