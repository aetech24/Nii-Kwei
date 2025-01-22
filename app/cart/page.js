import Hero from '@/public/stores/hero.png'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className="max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[90vh] flex items-center justify-center w-full">
            <Image src={Hero} alt='hero' className="bg-cover bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 justify-center text-white px-20'>
              <div className="w-full flex flex-col gap-5 justify-center text-white">
                <h1 className='text-5xl font-semibold w-[65%] leading-tight relative'>
                  Shopping Cart
                  <span className="absolute left-0 bottom-0 w-40 h-1 bg-violet-500"></span>
                </h1>
              </div>
            </div>
        </div>

        <div className="px-20 py-10">
          <div className="flex flex-col gap-6">
            {/* Cart Items */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
              <div className="divide-y">
                {/* Sample Cart Item - This will be mapped over actual cart items */}
                <div className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image src={Hero} alt="Product" className="w-20 h-20 object-cover rounded-md" />
                    <div>
                      <h3 className="font-semibold">Ministry Logo T-Shirt</h3>
                      <p className="text-gray-600">Size: M</p>
                      <p className="text-purple-500">$20.00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button className="border px-2 py-1 rounded">-</button>
                      <span>1</span>
                      <button className="border px-2 py-1 rounded">+</button>
                    </div>
                    <button className="text-red-500">Remove</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$20.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$25.00</span>
                  </div>
                </div>
              </div>
              <Link href="/checkout">
                <button className="w-full bg-button text-white py-3 rounded-lg mt-6 hover:bg-purple-600 transition duration-300">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page