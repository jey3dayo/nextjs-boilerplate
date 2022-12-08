import { atom } from 'recoil';

export const isLoadedState = atom<Boolean>({
  key: 'app',
  default: false,
});
