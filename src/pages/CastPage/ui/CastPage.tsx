import { useAppDispatch, useAppSelector } from "app/providers/store";
import { getCast, getCastState } from "entities/model/Cast";
import { useEffect } from "react";

const CastPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, cast } = useAppSelector(getCastState);

  useEffect(() => {
    dispatch(getCast());
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        cast.map((item) => <span>{item.name}</span>)
      )}
    </>
  );
};

export default CastPage;
