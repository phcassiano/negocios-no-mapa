import React from 'react';
import { TrendingUp, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-50">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Dot Pattern Grid */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ 
               backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', 
               backgroundSize: '32px 32px' 
             }}>
        </div>
        
        {/* Animated Blobs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-brand-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-primary-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-100 text-brand-700 font-semibold text-sm mb-8 shadow-sm backdrop-blur-sm">
              <Star size={16} className="fill-brand-600 text-brand-600" />
              <span>Especialistas em Google Meu Negócio em Brasília</span>
            </div>
          </div>
          
          {/* Headline */}
          <h1 className="animate-fade-in-up opacity-0 text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight" style={{ animationDelay: '0.3s' }}>
            Coloque sua empresa no <br className="hidden md:block" />
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-primary-600">
                topo das buscas
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> locais.
          </h1>
          
          {/* Subheadline */}
          <p className="animate-fade-in-up opacity-0 text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.5s' }}>
            Ajudamos empresas de Brasília a atraírem mais clientes otimizando sua presença no Google Maps. Seja encontrado por quem procura o que você vende.
          </p>
          
          {/* CTA Buttons */}
          <div className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.7s' }}>
            <a 
              href="#contact"
              className="group w-full sm:w-auto px-8 py-4 bg-brand-600 text-white font-bold rounded-xl shadow-xl hover:bg-brand-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
              <TrendingUp size={22} />
              Quero Vender Mais
              <ArrowRight size={18} className="opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-xl shadow-md border border-slate-200 hover:bg-slate-50 hover:text-brand-600 hover:border-brand-200 transition-all duration-300 text-lg flex items-center justify-center"
            >
              Ver Serviços
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-in-up opacity-0 mt-16 pt-8 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-12" style={{ animationDelay: '0.9s' }}>
             <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                <CheckCircle2 size={18} className="text-brand-500" />
                <span>Mais Visibilidade</span>
             </div>
             <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                <CheckCircle2 size={18} className="text-brand-500" />
                <span>Mais Ligações</span>
             </div>
             <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                <CheckCircle2 size={18} className="text-brand-500" />
                <span>Mais Vendas</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;