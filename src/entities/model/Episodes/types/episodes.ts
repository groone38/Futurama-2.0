export interface Episodes {
  number: string;
  title: string;
  writers: string;
  originalAirDate: string;
  desc: string;
  id: number;
}

export interface EpisodesSchema {
  isLoading: boolean;
  episodes?: Episodes[];
}
