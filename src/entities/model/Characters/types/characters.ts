export interface Characters {
  name: NameCharacters;
  images: Img;
  gender: string;
  species: string;
  homePlanet: string;
  occupation: string;
  sayings: string[];
  id: number;
  age: number;
}

export interface NameCharacters {
  first: string;
  middle: string;
  last: string;
}

export interface Img {
  "head-shot": string;
  main: string;
}

export interface Schema {
  isLoading: boolean;
}

export interface CharactersSchema extends Schema {
  characters: Record<number, Characters>;
}

export interface CharacterSchema extends Schema {
  character: Characters;
}
