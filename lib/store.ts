import { User, users } from './global';

function newUID(): string {
  return Math.floor(Date.now() / 1000).toString();
}

export async function addUser(email: string, password: string): Promise<User | null> {
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

export async function getUser(email: string): Promise<User | null> {
  return new Promise<User | null>((resolve, reject) => {
    const foundUser = users.get(email);

    if (!foundUser) {
      return resolve(null);
    }

    return resolve(foundUser);
  });
}

export async function getUsers(): Promise<Array<User> | null> {
  return new Promise<Array<User>>((resolve, reject) => {
    return resolve(Array.from(users.values()));
  });
}
