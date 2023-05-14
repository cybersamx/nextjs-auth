// These styles apply to every route in the application
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

import React from 'react';
import Toaster from '@/components/toaster';
import AuthStatus from '@/components/auth-status';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const AuthStatusDiv = await AuthStatus();

  return (
    <html lang="en">
      <body>
        <Toaster />
        {AuthStatusDiv}
        {children}
      </body>
    </html>
  );
}
