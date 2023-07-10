import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CharacterResponse } from './types';

export const marvelApi = createApi({
  reducerPath: 'marvelApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  tagTypes: ['Characters'],
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharacterResponse, void>({
      query: () => `characters${import.meta.env.VITE_API_KEY_HASH}`,
      transformResponse: (response: { data: CharacterResponse }) => response.data,
    }),
  }),
});

export const { useGetAllCharactersQuery } = marvelApi;
