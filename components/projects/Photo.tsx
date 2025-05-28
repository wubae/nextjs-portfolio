"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const Photo = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 30,
        scale: 1.1,
        glare: true,
        "max-glare": 0.5,
      });
    }
    
  }, []);

  return (
    <a
      href="https://github.com/wubae/photomagic"
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <div
        ref={cardRef}
        style={{
          background: "linear-gradient(45deg, #c31432, #240b36)",
        }}
        className="w-[300px] h-[500px] grid grid-rows-[210px_290px] grid-cols-[300px]
                   [grid-template-areas:'image''text'] 
                   rounded-3xl shadow-2xl text-center cursor-pointer m-6 
                   transform-style-3d perspective-[1000px]"
      >
        <div
          className="rounded-t-3xl bg-cover bg-center"
          style={{
            gridArea: "image",
            backgroundImage: "url('/photo.png')",
          }}
        />
        <div
          className="text-white px-6 py-4"
          style={{ gridArea: "text", transform: "translateZ(30px)" }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold">PhotoMagic</h2>
          <p className="text-sm text-gray-300 mt-1 mb-3">
            SFML, C++, Makefile, Boost
          </p>
          <p>
          Built an image encryption tool using a 16-bit
           Fibonacci LFSR algorithm to encode and decode pixel data through bitwise 
           transformations, with validation by Boost testing.
          </p>
        </div>
      </div>
    </a>
  );
};

export default Photo;
