import React from 'react';

const ProductCard = ({ product, onAddToCart, isInCart, cartQuantity }) => {
  const { name, description, price, image, inStock, featured } = product;

  // Placeholder image if product image doesn't exist
  const imageUrl = image || 'https://via.placeholder.com/300x300/10B981/FFFFFF?text=' + encodeURIComponent(name);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 sm:h-56 bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300/10B981/FFFFFF?text=' + encodeURIComponent(name);
          }}
        />
        {featured && (
          <span className="absolute top-2 left-2 bg-pao-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </span>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-pao-green-600">
            ${price}
          </span>

          {inStock ? (
            <button
              onClick={() => onAddToCart(product)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isInCart
                  ? 'bg-pao-green-100 text-pao-green-700 hover:bg-pao-green-200'
                  : 'bg-pao-blue-600 text-white hover:bg-pao-blue-700'
              }`}
            >
              {isInCart ? (
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>In Cart ({cartQuantity})</span>
                </span>
              ) : (
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Add to Cart</span>
                </span>
              )}
            </button>
          ) : (
            <button disabled className="px-4 py-2 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed">
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;