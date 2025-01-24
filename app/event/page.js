import Book from '@/public/BookIcon.png';
import Download from '@/public/Download.png';
import Music from '@/public/MusicIcon.png';
import Hero1 from '@/public/Event1.png';
import Hero2 from '@/public/Event2.png';
import Hero3 from '@/public/Event3.png';
import Hero from '@/public/EventBackground.png';
import Image from 'next/image';
import Gallery from '../about/_component/gallery';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <div className="h-[100vh] flex items-center justify-center w-full">
            <Image src={Hero} alt='hero' className="lg:object-cover object-fill bg-c bg-center relative w-full h-full" />
            <div className='bg-black absolute w-full bg-opacity-20'></div>
            <div className='absolute max-md:mt-10 w-full flex flex-col gap-5 justify-center text-white px-6 lg:px-20'>
              <div className="w-full flex flex-col gap-5 justify-center text-white">
                <p className="lg:text-lg relative pb-1">
                  Welcome to Nii Kwei Ministries
                  <span className="absolute left-0 bottom-0 w-20 h-1 bg-violet-500"></span>
                </p>
                <h1 className='text-4xl lg:text-5xl font-semibold lg:w-[70%] leading-tight'>Experience the Power of Worship and the Word</h1>
                <p className='lg:w-[60%]'>Access sermons, worship sessions, and memorable moments from Nii Kwei Ministry.</p>
              </div>
              <div className="flex max-md:w-full flex-col lg:flex-row items-center lg:gap-6 gap-3">
                <Link href="/store" className='max-md:w-full'>
                  <button className="bg-button w-full border border-button py-2 px-6 text-lg rounded-md hover:bg-purple-600 transition duration-300">
                    Watch Sermon
                  </button>
                </Link>
                <button className="border max-md:w-full border-white py-2 px-6 text-lg rounded-md">View Gallery</button>
              </div>
            </div>
        </div>

      {/*Video Section..........................................................................*/}

      <div className="py-10 px-6 lg:px-20 lg:text-center lg:mt-20">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold">
          Latest Content
          <div className="w-16 h-1 bg-violet-500 lg:mx-auto mt-2 "></div>
        </h2>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <Image
                src={Hero1}
                alt="The Power of Faith"
                className="w-full h-48 object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full w-12 h-12 m-auto">
                ▶
              </button>
              <span className="absolute bottom-2 right-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
                1hr 20mins
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">The Power of Faith</h3>
              <p className="text-gray-600">Sermon</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <Image
                src={Hero2}
                alt="Living With Purpose"
                className="w-full h-48 object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full w-12 h-12 m-auto">
                ▶
              </button>
              <span className="absolute bottom-2 right-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
                1hr 20mins
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Living With Purpose</h3>
              <p className="text-gray-600">Sermon</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <Image
                src={Hero3}
                alt="Praise and Worship Night"
                className="w-full h-48 object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full w-12 h-12 m-auto">
                ▶
              </button>
              <span className="absolute bottom-2 right-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
                1hr 20mins
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                Praise and Worship Night
              </h3>
              <p className="text-gray-600">Worship</p>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-8">
          <button className="bg-button text-white px-6 py-2 rounded-lg hover:bg-teal-600 max-lg:w-full">
            View All
          </button>
        </div>
      </div>

      {/*the Gallery section */}
      <div>
        <Gallery />
      </div>



      {/*THE RESOURCE SECTION*/}


<div className="py-10 px-6 lg:px-20">
  {/* Section Title */}
  <h2 className="text-3xl font-semibold text-gray-800">
    Resources
    <div className="w-16 h-1 bg-violet-500 mt-2"></div>
  </h2>

  {/* Resource Cards */}
  <div className="mt-8 flex flex-col gap-4">
    {/* Resource 1 */}
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 border border-gray-300">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <Image
          src={Book} 
          alt="PDF Icon"
          width={40}
          height={40}
        />
        {/* Text Content */}
        <div>
          <h3 className="text-lg font-semibold">Daily Devotional Guide</h3>
          <p className="text-sm text-gray-500">PDF Guide</p>
        </div>
      </div>
      {/* Download Button */}
      <button>
        <Image
          src={Download} 
          alt="Download Icon"
          width={50}
          height={50}
        />
      </button>
    </div>

    {/* Resource 2 */}
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 border border-gray-300">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <Image
          src={Book} 
          alt="Book Icon"
          width={40}
          height={40}
        />
        {/* Text Content */}
        <div>
          <h3 className="text-lg font-semibold">Sermon Notes: The Power of Faith</h3>
          <p className="text-sm text-gray-500">Study Material</p>
        </div>
      </div>
      {/* Download Button */}
      <button>
        <Image
          src={Download}
          alt="Download Icon"
          width={50}
          height={50}
        />
      </button>
    </div>

    {/* Resource 3 */}
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 border border-gray-300">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <Image
          src={Music} 
          alt="Music Icon"
          width={40}
          height={40}
        />
        {/* Text Content */}
        <div>
          <h3 className="text-lg font-semibold">Worship Album: Live in Accra</h3>
          <p className="text-sm text-gray-500">Audio</p>
        </div>
      </div>
      {/* Download Button */}
      <button>
        <Image
          src={Download}
          alt="Download Icon"
          width={50}
          height={50}
        />
      </button>
    </div>
  </div>
</div>





      
    </div>
  );
}

export default page