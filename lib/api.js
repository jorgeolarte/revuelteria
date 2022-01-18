const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
  srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String) {
      post(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    },
  );
  return data?.post;
}

export async function getAllRecipesWithSlug() {
  const data = fetchAPI(`
    {
      allRecipes {
        slug
      }
    }
  `);
  return data?.allRecipes;
}

export async function getAllRecipesForHome(preview) {
  const data = await fetchAPI(
    `
    {
      allRecipes(orderBy: createdAt_DESC) {
        id
        title
        slug
        content
        time
      }
    }
  `,
    { preview },
  );
  return data?.allRecipes;
}

export async function getRecipeAndMoreRecipes(slug, preview) {
  const data = await fetchAPI(
    `
  query RecipeBySlug($slug: String) {
    recipe(filter: {slug: {eq: $slug}}) {
        id
        title
        slug
        content
        time
        ingredient {
          id
          name
        }
    }
  }
  `,
    {
      preview,
      variables: {
        slug,
      },
    },
  );
  return data;
}
