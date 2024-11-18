import { BlogPost } from '../types/BlogPost';

export async function getHashnodePosts(): Promise<BlogPost[]> {
  const response = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          user(username: "${import.meta.env.PUBLIC_HASHNODE_USERNAME}") {
            publication {
              posts(page: 0) {
                title
                brief
                slug
                dateAdded
                coverImage
              }
            }
          }
        }
      `,
    }),
  });

  const data = await response.json();
  return data.data.user.publication.posts;
} 