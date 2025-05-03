'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-black/25 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-blue-100 tracking-tight hover:text-gray-200 transition-colors duration-300"
            >
              Nihal Khan Ghauri
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-gray-200 font-medium text-sm uppercase tracking-wide group"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {item.label}
                </span>
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-blue-600 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white p-2 rounded-md bg-transparent"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
          } overflow-hidden`}
        >
          <div
                className={`md:hidden transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
              } overflow-hidden`}
            >
               <div className="flex flex-col space-y-4 py-6 text-center">
          {navItems.map((item, index) => (
             <Link
               key={item.label}
               href={item.href}
               className="text-blue-100 text-md font-medium uppercase tracking-wide group"
               onClick={() => setIsOpen(false)}
               style={{ transitionDelay: `${index * 50}ms` }}
           >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          {item.label}
        </span>
         <span className="absolute inset-x-6 -bottom-0.5 h-0.5 bg-white opacity-0 group-hover:opacity-100 scale-x-0  group-hover:scale-x-100 transition-all duration-300"></span>
             </Link>
             ))}
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;