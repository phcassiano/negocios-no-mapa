import React from 'react';
import { MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-1.5 rounded text-white">
              <MapPin size={20} />
            </div>
            <div>
              <span className="text-lg font-bold text-white">Negócio no Mapa</span>
              <span className="text-xs font-semibold text-brand-500 ml-1">BSB</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex gap-6 text-sm font-medium">
             <a href="#services" className="hover:text-brand-500 transition-colors">Serviços</a>
             <a href="#faq" className="hover:text-brand-500 transition-colors">Perguntas Frequentes</a>
             <a href="#contact" className="hover:text-brand-500 transition-colors text-white font-bold">Fale Conosco</a>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Negócio no Mapa BSB.</p>
            <p className="mt-1">Brasília - Distrito Federal</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;