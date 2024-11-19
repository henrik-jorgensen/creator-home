import type { BlogPost } from '../types/BlogPost';

export async function getHashnodePosts(): Promise<BlogPost[]> {
  const query = `
    query Publication {
      publication(host: "${import.meta.env.PUBLIC_HASHNODE_HOST}") {
        posts(first: 12) {
          edges {
            node {
              title
              brief
              url
              publishedAt
              readTimeInMinutes
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    
    if (data.errors) {
      console.error('Hashnode API Errors:', data.errors);
      return [];
    }

    return data.data.publication.posts.edges.map(({ node }: any) => ({
      title: node.title,
      brief: node.brief,
      url: node.url,
      dateAdded: node.publishedAt,
      coverImage: node.coverImage,
      readTimeInMinutes: node.readTimeInMinutes
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
} 