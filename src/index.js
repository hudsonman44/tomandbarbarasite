/**
 * This is the final, self-contained worker script.
 *
 * It imports the HTML file from the 'public' directory as a text string.
 * This removes the need for the `env.ASSETS` binding and makes the worker
 * more robust, resolving the 1101 error.
 */

// Import the HTML file as a raw text string.
import landingPageHtml from '../public/index.html';

export default {
  /**
   * The main fetch handler for the worker.
   * @param {Request} request The incoming request.
   * @param {object} env The environment bindings.
   * @param {object} ctx The execution context.
   * @returns {Promise<Response>} A response object.
   */
  async fetch(request, env, ctx) {
    // Return a new Response object with the imported HTML.
    // We must set the 'Content-Type' header to 'text/html' so the browser
    // knows how to render it.
    return new Response(landingPageHtml, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
    });
  },
};
