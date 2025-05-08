'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const images = ['/bay.jpg', '/ramen.jpg', '/leb.jpg'];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const TIME_PER_IMAGE = 10000; // 10 seconds
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isModalOpen && startTimer) {
      intervalRef.current = setTimeout(() => {
        if (currentIndex < images.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          closeModal(); // close on last image
        }
      }, TIME_PER_IMAGE);
    }

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [currentIndex, isModalOpen, startTimer]);

  const openModal = () => {
    setCurrentIndex(0);
    setIsModalOpen(true);
    setStartTimer(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIndex(0);
    setStartTimer(false);
    if (intervalRef.current) clearTimeout(intervalRef.current);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const prevImage = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="w-full min-h-screen flex justify-center items-start pt-[20px]">
        <div className="flex items-center gap-8">
          <div
            onClick={openModal}
            className="w-[160px] h-[160px] rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center p-[5px] cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden bg-white">
              <Image
                src="/pro.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <h1 className="text-white text-[45px] font-bold leading-tight mb-0">
            Hello 🙋🏻‍♂️,<br /> I am Wu Li
          </h1>
        </div>
      </div>

      {/* Modal with Progress + Controls */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="relative w-[360px] h-[640px] bg-black rounded-xl shadow-lg overflow-hidden pointer-events-auto">

            {/* Thin Progress Bars */}
            <div className="absolute top-0 left-0 w-full flex gap-1 px-2 py-2 z-20">
              {images.map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden"
                >
                  <div
                    className={`h-full bg-gray-300 transition-all duration-[15000ms] ${
                      i < currentIndex ? 'w-full' : i === currentIndex ? 'w-full animate-fill' : 'w-0'
                    }`}
                    style={
                      i === currentIndex
                        ? {
                            animation: `fillBar ${TIME_PER_IMAGE}ms linear forwards`,
                          }
                        : {}
                    }
                  ></div>
                </div>
              ))}
            </div>

            {/* Image */}
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-300 text-xl z-20 transition"
            >
              ✕
            </button>

            {/* Left Arrow */}
            {currentIndex > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-2xl z-20 transition"
              >
                ◀
              </button>
            )}

            {/* Right Arrow */}
            {currentIndex < images.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-2xl z-20 transition"
              >
                ▶
              </button>
            )}
          </div>
        </div>
      )}

      {/* Global Keyframe */}
      <style jsx global>{`
        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
