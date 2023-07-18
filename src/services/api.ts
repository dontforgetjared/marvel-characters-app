import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CharacterResponse } from './types';

export const marvelApi = createApi({
  reducerPath: 'marvelApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  tagTypes: ['Characters'],
  endpoints: (builder) => ({
    getCharacters: builder.query<CharacterResponse, { offset: number; searchTerm: string }>({
      query: ({ offset, searchTerm = '' }) => ({
        url: `characters`,
        params: {
          ts: import.meta.env.VITE_API_TS,
          apikey: import.meta.env.VITE_API_KEY,
          hash: import.meta.env.VITE_API_HASH,
          offset,
          ...(searchTerm ? { nameStartsWith: searchTerm } : null),
        },
      }),
      transformResponse: (response: { data: CharacterResponse }) => response.data,
    }),
  }),
});

export const { useGetCharactersQuery } = marvelApi;
