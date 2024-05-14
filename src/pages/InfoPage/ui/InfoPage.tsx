import { useAppDispatch, useAppSelector } from "app/providers/store";
import { getInfo, getInfoState } from "entities/model/Info";

import { useEffect } from "react";

const InfoPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, info } = useAppSelector(getInfoState);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  return <>{isLoading ? <h1>Loading...</h1> : <span>{info.synopsis}</span>}</>;
};

export default InfoPage;
