import type { BlogPost } from '../types/BlogPost';

export async function getHashnodePosts(): Promise<BlogPost[]> {
  const username = import.meta.env.PUBLIC_HASHNODE_USERNAME;
  
  if (!username) {
    console.error('PUBLIC_HASHNODE_USERNAME environment variable is not set');
    return [];
  }

  try {
    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetUserArticles($username: String!) {
            user(username: $username) {
              posts(page: 1, pageSize: 10) {
                nodes {
                  title
                  brief
                  slug
                  publishedAt
                  coverImage {
                    url
                  }
                  url
                  readTimeInMinutes
                }
                pageInfo {
                  hasNextPage
                  nextPage
                }
              }
            }
          }
        `,
        variables: {
          username
        }
      }),
    });

    const json = await response.json();
    
    if (!json.data?.user?.posts?.nodes) {
      console.error('Invalid response structure:', json);
      return [];
    }

    return json.data.user.posts.nodes.map(
      (node: any) => ({
        title: node.title,
        brief: node.brief,
        slug: node.slug,
        dateAdded: node.publishedAt,
        coverImage: node.coverImage?.url,
        url: node.url,
        readTimeInMinutes: node.readTimeInMinutes
      })
    );
  } catch (error) {
    console.error('Error fetching Hashnode posts:', error);
    return [];
  }
} 