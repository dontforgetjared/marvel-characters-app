import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Character {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: [];
}

type CharacterResponse = Character[];

export const marvelApi = createApi({
  reducerPath: 'marvelApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharacterResponse, void>({
      query: () => `characters${import.meta.env.VITE_API_KEY_HASH}`,
      transformResponse: (response: { data: CharacterResponse }) => response.data,
    }),
  }),
});

export const { useGetAllCharactersQuery } = marvelApi;
