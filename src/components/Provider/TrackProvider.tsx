import { ReactNode } from 'react';

// TODO: GTM, Sentry, Datadog
export default function TrackProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
