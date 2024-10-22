export async function shopLoader() {
  const url = "https://fakestoreapi.com/products";
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Something went wrong with fetching Products");
    }

    const data = await res.json();
    return { data };
  } catch (error) {
    throw new Response("Error loading products", {
      status: 500,
      statusText: error.message,
    });
  }
}
