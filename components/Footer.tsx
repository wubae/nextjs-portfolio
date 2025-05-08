import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1f1f1f] text-white px-5 py-4 flex flex-wrap items-center justify-between mt-24 relative bottom-0">
      {/* Left Side */}
      <div className="flex items-center gap-3 ml-[400px] max-[1000px]:ml-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={45}
            className="object-contain"
          />
        </Link>
        <span className="text-[1.1rem] font-semibold">Wu Li 2025</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5 mr-[400px] mt-0 max-[1000px]:mr-0 max-[1000px]:mt-2">
        <a
          href="https://github.com/wubae"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-[1.5rem] hover:text-[#ccc] transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/liwuhui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-[1.5rem] hover:text-[#ccc] transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:liwuhui5@gmail.com"
          className="text-white text-[1.5rem] hover:text-[#ccc] transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}
