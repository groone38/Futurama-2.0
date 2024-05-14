import { useAppDispatch, useAppSelector } from "app/providers/store";
import { getCharacters, getCharactersState } from "entities/model/Characters";
import { useEffect } from "react";

const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, characters } = useAppSelector(getCharactersState);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        characters.map((item) => (
          <span>
            {item.name.first} {item.name.middle} {item.name.last}
          </span>
        ))
      )}
    </>
  );
};

export default CharactersPage;
