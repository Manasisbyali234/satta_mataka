export type LiveResult = {
  name: string;
  result: string;
  openTime: string;
  closeTime: string;
};

export async function fetchLiveResults(): Promise<LiveResult[]> {
  const res = await fetch('https://proxy-server1-gamma.vercel.app/api/results');
  const data = await res.json();
  if (!data.success) throw new Error(data.error);
  return data.results;
}
