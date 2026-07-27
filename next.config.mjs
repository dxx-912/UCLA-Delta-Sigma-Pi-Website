/** @type {import('next').NextConfig} */
const nextConfig = {
  // `next dev` and `next build` share `.next/` by default, so running a build
  // while the dev server is up wipes the chunks and manifests it is actively
  // serving — the page then loads with no CSS and 500s on some routes until the
  // server is restarted. `npm run dev` sets NEXT_DIST_DIR=.next-dev to keep the
  // two outputs apart. `build`/`start` deliberately leave it unset so they still
  // use the default `.next` that Vercel expects.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
