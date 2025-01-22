import Book from '@/public/BookIcon.png';
import Download from '@/public/Download.png';
import Music from '@/public/MusicIcon.png';
import Hero1 from '@/public/event1.png';
import Hero2 from '@/public/Event2.png';
import Hero3 from '@/public/Event3.png';
import Hero from '@/public/EventBackground.png';
import Image from 'next/image';
import Gallery from '../about/_component/gallery';

const page = () => {
  return (
    <div>
      <div className="md:h-[60vh] h-[70vw] flex items-center justify-center w-full relative font-sans mb-20">
        <Image
          src={Hero}
          alt="hero section for about page"
          className="bg-cover bg-center absolute w-full h-700"
        />
        <div className="absolute inset-0 flex items-center justify-start px-20">
          <div
            className="text-white flex flex-col items-start"
            data-aos="fade-up"
          >
            <h1 className="text-5xl font-bold relative pb-2 pt-20 mt-40">
              Experience the Power of
              <br />
              <span className="relative inline-block">
                Worship and the Word
              </span>
              {/* <span className="absolute left-0 bottom-0 w-[50%] h-1 bg-violet-500"></span> */}
            </h1>
            <p className="md:text-xl mt-4">
              Access sermons, worship sessions, and memorable moments from Nii
              Kwei Ministries.
            </p>
          </div>
        </div>
      </div>

      {/*BUTTONS*/}
      <div className="flex space-x-4 px-20 mt-[-20]">
        <button className="bg-button text-white py-2 px-6 rounded-lg hover:bg-green-600 focus:outline-none z-[1000]">
          Watch Sermons
        </button>
        <button className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-button focus:outline-none z-[1000]">
          View Gallery
        </button>
      </div>

      {/*Video Section..........................................................................*/}

      <div className="py-10 px-20 text-center mt-20">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold">
          Latest Content
          <div className="w-16 h-1 bg-violet-500 mx-auto mt-2 "></div>
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
          <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600">
            View All
          </button>
        </div>
      </div>

      {/*the Gallery section */}
      <div>
        <Gallery />
      </div>



      {/*THE RESOURCE SECTION*/}


<div className="py-10 px-4 lg:px-20">
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