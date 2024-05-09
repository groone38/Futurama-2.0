import { useAppSelector } from "app/providers/store";
import { getCharactersState } from "entities/model/Characters";

export const CharactersPage = () => {
  const data = useAppSelector(getCharactersState);
  return (
    <>
      {data.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.characters.map((item) => (
          <span>
            {item.name.first} {item.name.middle} {item.name.last}
          </span>
        ))
      )}
    </>
  );
};
