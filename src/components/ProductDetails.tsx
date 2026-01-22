import { getProducts } from '../lib/api';
import ErrorMsg from './ErrorMsg';

export default async function ProductDetails() {
  try {
    const products = await getProducts();
    
    return (
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>Products</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {products.map(product => (
            <div 
              key={product.id} 
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '16px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s'
              }}
            >
              {product.image && (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: '200px', objectFit: 'contain', marginBottom: '12px' }}
                />
              )}
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>{product.name}</h3>
              {product.price && <p style={{ fontSize: '20px', color: '#2563eb', fontWeight: 'bold' }}>${product.price}</p>}
              {product.category && <span style={{ fontSize: '12px', color: '#666', textTransform: 'capitalize' }}>{product.category}</span>}
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <ErrorMsg error={error as Error} />;
  }
}