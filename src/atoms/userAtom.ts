import { atom } from 'recoil';

export const userState = atom<User | null | undefined>({
  key: 'user',
  default: {
    name: null,
    email: null,
  },
});
