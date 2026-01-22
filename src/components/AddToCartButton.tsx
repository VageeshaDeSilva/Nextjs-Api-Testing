'use client';
function AddToCartButton({ productId }: { productId: string }) {
  const handleAddToCart = () => {
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm transition-all duration-200 flex items-center gap-2  justify-center"
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-transform duration-200 group-hover:rotate-12"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    </button>
  );
}

export default AddToCartButton;