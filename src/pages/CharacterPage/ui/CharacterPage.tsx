import { useParams } from "react-router-dom";
import cls from "./CharacterPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch, useAppSelector } from "app/providers/store";
import { getCharacter, getCharacterState } from "entities/model/Characters";
import { memo, useEffect } from "react";

interface ICharacterPage {
  className?: string;
}

const CharacterPage = memo(({ className }: ICharacterPage) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, character } = useAppSelector(getCharacterState);

  useEffect(() => {
    dispatch(getCharacter(id));
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={classNames(cls.CharacterPage, {}, [className])}>
          <img src={character.images.main} alt={character.name.first} />
          <div className={cls.text}>
            <span>
              <b>Name: </b>
              {character.name.first} {character.name.middle}{" "}
              {character.name.last}
            </span>
            <p>
              <b>Occupation: </b>
              {character.occupation}
            </p>
            <span>
              <b>Home Planet: </b> {character.homePlanet}
            </span>
            <span>
              <b>Species: </b> {character.species}
            </span>
            <div>
              <b>Sayings: </b>
              {character.sayings.map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default CharacterPage;
