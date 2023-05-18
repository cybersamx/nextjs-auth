import type { ReactNode } from 'react';

import '@/styles/globals.css';
import Providers from './providers';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const providers = await Providers({ children });

  return (
    <html lang="en">
      <body>
        {providers}
      </body>
    </html>
  );
}
