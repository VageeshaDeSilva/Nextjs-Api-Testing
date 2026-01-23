import { notFound } from 'next/navigation';
import { getProduct, getAllProductIds } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import AddToCartButton from '@/components/AddToCartButton';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

// SSR with ISR (Incremental Static Regeneration)
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);
  // console.log(product?.image);
  

  if (!product) {
    notFound(); // Shows 404 page
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/products"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-md active:scale-95 font-medium mb-6 transition-all duration-200 group"
      >
        <svg 
          className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}     
        
        {product.image && (                        
          <div>
            <Image
              src={product.image} 
              alt={`${product.name}`}
              className="rounded-lg shadow-lg object-contain "
            //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width={500}
                height={500}
              priority
            />
          </div>
        )}

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-blue-600 mb-6">
            ${product.price.toFixed(2)}
          </p>
          
          {product.description && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700 text-yellow-700">{product.description}</p>
            </div>
          )}
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </div>
  );
}

// Generate metadata dynamically for SEO
// export async function generateMetadata({ params }: ProductPageProps) {
//   const { id } = await params;
//   const product = await getProduct(id);
  
//   if (!product) return { title: 'Product Not Found' };

//   return {
//     title: `${product.name} | Your Store`,
//     description: product.description || `Buy ${product.name} for $${product.price}`,
//   };
// }

// Optional: Pre-generate popular products at build time
// export async function generateStaticParams() {
//   const ids = await getAllProductIds();
  
//   // Generate only first 100 products at build time
//   // Others will be generated on-demand (ISR)
//   return ids.slice(0, 100).map((id) => ({
//     id: id,
//   }));
// }

