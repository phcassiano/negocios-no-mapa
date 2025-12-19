import React, { useState } from 'react';
import { Menu, X, MapPin, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Por que nós?', href: '#why-us' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
            <div className="bg-white border-2 border-google-red p-1.5 rounded-lg text-google-red shadow-sm">
              <MapPin size={24} className="fill-google-red text-google-red" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-tight">
                <span className="text-google-blue">Negócio</span> <span className="text-gray-600">no</span> <span className="text-google-green">Mapa</span>
              </h1>
              <span className="text-xs font-bold text-google-yellow tracking-wider bg-yellow-50 px-1 rounded">BSB</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-600 transition-colors duration-200 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5511968122868"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#128C7E] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a
               href="https://wa.me/5511968122868"
               target="_blank"
               rel="noopener noreferrer"
               className="block w-full text-center mt-4 bg-[#25D366] text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;