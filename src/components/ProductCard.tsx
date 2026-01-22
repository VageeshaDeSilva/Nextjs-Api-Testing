import Link from 'next/link';
import { Product } from '@/lib/api';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      href={`/products/${product.id}`}
      className="block border rounded-lg p-4 hover:shadow-lg transition-shadow"
    >
      {product.image && (
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded mb-3"
        />
      )}
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-xl font-bold text-blue-600">
        ${product.price.toFixed(2)}
      </p>
    </Link>
  );
}