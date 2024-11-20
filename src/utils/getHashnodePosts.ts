import type { BlogPost } from '../types/BlogPost';

interface HashnodeResponse {
  articles: BlogPost[];
  endCursor: string;
  hasNextPage: boolean;
}

export async function getHashnodePosts(cursor = ''): Promise<HashnodeResponse> {
  const query = `
    query GetUserArticles($cursor: String) {
      publication(host: "${import.meta.env.PUBLIC_HASHNODE_HOST}") {
        posts(first: 12, after: $cursor) {
          edges {
            node {
              title
              url
              publishedAt
              readTimeInMinutes
              coverImage {
                url
              }
            }
            cursor
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    }
  `;

  const variables = { cursor: cursor || null };

  try {
    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();
    
    if (data.errors) {
      console.error('Hashnode API Errors:', data.errors);
      return { articles: [], endCursor: '', hasNextPage: false };
    }

    const posts = data.data.publication.posts;
    const lastEdge = posts.edges[posts.edges.length - 1];
    
    return {
      articles: posts.edges.map(({ node }: any) => ({
        title: node.title,
        url: node.url,
        dateAdded: node.publishedAt,
        coverImage: node.coverImage,
        readTimeInMinutes: node.readTimeInMinutes
      })),
      endCursor: lastEdge?.cursor || '',
      hasNextPage: posts.pageInfo.hasNextPage
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { articles: [], endCursor: '', hasNextPage: false };
  }
} 