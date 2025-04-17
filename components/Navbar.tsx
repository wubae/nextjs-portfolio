  import Image from 'next/image';
  import Link from 'next/link';

  export default function Nav() {
    return (
      <nav className="w-full fixed top-0 left-0 z-[1000] bg-[#333]/40 backdrop-blur-md px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center ml-4 sm:ml-50">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Profile"
                width={62}
                height={47}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Right - Links */}
          <div className="flex items-center mr-4 sm:mr-50">
            <Link
              href="#resume"
              className="text-white text-lg sm:text-xl hover:text-[#5DB996] transition-colors duration-300"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>
    );
  }
