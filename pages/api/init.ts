import type { NextApiRequest, NextApiResponse } from 'next';
import { sleep } from '@/lib/sleep';

type Response = {
  user: User;
};

const init = async (_: NextApiRequest, res: NextApiResponse<Response>) => {
  console.log('data loading');
  await sleep(3000);
  console.log('done');
  res.status(200).json({
    user: {
      email: 'example@example.com',
      name: 'John Doe',
    },
  });
};

export default init;
