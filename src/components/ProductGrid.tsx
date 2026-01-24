import { Product,getProducts } from '@/lib/api';
import { get } from 'http';
import Link from 'next/link';
import AddToCartButton from './AddToCartButton';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white-800">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            // className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <Link href={`/products/${product.id}`} key={product.id} className="block">
            <div
            key={product.id}
            className="bg-secondary rounded-t-lg hover:rounded-b-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:scale-[1.02]"
            >
            {product.image && (
              <div className="w-full h-64 bg-primary flex items-center justify-center p-4 transition-all duration-300 group-hover:bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {product.name}
              </h3>
              {product.category && (
                <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full mb-2">
                  {product.category}
                </span>
              )}
              {product.description && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
              )}
              {product.price && (
                <p className="text-2xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </p>
              )} 
            </div>
          </div>
          </Link>
          <div className="p-4 pt-0 bg-secondary rounded-b-lg shadow-md">
              <AddToCartButton productId={product.id.toString()} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}