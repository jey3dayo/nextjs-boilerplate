export const fetcher = async (key: string, init?: RequestInit) =>
  fetch(key, init).then(res => res.json() as Promise<any | null>);
