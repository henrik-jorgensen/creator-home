import type { APIRoute } from 'astro';
import { getHashnodePosts } from '../../utils/getHashnodePosts';

export const GET: APIRoute = async ({ url }) => {
  try {
    const cursor = url.searchParams.get('cursor') || '';
    const data = await getHashnodePosts(cursor);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('API route error:', error);
    return new Response(JSON.stringify({ error: 'Failed to load posts' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 