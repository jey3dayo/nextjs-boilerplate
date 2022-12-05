import type { NextApiRequest, NextApiResponse } from 'next';
import { sleep } from 'src/lib/sleep';

type Data = {
  name: string;
};

const init = async (_: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log('data loading');
  await sleep(2000);
  console.log('done');
  res.status(200).json({ name: 'John Doe' });
};

export default init;
