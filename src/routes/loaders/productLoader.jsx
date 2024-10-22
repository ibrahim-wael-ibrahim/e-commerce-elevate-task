export async function productLoader({ params }) {
  const { productId } = params;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

    if (!res.ok) {
      throw new Error("Failed to fetch product details");
    }

    const product = await res.json();

    return { product };
  } catch (error) {
    throw new Response("Error loading product", {
      status: 500,
      statusText: error.message,
    });
  }
}
