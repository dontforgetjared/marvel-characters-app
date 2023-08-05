export type CharacterURLs = {
  type: string;
  url: string;
};

export type Character = {
  comics: {
    available: number;
    items: {
      name: string;
    }[];
  };
  description: string;
  events: object;
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: {
    available: number;
    items: {
      name: string;
    }[];
  };
  stories: {
    available: number;
    items: {
      name: string;
    }[];
  };
  thumbnail: {
    path: string;
    extension: string;
  };
  urls: CharacterURLs[];
};

export type CharacterResponse = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
};
