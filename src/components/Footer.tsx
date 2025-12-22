"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Instagram,
  Mail,
} from 'lucide-react';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/NihalGhauri', 
      aria: 'GitHub Profile',
      hoverBg: 'hover:bg-gray-400',
      hoverText: 'hover:text-black',
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=nihal-khan-ghauri-93a9a627b', 
      aria: 'LinkedIn Profile',
      hoverBg: 'hover:bg-blue-500',
      hoverText: 'hover:text-white',
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/nihal.khan_ghouri/', 
      aria: 'Instagram Profile',
      hoverBg: 'hover:bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#FDCB58]',
      hoverText: 'hover:text-white',
    },
    { 
      icon: Mail, 
      href: 'mailto:nihalghouri321@gmail.com', 
      aria: 'Send Email',
      hoverBg: 'hover:bg-red-500',
      hoverText: 'hover:text-white',
    },
    {
  icon: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-whatsapp"
      viewBox="0 0 16 16"
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  ),
  href: 'https://www.instagram.com/nihal.khan_ghouri',
  aria: 'WhatsApp Number',
  hoverBg: 'hover:bg-green-500',
  hoverText: 'hover:text-white',
}

  ];

 return (
    <footer className="bg-black border-t text-gray-300 py-12">

       <div className='sm:hidden items-center mb-4 '>
                      <div className='flex flex-col text-center text-md gap-5'>
                          {navItems.map((item) =>
                              <Link
                                  key={item.label}
                                  href={item.href}
                                  className='text-gray-400 font-semibold'
                                  >
                                  {item.label}
                              </Link>)}
                      </div>
                  </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, aria, hoverBg, hoverText }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={aria}
                className={`
                  p-2
                  rounded-full
                  text-gray-400
                  transition-all
                  duration-300
                  ease-in-out
                  transform
                  hover:scale-110
                  ${hoverBg}
                  ${hoverText}
                `}
              >
                <Icon size={24} strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>
      </div>
       <div className=" border-gray-800 mt-2 pt-6 text-center">
        <p className="text-gray-500">
          © {currentYear} Nihal Khan Ghauri. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
