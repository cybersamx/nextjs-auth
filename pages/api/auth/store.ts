interface User {
  id: string;
  email: string;
  password: string;
}

const users = new Map<string, User>([
  [
    'admin@example.com', {
    id: '0',
    email: 'admin@example.com',
    password: '$2b$10$QaQOHd.lVSGO7WDNzpHZY.P2oXyiERolYUL6MYnOUylb1GXy8NDFu'
  },
  ],
]);


function newUID(): string {
  return Math.floor(Date.now() / 1000).toString();
}

async function addUser(email: string, password: string): Promise<User | null> {
  return new Promise<User>((resolve, reject) => {
    const user = {
      id: newUID(),
      email,
      password
    };

    users.set(email, user);

    return resolve(user);
  });
}

function getUser(email: string): Promise<User | null> {
  return new Promise<User | null>((resolve, reject) => {
    const foundUser = users.get(email);

    if (!foundUser) {
      // return reject(new Error(`user ${email} not found`));
      return resolve(null);
    }

    return resolve(foundUser);
  });
}

function getUsers(): Promise<Array<User> | null> {
  return new Promise<Array<User>>((resolve, reject) => {
    return resolve(Array.from(users.values()));
  });
}

export type { User };
export { addUser, getUser, getUsers };
