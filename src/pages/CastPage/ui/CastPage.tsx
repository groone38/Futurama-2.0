import { useAppSelector } from "app/providers/store";
import { getCastState } from "entities/model/Cast";

export const CastPage = () => {
  const data = useAppSelector(getCastState);

  return (
    <>
      {data.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.cast.map((item) => <span>{item.name}</span>)
      )}
    </>
  );
};
