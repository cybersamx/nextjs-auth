import '@/styles/globals.css';

import * as React from 'react';
import Toaster from '@/components/toaster';
import AuthStatus from '@/components/auth-status';

export default async function RootLayout({ children }: { children: React.ReactNode; }) {
  const AuthStatusDiv = await AuthStatus();

  return (
    <html lang="en">
      <head>
        <title>Next.js Material UI</title>
      </head>
      <body>
        <Toaster />
        {AuthStatusDiv}
        {children}
      </body>
    </html>
  );
}
