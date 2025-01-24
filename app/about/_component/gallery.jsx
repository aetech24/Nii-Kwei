import Image from 'next/image';
import image3 from '@/public/Image3.png';
import image4 from '@/public/Image4.png';
import image5 from '@/public/Image5.png';
import image6 from '@/public/Image6.png';
import image7 from '@/public/Image7.png';

const Gallery = () => {
    const images = [
       image4, image5, image6,image7,
    ];

  
    return (
      <div className="my-16 lg:text-center mt-10 px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-5 relative pb-1">
        Gallery
        <span className="absolute left-0 lg:left-1/2 bottom-0 w-[15%] rounded-full h-1.5 bg-violet-500"></span>
        </h2>
        <p className="mb-5">Capturing moments of worship</p>
        <div className="max-md:flex-col flex gap-5">
          <Image placeholder='blur'
            src={image3} 
            alt="Gallery Image" 
            className="rounded-lg col-span-1 max-lg:w-full"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {images.map((src, index) => (
              <Image placeholder='blur'
                key={index}
                src={src}
                alt={`Gallery Image ${index + 2}`} 
                className="rounded-lg max-lg:w-full"
              />
            ))}
          </div>
        </div>
        <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 mt-6">
            View All
          </button>
      </div>
    );
  };
  
  export default Gallery;