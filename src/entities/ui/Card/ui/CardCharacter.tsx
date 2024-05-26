import { Characters } from "entities/model/Characters";
import cls from "./CardCharacter.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ICardCharacter {
  className?: string;
  character: Characters;
}

export const CardCharacter = ({ className, character }: ICardCharacter) => {
  return (
    <div className={classNames(cls.Card, {}, [className])}>
      <img src={character.images.main} alt={character.name.first} />
      <div className={cls.text}>
        <span>
          <b>Name: </b>
          {character.name.first} {character.name.middle} {character.name.last}
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
      </div>
    </div>
  );
};
