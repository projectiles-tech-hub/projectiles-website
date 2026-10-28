// Reads the latest videos from the company's YouTube channel when the site is built.
// No key or password is needed: YouTube publishes a public list of each channel's newest videos.
// If YouTube cannot be reached, pages show a "watch on YouTube" message instead.
import { company } from '../config/company';

export type Video = { id: string; title: string; date: string; topic: string };

const topicOf = (title: string) => {
  const t = title.toLowerCase();
  if (/estate|plot|primrose|land|title/.test(t)) return 'Estates';
  if (/cement|block|sand|dredg|truck|haulage|logistic|deliver/.test(t)) return 'Supply';
  if (/build|construct|site|road|project|handover|foundation|roof/.test(t)) return 'Construction';
  return 'Company';
};

const decode = (s: string) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

let cache: Promise<Video[]> | null = null;

export function getVideos(): Promise<Video[]> {
  if (process.env.NO_YOUTUBE && !process.env.SAMPLES) return Promise.resolve([]);
  cache ??= (async () => {
    try {
      // SAMPLES=1 uses a saved sample list, for checking the video layouts without YouTube.
      const xml = process.env.SAMPLES
        ? await (await import('node:fs/promises')).readFile('samples/youtube-feed.xml', 'utf8')
        : await (async () => {
            const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${company.youtube.channelId}`;
            const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
            if (!res.ok) throw new Error(`YouTube feed: ${res.status}`);
            return res.text();
          })();
      return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(([, e]) => {
        const id = /<yt:videoId>([^<]+)</.exec(e)?.[1] ?? '';
        const title = decode(/<title>([^<]*)</.exec(e)?.[1] ?? '');
        const date = /<published>([^<]+)</.exec(e)?.[1] ?? '';
        return { id, title, date, topic: topicOf(title) };
      }).filter((v) => v.id);
    } catch (err) {
      console.warn(`[videos] Could not read the YouTube channel (${(err as Error).message}). Showing the YouTube link instead.`);
      return [];
    }
  })();
  return cache;
}
