import type { ReactNode } from 'react';

import Toaster from '@/components/toaster';
import AuthStatus from '@/components/auth-status';

export default async function Providers({ children }: { children: ReactNode }) {
  const AuthStatusDiv = await AuthStatus();

  return (
    <>
      <Toaster />
      {AuthStatusDiv}
      {children}
    </>
  );
}

