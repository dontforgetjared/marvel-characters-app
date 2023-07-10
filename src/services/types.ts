export type CharacterURLs = {
  type: string;
  url: string;
};

export type Character = {
  comics: object;
  description: string;
  events: object;
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: object;
  stories: object;
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
