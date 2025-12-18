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
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-brand-600 p-2 rounded-lg text-white">
              <MapPin size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">Negócio no Mapa</h1>
              <span className="text-xs font-semibold text-brand-600 tracking-wider">BSB</span>
            </div>
          </div>

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
              className="bg-brand-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-brand-700 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:scale-105 flex items-center gap-2"
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
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
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
               className="block w-full text-center mt-4 bg-brand-600 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform"
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