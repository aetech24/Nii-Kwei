"use client"

import { store } from '@/constants/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ProductDetails = ({ params }) => {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  // Find the product based on the ID from the URL
  const product = store.find((p, index) => index.toString() === params.productId);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (product.category === "Clothing" && !selectedSize) {
      alert("Please select a size");
      return;
    }
    // Add cart logic here
    router.push('/cart');
  };

  return (
    <div className="pt-32 px-20">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-gray-500">{product.category}</p>
            <h1 className="text-4xl font-semibold">{product.name}</h1>
            <p className="text-2xl text-purple-500 font-semibold mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Product Description</h2>
            <p className="text-gray-600">
              {product.description || `Experience the comfort and style of our ${product.name}. Perfect for showing your support for the ministry while maintaining a fashionable look.`}
            </p>
          </div>

          {/* Size Selection if it's clothing */}
          {product.category === "Clothing" && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Select Size</h2>
              <div className="flex gap-4">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-4 py-2 rounded-md transition-colors ${
                      selectedSize === size 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-gray-300 hover:border-purple-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Quantity</h2>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => handleQuantityChange('decrease')}
                className="border border-gray-300 px-4 py-2 rounded-md hover:border-purple-500"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('increase')}
                className="border border-gray-300 px-4 py-2 rounded-md hover:border-purple-500"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className="bg-button text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition duration-300 w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 