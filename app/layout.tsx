// app/layout.tsx
import './globals.css';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import Aurora from '../components/Aurora';
import Hero from '../components/Hero';
import type { ReactNode } from 'react';

// app/layout.tsx
export const metadata = {
  title: "Wu Li"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Aurora background effect behind everything */}
        <div className="relative w-full h-[40vh] overflow-hidden">
          <Aurora
            colorStops={['#3A29FF', '#FF94B4', '#FF3232']}
            blend={0.4}
            amplitude={0.5}
            speed={1.0}
          />
        </div>
        <Hero />
        {/* Content on top of aurora */}
        <Nav />
        
        <main className="flex-grow pt-[72px] z-10 relative">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
