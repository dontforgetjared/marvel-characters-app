import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CharacterResponse } from './types';
import { BASE_URL } from './constants';

export const marvelApi = createApi({
  reducerPath: 'marvelApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Characters'],
  endpoints: (builder) => ({
    getCharacters: builder.query<CharacterResponse, { limit: number; offset: number; searchTerm: string }>({
      query: ({ limit = 20, offset, searchTerm = '' }) => ({
        url: `characters`,
        params: {
          ts: import.meta.env.VITE_API_TS,
          apikey: import.meta.env.VITE_API_KEY,
          hash: import.meta.env.VITE_API_HASH,
          limit,
          offset,
          ...(searchTerm ? { nameStartsWith: searchTerm } : null),
        },
      }),
      transformResponse: (response: { data: CharacterResponse }) => response.data,
    }),
  }),
});

export const { useGetCharactersQuery } = marvelApi;
