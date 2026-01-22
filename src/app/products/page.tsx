import ErrorMsg from "@/components/ErrorMsg";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";

export default async function page({params}: {params: any}) {
  
  try {
    const products = await getProducts();
    return <ProductGrid products={products} />
  } catch (error) {
    return <ErrorMsg error={error as Error} />;
  }
  
}
