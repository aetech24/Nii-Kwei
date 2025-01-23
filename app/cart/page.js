import Hero from '@/public/stores/hero.png'
import Image from 'next/image'
import Link from 'next/link'
import { FiPhoneCall } from "react-icons/fi";


const page = () => {
  return (
    <div>
      <div className="max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[60vh] flex items-center justify-center w-full">
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
      <div className="w-full px-20 relative -top-20 flex flex-col gap-6">
        <div className="flex flex-col gap-8 border p-6 shadow-md bg-white rounded-md">
          {/* Product List */}
          <div className="flex flex-col gap-6">
            {/* T-Shirt */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded bg-gray-100">
                <Image
                  src=""
                  alt="Black T-shirt"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Mighty Logo T-Shirt</h3>
                <p className="text-sm text-gray-500">Size M, Color Black</p>
                <div className="mt-1 flex items-center gap-2">
                  <button className="h-6 w-6 border p-2 rounded flex items-center">
                    -
                  </button>
                  <span className="min-w-8 text-center">1</span>
                  <button className="h-6 w-6 border p-2 rounded flex items-center">
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$29</p>
                <button className="text-sm text-gray-500 hover:text-gray-700">Remove</button>
              </div>
            </div>
            <hr />
            {/* Mug */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded bg-gray-100">
                <Image
                  src=""
                  alt="White Mug"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Inspirational Mug</h3>
                <p className="text-sm text-gray-500">Color White</p>
                <div className="mt-1 flex items-center gap-2">
                  <button className="h-6 w-6 border p-2 rounded flex items-center">
                    -
                  </button>
                  <span className="min-w-8 text-center">1</span>
                  <button className="h-6 w-6 border p-2 rounded flex items-center">
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$20</p>
                <button className="text-sm text-gray-500 hover:text-gray-700">Remove</button>
              </div>
            </div>
          </div>

          {/* Promo Code */}
          <div className="flex items-center gap-2">
            <input type="text" placeholder="Enter promo code" className="max-w-[240px] border p-3 rounded-md" />
            <button className="border p-3 rounded-md">Apply</button>
          </div>
        </div>
        <div className="p-6 border rounded-md bg-white shadow-md flex flex-col gap-6">
            <h2 className="font-semibold text-2xl">Order Summary</h2>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <span className="text-gray-500 text-lg">Subtotal</span>
                <span>$49</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-lg">Shipping</span>
                <span>$5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-lg">Tax</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-medium">
                <span className='text-xl font-semibold'>Total</span>
                <span className='text-xl font-semibold'>$54</span>
              </div>
            </div>
          <Link href="/checkout">
            <div className="flex items-center gap-6">
              <div className='flex border p-3 rounded border-button'>
                <FiPhoneCall className='text-2xl text-button'/>
              </div>
              <button className="w-full bg-button p-3 rounded-md text-white">Checkout</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page;