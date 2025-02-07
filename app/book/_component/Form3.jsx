"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import Image from 'next/image';
import { preferred } from "@/constants/booking";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Form3 = ({ formData, onChange, errors }) => {
  const handleMinisterSelect = (minister) => {
    onChange({
      target: {
        name: 'selectedMinister',
        value: minister.name
      }
    });
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <label className="block mb-4 text-lg font-medium">Select Preferred Minister</label>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination'
            }}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="minister-swiper"
          >
            {preferred.map((minister, index) => (
              <SwiperSlide key={index}>
                <div 
                  className={`rounded-lg border-2 cursor-pointer transition-all ${
                    formData.selectedMinister === minister.name 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => handleMinisterSelect(minister)}
                >
                  <div className="relative w-full h-[300px] mb-3">
                    <Image
                      src={minister.image}
                      alt={minister.name}
                      fill
                      className="object-fill "
                    />
                  </div>
                  <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{minister.name}</h3>
                  <p className="text-gray-600">{minister.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-6"></div>
        </div>
        {errors?.selectedMinister && (
          <span className="text-red-500 text-sm block mt-2">{errors.selectedMinister}</span>
        )}
      </div>

      <form>
        {/* Event Preferences */}
        <div className="mb-6">
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Expected Audience Size</label>
              <input
                type="number"
                name="guestCount"
                placeholder="Enter the number of expected number of attendees"
                value={formData.guestCount || ''}
                onChange={onChange}
                className="w-full border p-3 rounded-md"
                min="1"
              />
              {errors?.guestCount && (
                <span className="text-red-500 text-sm block mt-2">{errors.guestCount}</span>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mb-6">
          <h2 className="font-medium mb-3">
            Special Request
          </h2>
          <textarea
            name="additionalInfo"
            placeholder="Enter any special request or additional information"
            value={formData.additionalInfo || ''}
            onChange={onChange}
            className="w-full border p-3 rounded-md"
            rows={6}
          />
          {errors?.additionalInfo && (
            <span className="text-red-500 text-sm block mt-2">{errors.additionalInfo}</span>
          )}
        </div>
      </form>

      <style jsx global>{`
        .minister-swiper {
          padding: 20px 10px;
          margin-bottom: 40px;
        }
        .minister-swiper .swiper-button-next,
        .minister-swiper .swiper-button-prev {
          color: #8B5CF6;
        }
        .swiper-pagination {
          position: relative !important;
          bottom: -20px !important;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          margin: 0 6px;
        }
        .swiper-pagination-bullet-active {
          background: #8B5CF6;
        }
      `}</style>
    </div>
  );
};

export default Form3
