import Hero from '@/public/stores/hero.png'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className="max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[90vh] flex items-center justify-center w-full">
        <Image src={Hero} alt='hero' className="bg-cover bg-center relative w-full h-full" />
        <div className='bg-black absolute w-full bg-opacity-20'></div>
        <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 justify-center text-white px-20'>
          <div className="w-full flex flex-col gap-5 justify-center text-white">
            <h1 className='text-5xl font-semibold w-[65%] leading-tight relative'>
              Checkout
              <span className="absolute left-0 bottom-0 w-40 h-1 bg-violet-500"></span>
            </h1>
          </div>
        </div>
      </div>

      <div className="px-20 py-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input type="text" className="w-full border rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input type="text" className="w-full border rounded-lg px-3 py-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <input type="text" className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input type="text" className="w-full border rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Postal Code</label>
                  <input type="text" className="w-full border rounded-lg px-3 py-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Country</label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>Select Country</option>
                  <option>Ghana</option>
                  <option>Nigeria</option>
                  <option>United States</option>
                </select>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center gap-4">
                  <Image src={Hero} alt="Product" className="w-20 h-20 object-cover rounded-md" />
                  <div>
                    <h3 className="font-semibold">Ministry Logo T-Shirt</h3>
                    <p className="text-gray-600">Size: M</p>
                    <p className="text-purple-500">$20.00</p>
                  </div>
                </div>
              </div>
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
              <button className="w-full bg-button text-white py-3 rounded-lg mt-6 hover:bg-purple-600 transition duration-300">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page 