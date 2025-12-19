import React, { useEffect, useState } from 'react';
import { TrendingUp, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-white">
      
      {/* Background Elements */}
      <div 
        className="absolute -top-32 left-0 right-0 h-[150%] z-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ 
               backgroundImage: 'radial-gradient(#9aa0a6 1.5px, transparent 1.5px)', 
               backgroundSize: '32px 32px' 
             }}>
        </div>
        
        <div className="absolute top-32 -left-4 w-96 h-96 bg-google-blue/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-32 -right-4 w-96 h-96 bg-google-red/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-64 left-20 w-96 h-96 bg-google-yellow/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-96 right-20 w-72 h-72 bg-google-green/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold text-sm mb-8 shadow-sm backdrop-blur-sm">
              <Star size={16} className="fill-google-yellow text-google-yellow" />
              <span>Especialistas em Google Meu Negócio em Brasília</span>
            </div>
          </div>
          
          <h1 className="animate-fade-in-up opacity-0 text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight" style={{ animationDelay: '0.3s' }}>
            Coloque sua empresa no <br className="hidden md:block" />
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-google-red to-google-yellow">
                topo das buscas
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-google-green/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> locais.
          </h1>
          
          <p className="animate-fade-in-up opacity-0 text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.5s' }}>
            Ajudamos empresas de Brasília a atraírem mais clientes otimizando sua presença no Google Maps. Seja encontrado por quem procura o que você vende.
          </p>
          
          <div className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.7s' }}>
            <a 
              href="#contact"
              className="group w-full sm:w-auto px-8 py-4 bg-google-blue text-white font-bold rounded-xl shadow-xl hover:bg-brand-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
              <TrendingUp size={22} />
              Quero Vender Mais
              <ArrowRight size={18} className="opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-bold rounded-xl shadow-md border border-gray-200 hover:bg-gray-50 hover:text-google-blue hover:border-google-blue/30 transition-all duration-300 text-lg flex items-center justify-center"
            >
              Ver Serviços
            </a>
          </div>

          <div className="animate-fade-in-up opacity-0 mt-16 pt-8 border-t border-gray-200/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-12" style={{ animationDelay: '0.9s' }}>
             <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                <CheckCircle2 size={18} className="text-google-green" />
                <span>Mais Visibilidade</span>
             </div>
             <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                <CheckCircle2 size={18} className="text-google-red" />
                <span>Mais Ligações</span>
             </div>
             <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                <CheckCircle2 size={18} className="text-google-blue" />
                <span>Mais Vendas</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;