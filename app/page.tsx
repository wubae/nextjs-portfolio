import Smart from '../components/Smart';
import Retina from '../components/Retina';
import Web from '../components/Web';
import Tech from '../components/Tech';

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Shared content wrapper */}
      <div className="px-8 sm:px-16 lg:px-[250px]">
        
        {/* Fullscreen Centered Intro */}
        <section className="min-h-screen flex items-center justify-center text-center mt-[-600px]">
          <h2 className="text-white text-3xl font-bold">
            I am a Software Engineer from Boston ☘️
          </h2>
        </section>

        <div className="max-w-[180px] mb-0 mt-0 p-[10px] rounded-[20px]
          bg-gradient-to-br from-[#295270] to-[#524175] text-center
          shadow-[4px_4px_10px_rgba(0,0,0,0.2)]">
          <h2 className="text-white text-2xl font-bold">
            Projects
          </h2>
        </div>

        {/* Card Section */}
        <section className="flex flex-wrap justify-center items-start gap-8 py-16">
              <Smart />
              <Retina />
              <Web />
        </section>

        <div className="max-w-[180px] mb-0 mt-0 p-[10px] rounded-[20px]
          bg-gradient-to-br from-[#295270] to-[#524175] text-center
          shadow-[4px_4px_10px_rgba(0,0,0,0.2)]">
          <h2 className="text-white text-2xl font-bold">
            Technology
          </h2>
        </div>

        <Tech />

      </div>
    </main>
  );
}
