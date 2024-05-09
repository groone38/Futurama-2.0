export interface Info {
  synopsis: string | null;
  yearsAired: string | null;
  creators: [] | Creators[];
  id: number | null;
}

export interface Creators {
  name: string;
  url: string;
}

export interface InfoSchema {
  info?: Info;
  isLoading: boolean;
}
