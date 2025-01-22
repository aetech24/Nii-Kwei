import { store } from '@/constants/store';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProducts = () => {
  // Get first 3 products from the store
  const featuredProducts = store.slice(0, 3);

  return (
    <div className='py-10'>
      <h2 className="text-3xl font-semibold relative pb-1 mb-6">
        Featured Products
        <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
      </h2>
      <div className='grid grid-cols-3 gap-10'>
        {featuredProducts.map((item, id) => (
          <Link href={`/store/${id}`} key={id}>
            <div className='flex flex-col gap-2 shadow-xl pb-4 rounded-md transition duration-300 hover:shadow-2xl'>
              <Image src={item.image} alt={item.name} className='rounded-t-md'/>
              <div className='flex flex-col gap-1 px-4'>
                <p>{item.category}</p>
                <p className='text-xl font-semibold'>{item.name}</p>
                <p className='text-purple-500 text-medium'>${item.price.toFixed(2)}</p>
              </div>
              <button className='border border-button py-2 rounded-md text-button mx-4 hover:bg-button hover:text-white transition duration-300'>
                View Details
              </button>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/store">
          <button className="bg-button text-white py-3 px-8 rounded-lg hover:bg-purple-600 transition duration-300">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts; 