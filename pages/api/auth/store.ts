interface User {
  email: string;
  password: string;
}

const users = new Map<string, User>([
  [
    'admin@example.com', {
      email: 'admin@example.com',
      password: '$2b$10$QaQOHd.lVSGO7WDNzpHZY.P2oXyiERolYUL6MYnOUylb1GXy8NDFu'
    },
  ],
]);

function addUser(email: string, password: string): User | null {
  const user = {email, password};
  users.set(email, user);

  return user;
}

function getUser(email: string): User | null {
  const foundUser = users.get(email);
  if (!foundUser) {
    return null;
  }

  return foundUser;
}

export type { User };
export { addUser, getUser };
