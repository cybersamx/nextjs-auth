import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';

import { getUser } from './store';

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {},
      // @ts-ignore
      async authorize(credentials: Record<never, string>, _) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) {
          throw new Error('Missing username or password');
        }

        const user = await getUser(email);

        if (!user || !(await compare(password, user.password))) {
          throw new Error('Invalid email or password');
        }

        return user;
      },
    }),
  ],

  session: { strategy: 'jwt' },
});
