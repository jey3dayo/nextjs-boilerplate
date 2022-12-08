import { ReactNode } from 'react';
import { SWRConfig } from 'swr';
import { fetcher } from '@/lib/fetcher';

export default function SwrProvider({ children }: { children: ReactNode }) {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
}
