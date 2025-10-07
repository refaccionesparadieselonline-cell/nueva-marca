const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
const token  = process.env.NEXT_PUBLIC_STOREFRONT_TOKEN;

// Cliente mínimo para Storefront GraphQL
export async function sfy(query, variables = {}) {
  const res = await fetch(`https://${domain}/api/2024-07/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 120 }, // cache 2 min (ajústalo)
  });

  if (!res.ok) {
    throw new Error(`Storefront error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(`Storefront GraphQL: ${JSON.stringify(json.errors)}`);
  }
  return json.data;
}
