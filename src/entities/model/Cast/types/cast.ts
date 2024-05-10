export interface Cast {
  name: string;
  born: string;
  died: string;
  bio: Bio;
  id: number;
}

export interface Bio {
  text: string;
  url: string;
}

export interface CastSchema {
  cast?: Cast[];
  isLoading: boolean;
}
