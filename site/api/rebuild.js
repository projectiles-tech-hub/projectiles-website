// Vercel Cron Job (see vercel.json): every morning, asks Vercel to rebuild the site so new YouTube videos appear.
// Settings (Vercel environment variables): DEPLOY_HOOK_URL (a Deploy Hook for the main branch) and CRON_SECRET.
export async function GET(request) {
  const env = process.env;
  if (!env.CRON_SECRET || request.headers.get('authorization') !== `Bearer ${env.CRON_SECRET}`) {
    return new Response('Not allowed', { status: 401 });
  }
  if (!env.DEPLOY_HOOK_URL) return new Response('DEPLOY_HOOK_URL is not set', { status: 500 });
  const res = await fetch(env.DEPLOY_HOOK_URL, { method: 'POST' });
  return new Response(res.ok ? 'Rebuild started' : `Deploy hook failed: ${res.status}`, { status: res.ok ? 200 : 502 });
}
