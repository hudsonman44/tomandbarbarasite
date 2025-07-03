/**
 * This is the main entry point for your Cloudflare Worker.
 *
 * It's configured to work with a static site deployed via Cloudflare Pages.
 * The `env.ASSETS.fetch(request)` line is the key part that serves
 * your `index.html` and any other assets from the 'public' directory.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
export default {
  async fetch(request, env, ctx) {
    // This will pass the request to the static asset handler
    // configured in your wrangler.toml.
    return env.ASSETS.fetch(request);
  },
};
