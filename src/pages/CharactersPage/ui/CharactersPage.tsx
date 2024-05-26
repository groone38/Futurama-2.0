import { useAppDispatch, useAppSelector } from "app/providers/store";
import { getCharacters, getCharactersState } from "entities/model/Characters";
import { CardCharacter } from "entities/ui/Card";
import { useEffect, useState } from "react";
import cls from "./CharactersPage.module.scss";
import { Link } from "react-router-dom";
import { Search } from "features/ui";
import { useDebounce } from "shared/lib/hooks/hooks";

const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, characters } = useAppSelector(getCharactersState);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  const searchDebouns = useDebounce(search, 800);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Search search={search} setSearch={setSearch} />
          <div className={cls.page}>
            {Object.entries(characters)
              .filter((item) => {
                const fullName = `${item[1].name.first} ${item[1].name.middle} ${item[1].name.last}`;
                return searchDebouns.toLocaleLowerCase() === ""
                  ? item
                  : fullName.toLocaleLowerCase().includes(searchDebouns);
              })
              .map((item) => (
                <Link key={item[1].id} to={`/characters/${item[0]}`}>
                  <CardCharacter character={item[1]} />
                </Link>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default CharactersPage;
