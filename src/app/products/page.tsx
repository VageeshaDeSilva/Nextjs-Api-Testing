import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";

export default async function page({params}: {params: any}) {
  const products = await getProducts();

  return (
    <div>
      {/* <h1>Products</h1>
      <p>Welcome to the products page</p> */}
      {/* <ProductDetails /> */}
      {/* {map.keys(params).length === 0 ? (
        <p>No product selected.</p>
      ) : (
        <ProductDetails productId={params.id} />
      )} */}
      <ProductGrid products={products} />
    </div>
  );
}
