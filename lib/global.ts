export interface User {
  id: string;
  email: string;
  password: string;
}

declare global {
  var users: Map<string, User> | undefined;
}

export const users = global.users || new Map<string, User>([
  [
    'admin@example.com', {
    id: '0',
    email: 'admin@example.com',
    password: '$2b$10$QaQOHd.lVSGO7WDNzpHZY.P2oXyiERolYUL6MYnOUylb1GXy8NDFu'
  },
  ],
]);

if (process.env.NODE_ENV === 'development') {
  global.users = users;
}
