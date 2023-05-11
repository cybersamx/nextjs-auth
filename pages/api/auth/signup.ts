import { NextApiRequest, NextApiResponse } from 'next';
import { addUser, getUser } from '@/lib/store';

import { hash } from 'bcrypt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  const found = await getUser(email);

  if (found) {
    res.status(400).send('User already exists');
  } else {
    const user = addUser(email, await hash(password, 10));
    console.log(user);

    res.status(200).json(user);
  }
}
