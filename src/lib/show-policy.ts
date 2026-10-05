export const MAX_EPISODE_MINUTES = 45;
export const MAX_EPISODE_MS = MAX_EPISODE_MINUTES * 60 * 1000;
export function remainingEpisodeMs(startedAt: Date, now = new Date()): number {
  return Math.max(0, MAX_EPISODE_MS - (now.getTime() - startedAt.getTime()));
}
export function episodeMustEnd(startedAt: Date, now = new Date()): boolean {
  return remainingEpisodeMs(startedAt, now) === 0;
}
