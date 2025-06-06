"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const Smart = () => {
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
      href="https://github.com/zammera/Smart_Shopper"
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <div
        ref={cardRef}
        style={{
          background: "linear-gradient(45deg, #40826d, #8db600)",
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
            backgroundImage: "url('/smart.png')",
          }}
        />
        <div
          className="text-white px-6 py-4"
          style={{ gridArea: "text", transform: "translateZ(30px)" }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold">SmartShopper</h2>
          <p className="text-sm text-gray-300 mt-1 mb-3">
            Firebase, Bootstrap, JavaScript, Google API
          </p>
          <p>
            Built and deployed a full stack, web app service that creates grocery lists,
            tracking price history for items, and finding the cheapest nearby deals.
          </p>
        </div>
      </div>
    </a>
  );
};

export default Smart;
