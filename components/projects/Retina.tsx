"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const Retina = () => {
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
      href="https://github.com/ejagojo/Retnify"
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <div
        ref={cardRef}
        style={{
          background: "linear-gradient(45deg, #30cfd0, #330867)",
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
            backgroundImage: "url('/resnet.png')",
          }}
        />
        <div
          className="text-white px-6 py-4"
          style={{ gridArea: "text", transform: "translateZ(30px)" }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold">ResNet-50 SE</h2>
          <p className="text-sm text-gray-300 mt-1 mb-3">
            PyTorch, ResNet/VGG16, Medical Imaging, matplotlib, seaborn, Jupyter Notebook
          </p>
          <p className="text-sm">
          Developed a deep learning pipeline for retinal disease classification using OCT 
          images, comparing the performance with two baseline models, a refined model, and ResNet-50 with
          SE blocks.
          </p>
        </div>
      </div>
    </a>
  );
};

export default Retina;
