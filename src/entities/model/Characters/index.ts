export {
  Characters,
  NameCharacters,
  Img,
  CharactersSchema,
  CharacterSchema,
} from "./types/characters";
export { getCharacters, getCharacter } from "./services/Characters";
export { cahractersActions, cahractersReducer } from "./slice/charactersSlice";
export { cahracterActions, cahracterReducer } from "./slice/characterSlice";
export {
  getCharactersState,
  getCharacterState,
} from "./selectors/CharactersState";
