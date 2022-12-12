import type { NextApiRequest, NextApiResponse } from 'next';

type Report = {
  id: number;
  name: string;
  score: number;
  description?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Report[]>) {
  res.status(200).json([
    { id: 1, name: 'A', score: 50 },
    { id: 2, name: 'B', score: 60 },
    { id: 2, name: 'C', score: 70 },
    { id: 3, name: 'D', score: 80, description: 'note' },
  ]);
}
