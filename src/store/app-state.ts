import {atom} from 'recoil';

export const favouritesState = atom<number[]>({
  key: 'FavouritesState',
  default: [],
});
