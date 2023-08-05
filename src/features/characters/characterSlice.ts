import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    active: {},
    profile: false,
  },
  reducers: {
    active: (state, action) => {
      state.active = action.payload;
    },
    profileOpen: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const selectProfile = (state: RootState) => state.character.profile;
export const selectActive = (state: RootState) => state.character.active;

export const { active, profileOpen } = characterSlice.actions;

export default characterSlice.reducer;
