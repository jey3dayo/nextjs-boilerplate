import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { userState } from '@/atoms/userAtom';

function MyApp() {
  const [user, setUser] = useRecoilState(userState);

  const changeUserName = (): void => {
    const newUser = { name: 'taro', email: 'example.com' };
    setUser(newUser);
  };

  return (
    <div>
      <p>Name: {user?.name ?? 'empty'}</p>
      <button onClick={() => changeUserName()}>[Click me]</button>
    </div>
  );
}

export default function Example() {
  return (
    <RecoilRoot>
      <MyApp />
    </RecoilRoot>
  );
}
