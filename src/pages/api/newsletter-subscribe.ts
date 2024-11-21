import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  console.log('Newsletter subscription request received');

  try {
    const data = await request.json();
    const { email } = data;
    
    console.log('Email received:', email);

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('Email validation failed');
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Please provide a valid email address' 
        }), 
        { status: 400 }
      );
    }

    // Log environment variables (sanitized)
    console.log('Publication ID available:', !!import.meta.env.PUBLIC_HASHNODE_PUBLICATION_ID);
    console.log('Access Token available:', !!import.meta.env.HASHNODE_ACCESS_TOKEN);

    // Hashnode Newsletter Subscription Mutation
    const mutation = `
      mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {
        subscribeToNewsletter(input: $input) {
          status
        }
      }
    `;

    const variables = {
      input: {
        publicationId: import.meta.env.PUBLIC_HASHNODE_PUBLICATION_ID,
        email
      }
    };

    console.log('Sending request to Hashnode...');

    // Make request to Hashnode API
    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': import.meta.env.HASHNODE_ACCESS_TOKEN
      },
      body: JSON.stringify({ query: mutation, variables })
    });

    const result = await response.json();
    console.log('Hashnode API response:', result);

    if (result.errors) {
      console.error('Hashnode API Errors:', result.errors);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Failed to subscribe. Please try again later.' 
        }), 
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Almost there! Please check your email and click the confirmation link to complete your subscription.' 
      }), 
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'An unexpected error occurred' 
      }), 
      { status: 500 }
    );
  }
}; 