export async function fetcher(key: string, init?: RequestInit) {
  return fetch(key, init).then(res => res.json() as Promise<any | null>);
}
