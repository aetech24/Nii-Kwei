
import Hero from '@/public/Background.png';
import Singer1 from '@/public/Image1.png';
import Singer2 from '@/public/Image2.png';
// import Founder2 from '@/public/Image2.png';
// import Founder3 from '@/public/Image3.png';
import Image from 'next/image';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Gallery from './_component/gallery';
import TeamSection from './_component/team';
import Values from './_component/values';

const page = () => {
  return (
    <div>
      <div className="md:h-[60vh] h-[70vw] flex items-center justify-center w-full relative font-sans">
        <Image
          src={Hero}
          alt="hero section for about page"
          className="bg-cover bg-center absolute w-full h-700"
        />
        <div className="absolute inset-0 flex items-center justify-start  px-20">
          <div
            className="text-white flex flex-col items-start"
            data-aos="fade-up"
          >
            <h1 className="text-5xl font-bold relative pb-1">
              About Us
              <span className="absolute left-0 bottom-0 w-[50%] h-1 bg-violet-500"></span>
            </h1>
            <p className="md:text-xl mt-4">
              Who we are and What we do
            </p>
          </div>
        </div>
      </div>

       {/* the Vision and Mission Section */}

      <div className="py-10 flex flex-col gap-10 lg:px-20 px-4">
        <div className='py-10 flex flex-col gap-10'>
          <div className='grid grid-cols-2 items-center gap-10' data-aos="fade-right">
          <Image src={Singer1} alt="Founder1" width={700} height={500} />
            <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold relative pb-1">
              Our Vision
              <span className="absolute left-0 bottom-0 w-[25%] h-1 bg-violet-500"></span>
            </h1>
              <ul>
                <li className="text-lg">Our vision to create a world transformed by faith, love,
                     and service, where every individual experiences the life-changing power of God’s 
                     grace and becomes a beacon of hope in their community
                </li>
                
              </ul>
            </div>
           
          </div>

          

          <div className='flex flex-col md:flex-row items-center justify-between gap-10 mt-20' data-aos="fade-right">
            <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold relative pb-1">
              Our Mission
              <span className="absolute left-0 bottom-0 w-[25%] h-1 bg-violet-500"></span>
            </h1>
              <ul>
                <li className="text-lg">At Nii Kwei Ministries, we empower individuals through dynamic worship,
                     impactful outreach, and intentional community building, inspiring spiritual growth and equipping
                      believers to serve with compassion and excellence</li>
                
              </ul>
            </div>
            <Image src={Singer2} alt="Singer Nii Kwei" width={700} height={500} />
          </div>
        </div>
      </div>



      {/*The Team Section */}

      <div>
        <TeamSection/>
      </div>

      {/*Core Values Section */}
      <div>
        <Values/>
      </div>

      {/*the Gallery section */}
      <div>
        <Gallery/>

      </div>




    </div>
  );
}

export default page