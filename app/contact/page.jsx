import Hero from '@/public/ContactBack.png';
import Image from 'next/image';
import Location from '@/public/Location_Icon.png';
import Clock from '@/public/Clock.png';
import Email from '@/public/Email.png';
import Call from '@/public/Call.png'


const page = () => {
  return (
    <div>
      <div className="h-[70vh] flex items-center justify-center w-full relative font-sans">
      {/* Hero Image */}
      <Image
        src={Hero}
        alt="hero section for about page"
        className="bg-cover bg-center absolute w-full h-full"
      />

      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4 md:px-20">
        <div
          className="text-white flex flex-col items-start"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-5xl font-bold relative pb-1">
            Contact Us
            <span className="absolute left-0 bottom-0 w-[50%] h-1 bg-violet-500"></span>
          </h1>

          <p className="text-sm md:text-lg mt-4">
            We'd love to hear from you! Reach out for inquiries, prayer
            requests, or to get involved.
          </p>
        </div>
      </div>
    </div>
      <div className="py-10 px-4 lg:px-20">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-800">
          Send Us a Message
          <div className="w-16 h-1 bg-violet-500 mt-2"></div>
        </h2>

        {/* Contact Form */}
        <form className="mt-4 space-y-3 border border-gray-300 rounded-lg p-4">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="+233 123 456 789"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message here..."
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            ></textarea>
          </div>

          {/* Submit Button */}
        </form>
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-teal-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
      </div>

      {/*LOCATION HERE*/}


      <div className="my-16 px-4 md:px-8 lg:px-20 text-left">
  {/* Location Section */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 relative">
          Our Location
          <span className="absolute left-0 bottom-0 w-[10%] h-1 bg-violet-500"></span>
        </h2>
        <p className="mb-8 flex items-center gap-2">
          <Image src={Location} alt="LocationIcon" className="w-5 h-5" />
          123 Faith Avenue, Accra, Ghana
        </p>
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-16">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.963938407878!2d-0.19222268467843605!3d5.603722696218088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfc7e1eaa7d4b5%3A0x35e5a74e3c4f7793!2sKofi%20Kuma%20to%20Kofi%20Kuma%20Ministry!5e0!3m2!1sen!2sgh!4v1630246465454!5m2!1sen!2sgh"
            className="w-full h-full border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Information Section */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 relative">
          Contact Information
          <span className="absolute left-0 bottom-0 w-[10%] h-1 bg-violet-500"></span>
        </h2>
        <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg border border-gray-300">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <Image src={Call} alt="Phone Icon" className="w-6 h-6" />
              <span className="text-sm md:text-lg">+233 123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Email} alt="Email Icon" className="w-6 h-6" />
              <span className="text-sm md:text-lg">info@niikweiministries.org</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Clock} alt="Clock Icon" className="w-6 h-6" />
              <span className="text-sm md:text-lg">Monday - Friday, 9:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page