"use client"

import { store } from '@/constants/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Hero from '@/public/stores/hero.png'
import { FaStar } from 'react-icons/fa';


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
    <div className="w-full">
      <div className="max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[60vh] flex items-center justify-center w-full">
        <Image src={Hero} alt='hero' className="bg-cover bg-center relative w-full h-full" />
        <div className='bg-black absolute w-full bg-opacity-20'></div>
        <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 justify-center text-white px-20'>
          <h1 className="text-3xl font-semibold relative pb-1">
              Product Details
              <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6 relative -top-28 bg-white border rounded-md">
      <div className="flex flex-col gap-8">
        {/* Product Images */}
        <div className="flex items-center gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col w-[265px] gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-md overflow-hidden">
                <Image
                  src={product.image}
                  alt={`Thumbnail ${i}`}
                  width={700}
                  height={500}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt="Product Image"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6 w-full">
          <div>
            <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-gray-500">(7 reviews)</span>
            </div>
            <div className="text-xl font-semibold">${product.price.toFixed(2)}</div>
          </div>

          {/* Size Selection */}
          {product.category === "Clothing" && (
          <div className='w-full'>
            <label className="block text-sm font-medium mb-2">Select Size</label>
            <div className="flex items-center gap-2">
              {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
                <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border px-4 py-2 rounded-md transition-colors ${
                  selectedSize === size 
                    ? 'border-purple-500 bg-purple-500 text-white font-semibold' 
                    : 'border-gray-300 hover:border-purple-500'
                }`}
              >
                  {size}
                </button>
              ))}
            </div>
          </div>
          )}

          {/* Color Selection */}
          <div className='w-full'>
            <label className="block text-sm font-medium mb-2">Select Color</label>
            <div className="flex gap-2">
              {["Black", "White", "Navy"].map((color) => (
                <button
                  key={color}
                  className="px-4 py-2 border rounded hover:border-black focus:border-black focus:outline-none"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center gap-2 w-fit border rounded">
            <button 
                onClick={() => handleQuantityChange('decrease')}
                className="border border-gray-300 px-4 py-2 rounded-md hover:border-purple-500"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('increase')}
                className="border border-gray-300 px-4 py-2 rounded-md hover:border-purple-500"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart} className="w-full bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-md">Add to Cart</button>

          {/* Delivery Info */}
          <div className="space-y-4 pt-4 w-full">
            <div>
              <h3 className="font-medium">Free delivery</h3>
              <p className="text-sm text-gray-500">For orders over $50</p>
            </div>
            <div>
              <h3 className="font-medium">Easy Returns</h3>
              <p className="text-sm text-gray-500">60 day return window</p>
            </div>
            <div>
              <h3 className="font-medium">Secure Checkout</h3>
              <p className="text-sm text-gray-500">SSL/TLS encryption enabled</p>
            </div>
          </div>

          <hr />

          {/* Product Details */}
          <div>
            <h2 className="font-medium mb-2">Product Details</h2>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Premium quality 100% cotton</li>
              <li>Pre-shrunk fabric</li>
              <li>Double-stitched seams</li>
              <li>Regular unisex fit</li>
              <li>Machine washable</li>
              <li>High-quality print that won't fade</li>
            </ul>
          </div>

          {/* Size & Fit */}
          <div>
            <h2 className="font-medium mb-2">Size & Fit</h2>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Regular fit</li>
              <li>True to size</li>
              <li>Model is 6'0" wearing size M</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails; 