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

export interface CharactersSchema {
  characters?: Characters[];
  isLoading: boolean;
}
